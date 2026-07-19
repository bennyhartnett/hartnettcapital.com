import { linkArrow, pageIntro } from "../site.mjs";

export const criteriaPage = {
  path: "/criteria",
  title: "Investment Criteria",
  description:
    "See the qualities Hartnett Capital values when evaluating businesses, assets, operators, and special situations.",
  body: `
    ${pageIntro({
      index: "03",
      eyebrow: "Criteria",
      title: "What earns<br>a closer look.",
      copy: "We do not force opportunities into a rigid box. We do look for a consistent set of qualities that can support a strong long-term outcome.",
      variant: "red",
    })}

    <section class="section criteria-detail">
      <div class="shell criteria-detail__intro">
        <p class="section-label">Our lens</p>
        <h2 class="display reveal">Six questions shape our first view.</h2>
      </div>
      <div class="shell criteria-grid">
        <article class="criterion reveal"><span>01</span><h3>Will demand endure?</h3><p>The product, service, or asset solves a real problem that is unlikely to disappear.</p></article>
        <article class="criterion reveal"><span>02</span><h3>Why does it win?</h3><p>Its position is supported by capability, scarcity, relationships, data, brand, or structural advantage.</p></article>
        <article class="criterion reveal"><span>03</span><h3>Are incentives aligned?</h3><p>Capable people have meaningful ownership, sound judgment, and a reputation for integrity.</p></article>
        <article class="criterion reveal"><span>04</span><h3>Are the economics sound?</h3><p>The model can produce attractive returns without relying on fragile assumptions.</p></article>
        <article class="criterion reveal"><span>05</span><h3>Can we understand the downside?</h3><p>Key risks can be identified, evaluated, and addressed through price, structure, or action.</p></article>
        <article class="criterion reveal"><span>06</span><h3>Can we contribute?</h3><p>Our capital, perspective, network, or flexibility can improve the probability of success.</p></article>
      </div>
    </section>

    <section class="section mandate section--blue-soft">
      <div class="shell split-heading">
        <p class="section-label">Mandate</p>
        <div>
          <h2 class="display reveal">Selective by choice.<br>Flexible by design.</h2>
          <dl class="mandate-list reveal">
            <div><dt>Time horizon</dt><dd>Long duration</dd></div>
            <div><dt>Stage</dt><dd>Flexible</dd></div>
            <div><dt>Role</dt><dd>Minority to control</dd></div>
            <div><dt>Structure</dt><dd>Equity, debt, or hybrid</dd></div>
            <div><dt>Geography</dt><dd>Selective</dd></div>
          </dl>
          <p class="mandate-note">Fit is ultimately determined by the quality of the opportunity, not by a checklist alone.</p>
          ${linkArrow("Discuss an opportunity", "/contact")}
        </div>
      </div>
    </section>`,
};
