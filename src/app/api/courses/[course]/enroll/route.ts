import { NextResponse } from "next/server";
import { getCourse } from "@/content/courses";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { enroll } from "@/lib/courses";

/** Adds the course to the learner's To-Do list. Idempotent. */
export async function POST(_request: Request, { params }: { params: Promise<{ course: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { course: courseSlug } = await params;
    const course = getCourse(courseSlug);
    if (!course) throw new ApiError("Course not found", 404);

    const enrollment = await enroll(user.id, course);
    return NextResponse.json({ enrolled: true, enrolledAt: enrollment.enrolledAt, dueAt: enrollment.dueAt }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
