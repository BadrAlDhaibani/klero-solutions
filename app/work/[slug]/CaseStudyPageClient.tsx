"use client";

import { motion } from "framer-motion";
import SubpageHero from "@/components/SubpageHero";
import BrowserMockup from "@/components/BrowserMockup";
import CallToAction from "@/components/CallToAction";
import type { CaseStudy } from "@/data/caseStudies";
import type { Testimonial } from "@/data/testimonials";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface CaseStudyPageClientProps {
  study: CaseStudy;
  testimonial?: Testimonial;
}

export default function CaseStudyPageClient({
  study,
  testimonial,
}: CaseStudyPageClientProps) {
  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/#projects" },
          { label: study.name },
        ]}
        label="Case Study"
        title={study.name}
        description={study.shortDescription}
      />

      {/* Browser mockup */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <BrowserMockup
            companyName={study.name}
            variant={study.mockupVariant}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border bg-light-bg px-3 py-1 text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Results */}
      <motion.section
        className="bg-light-bg py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              The Challenge
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-dark/80">
              {study.challenge}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              The Solution
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-dark/80">
              {study.solution}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              The Results
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-dark/80">
              {study.results}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial */}
      {testimonial && (
        <motion.section
          className="bg-white py-16 md:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mx-auto max-w-3xl px-6">
            <motion.div
              variants={itemVariants}
              className="relative border border-border bg-light-bg p-8 md:p-10"
            >
              <span
                className="pointer-events-none absolute top-4 left-4 z-0 text-8xl leading-none font-semibold text-accent/15 select-none md:top-6 md:left-6 md:text-9xl"
                aria-hidden="true"
              >
                {"\u201C"}
              </span>
              <p className="relative z-10 text-lg leading-relaxed text-dark/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="relative z-10 mt-6 flex items-center gap-3">
                <span className="block h-px w-6 bg-accent" />
                <span className="text-sm font-semibold text-dark">
                  {testimonial.name}, {testimonial.company}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      <CallToAction />
    </>
  );
}
