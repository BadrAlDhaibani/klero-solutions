"use client";

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
  const { ref, style } = useMagnetic({ strength: 0.3, radius: 80 });

  return (
    <div ref={ref} style={style} className="inline-block">
      <motion.a
        href={href}
        className={`inline-block bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors duration-300 hover:bg-accent hover:shadow-xl ${className ?? ""}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    </div>
  );
}
