from __future__ import annotations

import json
from pathlib import Path

from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "brand"
LOGO_SVG = BRAND / "logos" / "svg"
LOGO_PNG = BRAND / "logos" / "png"
LINKEDIN = BRAND / "social" / "linkedin"
FONT_PATH = BRAND / "fonts" / "InterVariable.ttf"

NAVY = "#081A33"
BLUE = "#1747E8"
RED = "#EF4C36"
PAPER = "#FBFAF7"
WHITE = "#FFFFFF"
BLACK = "#000000"

MARK_WIDTH = 552
MARK_HEIGHT = 686
LEFT_MARK = [
    (254, 0),
    (166, 56),
    (165, 300),
    (86, 299),
    (86, 104),
    (0, 156),
    (0, 529),
    (86, 580),
    (86, 395),
    (165, 394),
    (166, 630),
    (255, 686),
]
RIGHT_MARK = [
    (300, 0),
    (303, 686),
    (552, 531),
    (552, 394),
    (467, 395),
    (467, 484),
    (386, 532),
    (386, 154),
    (467, 204),
    (467, 300),
    (552, 300),
    (552, 153),
]
LEFT_PATH = "M254 0 L166 56 L165 300 L86 299 L86 104 L0 156 L0 529 L86 580 L86 395 L165 394 L166 630 L255 686 Z"
RIGHT_PATH = "M300 0 L303 686 L552 531 L552 394 L467 395 L467 484 L386 532 L386 154 L467 204 L467 300 L552 300 L552 153 Z"


def ensure_directories() -> None:
    for directory in (LOGO_SVG, LOGO_PNG, LINKEDIN):
        directory.mkdir(parents=True, exist_ok=True)


def write_text(path: Path, value: str) -> None:
    path.write_text(value, encoding="utf-8", newline="\n")


