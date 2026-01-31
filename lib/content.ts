export const SCHEDULE_URL =
  "https://calendly.com/shawn-o6qx/strategy-session?month=2026-02";

export type CaseStudy = {
  id: string;
  brandName: string;
  claim: string;
  summary: string;
  pdfUrl: string;
  keyMetrics: { label: string; value: string }[];
  bullets: string[];
};

export const TOP_STATS = [
  {
    label: "Revenue growth",
    value: "$24M → $55M",
    sub: "in 24 months (Molly Suds)",
  },
  {
    label: "Launch to scale",
    value: "$0 → $1.5M/yr",
    sub: "in 10 months (Spartan Bee Bread)",
  },
  {
    label: "ROAS improvement",
    value: "4.1 → 9.4",
    sub: "Molly Suds",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "barebells",
    brandName: "Barebells",
    claim:
      "Scaled from $3M/yr → $38M/yr in 24 months while improving ROAS 3.8 → 6.8 and securing 99% Buy Box.",
    summary: "Barebells is a Swedish protein bar brand. Before Axis, they had gray-market sellers undercutting prices and inconsistent brand representation on Amazon. We established brand control, rebuilt their ad strategy, and upgraded creative—scaling them to $38M/yr with 99% Buy Box ownership.",
    pdfUrl: "/case-studies/barebells.pdf",
    keyMetrics: [
      { label: "Revenue (24 months)", value: "$3M/yr → $38M/yr" },
      { label: "Conversion rate", value: "+35%" },
      { label: "ROAS", value: "3.8 → 6.8" },
      { label: "Buy Box ownership", value: "99%" },
    ],
    bullets: [
      "Established brand control and consistent pricing (reduced gray-market interference).",
      "Rebuilt advertising strategy for efficient growth and profitability.",
      "Upgraded creative assets to increase engagement and conversion rate.",
      "Improved inventory forecasting and supply chain processes to meet demand.",
    ],
  },
  {
    id: "im-a-nut",
    brandName: "I'M A Nut",
    claim:
      "Grew from $200K/mo → $700K/mo in 9 months while improving ROAS 4.0 → 9.1 and securing 98% Buy Box.",
    summary: "I'M A Nut sells premium nuts and dried fruits. They were stuck at $200K/mo with unauthorized sellers hurting their margins. We removed the unauthorized sellers, optimized their ad structure, and improved creative—growing them to $700K/mo in 9 months.",
    pdfUrl: "/case-studies/im-a-nut.pdf",
    keyMetrics: [
      { label: "Revenue (9 months)", value: "$200K/mo → $700K/mo" },
      { label: "Conversion rate", value: "+28%" },
      { label: "ROAS", value: "4.0 → 9.1" },
      { label: "Buy Box ownership", value: "98%" },
    ],
    bullets: [
      "Established brand control and eliminated unauthorized sellers to stabilize pricing.",
      "Optimized advertising structure to scale efficiently with strong returns.",
      "Improved creative assets to lift conversion rate and revenue.",
      "Streamlined logistics and inventory management to reduce stockouts and missed sales.",
    ],
  },
  {
    id: "molly-suds",
    brandName: "Molly Suds",
    claim:
      "Grew from $24M → $55M in 24 months while improving ROAS 4.1 → 9.4 and lifting conversion +25–35%.",
    summary: "Molly Suds makes natural laundry products. Unauthorized sellers were eroding their pricing and brand experience. We enrolled them in Amazon Transparency, removed unauthorized sellers, and built the ops structure to scale—growing them from $24M to $55M.",
    pdfUrl: "/case-studies/molly-suds.pdf",
    keyMetrics: [
      { label: "Revenue (24 months)", value: "$24M → $55M" },
      { label: "Conversion rate", value: "+25–35%" },
      { label: "ROAS", value: "4.1 → 9.4" },
    ],
    bullets: [
      "Enrolled in Amazon Transparency and enforced brand control.",
      "Removed unauthorized sellers to protect pricing + conversion.",
      "Built the operational + logistics structure to scale reliably.",
      "Improved paid performance with disciplined PPC management.",
    ],
  },
  {
    id: "airnex",
    brandName: "Airnex",
    claim:
      "Grew from $3M → $5M in 18 months while improving ROAS 4.8 → 6.4 and lifting conversion +40–50%.",
    summary: "Airnex sells home and kitchen products. They had unauthorized sellers and underperforming listings. We cleaned up the catalog, rebuilt their listings with better copy and infographics, and managed PPC—growing them from $3M to $5M with 40-50% better conversion.",
    pdfUrl: "/case-studies/airnex.pdf",
    keyMetrics: [
      { label: "Revenue (18 months)", value: "$3M → $5M" },
      { label: "Conversion rate", value: "+40–50%" },
      { label: "ROAS", value: "4.8 → 6.4" },
    ],
    bullets: [
      "Removed unauthorized sellers to protect consistency and trust.",
      "Built an Amazon roadmap and improved listing quality (copy, keywords, infographics).",
      "Implemented PPC management to improve efficiency and scale.",
      "Launched new SKUs with a structured rollout strategy.",
    ],
  },
  {
    id: "spartan",
    brandName: "Spartan Bee Bread",
    claim:
      "Launched from $0 → $1.5M/yr in 10 months while improving ROAS 3.2 → 6.5 (+40% conversion) and earning Amazon's Choice.",
    summary: "Spartan Bee Bread is a superfood supplement brand. They were launching on Amazon from zero. We built their brand presence from scratch, optimized listings, ran profitable PPC, and got them to $1.5M/yr with Amazon's Choice in 10 months.",
    pdfUrl: "/case-studies/spartan.pdf",
    keyMetrics: [
      { label: "Revenue (10 months)", value: "$0 → $1.5M/yr" },
      { label: "Conversion rate", value: "+40%" },
      { label: "ROAS", value: "3.2 → 6.5" },
      { label: "Category traction", value: "Amazon's Choice" },
    ],
    bullets: [
      "Built brand presence and category credibility from scratch.",
      "Optimized keywords, listings, and conversion-focused creative.",
      "Launched aggressive but profitable PPC to drive velocity.",
      "Improved forecasting and fulfillment to avoid stockouts/overstocks.",
    ],
  },
  {
    id: "branch-basics",
    brandName: "Branch Basics",
    claim:
      "Grew from $100K → $1M in 14 months while improving ROAS 3.3 → 5.6 and lifting conversion +25–50%.",
    summary: "Branch Basics makes non-toxic cleaning products. They had unauthorized sellers creating confusion and eroding their brand. We removed unauthorized sellers, rebuilt their listings, and centralized the customer experience—growing them from $100K to $1M.",
    pdfUrl: "/case-studies/branch.pdf",
    keyMetrics: [
      { label: "Revenue (14 months)", value: "$100K → $1M" },
      { label: "Conversion rate", value: "+25–50%" },
      { label: "ROAS", value: "3.3 → 5.6" },
    ],
    bullets: [
      "Removed unauthorized sellers to regain control over pricing and CX.",
      "Rebuilt brand representation across listings (messaging + visual assets).",
      "Centralized customer experience (fulfillment, returns, communication) to reduce confusion.",
      "Improved PPC management to drive efficient, scalable growth.",
    ],
  },
];

