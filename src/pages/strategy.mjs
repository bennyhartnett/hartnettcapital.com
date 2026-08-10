import { linkArrow, pageIntro } from "../site.mjs";

const operatingBlocks = [
  ["01", "Acquire", "acquire", "Established assets with a durable foundation.", "We acquire businesses and assets with recurring demand, defensible value, or meaningful growth potential.", ["Operating companies", "Real estate and specialty properties", "Digital, data, and intellectual-property assets"]],
  ["02", "Operate", "operate", "Attention where it changes the outcome.", "We take an active role in strategy, systems, technology, financial performance, and day-to-day execution.", ["Strategy and capital allocation", "Operating systems and accountability", "Technology, automation, and data"]],
  ["03", "Build", "build", "Create when the best asset does not yet exist.", "We launch new companies, products, platforms, datasets, brands, and digital properties when an opportunity is better created than purchased.", ["Internal ventures", "Software and digital products", "Brands, media, and proprietary data"]],
  ["04", "Improve", "improve", "Make strong foundations more valuable.", "We modernize operations through better processes, technology, automation, data, branding, and management.", ["Operational discipline", "Technology-enabled efficiency", "Commercial and brand development"]],
  ["05", "Partner", "partner", "Aligned people expand what is possible.", "We form long-term relationships with founders, operators, investors, property owners, developers, and strategic partners.", ["Operator-led acquisitions", "Joint ventures", "Strategic and capital partnerships"]],
  ["06", "Hold", "hold", "Let exceptional assets compound.", "We prioritize durable ownership and compounding value over short-term financial engineering.", ["Patient capital", "Responsible stewardship", "Flexible time horizons"]],
];

export const strategyPage = {
  path: "/strategy/",
  title: "What We Do",
  seoTitle: "Investment & Operating Strategy | Hartnett Capital",
  schemaType: "WebPage",
  description:
    "Hartnett Capital acquires, operates, builds, improves, partners, and holds durable businesses and differentiated assets.",
  body: `
    ${pageIntro({
      index: "02",
      eyebrow: "What we do",
      title: "Acquire. Operate.<br>Build. Hold.",
      copy: "We combine capital, operating capability, technology, and long-term relationships to strengthen the assets under our control.",
      variant: "blue",
    })}

    <section class="strategy-detail">
${operatingBlocks
        .map(
          ([number, label, id, heading, copy, points], index) => `
            <article class="strategy-block${index % 3 === 1 ? " strategy-block--ivory" : index % 3 === 2 ? " strategy-block--navy" : ""}" id="${id}">
              <div class="shell strategy-block__grid">
                <p class="strategy-block__number">${number}</p>
                <div><p class="section-label${index % 3 === 2 ? " section-label--light" : ""}">${label}</p><h2 class="display reveal">${heading}</h2></div>
                <div class="strategy-block__copy reveal"><p>${copy}</p><h3>Where we focus</h3><ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul></div>
              </div>
            </article>`,
        )
        .join("")}
    </section>

    <section class="section process">
      <div class="shell split-heading">
        <p class="section-label">How we create value</p>
        <div>
          <h2 class="display reveal">Fundamentals first.<br>Execution every day.</h2>
          <ol class="process-list reveal">
            <li><span>01</span><div><h3>Understand</h3><p>Identify the real source of value, the people who sustain it, and the risks that matter.</p></div></li>
            <li><span>02</span><div><h3>Align</h3><p>Match the ownership structure, incentives, and responsibilities to the opportunity.</p></div></li>
            <li><span>03</span><div><h3>Improve</h3><p>Apply focused operating work, technology, data, and capital where they can change the outcome.</p></div></li>
            <li><span>04</span><div><h3>Compound</h3><p>Reinvest in durable advantages and allow long-term ownership to do its work.</p></div></li>
          </ol>
          ${linkArrow("Review our criteria", "/criteria/")}
        </div>
      </div>
    </section>

    <section class="section section--blue-soft structures">
      <div class="shell split-heading">
        <p class="section-label">Structures we use</p>
        <div>
          <h2 class="display reveal">The structure follows<br>the situation.</h2>
          <dl class="mandate-list reveal">
            <div><dt>Outright acquisition</dt><dd>Full ownership &amp; responsibility</dd></div>
            <div><dt>Majority recapitalization</dt><dd>Owners retain a meaningful stake</dd></div>
            <div><dt>Operator-backed acquisition</dt><dd>Capital behind a proven operator</dd></div>
            <div><dt>Joint venture</dt><dd>Shared ownership &amp; complementary roles</dd></div>
            <div><dt>Internal build</dt><dd>New ventures created from scratch</dd></div>
          </dl>
          <p class="mandate-note">We choose the structure after understanding the opportunity — not before. Alignment, responsibilities, and incentives are documented clearly in every case.</p>
          ${linkArrow("Explore partnerships", "/partnerships/")}
        </div>
      </div>
    </section>

    <section class="section first-conversation">
      <div class="shell split-heading">
        <p class="section-label">Getting started</p>
        <div>
          <h2 class="display reveal">What a first conversation looks like.</h2>
          <ol class="process-list reveal">
            <li><span>01</span><div><h3>A short note</h3><p>Send a concise overview of the business, property, or asset and the reason you are reaching out now.</p></div></li>
            <li><span>02</span><div><h3>A direct conversation</h3><p>If there may be a fit, we arrange a call with a decision-maker — typically within a week, no committees.</p></div></li>
            <li><span>03</span><div><h3>A clear next step</h3><p>We tell you plainly whether we want to go deeper, and what that would involve. A fast, honest no is part of the service.</p></div></li>
          </ol>
          ${linkArrow("Share an opportunity", "/contact/")}
          <span class="inline-link-separator" aria-hidden="true"></span>
          ${linkArrow("Review our criteria", "/criteria/")}
        </div>
      </div>
    </section>`,
};
