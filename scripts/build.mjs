import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderDocument } from "../src/layout.mjs";
import { notFoundPage, pages } from "../src/pages/index.mjs";

const root = resolve(import.meta.dirname, "..");
const outDir = resolve(root, "dist", "server");
const siteOrigin = "https://hartnettcapital.com";
const [styles, clientScript, socialCard, logo] = await Promise.all([
  readFile(resolve(root, "src", "styles.css"), "utf8"),
  readFile(resolve(root, "src", "client.js"), "utf8"),
  readFile(resolve(root, "og-v5.png")),
  readFile(resolve(root, "hc-logo.svg"), "utf8"),
]);

const renderedPages = Object.fromEntries(
  pages.map((page) => [page.path, renderDocument(page, styles, clientScript)]),
);
const notFoundHtml = renderDocument(notFoundPage, styles, clientScript);
const staticPages = pages.map((page) => ({
  ...page,
  html: renderDocument(page, styles, clientScript, siteOrigin),
}));
const staticNotFoundHtml = renderDocument(notFoundPage, styles, clientScript, siteOrigin);
const sitemapPaths = pages.map((page) => page.path);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapPaths
  .map((path) => `<url><loc>${siteOrigin}${path}</loc></url>`)
  .join("")}</urlset>`;
const llmsText = `# Hartnett Capital

> Hartnett Capital is a privately held investment and operating company founded and headquartered in McLean, Virginia.

## Core facts

- Hartnett Capital acquires, builds, operates, improves, partners with, and holds durable businesses and differentiated assets.
- Focus areas include operating companies, commercial and residential real estate, software and platforms, digital assets, proprietary data, intellectual property, brands, media properties, and infrastructure.
- The firm creates value through active operations, technology, automation, data, capital, strong relationships, and long-term ownership.
- Hartnett Capital works with owners, founders, independent operators, property owners, developers, investors, family offices, advisors, intermediaries, and strategic partners.

## Primary pages

- [About Hartnett Capital](${siteOrigin}/firm/): Company overview, perspective, values, and ownership philosophy.
- [What We Do](${siteOrigin}/strategy/): Acquisition, operating, building, improvement, partnership, and holding approach.
- [Focus Areas](${siteOrigin}/focus/): Asset classes and areas of investment interest.
- [Investment Criteria](${siteOrigin}/criteria/): Characteristics considered when evaluating businesses and assets.
- [Partnerships](${siteOrigin}/partnerships/): Partnership audiences and approach.
- [Contact](${siteOrigin}/contact/): How to share an opportunity directly and discreetly.

## Contact

- Email: inquiries@hartnettcapital.com
- Website: ${siteOrigin}/
`;

const worker = `
const PAGES = ${JSON.stringify(renderedPages)};
const NOT_FOUND = ${JSON.stringify(notFoundHtml)};
const SITEMAP_PATHS = ${JSON.stringify(sitemapPaths)};
const SOCIAL_CARD_BASE64 = ${JSON.stringify(socialCard.toString("base64"))};
const LOGO = ${JSON.stringify(logo)};
const LLMS_TEXT = ${JSON.stringify(llmsText)};

function socialCardBytes() {
  const decoded = atob(SOCIAL_CARD_BASE64);
  const bytes = new Uint8Array(decoded.length);
  for (let index = 0; index < decoded.length; index += 1) bytes[index] = decoded.charCodeAt(index);
  return bytes;
}

function documentHtml(template, origin) {
  return template.replaceAll("{{ORIGIN}}", origin);
}

const securityHeaders = {
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const isHead = request.method === "HEAD";
    if (request.method !== "GET" && !isHead) {
      return new Response("Method Not Allowed", { status: 405, headers: { ...securityHeaders, Allow: "GET, HEAD" } });
    }

    if (url.pathname === "/og.png" || url.pathname === "/og-v2.png" || url.pathname === "/og-v3.png" || url.pathname === "/og-v4.png" || url.pathname === "/og-v5.png") {
      return new Response(isHead ? null : socialCardBytes(), { headers: { ...securityHeaders, "Cache-Control": "public, max-age=86400", "Content-Type": "image/png" } });
    }
    if (url.pathname === "/hc-logo.svg") {
      return new Response(isHead ? null : LOGO, { headers: { ...securityHeaders, "Cache-Control": "public, max-age=86400", "Content-Type": "image/svg+xml; charset=UTF-8" } });
    }
    if (url.pathname === "/robots.txt") {
      const robots = "User-agent: *\\nAllow: /\\nSitemap: " + url.origin + "/sitemap.xml\\n";
      return new Response(isHead ? null : robots, { headers: { ...securityHeaders, "Content-Type": "text/plain; charset=UTF-8" } });
    }
    if (url.pathname === "/llms.txt") {
      return new Response(isHead ? null : LLMS_TEXT, { headers: { ...securityHeaders, "Cache-Control": "public, max-age=3600", "Content-Type": "text/plain; charset=UTF-8" } });
    }
    if (url.pathname === "/sitemap.xml") {
      const urls = SITEMAP_PATHS.map((path) => "<url><loc>" + url.origin + (path === "/" ? "/" : path) + "</loc></url>").join("");
      const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + "</urlset>";
      return new Response(isHead ? null : sitemap, { headers: { ...securityHeaders, "Content-Type": "application/xml; charset=UTF-8" } });
    }

    let path = url.pathname === "/index.html" ? "/" : url.pathname;
    if (path.endsWith("/index.html")) path = path.slice(0, -10);
    if (path.length > 1 && !path.endsWith("/") && PAGES[path + "/"]) {
      const destination = new URL(url);
      destination.pathname = path + "/";
      return Response.redirect(destination.toString(), 308);
    }

    const template = PAGES[path];
    if (template) {
      return new Response(isHead ? null : documentHtml(template, url.origin), { headers: { ...securityHeaders, "Cache-Control": "public, max-age=300", "Content-Type": "text/html; charset=UTF-8" } });
    }
    return new Response(isHead ? null : documentHtml(NOT_FOUND, url.origin), { status: 404, headers: { ...securityHeaders, "Cache-Control": "no-store", "Content-Type": "text/html; charset=UTF-8" } });
  },
};
`;

await rm(resolve(root, "dist"), { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.js"), worker);

await Promise.all(
  staticPages.map(async (page) => {
    const outputDirectory = page.path === "/" ? root : resolve(root, page.path.slice(1));
    await mkdir(outputDirectory, { recursive: true });
    await writeFile(resolve(outputDirectory, "index.html"), page.html);
  }),
);
await Promise.all([
  writeFile(resolve(root, "404.html"), staticNotFoundHtml),
  writeFile(resolve(root, ".nojekyll"), ""),
  writeFile(resolve(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`),
  writeFile(resolve(root, "sitemap.xml"), sitemapXml),
  writeFile(resolve(root, "llms.txt"), llmsText),
]);

console.log(`Built ${pages.length} shared-layout pages for GitHub Pages and Sites.`);
