# Hartnett Capital Brand System

Version 1.0 — July 2026

This directory is the distribution-ready source of truth for Hartnett Capital's visual and verbal identity. The original HC geometry is preserved from `/hc-logo.svg`; the files in `logos/` provide fixed-color, portable exports for everyday use.

## Brand foundation

- **Brand:** Hartnett Capital
- **Category:** Private investment & operating company
- **Positioning:** A long-term owner and active operator of durable businesses and differentiated assets.
- **Master tagline:** Building enduring value.
- **Extended promise:** Building enduring value through ownership and operation.
- **Operating shorthand:** Acquire. Operate. Build. Hold.
- **Location:** McLean, Virginia

### Voice

Write with directness, patience, discipline, confidence, and discretion. Prefer short declarative sentences, active verbs, concrete operating language, and long-term framing. Avoid hype, trend language, financial-engineering jargon, and the deprecated phrase “independent family office.”

## Logo family

### Primary logo

Use `logos/svg/hartnett-capital-lockup-stacked-navy.svg` on light backgrounds. This combines the HC monogram with the stacked uppercase wordmark used by the website.

Use `logos/svg/hartnett-capital-lockup-stacked-white.svg` on navy, blue, red, photography, or other sufficiently dark fields.

### Alternate lockups

- **Horizontal lockup:** For wide, shallow applications such as signage, presentation footers, and sponsorship rows.
- **Stacked wordmark:** For contexts where the HC mark appears elsewhere or available width is constrained.
- **Horizontal wordmark:** For legal lines, partner lists, or quiet attribution.
- **Standalone monogram:** For avatars, favicons, app icons, watermarks, and small-format recognition.

### Approved colorways

- Navy `#081A33` on Paper, Ivory, or White
- White `#FFFFFF` on Navy, Blue, or Red
- Blue `#1747E8` standalone monogram on Paper or White
- Black `#000000` standalone monogram for one-color production

Do not recolor the two halves independently, add gradients or outlines, rotate, skew, crop, distort, or alter the central gap.

### Clearspace and minimum size

- Keep clearspace equal to at least 25% of the monogram's width on all sides.
- Minimum standalone monogram height: 24 px digital or 0.35 in / 9 mm print.
- Minimum lockup mark height: 31 px digital or 0.5 in / 13 mm print.
- Below the lockup minimum, use the standalone monogram.

## Color palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Navy | `#081A33` | Identity, dark fields, footer text |
| Deep | Navy Deep | `#051326` | Maximum-depth backgrounds |
| Interactive | Electric Blue | `#1747E8` | Links, rules, focus, geometry |
| Soft | Blue Soft | `#DFE7FF` | Panels and quiet emphasis |
| Signal | Red | `#EF4C36` | Signature geometry and large CTA fields |
| Warm | Ivory | `#F4F0E8` | Editorial section background |
| Base | Paper | `#FBFAF7` | Primary page surface |
| Text | Ink | `#101217` | Primary copy |
| Secondary text | Slate | `#626771` | Supporting copy |
| Reverse | White | `#FFFFFF` | Marks and text on dark fields |

Use Navy rather than small white copy on Red. White/Red has a 3.65:1 contrast ratio and is reserved for large display text and graphic marks. Navy/Red is 4.77:1 and passes WCAG AA for normal text.

Digital color is authoritative in sRGB. No Pantone or print-process conversion is approved without a physical proof.

## Typography

### Display serif

Georgia Regular is used for headlines, statements, numerals, and high-emphasis editorial copy. Use tight tracking between `-0.04em` and `-0.07em`, regular weight, and compact line heights between `0.85` and `1.0`.

Georgia is a system typeface and is not redistributed in this kit.

### Interface sans

Inter Variable is the canonical body, interface, navigation, label, and wordmark typeface. The included files are licensed under the SIL Open Font License 1.1; see `fonts/LICENSE.txt`.

- Body: 14–17 px, weight 400
- Lead: 18–25 px, weight 400
- Navigation and labels: 9–11 px, weight 800, uppercase, tracking `0.13em–0.17em`
- Wordmark: weight 800, uppercase, tracking `0.15em`

## Layout and graphic language

- Maximum content width: 1440 px
- Fluid page gutter: 24–64 px; 18 px below 720 px
- Section spacing: 96–165 px; 86 px below 720 px
- Core editorial split: approximately 30/70
- Borders: one-pixel structural rules; avoid decorative rounded cards
- Signature geometry: blue ring, red diagonal, architectural HC mark, and 44 px navy grid
- Interface icon: northeast arrow `↗`

## Motion

- Hover and navigation feedback: 160–180 ms
- Section reveal: 600 ms with 26 px vertical travel
- Ambient grid pulse: 4.8 seconds
- Always honor `prefers-reduced-motion`

## Social assets

`social/linkedin/` contains the approved profile tile and company-page banner. The website uses `/og.png` as the canonical link-preview image.

`social/archive/` contains previous concepts for reference only. Files containing “independent family office” are explicitly deprecated and must not be republished.

## File guide

- `logos/svg/` — outlined, production-ready vector artwork
- `logos/png/` — transparent raster exports in common sizes
- `fonts/` — Inter Variable desktop and web files plus license
- `social/linkedin/` — profile and banner artwork
- `social/archive/` — retired social-card concepts
- `manifest.json` — generated inventory of brand assets
- `tokens.json` — machine-readable design tokens

Regenerate the derivative logo, icon, and LinkedIn files with:

```powershell
python -m pip install -r scripts/requirements-brand.txt
python scripts/generate_brand_assets.py
```

Do not edit generated assets individually. Update the generator or source mark, then regenerate the complete family.
