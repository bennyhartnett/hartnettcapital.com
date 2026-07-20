import { site } from "./site.mjs";

function serializeJsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderStructuredData(page, origin, canonical, title) {
  const organizationId = `${origin}/#organization`;
  const websiteId = `${origin}/#website`;
  const webpageId = `${canonical}#webpage`;
  const place = {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
  };
  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      url: `${origin}/`,
      logo: {
        "@type": "ImageObject",
        url: `${origin}/brand/logos/svg/hartnett-capital-monogram-navy.svg`,
        contentUrl: `${origin}/brand/logos/svg/hartnett-capital-monogram-navy.svg`,
        width: 552,
        height: 686,
      },
      description: site.description,
      email: site.email,
      foundingLocation: place,
      location: place,
      knowsAbout: site.focusAreas,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${origin}/`,
      name: site.name,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": organizationId },
    },
    {
      "@type": page.schemaType ?? "WebPage",
      "@id": webpageId,
      url: canonical,
      name: title,
      description: page.description,
      inLanguage: "en-US",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      publisher: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${origin}${site.socialImage.path}`,
        contentUrl: `${origin}${site.socialImage.path}`,
        width: site.socialImage.width,
        height: site.socialImage.height,
        caption: site.socialImage.alt,
        representativeOfPage: true,
      },
    },
  ];

  if (page.path !== "/" && page.path !== "/404") {
    const breadcrumbId = `${canonical}#breadcrumb`;
    const breadcrumbItems = [
      { name: "Home", item: `${origin}/` },
      ...(page.breadcrumbs ?? []).map(({ name, path }) => ({
        name,
        item: `${origin}${path}`,
      })),
      {
        name: page.breadcrumbLabel ?? page.title,
        item: canonical,
      },
    ];
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbItems.map(({ name, item }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
        item,
      })),
    });
    graph[2].breadcrumb = { "@id": breadcrumbId };
  }

  if (page.faqs?.length) {
    const mainEntity = page.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    }));
    if (page.schemaType === "FAQPage") {
      graph[2].mainEntity = mainEntity;
    } else {
      graph.push({
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity,
      });
    }
  }

  return `<script type="application/ld+json">${serializeJsonLd({
    "@context": "https://schema.org",
    "@graph": graph,
  })}</script>`;
}

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
          <img class="brand-mark" src="/brand/logos/svg/hartnett-capital-monogram-navy.svg" width="28" height="35" alt="">
          <span class="brand-name"><span>Hartnett</span><span>Capital</span></span>
        </a>
        <nav class="nav-links" id="site-menu" aria-label="Primary navigation">
          ${links}
          <a class="nav-links__mobile-utility" href="/search/">Search</a>
          <a class="nav-links__mobile-utility" href="/login/">Sign in</a>
          <a class="nav-links__mobile-contact" href="/contact/">Share an Opportunity</a>
        </nav>
        <div class="nav-utilities">
          <a class="nav-search" href="/search/"${activePath === "/search/" ? ' aria-current="page"' : ""}>Search</a>
          <a class="nav-login" href="/login/"${activePath === "/login/" ? ' aria-current="page"' : ""}>Sign in</a>
          <a class="nav-cta" href="/contact/"${activePath === "/contact/" ? ' aria-current="page"' : ""}>Share an Opportunity</a>
        </div>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu">
          <span></span><span></span>
        </button>
      </div>
    </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const sitemapGroups = site.sitemapGroups
    .map(
      ({ label, links }) => `
        <div class="footer__link-group">
          <p>${label}</p>
          ${links.map(({ href, label: linkLabel }) => `<a href="${href}">${linkLabel}</a>`).join("")}
        </div>`,
    )
    .join("");
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
      <div class="shell footer__directory">
        <a class="brand" href="/" aria-label="Hartnett Capital home">
          <img class="brand-mark" src="/brand/logos/svg/hartnett-capital-monogram-navy.svg" width="28" height="35" alt="">
          <span class="brand-name"><span>Hartnett</span><span>Capital</span></span>
        </a>
        <nav class="footer__links" aria-label="Footer navigation">${sitemapGroups}</nav>
        <div class="footer__meta">
          <p>McLean, Virginia</p>
          <p>© ${year} Hartnett Capital</p>
          <a href="/sitemap/">View full sitemap</a>
        </div>
      </div>
      <div class="shell footer__disclosure">
        <p>This website is for general informational purposes only and does not constitute an offer to sell or a solicitation to purchase any security.</p>
        <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>`;
}

export function renderDocument(page, styles, clientScript, origin = "{{ORIGIN}}") {
  const canonical = page.path === "/" ? `${origin}/` : `${origin}${page.path}`;
  const title = page.seoTitle ?? (page.title === site.name ? page.title : `${page.title} | ${site.name}`);
  const robots = page.noIndex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const htmlTitle = escapeHtml(title);
  const htmlDescription = escapeHtml(page.description);
  const htmlImageAlt = escapeHtml(site.socialImage.alt);

  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="description" content="${htmlDescription}">
  <meta name="robots" content="${robots}">
  <meta name="googlebot" content="${robots}">
  <meta name="application-name" content="${site.name}">
  <meta name="author" content="${site.name}">
  <meta name="theme-color" content="#081a33">
  <meta name="color-scheme" content="light">
  <link rel="canonical" href="${canonical}">
  <link rel="sitemap" type="application/xml" href="${origin}/sitemap.xml">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_US">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:title" content="${htmlTitle}">
  <meta property="og:description" content="${htmlDescription}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${origin}${site.socialImage.path}">
  <meta property="og:image:secure_url" content="${origin}${site.socialImage.path}">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="${site.socialImage.width}">
  <meta property="og:image:height" content="${site.socialImage.height}">
  <meta property="og:image:alt" content="${htmlImageAlt}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${htmlTitle}">
  <meta name="twitter:description" content="${htmlDescription}">
  <meta name="twitter:image" content="${origin}${site.socialImage.path}">
  <meta name="twitter:image:alt" content="${htmlImageAlt}">
  <link rel="shortcut icon" href="/favicon.ico?v=3">
  <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg?v=3">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=3">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <title>${htmlTitle}</title>
  ${renderStructuredData(page, origin, canonical, title)}
  <style>${styles}</style>
</head>
<body class="${page.bodyClass ?? ""}">
  <noscript><style>.reveal{opacity:1;transform:none}</style></noscript>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="scroll-progress" aria-hidden="true"></div>
  ${renderHeader(page.path)}
  <main id="main">${page.body}</main>
  ${page.hideFooter ? "" : renderFooter()}
  <script>${clientScript}</script>
</body>
</html>`;
}
