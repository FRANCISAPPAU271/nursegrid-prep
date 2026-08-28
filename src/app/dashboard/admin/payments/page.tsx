import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { momoPaymentRequests, users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import AdminMomoReview from "@/components/admin/AdminMomoReview";
import type { MomoPaymentRequest } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminPaymentsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

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
    .orderBy(desc(momoPaymentRequests.createdAt))
    .limit(200);

  const initial: MomoPaymentRequest[] = rows.map((r) => ({
    id: r.id,
    userId: r.userId,
    userName: r.userName,
    userEmail: r.userEmail,
    plan: r.plan as "four_month" | "annual",
    amountCents: r.amountCents,
    momoNumber: r.momoNumber,
    momoReference: r.momoReference,
    status: r.status,
    reviewNote: r.reviewNote,
    reviewedBy: r.reviewedBy,
    reviewedAt: r.reviewedAt ? r.reviewedAt.toISOString() : null,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">MTN MoMo Payment Review</h1>
        <p className="text-slate-600">
          Verify each transaction reference against your actual MTN Mobile Money SMS or transaction history before approving.
        </p>
      </div>
      <AdminMomoReview initial={initial} />
    </div>
  );
}
