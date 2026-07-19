import { site } from "./site.mjs";

function renderHeader(activePath) {
  const links = site.navigation
    .map(
      ({ href, label }) => `
        <a href="${href}"${activePath === href ? ' aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");

  return `
    <header class="topbar">
      <div class="shell nav">
        <a class="brand" href="/" aria-label="Hartnett Capital home">
          <img class="brand-mark" src="/hc-logo.svg" width="28" height="35" alt="">
          <span>Hartnett Capital</span>
        </a>
        <nav class="nav-links" id="site-menu" aria-label="Primary navigation">
          ${links}
          <a class="nav-links__mobile-contact" href="/contact/">Share an Opportunity</a>
        </nav>
        <a class="nav-cta" href="/contact/"${activePath === "/contact/" ? ' aria-current="page"' : ""}>Share an Opportunity</a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">
          <span></span><span></span>
        </button>
      </div>
    </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="footer">
      <div class="shell footer__lead">
        <div>
          <p class="eyebrow">A direct conversation</p>
          <h2>Have an opportunity<br>built to endure?</h2>
        </div>
        <a class="footer__contact" href="mailto:${site.email}">
          <span>Share an opportunity</span><span aria-hidden="true">↗</span>
        </a>
      </div>
      <div class="shell footer__bottom">
        <a class="brand brand--light" href="/" aria-label="Hartnett Capital home">
          <img class="brand-mark" src="/hc-logo.svg" width="28" height="35" alt="">
          <span>Hartnett Capital</span>
        </a>
        <div class="footer__links">
          <a href="/firm/">About</a>
          <a href="/strategy/">What We Do</a>
          <a href="/focus/">Focus</a>
          <a href="/criteria/">Criteria</a>
          <a href="/partnerships/">Partnerships</a>
          <a href="/contact/">Contact</a>
        </div>
        <p>© ${year} Hartnett Capital. All rights reserved.</p>
      </div>
      <div class="shell footer__disclosure">
        This website is for general informational purposes only and does not constitute an offer to sell or a solicitation to purchase any security.
      </div>
    </footer>`;
}

export function renderDocument(page, styles, clientScript, origin = "{{ORIGIN}}") {
  const canonical = page.path === "/" ? `${origin}/` : `${origin}${page.path}`;
  const title = page.title === site.name ? page.title : `${page.title} | ${site.name}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${page.description}">
  <meta name="theme-color" content="#081a33">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${origin}/og-v4.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${origin}/og-v4.png">
  <link rel="icon" type="image/svg+xml" href="/hc-logo.svg">
  <title>${title}</title>
  <style>${styles}</style>
</head>
<body class="${page.bodyClass ?? ""}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${renderHeader(page.path)}
  <main id="main">${page.body}</main>
  ${page.hideFooter ? "" : renderFooter()}
  <script>${clientScript}</script>
</body>
</html>`;
}
