import "server-only";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import type { SessionUser } from "@/lib/auth";
import type { ActivityStatus, CourseStatus } from "@/lib/courses-types";
import {
  CERTIFICATE_ACTIVITY,
  COURSES,
  EVALUATION_ACTIVITY,
  POST_TEST_ACTIVITY,
  courseActivities,
  isLessonFree,
  postTestMarker,
  type Course,
  type CourseActivity,
} from "@/content/courses";

// ---------------------------------------------------------------------------
// Storage. Two small tables, created on first use with the same
// CREATE TABLE IF NOT EXISTS pattern as login_events, so no migration step is
// needed in Preview or Production. Course *content* never touches the
// database — only enrolment and progress do.
// ---------------------------------------------------------------------------

let tablesReady: Promise<void> | null = null;

export function ensureCourseTables(): Promise<void> {
  if (!tablesReady) {
    tablesReady = (async () => {
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "course_enrollments" (
          "user_id" text NOT NULL,
          "course_slug" text NOT NULL,
          "enrolled_at" timestamptz NOT NULL DEFAULT now(),
          "due_at" timestamptz NOT NULL,
          "completed_at" timestamptz,
          "certificate_id" text,
          "evaluation" jsonb,
          PRIMARY KEY ("user_id", "course_slug")
        )
      `);
      await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "course_activity_progress" (
          "user_id" text NOT NULL,
          "course_slug" text NOT NULL,
          "activity_slug" text NOT NULL,
          "started_at" timestamptz NOT NULL DEFAULT now(),
          "completed_at" timestamptz,
          PRIMARY KEY ("user_id", "course_slug", "activity_slug")
        )
      `);
    })().catch((error) => {
      tablesReady = null;
      throw error;
    });
  }
  return tablesReady;
}

// ---------------------------------------------------------------------------
// Types shared with the pages and the API routes
// ---------------------------------------------------------------------------

export type EvaluationResponse = {
  ratings: Record<string, number>;
  comment: string;
  submittedAt: string;
};

export type Enrollment = {
  courseSlug: string;
  enrolledAt: Date;
  dueAt: Date;
  completedAt: Date | null;
  certificateId: string | null;
  evaluation: EvaluationResponse | null;
};

export type ActivityProgress = { startedAt: Date | null; completedAt: Date | null };

export type PostTestAttempt = {
  id: string;
  scorePercent: number;
  correctCount: number;
  totalQuestions: number;
  completedAt: Date;
  passed: boolean;
};

export type PostTestSummary = {
  attempts: PostTestAttempt[];
  attemptsLast24h: number;
  attemptsRemaining: number;
  /** When the next attempt becomes available if the 24-hour limit is reached. */
  nextAttemptAt: Date | null;
  bestScorePercent: number | null;
  passed: boolean;
  passedAt: Date | null;
  /** An unfinished post-test session that can be resumed. */
  inProgressId: string | null;
};

export type { ActivityStatus, CourseStatus } from "@/lib/courses-types";

export type ActivityView = CourseActivity & {
  status: ActivityStatus;
  startedAt: Date | null;
  completedAt: Date | null;
  /** True when the learner's plan does not include this activity. */
  premiumLocked: boolean;
  href: string;
};

export type CourseState = {
  course: Course;
  enrollment: Enrollment | null;
  activities: ActivityView[];
  postTest: PostTestSummary;
  status: CourseStatus;
  /** Completed activities out of the activities that count (lessons, post-test, evaluation). */
  completedCount: number;
  totalCount: number;
  progressPercent: number;
  overdue: boolean;
  /** The first activity the learner should open next, if any. */
  nextActivity: ActivityView | null;
};

// ---------------------------------------------------------------------------
// Row mappers
// ---------------------------------------------------------------------------

type EnrollmentRow = {
  course_slug: string;
  enrolled_at: string | Date;
  due_at: string | Date;
  completed_at: string | Date | null;
  certificate_id: string | null;
  evaluation: EvaluationResponse | null;
};

function toDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;
  return value instanceof Date ? value : new Date(value);
}

