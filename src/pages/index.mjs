import { contactPage } from "./contact.mjs";
import { criteriaPage } from "./criteria.mjs";
import { faqPage } from "./faq.mjs";
import { firmPage } from "./firm.mjs";
import { focusDetailPages } from "./focus-details.mjs";
import { focusPage } from "./focus.mjs";
import { homePage } from "./home.mjs";
import { notFoundPage } from "./not-found.mjs";
import { partnershipDetailPages } from "./partnership-detail.mjs";
import { partnershipsPage } from "./partnerships.mjs";
import { sitemapPage } from "./sitemap.mjs";
import { strategyPage } from "./strategy.mjs";

export const pages = [
  homePage,
  firmPage,
  strategyPage,
  focusPage,
  ...focusDetailPages,
  criteriaPage,
  partnershipsPage,
  ...partnershipDetailPages,
  faqPage,
  contactPage,
  sitemapPage,
];
export { notFoundPage };
