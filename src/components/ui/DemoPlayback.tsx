"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface DemoPlaybackProps {
  poster: string;
  alt: string;
  className?: string;
}

const SCROLL_DURATION_MS = 5000;

export default function DemoPlayback({
  poster,
  alt,
  className = "",
}: DemoPlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const clearPlayback = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    scrollStartRef.current = null;
  }, []);

  const stop = useCallback(() => {
    clearPlayback();
    setIsPlaying(false);
    setProgress(0);
  }, [clearPlayback]);

  const startScrollAnimation = useCallback(() => {
    scrollStartRef.current = performance.now();

    const tick = (now: number) => {
      if (!scrollStartRef.current) return;
      const elapsed = now - scrollStartRef.current;
      const pct = (elapsed % SCROLL_DURATION_MS) / SCROLL_DURATION_MS;
      setProgress(pct * 100);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    setIsPlaying(true);
    startScrollAnimation();
  }, [startScrollAnimation]);

  useEffect(() => () => clearPlayback(), [clearPlayback]);

  const scrollOffset = isPlaying ? progress : 0;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#0a0a0a] ${className}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      <div
        className="w-full h-full will-change-transform"
        style={{
          transform: isPlaying
            ? `translateY(-${scrollOffset * 0.35}%) scale(1.12)`
            : "translateY(0) scale(1.02)",
          transition: isPlaying ? "none" : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src={poster}
          alt={alt}
          className="w-full h-[140%] object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10" />

      {/* Live indicator */}
      <div
        className={`absolute top-4 left-4 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 transition-all duration-300 ${
          isPlaying ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-accent)]" />
        </span>
        <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
          Preview
        </span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <div
          className="h-full bg-[var(--color-accent)] transition-[width] duration-75 ease-linear"
          style={{ width: isPlaying ? `${progress}%` : "0%" }}
        />
      </div>

      {/* Hover hint */}
      <div
        className={`absolute bottom-4 right-4 flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-white/50 transition-opacity duration-300 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Hover to preview
      </div>
    </div>
  );
}
