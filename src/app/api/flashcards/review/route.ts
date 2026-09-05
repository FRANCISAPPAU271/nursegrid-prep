import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { ensureFlashcardTable, BOX_INTERVALS_DAYS, MAX_BOX } from "@/db/flashcards";

const schema = z.object({
  questionId: z.string().min(1),
  gotIt: z.boolean(), // true = "I knew it", false = "still shaky"
});

// POST /api/flashcards/review — Leitner update for one card.
export async function POST(request: Request) {
  try {
    const user = await requireUser();
    await ensureFlashcardTable();
    const body = await request.json();
    const { questionId, gotIt } = schema.parse(body);

    const existing = await db.execute(sql`
      SELECT "box" FROM "flashcard_reviews"
      WHERE "user_id" = ${user.id} AND "question_id" = ${questionId}
      LIMIT 1
    `);
    const row = existing.rows[0] as { box: number } | undefined;
    if (!row) throw new ApiError("Card not found in your deck", 404);

    const newBox = gotIt ? Math.min(row.box + 1, MAX_BOX) : 1;
    // Correct → next interval for the new box. Wrong → see it again in 10
    // minutes within the same session.
    const nextDueSql = gotIt
      ? sql`now() + make_interval(days => ${BOX_INTERVALS_DAYS[newBox - 1]})`
      : sql`now() + interval '10 minutes'`;

    await db.execute(sql`
      UPDATE "flashcard_reviews"
      SET "box" = ${newBox},
          "times_seen" = "times_seen" + 1,
          "times_correct" = "times_correct" + ${gotIt ? 1 : 0},
          "next_due_at" = ${nextDueSql},
          "last_reviewed_at" = now()
      WHERE "user_id" = ${user.id} AND "question_id" = ${questionId}
    `);

    return NextResponse.json({
      ok: true,
      box: newBox,
      mastered: newBox >= MAX_BOX,
      nextDueInDays: gotIt ? BOX_INTERVALS_DAYS[newBox - 1] : 0,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
