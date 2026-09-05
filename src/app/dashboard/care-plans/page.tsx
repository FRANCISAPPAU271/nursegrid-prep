import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { carePlans } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import CarePlanBoard from "@/components/care-plans/CarePlanBoard";
import type { CarePlan } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function CarePlansPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await db.select().from(carePlans).where(eq(carePlans.userId, user.id)).orderBy(desc(carePlans.updatedAt));

  const initial: CarePlan[] = rows.map((c) => ({
    id: c.id,
    title: c.title,
    clientInfo: c.clientInfo,
    assessment: c.assessment,
    nursingDiagnosis: c.nursingDiagnosis,
    goals: c.goals,
    interventions: c.interventions,
    evaluation: c.evaluation,
    status: c.status,
    createdAt: c.createdAt.toISOString(),
    updatedAt: c.updatedAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Nursing Care Plans <span className="align-middle text-lg">🗂️</span>
        </h1>
        <p className="text-slate-600">
          Build ADPIE-structured care plans: assessment, diagnosis, goals, interventions, and evaluation.
        </p>
      </div>
      <CarePlanBoard initial={initial} />
    </div>
  );
}
