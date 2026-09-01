import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { momoPaymentRequests } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import Sidebar from "@/components/dashboard/Sidebar";
import ReferralBonusToast from "@/components/dashboard/ReferralBonusToast";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  let pendingMomoCount = 0;
  if (user.isAdmin) {
    const [{ count }] = await db
      .select({ count: sql<number>`count(*)`.mapWith(Number) })
      .from(momoPaymentRequests)
      .where(eq(momoPaymentRequests.status, "pending"));
    pendingMomoCount = count;
  }

  return (
    <>
      <ReferralBonusToast />
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar name={user.name} email={user.email} isPremium={user.isPremium} isAdmin={user.isAdmin} pendingMomoCount={pendingMomoCount} />
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </>
  );
}
