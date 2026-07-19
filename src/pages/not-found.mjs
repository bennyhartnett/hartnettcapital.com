import { linkArrow } from "../site.mjs";

export const notFoundPage = {
  path: "/404",
  title: "Page Not Found",
  description: "The requested page could not be found.",
  bodyClass: "not-found",
  body: `
    <section class="not-found__content">
      <div class="shell">
        <p class="section-label">404 / Page not found</p>
        <h1>Nothing to see<br>at this address.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        ${linkArrow("Return home", "/", "button-link")}
      </div>
    </section>`,
};
