import "server-only";
import { db } from "@/db";
import { sql } from "drizzle-orm";

// Daily performance trend: accuracy + volume per practice day over the last
// 30 days, computed in one SQL aggregate. Powers the trend graph on the
// Readiness page.

export type TrendPoint = {
  date: string; // YYYY-MM-DD
  attempted: number;
  correct: number;
  accuracy: number; // 0-100
};

export async function computeTrend(userId: string, days = 30): Promise<TrendPoint[]> {
  const result = await db.execute(sql`
    SELECT
      date_trunc('day', "attempted_at")::date AS day,
      count(*) AS attempted,
      count(*) FILTER (WHERE "is_correct") AS correct
    FROM "question_attempts"
    WHERE "user_id" = ${userId}
      AND "attempted_at" >= current_date - ${days}::int
    GROUP BY 1
    ORDER BY 1 ASC
  `);

  return result.rows.map((r) => {
    const row = r as { day: string | Date; attempted: string | number; correct: string | number };
    const attempted = Number(row.attempted);
    const correct = Number(row.correct);
    const d = row.day instanceof Date ? row.day : new Date(row.day);
    return {
      date: d.toISOString().slice(0, 10),
      attempted,
      correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0,
    };
  });
}
