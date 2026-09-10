"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StudyAccessGate({ hasAccess, children }: { hasAccess: boolean; children: ReactNode }) {
  const pathname = usePathname();
  const accountRoute = pathname === "/dashboard/billing" || pathname === "/dashboard/settings" || pathname === "/dashboard/more";

  if (hasAccess || accountRoute) return <>{children}</>;

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-8 text-center shadow-sm">
      <p className="text-4xl">⏳</p>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">Your 3-day access period has ended</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Upgrade or complete payment to continue using questions, exams, CAT, flashcards, learning, and offline study.
      </p>
      <Link href="/dashboard/billing" className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700">
        Upgrade to continue →
      </Link>
      <p className="mt-4 text-xs text-slate-500">Your account and payment options remain available.</p>
    </div>
  );
}
