import React from "react";

const PROJECT_DATA = [
  {
    title: "CRM - Lead Management",
    category: "React.js • Supabase • Tailwind",
    image: "/crm-web.png",
    link: "https://github.com/Bilal-03/crm",
  },
  {
    title: "FinAssist - Virtual Finance",
    category: "Python • Flask • JavaScript",
    image: "/finassist-web.png",
    link: "https://github.com/Bilal-03/vfa",
  },
  {
    title: "Handovr - Phone Marketplace",
    category: "Next.js • React • Supabase",
    image: "/handovr-web.png",
    link: "https://handovr.in",
  }
];

export default function Projects() {
  return (
    <section id="work" className="bg-[#121212] text-white py-16 md:py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-10 md:mb-16">
          Selected <span className="text-white/40">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {PROJECT_DATA.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl overflow-hidden bg-[#171717] border border-white/10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] flex flex-col"
            >
              <div className="aspect-video md:aspect-[16/10] w-full overflow-hidden relative bg-[#1a1a1a]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${project.image.startsWith('/') ? 'object-contain p-4' : 'object-cover'}`}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl"
                  >
                    View Source ↗
                  </a>
                </div>
              </div>
              <div className="p-8 pb-10 flex-col flex bg-[#171717] grow">
                <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/50 mb-3 font-semibold">
                  {project.category}
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
