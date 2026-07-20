import { linkArrow, pageIntro } from "../site.mjs";

const faqGroups = [
  {
    title: "Hartnett Capital",
    items: [
      {
        question: "What is Hartnett Capital?",
        answer:
          "Hartnett Capital is a privately held investment and operating company founded and headquartered in McLean, Virginia. We acquire, build, operate, improve, partner with, and hold durable businesses and differentiated assets.",
      },
      {
        question: "Is Hartnett Capital a private equity fund?",
        answer:
          "Hartnett Capital describes itself as a private investment and operating company. Its flexible mandate and long-term ownership approach are built around the needs of each opportunity rather than a single transaction template.",
      },
      {
        question: "What is Hartnett Capital's investment horizon?",
        answer:
          "We prioritize patient ownership and the long-term compounding of value. The right horizon depends on the asset, but our decisions are not driven by a predetermined short-term exit schedule.",
      },
    ],
  },
  {
    title: "Investment focus",
    items: [
      {
        question: "What does Hartnett Capital invest in?",
        answer:
          "We consider operating companies, commercial and residential real estate, software and platforms, websites and domains, media properties, proprietary data, intellectual property, brands, and related differentiated assets.",
      },
      {
        question: "Does an opportunity need to fit a specific industry?",
        answer:
          "No. Our mandate is intentionally broad. We focus on durable demand, understandable value, defensible advantages, responsible ownership, and a credible path to meaningful improvement.",
      },
      {
        question: "Does Hartnett Capital only acquire established assets?",
        answer:
          "No. We can acquire established assets, improve underperforming operations, partner with capable operators, or build new companies, products, platforms, datasets, brands, and digital properties internally.",
      },
      {
        question: "What characteristics make an opportunity attractive?",
        answer:
          "We value durable demand, sound economics, defensible value, trusted relationships, capable people, room to improve, and the potential to compound through focused long-term ownership.",
      },
    ],
  },
  {
    title: "Partnerships & process",
    items: [
      {
        question: "Who does Hartnett Capital partner with?",
        answer:
          "We work with business owners, founders, independent operators, property owners, developers, investors, family offices, advisors, intermediaries, and strategic partners.",
      },
      {
        question: "What role does Hartnett Capital play after an investment?",
        answer:
          "Our model is active. Depending on the opportunity, we can contribute across strategy, operating systems, technology, automation, data, financial performance, commercial execution, capital allocation, and long-term planning.",
      },
      {
        question: "Can Hartnett Capital support an owner transition?",
        answer:
          "Yes. We welcome conversations with owners considering succession, a sale, recapitalization, or the next stage of growth, especially when continuity, reputation, employees, and customers matter to the outcome.",
      },
      {
        question: "Does Hartnett Capital partner with independent operators?",
        answer:
          "Yes. We are interested in working with experienced operators who have relevant expertise, a clear investment or operating thesis, and a long-term standard for value creation.",
      },
      {
        question: "How are opportunities evaluated?",
        answer:
          "We begin by understanding the asset, the people around it, its durable strengths, its economics, the risks that matter, and the practical work required to improve it. Each opportunity is evaluated on its own merits.",
      },
      {
        question: "How can I share an opportunity?",
        answer:
          "Email a concise overview, relevant context, and the best next contact to inquiries@hartnettcapital.com. Inquiries are reviewed directly and discreetly.",
      },
    ],
  },
];

const faqs = faqGroups.flatMap(({ items }) => items);

export const faqPage = {
  path: "/faq/",
  title: "Frequently Asked Questions",
  breadcrumbLabel: "FAQ",
  seoTitle: "Frequently Asked Questions | Hartnett Capital",
  schemaType: "FAQPage",
  description:
    "Answers to common questions about Hartnett Capital's investment focus, ownership approach, partnerships, evaluation process, and opportunity submissions.",
  faqs,
  body: `
    ${pageIntro({
      index: "07",
      eyebrow: "Frequently asked questions",
      title: "Clear answers.<br>Direct access.",
      copy: "A practical overview of our mandate, ownership approach, partnership model, and how to begin a conversation.",
      variant: "blue",
    })}

    <section class="section faq-page">
      <div class="shell faq-page__groups">
        ${faqGroups
          .map(
            ({ title, items }, groupIndex) => `
              <section class="faq-group" aria-labelledby="faq-group-${groupIndex}">
                <div class="faq-group__heading">
                  <p class="section-label">0${groupIndex + 1}</p>
                  <h2 class="display" id="faq-group-${groupIndex}">${title}</h2>
                </div>
                <dl class="company-facts__list reveal">
                  ${items.map(({ question, answer }) => `<div><dt>${question}</dt><dd>${answer}</dd></div>`).join("")}
                </dl>
              </section>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section focus-standard section--navy">
      <div class="shell split-heading">
        <p class="section-label section-label--light">Still have a question?</p>
        <div>
          <h2 class="display reveal">Start with the opportunity.</h2>
          <div class="two-column-copy two-column-copy--light reveal">
            <p>Our mandate is broad by design, and the quality of an opportunity cannot always be reduced to a checklist.</p>
            <p>Share a concise overview and relevant context. If there may be a fit, we will follow up directly.</p>
          </div>
          ${linkArrow("Contact Hartnett Capital", "/contact/")}
        </div>
      </div>
    </section>`,
};
