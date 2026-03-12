"use client";

import { motion } from "framer-motion";
import TypewriterText from "@/components/TypewriterText";
import MagneticButton from "@/components/MagneticButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Tagline */}
        <motion.h1
          className="text-4xl font-semibold leading-tight tracking-tight text-dark md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          Your business is{" "}
          <span className="text-accent">already good</span>.
          <br />
          <TypewriterText
            segments={[
              { text: "Your digital presence should " },
              { text: "say so", className: "text-accent" },
              { text: "." },
            ]}
            speed={50}
            delay={800}
          />
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-dark/70 md:text-xl"
          variants={itemVariants}
        >
          Websites and digital tools that bring in customers and make the
          right first impression, even while you sleep.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          <MagneticButton href="#contact">Let&apos;s Talk</MagneticButton>

          <motion.a
            href="#work"
            className="mt-2 inline-flex items-center gap-1 text-base font-medium text-accent transition-colors hover:text-primary"
          >
            See our work
            <motion.span
              className="inline-block"
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              ↓
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
