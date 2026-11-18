"""Extract Word-doc embedded images and optimize to WebP for the site."""

from pathlib import Path
from zipfile import ZipFile

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "OneDrive_1_11-14-2026" / "recent feedbacks" / "Changes to be made.docx"
OUT = ROOT / "src" / "assets" / "images"
TMP = ROOT / "scripts" / "_word_media"

# Word media name -> output webp + max side
JOBS = [
    ("image1.jpeg", "about.webp", 1600),
    ("image1.jpeg", "support.webp", 1600),
    ("image2.jpeg", "architecture.webp", 1600),
    ("image2.jpeg", "project-infrastructure.webp", 1600),
    ("image2.jpeg", "structured-cabling.webp", 1600),
    ("image3.jpeg", "security.webp", 1600),
    ("image4.jpeg", "sdwan.webp", 1600),
    ("image4.jpeg", "project-cloud.webp", 1600),
    ("image5.jpeg", "project-cybersecurity.webp", 1600),
    ("image6.jpeg", "project-procurement.webp", 1600),
    ("image7.jpeg", "project-recovery.webp", 1600),
    ("image8.jpeg", "project-workplace.webp", 1600),
    ("image9.png", "radome.webp", 1600),
    ("image10.png", "radome-secondary.webp", 1600),
]


def extract_media() -> None:
    TMP.mkdir(parents=True, exist_ok=True)
    with ZipFile(DOCX) as z:
        for name in z.namelist():
            if name.startswith("word/media/"):
                dest = TMP / Path(name).name
                dest.write_bytes(z.read(name))
                print(f"extracted {dest.name}")


def convert(src_name: str, out_name: str, max_side: int) -> None:
    src = TMP / src_name
    if not src.exists():
        print(f"MISSING {src}")
        return
    img = Image.open(src).convert("RGB")
    width, height = img.size
    scale = min(1.0, max_side / max(width, height))
    if scale < 1.0:
        img = img.resize((int(width * scale), int(height * scale)), Image.Resampling.LANCZOS)
    dest = OUT / out_name
    img.save(dest, "WEBP", quality=82, method=6)
    print(f"OK {out_name} <- {src_name} ({img.size[0]}x{img.size[1]}, {dest.stat().st_size} bytes)")


def main() -> None:
    if not DOCX.exists():
        raise SystemExit(f"Word doc not found: {DOCX}")
    OUT.mkdir(parents=True, exist_ok=True)
    extract_media()
    for job in JOBS:
        convert(*job)


if __name__ == "__main__":
    main()
