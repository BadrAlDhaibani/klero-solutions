# CLAUDE.md — Klero Solutions Website

## What This Project Is

This is the portfolio website for **Klero Solutions**, a freelance digital consultancy based in Halifax, Nova Scotia. The site's primary goal is to convert local small business owners into booking a 15-minute discovery call. The audience is NOT developers — it's plumbers, restaurant owners, dentists, staffing agencies. Every design and copy decision should be evaluated through their eyes.

## Key Files

- **`WEBSITE_SPEC.md`** — The complete website build spec. This is the source of truth for all content, copy, design decisions, interactions, and section structure. Read this file thoroughly before making any changes. Every section, every piece of copy, every interaction has been carefully planned.

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations and interactions
- **Albert Sans** from Google Fonts (SemiBold 600 for headings, Regular 400 for body)

## Brand Tokens

| Token | Value |
|---|---|
| Primary | `#4338ca` |
| Accent | `#6366f1` |
| Light BG | `#e0e7ff` |
| Dark text | `#1e1b4b` |
| Background | `#ffffff` |
| Border | `#c7d2fe` |
| Success | `#10b981` |

Light mode only. No dark mode.

## Architecture

- Single-page site with anchor navigation (not separate routes for each section)
- Fixed navbar with scroll spy for active section highlighting
- Sections in order: Hero → Services → Work/Case Studies → Process → Built Not Templated (comparison) → About → Contact → Footer
- All section content and copy is defined in `WEBSITE_SPEC.md` — do not improvise copy

## Design Principles

- Clean, spacious, generous whitespace — never cramped
- Warm professionalism — not corporate-stiff, not startup-playful
- The site itself is the portfolio — every interaction proves Klero's skill
- Performance matters — sub-2-second load target, no heavy assets
- No parallax, no auto-playing video, no stock photos, no tech jargon in visible copy
- No dark mode aesthetics, no gradient blobs, no floating device mockups

## Interactions & Motion

All interactions are specified in detail in `WEBSITE_SPEC.md` under "Interactive & Motion Design." Key points:

- Scroll-triggered section reveals with staggered children (Framer Motion `whileInView`, fire once)
- Service card hover: lift + indigo glow + icon animation
- Hero: typewriter or morphing text effect on second tagline line
- Navbar: transparent at top, frosted glass on scroll
- One signature interactive element (magnetic button, interactive gradient, or card tilt — pick what executes best)
- All cursor interactions must degrade gracefully on mobile

## Working Conventions

- Build section by section, not the entire site at once
- Keep components modular — one component per section
- Use Tailwind for all styling, extended with brand tokens in `tailwind.config.ts`
- Framer Motion for all animations — no CSS keyframe animations unless simpler
- All placeholder content (testimonials, case study screenshots, Badr's photo) should use clean styled placeholders, not broken image links
- Form does not need a backend yet — just the UI with a success state on submit

## What NOT to Do

- Do not add any content or copy that isn't in `WEBSITE_SPEC.md`
- Do not use tech jargon (React, API, fullstack, Next.js) anywhere visible to the end user
- Do not add a dark mode toggle
- Do not use stock photography
- Do not add social media links (not ready yet)
- Do not install unnecessary dependencies — keep it lean
