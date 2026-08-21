import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "@/components/pwa/ServiceWorkerRegistrar";
import InstallAppPrompt from "@/components/pwa/InstallAppPrompt";
import CapacitorBridge from "@/components/pwa/CapacitorBridge";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "NurseGrid Prep — NCLEX Task Manager & 10,000-Question Bank";
const description =
  "A task manager built for student nurses: organize clinicals and study time, then master 10,000 NCLEX-style questions with rationales and proven test-taking strategies.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title,
  description,
  keywords: [
    "NCLEX practice questions",
    "nursing student task manager",
    "NCLEX rationales",
    "nursing school planner",
    "NCLEX test-taking strategies",
  ],
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "NurseGrid Prep",
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "NurseGrid Prep",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "NurseGrid Prep" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased">
        <ServiceWorkerRegistrar />
        <InstallAppPrompt />
        <CapacitorBridge />
        {children}
      </body>
    </html>
  );
}
