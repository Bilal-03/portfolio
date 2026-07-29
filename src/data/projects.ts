export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  source?: string;
  outcome: string;
  tags: string[];
  year: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Business RAG — Knowledge Assistant",
    category: "AI Knowledge Platform",
    description:
      "Retrieval-augmented assistant that turns business documents into cited, context-aware answers for faster, more confident decisions.",
    image: "/business-rag.svg",
    link: "https://businessrag.vercel.app",
    source: "https://github.com/Bilal-03/businessrag",
    outcome: "Grounded business insights",
    tags: ["Python", "LLMs", "Vector Search"],
    year: "2025",
  },
  {
    title: "Invoice Extraction — Document AI",
    category: "AI Automation",
    description:
      "Automated invoice-processing pipeline that reads diverse document formats and extracts validated fields in seconds.",
    image: "/invoice-extraction.svg",
    link: "https://invoice-extraction-lac.vercel.app",
    source: "https://github.com/Bilal-03/invoice-extraction",
    outcome: "84% extraction accuracy",
    tags: ["Python", "OpenCV", "Tesseract OCR", "spaCy"],
    year: "2024",
  },
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
  },
];
