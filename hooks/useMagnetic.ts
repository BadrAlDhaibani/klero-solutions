"use client";

import { useRef, useState, useEffect, useCallback, type CSSProperties } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

interface MagneticReturn {
  ref: React.RefObject<HTMLDivElement | null>;
  style: CSSProperties;
}

export function useMagnetic(options?: MagneticOptions): MagneticReturn {
  const { strength = 0.3, radius = 80 } = options ?? {};
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      // Cancel previous rAF to avoid stacking
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          setStyle({
            transform: `translate(${dx * strength}px, ${dy * strength}px)`,
            transition: "transform 0.15s ease-out",
          });
        } else {
          setStyle({
            transform: "translate(0px, 0px)",
            transition: "transform 0.4s ease-out",
          });
        }
      });
    },
    [strength, radius]
  );

  useEffect(() => {
    // Only enable on devices with hover capability
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return { ref, style };
}
