"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({
  href,
  children,
  className,
}: MagneticButtonProps) {
  const { ref, style } = useMagnetic({ strength: 0.15, radius: 60 });

  return (
    <motion.div
      ref={ref}
      style={style}
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className={`inline-block bg-primary px-10 py-3 text-base font-semibold text-white shadow-none transition-all duration-300 hover:bg-accent hover:shadow-[0_6px_20px_rgba(99,102,241,0.5)] ${className ?? ""}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
