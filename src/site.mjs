export const site = {
  name: "Hartnett Capital",
  description:
    "Hartnett Capital is a private investment and operating company focused on acquiring, building, and managing durable businesses and differentiated assets.",
  email: "inquiries@hartnettcapital.com",
  navigation: [
    { href: "/firm/", label: "About" },
    { href: "/strategy/", label: "What We Do" },
    { href: "/criteria/", label: "Criteria" },
    { href: "/partnerships/", label: "Partnerships" },
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
