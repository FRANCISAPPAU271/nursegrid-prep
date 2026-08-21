"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "nsm_install_prompt_dismissed";

function isIos() {
  if (typeof window === "undefined") return false;
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    // iOS Safari-specific flag
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

export default function InstallAppPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isStandalone()) return;
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY)) return;

    let cancelled = false;
    let cleanup = () => {};

    import("@capacitor/core").then(({ Capacitor }) => {
      // Already running as a native app — never show the "install as PWA" prompt.
      if (cancelled || Capacitor.isNativePlatform()) return;

      function handler(e: Event) {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setVisible(true);
      }

      window.addEventListener("beforeinstallprompt", handler);

      if (isIos()) {
        const timer = setTimeout(() => {
          setShowIosHint(true);
          setVisible(true);
        }, 2500);
        cleanup = () => {
          clearTimeout(timer);
          window.removeEventListener("beforeinstallprompt", handler);
        };
      } else {
        cleanup = () => window.removeEventListener("beforeinstallprompt", handler);
      }
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  async function install() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="animate-fade-in fixed inset-x-4 bottom-4 z-50 mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl sm:right-4 sm:left-auto">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-slate-900">Install NurseGrid Prep</p>
          {showIosHint ? (
            <p className="mt-1 text-xs text-slate-600">
              Tap the Share icon <span aria-hidden>􀈂</span> in Safari, then choose <strong>Add to Home Screen</strong> for quick,
              app-like access.
            </p>
          ) : (
            <p className="mt-1 text-xs text-slate-600">Add the app to your home screen for quick, offline-friendly access.</p>
          )}
          <div className="mt-3 flex gap-2">
            {!showIosHint && (
              <button
                onClick={install}
                className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                Install
              </button>
            )}
            <button onClick={dismiss} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100">
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
