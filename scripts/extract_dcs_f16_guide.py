#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from pypdf import PdfReader


@dataclass
class OutlineEntry:
    id: str
    title: str
    depth: int
    page_start: int | None
    page_end: int | None = None
    path: list[str] = field(default_factory=list)


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value or "section"


def normalize_text(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n").replace("\u00a0", " ")
    text = text.replace("\x00", "")
    lines = [re.sub(r"[ \t]+", " ", line).rstrip() for line in text.split("\n")]

    cleaned: list[str] = []
    blank_run = 0
    for line in lines:
        if not line.strip():
            blank_run += 1
            if blank_run <= 1:
                cleaned.append("")
            continue
        blank_run = 0
        cleaned.append(line.strip())
    return "\n".join(cleaned).strip()


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def page_number_for(reader: PdfReader, item: Any) -> int | None:
    try:
        return reader.get_destination_page_number(item) + 1
    except Exception:
        return None


def flatten_outline(items: list[Any], reader: PdfReader) -> list[OutlineEntry]:
    entries: list[OutlineEntry] = []
    counters: dict[str, int] = {}

    def add_entry(title: str, depth: int, page_start: int | None, parents: list[str]) -> None:
        base = slugify("-".join(parents + [title]))
        counters[base] = counters.get(base, 0) + 1
        suffix = f"-{counters[base]}" if counters[base] > 1 else ""
        entries.append(
            OutlineEntry(
                id=f"{base}{suffix}",
                title=title.strip(),
                depth=depth,
                page_start=page_start,
                path=[*parents, title.strip()],
            )
        )

    def walk(node_list: list[Any], depth: int, parents: list[str]) -> None:
        last_title: str | None = None
        for node in node_list:
            if isinstance(node, list):
                walk(node, depth + 1, parents + ([last_title] if last_title else []))
                continue
            title = getattr(node, "title", str(node)).strip()
            add_entry(title, depth, page_number_for(reader, node), parents)
            last_title = title

    walk(items, 0, [])
    return entries


def apply_page_ranges(entries: list[OutlineEntry], page_count: int) -> None:
    for index, entry in enumerate(entries):
        if entry.page_start is None:
            continue

        page_end = page_count
        for next_entry in entries[index + 1 :]:
            if next_entry.page_start is None:
                continue
            if next_entry.depth <= entry.depth:
                page_end = max(entry.page_start, next_entry.page_start - 1)
                break
        entry.page_end = page_end


def tree_from_flat(entries: list[OutlineEntry]) -> list[dict[str, Any]]:
    roots: list[dict[str, Any]] = []
    stack: list[dict[str, Any]] = []

    for entry in entries:
        node = {
            "id": entry.id,
            "title": entry.title,
            "depth": entry.depth,
            "pageStart": entry.page_start,
            "pageEnd": entry.page_end,
            "path": entry.path,
            "children": [],
        }

        while stack and stack[-1]["depth"] >= entry.depth:
            stack.pop()

        if stack:
            stack[-1]["children"].append(node)
        else:
            roots.append(node)
        stack.append(node)

    return roots


def extract_page_text(page: Any) -> str:
    try:
        text = page.extract_text() or ""
    except Exception as exc:
        return f"[extract_error] {exc}"

    if text.strip():
        return normalize_text(text)

    try:
        text = page.extract_text(extraction_mode="layout") or ""
    except Exception as exc:
        return f"[extract_error] {exc}"
    return normalize_text(text)


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def write_js_bundle(path: Path, manifest: dict[str, Any], page_texts: list[str]) -> None:
    payload = (
        "window.__DCS_F16_GUIDE_MANIFEST__ = "
        + json.dumps(manifest, ensure_ascii=False)
        + ";\n"
        + "window.__DCS_F16_GUIDE_PAGES__ = "
        + json.dumps(page_texts, ensure_ascii=False)
        + ";\n"
    )
    path.write_text(payload, encoding="utf-8")


def write_outline_markdown(path: Path, entries: list[OutlineEntry]) -> None:
    lines = ["# DCS F-16C Viper Guide Outline", ""]
    for entry in entries:
        indent = "  " * entry.depth
        page_label = "N/A"
        if entry.page_start is not None and entry.page_end is not None:
            if entry.page_start == entry.page_end:
                page_label = f"p.{entry.page_start}"
            else:
                page_label = f"pp.{entry.page_start}-{entry.page_end}"
        elif entry.page_start is not None:
            page_label = f"p.{entry.page_start}"
        lines.append(f"{indent}- {entry.title} ({page_label})")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_full_markdown(
    path: Path,
    pdf_path: Path,
    page_texts: list[str],
    metadata: dict[str, Any],
) -> None:
    with path.open("w", encoding="utf-8") as handle:
        handle.write("# DCS F-16C Viper Guide Extract\n\n")
        handle.write(f"- Source PDF: `{pdf_path}`\n")
        handle.write(f"- Total pages: `{len(page_texts)}`\n")
        handle.write(
            f"- Extracted at: `{datetime.now(timezone.utc).astimezone().isoformat()}`\n"
        )
        if metadata:
            handle.write("- PDF metadata:\n")
            for key, value in metadata.items():
                handle.write(f"  - `{key}`: `{value}`\n")
        handle.write("\n")

        for index, text in enumerate(page_texts, start=1):
            handle.write(f"## Page {index}\n\n")
            handle.write((text or "[No extractable text]").strip())
            handle.write("\n\n")


def section_filename(entry: OutlineEntry) -> str:
    return f"{entry.page_start or 0:04d}-{entry.id}.md"


def write_root_sections(
    sections_dir: Path,
    entries: list[OutlineEntry],
    page_texts: list[str],
) -> None:
    ensure_dir(sections_dir)
    root_entries = [entry for entry in entries if entry.depth == 0 and entry.page_start]

    for entry in root_entries:
        start = entry.page_start or 1
        end = entry.page_end or start
        section_path = sections_dir / section_filename(entry)
        with section_path.open("w", encoding="utf-8") as handle:
            handle.write(f"# {entry.title}\n\n")
            handle.write(f"- Pages: `{start}` to `{end}`\n")
            handle.write(f"- Section ID: `{entry.id}`\n\n")
            for page_number in range(start, end + 1):
                handle.write(f"## Page {page_number}\n\n")
                handle.write((page_texts[page_number - 1] or "[No extractable text]").strip())
                handle.write("\n\n")


def write_pages_json(path: Path, page_texts: list[str]) -> None:
    payload = [
        {"page": index, "text": text}
        for index, text in enumerate(page_texts, start=1)
    ]
    write_json(path, payload)


def render_page_images(
    pdf_path: Path,
    image_dir: Path,
    page_count: int,
    image_scale: float,
    image_quality: int,
    progress_label: str,
) -> None:
    try:
        import fitz
    except ImportError as exc:
        raise RuntimeError(
            "PyMuPDF is required for --render-page-images. Install it with: python3 -m pip install --user pymupdf"
        ) from exc

    ensure_dir(image_dir)
    document = fitz.open(str(pdf_path))
    matrix = fitz.Matrix(image_scale, image_scale)

    for page_index in range(page_count):
        page = document.load_page(page_index)
        pixmap = page.get_pixmap(matrix=matrix, alpha=False)
        image_path = image_dir / f"page-{page_index + 1:04d}.jpg"
        pixmap.save(image_path, jpg_quality=image_quality)
        if page_index == 0 or (page_index + 1) % 25 == 0 or page_index + 1 == page_count:
            print(
                f"[extractor] Rendered {progress_label} {page_index + 1}/{page_count}",
                file=sys.stderr,
            )


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Extract the DCS F-16C Viper Guide PDF into readable markdown and JSON."
    )
    parser.add_argument("pdf", type=Path, help="Path to the source PDF")
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("generated/dcs_f16_guide"),
        help="Directory where extracted files will be written",
    )
    parser.add_argument(
        "--render-page-images",
        action="store_true",
        help="Render low-resolution page images alongside extracted text",
    )
    parser.add_argument(
        "--image-scale",
        type=float,
        default=0.95,
        help="Scale factor for inline reader page images",
    )
    parser.add_argument(
        "--image-quality",
        type=int,
        default=72,
        help="JPEG quality for inline reader page images",
    )
    parser.add_argument(
        "--hd-image-scale",
        type=float,
        default=1.8,
        help="Scale factor for full-screen modal page images",
    )
    parser.add_argument(
        "--hd-image-quality",
        type=int,
        default=84,
        help="JPEG quality for full-screen modal page images",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    pdf_path = args.pdf.expanduser().resolve()
    output_dir = args.output_dir.expanduser().resolve()

    if not pdf_path.exists():
        print(f"PDF not found: {pdf_path}", file=sys.stderr)
        return 1

    ensure_dir(output_dir)
    ensure_dir(output_dir / "sections")
    image_dir = output_dir / "page_images"
    image_hd_dir = output_dir / "page_images_hd"

    print(f"[extractor] Opening PDF: {pdf_path}", file=sys.stderr)
    reader = PdfReader(str(pdf_path))
    page_count = len(reader.pages)
    metadata = {key: str(value) for key, value in (reader.metadata or {}).items()}

    print("[extractor] Reading outline", file=sys.stderr)
    outline_entries = flatten_outline(reader.outline, reader)
    apply_page_ranges(outline_entries, page_count)
    outline_tree = tree_from_flat(outline_entries)

    page_texts: list[str] = []
    for index, page in enumerate(reader.pages, start=1):
        page_texts.append(extract_page_text(page))
        if index == 1 or index % 25 == 0 or index == page_count:
            print(f"[extractor] Extracted page {index}/{page_count}", file=sys.stderr)

    manifest = {
        "title": metadata.get("/Title", pdf_path.stem),
        "sourcePdf": str(pdf_path),
        "pageCount": page_count,
        "extractedAt": datetime.now(timezone.utc).astimezone().isoformat(),
        "pageImageDir": "page_images" if args.render_page_images else None,
        "pageImageHdDir": "page_images_hd" if args.render_page_images else None,
        "pageImageFormat": "jpg" if args.render_page_images else None,
        "metadata": metadata,
        "outline": [
            {
                "id": entry.id,
                "title": entry.title,
                "depth": entry.depth,
                "pageStart": entry.page_start,
                "pageEnd": entry.page_end,
                "path": entry.path,
            }
            for entry in outline_entries
        ],
        "tree": outline_tree,
    }

    if args.render_page_images:
        print("[extractor] Rendering page images", file=sys.stderr)
        render_page_images(
            pdf_path=pdf_path,
            image_dir=image_dir,
            page_count=page_count,
            image_scale=args.image_scale,
            image_quality=args.image_quality,
            progress_label="preview image",
        )
        render_page_images(
            pdf_path=pdf_path,
            image_dir=image_hd_dir,
            page_count=page_count,
            image_scale=args.hd_image_scale,
            image_quality=args.hd_image_quality,
            progress_label="HD image",
        )

    print("[extractor] Writing files", file=sys.stderr)
    write_json(output_dir / "guide_manifest.json", manifest)
    write_json(output_dir / "outline.json", manifest["outline"])
    write_json(output_dir / "outline_tree.json", outline_tree)
    write_pages_json(output_dir / "pages.json", page_texts)
    write_js_bundle(output_dir / "guide_bundle.js", manifest, page_texts)
    write_outline_markdown(output_dir / "outline.md", outline_entries)
    write_full_markdown(output_dir / "full_text.md", pdf_path, page_texts, metadata)
    write_root_sections(output_dir / "sections", outline_entries, page_texts)

    print(f"[extractor] Done. Output: {output_dir}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
