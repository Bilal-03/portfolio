"use client";

export type NavTab = "about" | "experience" | "projects" | "contact";

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const TABS: { id: NavTab; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <>
      {/* Desktop Navbar (Top-Right Floating Corner) */}
      <nav className="hidden lg:block absolute top-0 right-0 z-20 vcard-navbar-desktop px-7 py-0" aria-label="Site sections">
        <ul className="flex items-center gap-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  type="button"
                  onClick={() => {
                    onTabChange(tab.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`py-5 text-sm font-medium transition-colors cursor-pointer relative ${
                    isActive ? "text-[#ffdb70]" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navbar (Fixed Bottom Dock) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 vcard-navbar-mobile py-2.5 px-3" aria-label="Site sections">
        <ul className="flex items-center justify-around">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => {
                    onTabChange(tab.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full py-1 text-center transition-all flex flex-col items-center gap-1 ${
                    isActive ? "text-[#ffdb70]" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span className={`text-xs ${isActive ? "font-semibold" : "font-normal"}`}>
                    {tab.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
