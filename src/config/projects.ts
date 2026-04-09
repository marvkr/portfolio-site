export type Project = {
  name: string;
  description: string;
  link?: string;
  hackathon?: string;
  winner?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "swift-mcp",
    description:
      "MCP server that feeds AI coding agents curated SwiftUI snippets and learning resources with hybrid semantic + keyword search.",
  },
  {
    name: "system-design-mcp",
    description:
      "MCP server for querying curated system design articles — hybrid semantic + keyword search across 600+ chunks, with architecture diagrams extracted as mermaid syntax.",
  },
  {
    name: "Better Design",
    description:
      "MCP server that turns Cursor, Claude Code, or claude.ai into a design engineer — discovers a matching design system and feeds UI/UX principles so AI-generated UI looks designer-made.",
    link: "https://better-design.com",
  },
  {
    name: "Chief of Staff AI",
    description:
      "AI Chief of Staff for founders and execs — preps you for meetings by researching attendees across 6 sources, pulling context from Gmail and Calendar, and debriefing with persistent semantic memory.",
    link: "https://github.com/marvkr/claw-chief-of-staff",
    hackathon: "OpenClaw Hackathon",
    winner: true,
  },
  {
    name: "DripAdvisor",
    description:
      "AI-powered styling app — upload a photo of yourself, screenshot any clothing, and instantly see yourself wearing it.",
    link: "https://github.com/marvkr/vercel-gemini-sf-hackathon",
    hackathon: "Vercel × Google DeepMind Hackathon SF",
  },
  {
    name: "AI note taking app",
    description:
      "Desktop app with reliable audio recording, crash recovery, and automatic meeting detection.",
  },
  {
    name: "Fixit",
    description:
      "Auto-fixes bugs from Sentry errors using a Claude Agent loop with CodeRabbit reviews and Daytona sandboxes.",
    link: "https://github.com/marvkr/fixit-daytona-hackathon",
    hackathon: "Daytona Hackathon",
  },
  {
    name: "Snag",
    description:
      "Turns screenshots into adaptive retrieval — pre-search intent inference with spatial memory that adapts to user behavior.",
    link: "https://github.com/marvkr/snag-mongodb-hackathon",
    hackathon: "MongoDB Agentic Hackathon",
  },
  {
    name: "Crop-IT",
    description:
      "Weather and agricultural recommendations app for farmers, using NASA Earth observation data.",
    link: "https://github.com/marvkr/NASA-Space-App-Hackaton",
    hackathon: "NASA Space Apps Challenge 2024",
  },
];
