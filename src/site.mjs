export const site = {
  name: "Hartnett Capital",
  description:
    "Hartnett Capital is an independent family office investing permanent capital in enduring businesses, real assets, and special situations.",
  email: "inquiries@hartnettcapital.com",
  navigation: [
    { href: "/firm", label: "The Firm" },
    { href: "/strategy", label: "Strategy" },
    { href: "/criteria", label: "Criteria" },
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
