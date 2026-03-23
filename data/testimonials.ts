export interface Testimonial {
  slug: string;
  quote: string;
  name: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    slug: "novatrade-atlantic",
    quote:
      "Klero built us a site that makes us look like we have been in business for decades. International partners reach out already impressed before we say a word.",
    name: "Slava Svidler",
    company: "NovaTrade Atlantic",
  },
  {
    slug: "fortedge",
    quote:
      "Working with Klero was seamless. They took the time to understand our business and delivered a site that our customers actually comment on.",
    name: "Ankit Joshi",
    company: "FortEdge Security",
  },
];

export function getTestimonialBySlug(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}
