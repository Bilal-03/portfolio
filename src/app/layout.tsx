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
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bilal Choudhary — Product Manager & Analytics Practitioner",
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
    title: "Bilal Choudhary — Product Manager & Analytics Practitioner",
    description:
      "Turning user pain points, marketplace economics, and data into useful digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilal Choudhary — Product Manager & Analytics Practitioner",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
