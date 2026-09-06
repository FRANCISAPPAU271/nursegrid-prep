"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// App-style bottom tab bar for phones. The five destinations students use
// most, always one thumb-tap away — the single biggest "feels like a real
// app" upgrade for mobile. Hidden on md+ where the sidebar takes over.
const TABS = [
  { href: "/dashboard", label: "Home", icon: "🏠", exact: true },
  { href: "/dashboard/questions", label: "Practice", icon: "🧠", exact: false },
  { href: "/dashboard/readiness", label: "Readiness", icon: "🎯", exact: false },
  { href: "/dashboard/learning", label: "Learn", icon: "📚", exact: false },
  { href: "/dashboard/more", label: "More", icon: "☰", exact: false },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {TABS.map((tab) => {
          const active = tab.exact ? pathname === tab.href : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? "page" : undefined}
              className={`flex min-h-[56px] flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition-colors ${
                active ? "text-emerald-700" : "text-slate-400 active:text-slate-600"
              }`}
            >
              <span className={`grid h-7 w-12 place-items-center rounded-full text-lg transition-colors ${active ? "bg-emerald-100" : ""}`}>
                {tab.icon}
              </span>
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
