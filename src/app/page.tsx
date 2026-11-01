"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/vcard/Sidebar";
import Navbar, { NavTab } from "@/components/vcard/Navbar";
import AboutTab from "@/components/vcard/AboutTab";
import ResumeTab from "@/components/vcard/ResumeTab";
import SkillsTab from "@/components/vcard/SkillsTab";
import PortfolioTab from "@/components/vcard/PortfolioTab";
import ContactTab from "@/components/vcard/ContactTab";

const TAB_ALIASES: Record<string, NavTab> = {
  about: "about",
  experience: "experience",
  resume: "experience",
  skills: "skills",
  projects: "projects",
  portfolio: "projects",
  insights: "projects",
  contact: "contact",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>("about");

  useEffect(() => {
    const readTab = () => {
      const value = new URLSearchParams(window.location.search).get("tab");
      setActiveTab(value ? TAB_ALIASES[value] ?? "about" : "about");
    };

    readTab();
    window.addEventListener("popstate", readTab);
    return () => window.removeEventListener("popstate", readTab);
  }, []);

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
              <AboutTab />
            )}
            {activeTab === "experience" && <ResumeTab />}
            {activeTab === "skills" && <SkillsTab />}
            {activeTab === "projects" && <PortfolioTab />}
            {activeTab === "contact" && <ContactTab />}
          </div>
        </div>
      </div>

    </main>
  );
}
