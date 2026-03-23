"use client";

import { useScroll, useMotionValueEvent, motion } from "framer-motion";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    
    for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        const frameStr = i.toString().padStart(3, "0");
        img.src = `${folder}/frame_${frameStr}_delay-0.041s.png`;
        img.onload = () => {
            if (i === 0) {
                // Initial render once first image loads
                renderFrame(0, loadedImages);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, folder]);

  const renderFrame = (index: number, imgArray = images) => {
    if (!canvasRef.current || !imgArray[index] || !imgArray[index].complete) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // object-fit: cover logic
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
  };

  useEffect(() => {
     renderFrame(0);
     
     const handleResize = () => {
         const currentProgress = scrollYProgress.get();
         const frameIndex = Math.min(totalFrames - 1, Math.floor(currentProgress * totalFrames));
         renderFrame(frameIndex);
     };
     
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(totalFrames - 1, Math.floor(latest * totalFrames));
    renderFrame(frameIndex);
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
