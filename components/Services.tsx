"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";
import AccordionItem from "@/components/AccordionItem";
import { getServiceIcon } from "@/components/ServiceIcons";
import { services } from "@/data/services";

const accordionContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <SectionReveal
      id="services"
      className="bg-light-bg pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          variants={itemVariants}
          className="text-center text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Services
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-center text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
        >
          What We Build
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-dark/70"
        >
          Every project starts with the same question: what&apos;s costing you
          customers right now?
        </motion.p>

        <motion.div
          variants={accordionContainerVariants}
          className="mt-12 border-t border-border bg-white"
        >
          {services.map((service, index) => (
            <AccordionItem
              key={service.slug}
              icon={getServiceIcon(service.iconKey)}
              title={service.title}
              description={service.shortDescription}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
              id={`service-${index}`}
              href={`/services/${service.slug}`}
            />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
