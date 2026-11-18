"""Generate favicons from client SE mark using original client colors/background."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public"
LOGO = ROOT / "src" / "assets" / "logo" / "septnet-logo.png"
# Exact background from client's original favicon.png
BG = (240, 240, 240, 255)


def extract_monogram(logo_path: Path) -> Image.Image:
    """Crop SE mark left of divider; keep original navy/gray colors."""
    logo = Image.open(logo_path).convert("RGBA")
    width, height = logo.size
    crop = logo.crop((0, 0, int(width * 0.255), height))
    pixels = crop.load()

    min_x, min_y = crop.width, crop.height
    max_x, max_y = 0, 0
    found = False
    for y in range(crop.height):
        for x in range(crop.width):
            r, g, b, a = pixels[x, y]
            if a > 20 and (r > 25 or g > 25 or b > 25):
                found = True
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)

    if not found:
        raise RuntimeError(f"Could not locate SE monogram in {logo_path}")

    mark = crop.crop((min_x, min_y, max_x + 1, max_y + 1)).convert("RGBA")
    px = mark.load()
    for y in range(mark.height):
        for x in range(mark.width):
            r, g, b, a = px[x, y]
            # Drop black logo canvas; keep navy/gray ink untouched
            if r < 28 and g < 28 and b < 28:
                px[x, y] = (0, 0, 0, 0)
    return mark


def make_favicon(size: int, mark: Image.Image) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), BG)
    # Larger mark = more visible, without changing brand colors/bg
    padding = max(1, int(size * 0.10))
    max_w = size - padding * 2
    max_h = size - padding * 2
    scale = min(max_w / mark.width, max_h / mark.height)
    new_w = max(1, int(mark.width * scale))
    new_h = max(1, int(mark.height * scale))
    resized = mark.resize((new_w, new_h), Image.Resampling.LANCZOS)
    x = (size - new_w) // 2
    y = (size - new_h) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    mark = extract_monogram(LOGO)
    print(f"extracted mark {mark.size}")

    outputs = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon-48x48.png": 48,
        "apple-touch-icon.png": 180,
        "favicon.png": 512,
    }

    for name, size in outputs.items():
        path = OUT / name
        make_favicon(size, mark).save(path, "PNG", optimize=True)
        print(f"wrote {path.name} ({path.stat().st_size} bytes)")

    ico_images = [make_favicon(s, mark) for s in (16, 32, 48)]
    ico_path = OUT / "favicon.ico"
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[1:],
    )
    print(f"wrote {ico_path.name} ({ico_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
