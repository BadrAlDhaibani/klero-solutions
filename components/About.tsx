"use client";

import { motion } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";

export default function About() {
  return (
    <SectionReveal
      id="about"
      className="bg-white pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          variants={itemVariants}
          className="text-center text-sm font-semibold uppercase tracking-widest text-accent"
        >
          About
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-center text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
        >
          About Klero
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          {/* Photo placeholder */}
          <motion.div
            variants={itemVariants}
            className="mx-auto aspect-square w-full max-w-sm border-2 border-border bg-white md:mx-0"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center border border-border bg-light-bg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="h-10 w-10 text-accent"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="mt-3 text-sm text-dark/40">Photo coming soon</p>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div variants={itemVariants}>
            <p className="text-lg leading-relaxed text-dark/80">
              Hi, I&apos;m Badr, a software developer and the person behind
              Klero Solutions.
            </p>
            <p className="mt-4 leading-relaxed text-dark/70">
              I started Klero because I kept seeing the same thing: great local
              businesses with websites that didn&apos;t do them justice. Outdated
              designs, broken mobile layouts, booking processes held together
              with email chains and good intentions.
            </p>
            <p className="mt-4 leading-relaxed text-dark/70">
              I have a computer science background and I&apos;ve worked with
              businesses here in Halifax to build digital tools that actually
              solve problems, not just look pretty. Every project I take on, I
              treat like it&apos;s my own business on the line.
            </p>
            <p className="mt-4 leading-relaxed text-dark/70">
              When you work with Klero, you work with me directly. One person
              who understands your goals, builds the solution, and is still
              around when you need something changed six months later. No account
              managers. No ticket queues. Just a direct line to the person who
              built it.
            </p>
            <p className="mt-6 text-sm font-semibold text-accent">
              Based in Halifax, Nova Scotia. Working with businesses across the
              Maritimes.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
