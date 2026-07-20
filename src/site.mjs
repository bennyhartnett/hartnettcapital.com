export const site = {
  name: "Hartnett Capital",
  url: "https://hartnettcapital.com",
  description:
    "Founded and headquartered in McLean, Virginia, Hartnett Capital is a private investment and operating company focused on durable businesses and differentiated assets.",
  email: "inquiries@hartnettcapital.com",
  location: {
    locality: "McLean",
    region: "Virginia",
    country: "US",
  },
  socialImage: {
    path: "/og.png",
    width: 1732,
    height: 908,
    alt: "Hartnett Capital — Building enduring value.",
  },
  focusAreas: [
    "Operating companies",
    "Commercial and residential real estate",
    "Software and platforms",
    "Digital assets and media properties",
    "Proprietary data and information assets",
    "Intellectual property and brands",
  ],
  navigation: [
    { href: "/firm/", label: "About" },
    { href: "/strategy/", label: "What We Do" },
    { href: "/focus/", label: "Focus" },
    { href: "/criteria/", label: "Criteria" },
    { href: "/partnerships/", label: "Partnerships" },
  ],
  sitemapGroups: [
    {
      label: "Company",
      links: [
        { href: "/firm/", label: "About" },
        { href: "/strategy/", label: "What We Do" },
        { href: "/criteria/", label: "Investment Criteria" },
        { href: "/faq/", label: "Frequently Asked Questions" },
      ],
    },
    {
      label: "Focus Areas",
      links: [
        { href: "/focus/", label: "Focus Overview" },
        { href: "/focus/operating-companies/", label: "Operating Companies" },
        { href: "/focus/real-estate/", label: "Real Estate" },
        { href: "/focus/software-platforms/", label: "Software & Platforms" },
        { href: "/focus/digital-assets/", label: "Digital Assets" },
        { href: "/focus/data-information/", label: "Data & Information" },
        { href: "/focus/intellectual-property-brands/", label: "IP & Brands" },
      ],
    },
    {
      label: "Partnerships",
      links: [
        { href: "/partnerships/", label: "Partnerships Overview" },
        { href: "/partnerships/owners-founders/", label: "Owners & Founders" },
        { href: "/partnerships/operators/", label: "Independent Operators" },
        { href: "/partnerships/strategic-partners/", label: "Strategic Partners" },
        { href: "/contact/", label: "Share an Opportunity" },
      ],
    },
  ],
};

export function linkArrow(label, href, className = "text-link") {
  return `<a class="${className}" href="${href}"><span>${label}</span><span aria-hidden="true">↗</span></a>`;
}

export function pageIntro({ index, eyebrow, title, copy, variant = "navy" }) {
  return `
    <section class="page-hero page-hero--${variant}">
      <div class="shell page-hero__grid">
        <div class="page-hero__meta">
          <span>${index}</span>
          <span>${eyebrow}</span>
        </div>
        <div class="page-hero__content reveal">
          <h1>${title}</h1>
          <p>${copy}</p>
        </div>
      </div>
      <div class="page-hero__shape" aria-hidden="true"></div>
    </section>`;
}
