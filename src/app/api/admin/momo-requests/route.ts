import { NextResponse } from "next/server";
import { db } from "@/db";
import { momoPaymentRequests, users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireAdmin, handleApiError } from "@/lib/api";

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status"); // "pending" | "approved" | "rejected" | null (all)

    const rows = await db
      .select({
        id: momoPaymentRequests.id,
        userId: momoPaymentRequests.userId,
        userName: users.name,
        userEmail: users.email,
        plan: momoPaymentRequests.plan,
        amountCents: momoPaymentRequests.amountCents,
        momoNumber: momoPaymentRequests.momoNumber,
        momoReference: momoPaymentRequests.momoReference,
        status: momoPaymentRequests.status,
        reviewNote: momoPaymentRequests.reviewNote,
        reviewedBy: momoPaymentRequests.reviewedBy,
        reviewedAt: momoPaymentRequests.reviewedAt,
        createdAt: momoPaymentRequests.createdAt,
      })
      .from(momoPaymentRequests)
      .innerJoin(users, eq(momoPaymentRequests.userId, users.id))
      .where(status ? eq(momoPaymentRequests.status, status as "pending" | "approved" | "rejected") : undefined)
      .orderBy(desc(momoPaymentRequests.createdAt))
      .limit(200);

    return NextResponse.json({ requests: rows });
  } catch (error) {
    return handleApiError(error);
  }
}
