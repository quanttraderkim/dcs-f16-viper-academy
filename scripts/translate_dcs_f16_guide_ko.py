#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path


TRANSLATE_URL = "https://translate.googleapis.com/translate_a/single"


def load_pages(path: Path) -> list[dict[str, object]]:
    return json.loads(path.read_text(encoding="utf-8"))


def page_source_hash(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()


def load_existing(path: Path, source_hashes: list[str]) -> tuple[list[str], list[str]]:
    count = len(source_hashes)
    if not path.exists():
        return [""] * count, [""] * count

    raw = json.loads(path.read_text(encoding="utf-8"))
    if raw and isinstance(raw[0], dict):
        translations = [""] * count
        stored_hashes = [""] * count
        for item in raw:
            page = int(item["page"])
            index = page - 1
            translations[index] = str(item.get("text", ""))
            stored_hashes[index] = str(item.get("sourceHash", "")) or source_hashes[index]
        return translations, stored_hashes

    translations = list(raw)
    while len(translations) < count:
        translations.append("")
    translations = translations[:count]
    stored_hashes = [
        source_hashes[index] if str(text).strip() else ""
        for index, text in enumerate(translations)
    ]
    return translations, stored_hashes


def split_chunks(text: str, max_chars: int) -> list[str]:
    cleaned = text.strip()
    if not cleaned:
        return [""]

    paragraphs = [part.strip() for part in cleaned.split("\n\n") if part.strip()]
    chunks: list[str] = []
    current = ""

    for paragraph in paragraphs:
        if len(paragraph) > max_chars:
            lines = [line.strip() for line in paragraph.split("\n") if line.strip()]
            for line in lines:
                if len(line) > max_chars:
                    for start in range(0, len(line), max_chars):
                        piece = line[start : start + max_chars]
                        if current:
                            chunks.append(current)
                            current = ""
                        chunks.append(piece)
                    continue
                candidate = f"{current}\n{line}".strip() if current else line
                if len(candidate) <= max_chars:
                    current = candidate
                else:
                    chunks.append(current)
                    current = line
            continue

        candidate = f"{current}\n\n{paragraph}".strip() if current else paragraph
        if len(candidate) <= max_chars:
            current = candidate
        else:
            chunks.append(current)
            current = paragraph

    if current:
        chunks.append(current)
    return chunks or [cleaned]


def translate_chunk(text: str, pause_ms: int) -> str:
    if not text:
        return ""
    params = {
        "client": "gtx",
        "sl": "en",
        "tl": "ko",
        "dt": "t",
        "q": text,
    }
    url = f"{TRANSLATE_URL}?{urllib.parse.urlencode(params)}"
    request = urllib.request.Request(url, headers={"User-Agent": "codex"})
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.load(response)
    translated = "".join(part[0] for part in payload[0] if part and part[0])
    if pause_ms:
        time.sleep(pause_ms / 1000)
    return translated


def write_outputs(
    output_json: Path,
    output_js: Path,
    translations: list[str],
    source_hashes: list[str],
    *,
    emit_js: bool,
) -> None:
    json_payload = [
        {"page": index, "text": text, "sourceHash": source_hash}
        for index, (text, source_hash) in enumerate(
            zip(translations, source_hashes),
            start=1,
        )
    ]
    output_json.write_text(
        json.dumps(json_payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    if emit_js:
        output_js.write_text(
            "window.__DCS_F16_GUIDE_PAGES_KO__ = "
            + json.dumps(translations, ensure_ascii=False)
            + ";\n",
            encoding="utf-8",
        )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Translate extracted DCS F-16 guide pages into Korean and emit a browser bundle."
    )
    parser.add_argument(
        "--pages-json",
        type=Path,
        default=Path("generated/dcs_f16_guide/pages.json"),
        help="Path to extracted pages JSON",
    )
    parser.add_argument(
        "--output-json",
        type=Path,
        default=Path("generated/dcs_f16_guide/page_translations_ko.json"),
        help="Path to translated page JSON output",
    )
    parser.add_argument(
        "--output-js",
        type=Path,
        default=Path("generated/dcs_f16_guide/guide_bundle_ko.js"),
        help="Path to translated browser bundle output",
    )
    parser.add_argument(
        "--max-chars",
        type=int,
        default=2400,
        help="Maximum characters per translation request chunk",
    )
    parser.add_argument(
        "--pause-ms",
        type=int,
        default=120,
        help="Pause between translation requests in milliseconds",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    pages = load_pages(args.pages_json)
    current_source_hashes = [page_source_hash(str(item.get("text", ""))) for item in pages]
    translations, stored_source_hashes = load_existing(args.output_json, current_source_hashes)

    for index, item in enumerate(pages, start=1):
        text = str(item.get("text", ""))
        source_hash = current_source_hashes[index - 1]

        if translations[index - 1] and stored_source_hashes[index - 1] == source_hash:
            continue

        if not text.strip():
            translations[index - 1] = ""
            stored_source_hashes[index - 1] = source_hash
            continue

        chunks = split_chunks(text, args.max_chars)
        translated_chunks: list[str] = []
        for chunk in chunks:
            translated_chunks.append(translate_chunk(chunk, args.pause_ms))
        translations[index - 1] = "\n\n".join(
            part.strip() for part in translated_chunks if part.strip()
        )
        stored_source_hashes[index - 1] = source_hash
        write_outputs(
            args.output_json,
            args.output_js,
            translations,
            stored_source_hashes,
            emit_js=False,
        )

        if index == 1 or index % 20 == 0 or index == len(pages):
            print(f"[translator] Translated page {index}/{len(pages)}", file=sys.stderr)

    write_outputs(
        args.output_json,
        args.output_js,
        translations,
        stored_source_hashes,
        emit_js=True,
    )
    print(f"[translator] Done. Output: {args.output_json}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
