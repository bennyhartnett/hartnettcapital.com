import { pageIntro, site } from "../site.mjs";

export const contactPage = {
  path: "/contact/",
  title: "Contact",
  seoTitle: "Contact Hartnett Capital | Share an Opportunity",
  schemaType: "ContactPage",
  description:
    "Contact Hartnett Capital to introduce a business, property, digital asset, dataset, partnership, or other opportunity.",
  body: `
    ${pageIntro({
      index: "06",
      eyebrow: "Share an opportunity",
      title: "Begin a direct,<br>confidential conversation.",
      copy: "We welcome conversations with owners, founders, operators, intermediaries, investors, and strategic partners.",
      variant: "red",
    })}

    <section class="section contact-page">
      <div class="shell contact-page__grid">
        <p class="section-label">Contact Hartnett Capital</p>
        <div>
          <a class="contact-email reveal" href="mailto:${site.email}?subject=Opportunity%20for%20Hartnett%20Capital">${site.email}<span aria-hidden="true">↗</span></a>
          <div class="contact-guidance reveal">
            <div><h2>What to share</h2><p>A concise overview of the business, property, digital asset, dataset, partnership, or other opportunity; relevant context; and why Hartnett Capital may be a fit.</p></div>
            <div><h2>What happens next</h2><p>We review inquiries directly and discreetly. If the opportunity aligns with our interests, we will follow up to request more context or arrange a conversation.</p></div>
          </div>
          <div class="contact-checklist reveal" aria-labelledby="contact-checklist-title">
            <h2 id="contact-checklist-title">A useful first note</h2>
            <ul>
              <li><span>01</span><p><strong>The opportunity</strong>A plain-language description of the business, asset, property, or partnership.</p></li>
              <li><span>02</span><p><strong>The context</strong>Ownership, location, stage, and the reason you are beginning a conversation now.</p></li>
              <li><span>03</span><p><strong>The potential</strong>What is durable today and where focused ownership could make it more valuable.</p></li>
              <li><span>04</span><p><strong>The next step</strong>The person we should speak with and the best way to continue the discussion.</p></li>
            </ul>
          </div>
          <div class="contact-location reveal">
            <p class="eyebrow">Headquartered in</p>
            <p>McLean, Virginia</p>
          </div>
          <p class="contact-privacy">Please do not send sensitive personal information by email. Sending an inquiry does not create an advisory, fiduciary, or other professional relationship.</p>
        </div>
      </div>
    </section>`,
};
