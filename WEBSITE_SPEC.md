# Klero Solutions — Website Build Spec
*Instructions for coding agent — Next.js portfolio site for klerosolutions.com*

---

## Overview

Build a single-page marketing website (with anchor navigation) for Klero Solutions, a freelance digital consultancy based in Halifax, Nova Scotia. The site's job is to convert local business owners — people who may not know they need a new website — into booking a 15-minute discovery call.

**The audience is NOT developers.** It's small business owners: plumbers, restaurant owners, dentists, staffing agencies. Every word, design choice, and interaction should be evaluated through their eyes. If it feels "techy," it's wrong.

**Tech stack:** Next.js + Framer Motion, hosted on klerosolutions.com.

---

## Brand Tokens

| Token | Value |
|---|---|
| Font | Albert Sans (Google Fonts) — SemiBold (600) for headings/wordmark, Regular (400) for body |
| Primary | `#4338ca` (dark indigo) |
| Accent | `#6366f1` (mid indigo) |
| Light BG | `#e0e7ff` (pale indigo, for alternating sections) |
| Dark text | `#1e1b4b` (near-black indigo) |
| Background | `#ffffff` |
| Border/subtle | `#c7d2fe` (light indigo border) |
| Success/positive | `#10b981` (emerald — use sparingly for checkmarks, positive indicators) |

**Mode:** Light mode only. No dark mode toggle. The site should feel warm, open, and inviting — not sleepy or moody.

**Logo:** Abstract geometric K mark inside a circle. Logo assets (SVG) will be provided in primary, accent, light, and dark variants. Use the primary variant in the navbar and the light variant in the footer.

---

## Design Philosophy

### The Goal
A business owner lands on this site and within 5 seconds thinks: "This looks professional. This person clearly knows what they're doing." Within 30 seconds: "They understand my problems." Within 60 seconds: "I should talk to them."

### Visual Direction
- **Clean, spacious, light.** Generous whitespace between sections. Let content breathe. Never cramped.
- **Warm professionalism.** Not corporate-stiff, not startup-playful. Think: the best local contractor you've ever hired — competent, approachable, takes pride in their work.
- **The site itself is the portfolio.** Every interaction, animation, and design detail is silently proving Klero's skill. This is the most important thing to internalize.

### What to Avoid
- Parallax scrolling
- Auto-playing video or audio
- Stock photography (use illustrations, icons, or abstract shapes instead)
- Anything that hurts load time — performance IS part of the pitch
- Dark mode aesthetics (dark backgrounds, neon accents)
- Generic "agency" patterns (floating mockup devices, gradient blobs behind everything)
- Tech jargon anywhere visible to the user (no "React," "API," "fullstack" in headlines)

---

## Interactive & Motion Design

This is a critical differentiator. The site should feel alive and responsive without being distracting. Every animation should feel purposeful — guiding attention or rewarding interaction.

### Global Motion (Framer Motion)

**Scroll-triggered section reveals:**
- Each major section fades in + translates up slightly (20–30px) as it enters the viewport
- Stagger children elements within each section (e.g., heading appears, then subtext 100ms later, then cards 100ms after that)
- Use `whileInView` with `viewport={{ once: true }}` — animations fire once, not repeatedly

**Page-level smoothness:**
- Smooth scroll behavior for anchor links (CSS `scroll-behavior: smooth` + offset for fixed navbar)
- Navbar should have a subtle background blur + shadow that appears on scroll (transparent at top, frosted glass on scroll)

### Micro-Interactions (The Memorable Stuff)

**Service cards:**
- On hover: card lifts slightly (translateY -4px), gains a soft indigo shadow/glow (`0 8px 30px rgba(99, 102, 241, 0.15)`), and the icon within the card subtly scales up or shifts color from dark text to accent
- Transition: 300ms ease-out, smooth and satisfying

**CTA buttons:**
- Primary CTA: solid `#4338ca` background, white text. On hover: background shifts to `#6366f1` (accent), slight scale (1.02), subtle shadow expansion
- The hover should feel like the button is "ready" — eager, not aggressive
- Consider a subtle gradient shift on hover (primary → accent, left to right)

