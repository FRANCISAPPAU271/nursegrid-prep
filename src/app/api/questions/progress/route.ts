import { NextResponse } from "next/server";
import { z } from "zod";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { PRACTICE_KEY_PATTERN, clearPracticeProgress, savePracticeProgress } from "@/db/practice-progress";

// Question-bank resume position. The key is the server-derived `progressKey`
// echoed back from GET /api/questions, so the client never invents set names.
const saveSchema = z.object({
  key: z.string().regex(PRACTICE_KEY_PATTERN, "Invalid practice set"),
  position: z.number().int().min(0).max(100000),
  answered: z.number().int().min(0).max(100000),
  correct: z.number().int().min(0).max(100000),
});

export async function PUT(request: Request) {
  try {
    const user = await requireStudyAccess();
    const body = saveSchema.parse(await request.json());
    if (body.correct > body.answered) throw new ApiError("Invalid score", 422);
    await savePracticeProgress(user.id, body.key, {
      position: body.position,
      answered: body.answered,
      correct: body.correct,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

// "Start over": forget the saved position for one set.
export async function DELETE(request: Request) {
  try {
    const user = await requireStudyAccess();
    const key = new URL(request.url).searchParams.get("key") ?? "";
    if (!PRACTICE_KEY_PATTERN.test(key)) throw new ApiError("Invalid practice set", 422);
    await clearPracticeProgress(user.id, key);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
