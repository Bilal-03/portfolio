import React from "react";

const SERVICES_DATA = [
  {
    num: "01",
    title: "Software Engineering",
    description: "Designing scalable frontend architectures, robust APIs, and end-to-end full stack solutions tailored to business requirements.",
    tags: ["React", "Next.js", "Node.js", "System Design"]
  },
  {
    num: "02",
    title: "Product & Business Strategy",
    description: "Bridging the gap between technical execution and strategic product goals. I understand the business side of tech and love contributing to product vision.",
    tags: ["Product Management", "Strategy", "User Analytics"]
  },
  {
    num: "03",
    title: "AI Integration & Data",
    description: "Building intelligent systems with OpenCV, spaCy, and custom ML pipelines, transforming manual data processing into automated microservices.",
    tags: ["Python", "TensorFlow", "Computer Vision", "NLP"]
  },
  {
    num: "04",
    title: "Versatile Tech Enthusiast",
    description: "Not bound by a single domain. From beautiful UI/UX to cloud infrastructure, I am a tech-savvy problem solver ready to tackle any challenge.",
    tags: ["UI/UX", "Cloud Architecture", "Rapid Prototyping"]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#121212] text-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/3 flex flex-col items-start">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-6 font-semibold border border-white/10 rounded-full px-4 py-1">
            Core Capabilities
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            What <span className="text-white/50 block">I Do</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            I blend deep technical expertise with a strong product mindset. I am not just a developer—I am a tech enthusiast who understands business, product management, and intelligent design.
          </p>
        </div>

        <div className="md:w-2/3 flex flex-col gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={idx} 
              className="group relative p-8 md:p-10 rounded-3xl bg-[#171717] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-start hover:bg-[#1a1a1a]"
            >
              <div className="text-white/20 font-mono text-xl uppercase tracking-widest font-bold pt-1 group-hover:text-blue-500 transition-colors">
                {service.num}
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-blue-50 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light text-base md:text-lg max-w-2xl">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] md:text-xs tracking-widest uppercase px-3 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
