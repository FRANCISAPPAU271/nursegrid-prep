import { redirect } from "next/navigation";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

async function check(label: string, query: ReturnType<typeof sql>, detail: (row: unknown) => string = () => "Available") {
  try { const result = await db.execute(query); return { label, ok: true, detail: detail(result.rows[0]) }; } catch { return { label, ok: false, detail: "Unavailable" }; }
}

export default async function AdminHealthPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");
  const checks = await Promise.all([
    check("Database", sql`SELECT 1`, () => "Connected"),
    check("Question bank", sql`SELECT COUNT(*)::int AS count FROM "questions"`, (row) => `${(row as { count: number }).count.toLocaleString()} questions available`),
    check("Accounts", sql`SELECT 1 FROM "users" LIMIT 1`),
  ]);
  const healthy = checks.every((item) => item.ok);
  return <div><div className="mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-950">System health</h1><p className="mt-1 text-slate-600">A quick production check for the services students depend on.</p></div><div className={`rounded-2xl border p-5 ${healthy ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"}`}><p className={`text-lg font-extrabold ${healthy ? "text-emerald-800" : "text-rose-800"}`}>{healthy ? "System status: Healthy" : "System status: Attention needed"}</p><p className="mt-1 text-sm text-slate-600">Checked at {new Date().toLocaleString()}</p></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{checks.map((item) => <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex items-center justify-between"><p className="font-bold text-slate-900">{item.label}</p><span className={`h-3 w-3 rounded-full ${item.ok ? "bg-emerald-500" : "bg-rose-500"}`} /></div><p className="mt-2 text-sm text-slate-500">{item.detail}</p></div>)}</div></div>;
}
