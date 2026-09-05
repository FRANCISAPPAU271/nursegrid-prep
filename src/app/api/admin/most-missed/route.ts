import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { requireAdmin, handleApiError } from "@/lib/api";

export const dynamic = "force-dynamic";

// GET /api/admin/most-missed — the questions students get wrong most often.
// This is the content-improvement worklist: these stems are the first
// candidates for richer rationales, tables, or diagrams.
export async function GET() {
  try {
    await requireAdmin();

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

    const rows = result.rows.map((r) => {
      const row = r as {
        id: string;
        stem: string;
        difficulty: string;
        category_name: string;
        attempts: string | number;
        missed: string | number;
        miss_rate: string | number | null;
      };
      return {
        id: row.id,
        stem: row.stem,
        difficulty: row.difficulty,
        categoryName: row.category_name,
        attempts: Number(row.attempts),
        missed: Number(row.missed),
        missRate: row.miss_rate === null ? 0 : Number(row.miss_rate),
      };
    });

    return NextResponse.json({ questions: rows });
  } catch (error) {
    return handleApiError(error);
  }
}
