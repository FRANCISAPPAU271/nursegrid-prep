import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { momoPaymentRequests } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
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

    const rows = await db.select({ status: momoPaymentRequests.status, plan: momoPaymentRequests.plan, userId: momoPaymentRequests.userId, amountCents: momoPaymentRequests.amountCents }).from(momoPaymentRequests).where(eq(momoPaymentRequests.id, id)).limit(1);
    if (!rows[0]) throw new ApiError("Payment request not found", 404);
    if (rows[0].status !== "pending") throw new ApiError("This request has already been reviewed.", 400);

    await db.execute(sql`CREATE TABLE IF NOT EXISTS "payment_audit_events" ("id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text), "request_id" text NOT NULL, "user_id" text NOT NULL, "admin_id" text NOT NULL, "action" text NOT NULL, "amount_cents" integer NOT NULL, "plan" text NOT NULL, "note" text, "created_at" timestamptz NOT NULL DEFAULT now())`);
    await db.execute(sql`INSERT INTO "payment_audit_events" ("request_id", "user_id", "admin_id", "action", "amount_cents", "plan", "note") VALUES (${id}, ${rows[0].userId}, ${admin.id}, 'rejected', ${rows[0].amountCents}, ${rows[0].plan}, ${reviewNote || null})`);

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
