export interface Testimonial {
  slug: string;
  quote: string;
  name: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    slug: "fortedge",
    quote:
      "Working with Klero was seamless. Badr took the time to understand our business and delivered a site that our customers actually comment on.",
    name: "[Name]",
    company: "FortEdge Security",
  },
  {
    slug: "abcare",
    quote:
      "We needed someone who could handle the rebrand and the website together. Badr delivered exactly what we needed, on time and without the runaround.",
    name: "[Name]",
    company: "Abcare",
  },
];

export function getTestimonialBySlug(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}
