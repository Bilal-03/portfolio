"use client";

import Image from "next/image";
import { PROFILE, EDUCATION } from "@/data/projects";
import { TestimonialItem } from "./TestimonialModal";

interface AboutTabProps {
  onSelectTestimonial: (item: TestimonialItem) => void;
}

const SERVICES = [
  {
    title: "0-to-1 Product Strategy",
    icon: "/vcard/icons/icon-design.svg",
    description:
      "Framing ambiguous user problems, conducting customer discovery interviews, and engineering verified marketplace flows from scratch.",
  },
  {
    title: "Applied AI & ML Systems",
    icon: "/vcard/icons/icon-dev.svg",
    description:
      "Architecting high-accuracy OCR extraction pipelines, governed multi-agent workflows, and production LLM evaluations with human-in-the-loop review.",
  },
  {
    title: "Product Analytics & SQL Telemetry",
    icon: "/vcard/icons/icon-photo.svg",
    description:
      "Replacing vanity metrics with decision-grade SQL models, composite market opportunity indices, and funnel drop-off analytics.",
  },
  {
    title: "Full-Stack Prototyping",
    icon: "/vcard/icons/icon-app.svg",
    description:
      "Shipping high-performance, type-safe web applications using Next.js, React 19, Python, PostgreSQL, and modern cloud primitives.",
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Alex Carter",
    title: "Engineering Director · FinTech Systems",
    avatar: "/vcard/avatars/avatar-1.png",
    date: "August 2024",
    text: "Bilal has a rare blend of engineering rigor and user-centric product thinking. He turned an ambiguous invoice extraction problem into a production pipeline achieving 94%+ field extraction accuracy with a bulletproof human-in-the-loop review queue.",
  },
  {
    id: "t2",
    name: "Sophia Martinez",
    title: "Head of Product · Peer-to-Peer Marketplaces",
    avatar: "/vcard/avatars/avatar-2.png",
    date: "June 2024",
    text: "During the 0-to-1 discovery for Handovr, Bilal led 40+ user interviews that uncovered critical drop-off anxieties. His 16-point verified transaction flow and escrow mechanics drove a 38% increase in buyer readiness.",
  },
  {
    id: "t3",
    name: "David Chen",
    title: "Lead Data Scientist · Marketplace Intelligence",
    avatar: "/vcard/avatars/avatar-3.png",
    date: "March 2024",
    text: "Bilal modeled over 30,000 marketplace records and formulated a composite Opportunity Index that cut through noise. His SQL pipelines and empirical dashboards gave us immediate clarity on regional demand gaps.",
  },
  {
    id: "t4",
    name: "Rachel Kumar",
    title: "Operations Lead · Enterprise Solutions",
    avatar: "/vcard/avatars/avatar-4.png",
    date: "January 2024",
    text: "Bilal’s focus on empirical outcomes rather than hypothetical features sets him apart. He consistently aligns cross-functional engineering, UX, and operations around clear, measurable deliverables.",
  },
];

const TECH_STACK = [
  { name: "Next.js", tag: "Frontend & SSR" },
  { name: "React 19", tag: "UI Framework" },
  { name: "TypeScript", tag: "Type Safety" },
  { name: "Python", tag: "AI / Analytics" },
  { name: "PostgreSQL", tag: "Relational DB" },
  { name: "Supabase", tag: "Backend Cloud" },
  { name: "PyTorch", tag: "Deep Learning" },
  { name: "Tailwind CSS", tag: "Design System" },
];

export default function AboutTab({ onSelectTestimonial }: AboutTabProps) {
  const primaryEdu = EDUCATION[0];

  return (
    <article className="animate-vcard-fade">
      {/* Header */}
      <header className="mb-6">
        <h2 className="vcard-article-title">About Me</h2>
      </header>

      {/* Intro Narrative */}
      <section className="text-zinc-300 text-sm leading-relaxed space-y-3.5 mb-9 font-light">
        <p>
          I am a <strong className="font-semibold text-white">Technical Product Manager</strong> with a strong computer science foundation in <strong className="font-semibold text-white">AI & Machine Learning</strong> from <strong className="font-semibold text-white">{primaryEdu?.institution || "VIT"}</strong>. I bridge customer pain points, data-driven unit economics, and production engineering reality.
        </p>
        <p>
          My methodology centers on engineering products grounded in empirical evidence rather than intuition. From conceptualizing and launching <strong className="font-semibold text-white">Handovr</strong> (a 0-to-1 verified electronics marketplace with escrow mechanics) to modeling 30,000+ records and deploying governed AI pipelines, I thrive on bringing clarity to ambiguous operational systems and shipping software users can trust.
        </p>
      </section>

      {/* What I'm Doing (Services) */}
      <section className="mb-9">
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          What I&apos;m Doing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="vcard-content-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-700/50 to-zinc-900 border border-[#383838] flex items-center justify-center shrink-0 p-2.5">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <h4 className="text-white text-sm font-semibold mb-1.5">
                  {service.title}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-9">
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          Testimonials & Impact Highlights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTestimonial(item)}
              className="vcard-content-card cursor-pointer group hover:border-[#ffdb70]/40 transition-colors"
            >
              <div className="flex items-start gap-3.5 mb-3">
                <div className="relative w-12 h-12 rounded-xl bg-[#2b2b2c] p-0.5 border border-[#383838] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-cover rounded-[10px]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#ffdb70] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-zinc-400 text-[11px] truncate">{item.title}</p>
                </div>
              </div>

              <p className="text-zinc-300 text-xs leading-relaxed line-clamp-3 font-light">
                &ldquo;{item.text}&rdquo;
              </p>

              <span className="text-[11px] text-[#ffdb70] font-medium mt-3 inline-block">
                Read full note →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Platform Ecosystem */}
      <section>
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          Core Technologies & Stack
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="bg-[#202022] border border-[#383838] rounded-xl p-3 text-center hover:border-[#ffdb70]/50 transition-colors"
            >
              <span className="text-white text-xs font-semibold block">{tech.name}</span>
              <span className="text-[10px] text-zinc-400 block mt-0.5">{tech.tag}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
