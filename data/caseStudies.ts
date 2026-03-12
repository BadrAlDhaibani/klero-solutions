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
}

export const caseStudies: CaseStudy[] = [
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
  {
    slug: "abcare",
    name: "Abcare (Staffing Rebrand)",
    shortDescription:
      "A complete website overhaul for a company transitioning from home care to staffing. New brand, new site, new first impression.",
    tags: ["Website", "Rebrand", "Development"],
    mockupVariant: "light",
    challenge:
      "Abcare was pivoting from home care services to a staffing agency, and their existing website no longer represented who they were or what they offered. They needed a complete rebrand and a new site that would attract both employers looking for staffing solutions and job seekers looking for work, all while establishing credibility in a new market.",
    solution:
      "We handled the rebrand and the website together, creating a cohesive identity that positions Abcare as a professional staffing partner. The new site clearly separates the experience for employers and job seekers, making it easy for both audiences to find what they need. The design is clean and approachable, reflecting the company's people-first values.",
    results:
      "Abcare launched their staffing business with a polished, professional web presence from day one. The site clearly communicates their new direction and has helped them establish credibility with both employers and candidates in the Halifax market.",
    testimonialSlug: "abcare",
    seoTitle: "Abcare Staffing Website Rebrand",
    seoDescription:
      "How Klero Solutions helped Abcare transition from home care to staffing with a complete website rebrand. New brand, new site, new first impression.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
