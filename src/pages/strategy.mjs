import { linkArrow, pageIntro } from "../site.mjs";

export const strategyPage = {
  path: "/strategy",
  title: "Strategy",
  description:
    "Explore Hartnett Capital's focus across operating businesses, real and strategic assets, and special situations.",
  body: `
    ${pageIntro({
      index: "02",
      eyebrow: "Strategy",
      title: "Flexible in form.<br>Disciplined in judgment.",
      copy: "We invest across a focused set of opportunity types, united by understandable fundamentals and the potential to build lasting value.",
      variant: "blue",
    })}

    <section class="strategy-detail">
      <article class="strategy-block" id="operating-businesses">
        <div class="shell strategy-block__grid">
          <p class="strategy-block__number">01</p>
          <div><p class="section-label">Operating businesses</p><h2 class="display reveal">Businesses built to compound.</h2></div>
          <div class="strategy-block__copy reveal"><p>We are drawn to profitable or emerging companies with differentiated capabilities, sensible economics, and durable customer value.</p><h3>We pay attention to</h3><ul><li>Recurring or resilient demand</li><li>Healthy unit economics</li><li>A credible path to durable growth</li><li>Operators with meaningful alignment</li></ul></div>
        </div>
      </article>
      <article class="strategy-block strategy-block--ivory" id="real-assets">
        <div class="shell strategy-block__grid">
          <p class="strategy-block__number">02</p>
          <div><p class="section-label">Real &amp; strategic assets</p><h2 class="display reveal">Utility, scarcity, and staying power.</h2></div>
          <div class="strategy-block__copy reveal"><p>We consider property, infrastructure, and other assets supported by practical utility, constrained supply, or a distinct location advantage.</p><h3>We pay attention to</h3><ul><li>Clear underlying usefulness</li><li>Replacement cost and supply constraints</li><li>Multiple sources of value</li><li>Durable local or structural demand</li></ul></div>
        </div>
      </article>
      <article class="strategy-block strategy-block--navy" id="special-situations">
        <div class="shell strategy-block__grid">
          <p class="strategy-block__number">03</p>
          <div><p class="section-label section-label--light">Special situations</p><h2 class="display reveal">Complexity can create opportunity.</h2></div>
          <div class="strategy-block__copy reveal"><p>We look at overlooked, transitional, or time-sensitive situations where flexible capital and direct decisions may create an advantage.</p><h3>We pay attention to</h3><ul><li>Understandable complexity</li><li>Protected downside</li><li>Creative but practical structuring</li><li>More than one path to value</li></ul></div>
        </div>
      </article>
    </section>

    <section class="section process">
      <div class="shell split-heading">
        <p class="section-label">Our process</p>
        <div>
          <h2 class="display reveal">Simple by design.<br>Rigorous in practice.</h2>
          <ol class="process-list reveal">
            <li><span>01</span><div><h3>Understand</h3><p>Start with the people, the economics, and the real source of advantage.</p></div></li>
            <li><span>02</span><div><h3>Underwrite</h3><p>Study what must go right, what can go wrong, and what remains true across scenarios.</p></div></li>
            <li><span>03</span><div><h3>Structure</h3><p>Match the capital and ownership approach to the opportunity.</p></div></li>
            <li><span>04</span><div><h3>Support</h3><p>Stay engaged where our perspective and network can be useful.</p></div></li>
          </ol>
          ${linkArrow("Review our criteria", "/criteria")}
        </div>
      </div>
    </section>`,
};
