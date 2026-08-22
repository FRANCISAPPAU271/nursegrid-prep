import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questionCategories, questions, examSessions } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";
import ExamBuilder from "@/components/exams/ExamBuilder";
import type { ExamListItem } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function ExamsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [categoryRows, examRows] = await Promise.all([
    db
      .select({
        id: questionCategories.id,
        slug: questionCategories.slug,
        name: questionCategories.name,
        icon: questionCategories.icon,
        totalQuestions: sql<number>`count(distinct ${questions.id})`.mapWith(Number),
      })
      .from(questionCategories)
      .leftJoin(questions, eq(questions.categoryId, questionCategories.id))
      .groupBy(questionCategories.id)
      .orderBy(questionCategories.sortOrder),
    db
      .select({
        id: examSessions.id,
        title: examSessions.title,
        categorySlugs: examSessions.categorySlugs,
        totalQuestions: examSessions.totalQuestions,
        correctCount: examSessions.correctCount,
        status: examSessions.status,
        startedAt: examSessions.startedAt,
        completedAt: examSessions.completedAt,
      })
      .from(examSessions)
      .where(eq(examSessions.userId, user.id))
      .orderBy(desc(examSessions.startedAt))
      .limit(50),
  ]);

  const pastExams: ExamListItem[] = examRows.map((e) => ({
    id: e.id,
    title: e.title,
    categorySlugs: e.categorySlugs,
    totalQuestions: e.totalQuestions,
    correctCount: e.correctCount,
    status: e.status,
    startedAt: e.startedAt.toISOString(),
    completedAt: e.completedAt ? e.completedAt.toISOString() : null,
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Custom Exam Builder</h1>
        <p className="text-slate-600">
          Choose how many questions and which categories to include. Answer them all, then review every question and rationale after you submit.
        </p>
      </div>
      <ExamBuilder categories={categoryRows} isPremium={user.isPremium} pastExams={pastExams} />
    </div>
  );
}
