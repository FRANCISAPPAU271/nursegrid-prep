import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistrar from "@/components/pwa/ServiceWorkerRegistrar";
import InstallAppPrompt from "@/components/pwa/InstallAppPrompt";
import CapacitorBridge from "@/components/pwa/CapacitorBridge";
import WhatsAppButton from "@/components/contact/WhatsAppButton";
import SecurityGuard from "@/components/ui/SecurityGuard";
import { ToastProvider } from "@/components/ui/Toast";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = "NurseGrid Prep — Pass Ghana's NMC Licensing Exam First Time";
const description =
  "Built for Ghana's student nurses & midwives: organise clinicals and revision, then master 5,700+ unique NMC licensing-style questions with rationales that teach real clinical reasoning. From $5 — pay with MTN MoMo.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: title, template: "%s · NurseGrid Prep" },
  description,
  keywords: [
    "NMC Ghana licensing exam questions",
    "nursing student task manager Ghana",
    "NMC licensing exam rationales",
    "nursing school planner",
    "nursing exam test-taking strategies",
  ],
  authors: [{ name: "NurseGrid Prep" }],
  category: "education",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  // Let content extend into the notch/home-indicator areas so the bottom
  // tab bar can pad itself with env(safe-area-inset-bottom).
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* Speeds up embedded YouTube videos on Learning Library pages by
            establishing the connection before the iframe itself loads. */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body className="bg-slate-50 font-sans text-slate-900 antialiased">
        <ToastProvider>
          <ServiceWorkerRegistrar />
          <InstallAppPrompt />
          <CapacitorBridge />
          <WhatsAppButton />
          <SecurityGuard />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
