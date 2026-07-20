import { contactPage } from "./contact.mjs";
import { criteriaPage } from "./criteria.mjs";
import { faqPage } from "./faq.mjs";
import { firmPage } from "./firm.mjs";
import { focusDetailPages } from "./focus-details.mjs";
import { focusPage } from "./focus.mjs";
import { homePage } from "./home.mjs";
import { loginPage } from "./login.mjs";
import { notFoundPage } from "./not-found.mjs";
import { partnershipDetailPages } from "./partnership-detail.mjs";
import { partnershipsPage } from "./partnerships.mjs";
import { sitemapPage } from "./sitemap.mjs";
import { createSearchPage } from "./search.mjs";
import { strategyPage } from "./strategy.mjs";

const contentPages = [
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

export const pages = [...contentPages, createSearchPage(contentPages), loginPage];
export { notFoundPage };
