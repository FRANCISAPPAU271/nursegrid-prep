import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { examSessions } from "@/db/schema";
import { desc, eq, like, and } from "drizzle-orm";
import MockExamLauncher from "@/components/exams/MockExamLauncher";

export const dynamic = "force-dynamic";

export default async function MockExamPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const pastMocks = await db
    .select({
      id: examSessions.id,
      title: examSessions.title,
      totalQuestions: examSessions.totalQuestions,
      correctCount: examSessions.correctCount,
      status: examSessions.status,
      startedAt: examSessions.startedAt,
      completedAt: examSessions.completedAt,
    })
    .from(examSessions)
    .where(and(eq(examSessions.userId, user.id), like(examSessions.title, "Mock NMC Exam%")))
    .orderBy(desc(examSessions.startedAt))
    .limit(20);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Mock NMC Exam</h1>
        <p className="text-slate-600">
          The full dress rehearsal: 150 questions across every category, 150 minutes, one sitting — with a
          verdict and score report at the end.
        </p>
      </div>
      <MockExamLauncher
        isPremium={user.isPremium}
        pastMocks={pastMocks.map((m) => ({
          id: m.id,
          totalQuestions: m.totalQuestions,
          correctCount: m.correctCount,
          status: m.status,
          startedAt: m.startedAt.toISOString(),
          completedAt: m.completedAt ? m.completedAt.toISOString() : null,
        }))}
      />
    </div>
  );
}
