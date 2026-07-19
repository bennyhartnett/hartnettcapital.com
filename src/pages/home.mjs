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

    <section class="asset-preview section section--blue-soft">
      <div class="shell section-heading">
        <p class="section-label">02 / Where we focus</p>
        <h2 class="display reveal">Useful assets.<br>Unrealized potential.</h2>
      </div>
      <div class="shell asset-preview__grid">
        <a class="asset-preview__item reveal" href="/focus/#companies"><span>01</span><div><h3>Operating companies</h3><p>Established businesses with durable demand and room to improve.</p></div><b aria-hidden="true">↗</b></a>
        <a class="asset-preview__item reveal" href="/focus/#real-estate"><span>02</span><div><h3>Real estate</h3><p>Properties and real assets where active ownership can strengthen value.</p></div><b aria-hidden="true">↗</b></a>
        <a class="asset-preview__item reveal" href="/focus/#software"><span>03</span><div><h3>Software &amp; platforms</h3><p>Useful products with practical workflows and operating leverage.</p></div><b aria-hidden="true">↗</b></a>
        <a class="asset-preview__item reveal" href="/focus/#digital"><span>04</span><div><h3>Digital assets</h3><p>Websites, domains, and media properties with owned distribution.</p></div><b aria-hidden="true">↗</b></a>
        <a class="asset-preview__item reveal" href="/focus/#data"><span>05</span><div><h3>Data &amp; information</h3><p>Proprietary knowledge made more useful through technology.</p></div><b aria-hidden="true">↗</b></a>
        <a class="asset-preview__item reveal" href="/focus/#intellectual-property"><span>06</span><div><h3>IP &amp; brands</h3><p>Distinctive rights with recognition, scarcity, or room to extend.</p></div><b aria-hidden="true">↗</b></a>
      </div>
      <div class="shell asset-preview__link">${linkArrow("Explore all focus areas", "/focus/")}</div>
    </section>

    <section class="focus section section--navy">
      <div class="shell section-heading">
        <p class="section-label section-label--light">03 / What we do</p>
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
          <p class="section-label">04 / Our approach</p>
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
