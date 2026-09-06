import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// "More" hub for the mobile tab bar: every destination that doesn't fit in
// the five bottom tabs, organized into scannable groups with large touch
// targets. On desktop the sidebar already covers this, but the page works
// everywhere.
const GROUPS: { title: string; items: { href: string; label: string; icon: string; desc: string }[] }[] = [
  {
    title: "Practice & testing",
    items: [
      { href: "/dashboard/flashcards", label: "Flashcards", icon: "🃏", desc: "Spaced-repetition review" },
      { href: "/dashboard/exams", label: "Custom Exam", icon: "📝", desc: "Build exams from any category" },
      { href: "/dashboard/cat", label: "Adaptive Test (CAT)", icon: "📊", desc: "Difficulty adapts to you" },
      { href: "/dashboard/mock-exam", label: "Mock NMC Exam", icon: "🎓", desc: "Full exam simulation" },
      { href: "/dashboard/offline", label: "Offline Study", icon: "📶", desc: "Download & practice without data" },
    ],
  },
  {
    title: "Plan & track",
    items: [
      { href: "/dashboard/study-plan", label: "Study Plan", icon: "📅", desc: "Week-by-week plan to exam day" },
      { href: "/dashboard/progress", label: "Progress", icon: "📈", desc: "Accuracy by category" },
      { href: "/dashboard/tasks", label: "Tasks", icon: "🗂️", desc: "Clinicals, deadlines, to-dos" },
      { href: "/dashboard/notes", label: "Notes", icon: "📒", desc: "Your saved study notes" },
    ],
  },
  {
    title: "Study resources",
    items: [
      { href: "/dashboard/strategies", label: "Strategies", icon: "🎯", desc: "Test-taking frameworks" },
      { href: "/dashboard/care-plans", label: "Care Plans", icon: "🗒️", desc: "ADPIE care plan builder" },
      { href: "/dashboard/questions/bookmarks", label: "Bookmarked Questions", icon: "🔖", desc: "Your saved questions" },
    ],
  },
  {
    title: "Account",
    items: [
      { href: "/dashboard/referrals", label: "Invite & Earn", icon: "🎁", desc: "3 free days per friend" },
      { href: "/dashboard/billing", label: "Billing", icon: "💳", desc: "Plans & payment" },
      { href: "/dashboard/settings", label: "Settings", icon: "⚙️", desc: "Profile & security" },
    ],
  },
];

export default async function MorePage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Everything else</h1>
        <p className="text-slate-600">All your tools in one place.</p>
      </div>

      <div className="space-y-6">
        {GROUPS.map((group) => (
          <section key={group.title}>
            <h2 className="mb-2 px-1 text-xs font-bold uppercase tracking-widest text-slate-400">{group.title}</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {group.items.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[60px] items-center gap-3.5 px-4 py-3 transition active:bg-slate-50 ${
                    i > 0 ? "border-t border-slate-100" : ""
                  }`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-lg">{item.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                    <span className="block truncate text-xs text-slate-500">{item.desc}</span>
                  </span>
                  <span className="text-slate-300">›</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {user.isAdmin && (
          <section>
            <h2 className="mb-2 px-1 text-xs font-bold uppercase tracking-widest text-slate-400">Admin</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {[
                { href: "/dashboard/admin/payments", label: "Review Payments", icon: "🛡️" },
                { href: "/dashboard/admin/questions", label: "Upload Questions", icon: "📝" },
                { href: "/dashboard/admin/most-missed", label: "Most-Missed Report", icon: "🎯" },
              ].map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex min-h-[56px] items-center gap-3.5 px-4 py-3 transition active:bg-slate-50 ${i > 0 ? "border-t border-slate-100" : ""}`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-lg">{item.icon}</span>
                  <span className="flex-1 text-sm font-bold text-slate-900">{item.label}</span>
                  <span className="text-slate-300">›</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
