"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseCard } from "@/lib/courses-types";
import StatusBadge from "./StatusBadge";
import EnrollButton from "./EnrollButton";
import Empty from "@/components/ui/Empty";

type Tab = "todo" | "completed" | "catalog";

function formatDate(value: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function MyLearning({ courses, initialTab = "todo" }: { courses: CourseCard[]; initialTab?: Tab }) {
  const todo = courses.filter((c) => c.status === "not-started" || c.status === "in-progress");
  const completed = courses.filter((c) => c.status === "completed");
  const catalog = courses.filter((c) => c.status === "not-enrolled");
  const [tab, setTab] = useState<Tab>(initialTab === "todo" && todo.length === 0 && catalog.length > 0 ? "catalog" : initialTab);

  const tabs: { id: Tab; label: string; count: number }[] = [
    { id: "todo", label: "My To-Do List", count: todo.length },
    { id: "completed", label: "Completed", count: completed.length },
    { id: "catalog", label: "Course Catalogue", count: catalog.length },
  ];

  return (
    <div>
      <div role="tablist" className="mb-5 flex gap-1 overflow-x-auto rounded-xl bg-slate-100 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === t.id ? "bg-white text-slate-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {t.label}
            <span className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold ${tab === t.id ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"}`}>{t.count}</span>
          </button>
        ))}
      </div>

      {tab === "todo" && (
        todo.length === 0 ? (
          <Empty
            icon="✅"
            title="Nothing on your to-do list"
            description="Enrol in a course from the catalogue and it will appear here with its due date and progress."
            action={
              <button onClick={() => setTab("catalog")} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                Browse the catalogue
              </button>
            }
          />
        ) : (
          <div className="space-y-3">
            {todo.map((c) => (
              <TodoRow key={c.slug} course={c} />
            ))}
          </div>
        )
      )}

      {tab === "completed" && (
        completed.length === 0 ? (
          <Empty icon="🎓" title="No completed courses yet" description="Courses you finish — post-test passed and evaluation submitted — are listed here with your score and certificate." />
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Completed</th>
                  <th className="px-4 py-3">Score</th>
                  <th className="px-4 py-3">Hours</th>
                  <th className="px-4 py-3 text-right">Certificate</th>
                </tr>
              </thead>
              <tbody>
                {completed.map((c) => (
                  <tr key={c.slug} className="border-t border-slate-100">
                    <td className="px-4 py-3">
                      <Link href={`/dashboard/courses/${c.slug}`} className="font-semibold text-slate-900 hover:underline">
                        {c.icon} {c.title}
                      </Link>
                      <p className="text-xs text-slate-500">{c.code}</p>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{formatDate(c.completedAt)}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">{c.bestScorePercent !== null ? `${c.bestScorePercent}%` : "—"}</td>
                    <td className="px-4 py-3 text-slate-700">{c.creditHours}</td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/dashboard/courses/${c.slug}/certificate`} className="rounded-lg border border-emerald-600 px-3 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-50">
                        View Certificate
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {tab === "catalog" && (
        catalog.length === 0 ? (
          <Empty icon="📘" title="You are enrolled in every course" description="New courses are added regularly — check back soon." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {catalog.map((c) => (
              <CatalogCard key={c.slug} course={c} />
            ))}
          </div>
        )
      )}
    </div>
  );
}

function TodoRow({ course: c }: { course: CourseCard }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-3xl ${c.gradient}`}>{c.icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Link href={`/dashboard/courses/${c.slug}`} className="text-base font-extrabold text-slate-950 hover:underline">
              {c.title}
            </Link>
            <StatusBadge status={c.status} />
            {c.overdue && <StatusBadge status="overdue" />}
          </div>
          <p className="mt-0.5 text-xs text-slate-500">
            {c.code} · {c.lessonCount} lessons · about {Math.round(c.minutes / 60 * 10) / 10} hours · due {formatDate(c.dueAt)}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${c.progressPercent}%` }} />
            </div>
            <span className="text-xs font-bold text-slate-600">{c.progressPercent}%</span>
          </div>
          {c.nextActivity && <p className="mt-1.5 truncate text-xs text-slate-500">Next: {c.nextActivity.title}</p>}
        </div>
        <div className="flex shrink-0 gap-2">
          <Link
            href={c.nextActivity?.href ?? `/dashboard/courses/${c.slug}`}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700"
          >
            {c.status === "not-started" ? "Start" : "Resume"}
          </Link>
          <Link href={`/dashboard/courses/${c.slug}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

function CatalogCard({ course: c }: { course: CourseCard }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className={`flex items-center justify-between bg-gradient-to-br px-5 py-4 text-white ${c.gradient}`}>
        <span className="text-4xl drop-shadow">{c.icon}</span>
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide">{c.level}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-extrabold text-slate-950">{c.title}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-600">{c.tagline}</p>
        <p className="mt-3 text-xs text-slate-500">
          {c.code} · {c.lessonCount} lessons · {c.creditHours} contact hours · first lesson free
        </p>
        <div className="mt-4 flex gap-2">
          <EnrollButton courseSlug={c.slug} />
          <Link href={`/dashboard/courses/${c.slug}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
