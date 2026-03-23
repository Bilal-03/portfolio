import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Image / Visual */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 contrast-125 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
            alt="Coding Workspace" 
            className="w-full h-full object-cover"
          />
          {/* Floating badge */}
          <div className="absolute right-4 bottom-1/4 w-20 h-20 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] tracking-widest uppercase rotate-12 font-bold text-blue-400">
            ENGINEER
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            About <span className="text-white/50">Me</span>
          </h2>

          <div className="space-y-6 text-white/70 leading-relaxed font-light text-base md:text-lg">
            <p>
              I am an aspiring Software Engineer and Computer Science graduate from Vellore Institute of Technology. However, I am not just into designing applications—I am a tech enthusiast and tech savvy with a strong foundation in both software engineering and business logic.
            </p>
            <p>
              My technical expertise spans spanning Python, Java, React, and Next.js, frequently culminating in AI microservices and full-stack platforms. Yet, my interests do not stop at the codebase.
            </p>
            <p>
              Beyond academia and coding, I have a deep knowledge of business and product management. I am eager to work and contribute in these fields, bridging the gap between an engineering challenge and strategic product vision. 
            </p>
            <p>
              A constant learner, I aim to merge data-driven insights with beautiful UX, taking on any challenge in the tech orbit.
            </p>
          </div>

          <div className="flex items-center gap-8 md:gap-12 mt-12 bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 w-max">
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tighter mb-1 border-b-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer w-max">2</p>
              <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/40 mt-1">SDE Internships</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tighter mb-1 border-b-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer w-max">7.5</p>
              <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/40 mt-1">BTech CGPA</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-3xl md:text-4xl font-bold tracking-tighter mb-1 border-b-2 border-transparent hover:border-blue-500 transition-colors cursor-pointer w-max">10+</p>
              <p className="text-[10px] md:text-xs tracking-widest uppercase text-white/40 mt-1">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
