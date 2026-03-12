"use client";

import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio among those intersecting
      let best: IntersectionObserverEntry | null = null;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
      }
      if (best) {
        setActiveSection(best.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-80px 0px -50% 0px",
      threshold: [0, 0.25, 0.5],
    });

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    observers.push(observer);

    return () => {
      for (const obs of observers) obs.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
