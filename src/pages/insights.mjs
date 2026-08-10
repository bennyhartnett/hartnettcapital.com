import { linkArrow, pageIntro } from "../site.mjs";
import { insightArticles } from "./insight-articles.mjs";

const articlesNewestFirst = [...insightArticles].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export const insightsPage = {
  path: "/insights/",
  title: "Insights",
  seoTitle: "Insights & Perspectives | Hartnett Capital",
  schemaType: "CollectionPage",
  description:
    "Perspectives from Hartnett Capital on long-term ownership, operating diligence, durable assets, and how the firm thinks about building enduring value.",
  body: `
    ${pageIntro({
      index: "06",
      eyebrow: "Insights",
      title: "How we think<br>about ownership.",
      copy: "Occasional perspectives on long-term ownership, operating discipline, and what makes an asset durable — written the way we would explain it across a table.",
    })}

    <section class="section insights-index">
      <div class="shell split-heading">
        <p class="section-label">Perspectives</p>
        <div>
          <h2 class="display reveal">Written to be useful,<br>not frequent.</h2>
          <div class="insight-list reveal">
            ${articlesNewestFirst
              .map(
                (article) => `
                  <a class="insight-card" href="${article.path}">
                    <span class="insight-card__meta">
                      <time datetime="${article.datePublished}">${article.dateLabel}</time>
                      <span>${article.topic}</span>
                    </span>
                    <span class="insight-card__content">
                      <strong>${article.headline}</strong>
                      <span>${article.deck}</span>
                    </span>
                    <span class="insight-card__arrow" aria-hidden="true">↗</span>
                  </a>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section focus-standard section--navy">
      <div class="shell split-heading">
        <p class="section-label section-label--light">Beyond the page</p>
        <div>
          <h2 class="display reveal">The best conversations start with a specific opportunity.</h2>
          <div class="two-column-copy two-column-copy--light reveal">
            <p>These perspectives describe how we think. The way to test whether they apply to your situation is to tell us about it.</p>
            <p>Share a concise overview of the business, property, or asset, and we will respond directly if there may be a fit.</p>
          </div>
          ${linkArrow("Share an opportunity", "/contact/")}
          <span class="inline-link-separator" aria-hidden="true"></span>
          ${linkArrow("See what we do", "/strategy/")}
        </div>
      </div>
    </section>`,
};
