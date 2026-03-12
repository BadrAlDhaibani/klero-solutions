import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { getTestimonialBySlug } from "@/data/testimonials";
import CaseStudyPageClient from "./CaseStudyPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: study.seoTitle,
    description: study.seoDescription,
    openGraph: {
      title: study.seoTitle,
      description: study.seoDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const testimonial = getTestimonialBySlug(study.testimonialSlug);

  return <CaseStudyPageClient study={study} testimonial={testimonial} />;
}
