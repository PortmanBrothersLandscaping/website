import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.serviceArea}`,
  description: `${siteConfig.tagline}. Serving ${siteConfig.serviceArea} since ${siteConfig.sinceYear}. Call ${siteConfig.phoneDisplay} for a free quote.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
