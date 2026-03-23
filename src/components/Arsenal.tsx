import React from "react";

const TOOLS = [
  "Java", "Python", "C/C++", "JavaScript", "TypeScript", 
  "HTML/CSS", "React.js", "Next.js", "Flask", "Tailwind CSS",
  "Supabase", "PostgreSQL", "SQL", "Docker", "Git/GitHub", 
  "TensorFlow", "Keras", "PyTorch", "OpenCV", "spaCy", "YOLO"
];

export default function Arsenal() {
  return (
    <section className="bg-[#121212] text-white py-16 md:py-24 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
          Technologies & Tools
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter mb-8 md:mb-12">
          Arsenal
        </h2>

        <div className="flex flex-wrap gap-3 md:gap-4">
          {TOOLS.map((tool, idx) => (
            <div 
              key={idx}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex items-center gap-3 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
              <span className="font-semibold text-sm tracking-wide">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
