import { linkArrow, pageIntro } from "../site.mjs";

const partners = [
  ["01", "Business owners", "Owners considering succession, a sale, or the next stage of growth.", "/partnerships/owners-founders/"],
  ["02", "Founders", "Founders seeking an engaged, long-term operating partner.", "/partnerships/owners-founders/"],
  ["03", "Independent operators", "Capable operators looking to acquire or grow a company.", "/partnerships/operators/"],
  ["04", "Property owners", "Owners and developers pursuing acquisitions, redevelopment, or joint ventures.", "/partnerships/strategic-partners/"],
  ["05", "Investors &amp; family offices", "Long-term capital partners with aligned interests and complementary capabilities.", "/partnerships/strategic-partners/"],
  ["06", "Advisors &amp; intermediaries", "Brokers, advisors, and professionals with proprietary access or knowledge.", "/partnerships/strategic-partners/"],
];

export const partnershipsPage = {
  path: "/partnerships/",
  title: "Partnerships",
  seoTitle: "Owner, Founder & Operator Partnerships | Hartnett Capital",
  schemaType: "CollectionPage",
  description:
    "Hartnett Capital partners with owners, founders, operators, investors, property owners, developers, advisors, and strategic partners.",
  body: `
    ${pageIntro({
      index: "05",
      eyebrow: "Partnerships",
      title: "Relationships before transactions.",
      copy: "The strongest opportunities often begin with aligned people, clear responsibilities, mutual trust, and a shared long-term vision.",
      variant: "blue",
    })}

    <section class="section criteria-detail">
      <div class="shell criteria-detail__intro">
        <p class="section-label">Who we work with</p>
        <h2 class="display reveal">Capable people building the next chapter.</h2>
      </div>
      <div class="shell criteria-grid partnership-grid">
        ${partners
          .map(
            ([number, title, copy, href]) => `<article class="criterion reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p>${linkArrow("Explore this partnership", href)}</article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="section feature-quote">
      <div class="shell feature-quote__grid">
        <p class="section-label">For owners &amp; founders</p>
        <div>
          <blockquote class="reveal">“A transition is rarely only a financial decision.”</blockquote>
          <p>It can involve employees, customers, reputation, family history, and years of personal effort. We approach these situations with discretion, flexibility, and respect for what has been built.</p>
          ${linkArrow("Start a confidential conversation", "/contact/")}
        </div>
      </div>
    </section>

    <section class="section partner-process" aria-labelledby="partner-process-title">
      <div class="shell split-heading">
        <p class="section-label">The path forward</p>
        <div>
          <h2 class="display reveal" id="partner-process-title">Deliberate from the first conversation.</h2>
          <ol class="partner-process__list reveal">
            <li><span>01</span><div><h3>Listen</h3><p>Understand the asset, the people around it, the owner’s priorities, and what a successful outcome means.</p></div></li>
            <li><span>02</span><div><h3>Assess</h3><p>Study the fundamentals, risks, sources of value, and the practical work required to improve the opportunity.</p></div></li>
            <li><span>03</span><div><h3>Align</h3><p>Define responsibilities, incentives, structure, timing, and expectations clearly before moving forward.</p></div></li>
            <li><span>04</span><div><h3>Build</h3><p>Work together with direct communication, measurable priorities, and a long-term standard for ownership.</p></div></li>
          </ol>
        </div>
      </div>
    </section>

    <section class="section partnership-principles">
      <div class="shell split-heading">
        <p class="section-label">How we partner</p>
        <div>
          <h2 class="display reveal">Aligned incentives.<br>Clear responsibilities.</h2>
          <div class="two-column-copy reveal">
            <p>We partner with people who bring operating experience, specialized knowledge, access to unique opportunities, or a shared long-term ambition.</p>
            <p>Our structures are flexible, but our standard is consistent: mutual trust, direct communication, measurable value creation, and responsible stewardship.</p>
          </div>
          ${linkArrow("Discuss a partnership", "/contact/")}
        </div>
      </div>
    </section>`,
};
