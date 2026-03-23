"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

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
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const isMobileRef = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Determine mobile once on mount & resize
  useEffect(() => {
    isMobileRef.current = isMobile();
    const onResize = () => { isMobileRef.current = isMobile(); };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Preload images efficiently
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, "0");
      img.src = `${folder}/frame_${frameStr}_delay-0.041s.png`;

      // On mobile, lower decode priority for non-first frames
      if (i > 0 && "decoding" in img) {
        img.decoding = "async";
      }

      img.onload = () => {
        if (i === 0) {
          renderFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [totalFrames, folder]);

  const renderFrame = useCallback((index: number, imgArray?: HTMLImageElement[]) => {
    const arr = imgArray || images;
    if (index === lastDrawnIndex.current) return;
    if (!canvasRef.current || !arr[index] || !arr[index].complete) return;

    const canvas = canvasRef.current;

    // Cache the context so we don't re-acquire it every frame
    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext("2d", { alpha: false });
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    const img = arr[index];

    // On mobile, cap the pixel buffer at 1x DPR to reduce GPU workload.
    // On desktop, use native DPR for crispness.
    const mobile = isMobileRef.current;
    const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.round(window.innerWidth * dpr);
    const targetH = Math.round(window.innerHeight * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    // object-fit: cover math
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

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
  }, [images]);

  useEffect(() => {
    renderFrame(0);

    const handleResize = () => {
      // Reset cached context on resize (canvas dimensions will change)
      ctxRef.current = null;
      lastDrawnIndex.current = -1;
      const currentProgress = scrollYProgress.get();
      const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(currentProgress * totalFrames)));
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => renderFrame(frameIndex));
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [images, renderFrame]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(latest * totalFrames)));

    // Skip if the frame hasn't changed (most common on mobile micro-scrolls)
    if (frameIndex === lastDrawnIndex.current) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative" style={{ touchAction: "pan-y" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform", transform: "translateZ(0)" }}
        />
        {/* Bottom gradient to cover watermark */}
        <div
          className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none"
          style={{
            height: "120px",
            background: "linear-gradient(to bottom, transparent, #121212 85%)",
          }}
        />
        <div className="absolute inset-0 w-full h-full z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
