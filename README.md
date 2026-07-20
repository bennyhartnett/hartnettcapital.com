# hartnettcapital.com

A multi-page investment and operating company website built from reusable page modules and a shared master layout.

## Site structure

- `/` — Homepage
- `/firm` — Company overview
- `/strategy` — Acquisition and operating approach
- `/focus` — Asset classes and areas of interest
  - `/focus/operating-companies`
  - `/focus/real-estate`
  - `/focus/software-platforms`
  - `/focus/digital-assets`
  - `/focus/data-information`
  - `/focus/intellectual-property-brands`
- `/criteria` — Investment criteria
- `/partnerships` — Partnership audiences and philosophy
  - `/partnerships/owners-founders`
  - `/partnerships/operators`
  - `/partnerships/strategic-partners`
- `/faq` — Frequently asked questions
- `/contact` — Opportunity inquiries
- `/sitemap` — Complete human-readable site directory

Page content lives in `src/pages`, while global navigation, metadata, footer, styling, and browser behavior are centralized in `src`.

`npm run build` generates the root static files GitHub Pages publishes and the Sites-compatible server bundle from the same source.

## Brand system

The distribution-ready brand kit, design tokens, logo family, fonts, social artwork, and usage rules live in [`brand/`](brand/README.md). Run `npm run brand:generate` after changing the source mark or brand asset generator.
