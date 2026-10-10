import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getCourse, getLesson } from "@/content/courses";
import { findActivity, getCourseState } from "@/lib/courses";
import LessonBlocks from "@/components/courses/LessonBlocks";
import LessonProgress from "@/components/courses/LessonProgress";
import EnrollButton from "@/components/courses/EnrollButton";
import StatusBadge from "@/components/courses/StatusBadge";
import QuestionQuiz from "@/components/questions/QuestionQuiz";

export const dynamic = "force-dynamic";

export default async function LessonPage({ params }: { params: Promise<{ course: string; lesson: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { course: courseSlug, lesson: lessonSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();
  const flat = getLesson(course, lessonSlug);
  if (!flat) notFound();

  const state = await getCourseState(user, course);
  const activity = findActivity(state, lessonSlug);
  if (!activity) notFound();
  const { lesson, module, index, label } = flat;
  const total = state.activities.length;
  const position = state.activities.findIndex((a) => a.slug === lessonSlug) + 1;

  const header = (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-emerald-700">
        <Link href="/dashboard/courses" className="hover:underline">
          My Learning
        </Link>
        <span className="text-slate-300">/</span>
        <Link href={`/dashboard/courses/${course.slug}`} className="hover:underline">
          {course.title}
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-500">Activity {position} of {total}</span>
      </div>
      <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-500">
        Module {label.split(".")[0]} · {module.title}
      </p>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
        {label} {lesson.title}
      </h1>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <StatusBadge status={activity.status} />
        <span>{lesson.minutes} min read</span>
        {index === 1 && <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-bold text-sky-800">Free lesson</span>}
      </div>
    </div>
  );

  // ----- Gates (also enforced by the API) -----
  if (!state.enrollment) {
    return (
      <div>
        {header}
        <Gate
          icon="📘"
          title="Enrol to open this lesson"
          body="Enrolling adds the course to your To-Do list and unlocks the learning activities in order. The first lesson is free."
          action={<EnrollButton courseSlug={course.slug} label="Enroll in this course" />}
        />
        <Objectives objectives={lesson.objectives} />
      </div>
    );
  }
  if (activity.premiumLocked) {
    return (
      <div>
        {header}
        <Gate
          icon="⭐"
          title="This lesson is part of Premium"
          body="The first lesson of every course is free. Upgrade to unlock the rest of the course, the post-test and your certificate."
          action={
            <Link href="/dashboard/billing" className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600">
              See Premium options
            </Link>
          }
        />
        <Objectives objectives={lesson.objectives} />
      </div>
    );
  }
  if (activity.status === "locked") {
    const next = state.nextActivity;
    return (
      <div>
        {header}
        <Gate
          icon="🔒"
          title="Complete the previous learning activity first"
          body="Learning activities must be completed in order. Finish the activity that is currently open to unlock this one."
          action={
            next ? (
              <Link href={next.href} className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">
                Go to: {next.title} →
              </Link>
            ) : (
              <Link href={`/dashboard/courses/${course.slug}`} className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">
                Back to course
              </Link>
            )
          }
        />
        <Objectives objectives={lesson.objectives} />
      </div>
    );
  }

  // ----- Content -----
  const nextActivity = state.activities[position] ?? null; // the activity after this one
  return (
    <div>
      {header}

      <Objectives objectives={lesson.objectives} />

      <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
        <LessonBlocks blocks={lesson.blocks} />

        <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-lime-300">Key points</h3>
          <ul className="mt-3 space-y-2">
            {lesson.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-100">
                <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <section className="mt-6">
        <div className="mb-3">
          <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Practice questions</h2>
          <p className="text-xs text-slate-500">
            Questions from the NurseGrid bank that match this lesson. They are practice only — the post-test at the end of the course is what counts.
          </p>
        </div>
        <QuestionQuiz
          title={`Practice: ${lesson.title}`}
          subtitle={`${course.title} · ${module.title}`}
          queryString={`course=${encodeURIComponent(course.slug)}&lesson=${encodeURIComponent(lesson.slug)}&random=true`}
          isPremiumUser={user.isPremium || user.isAdmin}
        />
      </section>

      <LessonProgress
        courseSlug={course.slug}
        lessonSlug={lesson.slug}
        initiallyCompleted={activity.status === "completed"}
        nextHref={nextActivity?.href ?? null}
        nextTitle={nextActivity?.title ?? null}
      />
    </div>
  );
}

function Objectives({ objectives }: { objectives: string[] }) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5">
      <h2 className="text-sm font-extrabold uppercase tracking-wide text-emerald-800">By the end of this lesson you will be able to</h2>
      <ul className="mt-2 space-y-1.5">
        {objectives.map((o, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-emerald-950">
            <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Gate({ icon, title, body, action }: { icon: string; title: string; body: string; action: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
      <span className="text-4xl">{icon}</span>
      <h2 className="mt-3 text-lg font-extrabold text-slate-950">{title}</h2>
      <p className="mt-1 max-w-md text-sm text-slate-600">{body}</p>
      <div className="mt-5">{action}</div>
    </div>
  );
}
