"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/components/SectionReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const accentLineVariants = {
    hidden: { scaleX: 0, originX: isCenter ? 0.5 : 0 },
    visible: {
      scaleX: 1,
      originX: isCenter ? 0.5 : 0,
      transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.15 },
    },
  };

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <motion.div
          variants={itemVariants}
          className={isCenter ? "flex justify-center" : ""}
        >
          <span className="inline-flex items-center border-l-2 border-accent bg-accent/10 px-3 py-1 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        className="mt-3 inline-block text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
      >
        {title}
        <motion.span
          variants={accentLineVariants}
          className="mt-2 block h-[2px] w-full bg-accent"
          aria-hidden="true"
        />
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`mt-3 max-w-2xl text-lg leading-relaxed text-dark/70${isCenter ? " mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
