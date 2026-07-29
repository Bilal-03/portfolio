"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

interface DemoPlaybackProps {
  poster: string;
  alt: string;
  video?: string;
  frames?: string;
  frameCount?: number;
  className?: string;
}

const FRAME_INTERVAL_MS = 42;
const SCROLL_DURATION_MS = 5000;

function padFrame(index: number): string {
  return String(index).padStart(3, "0");
}

export default function DemoPlayback({
  poster,
  alt,
  video,
  frames,
  frameCount = 0,
  className = "",
}: DemoPlaybackProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollStartRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const hasFrames = Boolean(frames && frameCount > 0);
  const mode = video ? "video" : hasFrames ? "frames" : "scroll";

  const clearPlayback = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    scrollStartRef.current = null;
  }, []);

  const stop = useCallback(() => {
    clearPlayback();
    setIsPlaying(false);
    setFrameIndex(0);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
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

  const startFramePlayback = useCallback(() => {
    let index = 0;
    intervalRef.current = setInterval(() => {
      index = (index + 1) % frameCount;
      setFrameIndex(index);
      setProgress((index / frameCount) * 100);
    }, FRAME_INTERVAL_MS);
  }, [frameCount]);

  const start = useCallback(() => {
    setIsPlaying(true);

    if (mode === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
      return;
    }

    if (mode === "frames") {
      startFramePlayback();
      return;
    }

    startScrollAnimation();
  }, [mode, startFramePlayback, startScrollAnimation]);

  useEffect(() => () => clearPlayback(), [clearPlayback]);

  const frameSrc =
    hasFrames && isPlaying
      ? `${frames}/frame_${padFrame(frameIndex)}_delay-0.041s.png`
      : poster;

  const scrollOffset = mode === "scroll" && isPlaying ? progress : 0;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#0a0a0a] ${className}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
    >
      {mode === "video" ? (
        <>
          <img
            src={poster}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              isPlaying ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            onTimeUpdate={(e) => {
              const v = e.currentTarget;
              if (v.duration) setProgress((v.currentTime / v.duration) * 100);
            }}
          />
        </>
      ) : mode === "frames" ? (
        <img
          src={frameSrc}
          alt={alt}
          className="w-full h-full object-cover object-top transition-opacity duration-200"
          draggable={false}
        />
      ) : (
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
      )}

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
