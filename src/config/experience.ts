import { getTechArray } from "./skills";

export type Project = {
  name: string;
  role: string;
  period: string;
  location?: string;
  logo?: string;
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
        name: "Better Design",
        role: "Founder",
        period: "March 2026 – Present",
        location: "San Francisco, CA",
        logo: "/better-design.svg",
        description:
          "Better Design is an MCP server that turns AI coding tools (Cursor, Claude Code, claude.ai) into design engineers — auto-loading UI/UX principles and running accessibility self-reviews so AI-generated UI follows real product-design standards.",
        technologies: [
          ...getTechArray(["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "HONOJS", "DRIZZLEORM"]),
          "Shadcn/ui",
          "PostgreSQL",
          "Inngest",
          "Bun",
        ],
        links: ["https://better-design.com"],
        achievements: [
          "Grew to 92 users and 411 design systems generated, with 124 GitHub stars and 1,222 monthly npm downloads on the MCP server",
          "Built semantic design-system search matching projects to 47+ open-source shadcn/ui design systems, scaffolding the right tokens, an 87-component library, and open-source icon libraries on demand",
          "Shipped one-click MCP install across Cursor, Claude Code, VS Code, Windsurf, ChatGPT, Lovable, v0, and 11+ AI coding tools",
        ],
      },
      {
        name: "ODF",
        role: "Product Engineer",
        period: "July 2025 – March 2026",
        location: "San Francisco, CA",
        logo: "/odf-logo.svg",
        description:
          "Led product and engineering for the platform connecting ODF's founder community, where >1k startups have been created and >$2B raised. Owned the full product lifecycle from scoping and design to shipping across backend, web, and mobile.",
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
        links: ["https://club.joinodf.com", "https://joinodf.com/companies"],
        achievements: [
          "Built the community directory web app in Next.js",
          "Built the mobile app in React Native (Expo), shipped to iOS",
          "Built the backend API on Cloudflare Workers",
          "Shipped real-time messaging with threads and reactions",
        ],
      },
      {
        name: "Procureezy",
        role: "Co-Founder & CTPO",
        period: "April 2024 – September 2024",
        location: "Paris, France",
        logo: "/procureezy.svg",
        description:
          "Procureezy.com is AI sourcing copilot for hardware engineers to tackle the thousands of hours lost in sourcing per engineer per year.",
        technologies: [
          ...getTechArray(["NEXTJS", "TYPESCRIPT", "TAILWINDCSS", "HONOJS", "DRIZZLEORM", "VERCEL", "REACT", "PYTHON", "LANGGRAPH"]),
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
        logo: "/cocktailanddinner-logo.jpg",
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
        logo: "/flowsstudio-logo.jpg",
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
        logo: "/owaste-logo.jpg",
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
