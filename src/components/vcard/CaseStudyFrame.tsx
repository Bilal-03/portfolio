import Link from "next/link";
import Sidebar from "./Sidebar";

export default function CaseStudyFrame({ children }: { children: React.ReactNode }) {
  return <main className="vcard-page"><div className="vcard-layout"><Sidebar /><div className="vcard-main vcard-container case-study-shell"><nav className="case-study-navbar" aria-label="Portfolio sections">{[["about", "About"], ["resume", "Resume"], ["portfolio", "Portfolio"], ["insights", "Insights"], ["contact", "Contact"]].map(([tab, label]) => <Link key={tab} href={`/?tab=${tab}`} className={tab === "portfolio" ? "active" : ""}>{label}</Link>)}</nav>{children}</div></div></main>;
}
