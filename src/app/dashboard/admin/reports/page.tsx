import { redirect } from "next/navigation";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminReportsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");
  const rows = await db.execute(sql`SELECT r."id", r."question_id" AS "questionId", r."reason", r."status", r."created_at" AS "createdAt", u."email" FROM "question_reports" r INNER JOIN "users" u ON u."id" = r."user_id" ORDER BY r."created_at" DESC LIMIT 100`);
  return <div><div className="mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Question reports</h1><p className="mt-1 text-slate-600">Review student feedback on unclear, incorrect or outdated questions.</p></div><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-4 py-3">Question</th><th className="px-4 py-3">Reason</th><th className="px-4 py-3">Reported by</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Date</th></tr></thead><tbody>{rows.rows.map((row) => { const r = row as { id: string; questionId: string; reason: string; status: string; email: string; createdAt: string }; return <tr key={r.id} className="border-t border-slate-100"><td className="max-w-[180px] truncate px-4 py-3 font-mono text-xs text-slate-500">{r.questionId}</td><td className="px-4 py-3 capitalize text-slate-700">{r.reason.replaceAll("_", " ")}</td><td className="px-4 py-3 text-slate-600">{r.email}</td><td className="px-4 py-3"><span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700">{r.status}</span></td><td className="px-4 py-3 text-xs text-slate-500">{new Date(r.createdAt).toLocaleString()}</td></tr>; })}</tbody></table></div>{rows.rows.length === 0 && <p className="p-8 text-center text-sm text-slate-500">No question reports yet.</p>}</div></div>;
}
