import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { carePlans } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

const interventionSchema = z.object({
  action: z.string().trim().min(1).max(500),
  rationale: z.string().trim().max(500).optional().or(z.literal("")),
});

const updateSchema = z.object({
  title: z.string().trim().min(2).max(160).optional(),
  clientInfo: z.string().trim().max(500).optional().or(z.literal("")),
  assessment: z.string().trim().max(4000).optional().or(z.literal("")),
  nursingDiagnosis: z.string().trim().max(1000).optional().or(z.literal("")),
  goals: z.string().trim().max(2000).optional().or(z.literal("")),
  interventions: z.array(interventionSchema).max(20).optional(),
  evaluation: z.string().trim().max(2000).optional().or(z.literal("")),
  status: z.enum(["draft", "active", "completed"]).optional(),
});

async function loadOwnedCarePlan(userId: string, id: string) {
  const rows = await db
    .select()
    .from(carePlans)
    .where(and(eq(carePlans.id, id), eq(carePlans.userId, userId)))
    .limit(1);
  const carePlan = rows[0];
  if (!carePlan) throw new ApiError("Care plan not found", 404);
  return carePlan;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await loadOwnedCarePlan(user.id, id);
    const body = await request.json();
    const data = updateSchema.parse(body);

    const [updated] = await db
      .update(carePlans)
      .set({
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.clientInfo !== undefined ? { clientInfo: data.clientInfo } : {}),
        ...(data.assessment !== undefined ? { assessment: data.assessment } : {}),
        ...(data.nursingDiagnosis !== undefined ? { nursingDiagnosis: data.nursingDiagnosis } : {}),
        ...(data.goals !== undefined ? { goals: data.goals } : {}),
        ...(data.interventions !== undefined
          ? { interventions: data.interventions.map((i) => ({ action: i.action, rationale: i.rationale || "" })) }
          : {}),
        ...(data.evaluation !== undefined ? { evaluation: data.evaluation } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        updatedAt: new Date(),
      })
      .where(eq(carePlans.id, id))
      .returning();

    return NextResponse.json({ carePlan: updated });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await loadOwnedCarePlan(user.id, id);
    await db.delete(carePlans).where(eq(carePlans.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
