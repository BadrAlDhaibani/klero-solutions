export interface CaseStudy {
  slug: string;
  name: string;
  shortDescription: string;
  tags: string[];
  mockupVariant: "dark" | "light";
  challenge: string;
  solution: string;
  results: string;
  testimonialSlug: string;
  seoTitle: string;
  seoDescription: string;
  screenshotSrc?: string;
  websiteUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "novatrade-atlantic",
    name: "NovaTrade Atlantic",
    shortDescription:
      "A premium corporate website for a Canadian international trading company, built to earn trust with global partners before the first handshake ever happens.",
    tags: ["Website", "Brand Identity", "Development", "SEO"],
    mockupVariant: "light",
    challenge:
      "NovaTrade Atlantic is a newly launched international trading company based in Nova Scotia, specializing in Canadian food exports and industrial equipment. When they came to us, they had no web presence at all. For a company trying to build partnerships with distributors and buyers across four continents, that is a serious problem. International B2B buyers research potential partners online before they ever pick up the phone. Without a professional site, NovaTrade was invisible and risked looking unestablished next to competitors who have been online for years.",
    solution:
      "We built a seven-page corporate website designed to project authority and credibility from the first click. The site is structured around NovaTrade's two divisions, food products and industrial equipment, each with rich, detailed content that signals real expertise to buyers and performs well in search. It loads fast on any connection worldwide, includes structured data for SEO from day one, and features a contact system with an 80+ country dropdown that tells international investors this company is ready to do business globally.",
    results:
      "NovaTrade Atlantic now has a digital presence that matches the scale of their ambitions. Instead of explaining who they are over email, they can point potential partners to a site that tells the full story, from Canadian sourcing standards to logistics capabilities across four continents. The design quality, content depth, and attention to detail give a new company something critical: it makes them look established, which is exactly what you need when asking someone overseas to trust you with their supply chain.",
    testimonialSlug: "novatrade-atlantic",
    seoTitle: "NovaTrade Atlantic Corporate Website",
    seoDescription:
      "How Klero Solutions built a premium corporate website for NovaTrade Atlantic, a Canadian international trading company, to earn trust with global partners.",
    screenshotSrc: "/screenshots/novatrade-atlantic.png",
    websiteUrl: "novatradeatlantic.com",
  },
  {
    slug: "fortedge-security",
    name: "FortEdge Security",
    shortDescription:
      "A professional web presence for a Halifax-based security company, giving them credibility that matches the quality of their service.",
    tags: ["Website", "Design", "Development"],
    mockupVariant: "dark",
    challenge:
      "FortEdge Security had built a strong reputation through word-of-mouth, but their online presence told a different story. Their website was outdated, difficult to navigate on mobile, and did not reflect the professionalism their clients experienced in person. Potential customers searching for security services in Halifax were finding competitors with more polished sites instead.",
    solution:
      "We built a clean, professional website from scratch that puts FortEdge's services and credibility front and center. The site loads fast, looks sharp on every device, and is structured to rank for local security-related searches. Clear calls to action make it easy for potential clients to request a quote or learn about specific services.",
    results:
      "FortEdge now has a web presence that matches the quality of their work. The site gives them credibility with new prospects before the first conversation even happens, and their team has received direct feedback from customers who found them through Google and were impressed by the site.",
    testimonialSlug: "fortedge",
    seoTitle: "FortEdge Security Website",
    seoDescription:
      "How Klero Solutions built a professional website for FortEdge Security in Halifax, giving them a web presence that matches the quality of their service.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