function mapEnrollment(row: EnrollmentRow): Enrollment {
  return {
    courseSlug: row.course_slug,
    enrolledAt: toDate(row.enrolled_at) as Date,
    dueAt: toDate(row.due_at) as Date,
    completedAt: toDate(row.completed_at),
    certificateId: row.certificate_id,
    evaluation: row.evaluation ?? null,
  };
}

// ---------------------------------------------------------------------------
// Enrolment
// ---------------------------------------------------------------------------

export async function listEnrollments(userId: string): Promise<Enrollment[]> {
  await ensureCourseTables();
  const result = await db.execute(sql`
    SELECT "course_slug", "enrolled_at", "due_at", "completed_at", "certificate_id", "evaluation"
    FROM "course_enrollments"
    WHERE "user_id" = ${userId}
    ORDER BY "enrolled_at" DESC
  `);
  return (result.rows as EnrollmentRow[]).map(mapEnrollment);
}

export async function getEnrollment(userId: string, courseSlug: string): Promise<Enrollment | null> {
  await ensureCourseTables();
  const result = await db.execute(sql`
    SELECT "course_slug", "enrolled_at", "due_at", "completed_at", "certificate_id", "evaluation"
    FROM "course_enrollments"
    WHERE "user_id" = ${userId} AND "course_slug" = ${courseSlug}
    LIMIT 1
  `);
  const row = result.rows[0] as EnrollmentRow | undefined;
  return row ? mapEnrollment(row) : null;
}

export async function enroll(userId: string, course: Course): Promise<Enrollment> {
  await ensureCourseTables();
  const dueAt = new Date(Date.now() + course.dueInDays * 24 * 60 * 60 * 1000);
  await db.execute(sql`
    INSERT INTO "course_enrollments" ("user_id", "course_slug", "due_at")
    VALUES (${userId}, ${course.slug}, ${dueAt})
    ON CONFLICT ("user_id", "course_slug") DO NOTHING
  `);
  return (await getEnrollment(userId, course.slug)) as Enrollment;
}

// ---------------------------------------------------------------------------
// Activity progress
// ---------------------------------------------------------------------------

export async function getActivityProgress(userId: string, courseSlug: string): Promise<Map<string, ActivityProgress>> {
  await ensureCourseTables();
  const result = await db.execute(sql`
    SELECT "activity_slug", "started_at", "completed_at"
    FROM "course_activity_progress"
    WHERE "user_id" = ${userId} AND "course_slug" = ${courseSlug}
  `);
  const map = new Map<string, ActivityProgress>();
  for (const row of result.rows as { activity_slug: string; started_at: string | Date; completed_at: string | Date | null }[]) {
    map.set(row.activity_slug, { startedAt: toDate(row.started_at), completedAt: toDate(row.completed_at) });
  }
  return map;
}

export async function markActivityStarted(userId: string, courseSlug: string, activitySlug: string): Promise<void> {
  await ensureCourseTables();
  await db.execute(sql`
    INSERT INTO "course_activity_progress" ("user_id", "course_slug", "activity_slug")
    VALUES (${userId}, ${courseSlug}, ${activitySlug})
    ON CONFLICT ("user_id", "course_slug", "activity_slug") DO NOTHING
  `);
}

export async function markActivityCompleted(userId: string, courseSlug: string, activitySlug: string): Promise<void> {
  await ensureCourseTables();
  await db.execute(sql`
    INSERT INTO "course_activity_progress" ("user_id", "course_slug", "activity_slug", "completed_at")
    VALUES (${userId}, ${courseSlug}, ${activitySlug}, now())
    ON CONFLICT ("user_id", "course_slug", "activity_slug")
    DO UPDATE SET "completed_at" = COALESCE("course_activity_progress"."completed_at", now())
  `);
}

// ---------------------------------------------------------------------------
// Post-test (reuses exam_sessions; sessions are tagged with "course:<slug>")
// ---------------------------------------------------------------------------

const DAY_MS = 24 * 60 * 60 * 1000;

