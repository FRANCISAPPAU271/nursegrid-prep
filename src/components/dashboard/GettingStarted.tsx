"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "nsg-orientation-dismissed";

type Step = {
  icon: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  done: boolean;
};

export default function GettingStarted({
  attempted,
  tasksTotal,
  notesTotal,
  isPremium,
}: {
  attempted: number;
  tasksTotal: number;
  notesTotal: number;
  isPremium: boolean;
}) {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash, reveal after check
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  const steps: Step[] = [
    {
      icon: "🧠",
      title: "Answer your first questions",
      description: "Try the question bank — every answer comes with a deep rationale and test-taking strategy.",
      href: "/dashboard/questions",
      cta: "Start practicing",
      done: attempted > 0,
    },
    {
      icon: "🎯",
      title: "Check your Readiness Score",
      description: "See how close you are to exam-ready and which categories need work.",
      href: "/dashboard/readiness",
      cta: "View readiness",
      done: attempted >= 20,
    },
    {
      icon: "📚",
      title: "Explore the Learning Library",
      description: "Simple notes on every body system with diagrams and short videos.",
      href: "/dashboard/learning",
      cta: "Open library",
      done: false,
    },
    {
      icon: "📅",
      title: "Build your study plan",
      description: "Set your exam date and get a week-by-week plan tailored to you.",
      href: "/dashboard/study-plan",
      cta: "Plan my study",
      done: tasksTotal > 0,
    },
    {
      icon: "🗂️",
      title: "Create a care plan or note",
      description: "Keep clinical care plans and study notes organized in one place.",
      href: "/dashboard/care-plans",
      cta: "Try care plans",
      done: notesTotal > 0,
    },
  ];

  const doneCount = steps.filter((s) => s.done).length;
  const progress = Math.round((doneCount / steps.length) * 100);

  // Hide entirely once dismissed, or once the user has clearly found their feet.
  if (dismissed) return null;

  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="animate-fade-in overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
      <div className="flex items-start justify-between gap-3 p-5 pb-0 sm:p-6 sm:pb-0">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">New here? Start with this 🧭</p>
          <h2 className="mt-1 text-lg font-extrabold tracking-tight text-white">Your 5-step orientation</h2>
          <p className="mt-1 text-sm text-slate-300">
            Follow these steps to get the most out of NurseGrid Prep{isPremium ? "" : " — the first steps are free"}.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setCollapsed((v) => !v)}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur transition hover:bg-white/15"
          >
            {collapsed ? "Show steps" : "Collapse"}
          </button>
          <button
            onClick={dismiss}
            aria-label="Dismiss orientation"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/10 text-sm text-slate-300 backdrop-blur transition hover:bg-white/15"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-5 pt-4 sm:px-6">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-slate-400">
            {doneCount} of {steps.length} steps done
          </span>
          <span className="text-emerald-300">{progress}%</span>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-700"
            style={{ width: `${Math.max(progress, 4)}%` }}
          />
        </div>
      </div>

      {!collapsed && (
        <div className="grid gap-3 p-5 sm:p-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Link
              key={i}
              href={step.href}
              className={`group flex flex-col rounded-2xl border p-4 backdrop-blur transition-all hover:-translate-y-0.5 ${
                step.done
                  ? "border-emerald-400/30 bg-emerald-400/10"
                  : "border-white/10 bg-white/5 hover:border-emerald-400/40 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{step.icon}</span>
                {step.done ? (
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400 text-[10px] font-bold text-slate-950">✓</span>
                ) : (
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-white/20 text-[10px] font-bold text-slate-400">
                    {i + 1}
                  </span>
                )}
              </div>
              <h3 className="mt-2.5 text-sm font-bold leading-snug text-white">{step.title}</h3>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-400">{step.description}</p>
              <span className="mt-3 text-xs font-bold text-emerald-300 transition-transform group-hover:translate-x-0.5">
                {step.done ? "Revisit →" : `${step.cta} →`}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
