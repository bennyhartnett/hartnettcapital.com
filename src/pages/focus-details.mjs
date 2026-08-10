import { linkArrow, pageIntro } from "../site.mjs";

const focusDetails = [
  {
    path: "/focus/operating-companies/",
    title: "Operating Companies",
    seoTitle: "Investing in Operating Companies | Hartnett Capital",
    description:
      "Hartnett Capital considers established operating companies with durable demand, sound economics, trusted relationships, and meaningful room to improve.",
    headline: "Businesses worth improving, not dismantling.",
    intro:
      "We look for established companies with a useful role in their markets, a durable reason to exist, and a clear opportunity for engaged ownership to make them stronger.",
    perspective:
      "A good business is more than a financial profile. It is a system of customers, employees, capabilities, reputation, and operating knowledge. We seek to understand and preserve those strengths before changing what surrounds them.",
    signals: [
      ["01", "Durable demand", "Products or services customers continue to need across cycles."],
      ["02", "Sound economics", "Healthy cash generation or a credible path to sustainable profitability."],
      ["03", "Trusted position", "Customer, supplier, employee, or community relationships worth protecting."],
      ["04", "Operating headroom", "Practical opportunities to improve systems, execution, technology, or growth."],
    ],
    contributions: [
      ["01", "Operating rhythm", "Clear priorities, useful metrics, accountable execution, and better decision cadence."],
      ["02", "Technology", "Practical software, automation, and data that make the company easier to run and serve."],
      ["03", "Commercial focus", "Sharper positioning, customer development, pricing discipline, and repeatable growth."],
      ["04", "Reinvestment", "Patient capital directed toward capabilities and advantages that can compound."],
    ],
    closing: "The right company has something real to preserve and a practical path to becoming more valuable.",
  },
  {
    path: "/focus/real-estate/",
    title: "Real Estate",
    seoTitle: "Real Estate Investment Focus | Hartnett Capital",
    description:
      "Hartnett Capital considers commercial, residential, specialty, land, and infrastructure opportunities where active ownership can strengthen long-term value.",
    headline: "Useful places with unrealized potential.",
    intro:
      "We consider real estate and related assets where location, utility, scarcity, or a durable use case provides a strong foundation for long-term ownership.",
    perspective:
      "Our interest is not limited to a single property type. We focus on what makes a place useful, how it serves the people around it, and where better management, investment, or redevelopment can improve the outcome.",
    signals: [
      ["01", "Durable utility", "A clear use case supported by practical demand rather than a temporary narrative."],
      ["02", "Location advantage", "Access, scarcity, community context, or infrastructure that is difficult to reproduce."],
      ["03", "Ownership flexibility", "A structure that supports patient decision-making and responsible stewardship."],
      ["04", "Improvement potential", "Room for better management, repositioning, redevelopment, or operational efficiency."],
    ],
    contributions: [
      ["01", "Asset strategy", "A grounded plan for use, positioning, capital needs, and long-term value."],
      ["02", "Active management", "Attention to operations, tenant or resident experience, maintenance, and accountability."],
      ["03", "Thoughtful capital", "Disciplined improvements tied to utility, resilience, and durable demand."],
      ["04", "Partnership structure", "Flexible alignment with owners, developers, operators, and capital partners."],
    ],
    closing: "We favor real assets whose value can be strengthened through useful improvements and responsible ownership.",
  },
  {
    path: "/focus/software-platforms/",
    title: "Software & Platforms",
    seoTitle: "Software & Platform Investment Focus | Hartnett Capital",
    description:
      "Hartnett Capital considers software products and platforms with practical utility, valuable workflows, and opportunities for focused product and operating improvement.",
    headline: "Useful products that can become essential.",
    intro:
      "We look for software and platforms that solve specific problems, support valuable workflows, and can become more capable through focused product development and disciplined operations.",
    perspective:
      "The strongest software businesses earn their place in a customer’s day-to-day work. We value genuine utility, close customer understanding, sensible economics, and product decisions grounded in durable needs.",
    signals: [
      ["01", "Clear utility", "A product that solves an identifiable problem and creates repeatable user value."],
      ["02", "Embedded workflow", "A meaningful role in how customers operate, decide, transact, or communicate."],
      ["03", "Sensible economics", "Revenue quality and delivery costs that can support durable reinvestment."],
      ["04", "Product headroom", "Opportunities to improve usability, reliability, capabilities, or distribution."],
    ],
    contributions: [
      ["01", "Product discipline", "Prioritization built around customer value, adoption, retention, and quality."],
      ["02", "Technical leverage", "Automation, integrations, data, and modern infrastructure applied pragmatically."],
      ["03", "Go-to-market systems", "Clear positioning and repeatable acquisition, onboarding, and customer success."],
      ["04", "Long-term roadmap", "Patient development of features and advantages that deepen the product’s usefulness."],
    ],
    closing: "We are interested in software that matters to its users and has room to become materially better.",
  },
  {
    path: "/focus/digital-assets/",
    title: "Digital Assets",
    seoTitle: "Digital Asset & Media Investment Focus | Hartnett Capital",
    description:
      "Hartnett Capital considers websites, domains, media properties, and other digital assets with durable demand, owned distribution, and room for commercial improvement.",
    headline: "Owned distribution in durable markets.",
    intro:
      "We consider websites, domains, media properties, and related digital assets that have earned attention, authority, direct demand, or a distinctive position online.",
    perspective:
      "A digital asset can be valuable because it helps people find, understand, or accomplish something important. We look beyond traffic alone to the quality of the audience, the durability of demand, and the usefulness of the experience.",
    signals: [
      ["01", "Direct demand", "Organic, referral, repeat, or branded usage that is not dependent on one paid channel."],
      ["02", "Distinct position", "Authority, naming, content, community, or distribution that is hard to recreate."],
      ["03", "Audience quality", "Users with a clear purpose and a reason to return, subscribe, or transact."],
      ["04", "Commercial headroom", "Ways to improve the product, experience, revenue model, or market reach."],
    ],
    contributions: [
      ["01", "Experience", "Faster, clearer, and more useful products built around audience intent."],
      ["02", "Content systems", "Structured production, quality standards, and responsible use of automation."],
      ["03", "Monetization", "Revenue models aligned with user trust and the asset’s long-term position."],
      ["04", "Distribution resilience", "Broader direct relationships and less dependence on any single platform."],
    ],
    closing: "The most compelling digital assets pair durable attention with genuine utility and owned relationships.",
  },
  {
    path: "/focus/data-information/",
    title: "Data & Information",
    seoTitle: "Data & Information Asset Investment Focus | Hartnett Capital",
    description:
      "Hartnett Capital considers proprietary datasets and information assets that can become more useful through better collection, organization, enrichment, and access.",
    headline: "Proprietary knowledge made more useful.",
    intro:
      "We look for data and information assets that help people understand a market, make a decision, manage a process, or perform important work more effectively.",
    perspective:
      "Data becomes valuable when it is trustworthy, differentiated, current, and applied to a real need. We are interested in the systems and expertise that make information more accurate, accessible, and actionable.",
    signals: [
      ["01", "Proprietary sourcing", "Collection rights, relationships, expertise, or processes that are difficult to reproduce."],
      ["02", "Repeatable utility", "Information that supports recurring decisions, workflows, or analysis."],
      ["03", "Quality advantage", "Accuracy, completeness, timeliness, structure, or context users can trust."],
      ["04", "Application potential", "Room to create better tools, interfaces, products, or insights around the asset."],
    ],
    contributions: [
      ["01", "Data operations", "Stronger collection, normalization, quality control, governance, and maintenance."],
      ["02", "Productization", "Useful interfaces, workflows, alerts, and APIs built around customer decisions."],
      ["03", "Enrichment", "Technology and domain expertise that make the underlying information more valuable."],
      ["04", "Responsible access", "Clear rights, thoughtful controls, and durable trust with sources and users."],
    ],
    closing: "We value information advantages rooted in real expertise, responsible sourcing, and repeatable usefulness.",
  },
  {
    path: "/focus/intellectual-property-brands/",
    title: "Intellectual Property & Brands",
    seoTitle: "IP & Brand Investment Focus | Hartnett Capital",
    description:
      "Hartnett Capital considers brands, patents, trademarks, licenses, and other intellectual property with defensible ownership, recognition, utility, or extension potential.",
    headline: "Distinctive rights with room to travel.",
    intro:
      "We consider brands and intellectual property that hold recognition, trust, scarcity, technical utility, or a meaningful right to participate in a market.",
    perspective:
      "Strong intellectual property creates value only when it is protected, relevant, and thoughtfully applied. We look for assets with clear ownership and a credible path to broader use without weakening what makes them distinctive.",
    signals: [
      ["01", "Defensible ownership", "Clear rights, documentation, protections, and freedom to use or extend the asset."],
      ["02", "Existing relevance", "Recognition, trust, technical value, or a proven role in the market."],
      ["03", "Authentic fit", "A coherent reason for the property to exist and for customers or partners to care."],
      ["04", "Extension potential", "Thoughtful opportunities across products, markets, channels, or licensing."],
    ],
    contributions: [
      ["01", "Positioning", "A sharper articulation of the asset’s meaning, value, and intended audience."],
      ["02", "Protection", "Disciplined attention to rights, usage, consistency, and long-term defensibility."],
      ["03", "Commercialization", "Products, licensing, distribution, and partnerships that respect the core asset."],
      ["04", "Stewardship", "Patient decisions that strengthen relevance without trading away trust."],
    ],
    closing: "We seek intellectual property with something genuine to protect and a responsible way to extend it.",
  },
];

