import { linkArrow } from "../site.mjs";

export const notFoundPage = {
  path: "/404",
  title: "Page Not Found",
  description: "The requested page could not be found.",
  noIndex: true,
  bodyClass: "not-found",
  body: `
    <section class="not-found__content">
      <span class="not-found__numeral" aria-hidden="true">404</span>
      <div class="shell">
        <p class="section-label">404 / Page not found</p>
        <h1>Nothing to see<br>at this address.</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        ${linkArrow("Return home", "/", "button-link")}
        <nav class="not-found__links" aria-label="Helpful links">
          <a href="/focus/">Where we focus</a>
          <a href="/criteria/">What we look for</a>
          <a href="/contact/">Share an opportunity</a>
        </nav>
      </div>
    </section>`,
};
