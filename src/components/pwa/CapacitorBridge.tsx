"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Bridges native device capabilities into the app when it's running inside
// the Capacitor-wrapped iOS/Android shell (built from the /android and /ios
// projects at the repo root). On the regular web/PWA build,
// Capacitor.isNativePlatform() is false and this component does nothing.
export default function CapacitorBridge() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let cleanupFns: Array<() => void> = [];

    async function init() {
      const { Capacitor } = await import("@capacitor/core");
      if (!Capacitor.isNativePlatform() || cancelled) return;

      const [{ StatusBar, Style }, { SplashScreen }, { App: CapacitorApp }, { PushNotifications }] = await Promise.all([
        import("@capacitor/status-bar"),
        import("@capacitor/splash-screen"),
        import("@capacitor/app"),
        import("@capacitor/push-notifications"),
      ]);

      try {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: "#059669" });
      } catch {
        // Some devices/platforms restrict status bar color APIs — non-fatal.
      }

      // Hide the native splash screen once the web content has painted.
      SplashScreen.hide().catch(() => {});

      // Map the Android hardware/gesture back button to in-app navigation
      // instead of the default (which would otherwise close the app).
      const backListener = await CapacitorApp.addListener("backButton", ({ canGoBack }) => {
        if (canGoBack) {
          router.back();
        } else {
          CapacitorApp.exitApp();
        }
      });
      cleanupFns.push(() => backListener.remove());

      // Register for push notifications (study reminders, new question
      // drops) and forward the device token to our backend.
      try {
        const permission = await PushNotifications.requestPermissions();
        if (permission.receive === "granted") {
          await PushNotifications.register();
        }
      } catch {
        // Permission denied or unsupported — safe to ignore.
      }

      const registrationListener = await PushNotifications.addListener("registration", (token) => {
        const platform = Capacitor.getPlatform() === "ios" ? "ios" : "android";
        fetch("/api/push/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ platform, token: token.value }),
        }).catch(() => {});
      });
      cleanupFns.push(() => registrationListener.remove());

      const errorListener = await PushNotifications.addListener("registrationError", () => {
        // Non-fatal — the app works fully without push notifications.
      });
      cleanupFns.push(() => errorListener.remove());
    }

    init();

    return () => {
      cancelled = true;
      cleanupFns.forEach((fn) => fn());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
