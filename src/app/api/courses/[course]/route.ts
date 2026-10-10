import { NextResponse } from "next/server";
import { getCourse } from "@/content/courses";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { getCourseState } from "@/lib/courses";

/**
 * Current learner state for one course: enrolment, every learning activity
 * with its status, post-test attempts and certificate. Used by the exam
 * runner's post-test banner; the pages read the same state server-side.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ course: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { course: courseSlug } = await params;
    const course = getCourse(courseSlug);
    if (!course) throw new ApiError("Course not found", 404);

    const state = await getCourseState(user, course);
    return NextResponse.json({
      course: {
        slug: course.slug,
        title: course.title,
        passMark: course.postTest.passMark,
        maxAttemptsPer24h: course.postTest.maxAttemptsPer24h,
      },
      status: state.status,
      progressPercent: state.progressPercent,
      enrolled: !!state.enrollment,
      certificateId: state.enrollment?.certificateId ?? null,
      completedAt: state.enrollment?.completedAt ?? null,
      postTest: {
        passed: state.postTest.passed,
        bestScorePercent: state.postTest.bestScorePercent,
        attemptsRemaining: state.postTest.attemptsRemaining,
        nextAttemptAt: state.postTest.nextAttemptAt,
        attempts: state.postTest.attempts,
      },
      nextActivity: state.nextActivity ? { slug: state.nextActivity.slug, title: state.nextActivity.title, href: state.nextActivity.href } : null,
      activities: state.activities.map((a) => ({
        slug: a.slug,
        kind: a.kind,
        title: a.title,
        status: a.status,
        premiumLocked: a.premiumLocked,
        href: a.href,
        startedAt: a.startedAt,
        completedAt: a.completedAt,
      })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
