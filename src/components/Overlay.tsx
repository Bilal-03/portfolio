"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
      target: container, 
      offset: ["start start", "end end"] 
  });
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [50, -50]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.7, 0.85, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 1], [50, -50]);

  return (
    <div ref={container} className="h-[500vh] w-full absolute top-0 left-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center flex flex-col items-center justify-center w-full px-6">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter drop-shadow-2xl flex items-center gap-2">
              Bilal<span className="text-white">.</span>
            </h1>
            <p className="text-sm md:text-2xl text-white/80 mt-2 font-medium tracking-[0.2em] uppercase">Tech Enthusiast</p>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute left-6 md:left-24 lg:left-32 top-1/2 -translate-y-1/2 w-fit px-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl text-left">
              I build<br/><span className="text-white/60">digital</span><br/>experiences.
            </h2>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute right-6 md:right-24 lg:right-32 top-1/2 -translate-y-1/2 w-fit px-6 text-right">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight drop-shadow-xl text-right">
              Bridging<br/><span className="text-white/60">design &</span><br/>engineering.
            </h2>
        </motion.div>

      </div>
    </div>
  );
}
