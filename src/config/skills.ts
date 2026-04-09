// Technology constants - keep these in sync with src/pages/experience.astro
export const TECHNOLOGIES = {
  // Frontend Frameworks
  NEXTJS: "NextJS",
  REACT: "React",

  // Languages
  HTML: "HTML",
  CSS: "CSS",
  TYPESCRIPT: "TypeScript",
  JAVASCRIPT: "JavaScript",
  PYTHON: "Python",

  // Styling
  TAILWINDCSS: "TailwindCSS",

  // Backend & APIs
  NODEJS: "NodeJS",
  HONOJS: "HonoJS",
  FASTAPI: "FastAPI",

  // Mobile & Desktop
  REACT_NATIVE: "React Native",
  SWIFTUI: "SwiftUI",
  ELECTRON: "Electron",

  // Infrastructure & Workflow
  VERCEL: "Vercel",
  TEMPORAL: "Temporal",

  // State Management & Data
  REACT_QUERY: "React Query",
  DRIZZLEORM: "DrizzleORM",

  // AI & ML
  LANGGRAPH: "LangGraph",

  // Design & No-Code
  WEBFLOW: "Webflow",
  FIGMA: "Figma"
} as const;

// Core skills constants
export const CORE_SKILLS = [
  "Full Stack Development",
  "Database Management",
  "AI Development",
  "Mobile Development",
  "UI/UX Design",
  "Brand Design",
  "Sales Automation",
  "SEO"
] as const;

// Languages constants
export const LANGUAGES = [
  "🇬🇧 English (fluent)",
  "🇵🇱 Polish (native)",
  "🇫🇷 French (native)",
  "🇳🇱 Dutch (fluent)",
  "🇪🇸 Spanish (basic)"
] as const;

// Helper function to get technology array for experiences
export function getTechArray(techs: (keyof typeof TECHNOLOGIES)[]): string[] {
  return techs.map(tech => TECHNOLOGIES[tech]);
}

// Helper function to check if a technology exists
export function isTechnology(tech: string): tech is keyof typeof TECHNOLOGIES {
  return Object.values(TECHNOLOGIES).includes(tech as any);
}