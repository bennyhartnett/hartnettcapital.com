import { pageIntro, site } from "../site.mjs";

export const contactPage = {
  path: "/contact/",
  title: "Contact",
  description:
    "Contact Hartnett Capital regarding investments, acquisitions, partnerships, and proprietary opportunities.",
  body: `
    ${pageIntro({
      index: "04",
      eyebrow: "Private inquiries",
      title: "Bring us something<br>worth owning.",
      copy: "Direct introductions regarding investments, acquisitions, partnerships, and proprietary opportunities are welcome.",
      variant: "red",
    })}

    <section class="section contact-page">
      <div class="shell contact-page__grid">
        <p class="section-label">Start a conversation</p>
        <div>
          <a class="contact-email reveal" href="mailto:${site.email}">${site.email}<span aria-hidden="true">↗</span></a>
          <div class="contact-guidance reveal">
            <div><h2>What to include</h2><p>A concise overview, the opportunity or proposed relationship, relevant financial context, and why you believe Hartnett Capital may be a fit.</p></div>
            <div><h2>What happens next</h2><p>We review inquiries directly. If the opportunity aligns with our focus, we will follow up to request additional context or arrange a conversation.</p></div>
          </div>
          <p class="contact-privacy">Information submitted by email should not include sensitive personal data. Sending an inquiry does not create an advisory, fiduciary, or other professional relationship.</p>
        </div>
      </div>
    </section>`,
};
