"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface DemoPlaybackProps {
  id: string;
  poster: string;
  previewVideo?: string;
  alt: string;
  mediaFit?: "cover" | "contain";
  className?: string;
  priority?: boolean;
}

export default function DemoPlayback({
  id,
  poster,
  previewVideo,
  alt,
  mediaFit = "cover",
  className = "",
  priority = false,
}: DemoPlaybackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const manualPreviewRef = useRef(false);
  const [isInView, setIsInView] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onPreviewStart = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      if (customEvent.detail !== id) setIsActive(false);
    };

    window.addEventListener("portfolio:preview-start", onPreviewStart);
    return () => window.removeEventListener("portfolio:preview-start", onPreviewStart);
  }, [id]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !previewVideo) return;

    if (isActive && isInView && !isReducedMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, isInView, isReducedMotion, previewVideo]);

  const startPreview = () => {
    if (!previewVideo || isReducedMotion) return;
    window.dispatchEvent(new CustomEvent("portfolio:preview-start", { detail: id }));
    setIsActive(true);
  };

  const stopPreview = () => {
    setIsActive(false);
  };

  const supportsHover = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  const imageClass = mediaFit === "contain" ? "object-contain p-8" : "object-cover";

  return (
    <div
      ref={containerRef}
      className={`media-frame ${className}`}
      onMouseEnter={() => {
        if (supportsHover() && !manualPreviewRef.current) startPreview();
      }}
      onMouseLeave={() => {
        if (supportsHover() && !manualPreviewRef.current) stopPreview();
      }}
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest(".preview-button")) startPreview();
      }}
      onBlurCapture={(event) => {
        if (!manualPreviewRef.current && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
          manualPreviewRef.current = false;
          stopPreview();
        }
      }}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className={`${imageClass} media-poster`}
        priority={priority || id === "handovr"}
      />

      {previewVideo && isInView && (
        <video
          ref={videoRef}
          src={previewVideo}
          poster={poster}
          muted
          playsInline
          loop
          preload="none"
          aria-label={`${alt} preview`}
          className={`media-video ${isActive ? "is-active" : ""} ${imageClass}`}
        />
      )}

      <div className="media-shade" aria-hidden="true" />

      {previewVideo && (
        <button
          type="button"
          className="preview-button"
          onClick={() => {
            if (isActive) {
              manualPreviewRef.current = false;
              stopPreview();
            } else {
              manualPreviewRef.current = true;
              startPreview();
            }
          }}
          aria-pressed={isActive}
        >
          <span className="preview-dot" aria-hidden="true" />
          {isActive ? "Pause preview" : "Preview"}
        </button>
      )}
    </div>
  );
}
