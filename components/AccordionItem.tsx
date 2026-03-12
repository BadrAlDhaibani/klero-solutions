"use client";

import { motion, AnimatePresence } from "framer-motion";
import { itemVariants } from "@/components/SectionReveal";

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

interface AccordionItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
  id: string;
}

export default function AccordionItem({
  icon: Icon,
  title,
  description,
  isExpanded,
  onToggle,
  id,
}: AccordionItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`border-b border-border transition-colors duration-200 ${
        isExpanded ? "border-l-4 border-l-accent" : "border-l-4 border-l-transparent"
      }`}
    >
      <button
        id={`${id}-header`}
        aria-expanded={isExpanded}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        className="group flex w-full items-center gap-4 p-6 text-left md:p-8"
      >
        <Icon
          className={`h-7 w-7 shrink-0 transition-colors duration-200 ${
            isExpanded ? "text-accent" : "text-dark group-hover:text-accent"
          }`}
        />
        <span className="flex-1 text-lg font-semibold text-dark">{title}</span>
        <motion.span
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" as const }}
          className="shrink-0"
        >
          <ChevronIcon className="h-5 w-5 text-dark/40" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-header`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex gap-4 px-6 pb-6 md:px-8 md:pb-8">
              <div className="w-7 shrink-0" />
              <p className="leading-relaxed text-dark/70">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