export async function getPostTestSummary(userId: string, course: Course): Promise<PostTestSummary> {
  const marker = JSON.stringify([postTestMarker(course.slug)]);
  const result = await db.execute(sql`
    SELECT "id", "status", "total_questions", "correct_count", "started_at", "completed_at"
    FROM "exam_sessions"
    WHERE "user_id" = ${userId}
      AND "category_slugs" @> ${marker}::jsonb
    ORDER BY "started_at" DESC
  `);
  const rows = result.rows as {
    id: string;
    status: "in_progress" | "completed";
    total_questions: number;
    correct_count: number;
    started_at: string | Date;
    completed_at: string | Date | null;
  }[];

  const attempts: PostTestAttempt[] = [];
  let inProgressId: string | null = null;
  for (const row of rows) {
    if (row.status === "completed") {
      const total = Number(row.total_questions) || 0;
      const correct = Number(row.correct_count) || 0;
      const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;
      attempts.push({
        id: row.id,
        scorePercent,
        correctCount: correct,
        totalQuestions: total,
        completedAt: (toDate(row.completed_at) ?? toDate(row.started_at)) as Date,
        passed: scorePercent >= course.postTest.passMark,
      });
    } else if (!inProgressId) {
      inProgressId = row.id;
    }
  }

  const now = Date.now();
  const recent = attempts.filter((a) => now - a.completedAt.getTime() < DAY_MS);
  // An unfinished attempt also counts towards the limit so a learner cannot
  // open unlimited tests and abandon the hard ones.
  const attemptsLast24h = recent.length + (inProgressId ? 1 : 0);
  const attemptsRemaining = Math.max(0, course.postTest.maxAttemptsPer24h - attemptsLast24h);
  const oldestRecent = recent.length > 0 ? recent[recent.length - 1] : null;
  const nextAttemptAt = attemptsRemaining === 0 && oldestRecent ? new Date(oldestRecent.completedAt.getTime() + DAY_MS) : null;

  const passedAttempts = attempts.filter((a) => a.passed);
  const firstPass = passedAttempts.length > 0 ? passedAttempts[passedAttempts.length - 1] : null;
  const bestScorePercent = attempts.length > 0 ? Math.max(...attempts.map((a) => a.scorePercent)) : null;

  return {
    attempts,
    attemptsLast24h,
    attemptsRemaining,
    nextAttemptAt,
    bestScorePercent,
    passed: passedAttempts.length > 0,
    passedAt: firstPass?.completedAt ?? null,
    inProgressId,
  };
}

// ---------------------------------------------------------------------------
// Evaluation and certificate
// ---------------------------------------------------------------------------

function newCertificateId(course: Course): string {
  const year = new Date().getFullYear();
  const random = crypto.randomUUID().replace(/-/g, "").slice(0, 8).toUpperCase();
  return `${course.code}-${year}-${random}`;
}

/**
 * Stores the evaluation and, because the evaluation is the last required
 * activity, issues the certificate and stamps the completion date.
 */
export async function submitEvaluation(userId: string, course: Course, evaluation: EvaluationResponse): Promise<Enrollment> {
  await ensureCourseTables();
  const certificateId = newCertificateId(course);
  await db.execute(sql`
    UPDATE "course_enrollments"
    SET "evaluation" = ${JSON.stringify(evaluation)}::jsonb,
        "certificate_id" = COALESCE("certificate_id", ${certificateId}),
        "completed_at" = COALESCE("completed_at", now())
    WHERE "user_id" = ${userId} AND "course_slug" = ${course.slug}
  `);
  await markActivityCompleted(userId, course.slug, EVALUATION_ACTIVITY);
  await markActivityCompleted(userId, course.slug, CERTIFICATE_ACTIVITY);
  return (await getEnrollment(userId, course.slug)) as Enrollment;
}

// ---------------------------------------------------------------------------
// Course state — the single source of truth for the My Learning page, the
// course details page, the lesson viewer and every API guard.
// ---------------------------------------------------------------------------

export function canAccessLesson(user: Pick<SessionUser, "isPremium" | "isAdmin">, course: Course, lessonSlug: string): boolean {
  return user.isPremium || user.isAdmin || isLessonFree(course, lessonSlug);
}

