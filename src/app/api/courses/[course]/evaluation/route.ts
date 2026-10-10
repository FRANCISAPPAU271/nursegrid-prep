import { NextResponse } from "next/server";
import { z } from "zod";
import { getCourse } from "@/content/courses";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { findActivity, getCourseState, submitEvaluation, EVALUATION_ACTIVITY } from "@/lib/courses";

const bodySchema = z.object({
  ratings: z.record(z.string(), z.number().int().min(1).max(5)),
  comment: z.string().max(2000).optional().default(""),
});

/**
 * Saves the course evaluation. Only available once the post-test has been
 * passed; saving it issues the certificate and records the completion date.
 */
export async function POST(request: Request, { params }: { params: Promise<{ course: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { course: courseSlug } = await params;
    const course = getCourse(courseSlug);
    if (!course) throw new ApiError("Course not found", 404);

    const data = bodySchema.parse(await request.json());
    for (const item of course.evaluation.items) {
      if (!(item.id in data.ratings)) throw new ApiError("Please rate every statement before submitting.", 422);
    }

    const state = await getCourseState(user, course);
    if (!state.enrollment) throw new ApiError("Enrol in the course first.", 403);
    const activity = findActivity(state, EVALUATION_ACTIVITY);
    if (!activity || activity.status === "locked") {
      throw new ApiError("Pass the post-test before completing the evaluation.", 409);
    }
    if (activity.status === "completed") {
      return NextResponse.json({ certificateId: state.enrollment.certificateId, alreadySubmitted: true });
    }

    const ratings: Record<string, number> = {};
    for (const item of course.evaluation.items) ratings[item.id] = data.ratings[item.id];
    const enrollment = await submitEvaluation(user.id, course, {
      ratings,
      comment: data.comment.trim(),
      submittedAt: new Date().toISOString(),
    });
    return NextResponse.json({ certificateId: enrollment.certificateId, completedAt: enrollment.completedAt }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
