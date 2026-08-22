import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { carePlans } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

const interventionSchema = z.object({
  action: z.string().trim().min(1).max(500),
  rationale: z.string().trim().max(500).optional().or(z.literal("")),
});

const createSchema = z.object({
  title: z.string().trim().min(2).max(160),
  clientInfo: z.string().trim().max(500).optional().or(z.literal("")),
  assessment: z.string().trim().max(4000).optional().or(z.literal("")),
  nursingDiagnosis: z.string().trim().max(1000).optional().or(z.literal("")),
  goals: z.string().trim().max(2000).optional().or(z.literal("")),
  interventions: z.array(interventionSchema).max(20).optional(),
  evaluation: z.string().trim().max(2000).optional().or(z.literal("")),
  status: z.enum(["draft", "active", "completed"]).default("draft"),
});

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db.select().from(carePlans).where(eq(carePlans.userId, user.id)).orderBy(desc(carePlans.updatedAt));
    return NextResponse.json({ carePlans: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = createSchema.parse(body);

    const [carePlan] = await db
      .insert(carePlans)
      .values({
        userId: user.id,
        title: data.title,
        clientInfo: data.clientInfo || "",
        assessment: data.assessment || "",
        nursingDiagnosis: data.nursingDiagnosis || "",
        goals: data.goals || "",
        interventions: (data.interventions ?? []).map((i) => ({ action: i.action, rationale: i.rationale || "" })),
        evaluation: data.evaluation || "",
        status: data.status,
      })
      .returning();

    return NextResponse.json({ carePlan }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
