import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { ensureMediaColumns } from "@/db/question-media";
import MostMissedTable, { type MissedRow } from "@/components/admin/MostMissedTable";

export const dynamic = "force-dynamic";

export default async function MostMissedPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  await ensureMediaColumns();

  const result = await db.execute(sql`
    SELECT
      q."id",
      q."stem",
      q."difficulty",
      q."media_url",
      q."media_caption",
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
    GROUP BY q."id", q."stem", q."difficulty", q."media_url", q."media_caption", c."name"
    HAVING count(a."id") >= 1
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
      mediaUrl: row.media_url ? String(row.media_url) : null,
      mediaCaption: row.media_caption ? String(row.media_caption) : null,
    };
  });

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Most-Missed Questions <span className="align-middle text-lg">🎯</span>
        </h1>
        <p className="text-slate-600">
          The questions students get wrong most often. Attach a diagram or table image to any of
          them — it will appear alongside the rationale after students answer.
        </p>
      </div>
      <MostMissedTable initial={rows} />
    </div>
  );
}
