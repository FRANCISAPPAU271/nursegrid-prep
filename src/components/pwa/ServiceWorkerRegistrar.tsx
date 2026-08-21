"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV !== "production") return;

    let cancelled = false;
    import("@capacitor/core").then(({ Capacitor }) => {
      // Inside the native iOS/Android shell the app is already "installed" —
      // the service worker (meant for browser/PWA installs) isn't needed.
      if (cancelled || Capacitor.isNativePlatform()) return;
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.error("Service worker registration failed", err);
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
