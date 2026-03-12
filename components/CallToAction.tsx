"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

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

export default function CallToAction() {
  return (
    <motion.section
      className="bg-light-bg py-20 md:py-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-semibold text-dark md:text-4xl"
        >
          Ready to get started?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg leading-relaxed text-dark/70"
        >
          Book a free 15-minute discovery call and let&apos;s talk about what
          your business needs.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8">
          <MagneticButton href="/#contact">Let&apos;s Talk</MagneticButton>
        </motion.div>
      </div>
    </motion.section>
  );
}