export async function getCourseState(user: SessionUser, course: Course): Promise<CourseState> {
  const [enrollment, progress, postTest] = await Promise.all([
    getEnrollment(user.id, course.slug),
    getActivityProgress(user.id, course.slug),
    getPostTestSummary(user.id, course),
  ]);
  return buildCourseState(user, course, enrollment, progress, postTest);
}

export function buildCourseState(
  user: Pick<SessionUser, "isPremium" | "isAdmin">,
  course: Course,
  enrollment: Enrollment | null,
  progress: Map<string, ActivityProgress>,
  postTest: PostTestSummary,
): CourseState {
  const base = `/dashboard/courses/${course.slug}`;
  const activities: ActivityView[] = [];
  let previousComplete = true;

  for (const activity of courseActivities(course)) {
    let startedAt: Date | null = null;
    let completedAt: Date | null = null;
    let status: ActivityStatus = "not-started";
    let href = base;
    let premiumLocked = false;

    if (activity.kind === "lesson") {
      const p = progress.get(activity.slug);
      startedAt = p?.startedAt ?? null;
      completedAt = p?.completedAt ?? null;
      premiumLocked = !canAccessLesson(user, course, activity.slug);
      href = `${base}/${activity.slug}`;
      status = completedAt ? "completed" : startedAt ? "in-progress" : "not-started";
    } else if (activity.kind === "post-test") {
      premiumLocked = !(user.isPremium || user.isAdmin);
      href = `${base}/post-test`;
      startedAt = postTest.attempts[postTest.attempts.length - 1]?.completedAt ?? null;
      if (postTest.passed) {
        status = "completed";
        completedAt = postTest.passedAt;
      } else if (postTest.inProgressId) {
        status = "in-progress";
      } else if (postTest.attempts.length > 0) {
        status = "failed";
      }
    } else if (activity.kind === "evaluation") {
      href = `${base}/evaluation`;
      if (enrollment?.evaluation) {
        status = "completed";
        completedAt = toDate(enrollment.evaluation.submittedAt);
        startedAt = completedAt;
      }
    } else {
      href = `${base}/certificate`;
      if (enrollment?.certificateId) {
        status = "completed";
        completedAt = enrollment.completedAt;
        startedAt = completedAt;
      }
    }

    // Learning activities must be completed in order. Anything after the
    // first incomplete activity is locked, regardless of plan.
    if (!enrollment || !previousComplete) {
      if (status !== "completed") status = "locked";
    }
    activities.push({ ...activity, status, startedAt, completedAt, premiumLocked, href });
    previousComplete = previousComplete && status === "completed";
  }

  const counted = activities.filter((a) => a.kind !== "certificate");
  const completedCount = counted.filter((a) => a.status === "completed").length;
  const totalCount = counted.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  let status: CourseStatus = "not-enrolled";
  if (enrollment) {
    if (enrollment.certificateId) status = "completed";
    else if (activities.some((a) => a.status === "in-progress" || a.status === "completed" || a.status === "failed")) status = "in-progress";
    else status = "not-started";
  }

  const nextActivity = enrollment && status !== "completed"
    ? activities.find((a) => a.status !== "completed" && a.status !== "locked") ?? null
    : null;
  const overdue = !!enrollment && status !== "completed" && enrollment.dueAt.getTime() < Date.now();

  return {
    course,
    enrollment,
    activities,
    postTest,
    status,
    completedCount,
    totalCount,
    progressPercent,
    overdue,
    nextActivity,
  };
}

/** State for every published course — used by the My Learning page. */
export async function getAllCourseStates(user: SessionUser): Promise<CourseState[]> {
  return Promise.all(COURSES.map((course) => getCourseState(user, course)));
}

export function findActivity(state: CourseState, activitySlug: string): ActivityView | undefined {
  return state.activities.find((a) => a.slug === activitySlug);
}

export { POST_TEST_ACTIVITY, EVALUATION_ACTIVITY, CERTIFICATE_ACTIVITY };
