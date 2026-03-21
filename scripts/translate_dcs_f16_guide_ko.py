#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path


TRANSLATE_URL = "https://translate.googleapis.com/translate_a/single"


def load_pages(path: Path) -> list[dict[str, object]]:
    return json.loads(path.read_text(encoding="utf-8"))


def load_existing(path: Path, count: int) -> list[str]:
    if not path.exists():
        return [""] * count
    raw = json.loads(path.read_text(encoding="utf-8"))
    if raw and isinstance(raw[0], dict):
        result = [""] * count
        for item in raw:
            page = int(item["page"])
            result[page - 1] = str(item.get("text", ""))
        return result
    result = list(raw)
    while len(result) < count:
        result.append("")
    return result[:count]


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


def write_outputs(output_json: Path, output_js: Path, translations: list[str]) -> None:
    json_payload = [
        {"page": index, "text": text}
        for index, text in enumerate(translations, start=1)
    ]
    output_json.write_text(
        json.dumps(json_payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
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
    translations = load_existing(args.output_json, len(pages))

    for index, item in enumerate(pages, start=1):
        if translations[index - 1]:
            continue

        text = str(item.get("text", ""))
        if not text.strip():
            translations[index - 1] = ""
            continue

        chunks = split_chunks(text, args.max_chars)
        translated_chunks: list[str] = []
        for chunk in chunks:
            translated_chunks.append(translate_chunk(chunk, args.pause_ms))
        translations[index - 1] = "\n\n".join(
            part.strip() for part in translated_chunks if part.strip()
        )
        write_outputs(args.output_json, args.output_js, translations)

        if index == 1 or index % 20 == 0 or index == len(pages):
            print(f"[translator] Translated page {index}/{len(pages)}", file=sys.stderr)

    write_outputs(args.output_json, args.output_js, translations)
    print(f"[translator] Done. Output: {args.output_json}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
