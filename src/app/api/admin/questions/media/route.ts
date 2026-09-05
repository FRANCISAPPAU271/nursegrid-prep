import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { setQuestionMedia } from "@/db/question-media";

export const dynamic = "force-dynamic";

const schema = z.object({
  questionId: z.string().min(1),
  // Empty string removes the media.
  mediaUrl: z.string().trim().max(1000),
  mediaCaption: z.string().trim().max(300).default(""),
});

// POST /api/admin/questions/media — attach (or remove) an explanation
// image/diagram to a question's rationale. Accepts any https image URL
// (e.g. an uploaded diagram hosted on a CDN or image host).
export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const { questionId, mediaUrl, mediaCaption } = schema.parse(body);

    const rows = await db.select({ id: questions.id }).from(questions).where(eq(questions.id, questionId)).limit(1);
    if (!rows[0]) throw new ApiError("Question not found", 404);

    if (mediaUrl && !/^https:\/\//.test(mediaUrl)) {
      throw new ApiError("Media URL must start with https://", 422);
    }

    await setQuestionMedia(questionId, mediaUrl || null, mediaUrl ? mediaCaption || null : null);

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
