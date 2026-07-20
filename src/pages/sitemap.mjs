import { pageIntro, site } from "../site.mjs";

export const sitemapPage = {
  path: "/sitemap/",
  title: "Sitemap",
  seoTitle: "Sitemap | Hartnett Capital",
  schemaType: "CollectionPage",
  description:
    "Browse the complete Hartnett Capital website, including company information, investment focus areas, partnership pathways, criteria, and contact details.",
  body: `
    ${pageIntro({
      index: "09",
      eyebrow: "Sitemap",
      title: "Explore Hartnett Capital.",
      copy: "A complete directory of our company, investment focus, ownership approach, partnership pathways, and contact information.",
    })}

    <section class="section sitemap-page">
      <div class="shell sitemap-page__grid">
        ${site.sitemapGroups
          .map(
            ({ label, links }, groupIndex) => `
              <section class="sitemap-group" aria-labelledby="sitemap-group-${groupIndex}">
                <p class="section-label">0${groupIndex + 1}</p>
                <h2 id="sitemap-group-${groupIndex}">${label}</h2>
                <div class="sitemap-group__links">
                  ${links.map(({ href, label: linkLabel }) => `<a href="${href}"><span>${linkLabel}</span><span aria-hidden="true">↗</span></a>`).join("")}
                </div>
              </section>`,
          )
          .join("")}
        <section class="sitemap-group" aria-labelledby="sitemap-group-${site.sitemapGroups.length}">
          <p class="section-label">0${site.sitemapGroups.length + 1}</p>
          <h2 id="sitemap-group-${site.sitemapGroups.length}">Site directory</h2>
          <div class="sitemap-group__links">
            <a href="/"><span>Home</span><span aria-hidden="true">↗</span></a>
            <a href="/sitemap.xml"><span>XML Sitemap</span><span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </div>
    </section>`,
};
