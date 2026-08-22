"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: "🏠", exact: true },
  { href: "/dashboard/tasks", label: "Tasks", icon: "🗂️" },
  { href: "/dashboard/notes", label: "Notes", icon: "📝" },
  { href: "/dashboard/questions", label: "Question Bank", icon: "🧠" },
  { href: "/dashboard/strategies", label: "Strategies", icon: "🎯" },
  { href: "/dashboard/learning", label: "Learning Library", icon: "📚" },
  { href: "/dashboard/care-plans", label: "Care Plans", icon: "🗒️" },
  { href: "/dashboard/progress", label: "Progress", icon: "📈" },
  { href: "/dashboard/referrals", label: "Invite & Earn", icon: "🎁" },
  { href: "/dashboard/billing", label: "Billing", icon: "💳" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar({
  name,
  email,
  isPremium,
}: {
  name: string;
  email: string;
  isPremium: boolean;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  const content = (
    <div className="flex h-full flex-col">
      <Link href="/dashboard" className="flex items-center gap-2 px-5 py-5">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
        <span className="text-lg font-bold tracking-tight text-white">NurseGrid Prep</span>
      </Link>

      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active ? "bg-emerald-600 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="m-3 rounded-xl bg-slate-800/70 p-3">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500 text-sm font-bold text-white">
            {name.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{name}</p>
            <p className="truncate text-xs text-slate-400">{email}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              isPremium ? "bg-amber-400/20 text-amber-300" : "bg-slate-700 text-slate-300"
            }`}
          >
            {isPremium ? "★ Premium" : "Free plan"}
          </span>
          <button
            onClick={logout}
            disabled={loggingOut}
            className="text-xs font-semibold text-slate-400 hover:text-white"
          >
            {loggingOut ? "…" : "Log out"}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 px-3 pb-4 text-[11px] text-slate-500">
        <Link href="/privacy" className="hover:text-slate-300">
          Privacy
        </Link>
        <span aria-hidden>·</span>
        <Link href="/terms" className="hover:text-slate-300">
          Terms
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden w-64 shrink-0 bg-slate-900 md:block">{content}</aside>

      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">🩺</span>
          <span className="font-bold text-slate-900">NurseGrid Prep</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-700"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-64 bg-slate-900 shadow-xl">{content}</div>
        </div>
      )}
    </>
  );
}
