"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BrowserMockup from "@/components/BrowserMockup";
import { getCaseStudyBySlug } from "@/data/caseStudies";

interface RelatedCaseStudiesProps {
  slugs: string[];
}

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

export default function RelatedCaseStudies({ slugs }: RelatedCaseStudiesProps) {
  const studies = slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter(Boolean);

  if (studies.length === 0) return null;

  return (
    <motion.section
      className="bg-white py-16 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold text-dark md:text-3xl"
        >
          Related Work
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <motion.div key={study!.slug} variants={itemVariants} className="flex">
              <Link
                href={`/work/${study!.slug}`}
                className="group flex flex-col border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
              >
                <BrowserMockup
                  companyName={study!.name}
                  variant={study!.mockupVariant}
                />
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold text-dark">
                    {study!.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark/60">
                    {study!.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
