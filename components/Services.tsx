"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";
import AccordionItem from "@/components/AccordionItem";
import {
  GlobeIcon,
  CalendarIcon,
  LayoutIcon,
  MessageSparkleIcon,
  ShieldCheckIcon,
} from "@/components/ServiceIcons";

const accordionContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const services = [
  {
    icon: GlobeIcon,
    title: "Websites & Landing Pages",
    description:
      "A website that actually works for your business. Fast, mobile-friendly, built to show up on Google, and designed to turn visitors into customers. Not a template. Not a placeholder. A digital storefront that's open 24/7 and easy to find.",
  },
  {
    icon: CalendarIcon,
    title: "Booking & Scheduling Systems",
    description:
      "Stop emailing back and forth. We build booking systems that let your customers schedule themselves, send automatic reminders, and reduce no-shows. You focus on the work, not the admin.",
  },
  {
    icon: LayoutIcon,
    title: "Internal Tools & Dashboards",
    description:
      "Custom tools that replace the spreadsheets and manual processes slowing your team down. Track what matters, automate what doesn't, and get your time back.",
  },
  {
    icon: MessageSparkleIcon,
    title: "AI Chat & Automation",
    description:
      "An assistant on your website that knows your business: your services, your prices, your FAQs. It handles customer questions while you sleep. Smart, helpful, always on.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Ongoing Support & Maintenance",
    description:
      "Your site doesn't end at launch. We keep it updated, secure, running fast, and showing up in search results. When you need changes, you have someone who picks up the phone.",
  },
];

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
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
              id={`service-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
