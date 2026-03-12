"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal, { itemVariants } from "@/components/SectionReveal";

const SERVICE_OPTIONS = [
  "A new website",
  "A website redesign",
  "A booking/scheduling system",
  "Internal tools or dashboards",
  "AI chat or automation",
  "Help getting found on Google (SEO)",
  "Ongoing support for an existing site",
  "Something else",
];

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionReveal
      id="contact"
      className="bg-light-bg pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          variants={itemVariants}
          className="text-center text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Contact
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-3 text-center text-3xl font-semibold text-dark md:text-4xl lg:text-5xl"
        >
          Let&apos;s Talk
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-dark/70"
        >
          Got a project in mind? Not sure what you need yet? Either way,
          I&apos;d love to hear from you.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-12"
        >
          {/* Form */}
          <div className="md:col-span-3">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  className="flex flex-col items-center justify-center border border-border bg-light-bg px-8 py-16 text-center"
                >
                  <CheckCircleIcon className="h-16 w-16 text-success" />
                  <p className="mt-4 text-2xl font-semibold text-dark">
                    Thanks!
                  </p>
                  <p className="mt-2 text-dark/70">
                    I&apos;ll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-dark"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 block w-full border border-border bg-white px-4 py-3 text-dark placeholder:text-dark/30 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-dark"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full border border-border bg-white px-4 py-3 text-dark placeholder:text-dark/30 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-dark"
                    >
                      What are you looking for?
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="block w-full appearance-none border border-border bg-white px-4 py-3 pr-10 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-dark/40" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-dark"
                    >
                      Tell us a bit more{" "}
                      <span className="font-normal text-dark/40">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-2 block w-full resize-none border border-border bg-white px-4 py-3 text-dark placeholder:text-dark/30 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="A few details about your project or what you're looking for..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-accent hover:shadow-lg md:w-auto"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Info sidebar */}
          <div className="space-y-8 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark">
                Prefer email?
              </h3>
              <a
                href="mailto:contact@klerosolutions.com"
                className="mt-2 block text-accent transition-colors hover:text-primary"
              >
                contact@klerosolutions.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark">
                Response time
              </h3>
              <p className="mt-2 leading-relaxed text-dark/70">
                I respond to every inquiry within 24 hours.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-dark">
                What happens next?
              </h3>
              <p className="mt-2 leading-relaxed text-dark/70">
                After you reach out, I&apos;ll review your message and get back
                to you to schedule a free 15-minute discovery call. No
                commitment, no pressure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
