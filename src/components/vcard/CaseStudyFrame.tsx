import Link from "next/link";
import Sidebar from "./Sidebar";

export default function CaseStudyFrame({ children }: { children: React.ReactNode }) {
  return <main className="vcard-page"><div className="vcard-layout"><Sidebar /><div className="vcard-main vcard-container case-study-shell"><nav className="case-study-navbar" aria-label="Site sections">{[["about", "About"], ["experience", "Experience"], ["projects", "Projects"], ["contact", "Contact"]].map(([tab, label]) => <Link key={tab} href={`/?tab=${tab}`} className={tab === "projects" ? "active" : ""}>{label}</Link>)}</nav>{children}</div></div></main>;
}
