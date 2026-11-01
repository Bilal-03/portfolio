"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  avatar: string;
  date: string;
  text: string;
  href?: string;
}

interface TestimonialModalProps {
  item: TestimonialItem | null;
  onClose: () => void;
}

export default function TestimonialModal({ item, onClose }: TestimonialModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>("button, a[href]"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("keydown", onKeyDown); previous?.focus(); };
  }, [item]);

  if (!item) return null;

  return (
    <div className="vcard-modal fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div ref={modalRef} className="vcard-modal-card relative z-10 w-full max-w-lg vcard-container p-6 sm:p-8 bg-[#1e1e1f] border border-[#383838] rounded-2xl shadow-2xl animate-vcard-fade" role="dialog" aria-modal="true" aria-labelledby="highlight-title" tabIndex={-1}>
        {/* Close Button */}
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-zinc-800 text-zinc-400 hover:text-[#ffdb70] hover:bg-zinc-700/70 flex items-center justify-center transition-colors"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-16 h-16 rounded-2xl bg-[#2b2b2c] p-1 border border-[#383838] shrink-0">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              sizes="64px"
              className="object-cover rounded-xl"
            />
            {/* Quote Badge */}
            <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow">
              <Image
                src="/vcard/icons/icon-quote.svg"
                alt="Quote"
                width={14}
                height={14}
                className="brightness-0 invert"
              />
            </div>
          </div>

          <div>
            <h3 id="highlight-title" className="text-white text-lg font-semibold tracking-tight">{item.name}</h3>
            <p className="text-xs text-[#ffdb70] font-medium mt-0.5">{item.title}</p>
            <time className="text-[11px] text-zinc-400 mt-1 block">{item.date}</time>
          </div>
        </div>

        {/* Modal Content */}
        <div className="text-sm text-zinc-300 leading-relaxed space-y-3 border-t border-[#383838] pt-4 font-light">
          <p>{item.text}</p>
          {item.href && <a href={item.href} className="inline-flex text-[#ffdb70] text-xs font-medium hover:underline">Open case study →</a>}
        </div>
      </div>
    </div>
  );
}
