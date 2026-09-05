"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";

type PlanWeek = {
  weekNumber: number;
  startDate: string;
  endDate: string;
  theme: string;
  focus: string[];
  dailyTarget: number;
  includesMock: boolean;
};

type Plan = {
  examDate: string;
  daysLeft: number;
  readinessScore: number;
  readinessBand: string;
  dailyTarget: number;
  weeks: PlanWeek[];
  tasksCreated: number;
};

const THEME_STYLE: Record<string, string> = {
  "Targeted strengthening": "border-emerald-200 bg-white",
  "Focus + full mock exam": "border-amber-300 bg-amber-50",
  "Taper & consolidate": "border-sky-300 bg-sky-50",
};

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(new Date(`${d}T12:00:00Z`));
}

export default function StudyPlanBuilder() {
  const [examDate, setExamDate] = useState("");
  const [plan, setPlan] = useState<Plan | null>(null);
  const [building, setBuilding] = useState(false);
  const [addingTasks, setAddingTasks] = useState(false);
  const toast = useToast();

  const build = async (addTasks: boolean) => {
    if (!examDate) {
      toast.push("Choose your exam date first.", "error");
      return;
    }
    if (addTasks) setAddingTasks(true);
    else setBuilding(true);
    try {
      const res = await fetch("/api/study-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examDate, addTasks }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not build the plan");
      setPlan(data);
      if (addTasks && data.tasksCreated > 0) {
        toast.push(`${data.tasksCreated} weekly tasks added to your task manager.`, "success");
      }
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Could not build the plan", "error");
    } finally {
      setBuilding(false);
      setAddingTasks(false);
    }
  };

  const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const maxDate = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  return (
    <div className="space-y-6">
      {/* Date picker */}
      <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:p-6">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">When is your exam?</span>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="date"
              value={examDate}
              min={minDate}
              max={maxDate}
              onChange={(e) => setExamDate(e.target.value)}
              className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
            />
            <button
              onClick={() => build(false)}
              disabled={building}
              className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-70"
            >
              {building ? "Building…" : plan ? "Rebuild plan" : "Build my plan"}
            </button>
          </div>
        </label>
      </div>

      {plan && (
        <>
          {/* Summary strip */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-3xl font-extrabold text-slate-950">{plan.daysLeft}</p>
              <p className="text-sm font-medium text-slate-500">days until your exam</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-3xl font-extrabold text-emerald-600">{plan.readinessScore}</p>
              <p className="text-sm font-medium text-slate-500">
                readiness today ·{" "}
                <Link href="/dashboard/readiness" className="font-semibold text-emerald-700 hover:underline">
                  details
                </Link>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-3xl font-extrabold text-slate-950">{plan.dailyTarget}</p>
              <p className="text-sm font-medium text-slate-500">questions per day</p>
            </div>
          </div>

          {/* Add to tasks */}
          <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold text-emerald-900">Load this plan into your task manager</p>
              <p className="text-xs text-emerald-800">
                One task per week with its focus and target — tick them off as you go. Rebuilding replaces unfinished plan tasks.
              </p>
            </div>
            <button
              onClick={() => build(true)}
              disabled={addingTasks}
              className="shrink-0 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-70"
            >
              {addingTasks ? "Adding…" : "Add weekly tasks"}
            </button>
          </div>

          {/* Weeks */}
          <ol className="space-y-3">
            {plan.weeks.map((w) => (
              <li key={w.weekNumber} className={`rounded-2xl border p-5 ${THEME_STYLE[w.theme] ?? "border-slate-200 bg-white"}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-extrabold text-slate-950">
                    Week {w.weekNumber} <span className="font-semibold text-slate-500">· {fmt(w.startDate)} – {fmt(w.endDate)}</span>
                  </p>
                  <span className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[11px] font-bold text-white">{w.theme}</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {w.focus.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                  <li className="font-semibold">• {w.dailyTarget} questions per day</li>
                  {w.includesMock && (
                    <li className="font-semibold text-amber-700">
                      • Sit one full{" "}
                      <Link href="/dashboard/mock-exam" className="underline hover:text-amber-800">
                        Mock NMC Exam
                      </Link>{" "}
                      this week
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ol>

          <p className="text-xs text-slate-400">
            Your plan adapts to your data: rebuild it any time and it re-targets your current weakest categories.
          </p>
        </>
      )}
    </div>
  );
}
