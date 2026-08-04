from pathlib import Path
from shutil import copyfile

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "brand" / "zucco-symbol-gradient.png"
ICON_DIR = ROOT / "public" / "brand" / "icons"
TILE_FILL = "#F8FAFF"
TILE_BORDER = "#DCE7FF"
SUPERSAMPLING = 4


def build_icon(size: int, *, platform_masked: bool = False) -> Image.Image:
    canvas_size = size * SUPERSAMPLING
    canvas = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    if platform_masked:
        draw.rectangle((0, 0, canvas_size, canvas_size), fill=TILE_FILL)
    else:
        tile_inset = max(SUPERSAMPLING, round(canvas_size * 0.025))
        tile_radius = round(canvas_size * 0.21)
        border_width = max(SUPERSAMPLING, round(canvas_size * 0.012))
        tile_bounds = (
            tile_inset,
            tile_inset,
            canvas_size - tile_inset - 1,
            canvas_size - tile_inset - 1,
        )
        draw.rounded_rectangle(
            tile_bounds,
            radius=tile_radius,
            fill=TILE_FILL,
            outline=TILE_BORDER,
            width=border_width,
        )

    with Image.open(SOURCE).convert("RGBA") as source:
        alpha_bounds = source.getchannel("A").getbbox()
        if alpha_bounds is None:
            raise ValueError(f"O símbolo não possui pixels visíveis: {SOURCE}")
        symbol = source.crop(alpha_bounds)

    target_height = round(canvas_size * 0.76)
    target_width = round(target_height * symbol.width / symbol.height)
    symbol = symbol.resize((target_width, target_height), Image.Resampling.LANCZOS)
    position = (
        (canvas_size - target_width) // 2,
        (canvas_size - target_height) // 2,
    )
    canvas.alpha_composite(symbol, position)

    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def main() -> None:
    ICON_DIR.mkdir(parents=True, exist_ok=True)

    outputs = {
        ICON_DIR / "zucco-icon-512.png": build_icon(512),
        ICON_DIR / "zucco-apple-touch-180.png": build_icon(
            180, platform_masked=True
        ),
        ICON_DIR / "zucco-favicon-32.png": build_icon(32),
    }

    for path, image in outputs.items():
        image.save(path, optimize=True)

    copyfile(ICON_DIR / "zucco-icon-512.png", ROOT / "src" / "app" / "icon.png")
    copyfile(
        ICON_DIR / "zucco-apple-touch-180.png",
        ROOT / "src" / "app" / "apple-icon.png",
    )


if __name__ == "__main__":
    main()
