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
      index: "07",
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
          <div class="contact-copy">
            <button class="copy-email" type="button" data-email="${site.email}">Copy email address</button>
            <span class="copy-email__status" role="status" aria-live="polite"></span>
          </div>
          <div class="contact-form reveal">
            <h2 id="contact-form-title">Or send a structured note</h2>
            <p>Prefer a form? Share the essentials below and it will reach the same inbox.</p>
            <form class="intake-form" aria-labelledby="contact-form-title" method="post"
              action="${site.formEndpoint || `mailto:${site.email}`}"${site.formEndpoint ? "" : ' enctype="text/plain"'}
              data-intake-form data-endpoint="${site.formEndpoint}"
              data-subject="Opportunity for Hartnett Capital">
              <input type="hidden" name="form-type" value="opportunity">
              <input type="hidden" name="_subject" value="Opportunity for Hartnett Capital">
              <div class="hp-field" aria-hidden="true">
                <label>Leave this field empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label>
              </div>
              <div class="form-field">
                <label for="intake-name">Name</label>
                <input id="intake-name" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
              </div>
              <div class="form-field">
                <label for="intake-email">Email address</label>
                <input id="intake-email" name="email" type="email" autocomplete="email" placeholder="name@company.com" required>
              </div>
              <div class="form-field">
                <label for="intake-organization">Organization <span aria-hidden="true">·</span> optional</label>
                <input id="intake-organization" name="organization" type="text" autocomplete="organization" placeholder="Company, firm, or asset name">
              </div>
              <div class="form-field">
                <label for="intake-type">Opportunity type</label>
                <select id="intake-type" name="opportunity-type" required>
                  <option value="" selected disabled>Select the closest fit</option>
                  <option>Operating company</option>
                  <option>Real estate</option>
                  <option>Software or platform</option>
                  <option>Digital asset or media property</option>
                  <option>Data or information asset</option>
                  <option>Intellectual property or brand</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-field form-field--full">
                <label for="intake-message">Message</label>
                <textarea id="intake-message" name="message" placeholder="A concise overview of the opportunity, relevant context, and the best next step." required aria-describedby="contact-checklist-title"></textarea>
              </div>
              <button class="access-submit" type="submit">Send note <span aria-hidden="true">→</span></button>
              <p class="form-status" role="status" aria-live="polite" data-form-status hidden></p>
              <p class="contact-form__privacy">Please do not include sensitive personal information. Unless a written agreement is in place, submissions are received on a non-confidential basis — see our <a href="/terms/">Terms of Use</a> and <a href="/privacy/">Privacy Policy</a>.</p>
            </form>
          </div>
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
