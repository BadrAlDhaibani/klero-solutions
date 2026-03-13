"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import MobileMenu from "./MobileMenu";

const BASE_NAV_LINKS = [
  { label: "Services", hash: "services" },
  { label: "Projects", hash: "projects" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

const SECTION_IDS = ["hero", "services", "projects", "process", "comparison", "about", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const activeSection = useActiveSection(isHomepage ? SECTION_IDS : []);

  const navLinks = useMemo(
    () =>
      BASE_NAV_LINKS.map((link) => ({
        label: link.label,
        href: isHomepage ? `#${link.hash}` : `/#${link.hash}`,
      })),
    [isHomepage]
  );

  const ctaHref = isHomepage ? "#contact" : "/#contact";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (hash: string) => {
    if (!isHomepage) return false;
    if (hash === "process" && activeSection === "comparison") return true;
    return activeSection === hash;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-[4px]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            onClick={(e) => {
              if (isHomepage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/klero-lockup-primary.svg"
              alt="Klero Solutions"
              width={180}
              height={35}
              className="hidden h-9 w-auto md:block"
              priority
            />
            <Image
              src="/klero-mark-primary.svg"
              alt="Klero Solutions"
              width={36}
              height={36}
              className="h-9 w-9 md:hidden"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const hash = link.href.replace(/^\/?#/, "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative py-2 text-sm font-semibold text-dark transition-colors hover:text-primary"
                >
                  <span
                    className={isActive(hash) ? "text-primary" : ""}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-center bg-primary transition-transform duration-300 ${
                      isActive(hash)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href={ctaHref}
              className="bg-primary px-6 py-2 text-sm font-semibold text-white shadow-none transition-all duration-300 hover:bg-accent hover:shadow-[0_4px_14px_rgba(99,102,241,0.5)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 text-dark md:hidden hover:text-accent transition-colors"
            aria-label="Open menu"
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
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        ctaHref={ctaHref}
        activeHash={isHomepage ? (activeSection === "comparison" ? "process" : activeSection) : undefined}
      />
    </>
  );
}
