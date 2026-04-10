import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  );
}
