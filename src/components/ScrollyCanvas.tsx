"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({
  totalFrames = 192,
  folder = "/sequence",
  children
}: {
  totalFrames?: number;
  folder?: string;
  children?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const lastDrawnIndex = useRef<number>(-1);
  const rafId = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images efficiently
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    
    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        const frameStr = i.toString().padStart(3, "0");
        img.src = `${folder}/frame_${frameStr}_delay-0.041s.png`;
        
        img.onload = () => {
            if (i === 0) {
                // Instantly render first frame the millisecond it's ready
                renderFrame(0, loadedImages);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, folder]);

  const renderFrame = (index: number, imgArray = images) => {
    if (index === lastDrawnIndex.current) return;
    if (!canvasRef.current || !imgArray[index] || !imgArray[index].complete) return;
    
    const canvas = canvasRef.current;
    
    // Performance: alpha: false removes transparency overhead
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imgArray[index];
    
    // Only resize canvas if window size dramatically changes, but for simplicity we sync here
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // object-fit: cover exact math
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    // Draw directly mapped
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
    
    lastDrawnIndex.current = index;
  };

  useEffect(() => {
     renderFrame(0);
     
     const handleResize = () => {
         // Reset last drawn to force redraw
         lastDrawnIndex.current = -1;
         const currentProgress = scrollYProgress.get();
         const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(currentProgress * totalFrames)));
         if (rafId.current) cancelAnimationFrame(rafId.current);
         rafId.current = requestAnimationFrame(() => renderFrame(frameIndex));
     };
     
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(latest * totalFrames)));
    
    // Cancel previous frame paint to avoid stack overflow or screen tearing
    if (rafId.current) cancelAnimationFrame(rafId.current);
    
    // Defer painting to browser render cycle for silky smooth 60fps
    rafId.current = requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full scale-[1.05]" />
        <div className="absolute inset-0 w-full h-full z-10">
            {children}
        </div>
      </div>
    </div>
  );
}
