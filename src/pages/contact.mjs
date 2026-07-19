import { pageIntro, site } from "../site.mjs";

export const contactPage = {
  path: "/contact/",
  title: "Contact",
  description:
    "Contact Hartnett Capital to introduce a business, property, digital asset, dataset, partnership, or other opportunity.",
  body: `
    ${pageIntro({
      index: "05",
      eyebrow: "Share an opportunity",
      title: "Begin a direct,<br>confidential conversation.",
      copy: "We welcome conversations with owners, founders, operators, intermediaries, investors, and strategic partners.",
      variant: "red",
    })}

    <section class="section contact-page">
      <div class="shell contact-page__grid">
        <p class="section-label">Contact Hartnett Capital</p>
        <div>
          <a class="contact-email reveal" href="mailto:${site.email}">${site.email}<span aria-hidden="true">↗</span></a>
          <div class="contact-guidance reveal">
            <div><h2>What to share</h2><p>A concise overview of the business, property, digital asset, dataset, partnership, or other opportunity; relevant context; and why Hartnett Capital may be a fit.</p></div>
            <div><h2>What happens next</h2><p>We review inquiries directly and discreetly. If the opportunity aligns with our interests, we will follow up to request more context or arrange a conversation.</p></div>
          </div>
          <p class="contact-privacy">Please do not send sensitive personal information by email. Sending an inquiry does not create an advisory, fiduciary, or other professional relationship.</p>
        </div>
      </div>
    </section>`,
};
