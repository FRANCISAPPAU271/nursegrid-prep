import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { flattenLessons, getCourse } from "@/content/courses";
import GlossaryBrowser from "@/components/courses/GlossaryBrowser";

export const dynamic = "force-dynamic";

export default async function CourseGlossaryPage({ params }: { params: Promise<{ course: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;

  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  // Courses without a glossary 404 rather than showing an empty page — a
  // glossary link that leads nowhere is worse than no link.
  const entries = course.glossary;
  if (!entries || entries.length === 0) notFound();

  const lessons = flattenLessons(course);
  const lessonTitles: Record<string, string> = {};
  for (const l of lessons) lessonTitles[l.lesson.slug] = l.lesson.title;

  return (
    <div>
      <Link
        href={`/dashboard/courses/${course.slug}`}
        className="text-xs font-semibold text-emerald-700 hover:underline"
      >
        ← {course.title}
      </Link>

      <div className={`mt-2 overflow-hidden rounded-2xl bg-gradient-to-br text-white ${course.gradient}`}>
        <div className="px-6 py-6 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-white/80">
            <span className="rounded-full bg-white/20 px-2.5 py-1">{course.code}</span>
            <span className="rounded-full bg-white/20 px-2.5 py-1">Glossary</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="mr-2">{course.icon}</span>
            Glossary
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            {entries.length} terms used across {lessons.length} lessons in {course.title}. Search an
            abbreviation, a drug name or part of a definition.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <GlossaryBrowser
          entries={entries}
          lessonTitles={lessonTitles}
          basePath={`/dashboard/courses/${course.slug}`}
        />
      </div>

      <p className="mt-4 text-center text-xs text-slate-400">
        Glossary entries are reference material and are not graded. They do not count towards course
        completion.
      </p>
    </div>
  );
}
