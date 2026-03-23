"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  ctaHref: string;
  activeHash?: string;
}

export default function MobileMenu({ isOpen, onClose, navLinks, ctaHref, activeHash }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col bg-white px-8 py-6 shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="self-end p-2 text-dark hover:text-accent transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Nav links */}
            <nav aria-label="Main navigation" className="my-auto flex flex-col justify-between py-8" style={{ minHeight: "45%" }}>
              {navLinks.map((link) => {
                const hash = link.href.replace(/^\/?#/, "");
                const active = activeHash === hash;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className={`border-l-4 px-5 py-3.5 text-xl font-semibold transition-colors hover:text-primary ${
                      active
                        ? "border-accent text-primary"
                        : "border-transparent text-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="border-t border-border/30 pt-6 mb-4">
            <Link
              href={ctaHref}
              onClick={onClose}
              className="block bg-primary px-6 py-3.5 text-center text-lg font-semibold text-white shadow-none transition-all duration-300 hover:bg-accent hover:shadow-[0_4px_14px_rgba(99,102,241,0.5)]"
            >
              Let&apos;s Talk
            </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