**The hero section — the signature moment:**
- The tagline "Your business is already good. Your digital presence should say so." should have a typewriter or morphing text effect on the second sentence
- Option A (Typewriter): The first sentence appears immediately. The second sentence types itself out character by character, with a blinking cursor that disappears after completion
- Option B (Morphing): The second sentence cycles through alternatives before landing on the final one: "Your digital presence should say so." Alternatives to cycle through: "Your website should match." → "Your online presence should reflect that." → "Your digital presence should say so." (lands and stays)
- Use whichever feels more polished in implementation. Both should be smooth, not janky

**Testimonial section:**
- If multiple testimonials exist, use a subtle auto-rotating carousel (not fast — 6-second intervals) with manual navigation dots
- Each testimonial card should have a subtle entrance animation when it becomes active

**Navigation links:**
- Underline animation on hover: a line that grows from center outward (not instant underline, animated width)

**Scroll progress indicator (optional but nice):**
- A thin indigo line at the very top of the viewport that grows as the user scrolls down the page
- Subtle, almost invisible unless you're looking for it

### One Signature Interactive Element

Include ONE unexpected interactive touch that makes the site memorable — something a visitor would mention if describing the site to someone else. Suggestions (pick the one that executes best):

1. **Magnetic cursor effect on the hero CTA button** — the button subtly follows/attracts toward the cursor when the mouse is nearby (within 50-80px), then snaps back when the cursor leaves. Subtle, not extreme.

2. **Interactive gradient background on the hero** — a soft, slow-moving gradient in the hero section that subtly responds to mouse position, shifting the gradient's focal point. Uses the brand's indigo palette (very light, almost white tones — this is background ambiance, not a color show).

3. **Card tilt effect on service cards** — a subtle 3D tilt that follows the cursor position relative to the card (like a holographic card effect but very restrained — max 3-5 degrees of rotation). Combined with a soft light/shine that follows the tilt.

