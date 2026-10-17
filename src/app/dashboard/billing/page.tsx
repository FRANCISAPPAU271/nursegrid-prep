import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { subscriptions, invoices } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import BillingPanel from "@/components/billing/BillingPanel";
import { creditBalance, ensureTables } from "@/lib/referral-credits";
import type { Invoice, Subscription } from "@/lib/types";
import { isStripeConfigured } from "@/lib/stripe";
import SupportCard from "@/components/contact/SupportCard";

export const dynamic = "force-dynamic";

export default async function BillingPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  // Invoice rows now carry discount_pesewas, and select() names that column
  // whether or not the caller asks for it. The column is created by
  // idempotent DDL, not by a migration during deploy, so run the DDL before
  // the first SELECT — this page must not be the thing that discovers the
  // column is missing, because it would 500 for every logged-in user.
  await ensureTables();

  const [subRows, invoiceRows, credit] = await Promise.all([
    db.select().from(subscriptions).where(eq(subscriptions.userId, user.id)).orderBy(desc(subscriptions.createdAt)),
    db.select().from(invoices).where(eq(invoices.userId, user.id)).orderBy(desc(invoices.issuedAt)),
    creditBalance(user.id),
  ]);

  const subs: Subscription[] = subRows.map((s) => ({
    id: s.id,
    userId: s.userId,
    plan: s.plan,
    status: s.status,
    amountCents: s.amountCents,
    startedAt: s.startedAt.toISOString(),
    currentPeriodEnd: s.currentPeriodEnd ? s.currentPeriodEnd.toISOString() : null,
    canceledAt: s.canceledAt ? s.canceledAt.toISOString() : null,
    paymentMethod: s.paymentMethod,
    createdAt: s.createdAt.toISOString(),
  }));

  const invs: Invoice[] = invoiceRows.map((i) => ({
    id: i.id,
    userId: i.userId,
    subscriptionId: i.subscriptionId,
    amountCents: i.amountCents,
    plan: i.plan,
    status: i.status,
    paymentMethod: i.paymentMethod,
    momoNumber: i.momoNumber,
    momoReference: i.momoReference,
    discountPesewas: i.discountPesewas,
    issuedAt: i.issuedAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Billing</h1>
        <p className="text-slate-600">Manage your NurseGrid Prep access plan.</p>
      </div>
      <BillingPanel
        isPremium={user.isPremium}
        premiumTrialEndsAt={user.premiumTrialEndsAt ? user.premiumTrialEndsAt.toISOString() : null}
        subscriptions={subs}
        invoices={invs}
        stripeEnabled={isStripeConfigured()}
        creditBalancePesewas={credit.balancePesewas}
      />
      <div className="mt-6">
        <SupportCard message="Hi NurseGrid Prep! I need help confirming a payment on my account." />
      </div>
    </div>
  );
}
