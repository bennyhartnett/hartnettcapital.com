import { linkArrow, pageIntro } from "../site.mjs";

export const firmPage = {
  path: "/firm/",
  title: "About",
  seoTitle: "About Hartnett Capital | Investment & Operating Company",
  breadcrumbLabel: "About",
  schemaType: "AboutPage",
  description:
    "Learn about Hartnett Capital, a privately held investment and operating company in McLean, Virginia, built for active ownership and long-term value.",
  body: `
    ${pageIntro({
      index: "01",
      eyebrow: "About Hartnett Capital",
      title: "Built to own.<br>Equipped to operate.",
      copy: "Founded and headquartered in McLean, Virginia, we are a privately held investment and operating company focused on acquiring, building, and managing durable businesses and differentiated assets.",
    })}

    <section class="section page-statement">
      <div class="shell split-heading">
        <p class="section-label">Our perspective</p>
        <div>
          <h2 class="display reveal">Long-term ownership creates room for meaningful improvement.</h2>
          <div class="two-column-copy reveal">
            <p>Our interests include operating companies, commercial and residential real estate, websites, domains, software products, proprietary datasets, intellectual property, brands, media properties, and infrastructure.</p>
            <p>We seek situations where patient capital, active management, technology, automation, and strong relationships can create durable value. We can acquire established assets, improve underperforming operations, partner with capable operators, or build new ventures internally.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--blue-soft principles">
      <div class="shell section-heading section-heading--compact">
        <p class="section-label">Our values</p>
        <h2 class="display reveal">Standards for ownership.</h2>
      </div>
      <div class="shell principle-list">
        <article class="principle reveal"><span>01</span><h3>Ownership</h3><p>We take responsibility for outcomes and treat every asset as if we intend to own it indefinitely.</p></article>
        <article class="principle reveal"><span>02</span><h3>Integrity</h3><p>We communicate directly, honor our commitments, and protect the trust placed in us.</p></article>
        <article class="principle reveal"><span>03</span><h3>Discipline</h3><p>We make decisions based on fundamentals, evidence, and long-term value.</p></article>
        <article class="principle reveal"><span>04</span><h3>Resourcefulness</h3><p>We find practical ways to improve operations, solve problems, and create value.</p></article>
        <article class="principle reveal"><span>05</span><h3>Stewardship</h3><p>We aim to leave businesses, properties, and relationships stronger than we found them.</p></article>
        <article class="principle reveal"><span>06</span><h3>Independence</h3><p>We maintain the flexibility to pursue opportunities others may overlook or misunderstand.</p></article>
      </div>
    </section>

    <section class="section operating-model" aria-labelledby="operating-model-title">
      <div class="shell section-heading">
        <p class="section-label">What we bring</p>
        <h2 class="display reveal" id="operating-model-title">A flexible mandate.<br>A hands-on model.</h2>
      </div>
      <div class="shell operating-model__grid">
        <article class="operating-model__item reveal"><span>01</span><h3>Independent judgment</h3><p>We evaluate each opportunity on its fundamentals and make decisions with a long-term owner’s perspective.</p></article>
        <article class="operating-model__item reveal"><span>02</span><h3>Direct engagement</h3><p>Partners work directly with decision-makers who remain involved from the first conversation through ownership.</p></article>
        <article class="operating-model__item reveal"><span>03</span><h3>Operating capability</h3><p>We contribute practical work across strategy, systems, technology, automation, data, and commercial execution.</p></article>
        <article class="operating-model__item reveal"><span>04</span><h3>Patient perspective</h3><p>We give strong assets and capable people the time, attention, and reinvestment required to compound.</p></article>
      </div>
    </section>

    <section class="section feature-quote">
      <div class="shell feature-quote__grid">
        <p class="section-label">Our philosophy</p>
        <div>
          <blockquote class="reveal">“Understand what makes an asset valuable. Preserve it. Then improve everything around it.”</blockquote>
          <p>Our decisions are guided by fundamentals rather than trends. We favor durable demand, clear ownership advantages, strong cash-generation potential, and opportunities where focused execution can produce meaningful improvement.</p>
          ${linkArrow("See what we do", "/strategy/")}
        </div>
      </div>
    </section>`,
};
