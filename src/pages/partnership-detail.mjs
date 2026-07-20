import { linkArrow, pageIntro } from "../site.mjs";

const partnershipDetails = [
  {
    path: "/partnerships/owners-founders/",
    title: "Owners & Founders",
    seoTitle: "Partnerships with Business Owners & Founders | Hartnett Capital",
    description:
      "Hartnett Capital works directly with owners and founders considering succession, a sale, recapitalization, or the next stage of a company's growth.",
    headline: "A thoughtful next chapter for what you built.",
    intro:
      "We work with owners and founders who care about more than a transaction—including continuity, reputation, employees, customers, and the long-term future of the business.",
    context:
      "Every transition carries its own history, priorities, and responsibilities. We begin by understanding what matters to the owner, what makes the company valuable, and what the next chapter should protect or make possible.",
    priorities: [
      ["01", "Direct dialogue", "Conversations with the people responsible for evaluating and operating the opportunity."],
      ["02", "Discretion", "A careful process that respects sensitive information, relationships, and timing."],
      ["03", "Flexible structure", "A willingness to consider the form of transition that best fits the situation."],
      ["04", "Continuity", "Attention to the customers, employees, reputation, and capabilities behind the company."],
    ],
    process: [
      ["01", "Understand the priorities", "Learn why the owner is considering a transition and what a good outcome means."],
      ["02", "Study the business", "Assess the company’s durable strengths, economics, risks, and opportunities to improve."],
      ["03", "Shape the path", "Align on structure, responsibilities, timing, and the role each party will play."],
      ["04", "Build the next chapter", "Preserve what works and invest deliberately in the company’s long-term potential."],
    ],
    closing: "A transition should honor what created the company’s value and give it room to compound.",
  },
  {
    path: "/partnerships/operators/",
    title: "Independent Operators",
    seoTitle: "Independent Operator Partnerships | Hartnett Capital",
    description:
      "Hartnett Capital partners with capable independent operators seeking aligned capital and practical support to acquire, build, or grow durable businesses.",
    headline: "Aligned capital for capable operators.",
    intro:
      "We partner with experienced people who have earned conviction in a business, market, or operating plan and want a long-term partner for the work ahead.",
    context:
      "The best operator partnerships pair clear authority with shared expectations. We value people who know where they can create an advantage, communicate directly, and take responsibility for measurable outcomes.",
    priorities: [
      ["01", "Relevant experience", "Operating knowledge and judgment grounded in the realities of the opportunity."],
      ["02", "Shared conviction", "A clear view of what is durable, what must change, and how value can be created."],
      ["03", "Aligned incentives", "A structure that rewards long-term performance and responsible decision-making."],
      ["04", "Complementary strengths", "A practical division of work across leadership, capital, technology, and execution."],
    ],
    process: [
      ["01", "Define the thesis", "Clarify the target, the operating plan, and the specific source of advantage."],
      ["02", "Test the fit", "Evaluate the opportunity, working relationship, responsibilities, and downside together."],
      ["03", "Align the structure", "Set clear authority, incentives, capital commitments, and decision rights."],
      ["04", "Operate with cadence", "Work from shared priorities, useful measures, direct communication, and patient goals."],
    ],
    closing: "The right partnership gives a strong operator the clarity, support, and time to build lasting value.",
  },
  {
    path: "/partnerships/strategic-partners/",
    title: "Strategic Partners",
    seoTitle: "Strategic, Capital & Advisor Partnerships | Hartnett Capital",
    description:
      "Hartnett Capital works with property owners, developers, investors, family offices, advisors, intermediaries, and strategic partners on aligned opportunities.",
    headline: "Complementary strengths expand what is possible.",
    intro:
      "We work with partners who bring specialized knowledge, proprietary access, operating capability, relationships, or long-term capital to opportunities where alignment matters.",
    context:
      "A useful partnership begins with a clear reason to work together. We look for complementary contributions, direct communication, well-defined responsibilities, and a shared standard for how the opportunity should be evaluated and managed.",
    priorities: [
      ["01", "Distinct contribution", "Expertise, access, relationships, operating capability, or capital that changes the outcome."],
      ["02", "Shared standards", "A common approach to diligence, communication, stewardship, and long-term value."],
      ["03", "Clear responsibilities", "Defined ownership of decisions, workstreams, reporting, and ongoing operations."],
      ["04", "Durable alignment", "Economics and expectations designed for the real time horizon of the opportunity."],
    ],
    process: [
      ["01", "Introduce the opportunity", "Share the asset, context, parties involved, and why the partnership may fit."],
      ["02", "Compare perspectives", "Test the thesis, risks, capabilities, and each party’s intended contribution."],
      ["03", "Define alignment", "Agree on structure, governance, responsibilities, timing, and measures of progress."],
      ["04", "Execute together", "Maintain direct communication and a practical cadence from decision through ownership."],
    ],
    closing: "The strongest partnerships are specific about why each party belongs and what each is responsible for.",
  },
];

function renderPartnershipDetail(detail) {
  return {
    path: detail.path,
    title: detail.title,
    seoTitle: detail.seoTitle,
    schemaType: "WebPage",
    description: detail.description,
    breadcrumbs: [{ name: "Partnerships", path: "/partnerships/" }],
    body: `
      ${pageIntro({
        index: "05",
        eyebrow: detail.title,
        title: detail.headline,
        copy: detail.intro,
        variant: "red",
      })}

      <section class="section page-statement">
        <div class="shell split-heading">
          <p class="section-label">How we begin</p>
          <div>
            <h2 class="display reveal">Understand the people and the opportunity.</h2>
            <div class="two-column-copy reveal"><p>${detail.context}</p><p>We evaluate every relationship individually. The aim is a practical partnership in which incentives, authority, and expectations are understood before the work begins.</p></div>
          </div>
        </div>
      </section>

      <section class="section section--blue-soft principles">
        <div class="shell section-heading section-heading--compact">
          <p class="section-label">What matters</p>
          <h2 class="display reveal">A strong basis for alignment.</h2>
        </div>
        <div class="shell principle-list">
          ${detail.priorities.map(([number, title, copy]) => `<article class="principle reveal"><span>${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}
        </div>
      </section>

      <section class="section partner-process">
        <div class="shell split-heading">
          <p class="section-label">A deliberate process</p>
          <div>
            <h2 class="display reveal">Clarity before commitment.</h2>
            <ol class="partner-process__list reveal">
              ${detail.process.map(([number, title, copy]) => `<li><span>${number}</span><div><h3>${title}</h3><p>${copy}</p></div></li>`).join("")}
            </ol>
          </div>
        </div>
      </section>

      <section class="section feature-quote">
        <div class="shell feature-quote__grid">
          <p class="section-label">Our standard</p>
          <div>
            <blockquote class="reveal">“${detail.closing}”</blockquote>
            <p>If you see a potential fit, send a concise introduction. We review opportunities directly and discreetly.</p>
            ${linkArrow("Start a conversation", "/contact/")}
            <span class="inline-link-separator" aria-hidden="true"></span>
            ${linkArrow("Explore all partnerships", "/partnerships/")}
          </div>
        </div>
      </section>`,
  };
}

export const partnershipDetailPages = partnershipDetails.map(renderPartnershipDetail);
