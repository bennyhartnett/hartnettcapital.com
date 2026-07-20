import { linkArrow } from "../site.mjs";

const faqs = [
  {
    question: "What is Hartnett Capital?",
    answer:
      "Hartnett Capital is a privately held investment and operating company founded and headquartered in McLean, Virginia.",
  },
  {
    question: "What does Hartnett Capital invest in?",
    answer:
      "Hartnett Capital considers operating companies, commercial and residential real estate, software and platforms, digital assets, proprietary data, intellectual property, brands, media properties, and infrastructure.",
  },
  {
    question: "How does Hartnett Capital create value?",
    answer:
      "Hartnett Capital acquires and builds durable assets, then strengthens them through disciplined operations, technology, automation, data, capital, relationships, and long-term ownership.",
  },
  {
    question: "Who does Hartnett Capital partner with?",
    answer:
      "Hartnett Capital works with business owners, founders, independent operators, property owners, developers, investors, family offices, advisors, intermediaries, and strategic partners.",
  },
  {
    question: "How can I share an opportunity with Hartnett Capital?",
    answer:
      "Send a concise overview and relevant context to inquiries@hartnettcapital.com. Inquiries are reviewed directly and discreetly.",
  },
];

export const homePage = {
  path: "/",
  title: "Hartnett Capital",
  seoTitle: "Hartnett Capital | Private Investment & Operating Company",
  description:
    "Hartnett Capital is a private investment and operating company in McLean, Virginia, acquiring and building durable businesses and differentiated assets.",
  faqs,
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
        <img src="/brand/logos/svg/hartnett-capital-monogram-white.svg" width="190" height="236" alt="">
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
    </section>

    <section class="section pathways" aria-labelledby="pathways-title">
      <div class="shell pathways__intro">
        <p class="section-label">05 / Ways to engage</p>
        <div>
          <h2 class="display reveal" id="pathways-title">Built for opportunities that do not fit a template.</h2>
          <p class="pathways__lede reveal">We begin with the opportunity itself, then determine where ownership, operating capability, technology, relationships, or patient capital can make the greatest difference.</p>
        </div>
      </div>
      <div class="shell pathways__grid">
        <article class="pathway reveal">
          <span>01</span>
          <h3>Owner transitions</h3>
          <p>A thoughtful next chapter for owners who care about continuity, reputation, employees, customers, and what happens after a transaction.</p>
          ${linkArrow("For owners & founders", "/partnerships/")}
        </article>
        <article class="pathway reveal">
          <span>02</span>
          <h3>Operator partnerships</h3>
          <p>Aligned capital and practical support for capable operators with experience, conviction, and a clear plan to build long-term value.</p>
          ${linkArrow("How we partner", "/partnerships/")}
        </article>
        <article class="pathway reveal">
          <span>03</span>
          <h3>Direct opportunities</h3>
          <p>Businesses and differentiated assets where active ownership can preserve durable strengths and unlock overlooked potential.</p>
          ${linkArrow("Review our criteria", "/criteria/")}
        </article>
      </div>
    </section>

    <section class="company-facts section section--blue-soft" aria-labelledby="company-facts-title">
      <div class="shell split-heading">
        <p class="section-label">06 / At a glance</p>
        <div>
          <h2 class="display reveal" id="company-facts-title">Clear answers.<br>Direct access.</h2>
          <dl class="company-facts__list reveal">
            ${faqs
              .map(
                ({ question, answer }) =>
                  `<div><dt>${question}</dt><dd>${answer}</dd></div>`,
              )
              .join("")}
          </dl>
          ${linkArrow("Start a conversation", "/contact/")}
        </div>
      </div>
    </section>`,
};
