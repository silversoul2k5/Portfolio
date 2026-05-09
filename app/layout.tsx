import type { Metadata } from "next";
import type { Viewport } from "next";
import { Manrope, Sora } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Arjun C",
    "developer portfolio",
    "embedded systems",
    "Next.js portfolio",
    "EEE student",
    "web developer",
    "ESP32",
    "Arduino",
    "AI projects",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.shortDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shortDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#030406",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