function renderFocusDetail(detail) {
  return {
    path: detail.path,
    title: detail.title,
    seoTitle: detail.seoTitle,
    schemaType: "WebPage",
    description: detail.description,
    breadcrumbs: [{ name: "Focus Areas", path: "/focus/" }],
    body: `
      ${pageIntro({
        index: "03",
        eyebrow: detail.title,
        title: detail.headline,
        copy: detail.intro,
        variant: "blue",
      })}

      <section class="section page-statement">
        <div class="shell split-heading">
          <p class="section-label">Our perspective</p>
          <div>
            <h2 class="display reveal">A durable foundation comes first.</h2>
            <div class="two-column-copy reveal"><p>${detail.perspective}</p><p>Every situation is evaluated on its own merits. Fit depends on the quality of the underlying asset, the people around it, and our ability to contribute meaningfully over time.</p></div>
          </div>
        </div>
      </section>

      <section class="section section--blue-soft principles">
        <div class="shell section-heading section-heading--compact">
          <p class="section-label">What we look for</p>
          <h2 class="display reveal">Signals of long-term fit.</h2>
        </div>
        <div class="shell principle-list">
          ${detail.signals.map(([number, title, copy]) => `<article class="principle reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}
        </div>
      </section>

      <section class="section operating-model">
        <div class="shell section-heading">
          <p class="section-label">Where we can contribute</p>
          <h2 class="display reveal">Ownership with practical operating depth.</h2>
        </div>
        <div class="shell operating-model__grid">
          ${detail.contributions.map(([number, title, copy]) => `<article class="operating-model__item reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}
        </div>
      </section>

      <section class="section feature-quote">
        <div class="shell feature-quote__grid">
          <p class="section-label">The opportunity</p>
          <div>
            <blockquote class="reveal">“${detail.closing}”</blockquote>
            <p>If that describes an asset you own, advise, or know well, we welcome a direct and confidential introduction.</p>
            ${linkArrow("Share an opportunity", "/contact/")}
            <span class="inline-link-separator" aria-hidden="true"></span>
            ${linkArrow("Review our criteria", "/criteria/")}
          </div>
        </div>
      </section>`,
  };
}

export const focusDetailPages = focusDetails.map(renderFocusDetail);
