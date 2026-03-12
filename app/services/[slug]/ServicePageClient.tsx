"use client";

import { motion } from "framer-motion";
import SubpageHero from "@/components/SubpageHero";
import CallToAction from "@/components/CallToAction";
import RelatedCaseStudies from "@/components/RelatedCaseStudies";
import { getServiceIcon } from "@/components/ServiceIcons";
import type { Service } from "@/data/services";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface ServicePageClientProps {
  service: Service;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  const Icon = getServiceIcon(service.iconKey);

  return (
    <>
      <SubpageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: service.title },
        ]}
        label="Service"
        title={service.title}
        description={service.shortDescription}
        icon={Icon}
      />

      {/* Expanded content */}
      <motion.section
        className="bg-white py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto max-w-3xl px-6">
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-dark/80"
          >
            {service.longDescription}
          </motion.p>

          {/* Features */}
          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-semibold text-dark">
              What you get
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span className="leading-relaxed text-dark/70">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Related case studies */}
      {service.relatedCaseStudySlugs.length > 0 && (
        <RelatedCaseStudies slugs={service.relatedCaseStudySlugs} />
      )}

      <CallToAction />
    </>
  );
}