export const PACKAGE_SCOPE = [
  {
    title: "PPC & DSP Advertising",
    desc: "Lower ACoS and higher ROI with expertly managed campaigns. Structure, targeting, bids, and negatives built to scale.",
  },
  {
    title: "SEO & Listing Optimization",
    desc: "A+ Content, high-converting imagery, and enhanced brand storytelling. Titles, bullets, and descriptions that rank and convert.",
  },
  {
    title: "Creative Services",
    desc: "Product photography, infographics, and A+ modules designed to turn browsers into buyers.",
  },
  {
    title: "Brand Protection & MAP",
    desc: "Removal of unauthorized resellers, MAP enforcement, and catalog cleanup. We've removed 84+ sellers for a single brand.",
  },
  {
    title: "Logistics & Fulfillment",
    desc: "Inventory purchasing, demand forecasting, DTC fulfillment, and Amazon-compliant prep. No more stockouts.",
  },
  {
    title: "Insights & Analytics",
    desc: "Weekly performance reports, data-driven strategy refinement, and clear metrics to track progress.",
  },
];

export const FAQ = [
  {
    q: "Who is this for?",
    a: "Amazon brands that already have traction but know they're leaving money on the table—conversion, ads efficiency, rank, or operational bottlenecks. Axis works with brands doing $100K+ annually, from emerging DTC brands to global names like Sig Sauer, illy, Ghirardelli, and Castrol.",
  },
  {
    q: "What makes Axis different from other Amazon agencies?",
    a: "Axis is a Top 300 Amazon Seller (out of 2M+ sellers) with $100M+ in sales generated for partners. Unlike agencies that just advise, Axis buys your inventory upfront and operates on margin—meaning they only win when you win. Plus, 99% of their clients stay with them long-term.",
  },
  {
    q: "What happens on the audit + strategy call?",
    a: "You'll receive a free video audit with data-driven analysis of your current Amazon performance. We review your listings, ads, and operational constraints, then give you a clear priority roadmap (what to fix first, what to ignore, and what will move the needle fastest).",
  },
  {
    q: "How does pricing work?",
    a: "No hidden fees—Axis offers full-service support without additional costs. They forecast demand, purchase inventory upfront, and operate on margin. This shared-risk model means their success is directly tied to yours.",
  },
  {
    q: "Do you work with brands with unauthorized sellers?",
    a: "Yes—brand protection is a core specialty. Axis has removed 84+ unauthorized resellers for a single brand (Taramps) and uses legal enforcement, MAP compliance, and Amazon Transparency enrollment to protect your pricing and Buy Box ownership.",
  },
  {
    q: "What kind of results can I expect?",
    a: "Results vary, but Axis has driven 35% average brand growth in the last 6 months across their portfolio. Examples: Taramps grew from $3.4M to $9.6M/yr in 12 months; one client saw 48% sales increase within 3 months.",
  },
  {
    q: "Do you only focus on my best-selling products?",
    a: "No—Axis takes a holistic approach, stocking, promoting, and optimizing your entire product line. They leverage traffic from your best-sellers to drive growth across all SKUs, ensuring every product gets attention.",
  },
  {
    q: "Is this a one-time package or ongoing?",
    a: "This landing page is focused on a free audit + strategy call. If there's a fit, we'll recommend the best path forward (one-time optimization, ongoing management, or a hybrid). Axis is built for long-term partnerships, dedicating time, resources, and capital to your brand's growth.",
  },
];
