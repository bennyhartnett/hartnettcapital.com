import { linkArrow } from "../site.mjs";

export const homePage = {
  path: "/",
  title: "Hartnett Capital",
  description:
    "Hartnett Capital is an independent family office investing permanent capital with patience, flexibility, and long-term conviction.",
  bodyClass: "home",
  body: `
    <section class="home-hero">
      <div class="home-hero__main">
        <p class="hero-kicker">Independent family office</p>
        <div>
          <h1>Built to own<br>for the long term.</h1>
          <div class="home-hero__lower">
            <p>We invest our own capital behind enduring businesses, differentiated assets, and opportunities where thoughtful ownership can create lasting value.</p>
            ${linkArrow("Discover the firm", "/firm", "button-link")}
          </div>
        </div>
      </div>
      <div class="home-hero__visual" aria-hidden="true">
        <span>Hartnett / Family Office / 2026</span>
        <img src="/hc-logo.svg" width="190" height="236" alt="">
        <p>Permanent capital.<br>Patient ownership.<br>Long-term conviction.</p>
      </div>
    </section>

    <section class="manifesto section">
      <div class="shell split-heading">
        <p class="section-label">01 / Our perspective</p>
        <div>
          <h2 class="display reveal">Think in generations.<br>Act with conviction.</h2>
          <div class="two-column-copy reveal">
            <p>Hartnett Capital is designed around patience, discretion, and direct accountability. Our permanent capital lets us evaluate each opportunity on its own merits.</p>
            <p>We concentrate on a limited number of situations where sound judgment, flexible structure, and an ownership mindset can make a real difference.</p>
          </div>
          ${linkArrow("How we are built", "/firm")}
        </div>
      </div>
    </section>

    <section class="focus section section--navy">
      <div class="shell section-heading">
        <p class="section-label section-label--light">02 / Investment focus</p>
        <h2 class="display reveal">A flexible mandate.<br>A consistent standard.</h2>
      </div>
      <div class="shell focus-grid">
        <a class="focus-card reveal" href="/strategy#operating-businesses">
          <span>01</span><h3>Operating<br>Businesses</h3><p>Durable companies with differentiated capabilities and room to compound.</p><b aria-hidden="true">↗</b>
        </a>
        <a class="focus-card reveal" href="/strategy#real-assets">
          <span>02</span><h3>Real &amp; Strategic<br>Assets</h3><p>Useful, scarce assets supported by enduring demand or distinct advantage.</p><b aria-hidden="true">↗</b>
        </a>
        <a class="focus-card reveal" href="/strategy#special-situations">
          <span>03</span><h3>Special<br>Situations</h3><p>Complex opportunities where speed, creativity, and flexible capital matter.</p><b aria-hidden="true">↗</b>
        </a>
      </div>
    </section>

    <section class="standards section">
      <div class="shell standards__grid">
        <div>
          <p class="section-label">03 / What matters</p>
          <h2 class="display reveal">Clear fundamentals.<br>Durable relevance.</h2>
        </div>
        <div class="standards__list reveal">
          <div><span>01</span><p>Demand that endures</p></div>
          <div><span>02</span><p>A defensible position</p></div>
          <div><span>03</span><p>Aligned, capable people</p></div>
          <div><span>04</span><p>Asymmetric potential</p></div>
          ${linkArrow("View our criteria", "/criteria")}
        </div>
      </div>
    </section>`,
};
