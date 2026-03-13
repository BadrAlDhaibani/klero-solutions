"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
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
        <SectionHeading
          eyebrow="Services"
          title={<>What We <span className="text-accent">Build</span></>}
          subtitle="Every project starts with the same question: what's costing you customers right now?"
        />

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
