import { linkArrow } from "../site.mjs";

export const homePage = {
  path: "/",
  title: "Hartnett Capital",
  description:
    "Founded and headquartered in McLean, Virginia, Hartnett Capital acquires, builds, and operates companies, real estate, digital assets, software, intellectual property, and proprietary data.",
  bodyClass: "home",
  body: `
    <section class="home-hero">
      <div class="home-hero__main">
        <p class="hero-kicker">Private investment &amp; operating company</p>
        <div>
          <h1>Building enduring value through ownership and operation.</h1>
          <div class="home-hero__lower">
            <p>Founded and headquartered in McLean, Virginia, Hartnett Capital acquires, builds, and operates companies, real estate, digital assets, software, intellectual property, and proprietary data.</p>
            <div class="hero-actions">
              ${linkArrow("Share an opportunity", "/contact/", "button-link")}
              ${linkArrow("About Hartnett Capital", "/firm/")}
            </div>
          </div>
        </div>
      </div>
      <div class="home-hero__visual" aria-hidden="true">
        <span>Hartnett / Investment + Operations</span>
        <img src="/hc-logo.svg" width="190" height="236" alt="">
        <p>Acquire.<br>Operate.<br>Build.<br>Hold.</p>
      </div>
    </section>

    <section class="manifesto section">
      <div class="shell split-heading">
        <p class="section-label">01 / Our mission</p>
        <div>
          <h2 class="display reveal">Build value that compounds across generations.</h2>
          <div class="two-column-copy reveal">
            <p>We acquire and build enduring companies and assets, strengthen them through disciplined operations, and create lasting value through technology, data, relationships, and long-term ownership.</p>
            <p>We invest with the intention of being responsible, engaged owners—preserving what already works, improving what does not, and building toward the asset’s long-term potential.</p>
          </div>
          ${linkArrow("Learn how we are built", "/firm/")}
        </div>
      </div>
    </section>

    <section class="focus section section--navy">
      <div class="shell section-heading">
        <p class="section-label section-label--light">02 / What we do</p>
        <h2 class="display reveal">Active ownership.<br>Disciplined execution.</h2>
      </div>
      <div class="shell focus-grid">
        <a class="focus-card reveal" href="/strategy/#acquire">
          <span>01</span><h3>Acquire</h3><p>Established businesses and assets with durable demand, defensible value, or meaningful growth potential.</p><b aria-hidden="true">↗</b>
        </a>
        <a class="focus-card reveal" href="/strategy/#operate">
          <span>02</span><h3>Operate</h3><p>Hands-on work across strategy, systems, technology, financial performance, and execution.</p><b aria-hidden="true">↗</b>
        </a>
        <a class="focus-card reveal" href="/strategy/#build">
          <span>03</span><h3>Build</h3><p>New companies, products, platforms, datasets, brands, and digital properties created internally.</p><b aria-hidden="true">↗</b>
        </a>
      </div>
    </section>

    <section class="standards section">
      <div class="shell standards__grid">
        <div>
          <p class="section-label">03 / Our approach</p>
          <h2 class="display reveal">Patient ownership.<br>Lasting value.</h2>
        </div>
        <div class="standards__list reveal">
          <div><span>01</span><p>Long-term ownership</p></div>
          <div><span>02</span><p>Active operations</p></div>
          <div><span>03</span><p>Technology-enabled improvement</p></div>
          <div><span>04</span><p>Relationship-driven growth</p></div>
          ${linkArrow("Explore what we do", "/strategy/")}
        </div>
      </div>
    </section>`,
};
