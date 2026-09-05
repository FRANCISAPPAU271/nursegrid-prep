import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { and, eq, like, sql } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { computeReadiness } from "@/lib/readiness";

// ---------------------------------------------------------------------------
// Study Plan generator.
// POST { examDate: "YYYY-MM-DD", addTasks?: boolean }
//   -> builds a week-by-week plan from the student's readiness data
//      (weakest categories first, mocks scheduled at intervals, taper week
//      before the exam) and optionally creates weekly tasks in the task
//      manager (replacing previously generated plan tasks).
// ---------------------------------------------------------------------------

const schema = z.object({
  examDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  addTasks: z.boolean().default(false),
});

const PLAN_TASK_PREFIX = "📅 Study plan:";

export type PlanWeek = {
  weekNumber: number;
  startDate: string;
  endDate: string;
  theme: string;
  focus: string[];
  dailyTarget: number;
  includesMock: boolean;
};

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const { examDate, addTasks } = schema.parse(body);

    const exam = new Date(`${examDate}T09:00:00Z`);
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil((exam.getTime() - now.getTime()) / msPerDay);
    if (isNaN(exam.getTime()) || daysLeft < 1) throw new ApiError("Choose an exam date in the future.", 422);
    if (daysLeft > 366) throw new ApiError("Choose an exam date within the next 12 months.", 422);

    const readiness = await computeReadiness(user.id);

    // Focus queue: weakest practiced categories first, then unpracticed,
    // then everything else — the exam samples all of them.
    const focusQueue: string[] = [
      ...readiness.weakest.map((c) => c.name),
      ...readiness.unpracticed.map((c) => c.name),
      ...readiness.categories
        .filter(
          (c) =>
            !readiness.weakest.some((w) => w.categoryId === c.categoryId) &&
            !readiness.unpracticed.some((u) => u.categoryId === c.categoryId),
        )
        .map((c) => c.name),
    ];

    const totalWeeks = Math.max(1, Math.min(52, Math.ceil(daysLeft / 7)));
    // Daily question target scales with urgency and current readiness.
    const baseTarget = readiness.score >= 75 ? 20 : readiness.score >= 50 ? 30 : 40;
    const dailyTarget = daysLeft <= 21 ? Math.max(baseTarget, 40) : baseTarget;

    const weeks: PlanWeek[] = [];
    let focusIdx = 0;
    for (let w = 0; w < totalWeeks; w++) {
      const start = new Date(now.getTime() + w * 7 * msPerDay);
      const end = new Date(Math.min(start.getTime() + 6 * msPerDay, exam.getTime()));
      const isFinalWeek = w === totalWeeks - 1;
      const isMockWeek = !isFinalWeek && totalWeeks > 1 && (w + 1) % 2 === 0; // every 2nd week
      const focus: string[] = [];
      if (isFinalWeek) {
        focus.push("Light mixed review — no new topics", "Re-read bookmarked rationales", "Rest, sleep, and logistics for exam day");
      } else {
        for (let k = 0; k < 2; k++) {
          focus.push(focusQueue[focusIdx % focusQueue.length]);
          focusIdx++;
        }
        focus.push("Daily mixed practice across all categories");
      }
      weeks.push({
        weekNumber: w + 1,
        startDate: start.toISOString().slice(0, 10),
        endDate: end.toISOString().slice(0, 10),
        theme: isFinalWeek ? "Taper & consolidate" : isMockWeek ? "Focus + full mock exam" : "Targeted strengthening",
        focus,
        dailyTarget: isFinalWeek ? Math.min(20, dailyTarget) : dailyTarget,
        includesMock: isMockWeek || (isFinalWeek && totalWeeks >= 2),
      });
    }

    let tasksCreated = 0;
    if (addTasks) {
      // Replace previously generated plan tasks that are still open.
      await db
        .delete(tasks)
        .where(and(eq(tasks.userId, user.id), like(tasks.title, `${PLAN_TASK_PREFIX}%`), sql`${tasks.status} != 'done'`));

      const taskRows = weeks.slice(0, 26).map((week) => ({
        userId: user.id,
        title: `${PLAN_TASK_PREFIX} Week ${week.weekNumber} — ${week.theme}`,
        description:
          `Focus: ${week.focus.join("; ")}. Target: ${week.dailyTarget} questions/day.` +
          (week.includesMock ? " Sit one full Mock NMC Exam this week." : ""),
        category: "study" as const,
        status: "todo" as const,
        priority: (week.weekNumber <= 2 ? "high" : "medium") as "high" | "medium",
        dueDate: new Date(`${week.endDate}T18:00:00Z`),
      }));
      if (taskRows.length > 0) {
        const inserted = await db.insert(tasks).values(taskRows).returning({ id: tasks.id });
        tasksCreated = inserted.length;
      }
    }

    return NextResponse.json({
      examDate,
      daysLeft,
      readinessScore: readiness.score,
      readinessBand: readiness.bandLabel,
      dailyTarget,
      weeks,
      tasksCreated,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
