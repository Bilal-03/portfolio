"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const validTabs: NavTab[] = ["about", "resume", "portfolio", "insights", "contact"];
    const readTab = () => {
      const value = new URLSearchParams(window.location.search).get("tab") as NavTab | null;
      setActiveTab(value && validTabs.includes(value) ? value : "about");
    };

    readTab();
    window.addEventListener("popstate", readTab);
    return () => window.removeEventListener("popstate", readTab);
  }, []);

  useEffect(() => {
    if (!selectedTestimonial) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTestimonial(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedTestimonial]);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.history.pushState({}, "", `/?tab=${tab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="vcard-page">
      <div className="vcard-layout">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Main Content Card */}
        <div className="vcard-main vcard-container">
          {/* Top-Right Floating Desktop & Mobile Bottom Navbar */}
          <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

          {/* Active Tab Content */}
          <div className="pt-2 lg:pt-3">
            {activeTab === "about" && (
              <AboutTab onSelectTestimonial={setSelectedTestimonial} />
            )}
            {activeTab === "resume" && <ResumeTab />}
            {activeTab === "portfolio" && <PortfolioTab />}
            {activeTab === "insights" && <BlogTab />}
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
