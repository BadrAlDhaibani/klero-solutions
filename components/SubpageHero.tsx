"use client";

import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubpageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  label?: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

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

export default function SubpageHero({
  breadcrumbs,
  label,
  title,
  description,
  icon: Icon,
}: SubpageHeroProps) {
  return (
    <section className="bg-light-bg pt-28 pb-16 md:pt-32 md:pb-20">
      <motion.div
        className="mx-auto max-w-4xl px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Breadcrumb items={breadcrumbs} />
        </motion.div>

        <div className="mt-6 flex items-start gap-4">
          {Icon && (
            <motion.div variants={itemVariants}>
              <Icon className="mt-1 h-10 w-10 shrink-0 text-accent md:h-12 md:w-12" />
            </motion.div>
          )}
          <div>
            {label && (
              <motion.p
                variants={itemVariants}
                className="text-sm font-semibold uppercase tracking-widest text-accent"
              >
                {label}
              </motion.p>
            )}
            <motion.h1
              variants={itemVariants}
              className="mt-1 text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-dark/70"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
