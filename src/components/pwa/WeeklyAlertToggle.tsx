"use client";

/**
 * The one control that makes an alert actually arrive.
 *
 * A weekly email filed under Promotions raises no notification — Gmail only
 * notifies for Primary, and that is the recipient's setting to change. A push
 * subscription sidesteps the question entirely: the device is registered with
 * the browser's push service and the notification lands in the system tray.
 *
 * Permission has to be requested from a user gesture, so this cannot be done
 * automatically on load; it is a small card the user taps once. It renders
 * nothing when the browser cannot do push (older iOS Safari in a tab, desktop
 * Safari before 16), because a button that always fails is worse than none.
 */

import { useEffect, useState } from "react";

type State = "checking" | "unsupported" | "off" | "on" | "working" | "denied";

// The VAPID key ships base64url-encoded; PushManager wants raw bytes. The
// explicit ArrayBuffer backing is deliberate: the DOM types reject a
// Uint8Array that might be backed by a SharedArrayBuffer.
function urlBase64ToUint8Array(base64String: string): Uint8Array<ArrayBuffer> {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const buffer = new ArrayBuffer(raw.length);
  const output = new Uint8Array(buffer);
  for (let i = 0; i < raw.length; i += 1) output[i] = raw.charCodeAt(i);
  return output;
}

export default function WeeklyAlertToggle({ publicKey }: { publicKey: string }) {
  const [state, setState] = useState<State>("checking");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function inspect() {
      if (!publicKey || typeof window === "undefined") {
        if (!cancelled) setState("unsupported");
        return;
      }
      if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
        if (!cancelled) setState("unsupported");
        return;
      }
      if (Notification.permission === "denied") {
        if (!cancelled) setState("denied");
        return;
      }
      try {
        const registration = await navigator.serviceWorker.ready;
        const existing = await registration.pushManager.getSubscription();
        if (!cancelled) setState(existing ? "on" : "off");
      } catch {
        if (!cancelled) setState("off");
      }
    }

    inspect();
    return () => {
      cancelled = true;
    };
  }, [publicKey]);

  async function enable() {
    setState("working");
    setMessage("");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setState(permission === "denied" ? "denied" : "off");
        return;
      }

      const registration = await navigator.serviceWorker.ready;
      const subscription =
        (await registration.pushManager.getSubscription()) ??
        (await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        }));

      const res = await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscription.toJSON()),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setMessage(body.error ?? "Could not save the subscription. Try again.");
        setState("off");
        return;
      }
      setState("on");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
      setState("off");
    }
  }

  async function disable() {
    setState("working");
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        await fetch("/api/push/subscribe", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ endpoint: subscription.endpoint }),
        }).catch(() => {});
        await subscription.unsubscribe().catch(() => {});
      }
      setState("off");
    } catch {
      setState("on");
    }
  }

  if (state === "checking" || state === "unsupported") return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Weekly email alerts</p>
          <p className="mt-0.5 text-xs text-slate-500">
            {state === "on"
              ? "On for this device. You will be notified each week, wherever the email lands."
              : state === "denied"
                ? "Notifications are blocked for this site in your browser settings."
                : "Get a notification on this device when the weekly update is ready."}
          </p>
        </div>
        {state !== "denied" && (
          <button
            onClick={state === "on" ? disable : enable}
            disabled={state === "working"}
            className={
              state === "on"
                ? "rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                : "rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
            }
          >
            {state === "working" ? "Working…" : state === "on" ? "Turn off" : "Turn on"}
          </button>
        )}
      </div>
      {message && <p className="mt-2 text-xs text-rose-600">{message}</p>}
    </div>
  );
}
