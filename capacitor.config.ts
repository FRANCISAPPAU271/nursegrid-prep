import type { CapacitorConfig } from "@capacitor/cli";

// NurseGrid Prep ships as a full-stack Next.js app (auth, database, live API
// routes), so the native Android/iOS shells load the deployed production
// site directly in a native WebView rather than bundling static assets. This
// is the standard, App Store/Play Store-accepted pattern for shipping an
// existing dynamic web app as a native app (same approach used by many
// production apps built with Capacitor).
//
// Before building for a store release:
//   1. Deploy NurseGrid Prep to your permanent production domain.
//   2. Replace PRODUCTION_URL below (or set NEXT_PUBLIC_APP_URL when running
//      `npx cap sync`) with that domain — it must be served over HTTPS.
//   3. Run `npx cap sync` to push this config into the native projects.
const PRODUCTION_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.nursegridprep.com";

const config: CapacitorConfig = {
  appId: "com.nursegridprep.app",
  appName: "NurseGrid Prep",
  webDir: "mobile-shell",
  server: {
    url: PRODUCTION_URL,
    androidScheme: "https",
    cleartext: false,
  },
  ios: {
    contentInset: "automatic",
  },
  android: {
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 700,
      backgroundColor: "#059669",
      androidSplashResourceName: "splash",
      showSpinner: false,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#059669",
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
