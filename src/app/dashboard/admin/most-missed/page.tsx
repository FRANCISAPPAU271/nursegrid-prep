import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

type MissedRow = {
  id: string;
  stem: string;
  difficulty: string;
  categoryName: string;
  attempts: number;
  missed: number;
  missRate: number;
};

export default async function MostMissedPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  const result = await db.execute(sql`
    SELECT
      q."id",
      q."stem",
      q."difficulty",
      c."name" AS category_name,
      count(a."id") AS attempts,
      count(a."id") FILTER (WHERE a."is_correct" = false) AS missed,
      round(
        count(a."id") FILTER (WHERE a."is_correct" = false)::numeric
        / NULLIF(count(a."id"), 0) * 100
      ) AS miss_rate
    FROM "question_attempts" a
    JOIN "questions" q ON q."id" = a."question_id"
    JOIN "question_categories" c ON c."id" = q."category_id"
    GROUP BY q."id", q."stem", q."difficulty", c."name"
    HAVING count(a."id") >= 5
    ORDER BY miss_rate DESC, attempts DESC
    LIMIT 100
  `);

  const rows: MissedRow[] = result.rows.map((r) => {
    const row = r as Record<string, unknown>;
    return {
      id: String(row.id),
      stem: String(row.stem),
      difficulty: String(row.difficulty),
      categoryName: String(row.category_name),
      attempts: Number(row.attempts),
      missed: Number(row.missed),
      missRate: row.miss_rate === null ? 0 : Number(row.miss_rate),
    };
  });

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Most-Missed Questions <span className="align-middle text-lg">🎯</span>
        </h1>
        <p className="text-slate-600">
          The questions students get wrong most often (minimum 5 attempts). Use this as the worklist for enriching
          rationales with tables and diagrams — highest miss-rate first.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="text-4xl">📊</div>
          <h3 className="mt-3 text-base font-bold text-slate-900">Not enough data yet</h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
            Once questions accumulate at least 5 attempts each, the hardest ones will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">Question</th>
                <th className="hidden px-4 py-3 sm:table-cell">Category</th>
                <th className="px-4 py-3 text-right">Miss rate</th>
                <th className="hidden px-4 py-3 text-right sm:table-cell">Attempts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((q) => (
                <tr key={q.id} className="align-top hover:bg-slate-50/60">
                  <td className="max-w-md px-4 py-3">
                    <p className="line-clamp-2 font-medium text-slate-800">{q.stem}</p>
                    <p className="mt-0.5 text-xs capitalize text-slate-400 sm:hidden">
                      {q.categoryName} · {q.attempts} attempts
                    </p>
                  </td>
                  <td className="hidden px-4 py-3 text-xs text-slate-500 sm:table-cell">{q.categoryName}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${
                        q.missRate >= 70
                          ? "bg-rose-100 text-rose-700"
                          : q.missRate >= 50
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {q.missRate}%
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-right text-xs text-slate-500 sm:table-cell">
                    {q.missed}/{q.attempts}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
