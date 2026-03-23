"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import BrowserMockup from "@/components/BrowserMockup";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Work() {
  return (
    <>
      {/* Case Studies */}
      <SectionReveal
        id="projects"
        className="bg-white pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Projects"
            title={<>Our <span className="text-accent">Work</span></>}
            subtitle="Real projects. Real results. Here's what we've built."
            align="left"
          />

          <motion.div
            variants={cardContainerVariants}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.slug}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 30px rgba(99,102,241,0.15)",
                  transition: { duration: 0.15, ease: "easeOut" as const },
                }}
                className="border border-border bg-white"
              >
                <BrowserMockup
                  companyName={study.name}
                  variant={study.mockupVariant}
                  screenshotSrc={study.screenshotSrc}
                  websiteUrl={study.websiteUrl}
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-dark">
                    {study.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-dark/70">
                    {study.shortDescription}
                  </p>
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
                  <Link
                    href={`/work/${study.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    View Case Study
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="translate-y-px"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionReveal>

      {/* Testimonials */}
      <SectionReveal className="bg-light-bg py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h3
            variants={itemVariants}
            className="text-center text-2xl font-semibold text-dark md:text-3xl"
          >
            What Our Clients Say
          </motion.h3>

          <motion.div
            variants={cardContainerVariants}
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.slug}
                variants={itemVariants}
                className="relative border border-border bg-white p-8 md:p-10"
              >
                {/* Decorative quotation mark */}
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
            ))}
          </motion.div>
        </div>
      </SectionReveal>
    </>
  );
}
