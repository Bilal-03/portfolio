"use client";

import { useState } from "react";
import { PROFILE } from "@/data/projects";

const PaperPlaneIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export default function ContactTab() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const isValid =
    formData.fullname.trim().length > 1 &&
    formData.email.includes("@") &&
    formData.message.trim().length > 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // Trigger direct email dispatch
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.fullname}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullname}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <article className="animate-vcard-fade">
      {/* Header */}
      <header className="mb-6">
        <h2 className="vcard-article-title">Contact</h2>
      </header>

      {/* Map Box */}
      <section className="mb-8 overflow-hidden rounded-2xl border border-[#383838] bg-[#1e1e1f] relative">
          <div className="w-full h-56 sm:h-72 relative">
            <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562094254425!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b049d59f%3A0xb3559e74d63d6232!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0 grayscale invert contrast-125 opacity-85"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section>
        <h3 className="text-white text-lg font-semibold tracking-tight mb-5">
          Get in Touch
        </h3>

        {submitted ? (
          <div className="vcard-content-card text-center py-8">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="text-white text-base font-semibold mb-1">Message Prepared</h4>
            <p className="text-zinc-400 text-xs max-w-sm mx-auto mb-4 font-light">
              Your default email client should have opened with your message to {PROFILE.email}.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#ffdb70] underline hover:opacity-80"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-zinc-400 mb-4">This form opens your email app with the message prepared. Review it and press Send there.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullname"
                  required
                  aria-label="Full name"
                  placeholder="Full name"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                required
                rows={5}
                aria-label="Your message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#1e1e1f] border border-[#383838] focus:border-[#ffdb70] rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!isValid}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-xs shadow-md transition-all ${
                  isValid
                    ? "bg-gradient-to-r from-[#ffdb70] to-[#f3ba2f] text-[#121212] cursor-pointer hover:brightness-105 active:scale-95"
                    : "bg-zinc-800 text-zinc-500 cursor-not-allowed border border-zinc-700/50"
                }`}
              >
                <PaperPlaneIcon />
                <span>Open Email App</span>
              </button>
            </div>
          </form>
        )}
      </section>
    </article>
  );
}
