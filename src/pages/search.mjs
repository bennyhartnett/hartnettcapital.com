function plainText(value) {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&rsquo;", "’")
    .replaceAll("&mdash;", "—")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function createSearchPage(indexedPages) {
  const results = indexedPages
    .filter((page) => !page.noIndex)
    .map((page) => {
      const title = escapeHtml(plainText(page.title));
      const description = escapeHtml(plainText(page.description));
      const searchableText = escapeHtml(plainText(`${page.title} ${page.description} ${page.body}`));

      return `
        <a class="search-result" href="${page.path}" data-search-result data-search-title="${title}" data-search-description="${description}" data-search-text="${searchableText}" hidden>
          <span class="search-result__meta">${page.path === "/" ? "Overview" : "Hartnett Capital"}</span>
          <span class="search-result__content">
            <strong>${title}</strong>
            <span>${description}</span>
          </span>
          <span class="search-result__arrow" aria-hidden="true">↗</span>
        </a>`;
    })
    .join("");

  return {
    path: "/search/",
    title: "Search",
    seoTitle: "Search Hartnett Capital",
    description: "Search the Hartnett Capital website for information about the firm, investment focus, criteria, partnerships, and contact details.",
    noIndex: true,
    bodyClass: "search",
    body: `
      <section class="search-hero">
        <div class="shell search-hero__grid">
          <div>
            <p class="section-label section-label--light">Site search</p>
            <h1>Find what<br>matters.</h1>
          </div>
          <div class="search-hero__tools">
            <p>Search our approach, focus areas, investment criteria, partnership pathways, and company information.</p>
            <form class="search-form" role="search" action="/search/" method="get" data-search-form>
              <label for="site-search">What are you looking for?</label>
              <div class="search-form__control">
                <input id="site-search" name="q" type="search" inputmode="search" autocomplete="off" placeholder="Try “real estate” or “operators”" data-search-input>
                <button type="submit">Search <span aria-hidden="true">→</span></button>
              </div>
            </form>
            <div class="search-suggestions" aria-label="Suggested searches">
              <span>Popular:</span>
              <button type="button" data-search-query="Operating companies">Operating companies</button>
              <button type="button" data-search-query="Real estate">Real estate</button>
              <button type="button" data-search-query="Investment criteria">Investment criteria</button>
            </div>
          </div>
        </div>
      </section>

      <section class="section search-page" aria-labelledby="search-results-title">
        <div class="shell">
          <div class="search-results__heading">
            <p class="section-label">Results</p>
            <div>
              <h2 id="search-results-title">Explore the site.</h2>
              <p class="search-status" role="status" aria-live="polite" data-search-status>Enter a word or phrase above to begin.</p>
            </div>
          </div>
          <div class="search-results" data-search-results>${results}</div>
          <div class="search-empty" data-search-empty>
            <span aria-hidden="true">⌕</span>
            <p>Search across our company, strategy, focus, criteria, partnerships, and frequently asked questions.</p>
            <a class="text-link" href="/sitemap/"><span>Browse the sitemap</span><span aria-hidden="true">↗</span></a>
          </div>
          <noscript><p class="search-noscript">Site search requires JavaScript. You can browse every page from the <a href="/sitemap/">sitemap</a>.</p></noscript>
        </div>
      </section>`,
  };
}
