import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bilal Choudhary — Product, Data & Applied AI",
  description:
    "Bilal Choudhary turns problems and data into useful products through product thinking, analytics and AI-assisted development.",
  keywords: [
    "Bilal Choudhary",
    "Product",
    "Data Analytics",
    "Applied AI",
    "Product Strategy",
    "Business Systems",
    "AI Products",
  ],
  authors: [{ name: "Bilal Choudhary" }],
  openGraph: {
    title: "Bilal Choudhary — Product, Data & Applied AI",
    description:
      "Turning user problems, business requirements and data into useful digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Choudhary — Product, Data & Applied AI",
    description:
      "Turning user problems, business requirements and data into useful digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
