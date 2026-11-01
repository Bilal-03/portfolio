"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  readTime: string;
}

const ARTICLES: BlogPost[] = [
  {
    slug: "handovr",
    title: "Designing 0-to-1 Escrow Mechanics for High-Trust Marketplaces",
    category: "Product Discovery",
    date: "Sep 2024",
    image: "/project-previews/handovr-home.png",
    summary:
      "How 40+ user interviews uncovered doorstep drop-off anxieties and informed a 16-point hardware verification flow that increased buyer conversion readiness by 38%.",
    readTime: "5 min read",
  },
  {
    slug: "ai-business-analytics-studio",
    title: "Empirical Telemetry: Replacing Vanity Metrics with Decision-Grade SQL",
    category: "Analytics & Telemetry",
    date: "Aug 2024",
    image: "/project-previews/ai-business-analytics-studio-home.png",
    summary:
      "Architecting composite opportunity indices, cohort retention curves, and multi-tenant telemetry pipelines to uncover real marketplace friction.",
    readTime: "7 min read",
  },
  {
    slug: "invoice-intelligence",
    title: "Governed AI OCR Pipelines with Human-in-the-Loop Validation",
    category: "Applied AI",
    date: "Jul 2024",
    image: "/project-previews/invoice-intelligence-home.png",
    summary:
      "Engineering a 94%+ field accuracy document extraction system by combining OpenCV preprocessing, regex guardrails, and an asynchronous review queue.",
    readTime: "6 min read",
  },
  {
    slug: "finassist",
    title: "Multi-Agent RAG: Grounding LLM Outputs with Deterministic Guardrails",
    category: "System Design",
    date: "May 2024",
    image: "/project-previews/finassist-home.png",
    summary:
      "Building robust financial analysis assistants using Pinecone vector search, sub-agent routing, and AST validation to eliminate hallucinations.",
    readTime: "8 min read",
  },
];

export default function BlogTab() {
  return (
    <article className="animate-vcard-fade">
      {/* Header */}
      <header className="mb-6">
        <h2 className="vcard-article-title">Blog & Engineering Insights</h2>
      </header>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <div key={article.slug} className="group">
            <Link
              href={`/work/${article.slug}`}
              className="block vcard-content-card !p-0 overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Banner Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#1e1e1f]/90 backdrop-blur-md border border-[#383838] text-[10px] text-zinc-300 font-mono px-2 py-0.5 rounded-md">
                  {article.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-2">
                  <span className="text-[#ffdb70] font-medium">{article.category}</span>
                  <span>•</span>
                  <time>{article.date}</time>
                </div>

                <h3 className="text-white text-base font-semibold group-hover:text-[#ffdb70] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed mt-2 line-clamp-3 font-light">
                  {article.summary}
                </p>

                <div className="mt-4 flex items-center gap-1 text-xs text-[#ffdb70] font-medium">
                  <span>Read deep-dive case study</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </article>
  );
}
