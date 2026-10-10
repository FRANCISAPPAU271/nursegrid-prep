import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";
import { db } from "@/db";
import { examSessions, questionCategories, questions } from "@/db/schema";
import type { ExamQuestionSnapshot } from "@/db/schema";
import { courseKeywords, getCourse, postTestMarker } from "@/content/courses";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { findActivity, getCourseState, POST_TEST_ACTIVITY } from "@/lib/courses";

/**
 * Starts (or resumes) the course post-test.
 *
 * The post-test is an ordinary exam session so the existing runner, grading
 * and review screens are reused unchanged. It is tagged with
 * "course:<slug>" in category_slugs so the course can find its attempts.
 * Questions are drawn at random from the course keyword pool, matched
 * against tags and stems with hyphens normalised to spaces.
 */
export async function POST(_request: Request, { params }: { params: Promise<{ course: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { course: courseSlug } = await params;
    const course = getCourse(courseSlug);
    if (!course) throw new ApiError("Course not found", 404);

    const state = await getCourseState(user, course);
    if (!state.enrollment) throw new ApiError("Enrol in the course first.", 403);

    const activity = findActivity(state, POST_TEST_ACTIVITY);
    if (!activity) throw new ApiError("Post-test not found", 404);
    if (activity.premiumLocked) throw new ApiError("The post-test is part of Premium. Upgrade to complete the course.", 403);
    if (activity.status === "locked") throw new ApiError("Complete every learning activity before taking the post-test.", 409);

    if (state.postTest.inProgressId) {
      return NextResponse.json({ examId: state.postTest.inProgressId, resumed: true });
    }
    if (state.postTest.passed) {
      throw new ApiError("You have already passed this post-test.", 409);
    }
    if (state.postTest.attemptsRemaining <= 0) {
      const when = state.postTest.nextAttemptAt;
      const message = when
        ? `You have used all ${course.postTest.maxAttemptsPer24h} attempts for today. Review the learning activities and try again after ${when.toLocaleString("en-GB", { timeZone: "Africa/Accra" })}.`
        : `You have used all ${course.postTest.maxAttemptsPer24h} attempts for today.`;
      throw new ApiError(message, 429);
    }

    const patterns = courseKeywords(course).map((k) => `%${k.replace(/-/g, " ")}%`);
    const patternArray = sql`ARRAY[${sql.join(patterns.map((p) => sql`${p}`), sql`, `)}]::text[]`;
    const matchesPool = sql`(
      lower(replace(${questions.tags}::text, '-', ' ')) LIKE ANY(${patternArray})
      OR lower(replace(${questions.stem}, '-', ' ')) LIKE ANY(${patternArray})
    )`;

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
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(matchesPool)
      .orderBy(sql`random()`)
      .limit(course.postTest.questionCount);

    if (rows.length < Math.min(10, course.postTest.questionCount)) {
      throw new ApiError("Not enough questions are available for this post-test yet. Please try again later.", 503);
    }

    const snapshot: ExamQuestionSnapshot[] = rows.map((r) => ({
      id: r.id,
      categoryId: r.categoryId,
      categoryName: r.categoryName,
      stem: r.stem,
      choices: r.choices,
      correctChoiceId: r.correctChoiceId,
      rationale: r.rationale,
      strategy: r.strategy,
      difficulty: r.difficulty,
    }));

    const attemptNumber = state.postTest.attempts.length + 1;
    const [exam] = await db
      .insert(examSessions)
      .values({
        userId: user.id,
        title: `${course.postTest.title} · Attempt ${attemptNumber}`,
        categorySlugs: [postTestMarker(course.slug)],
        questionSnapshot: snapshot,
        totalQuestions: rows.length,
      })
      .returning({ id: examSessions.id });

    return NextResponse.json({ examId: exam.id, resumed: false, attemptNumber }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