Whichever is chosen, it must degrade gracefully on mobile (where there's no cursor) — either adapt to touch/gyroscope or simply disable and still look clean.

---

## Site Structure & Content

The site is a single page with anchor navigation. Five sections, each flowing into the next.

### Navigation Bar (Fixed)

- **Left:** Klero Solutions logo (SVG, primary variant) — links to top of page
- **Right:** Section links — Services, Work, About, Contact — plus a primary CTA button: "Let's Talk"
- **Behavior:** Transparent background at page top, gains frosted glass background (`backdrop-filter: blur(10px)`, white at 80% opacity) + subtle bottom shadow after scrolling 50px
- **Mobile:** Hamburger menu, slide-in from right, same links + CTA
- Active section highlighting in the nav as user scrolls (scroll spy)

---

### Section 1: Hero

**Layout:** Full viewport height. Content centered vertically and horizontally (or left-aligned on a wide layout with a decorative/abstract element on the right).

**Content:**

Tagline (H1):
> Your business is already good.
> Your digital presence should say so.

Sub-headline (body text, below tagline, slightly muted color):
> We build websites and digital tools that show up on Google, bring in customers, and make the right first impression — even at 2am when you're asleep.

Primary CTA button:
> Let's Talk

Secondary text link (below CTA):
> See our work ↓

**Design notes:**
- The tagline is the star. Make it big, confident, well-spaced.
- Sub-headline should be max 2 lines on desktop. Concise.
- Apply the signature interactive element here (gradient background, magnetic button, or other).
- Apply the typewriter/morphing text effect on the second line of the tagline.
- No hero image. The motion and typography ARE the visual.

---

### Section 2: Services

**Section heading:**
> What We Build

**Section sub-heading:**
> Every project starts with the same question: what's costing you customers right now?

**Layout:** Grid of 5 service cards (3 columns on desktop, 2 on tablet, 1 on mobile). Each card has an icon, title, and description.

**Cards:**

**Card 1 — Websites & Landing Pages**
- Icon: Globe or browser window
- Description: "A website that actually works for your business — fast, mobile-friendly, built to show up on Google, and designed to turn visitors into customers. Not a template. Not a placeholder. A digital storefront that's open 24/7 and easy to find."

**Card 2 — Booking & Scheduling Systems**
- Icon: Calendar
- Description: "Stop emailing back and forth. We build booking systems that let your customers schedule themselves, send automatic reminders, and reduce no-shows — so you can focus on the work, not the admin."

**Card 3 — Internal Tools & Dashboards**
- Icon: Layout/grid or chart
- Description: "Custom tools that replace the spreadsheets and manual processes slowing your team down. Track what matters, automate what doesn't, and get your time back."

**Card 4 — AI Chat & Automation**
- Icon: Message bubble with sparkle/bot indicator
- Description: "An assistant on your website that knows your business — your services, your prices, your FAQs — and handles customer questions while you sleep. Smart, helpful, always on."

**Card 5 — Ongoing Support & Maintenance**
- Icon: Shield with checkmark or wrench
- Description: "Your site doesn't end at launch. We keep it updated, secure, running fast, and showing up in search results — and when you need changes, you have someone who picks up the phone."

**Design notes:**
- Cards should have the hover lift/glow effect described in the interactions section
- Consider adding the tilt effect here if not used in the hero
- Each card's icon should use the accent color (`#6366f1`) and subtly animate on card hover (scale up, color shift, or slight rotation)
- White card backgrounds with subtle border (`#c7d2fe`) or shadow, on the pale indigo section background (`#e0e7ff`)

---

### Section 3: Work / Case Studies

**Section heading:**
> Our Work

**Section sub-heading:**
> Real projects. Real results. Here's what we've built.

**Layout:** Featured case study card(s). For now, this section holds placeholder content for FortEdge Security and Abcare. Design it to accommodate 2–4 case studies over time.

**Case study card structure (each):**
- Project thumbnail/screenshot (placeholder image for now — use a styled rectangle with the company name)
- Client name
- One-line description of what was built
- A "View Case Study" link/button (these will eventually link to full case study pages, but for now can link to a modal or expanded section)

**Placeholder content:**

**FortEdge Security**
- Description: "A professional web presence for a Halifax-based security company — giving them credibility that matches the quality of their service."
- Tags: Website, Design, Development

**Abcare (Staffing Rebrand)**
- Description: "A complete website overhaul for a company transitioning from home care to staffing — new brand, new site, new first impression."
- Tags: Website, Rebrand, Development

**Below the case studies — testimonial area:**

Placeholder testimonials (will be replaced with real ones):

> "Working with Klero was seamless. Badr took the time to understand our business and delivered a site that our customers actually comment on."
> — [Name], FortEdge Security

> "We needed someone who could handle the rebrand and the website together. Badr delivered exactly what we needed, on time and without the runaround."
> — [Name], Abcare

**Design notes:**
- Case study cards should be large and visual — this section needs to feel substantial even with only 2 projects
- Testimonials should feel personal and warm — consider a slightly different background treatment (white cards on the pale indigo, or vice versa)
- Testimonial cards should include quotation marks as a large decorative element (oversized " in accent color, partially behind the text)

---

### Section 4: The Process

**Section heading:**
> How It Works

**Section sub-heading:**
> No jargon. No mystery. Here's exactly what working with us looks like.

**Layout:** A vertical timeline or numbered step sequence (1 → 2 → 3 → 4 → 5). Each step has a number, title, and short description.

**Steps:**

**1. Discovery Call**
> We start with a 15-minute conversation. You tell us what's frustrating you — missed leads, an outdated site, manual processes — and we figure out if we're the right fit.

**2. Proposal & Plan**
> Within a few days, you get a clear proposal: what we'll build, what it costs, and how long it takes. No surprises. No hidden fees.

**3. Design & Build**
> We design and develop your project, checking in with you at key milestones. You see progress, give feedback, and stay in the loop without needing to micromanage.

**4. Review & Launch**
> You review the final product. We handle revisions, testing, and deployment. When you're happy, we launch.

**5. Ongoing Support**
> After launch, we don't disappear. We're here for updates, maintenance, and whatever comes next. You have one person you can call.

**Design notes:**
- Each step should animate in sequentially as the user scrolls (staggered reveal)
- The step numbers should be prominent — large, bold, in the accent color
- A connecting line or path between steps reinforces the "journey" feeling
- This section builds trust by removing uncertainty — the design should feel clean and reassuring

---

### Section 5: Built, Not Templated (Comparison Section)

**Section heading:**
> Built, Not Templated

**Section sub-heading:**
> Your business isn't generic. Your website shouldn't be either.

**Layout:** Two-column comparison. Left column represents "cookie-cutter" (Wix/template sites). Right column represents "built for your business" (Klero). The Klero column should be visually emphasized (brighter, bolder, or with the accent color treatment).

**Comparison rows:**

| Cookie-Cutter Site | Built for Your Business |
|---|---|
| Looks like your competitor | Looks like *you* |
| Works for everyone, optimized for no one | Built around how your business makes money |
| You hit a ceiling fast | Grows with you |
| You rent it — forever | You own it outright |
| Breaks and you're on your own | One call and it's handled |
| Invisible to Google out of the box | Built to rank from day one |

**Below the table, a closing line:**
> "Wix gives you a website. We build you a system."

**Design notes:**
- The left column should feel slightly muted/faded (lower opacity, grey-ish)
- The right column should feel alive — full color, maybe checkmark icons in accent color next to each point
- This section should NOT feel aggressive or negative toward Wix. It's confident positioning, not attacking. The design tone should be informative, not combative.
- Consider an animated reveal where the left column appears first, then the right column slides/fades in to replace/complement it

---

### Section 6: About

**Section heading:**
> About Klero

**Layout:** Two-column. Left: photo of Badr (placeholder square for now). Right: text content.

**Content:**

> Hi, I'm Badr — a software developer and the person behind Klero Solutions.
>
> I started Klero because I kept seeing the same thing: great local businesses with websites that didn't do them justice. Outdated designs, broken mobile layouts, booking processes held together with email chains and good intentions.
>
> I have a computer science background and I've worked with businesses here in Halifax to build digital tools that actually solve problems — not just look pretty. Every project I take on, I treat like it's my own business on the line.
>
> When you work with Klero, you work with me directly. One person who understands your goals, builds the solution, and is still around when you need something changed six months later. No account managers. No ticket queues. Just a direct line to the person who built it.

**Below the text:**
> Based in Halifax, Nova Scotia. Working with businesses across the Maritimes.

**Design notes:**
- Photo should be warm, approachable (when real photo is added — for now use a styled placeholder)
- Text should feel personal and conversational, not corporate
- This section can use the white background to contrast with adjacent pale indigo sections

---

### Section 7: Contact

**Section heading:**
> Let's Talk

**Section sub-heading:**
> Got a project in mind? Not sure what you need yet? Either way, I'd love to hear from you.

**Layout:** Two-column on desktop. Left: contact form. Right: supplementary info.

**Form fields:**
1. Name (text input, required)
2. Email (email input, required)
3. What are you looking for? (dropdown select, required)
   - Options: "A new website," "A website redesign," "A booking/scheduling system," "Internal tools or dashboards," "AI chat or automation," "Help getting found on Google (SEO)," "Ongoing support for an existing site," "Something else"
4. Tell us a bit more (textarea, optional, 3-4 rows)
5. Submit button: "Send Message"

**Right column content:**
> **Prefer email?**
> contact@klerosolutions.com
>
> **Response time**
> I respond to every inquiry within 24 hours.
>
> **What happens next?**
> After you reach out, I'll review your message and get back to you to schedule a free 15-minute discovery call. No commitment, no pressure.

**Design notes:**
- Form should feel clean and spacious — not cramped
- Input fields should have a subtle focus state (indigo border glow)
- Submit button uses primary CTA styling
- Success state after submission: form is replaced with a confirmation message — "Thanks! I'll be in touch within 24 hours." with a checkmark animation
- The "what happens next" content on the right reduces anxiety about submitting — it tells them exactly what to expect

---

### Footer

**Layout:** Simple, not heavy. Three columns on desktop.

**Left:** Klero Solutions logo (light variant) + one-liner: "Custom websites and digital tools for small businesses."

**Center:** Quick links — Services, Work, About, Contact (anchor links)

**Right:** contact@klerosolutions.com + location: Halifax, Nova Scotia

**Bottom bar:** © 2025 Klero Solutions. All rights reserved.

**Design notes:**
- Dark background: use `#1e1b4b` (dark text color as background) with light/white text
- Keep it minimal — the footer is not the main event
- No social media links for now (will be added when LinkedIn presence is active)

---

## Responsive Behavior

- **Desktop (1200px+):** Full layouts as described above. Multi-column grids, side-by-side layouts.
- **Tablet (768px–1199px):** Service cards go to 2-column grid. About and Contact sections stack (photo above text, form above info). Case studies go single column.
- **Mobile (< 768px):** Everything single column. Hamburger nav. Hero text can be slightly smaller but still bold and dominant. Service cards stack. Process steps become a simple vertical list. Comparison table stacks (each row becomes a stacked pair).
- All cursor-based interactions (tilt, magnetic button, gradient follow) should gracefully degrade on touch devices — either adapt to touch/gyroscope or simply disable.
- Test that all scroll animations perform smoothly on mobile — reduce complexity if needed for performance.

---

## SEO & Performance Notes

- Page title: "Klero Solutions — Custom Websites & Digital Tools for Small Businesses | Halifax, NS"
- Meta description: "Klero Solutions builds custom websites, booking systems, and digital tools for small businesses in Halifax and the Maritimes. Built to rank on Google, not from a template."
- Use semantic HTML throughout (proper heading hierarchy, landmark elements)
- All images should be optimized (Next.js Image component with lazy loading)
- Target sub-2-second load time — the site's speed is a selling point
- Open Graph tags for social sharing (title, description, and a branded OG image if available)

---

## Content to Be Replaced Later

These items are placeholders and will be swapped in once the abcare project is completed:

1. **Testimonials** — replace placeholder quotes with real testimonials from FortEdge manager and CEO
2. **Case study screenshots** — replace placeholder rectangles with actual project screenshots
3. **Badr's photo** — replace placeholder with real headshot
4. **Case study detail pages** — once there are 3+ projects, consider adding individual case study pages linked from the Work section

---

## Summary of Decisions Made

For reference, here are the strategic decisions locked in through our planning conversations:

- **Tagline:** "Your business is already good. Your digital presence should say so."
- **Light mode only** — warm, inviting, not dark/moody
- **No stats bar** — not enough projects yet to show meaningful numbers; will add later
- **AI objection NOT addressed on site** — kept for in-person conversations only
- **SEO woven in, not a standalone service** — technical and on-page SEO is positioned as built into every website; ongoing SEO work is folded into the support/maintenance retainer. Contact form includes an SEO-specific dropdown option to capture that audience. Not listed as its own service card to avoid competing with dedicated SEO agencies.
- **All 5 services listed** — Badr can deliver all of them and doesn't want to lose interest from potential clients
- **Outcome-first language everywhere** — never lead with tech, always lead with business impact
- **Process section included** — reduces client anxiety and protects against scope creep
- **Recurring revenue (ongoing support) is positioned as a core service**, not an afterthought
- **Contact form includes qualifying dropdown** — filters leads and signals professionalism
- **Comparison section ("Built, Not Templated") included** — positions against Wix/templates without being aggressive
- **Response time (24 hours) featured** — mentioned in contact section as a credibility signal
- **Single-page design with anchor nav** — keeps things focused and fast for an initial launch; can expand to multi-page as the business grows
