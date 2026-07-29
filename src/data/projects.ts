export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  source?: string;
  outcome: string;
  tags: string[];
  year: string;
  /** Optional video for hover playback */
  video?: string;
  /** Optional frame sequence directory for hover playback */
  frames?: string;
  frameCount?: number;
}

export const PROJECTS: Project[] = [
  {
    title: "CRM — Lead Management",
    category: "Full-Stack Application",
    description:
      "Full-stack CRM with drag-and-drop pipeline, real-time analytics, and multi-user auth managing 500+ leads.",
    image: "/crm-web.png",
    link: "https://github.com/Bilal-03/crm",
    source: "https://github.com/Bilal-03/crm",
    outcome: "500+ leads managed",
    tags: ["React", "Supabase", "Tailwind"],
    year: "2023",
  },
  {
    title: "FinAssist — Virtual Finance",
    category: "AI-Powered Platform",
    description:
      "AI-powered financial assistant with intelligent budgeting, expense tracking, and automated reporting.",
    image: "/finassist-web.png",
    link: "https://vfa-9tbs.onrender.com",
    outcome: "Smarter personal finance",
    tags: ["Python", "Flask", "JavaScript"],
    year: "2024",
  },
  {
    title: "Handovr — Phone Marketplace",
    category: "Marketplace Platform",
    description:
      "Full-featured used phone marketplace with listing management, search, and secure transaction flow.",
    image: "/handovr-web.png",
    link: "https://handovr.in",
    outcome: "Marketplace, end to end",
    tags: ["Next.js", "React", "Supabase"],
    year: "2024",
    frames: "/sequence",
    frameCount: 192,
  },
];
