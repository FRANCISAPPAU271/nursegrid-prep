import { getCurrentUser } from "@/lib/auth";
import { courseMinutes, flattenLessons } from "@/content/courses";
import { getAllCourseStates } from "@/lib/courses";
import type { CourseCard } from "@/lib/courses-types";
import MyLearning from "@/components/courses/MyLearning";

export const dynamic = "force-dynamic";

export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { tab } = await searchParams;

  const states = await getAllCourseStates(user);
  const cards: CourseCard[] = states.map((s) => ({
    slug: s.course.slug,
    code: s.course.code,
    title: s.course.title,
    tagline: s.course.tagline,
    icon: s.course.icon,
    level: s.course.level,
    gradient: s.course.gradient,
    lessonCount: flattenLessons(s.course).length,
    minutes: courseMinutes(s.course),
    creditHours: s.course.creditHours,
    status: s.status,
    progressPercent: s.progressPercent,
    completedCount: s.completedCount,
    totalCount: s.totalCount,
    enrolledAt: s.enrollment?.enrolledAt.toISOString() ?? null,
    dueAt: s.enrollment?.dueAt.toISOString() ?? null,
    completedAt: s.enrollment?.completedAt?.toISOString() ?? null,
    overdue: s.overdue,
    certificateId: s.enrollment?.certificateId ?? null,
    bestScorePercent: s.postTest.bestScorePercent,
    nextActivity: s.nextActivity ? { title: s.nextActivity.title, href: s.nextActivity.href } : null,
  }));

  const initialTab = tab === "completed" || tab === "catalog" || tab === "todo" ? tab : "todo";

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          My Learning <span className="align-middle text-lg">📘</span>
        </h1>
        <p className="text-slate-600">
          Structured courses with lessons, diagrams, practice questions and a post-test. Complete the learning activities in order, pass the
          post-test and submit the evaluation to earn a certificate for your transcript.
        </p>
      </div>
      <MyLearning courses={cards} initialTab={initialTab} />
    </div>
  );
}
