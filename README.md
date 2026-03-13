# Klero Solutions — Portfolio Website

Marketing website for **Klero Solutions**, a freelance digital consultancy based in Halifax, Nova Scotia. The site's goal is to convert local small business owners into booking a 15-minute discovery call.

**Live at:** klerosolutions.com (not yet deployed)

## Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations and interactions
- **Albert Sans** (Google Fonts) for typography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## What's Been Built

### Homepage Sections
- [x] Navbar -- fixed header, frosted glass on scroll, scroll spy, mobile hamburger menu
- [x] Hero -- typewriter text effect, magnetic CTA button, staggered entrance animations
- [x] Services -- accordion stack layout, 5 service cards with custom icons, expand/collapse
- [x] Work / Case Studies -- 2 case study cards with browser mockups, hover effects, testimonials
- [x] Process -- 5-step vertical timeline with connecting lines, staggered scroll reveal
- [x] Comparison ("Built, Not Templated") -- two-column comparison table, muted vs vivid styling
- [x] About -- two-column layout with photo placeholder and bio
- [x] Contact -- form with dropdown + textarea, success state, info sidebar
- [x] Footer -- dark background, 3 columns, light logo variant

### Subpages (7 total)
- [x] 5 service detail pages (`/services/[slug]`) -- expanded copy, feature lists, related case studies, CTA
- [x] 2 case study pages (`/work/[slug]`) -- challenge/solution/results narrative, testimonials, CTA

### Infrastructure
- [x] Shared data layer (`data/services.ts`, `data/caseStudies.ts`, `data/testimonials.ts`)
- [x] Static generation via `generateStaticParams` for all 11 pages
- [x] Per-page SEO metadata with local keyword targeting
- [x] Reusable components: `SectionReveal`, `MagneticButton`, `BrowserMockup`, `SubpageHero`, `Breadcrumb`, `CallToAction`
- [x] SVG logo assets (Full Lockup, Logo Mark, Wordmark in primary/accent/light/dark variants)

## Still Needed (Before Launch)

- [ ] Replace placeholder testimonial names ("[Name]") with real client names
- [ ] Replace gradient mockup placeholders with real case study screenshots
- [ ] Replace Badr's photo placeholder with real headshot
- [ ] Connect contact form to a backend or email service
- [ ] Final cross-browser and mobile QA pass
- [ ] Deploy to production (klerosolutions.com)

## Future Plans (Post-Launch)

- [ ] Blog section
- [ ] Additional case studies as new projects are completed
- [ ] Social media links (once LinkedIn presence is active)
- [ ] Stats bar in hero area (once there are enough projects for meaningful numbers)
- [ ] Scroll progress indicator (thin indigo line at top of viewport)
- [ ] SEO enhancements (structured data, sitemap, Google Search Console)

## Key Files

| File | Purpose |
|---|---|
| `WEBSITE_SPEC.md` | Complete build spec -- source of truth for all content, copy, and design |
| `CLAUDE.md` | Instructions for the coding agent |
| `data/` | Shared data layer for services, case studies, testimonials |
| `components/` | All UI components, one per section |
| `app/` | Next.js App Router pages and layouts |
