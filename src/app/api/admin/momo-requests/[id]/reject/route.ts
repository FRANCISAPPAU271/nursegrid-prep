import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { momoPaymentRequests } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";

const schema = z.object({ reviewNote: z.string().trim().max(500).optional().or(z.literal("")) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const { reviewNote } = schema.parse(body);

    const rows = await db.select({ status: momoPaymentRequests.status }).from(momoPaymentRequests).where(eq(momoPaymentRequests.id, id)).limit(1);
    if (!rows[0]) throw new ApiError("Payment request not found", 404);
    if (rows[0].status !== "pending") throw new ApiError("This request has already been reviewed.", 400);

    const [updated] = await db
      .update(momoPaymentRequests)
      .set({
        status: "rejected",
        reviewedBy: admin.id,
        reviewedAt: new Date(),
        reviewNote: reviewNote || null,
      })
      .where(eq(momoPaymentRequests.id, id))
      .returning();

    return NextResponse.json({ request: updated });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
