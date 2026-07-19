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
    </section>`,
};
