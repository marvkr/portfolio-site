export type Project = {
  name: string;
  description: string;
  link?: string;
  hackathon?: string;
  hackathonLogos?: Array<{
    name: string;
    src: string;
  }>;
  winner?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "Warmline",
    description:
      "A proactive AI agent that maps warm connections across contacts, calendars, Gmail, and live professional data, then surfaces the strongest path to an introduction with a drafted opener.",
    link: "https://github.com/marvkr/warmline",
    hackathon: "YC AI Growth Hackathon",
    hackathonLogos: [
      { name: "Y Combinator", src: "/hackathons/y-combinator.svg" },
    ],
  },
  {
    name: "Dispatch",
    description:
      "An AI-native task router that assigns work by capacity, skills, priorities, and deadlines, completes suitable tasks autonomously, and manages progress without workplace chat.",
    link: "https://github.com/marvkr/better-slack",
    hackathon: "Better Hack",
    hackathonLogos: [
      { name: "Better Auth", src: "/hackathons/better-auth.svg" },
    ],
  },
  {
    name: "Chief of Staff AI",
    description:
      "AI Chief of Staff for founders and execs — preps you for meetings by researching attendees across 6 sources, pulling context from Gmail and Calendar, and debriefing with persistent semantic memory.",
    link: "https://github.com/marvkr/claw-chief-of-staff",
    hackathon: "OpenClaw Hackathon",
    hackathonLogos: [{ name: "OpenClaw", src: "/hackathons/openclaw.svg" }],
    winner: true,
  },
  {
    name: "DripAdvisor",
    description:
      "AI-powered styling app — upload a photo of yourself, screenshot any clothing, and instantly see yourself wearing it.",
    link: "https://github.com/marvkr/vercel-gemini-sf-hackathon",
    hackathon: "Vercel × Google DeepMind Hackathon SF",
    hackathonLogos: [
      { name: "Vercel", src: "/hackathons/vercel.svg" },
      { name: "Google DeepMind", src: "/hackathons/google-deepmind.svg" },
    ],
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
    hackathonLogos: [{ name: "Daytona", src: "/hackathons/daytona.svg" }],
  },
  {
    name: "Snag",
    description:
      "Turns screenshots into adaptive retrieval — pre-search intent inference with spatial memory that adapts to user behavior.",
    link: "https://github.com/marvkr/snag-mongodb-hackathon",
    hackathon: "MongoDB Agentic Hackathon",
    hackathonLogos: [{ name: "MongoDB", src: "/hackathons/mongodb.svg" }],
  },
  {
    name: "Crop-IT",
    description:
      "Weather and agricultural recommendations app for farmers, using NASA Earth observation data.",
    link: "https://github.com/marvkr/NASA-Space-App-Hackaton",
    hackathon: "NASA Space Apps Challenge 2024",
    hackathonLogos: [{ name: "NASA", src: "/hackathons/nasa.svg" }],
  },
];
