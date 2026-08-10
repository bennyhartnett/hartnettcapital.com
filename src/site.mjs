export const site = {
  name: "Hartnett Capital",
  legalName: "Hartnett Capital",
  url: "https://hartnettcapital.com",
  description:
    "Founded and headquartered in McLean, Virginia, Hartnett Capital is a private investment and operating company focused on durable businesses and differentiated assets.",
  slogan: "Building enduring value through ownership and operation.",
  email: "inquiries@hartnettcapital.com",
  // Set to a hosted form endpoint (e.g. "https://formspree.io/f/XXXXXXXX") to enable
  // live form submission. Leave empty to fall back to a structured mailto compose.
  formEndpoint: "",
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
  audiences: [
    "Business owners and founders",
    "Independent operators",
    "Property owners and developers",
    "Investors and family offices",
    "Advisors and intermediaries",
    "Strategic partners",
  ],
  navigation: [
    { href: "/firm/", label: "About" },
    { href: "/strategy/", label: "What We Do" },
    { href: "/focus/", label: "Focus" },
    { href: "/criteria/", label: "Criteria" },
    { href: "/partnerships/", label: "Partnerships" },
    { href: "/insights/", label: "Insights" },
  ],
  sitemapGroups: [
    {
      label: "Company",
      links: [
        { href: "/firm/", label: "About" },
        { href: "/strategy/", label: "What We Do" },
        { href: "/criteria/", label: "Investment Criteria" },
        { href: "/insights/", label: "Insights" },
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
    {
      label: "Legal",
      links: [
        { href: "/privacy/", label: "Privacy Policy" },
        { href: "/terms/", label: "Terms of Use" },
        { href: "/disclosures/", label: "Disclosures" },
      ],
    },
  ],
};

export function linkArrow(label, href, className = "text-link") {
  return `<a class="${className}" href="${href}"><span>${label}</span><span aria-hidden="true">↗</span></a>`;
}

export function cloudLayer() {
  return `<div class="scroll-clouds" aria-hidden="true">
    <span class="scroll-cloud-field"></span>
  </div>`;
}

export function pageIntro({ index, eyebrow, title, copy, variant = "navy" }) {
  return `
    <section class="page-hero page-hero--${variant}"${variant === "blue" ? ' data-scroll-sky' : ""}>${variant === "blue" ? `
      ${cloudLayer()}` : ""}
      <div class="shell page-hero__grid">
        <div class="page-hero__meta">
          <span>${index}</span>
          <span>${eyebrow}</span>
        </div>
        <div class="page-hero__content">
          <h1>${title}</h1>
          <p>${copy}</p>
        </div>
      </div>
      <div class="page-hero__shape" aria-hidden="true"></div>
    </section>`;
}
