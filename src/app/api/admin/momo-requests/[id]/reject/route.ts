import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { momoPaymentRequests } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { isEmailConfigured, momoPaymentStatusEmail, sendEmail } from "@/lib/email";
import { users } from "@/db/schema";

const schema = z.object({ reviewNote: z.string().trim().max(500).optional().or(z.literal("")) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;
    const body = await request.json().catch(() => ({}));
    const { reviewNote } = schema.parse(body);

    const rows = await db.select({ status: momoPaymentRequests.status, plan: momoPaymentRequests.plan, userId: momoPaymentRequests.userId }).from(momoPaymentRequests).where(eq(momoPaymentRequests.id, id)).limit(1);
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

    if (isEmailConfigured()) {
      const userRows = await db.select({ name: users.name, email: users.email }).from(users).where(eq(users.id, rows[0].userId)).limit(1);
      const recipient = userRows[0];
      if (recipient?.email) {
        try {
          const message = momoPaymentStatusEmail(recipient.name, "rejected", rows[0].plan, reviewNote || undefined);
          await sendEmail(recipient.email, message.subject, message.html);
        } catch (emailError) {
          console.error("Payment rejection email failed", emailError);
        }
      }
    }

    return NextResponse.json({ request: updated });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
