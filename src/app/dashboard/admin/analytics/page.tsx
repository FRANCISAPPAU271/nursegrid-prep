import { redirect } from "next/navigation";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminAnalyticsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");
  const [users, active, attempts, pending, questions] = await Promise.all([
    db.execute(sql`SELECT count(*)::int AS n FROM "users"`),
    db.execute(sql`SELECT count(DISTINCT "user_id")::int AS n FROM "subscriptions" WHERE "status" = 'active'`),
    db.execute(sql`SELECT count(*)::int AS n FROM "question_attempts" WHERE "attempted_at" >= now() - interval '7 days'`),
    db.execute(sql`SELECT count(*)::int AS n FROM "momo_payment_requests" WHERE "status" = 'pending'`),
    db.execute(sql`SELECT count(*)::int AS n FROM "questions"`),
  ]);
  const value = (result: { rows: unknown[] }) => Number((result.rows[0] as { n?: number } | undefined)?.n ?? 0);
  const cards = [
    ["Registered users", value(users), "👥"],
    ["Active paid users", value(active), "💎"],
    ["Questions answered · 7 days", value(attempts), "🧠"],
    ["Pending MoMo reviews", value(pending), "📱"],
    ["Questions in production", value(questions), "📚"],
  ];
  return <div><div className="mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Admin analytics</h1><p className="mt-1 text-slate-600">A quick view of product usage and payment operations.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{cards.map(([label, number, icon]) => <div key={String(label)} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex justify-between"><p className="text-sm font-medium text-slate-500">{label}</p><span>{icon}</span></div><p className="mt-2 text-3xl font-extrabold text-slate-950">{String(number)}</p></div>)}</div><div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><p className="text-sm font-bold text-emerald-900">Operational reminder</p><p className="mt-1 text-sm text-emerald-800">Verify every manual MoMo transaction against your actual account before approving access.</p></div></div>;
}
