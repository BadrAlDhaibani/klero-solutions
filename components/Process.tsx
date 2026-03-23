"use client";

import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  );
}

function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
}

function HeadsetIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

const stepIcons = [PhoneIcon, ClipboardIcon, CodeBracketIcon, RocketIcon, HeadsetIcon];

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
        <SectionHeading
          eyebrow="Process"
          title={<>How It <span className="text-accent">Works</span></>}
          subtitle="No jargon. No mystery. Here's exactly what working with us looks like."
        />

        <motion.div variants={stepsContainerVariants} className="mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                {/* Step icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-accent bg-white md:h-16 md:w-16">
                  {(() => {
                    const Icon = stepIcons[index];
                    return <Icon className="h-6 w-6 text-accent md:h-7 md:w-7" />;
                  })()}
                </div>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border" />
                )}
              </div>

              {/* Content */}
              <div className={index === steps.length - 1 ? "relative" : "relative pb-12"}>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2 right-0 select-none text-8xl font-bold leading-none text-dark/5 md:text-9xl"
                >
                  {step.number}
                </span>
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
