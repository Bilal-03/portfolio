"use client";

import { useState } from "react";
import Sidebar from "@/components/vcard/Sidebar";
import Navbar, { NavTab } from "@/components/vcard/Navbar";
import AboutTab from "@/components/vcard/AboutTab";
import ResumeTab from "@/components/vcard/ResumeTab";
import PortfolioTab from "@/components/vcard/PortfolioTab";
import BlogTab from "@/components/vcard/BlogTab";
import ContactTab from "@/components/vcard/ContactTab";
import TestimonialModal, { TestimonialItem } from "@/components/vcard/TestimonialModal";

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>("about");
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);

  return (
    <main className="min-h-screen bg-[#121212] text-zinc-300 pb-20 lg:pb-12 pt-6 sm:pt-10 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row items-start gap-6 xl:gap-7">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Main Content Card */}
        <div className="flex-1 w-full vcard-container p-5 sm:p-8 xl:p-10 relative overflow-hidden">
          {/* Top-Right Floating Desktop & Mobile Bottom Navbar */}
          <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Active Tab Content */}
          <div className="pt-2 lg:pt-3">
            {activeTab === "about" && (
              <AboutTab onSelectTestimonial={setSelectedTestimonial} />
            )}
            {activeTab === "resume" && <ResumeTab />}
            {activeTab === "portfolio" && <PortfolioTab />}
            {activeTab === "blog" && <BlogTab />}
            {activeTab === "contact" && <ContactTab />}
          </div>
        </div>
      </div>

      {/* Testimonial / Detail Modal Popup */}
      <TestimonialModal
        item={selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
      />
    </main>
  );
}
