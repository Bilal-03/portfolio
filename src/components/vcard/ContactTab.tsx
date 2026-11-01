"use client";

import { useState } from "react";
import { PROFILE } from "@/data/projects";

const PaperPlaneIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export default function ContactTab() {
  const [formData, setFormData] = useState({ fullname: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isValid =
    formData.fullname.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()) &&
    formData.message.trim().length > 0;

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Batool Villa")}`;
  const mapEmbedUrl = "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sBatool+Villa";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (!isValid) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullname.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullname.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    setSubmitted(true);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <article className="animate-vcard-fade">
      <header className="mb-6">
        <h2 className="vcard-article-title">Contact</h2>
      </header>

      <section className="mb-8 overflow-hidden rounded-2xl border border-[#383838] bg-[#1e1e1f] relative" aria-labelledby="location-heading">
        <h3 id="location-heading" className="sr-only">Batool Villa location</h3>
        <div className="w-full h-56 sm:h-72 relative">
          <iframe
            title="Batool Villa location map"
            src={mapEmbedUrl}
            className="w-full h-full border-0 grayscale invert contrast-125 opacity-85"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#383838] px-4 py-3 text-xs text-zinc-400">
          <span>Batool Villa</span>
          <a href={mapSearchUrl} target="_blank" rel="noreferrer" className="text-[#ffdb70] hover:underline">Open in Maps ↗</a>
        </div>
      </section>

      <section>
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">Get in Touch</h3>
        {submitted && <div role="status" className="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs text-emerald-300">Your email draft is ready in your email app. Review it and press Send there. If it did not open, <a href={`mailto:${PROFILE.email}`} className="underline">email me directly</a>.</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-zinc-400 mb-4">This form opens your email app with the message prepared. Review it and press Send there.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-fullname" className="sr-only">Full name</label>
              <input id="contact-fullname" type="text" name="fullname" required aria-label="Full name" placeholder="Full name" value={formData.fullname} onChange={(event) => setFormData({ ...formData, fullname: event.target.value })} className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors" />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Email address</label>
              <input id="contact-email" type="email" name="email" required aria-label="Email address" placeholder="Email address" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors" />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">Your message</label>
            <textarea id="contact-message" name="message" required rows={5} aria-label="Your message" placeholder="Your message..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors resize-none" />
          </div>
          {submitAttempted && !isValid && <p role="alert" className="text-xs text-rose-300">Enter your name, a valid email address, and a message before opening your email app.</p>}
          <div className="flex flex-wrap items-center justify-end gap-4">
            <a href={`mailto:${PROFILE.email}`} className="text-xs text-[#ffdb70] hover:underline">Email directly</a>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs shadow-md transition-all bg-gradient-to-r from-[#ffdb70] to-[#f3ba2f] text-[#121212] cursor-pointer hover:brightness-105 active:scale-95">
              <PaperPlaneIcon />
              <span>Open Email App</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}
