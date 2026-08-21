import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { questions, questionAttempts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

const schema = z.object({ selectedChoiceId: z.string().min(1) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    const body = await request.json();
    const { selectedChoiceId } = schema.parse(body);

    const rows = await db.select().from(questions).where(eq(questions.id, id)).limit(1);
    const question = rows[0];
    if (!question) throw new ApiError("Question not found", 404);
    if (!question.isFree && !user.isPremium) {
      throw new ApiError("Upgrade to premium to unlock this question.", 403);
    }

    const isCorrect = selectedChoiceId === question.correctChoiceId;

    await db.insert(questionAttempts).values({
      userId: user.id,
      questionId: question.id,
      categoryId: question.categoryId,
      selectedChoiceId,
      isCorrect,
    });

    return NextResponse.json({
      isCorrect,
      correctChoiceId: question.correctChoiceId,
      rationale: question.rationale,
      strategy: question.strategy,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
