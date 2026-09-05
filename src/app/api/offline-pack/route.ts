import { NextResponse } from "next/server";
import { db } from "@/db";
import { questions, questionCategories } from "@/db/schema";
import { eq, sql, type SQL } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

// GET /api/offline-pack?limit=50|100
//
// Returns a pack of questions WITH answers, rationales and strategies so the
// client can grade locally while offline (data-saver mode for students with
// unstable/expensive connectivity). Free users receive free questions only;
// premium users sample the whole bank. Attempts made offline are queued on
// the device and synced back through the normal attempt endpoint when the
// connection returns.
export async function GET(request: Request) {
  try {
    const user = await requireUser();
    const { searchParams } = new URL(request.url);
    const limit = Math.min(Math.max(Number(searchParams.get("limit") ?? 50), 10), 100);

    const conditions: SQL[] = [];
    if (!user.isPremium) conditions.push(eq(questions.isFree, true));

    const rows = await db
      .select({
        id: questions.id,
        stem: questions.stem,
        choices: questions.choices,
        correctChoiceId: questions.correctChoiceId,
        rationale: questions.rationale,
        strategy: questions.strategy,
        difficulty: questions.difficulty,
        categoryName: questionCategories.name,
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(conditions.length > 0 ? conditions[0] : undefined)
      .orderBy(sql`random()`)
      .limit(limit);

    return NextResponse.json({
      downloadedAt: new Date().toISOString(),
      isPremium: user.isPremium,
      questions: rows,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
