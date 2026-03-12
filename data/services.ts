export interface Service {
  slug: string;
  title: string;
  iconKey: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  relatedCaseStudySlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "web-design",
    title: "Websites & Landing Pages",
    iconKey: "globe",
    shortDescription:
      "A website that actually works for your business. Fast, mobile-friendly, built to show up on Google, and designed to turn visitors into customers. Not a template. Not a placeholder. A digital storefront that's open 24/7 and easy to find.",
    longDescription:
      "Your website is the first thing most customers see, and it shapes their opinion of your business before you ever get a chance to speak. We build websites that load fast, look sharp on every device, and are designed from the ground up to bring in new customers. Every page is structured to show up in Google searches for the services you offer and the area you serve. No drag-and-drop templates, no cookie-cutter layouts. We start with your business goals and build something that reflects how you actually work, what makes you different, and why someone should pick up the phone. Whether you need a full company website or a single landing page to promote a specific offer, you get a site that is easy to update, built to grow with you, and yours to keep.",
    features: [
      "Custom design that reflects your brand, not a template",
      "Mobile-friendly and fast on every device",
      "Built to show up in local Google searches",
      "Easy to update without technical knowledge",
      "Designed to turn visitors into leads and customers",
      "You own it outright, no monthly platform fees",
    ],
    relatedCaseStudySlugs: ["fortedge-security", "abcare"],
    seoTitle: "Custom Web Design for Small Businesses in Halifax",
    seoDescription:
      "Klero Solutions builds custom websites for small businesses in Halifax and the Maritimes. Fast, mobile-friendly, and built to rank on Google. No templates.",
  },
  {
    slug: "booking-scheduling",
    title: "Booking & Scheduling Systems",
    iconKey: "calendar",
    shortDescription:
      "Stop emailing back and forth. We build booking systems that let your customers schedule themselves, send automatic reminders, and reduce no-shows. You focus on the work, not the admin.",
    longDescription:
      "If your customers have to call or email to book an appointment, you are losing business to competitors who make it easier. We build booking and scheduling systems that let your customers pick a time that works for them, right from your website. The system handles confirmations, sends automatic reminders before appointments, and reduces the no-shows that cost you money. Whether you run a service-based business, a clinic, a salon, or a consultancy, we tailor the booking flow to match how your business actually operates. Need different appointment types, staff calendars, or buffer times between sessions? We build it in. You get fewer missed calls, less back-and-forth, and more time spent doing the work that pays.",
    features: [
      "Customers book directly from your website, 24/7",
      "Automatic email and text reminders to reduce no-shows",
      "Custom booking flows for different services or staff",
      "Calendar syncing so you never double-book",
      "Built into your existing website, not a separate tool",
      "No per-booking fees or monthly platform charges",
    ],
    relatedCaseStudySlugs: [],
    seoTitle: "Online Booking Systems for Halifax Businesses",
    seoDescription:
      "Custom booking and scheduling systems for small businesses in Halifax. Let customers book online, reduce no-shows with automatic reminders, and save time on admin.",
  },
  {
    slug: "internal-tools",
    title: "Internal Tools & Dashboards",
    iconKey: "layout",
    shortDescription:
      "Custom tools that replace the spreadsheets and manual processes slowing your team down. Track what matters, automate what doesn't, and get your time back.",
    longDescription:
      "Every business has processes that are held together with spreadsheets, email threads, and manual workarounds. They work until they don't, and by the time they break, they have already been costing you hours every week. We build custom internal tools and dashboards that replace those patchwork systems with something purpose-built for how your team actually works. Need to track inventory, manage client records, assign tasks, or generate reports? We build a clean, simple interface that does exactly what you need and nothing you do not. No bloated software with features you will never touch. Just a tool that saves your team time, reduces mistakes, and gives you a clear picture of what is happening in your business.",
    features: [
      "Replace spreadsheets with a purpose-built tool",
      "Track the metrics that matter to your business",
      "Automate repetitive manual processes",
      "Clean, simple interface your team can learn in minutes",
      "Built around your exact workflows, not generic software",
      "Accessible from any device with a browser",
    ],
    relatedCaseStudySlugs: [],
    seoTitle: "Custom Business Dashboards and Internal Tools",
    seoDescription:
      "Custom internal tools and dashboards for small businesses. Replace spreadsheets and manual processes with purpose-built software that saves time and reduces errors.",
  },
  {
    slug: "ai-chat",
    title: "AI Chat & Automation",
    iconKey: "message",
    shortDescription:
      "An assistant on your website that knows your business: your services, your prices, your FAQs. It handles customer questions while you sleep. Smart, helpful, always on.",
    longDescription:
      "Your customers have questions at 10 PM on a Saturday, and they are not going to wait until Monday for an answer. We build AI-powered chat assistants that live on your website and know your business inside and out. They can answer common questions about your services, pricing, hours, and policies instantly, without you lifting a finger. Unlike generic chatbots that frustrate users with scripted responses, these assistants understand context and give helpful, natural answers based on information you provide. When a question needs a human touch, the chat hands off to you with full context so the customer does not have to repeat themselves. It is like having a knowledgeable team member available around the clock.",
    features: [
      "Answers customer questions 24/7, even when you are closed",
      "Trained on your specific services, pricing, and policies",
      "Natural, helpful responses, not robotic scripts",
      "Hands off to you seamlessly when a human is needed",
      "Captures leads and contact information automatically",
      "Gets smarter over time as you refine its knowledge",
    ],
    relatedCaseStudySlugs: [],
    seoTitle: "AI Chat Assistants for Small Business Websites",
    seoDescription:
      "AI-powered chat assistants for your website that know your business. Answer customer questions 24/7, capture leads, and never miss an inquiry. Built by Klero Solutions.",
  },
  {
    slug: "support-maintenance",
    title: "Ongoing Support & Maintenance",
    iconKey: "shield",
    shortDescription:
      "Your site doesn't end at launch. We keep it updated, secure, running fast, and showing up in search results. When you need changes, you have someone who picks up the phone.",
    longDescription:
      "Launching a website is just the beginning. Without regular maintenance, sites slow down, security vulnerabilities pile up, and search rankings slip. We offer ongoing support that keeps your digital presence running at its best. That means regular updates, security monitoring, performance checks, and making sure your site continues to show up when people search for what you do. When you need a change, whether it is updating your hours, adding a new service, or reworking a page, you have a direct line to the person who built it. No ticket queues, no waiting days for a response from someone who has never seen your site before. Just one call or message, and it gets done.",
    features: [
      "Regular updates to keep your site secure and current",
      "Performance monitoring so your site stays fast",
      "SEO upkeep to maintain and improve your search rankings",
      "Direct access to the developer who built your site",
      "Quick turnaround on content changes and updates",
      "Monthly reports so you know what is happening",
    ],
    relatedCaseStudySlugs: ["fortedge-security"],
    seoTitle: "Website Maintenance and Support in Halifax",
    seoDescription:
      "Ongoing website maintenance and support for small businesses in Halifax. Security updates, performance monitoring, SEO upkeep, and a developer who picks up the phone.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
