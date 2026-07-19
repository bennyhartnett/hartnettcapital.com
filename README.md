# hartnettcapital.com

A multi-page investment and operating company website built from reusable page modules and a shared master layout.

## Site structure

- `/` — Homepage
- `/firm` — Company overview
- `/strategy` — Acquisition and operating approach
- `/criteria` — Investment criteria
- `/partnerships` — Partnership audiences and philosophy
- `/contact` — Opportunity inquiries

Page content lives in `src/pages`, while global navigation, metadata, footer, styling, and browser behavior are centralized in `src`.

`npm run build` generates the root static files GitHub Pages publishes and the Sites-compatible server bundle from the same source.
