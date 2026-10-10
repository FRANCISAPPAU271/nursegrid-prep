// Client-safe types for the courses feature. Nothing in here touches the
// database or the server-only helpers in src/lib/courses.ts.

export type ActivityStatus = "locked" | "not-started" | "in-progress" | "completed" | "failed";
export type CourseStatus = "not-enrolled" | "not-started" | "in-progress" | "completed";
export type ActivityKind = "lesson" | "post-test" | "evaluation" | "certificate";

/** Serialisable summary of one course for the My Learning page. */
export type CourseCard = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  icon: string;
  level: string;
  gradient: string;
  lessonCount: number;
  minutes: number;
  creditHours: number;
  status: CourseStatus;
  progressPercent: number;
  completedCount: number;
  totalCount: number;
  enrolledAt: string | null;
  dueAt: string | null;
  completedAt: string | null;
  overdue: boolean;
  certificateId: string | null;
  bestScorePercent: number | null;
  nextActivity: { title: string; href: string } | null;
};

/** Serialisable post-test attempt for the launch screen and the runner banner. */
export type PostTestAttemptView = {
  id: string;
  scorePercent: number;
  correctCount: number;
  totalQuestions: number;
  completedAt: string;
  passed: boolean;
};
