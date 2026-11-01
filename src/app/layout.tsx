import type { Metadata } from "next";
import { Poppins, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bilal Choudhary — Product Manager & AI Systems",
  description:
    "Bilal Choudhary turns complex problems and empirical data into high-impact digital products through product strategy, analytics, and applied AI systems.",
  keywords: [
    "Bilal Choudhary",
    "Product Manager",
    "Product Analytics",
    "Marketplace Intelligence",
    "Applied AI",
    "Product Strategy",
    "Growth & Operations",
  ],
  authors: [{ name: "Bilal Choudhary" }],
  openGraph: {
    title: "Bilal Choudhary — Product Manager & AI Systems",
    description:
      "Turning user pain points, marketplace economics, and data into useful digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Choudhary — Product Manager & AI Systems",
    description:
      "Turning user pain points, marketplace economics, and data into useful digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexMono.variable}`}>
      <body className="font-poppins bg-[#121212] text-white selection:bg-[#ffdb70] selection:text-[#121212]">
        {children}
      </body>
    </html>
  );
}
