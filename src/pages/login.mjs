import { site } from "../site.mjs";

export const loginPage = {
  path: "/login/",
  title: "Portal Access",
  seoTitle: "Request Portal Access | Hartnett Capital",
  description: "Request access to the private Hartnett Capital partner portal, available to invited partners, operators, and collaborators.",
  noIndex: true,
  bodyClass: "login",
  hideFooter: true,
  body: `
    <section class="access-page" aria-labelledby="access-title">
      <div class="access-page__story">
        <div class="access-page__story-inner">
          <p class="section-label section-label--light">Private partner portal</p>
          <div>
            <h2>Built for long-term<br>alignment.</h2>
            <p>A secure home for invited partners, operators, and collaborators.</p>
          </div>
          <p class="access-page__location">Hartnett Capital · McLean, Virginia</p>
        </div>
        <div class="access-page__shape" aria-hidden="true"></div>
      </div>

      <div class="access-page__panel">
        <div class="access-card">
          <a class="access-card__back" href="/"><span aria-hidden="true">←</span> Return to website</a>
          <p class="eyebrow">Invitation-based portal</p>
          <h1 id="access-title">Request access.</h1>
          <p class="access-card__intro">The partner portal is private and available by invitation. Tell us who you are and how you work with the firm, and we will follow up directly. Existing partners who have lost access can use the same form.</p>

          <form class="access-form" method="post"
            action="${site.formEndpoint || `mailto:${site.email}`}"${site.formEndpoint ? "" : ' enctype="text/plain"'}
            data-intake-form data-endpoint="${site.formEndpoint}"
            data-subject="Partner portal access request">
            <input type="hidden" name="form-type" value="portal-access">
            <input type="hidden" name="_subject" value="Partner portal access request">
            <div class="hp-field" aria-hidden="true">
              <label>Leave this field empty<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label>
            </div>
            <div class="form-field">
              <label for="access-name">Name</label>
              <input id="access-name" name="name" type="text" autocomplete="name" placeholder="Your full name" required>
            </div>
            <div class="form-field">
              <label for="access-email">Email address</label>
              <input id="access-email" name="email" type="email" autocomplete="email" placeholder="name@company.com" required>
            </div>
            <div class="form-field">
              <label for="access-relationship">Relationship to the firm</label>
              <select id="access-relationship" name="relationship" required>
                <option value="" selected disabled>Select the closest fit</option>
                <option>Current partner</option>
                <option>Operator</option>
                <option>Advisor or intermediary</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-field">
              <label for="access-note">Note <span aria-hidden="true">·</span> optional</label>
              <textarea id="access-note" name="message" placeholder="Anything that helps us connect your request to the right relationship."></textarea>
            </div>
            <button class="access-submit" type="submit">Request access <span aria-hidden="true">→</span></button>
            <p class="form-status" role="status" aria-live="polite" data-form-status hidden></p>
          </form>

          <div class="access-card__support">
            <p>Prefer email for access questions?</p>
            <a href="mailto:${site.email}?subject=Partner%20portal%20access">Contact Hartnett Capital <span aria-hidden="true">↗</span></a>
          </div>
          <p class="access-card__security">Access is granted by invitation. Requests are reviewed directly by the firm.</p>
        </div>
      </div>
    </section>`,
};
