"""Optimize client-supplied photos into WebP assets for the site."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "OneDrive_1_11-14-2026"
OUT = ROOT / "src" / "assets" / "images"

JOBS = [
    (
        "about.webp",
        "Images to Upload/it-technician-holding-ethernet-patch-cable-standing-on-ladder-beside-network-server-rack-in-data-center-free-photo.jpg",
        1400,
    ),
    (
        "project-infrastructure.webp",
        "Images to Upload/symmetrical-aisle-of-server-racks-with-blue-floor-arrows-in-a-modern-data-center-photo.jpeg",
        1400,
    ),
    (
        "project-cloud.webp",
        "Images to Upload/construction-technology-systems-in-a-modern-building-environment-with-network-servers-and-equipment-photo.jpg",
        1400,
    ),
    (
        "project-cybersecurity.webp",
        "close-up-of-illuminated-server-connections-showcasing-active-network-cables-in-a-data-center-photo.jpg",
        1400,
    ),
    (
        "project-procurement.webp",
        "server-in-data-center-room-photo.jpg",
        1400,
    ),
    (
        "project-recovery.webp",
        "Images to Upload/031519-Telecom-IMAGE.png",
        1400,
    ),
    (
        "project-workplace.webp",
        "Images to Upload/network-system-in-the-server-room-global-communications-photo.jpg",
        1400,
    ),
    (
        "radome.webp",
        "Images to Upload/Helmeted Workers by Spherical Radome.png",
        1400,
    ),
    (
        "satellite-dish.webp",
        "Images to Upload/Satellite Dish.png",
        1400,
    ),
]


def convert(out_name: str, rel: str, max_side: int) -> None:
    src = SRC / rel
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
    print(f"OK {out_name} -> {dest.stat().st_size} bytes ({img.size[0]}x{img.size[1]})")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for job in JOBS:
        convert(*job)


if __name__ == "__main__":
    main()
