# hartnettcapital.com

A multi-page family office website built from reusable page modules and a shared master layout.

## Site structure

- `/` — Homepage
- `/firm` — Firm overview
- `/strategy` — Investment strategy
- `/criteria` — Investment criteria
- `/contact` — Private inquiries

Page content lives in `src/pages`, while global navigation, metadata, footer, styling, and browser behavior are centralized in `src`.

`npm run build` generates the root static files GitHub Pages publishes and the Sites-compatible server bundle from the same source.
