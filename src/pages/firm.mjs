import { linkArrow, pageIntro } from "../site.mjs";

export const firmPage = {
  path: "/firm",
  title: "The Firm",
  description:
    "Learn how Hartnett Capital's permanent-capital structure supports patient decisions, flexible partnerships, and long-term ownership.",
  body: `
    ${pageIntro({
      index: "01",
      eyebrow: "The firm",
      title: "A family office<br>built to own patiently.",
      copy: "We invest our own capital, answer to our own standards, and build around the time horizon each opportunity deserves.",
    })}

    <section class="section page-statement">
      <div class="shell split-heading">
        <p class="section-label">Our structure</p>
        <div>
          <h2 class="display reveal">Freedom from the fund cycle changes the decisions you can make.</h2>
          <div class="two-column-copy reveal">
            <p>Hartnett Capital is an independent family office. Because we invest permanent capital, we are not driven by fundraising schedules, artificial exit dates, or a requirement to deploy capital on a fixed timetable.</p>
            <p>That structure gives us room to be selective at the outset, pragmatic through change, and patient when a business or asset continues to earn our conviction.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--blue-soft principles">
      <div class="shell section-heading section-heading--compact">
        <p class="section-label">How we work</p>
        <h2 class="display reveal">Our operating principles.</h2>
      </div>
      <div class="shell principle-list">
        <article class="principle reveal"><span>01</span><h3>Concentrated attention</h3><p>We would rather understand a few opportunities deeply than collect a large number of shallow positions.</p></article>
        <article class="principle reveal"><span>02</span><h3>Direct accountability</h3><p>Decisions are made by the people whose capital is at work, allowing for clarity, speed, and consistency.</p></article>
        <article class="principle reveal"><span>03</span><h3>Flexible partnership</h3><p>We can consider different stages, structures, and ownership roles when the underlying opportunity is compelling.</p></article>
        <article class="principle reveal"><span>04</span><h3>Long-duration thinking</h3><p>We focus on what an asset can become over time, not what a near-term market narrative says it is worth.</p></article>
      </div>
    </section>

    <section class="section feature-quote">
      <div class="shell feature-quote__grid">
        <p class="section-label">What that means</p>
        <div>
          <blockquote class="reveal">“The ability to wait is only useful when paired with the willingness to act.”</blockquote>
          <p>We aim to be measured in our analysis and decisive when the facts align.</p>
          ${linkArrow("Explore our strategy", "/strategy")}
        </div>
      </div>
    </section>`,
};