def svg_document(title: str, view_box: tuple[float, float, float, float], body: str) -> str:
    x, y, width, height = view_box
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x:g} {y:g} {width:g} {height:g}" role="img" aria-label="{title}">
  <title>{title}</title>
{body}
</svg>
'''


def mark_group(fill: str, indent: str = "  ") -> str:
    return (
        f'{indent}<g fill="{fill}">\n'
        f'{indent}  <path d="{LEFT_PATH}"/>\n'
        f'{indent}  <path d="{RIGHT_PATH}"/>\n'
        f'{indent}</g>'
    )


def generate_monogram_svgs() -> list[Path]:
    outputs: list[Path] = []
    colors = {
        "navy": NAVY,
        "blue": BLUE,
        "black": BLACK,
        "white": WHITE,
    }
    for name, color in colors.items():
        path = LOGO_SVG / f"hartnett-capital-monogram-{name}.svg"
        write_text(
            path,
            svg_document(
                f"Hartnett Capital HC monogram — {name}",
                (0, 0, MARK_WIDTH, MARK_HEIGHT),
                mark_group(color),
            ),
        )
        outputs.append(path)
    return outputs


def outlined_text_paths(
    font: TTFont,
    text: str,
    font_size: float,
    tracking: float,
    x: float,
    baseline: float,
) -> tuple[str, float]:
    glyph_set = font.getGlyphSet()
    cmap = font.getBestCmap()
    units_per_em = font["head"].unitsPerEm
    scale = font_size / units_per_em
    cursor = x
    paths: list[str] = []

    for index, character in enumerate(text):
        glyph_name = cmap[ord(character)]
        if character != " ":
            pen = SVGPathPen(glyph_set)
            glyph_set[glyph_name].draw(pen)
            commands = pen.getCommands()
            paths.append(
                f'    <path d="{commands}" transform="translate({cursor:.3f} {baseline:.3f}) scale({scale:.8f} {-scale:.8f})"/>'
            )
        advance = font["hmtx"].metrics[glyph_name][0] * scale
        cursor += advance
        if index < len(text) - 1:
            cursor += tracking

    return "\n".join(paths), cursor - x


def load_wordmark_font() -> TTFont:
    source = TTFont(FONT_PATH)
    return instantiateVariableFont(source, {"opsz": 14, "wght": 800}, inplace=False)


def generate_wordmark_svgs() -> list[Path]:
    font = load_wordmark_font()
    outputs: list[Path] = []
    font_size = 300.0
    tracking = font_size * 0.15
    cap_height = font["OS/2"].sCapHeight * font_size / font["head"].unitsPerEm
    line_gap = 76.0

    first_paths, first_width = outlined_text_paths(font, "HARTNETT", font_size, tracking, 0, cap_height)
    second_baseline = cap_height * 2 + line_gap
    second_paths, second_width = outlined_text_paths(font, "CAPITAL", font_size, tracking, 0, second_baseline)
    stacked_width = max(first_width, second_width)
    stacked_height = second_baseline

    horizontal_paths, horizontal_width = outlined_text_paths(
        font,
        "HARTNETT CAPITAL",
        270.0,
        40.5,
        0,
        font["OS/2"].sCapHeight * 270.0 / font["head"].unitsPerEm,
    )
    horizontal_height = font["OS/2"].sCapHeight * 270.0 / font["head"].unitsPerEm

    for name, color in (("navy", NAVY), ("white", WHITE)):
        stacked_path = LOGO_SVG / f"hartnett-capital-wordmark-stacked-{name}.svg"
        write_text(
            stacked_path,
            svg_document(
                f"Hartnett Capital stacked wordmark — {name}",
                (0, 0, stacked_width, stacked_height),
                f'  <g fill="{color}">\n{first_paths}\n{second_paths}\n  </g>',
            ),
        )
        outputs.append(stacked_path)

        horizontal_path = LOGO_SVG / f"hartnett-capital-wordmark-horizontal-{name}.svg"
        write_text(
            horizontal_path,
            svg_document(
                f"Hartnett Capital horizontal wordmark — {name}",
                (0, 0, horizontal_width, horizontal_height),
                f'  <g fill="{color}">\n{horizontal_paths}\n  </g>',
            ),
        )
        outputs.append(horizontal_path)

        stacked_text_x = MARK_WIDTH + 250
        stacked_text_y = (MARK_HEIGHT - stacked_height) / 2
        lockup_width = stacked_text_x + stacked_width
        lockup_body = (
            f'  <g fill="{color}">\n'
            f'    <path d="{LEFT_PATH}"/>\n'
            f'    <path d="{RIGHT_PATH}"/>\n'
            f'    <g transform="translate({stacked_text_x:g} {stacked_text_y:g})">\n'
            f'{first_paths}\n{second_paths}\n'
            f'    </g>\n'
            f'  </g>'
        )
        lockup_path = LOGO_SVG / f"hartnett-capital-lockup-stacked-{name}.svg"
        write_text(
            lockup_path,
            svg_document(
                f"Hartnett Capital HC monogram with stacked wordmark — {name}",
                (0, 0, lockup_width, MARK_HEIGHT),
                lockup_body,
            ),
        )
        outputs.append(lockup_path)

        horizontal_text_x = MARK_WIDTH + 230
        horizontal_text_y = (MARK_HEIGHT - horizontal_height) / 2
        horizontal_lockup_width = horizontal_text_x + horizontal_width
        horizontal_body = (
            f'  <g fill="{color}">\n'
            f'    <path d="{LEFT_PATH}"/>\n'
            f'    <path d="{RIGHT_PATH}"/>\n'
            f'    <g transform="translate({horizontal_text_x:g} {horizontal_text_y:g})">\n'
            f'{horizontal_paths}\n'
            f'    </g>\n'
            f'  </g>'
        )
        horizontal_lockup_path = LOGO_SVG / f"hartnett-capital-lockup-horizontal-{name}.svg"
        write_text(
            horizontal_lockup_path,
            svg_document(
                f"Hartnett Capital HC monogram with horizontal wordmark — {name}",
                (0, 0, horizontal_lockup_width, MARK_HEIGHT),
                horizontal_body,
            ),
        )
        outputs.append(horizontal_lockup_path)

    font.close()
    return outputs


def draw_mark(draw: ImageDraw.ImageDraw, box: tuple[float, float, float, float], fill: str) -> None:
    x, y, width, height = box
    scale = min(width / MARK_WIDTH, height / MARK_HEIGHT)
    actual_width = MARK_WIDTH * scale
    actual_height = MARK_HEIGHT * scale
    offset_x = x + (width - actual_width) / 2
    offset_y = y + (height - actual_height) / 2

    def transform(points: list[tuple[int, int]]) -> list[tuple[float, float]]:
        return [(offset_x + px * scale, offset_y + py * scale) for px, py in points]

    draw.polygon(transform(LEFT_MARK), fill=fill)
    draw.polygon(transform(RIGHT_MARK), fill=fill)


def save_monogram_png(path: Path, height: int, fill: str) -> None:
    scale_factor = 4
    width = round(height * MARK_WIDTH / MARK_HEIGHT)
    image = Image.new("RGBA", (width * scale_factor, height * scale_factor), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    draw_mark(draw, (0, 0, image.width, image.height), fill)
    image.resize((width, height), Image.Resampling.LANCZOS).save(path, "PNG", optimize=True)


def inter_font(size: int, weight: str = "Regular") -> ImageFont.FreeTypeFont:
    face = ImageFont.truetype(str(FONT_PATH), size=size)
    face.set_variation_by_name(weight)
    return face


def georgia_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    names = ("georgiab.ttf", "Georgia Bold.ttf") if bold else ("georgia.ttf", "Georgia.ttf")
    roots = (
        Path("C:/Windows/Fonts"),
        Path("/Library/Fonts"),
        Path.home() / "Library" / "Fonts",
        Path("/usr/share/fonts/truetype/msttcorefonts"),
    )
    for root in roots:
        for name in names:
            candidate = root / name
            if candidate.exists():
                return ImageFont.truetype(str(candidate), size=size)
    raise FileNotFoundError("Georgia is required to regenerate the LinkedIn display line.")


def tracked_text_width(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.FreeTypeFont, tracking: float) -> float:
    return sum(draw.textlength(character, font=face) for character in text) + tracking * max(0, len(text) - 1)


def draw_tracked_text(
    draw: ImageDraw.ImageDraw,
    position: tuple[float, float],
    text: str,
    face: ImageFont.FreeTypeFont,
    fill: str | tuple[int, int, int, int],
    tracking: float,
) -> float:
    x, y = position
    for character in text:
        draw.text((x, y), character, font=face, fill=fill)
        x += draw.textlength(character, font=face) + tracking
    return x


def save_lockup_png(path: Path, kind: str, fill: str, target_width: int) -> None:
    scale_factor = 3
    mark_height = 686 * scale_factor
    mark_width = 552 * scale_factor
    gap = (250 if kind == "stacked" else 230) * scale_factor
    face_size = (300 if kind == "stacked" else 270) * scale_factor
    tracking = face_size * 0.15
    face = inter_font(face_size, "ExtraBold")
    probe = Image.new("RGBA", (10, 10), (0, 0, 0, 0))
    probe_draw = ImageDraw.Draw(probe)

    if kind == "stacked":
        lines = ("HARTNETT", "CAPITAL")
        text_width = max(tracked_text_width(probe_draw, line, face, tracking) for line in lines)
        canvas_width = round(mark_width + gap + text_width)
        canvas_height = mark_height
    else:
        lines = ("HARTNETT CAPITAL",)
        text_width = tracked_text_width(probe_draw, lines[0], face, tracking)
        canvas_width = round(mark_width + gap + text_width)
        canvas_height = mark_height

    image = Image.new("RGBA", (canvas_width, canvas_height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    draw_mark(draw, (0, 0, mark_width, mark_height), fill)
    text_x = mark_width + gap

    if kind == "stacked":
        bbox = face.getbbox("HARTNETT")
        line_height = bbox[3] - bbox[1]
        line_gap = 76 * scale_factor
        block_height = line_height * 2 + line_gap
        y = (canvas_height - block_height) / 2 - bbox[1]
        draw_tracked_text(draw, (text_x, y), lines[0], face, fill, tracking)
        draw_tracked_text(draw, (text_x, y + line_height + line_gap), lines[1], face, fill, tracking)
    else:
        bbox = face.getbbox(lines[0])
        text_height = bbox[3] - bbox[1]
        y = (canvas_height - text_height) / 2 - bbox[1]
        draw_tracked_text(draw, (text_x, y), lines[0], face, fill, tracking)

    target_height = round(canvas_height * target_width / canvas_width)
    image.resize((target_width, target_height), Image.Resampling.LANCZOS).save(path, "PNG", optimize=True)


def generate_logo_pngs() -> list[Path]:
    outputs: list[Path] = []
    for name, color in (("navy", NAVY), ("blue", BLUE), ("black", BLACK), ("white", WHITE)):
        for height in (128, 256, 512, 1024):
            path = LOGO_PNG / f"hartnett-capital-monogram-{name}-{height}h.png"
            save_monogram_png(path, height, color)
            outputs.append(path)

    for name, color in (("navy", NAVY), ("white", WHITE)):
        stacked = LOGO_PNG / f"hartnett-capital-lockup-stacked-{name}-1200w.png"
        save_lockup_png(stacked, "stacked", color, 1200)
        outputs.append(stacked)
        horizontal = LOGO_PNG / f"hartnett-capital-lockup-horizontal-{name}-1600w.png"
        save_lockup_png(horizontal, "horizontal", color, 1600)
        outputs.append(horizontal)
    return outputs


def favicon_svg() -> str:
    padding = 32
    scale = (1024 - padding * 2) / MARK_HEIGHT
    width = MARK_WIDTH * scale
    x = (1024 - width) / 2
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-label="Hartnett Capital">
  <title>Hartnett Capital</title>
  <style>
    .mark {{ fill: {NAVY}; }}
    @media (prefers-color-scheme: dark) {{ .mark {{ fill: {WHITE}; }} }}
  </style>
  <g class="mark" transform="translate({x:.3f} {padding}) scale({scale:.8f})">
    <path d="{LEFT_PATH}"/>
    <path d="{RIGHT_PATH}"/>
  </g>
</svg>
'''


