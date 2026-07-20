import { site } from "../site.mjs";

export const loginPage = {
  path: "/login/",
  title: "Partner Sign In",
  seoTitle: "Partner Sign In | Hartnett Capital",
  description: "Private partner portal sign-in for invited Hartnett Capital users.",
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
          <p class="eyebrow">Invitation required</p>
          <h1 id="access-title">Welcome back.</h1>
          <p class="access-card__intro">Enter the email address and password associated with your invitation.</p>

          <form class="access-form" action="/login/" method="post" data-login-form>
            <div class="form-field">
              <label for="login-email">Email address</label>
              <input id="login-email" name="email" type="email" autocomplete="email" placeholder="name@company.com" required>
            </div>
            <div class="form-field">
              <div class="form-field__label">
                <label for="login-password">Password</label>
                <a href="mailto:${site.email}?subject=Partner%20portal%20password%20help">Forgot password?</a>
              </div>
              <div class="password-control">
                <input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" minlength="8" required>
                <button type="button" aria-label="Show password" aria-pressed="false" data-password-toggle>Show</button>
              </div>
            </div>
            <label class="remember-field">
              <input type="checkbox" name="remember" value="yes">
              <span>Keep me signed in on this device</span>
            </label>
            <button class="access-submit" type="submit">Sign in <span aria-hidden="true">→</span></button>
            <p class="access-form__status" role="status" aria-live="polite" data-login-status hidden></p>
          </form>

          <div class="access-card__support">
            <p>Need an invitation or help with access?</p>
            <a href="mailto:${site.email}?subject=Partner%20portal%20access">Contact Hartnett Capital <span aria-hidden="true">↗</span></a>
          </div>
          <p class="access-card__security">Credentials entered here are not stored. Secure account access will be connected to the firm’s identity service.</p>
        </div>
      </div>
    </section>`,
};
