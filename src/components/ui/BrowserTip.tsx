"use client";

import { useEffect, useState } from "react";

// Smart "open in Chrome" tip for phones.
//
// Many students arrive via WhatsApp/Facebook/Instagram links, which open in
// the app's built-in webview — where PWA features (offline mode, install),
// smooth scrolling, and payments behave worst. This banner detects those
// in-app browsers (and Opera Mini's data-saver mode) on mobile and suggests
// opening the site in Chrome instead. Dismissible, remembered for 7 days,
// never shown on desktop or in real Chrome/Safari.
const DISMISS_KEY = "nsg-browser-tip-dismissed";
const DISMISS_DAYS = 7;

function detectAdvice(): string | null {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent || "";

  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
  if (!isMobile) return null;

  // In-app webviews: WhatsApp, Facebook, Instagram, Messenger, TikTok, etc.
  const inApp = /(WhatsApp|FBAN|FBAV|FB_IAB|Instagram|Messenger|musical_ly|TikTok|Snapchat|; wv\))/i.test(ua);
  // Opera Mini's extreme data-saver proxy breaks modern web apps.
  const operaMini = /Opera Mini/i.test(ua);

  if (inApp) {
    return "You're viewing this inside an app. For the smoothest experience — offline study, payments, and faster loading — open this site in Chrome.";
  }
  if (operaMini) {
    return "Opera Mini's data-saver can break parts of the app. For the best experience, open this site in Chrome.";
  }
  return null;
}

export default function BrowserTip() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0);
      if (dismissedAt && Date.now() - dismissedAt < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    } catch {
      /* ignore */
    }
    setMessage(detectAdvice());
  }, []);

  if (!message) return null;

  function dismiss() {
    setMessage(null);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }

  async function copyLink() {
    try {
      // Copy the site's own current origin so this keeps working when the
      // app moves to a custom domain.
      await navigator.clipboard.writeText(window.location.origin);
    } catch {
      /* ignore — the tip text itself still guides the user */
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3" role="status">
      <div className="mx-auto flex max-w-lg items-start gap-3 rounded-2xl border border-emerald-200 bg-white p-3.5 shadow-lg shadow-slate-900/10">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-100 text-lg">🌐</span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-slate-900">Best viewed in Chrome</p>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{message}</p>
          <div className="mt-2 flex items-center gap-2">
            <a
              href={typeof window !== "undefined" ? window.location.href : "/"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={copyLink}
              className="rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white"
            >
              Open in browser →
            </a>
            <button onClick={copyLink} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600">
              Copy link
            </button>
          </div>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss browser tip"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-xs text-slate-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