def generate_favicons() -> list[Path]:
    outputs: list[Path] = []
    svg_path = ROOT / "favicon.svg"
    write_text(svg_path, favicon_svg())
    outputs.append(svg_path)

    rendered: dict[int, Image.Image] = {}
    for size in (16, 32, 48, 180, 192, 512):
        scale_factor = 4 if size <= 48 else 2
        is_favicon = size <= 48
        canvas = Image.new(
            "RGBA" if is_favicon else "RGB",
            (size * scale_factor, size * scale_factor),
            (0, 0, 0, 0) if is_favicon else NAVY,
        )
        draw = ImageDraw.Draw(canvas)
        pad = size * scale_factor * (1 / 32 if is_favicon else 0.115)
        draw_mark(
            draw,
            (pad, pad, canvas.width - pad * 2, canvas.height - pad * 2),
            NAVY if is_favicon else WHITE,
        )
        rendered[size] = canvas.resize((size, size), Image.Resampling.LANCZOS)

    names = {
        16: "favicon-16x16.png",
        32: "favicon-32x32.png",
        180: "apple-touch-icon.png",
        192: "site-icon-192.png",
        512: "site-icon-512.png",
    }
    for size, filename in names.items():
        path = ROOT / filename
        rendered[size].save(path, "PNG", optimize=True)
        outputs.append(path)

    ico_path = ROOT / "favicon.ico"
    rendered[48].save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    outputs.append(ico_path)
    return outputs


