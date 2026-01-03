import { TECHNOLOGIES, getTechArray } from "./skills";

export type Project = {
  name: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  technologies: string[];
  links?: string[];
  achievements?: string[];
};

export type ExperienceSection = {
  title: string;
  projects: Project[];
};

export const ExperienceData: ExperienceSection[] = [
  {
    title: "WORK EXPERIENCE",
    projects: [
      {
        name: "ODF",
        role: "Product Engineer",
        period: "December 2025 – Present",
        location: "San Francisco, CA",
        description: "",
        technologies: [
          ...getTechArray(["NEXTJS", "REACT", "REACT_NATIVE", "TYPESCRIPT", "TAILWINDCSS", "HONOJS", "DRIZZLEORM"]),
          "Expo",
          "TanStack Query",
          "Zustand",
          "Zod",
          "Shadcn/ui",
          "TipTap",
          "Framer Motion",
          "Auth0",
          "Cloudflare Workers",
          "Upstash Redis",
        ],
        links: ["https://joinodf.com"],
      },
      {
        name: "Procureezy",
        role: "Co-Founder & CTPO",
        period: "April 2024 – September 2024",
        location: "Paris, France",
        description:
          "Procureezy.com is AI sourcing copilot for hardware engineers to tackle the thousands of hours lost in sourcing per engineer per year.",
        technologies: [
          ...getTechArray(["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "HONOJS", "DRIZZLEORM", "VERCEL", "REACT", "LANGGRAPH"]),
          "Shadcn/ui",
          "Nuqs",
          "OpenAPI",
          "Neon",
          "Zod",
          "Clerk",
          "PostHog",
          "Bun",
          "Docker",
          "Better Auth",
          "Langfuse",
          "Vercel AI SDK",
          "Python",
        ],
        links: [
          "https://web.archive.org/web/20250906221019/https://procureezy.com/",
          "https://platform.procureezy.com",
        ],
        achievements: [
          "Designed, developed and iterated with beta testers to build a procurement SaaS tool (platform.procureezy.com) to help hardware engineers collaborate. Also led demo calls to sell the product to potential leads.",
        ],
      },
      {
        name: "CocktailAndDinner",
        role: "Founder",
        period: "Oct. 2021 – Dec. 2023",
        location: "Brussels, Belgium",
        description:
          "Marketplace to rent kitchens and dining rooms of private homes",
        technologies: [
          ...getTechArray(["REACT_NATIVE", "SWIFTUI", "NEXTJS", "WEBFLOW", "JAVASCRIPT", "CSS"]),
          "Brand Design",
          "SEO",
        ],
        links: [
          "https://cocktailanddinner.webflow.io/homes",
          "https://cocktailanddinner.webflow.io/host-onboarding",
          "https://cocktailanddinner.webflow.io/blog",
          "https://cocktailanddinner.webflow.io",
        ],
        achievements: [
          "Designed the brand, logo, design system, and website; developed the marketplace using Webflow",
          "Created an efficient onboarding flow for homeowners",
          'Developed a blog using a "hub and spoke" model, reaching 3K monthly active users (+25% MoM)',
          "Analyzed user data to redesign the landing page, tripling conversion rates",
        ],
      },
      {
        name: "FlowsStudio",
        role: "Freelance",
        period: "Oct. 2021 - Present",
        location: "Remote",
        description:
          "Designed and developed websites for early-stage startups, SMEs and non-profits.",
        technologies: getTechArray(["REACT", "NEXTJS", "TAILWINDCSS", "WEBFLOW", "FIGMA"]),
        links: [
          "https://flowsstudio.webflow.io/",
          "https://contra.com/marvin_kaunda/work",
          "https://mynextplay.org",
          "https://jasmineyadeta.com",
          "https://aperofrancophone.com",
          "https://glittering-puffpuff-9674a3.netlifyapp/",
        ],
        achievements: [
          "Portfolio site: https://flowsstudio.webflow.io/",
          "Freelance profile: https://contra.com/marvin_kaunda/work",
          "Non-profit projects: mynextplay.org, jasmineyadeta.com",
          "React/TailwindCSS projects: aperofrancophone.com and others",
        ],
      },
      {
        name: "Owaste",
        role: "Founder",
        period: "Sept. 2020 – March 2021",
        location: "Brussels, Belgium",
        description:
          "An eco-friendly e-commerce for sustainable men's products. (built as part of my master thesis)",
        technologies: [
          ...getTechArray(["WEBFLOW"]),
          "E-commerce",
          "UX Design",
          "Analytics",
        ],
        links: ["https://owaste.webflow.io/"],
        achievements: [
          "Designed and developed the e-commerce site: https://owaste.webflow.io/",
          "Improved the shopping experience and reduced order time to 2 minutes 14 seconds, leading to 30 orders in 2 weeks with an average order value of 30€.",
        ],
      },
    ],
  },
];
