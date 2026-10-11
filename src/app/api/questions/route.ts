import { NextResponse } from "next/server";
import { db } from "@/db";
import { questionCategories, questions, questionBookmarks } from "@/db/schema";
import { and, asc, eq, inArray, sql, type SQL } from "drizzle-orm";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { isSata } from "@/lib/sata";
import { getPracticeProgress, practiceSetKey, type PracticeProgress } from "@/db/practice-progress";
import { getCourse, getLesson } from "@/content/courses";

// The physical questions table gains an authored_id column once the
// authored-batch append has run (older databases don't have it). The check is
// cached briefly so sequential practice costs one tiny lookup every few
// minutes per server instance — and a database without the column keeps the
// legacy oldest-first order instead of erroring.
let authoredIdCheck: { at: number; promise: Promise<boolean> } | null = null;
function hasAuthoredIdColumn(): Promise<boolean> {
  const now = Date.now();
  if (!authoredIdCheck || now - authoredIdCheck.at > 5 * 60 * 1000) {
    authoredIdCheck = {
      at: now,
      promise: db
        .execute(
          sql`SELECT 1 FROM information_schema.columns WHERE table_name = 'questions' AND column_name = 'authored_id' LIMIT 1`,
        )
        .then((res) => res.rows.length > 0)
        .catch(() => false),
    };
  }
  return authoredIdCheck.promise;
}

export async function GET(request: Request) {
  try {
    const user = await requireStudyAccess();
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const limit = Math.min(Math.max(Number(searchParams.get("limit") ?? 20), 1), 50);
    const offset = Math.max(Number(searchParams.get("offset") ?? 0), 0);
    const onlyBookmarked = searchParams.get("bookmarked") === "true";
    const random = searchParams.get("random") === "true";
    // resume=1 is sent by the quiz on its first load only: when the student
    // has a saved position in this set we return the page that contains it
    // (plus the saved score) instead of page one.
    const resumeRequested = searchParams.get("resume") === "1";

    let categoryId: string | undefined;
    let categoryLocked = false;
    if (categorySlug) {
      const cat = await db
        .select()
        .from(questionCategories)
        .where(eq(questionCategories.slug, categorySlug))
        .limit(1);
      if (!cat[0]) throw new ApiError("Category not found", 404);
      categoryId = cat[0].id;
    }

    const conditions: SQL[] = [];
    if (categoryId) conditions.push(eq(questions.categoryId, categoryId));

    // Course lesson practice: restrict to questions whose tags or stem match
    // the lesson's keywords (hyphens normalised so "heart-failure" matches
    // "heart failure"). Resolved from the authored course content, so the
    // client never supplies raw patterns.
    const courseSlug = searchParams.get("course");
    const lessonSlug = searchParams.get("lesson");
    if (courseSlug && lessonSlug) {
      const course = getCourse(courseSlug);
      const lesson = course ? getLesson(course, lessonSlug) : undefined;
      if (!course || !lesson) throw new ApiError("Lesson not found", 404);
      const patterns = lesson.lesson.quiz.keywords.map((k) => `%${k.toLowerCase().replace(/-/g, " ")}%`);
      const patternArray = sql`ARRAY[${sql.join(patterns.map((p) => sql`${p}`), sql`, `)}]::text[]`;
      conditions.push(
        sql`(lower(replace(${questions.tags}::text, '-', ' ')) LIKE ANY(${patternArray}) OR lower(replace(${questions.stem}, '-', ' ')) LIKE ANY(${patternArray}))`,
      );
    }
    if (!user.isPremium) {
      conditions.push(eq(questions.isFree, true));
      categoryLocked = true;
    }

    if (onlyBookmarked) {
      const bookmarkRows = await db
        .select({ questionId: questionBookmarks.questionId })
        .from(questionBookmarks)
        .where(eq(questionBookmarks.userId, user.id));
      const ids = bookmarkRows.map((b) => b.questionId);
      if (ids.length === 0) {
        return NextResponse.json({ questions: [], total: 0, locked: categoryLocked, offset: 0, progressKey: null, resume: null });
      }
      conditions.push(inArray(questions.id, ids));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)`.mapWith(Number) })
      .from(questions)
      .where(whereClause);

    // Resume where the student left off (category practice only — shuffled
    // and bookmark sets have no stable order). A saved position at or past
    // the end means the set was finished, so we start again from the top.
    const progressKey = practiceSetKey({
      categorySlug,
      courseSlug,
      lessonSlug,
      random,
      bookmarked: onlyBookmarked,
      isPremium: user.isPremium,
    });
    let effectiveOffset = random ? 0 : offset;
    let resume: PracticeProgress | null = null;
    if (resumeRequested && progressKey) {
      try {
        const saved = await getPracticeProgress(user.id, progressKey);
        if (saved && saved.position > 0 && saved.position < count) {
          resume = saved;
          effectiveOffset = Math.floor(saved.position / limit) * limit;
        }
      } catch (error) {
        // Never let the resume bookkeeping break practice itself.
        console.error("practice progress lookup failed", error);
      }
    }

    const rows = await db
      .select({
        id: questions.id,
        categoryId: questions.categoryId,
        stem: questions.stem,
        choices: questions.choices,
        correctChoiceId: questions.correctChoiceId,
        rationale: questions.rationale,
        strategy: questions.strategy,
        difficulty: questions.difficulty,
        tags: questions.tags,
        isFree: questions.isFree,
      })
      .from(questions)
      .where(whereClause)
      // Questions are bulk-inserted in batches that share one created_at, so
      // the id tiebreaker is what makes page boundaries (and saved resume
      // positions) deterministic.
      .orderBy(random ? sql`random()` : asc(questions.createdAt), asc(questions.id))
      .limit(limit)
      .offset(effectiveOffset);

    const bookmarkRows = await db
      .select({ questionId: questionBookmarks.questionId })
      .from(questionBookmarks)
      .where(
        and(
          eq(questionBookmarks.userId, user.id),
          inArray(
            questionBookmarks.questionId,
            rows.map((r) => r.id),
          ),
        ),
      );
    const bookmarkedSet = new Set(bookmarkRows.map((b) => b.questionId));

    // Hide the correct answer + rationale/strategy until the client submits an attempt.
    const safeRows = rows.map((r) => ({
      id: r.id,
      categoryId: r.categoryId,
      stem: r.stem,
      choices: r.choices,
      difficulty: r.difficulty,
      tags: r.tags,
      isFree: r.isFree,
      isBookmarked: bookmarkedSet.has(r.id),
      isSata: isSata(r.correctChoiceId),
    }));

    return NextResponse.json({
      questions: safeRows,
      total: count,
      locked: categoryLocked,
      offset: effectiveOffset,
      progressKey,
      resume: resume ? { position: resume.position, answered: resume.answered, correct: resume.correct } : null,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
