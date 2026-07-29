import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bilal Choudhary — Software Engineer",
  description:
    "Software Engineer and Computer Science graduate from VIT. Building scalable full-stack applications, AI-powered microservices, and beautiful digital experiences.",
  keywords: [
    "Bilal Choudhary",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Bilal Choudhary" }],
  openGraph: {
    title: "Bilal Choudhary — Software Engineer",
    description:
      "Building scalable full-stack applications, AI-powered microservices, and beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} h-full`}>
      <body className="min-h-full flex flex-col font-display antialiased grain">
        {children}
      </body>
    </html>
  );
}
