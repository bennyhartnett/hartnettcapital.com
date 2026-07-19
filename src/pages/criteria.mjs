import { linkArrow, pageIntro } from "../site.mjs";

const criteria = [
  ["01", "Durable demand", "A product, service, property, or asset supported by recurring or resilient demand."],
  ["02", "Sound economics", "Positive cash flow or a credible, understandable path to profitability."],
  ["03", "Defensible value", "Intellectual property, data, brand equity, digital presence, scarcity, or another ownership advantage."],
  ["04", "Trusted relationships", "Strong customer, community, supplier, or market relationships worth preserving."],
  ["05", "Room to improve", "Clear opportunities for operational, technological, commercial, or management improvement."],
  ["06", "Thoughtful transition", "Owners who care about continuity, reputation, employees, customers, and the next chapter."],
  ["07", "Capable operators", "Experienced people seeking aligned capital and a long-term operating partner."],
  ["08", "Overlooked potential", "Assets that have been underdeveloped, undercapitalized, or poorly managed."],
  ["09", "Long-term fit", "The potential to create meaningful value through patient, responsible ownership."],
];

export const criteriaPage = {
  path: "/criteria/",
  title: "Investment Criteria",
  seoTitle: "Business & Asset Investment Criteria | Hartnett Capital",
  schemaType: "CollectionPage",
  description:
    "Explore the business and asset characteristics Hartnett Capital considers when evaluating acquisitions and partnerships.",
  body: `
    ${pageIntro({
      index: "04",
      eyebrow: "Investment criteria",
      title: "Durable foundations.<br>Meaningful potential.",
      copy: "We are most interested in businesses and assets where long-term ownership, focused execution, and strong relationships can create measurable value.",
      variant: "red",
    })}

    <section class="section criteria-detail">
      <div class="shell criteria-detail__intro">
        <p class="section-label">What earns a closer look</p>
        <h2 class="display reveal">The qualities we value.</h2>
      </div>
      <div class="shell criteria-grid">
        ${criteria
          .map(
            ([number, title, copy]) => `<article class="criterion reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section mandate section--blue-soft">
      <div class="shell split-heading">
        <p class="section-label">Areas of interest</p>
        <div>
          <h2 class="display reveal">A broad mandate.<br>A consistent philosophy.</h2>
          <dl class="mandate-list reveal">
            <div><dt>Companies</dt><dd>Operating &amp; recurring revenue</dd></div>
            <div><dt>Real assets</dt><dd>Real estate, land &amp; infrastructure</dd></div>
            <div><dt>Technology</dt><dd>Software, platforms &amp; applications</dd></div>
            <div><dt>Digital</dt><dd>Websites, domains, data &amp; media</dd></div>
            <div><dt>Intellectual property</dt><dd>Brands, patents, trademarks &amp; licenses</dd></div>
            <div><dt>Structures</dt><dd>Acquisitions, ventures &amp; partnerships</dd></div>
          </dl>
          <p class="mandate-note">Fit is determined by the quality of the opportunity and our ability to contribute—not by a checklist alone.</p>
          ${linkArrow("Explore our focus areas", "/focus/")}
          <span class="inline-link-separator" aria-hidden="true"></span>
          ${linkArrow("Share an opportunity", "/contact/")}
        </div>
      </div>
    </section>`,
};
