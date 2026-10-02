import { redirect } from "next/navigation";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function PaymentAuditPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");
  await db.execute(sql`CREATE TABLE IF NOT EXISTS "payment_audit_events" ("id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text), "request_id" text NOT NULL, "user_id" text NOT NULL, "admin_id" text NOT NULL, "action" text NOT NULL, "amount_cents" integer NOT NULL, "plan" text NOT NULL, "note" text, "created_at" timestamptz NOT NULL DEFAULT now())`);
  const result = await db.execute(sql`SELECT a."id", a."request_id" AS "requestId", a."action", a."amount_cents" AS "amountCents", a."plan", a."note", a."created_at" AS "createdAt", u."email" AS "userEmail", admin."email" AS "adminEmail" FROM "payment_audit_events" a LEFT JOIN "users" u ON u."id" = a."user_id" LEFT JOIN "users" admin ON admin."id" = a."admin_id" ORDER BY a."created_at" DESC LIMIT 200`);
  return <div><div className="mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Payment audit log</h1><p className="mt-1 text-slate-600">A record of every manual MoMo approval and rejection.</p></div><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Action</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Plan</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Admin</th><th className="px-4 py-3">Note</th></tr></thead><tbody>{result.rows.map((row) => { const r = row as { id: string; action: string; userEmail?: string; adminEmail?: string; plan: string; amountCents: number; note?: string; createdAt: string }; return <tr key={r.id} className="border-t border-slate-100"><td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">{new Date(r.createdAt).toLocaleString()}</td><td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-bold ${r.action === "approved" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{r.action}</span></td><td className="px-4 py-3 text-slate-700">{r.userEmail ?? "—"}</td><td className="px-4 py-3 capitalize text-slate-700">{r.plan.replaceAll("_", " ")}</td><td className="px-4 py-3 text-slate-700">GH₵ {(r.amountCents / 100).toFixed(2)}</td><td className="px-4 py-3 text-slate-600">{r.adminEmail ?? "—"}</td><td className="max-w-xs px-4 py-3 text-slate-500">{r.note ?? "—"}</td></tr>; })}</tbody></table></div>{result.rows.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No reviewed payments yet.</p>}</div></div>;
}
