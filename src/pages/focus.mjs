import { linkArrow, pageIntro } from "../site.mjs";

const focusAreas = [
  {
    number: "01",
    id: "companies",
    title: "Operating companies",
    heading: "Established foundations with room to compound.",
    copy: "Businesses supported by durable demand, recurring customer value, trusted relationships, and a clear role for focused operations.",
    signals: ["Recurring or resilient revenue", "Operational improvement", "Succession and continuity"],
  },
  {
    number: "02",
    id: "real-estate",
    title: "Real estate",
    heading: "Useful properties with unrealized potential.",
    copy: "Commercial, residential, specialty, land, and infrastructure opportunities where patient ownership and active management can strengthen long-term value.",
    signals: ["Durable use cases", "Management or redevelopment", "Flexible ownership structures"],
  },
  {
    number: "03",
    id: "software",
    title: "Software &amp; platforms",
    heading: "Useful products that can become essential.",
    copy: "Software, applications, and platforms with practical utility, valuable workflows, or an opportunity to become more capable through focused product development.",
    signals: ["Clear user value", "Repeatable distribution", "Product and operating leverage"],
  },
  {
    number: "04",
    id: "digital",
    title: "Digital assets",
    heading: "Owned distribution in durable markets.",
    copy: "Websites, domains, media properties, and other digital assets with defensible positioning, established demand, or overlooked commercial potential.",
    signals: ["Organic or direct demand", "Distinctive market position", "Commercial improvement"],
  },
  {
    number: "05",
    id: "data",
    title: "Data &amp; information",
    heading: "Proprietary knowledge made more valuable.",
    copy: "Datasets and information assets that become more useful through better collection, organization, enrichment, access, or application.",
    signals: ["Proprietary sourcing", "Repeatable utility", "Technology-enabled enrichment"],
  },
  {
    number: "06",
    id: "intellectual-property",
    title: "Intellectual property &amp; brands",
    heading: "Distinctive rights with room to travel.",
    copy: "Brands, patents, trademarks, licenses, and other intellectual property with recognition, scarcity, utility, or unrealized extension opportunities.",
    signals: ["Defensible ownership", "Existing recognition or utility", "Thoughtful extension"],
  },
];

export const focusPage = {
  path: "/focus/",
  title: "Focus Areas",
  description:
    "Explore Hartnett Capital's focus across operating companies, real estate, software, digital assets, proprietary data, intellectual property, and brands.",
  body: `
    ${pageIntro({
      index: "03",
      eyebrow: "Focus areas",
      title: "Multiple asset classes.<br>One ownership standard.",
      copy: "We pursue opportunities where durable demand, defensible value, and active ownership can create meaningful long-term improvement.",
    })}

    <section class="section focus-detail">
      <div class="shell criteria-detail__intro">
        <p class="section-label">Where we look</p>
        <h2 class="display reveal">A broad field of view.<br>A disciplined lens.</h2>
      </div>
      <div class="shell asset-grid">
        ${focusAreas
          .map(
            ({ number, id, title, heading, copy, signals }) => `
              <article class="asset-card reveal" id="${id}">
                <div class="asset-card__meta"><span>${number}</span><span>${title}</span></div>
                <h3>${heading}</h3>
                <p>${copy}</p>
                <ul>${signals.map((signal) => `<li>${signal}</li>`).join("")}</ul>
              </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section focus-standard section--navy">
      <div class="shell split-heading">
        <p class="section-label section-label--light">The common thread</p>
        <div>
          <h2 class="display reveal">Different assets.<br>Consistent questions.</h2>
          <div class="two-column-copy two-column-copy--light reveal">
            <p>What makes the asset genuinely useful? Which advantages are worth preserving? Where can better operations, technology, data, capital, or relationships change the outcome?</p>
            <p>Our mandate is intentionally flexible. Our standards are not: understandable value, responsible ownership, a credible path to improvement, and the potential to compound over time.</p>
          </div>
          ${linkArrow("Review our criteria", "/criteria/")}
        </div>
      </div>
    </section>`,
};
