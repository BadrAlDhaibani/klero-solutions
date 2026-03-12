"use client";

import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a 15-minute conversation. You tell us what's frustrating you, whether it's missed leads, an outdated site, or manual processes, and we figure out if we're the right fit.",
  },
  {
    number: "02",
    title: "Proposal & Plan",
    description:
      "Within a few days, you get a clear proposal: what we'll build, what it costs, and how long it takes. No surprises. No hidden fees.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and develop your project, checking in with you at key milestones. You see progress, give feedback, and stay in the loop without needing to micromanage.",
  },
  {
    number: "04",
    title: "Review & Launch",
    description:
      "You review the final product. We handle revisions, testing, and deployment. When you're happy, we launch.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "After launch, we don't disappear. We're here for updates, maintenance, and whatever comes next. You have one person you can call.",
  },
];

const stepsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Process() {
  return (
    <SectionReveal
      id="process"
      className="bg-white pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.p
          variants={itemVariants}
          className="text-center text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Process
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-center text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
        >
          How It Works
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-dark/70"
        >
          No jargon. No mystery. Here&apos;s exactly what working with us looks
          like.
        </motion.p>

        <motion.div variants={stepsContainerVariants} className="mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                {/* Step number */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-accent bg-white text-xl font-semibold text-accent md:h-16 md:w-16 md:text-2xl">
                  {step.number}
                </div>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-12 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                <h3 className="pt-3 text-xl font-semibold text-dark md:pt-4 md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-dark/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionReveal>
  );
}
