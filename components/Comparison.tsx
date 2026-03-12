"use client";

import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";

const rows = [
  {
    templated: "Looks like your competitor",
    custom: "Looks like you",
  },
  {
    templated: "Works for everyone, optimized for no one",
    custom: "Built around how your business makes money",
  },
  {
    templated: "You hit a ceiling fast",
    custom: "Grows with you",
  },
  {
    templated: "You rent it forever",
    custom: "You own it outright",
  },
  {
    templated: "Breaks and you're on your own",
    custom: "One call and it's handled",
  },
  {
    templated: "Invisible to Google out of the box",
    custom: "Built to rank from day one",
  },
];

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

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const rowContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Comparison() {
  return (
    <SectionReveal
      id="comparison"
      className="bg-light-bg pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-center text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
        >
          Built, Not Templated
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-dark/70"
        >
          Your business isn&apos;t generic. Your website shouldn&apos;t be
          either.
        </motion.p>

        {/* Comparison table */}
        <motion.div variants={itemVariants} className="mt-12">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 md:gap-8">
            <div className="text-center text-sm font-semibold uppercase tracking-wider text-dark/40">
              Cookie-Cutter Site
            </div>
            <div className="text-center text-sm font-semibold uppercase tracking-wider text-primary">
              Built for Your Business
            </div>
          </div>

          {/* Rows */}
          <motion.div variants={rowContainerVariants}>
            {rows.map((row, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-2 gap-4 border-b border-border md:gap-8"
              >
                {/* Templated column (muted) */}
                <div className="flex items-center gap-3 px-2 py-5 md:px-4">
                  <XIcon className="h-5 w-5 shrink-0 text-dark/25" />
                  <span className="text-sm leading-snug text-dark/40 md:text-base">
                    {row.templated}
                  </span>
                </div>

                {/* Custom column (vivid) */}
                <div className="flex items-center gap-3 px-2 py-5 md:px-4">
                  <CheckIcon className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-semibold leading-snug text-dark md:text-base">
                    {row.custom}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={itemVariants}
          className="mt-12 text-center text-xl font-semibold text-dark md:text-2xl"
        >
          Wix gives you a website.{" "}
          <span className="text-primary">We build you a system.</span>
        </motion.p>
      </div>
    </SectionReveal>
  );
}