def generate_linkedin_assets() -> list[Path]:
    outputs: list[Path] = []

    size = 1200
    logo = Image.new("RGB", (size, size), NAVY)
    logo_draw = ImageDraw.Draw(logo)
    logo_draw.rectangle((18, 18, size - 19, size - 19), outline=BLUE, width=12)
    draw_mark(logo_draw, (330, 245, 540, 710), WHITE)
    logo_path = LINKEDIN / "hartnett-capital-linkedin-logo.png"
    logo.save(logo_path, "PNG", optimize=True)
    outputs.append(logo_path)

    width, height = 2256, 382
    banner = Image.new("RGB", (width, height), NAVY)
    overlay = Image.new("RGBA", banner.size, (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(overlay)
    for x in range(0, width, 64):
        grid_draw.line((x, 0, x, height), fill=(255, 255, 255, 18), width=1)
    for y in range(0, height, 64):
        grid_draw.line((0, y, width, y), fill=(255, 255, 255, 18), width=1)
    banner = Image.alpha_composite(banner.convert("RGBA"), overlay)
    draw = ImageDraw.Draw(banner)
    draw.polygon([(1740, -80), (1870, -80), (2205, 462), (2075, 462)], fill=RED)
    draw.ellipse((1900, -240, 2430, 290), outline=BLUE, width=72)
    draw_mark(draw, (124, 94, 148, 184), WHITE)
    draw.line((318, 78, 318, 304), fill=(255, 255, 255, 86), width=2)

    wordmark = inter_font(39, "ExtraBold")
    descriptor = inter_font(20, "ExtraBold")
    statement = georgia_font(47)
    draw_tracked_text(draw, (372, 66), "HARTNETT", wordmark, WHITE, 5.8)
    draw_tracked_text(draw, (372, 112), "CAPITAL", wordmark, WHITE, 5.8)
    draw.text(
        (374, 178),
        "PRIVATE INVESTMENT & OPERATING COMPANY  /  McLEAN, VIRGINIA",
        font=descriptor,
        fill=(223, 231, 255, 255),
    )
    draw.text((372, 231), "Building enduring value.", font=statement, fill=WHITE)
    banner_path = LINKEDIN / "hartnett-capital-linkedin-banner.png"
    banner.convert("RGB").save(banner_path, "PNG", optimize=True)
    outputs.append(banner_path)
    return outputs


def generate_manifest(outputs: list[Path]) -> Path:
    path = BRAND / "manifest.json"
    manifest = {
        "brand": "Hartnett Capital",
        "version": "1.0.0",
        "sourceMark": "/hc-logo.svg",
        "colors": {
            "navy": NAVY,
            "blue": BLUE,
            "red": RED,
            "paper": PAPER,
            "white": WHITE,
            "black": BLACK,
        },
        "assets": [str(output.relative_to(ROOT)).replace("\\", "/") for output in outputs],
    }
    write_text(path, json.dumps(manifest, indent=2) + "\n")
    return path


def main() -> None:
    ensure_directories()
    outputs: list[Path] = []
    outputs.extend(generate_monogram_svgs())
    outputs.extend(generate_wordmark_svgs())
    outputs.extend(generate_logo_pngs())
    outputs.extend(generate_favicons())
    outputs.extend(generate_linkedin_assets())
    manifest = generate_manifest(outputs)
    print(f"Generated {len(outputs)} brand assets.")
    print(manifest)


if __name__ == "__main__":
    main()
