import { NextResponse } from "next/server";
import { z } from "zod";
import { getCourse } from "@/content/courses";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { findActivity, getCourseState, markActivityCompleted, markActivityStarted } from "@/lib/courses";

const bodySchema = z.object({ action: z.enum(["start", "complete"]) });

/**
 * Records progress on a lesson activity. The sequential rule and the
 * free/Premium rule are enforced here, not just in the UI: a locked activity
 * cannot be started or completed by calling the API directly.
 */
export async function POST(request: Request, { params }: { params: Promise<{ course: string; activity: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { course: courseSlug, activity: activitySlug } = await params;
    const course = getCourse(courseSlug);
    if (!course) throw new ApiError("Course not found", 404);

    const { action } = bodySchema.parse(await request.json().catch(() => ({})));

    const state = await getCourseState(user, course);
    if (!state.enrollment) throw new ApiError("Enrol in the course first.", 403);

    const activity = findActivity(state, activitySlug);
    if (!activity || activity.kind !== "lesson") throw new ApiError("Learning activity not found", 404);
    if (activity.premiumLocked) throw new ApiError("This lesson is part of Premium. Upgrade to continue the course.", 403);
    if (activity.status === "locked") throw new ApiError("Complete the previous learning activity first.", 409);

    if (action === "start") {
      await markActivityStarted(user.id, course.slug, activitySlug);
    } else {
      await markActivityCompleted(user.id, course.slug, activitySlug);
    }

    const next = await getCourseState(user, course);
    const updated = findActivity(next, activitySlug);
    return NextResponse.json({
      activity: { slug: activitySlug, status: updated?.status ?? "not-started", completedAt: updated?.completedAt ?? null },
      nextActivity: next.nextActivity ? { slug: next.nextActivity.slug, title: next.nextActivity.title, href: next.nextActivity.href, kind: next.nextActivity.kind } : null,
      progressPercent: next.progressPercent,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid action" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
