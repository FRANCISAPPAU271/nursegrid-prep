"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

function describeDevice(userAgent: string | null): string {
  if (!userAgent) return "Unknown device";
  const ua = userAgent.toLowerCase();

  let os = "Unknown OS";
  if (ua.includes("iphone") || ua.includes("ipad")) os = "iOS";
  else if (ua.includes("android")) os = "Android";
  else if (ua.includes("mac os")) os = "macOS";
  else if (ua.includes("windows")) os = "Windows";
  else if (ua.includes("linux")) os = "Linux";

  let browser = "a browser";
  if (ua.includes("edg/")) browser = "Edge";
  else if (ua.includes("chrome/") && !ua.includes("edg/")) browser = "Chrome";
  else if (ua.includes("crios")) browser = "Chrome";
  else if (ua.includes("firefox")) browser = "Firefox";
  else if (ua.includes("safari") && !ua.includes("chrome")) browser = "Safari";

  return `${browser} on ${os}`;
}

export default function SecurityCard() {
  const [session, setSession] = useState<{ userAgent: string | null; createdAt: string } | null>(null);
  const [activity, setActivity] = useState<{ userAgent: string | null; ipAddress: string | null; createdAt: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    Promise.all([fetch("/api/me/session").then((res) => res.json()), fetch("/api/me/login-activity").then((res) => res.json())])
      .then(([sessionData, activityData]) => { setSession(sessionData.session); setActivity(activityData.activity ?? []); })
      .finally(() => setLoading(false));
  }, []);

  async function signOutThisDevice() {
    setSigningOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      toast.push("Signed out", "success");
      router.push("/login");
      router.refresh();
    } catch {
      toast.push("Failed to sign out", "error");
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-bold text-slate-950">Account security</h2>
      <p className="mt-1 text-sm text-slate-600">
        For your security, NurseGrid Prep only allows <strong>one active session at a time</strong>. Signing in on a new phone or computer will
        automatically sign you out everywhere else — this helps make sure only you are using your account.
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        {loading ? (
          <div className="skeleton h-10 rounded-lg" />
        ) : session ? (
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-800">Signed in on {describeDevice(session.userAgent)}</p>
              <p className="text-xs text-slate-500">
                Since {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(session.createdAt))}
              </p>
            </div>
            <button
              onClick={signOutThisDevice}
              disabled={signingOut}
              className="shrink-0 rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 disabled:opacity-60"
            >
              {signingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>
        ) : (
          <p className="text-sm text-slate-500">No active session information available.</p>
        )}
      </div>
      {activity.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Recent sign-ins</p>
          <ul className="mt-2 space-y-2">
            {activity.slice(0, 5).map((event, index) => (
              <li key={`${event.createdAt}-${index}`} className="flex items-center justify-between gap-3 text-xs text-slate-600">
                <span>{describeDevice(event.userAgent)}{event.ipAddress ? ` · ${event.ipAddress}` : ""}</span>
                <span className="shrink-0 text-slate-400">{new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(event.createdAt))}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
