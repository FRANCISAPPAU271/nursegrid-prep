import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { questions, questionCategories } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { ensureSourceColumn, validateManualQuestion } from "@/db/manual-questions";

export const dynamic = "force-dynamic";

const choiceSchema = z.object({
  id: z.string().min(1).max(4),
  text: z.string().trim().min(1).max(500),
});

const questionSchema = z.object({
  categoryId: z.string().min(1),
  stem: z.string().trim().min(10).max(2000),
  choices: z.array(choiceSchema).min(2).max(6),
  correctChoiceId: z.string().min(1),
  rationale: z.string().trim().min(10).max(8000),
  strategy: z.string().trim().max(2000).default(""),
  difficulty: z.enum(["easy", "medium", "hard"]).default("medium"),
  isFree: z.boolean().default(false),
});

// GET /api/admin/questions — list manually uploaded questions.
export async function GET() {
  try {
    await requireAdmin();
    await ensureSourceColumn();

    const rows = await db
      .select({
        id: questions.id,
        categoryId: questions.categoryId,
        categoryName: questionCategories.name,
        stem: questions.stem,
        choices: questions.choices,
        correctChoiceId: questions.correctChoiceId,
        rationale: questions.rationale,
        strategy: questions.strategy,
        difficulty: questions.difficulty,
        isFree: questions.isFree,
        createdAt: questions.createdAt,
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(sql`${questions}."source" = 'manual'`)
      .orderBy(desc(questions.createdAt))
      .limit(500);

    const categories = await db
      .select({ id: questionCategories.id, name: questionCategories.name, slug: questionCategories.slug })
      .from(questionCategories)
      .orderBy(questionCategories.sortOrder);

    return NextResponse.json({ questions: rows, categories });
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/admin/questions — upload one question, or an array of them.
export async function POST(request: Request) {
  try {
    await requireAdmin();
    await ensureSourceColumn();

    const body = await request.json();
    const items = Array.isArray(body) ? body : [body];
    if (items.length === 0) throw new ApiError("Nothing to upload.");
    if (items.length > 200) throw new ApiError("Upload at most 200 questions per request.");

    const parsed = items.map((item, i) => {
      const result = questionSchema.safeParse(item);
      if (!result.success) {
        const issue = result.error.issues[0];
        throw new ApiError(`Question ${i + 1}: ${issue.path.join(".")} — ${issue.message}`, 422);
      }
      return result.data;
    });

    // Validate category ids and content rules before inserting anything.
    const categories = await db.select({ id: questionCategories.id }).from(questionCategories);
    const validCategoryIds = new Set(categories.map((c) => c.id));
    for (let i = 0; i < parsed.length; i++) {
      const q = parsed[i];
      if (!validCategoryIds.has(q.categoryId)) throw new ApiError(`Question ${i + 1}: unknown category.`, 422);
      const problem = validateManualQuestion(q);
      if (problem) throw new ApiError(`Question ${i + 1}: ${problem}`, 422);
    }

    const inserted: string[] = [];
    for (const q of parsed) {
      const [row] = await db
        .insert(questions)
        .values({
          categoryId: q.categoryId,
          stem: q.stem,
          choices: q.choices,
          correctChoiceId: q.correctChoiceId,
          rationale: q.rationale,
          strategy: q.strategy || "Read every option fully before choosing — distractors are designed to look right at a glance.",
          difficulty: q.difficulty,
          tags: ["manual"],
          isFree: q.isFree,
        })
        .returning({ id: questions.id });
      await db.execute(sql`UPDATE "questions" SET "source" = 'manual' WHERE "id" = ${row.id}`);
      inserted.push(row.id);
    }

    return NextResponse.json({ ok: true, inserted: inserted.length, ids: inserted }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
