import "server-only";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { PLAN_PRICES_PESEWAS } from "@/lib/pricing";
import type { PlanId } from "@/lib/stripe";

/**
 * Referral credit.
 *
 * The offer: bring a friend, and when their first payment clears you earn
 * GH₵ 20 off your next renewal. Your friend, in turn, gets GH₵ 10 off their
 * first purchase just for using your code.
 *
 * Two rules make this safe to run on real money:
 *
 *   1. Credit is earned on a PAYMENT, never on a signup. Signup rewards are
 *      farmed with throwaway addresses; a payment reward costs the farmer as
 *      much as it pays them.
 *
 *   2. Every write is idempotent. A `sourceId` plus a unique index on
 *      (kind, sourceId) means a retried webhook, a double-clicked approval or
 *      two overlapping confirmations cannot pay somebody twice. Payment
 *      providers retry; code must assume it.
 *
 * The ledger is append-only — `earned` and `spent` rows are never updated or
 * deleted — so the balance is always reconstructible and two people asking
 * "why does my balance say this" have an answer.
 */

/** GH₵ 20 to the referrer, once the friend's first payment clears. */
export const REFERRAL_REWARD_PESEWAS = 20_00;

/** GH₵ 10 off the first purchase, for the friend who used the code. */
export const FRIEND_DISCOUNT_PESEWAS = 10_00;

/**
 * The smallest charge we will ever send to a payment provider.
 *
 * Paystack rejects anything under GH₵ 1. Keeping this floor means a large
 * credit balance still results in a real, valid transaction rather than a
 * failed checkout — and a user with four referrals ends up paying GH₵ 1 for a
 * plan that costs GH₵ 80, which is the offer working as advertised.
 */
export const MIN_PAYABLE_PESEWAS = 1_00;

let tablesEnsured = false;

/**
 * Idempotent DDL for everything the referral feature adds to the schema.
 *
 * This project deploys without a migration step, so a column exists only once
 * this function has run somewhere. Every code path that *writes* the new
 * columns calls it first — but so must the code paths that merely *read*
 * them, which is why it is exported: the Drizzle schema names
 * `invoices.discount_pesewas`, so a plain `select()` touches the column even
 * on a query that does not care about discounts. Without an explicit call
 * ahead of that query, the first logged-in page view after a deploy could
 * 500 before any writer had a chance to create the column.
 *
 * Safe to call anywhere, as often as you like: after the first successful
 * run in a process it returns immediately.
 */
export async function ensureTables() {
    if (tablesEnsured) return;
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "referral_credits" (
            "id" text PRIMARY KEY,
            "user_id" text NOT NULL,
            "kind" text NOT NULL,
            "amount_pesewas" integer NOT NULL,
            "referral_id" text,
            "source_id" text,
            "note" text,
            "created_at" timestamptz NOT NULL DEFAULT now()
        )
    `);
    await db.execute(sql`
        CREATE UNIQUE INDEX IF NOT EXISTS "referral_credits_source_idx"
        ON "referral_credits" ("kind", "source_id")
    `);
    await db.execute(sql`CREATE INDEX IF NOT EXISTS "referral_credits_user_idx" ON "referral_credits" ("user_id")`);
    // The discounted amount is stored alongside the list price so an invoice
    // can always answer "what was charged, and why was it less".
    await db.execute(sql`ALTER TABLE "invoices" ADD COLUMN IF NOT EXISTS "discount_pesewas" integer NOT NULL DEFAULT 0`);
    await db.execute(sql`ALTER TABLE "momo_payment_requests" ADD COLUMN IF NOT EXISTS "payable_pesewas" integer`);
    await db.execute(sql`ALTER TABLE "momo_payment_requests" ADD COLUMN IF NOT EXISTS "credit_applied_pesewas" integer NOT NULL DEFAULT 0`);
    await db.execute(sql`ALTER TABLE "momo_payment_requests" ADD COLUMN IF NOT EXISTS "discount_pesewas" integer NOT NULL DEFAULT 0`);
    tablesEnsured = true;
}

export type CreditReason = "referral" | "spend" | "adjustment";

export type CreditBalance = {
    earnedPesewas: number;
    spentPesewas: number;
    balancePesewas: number;
};

export async function creditBalance(userId: string): Promise<CreditBalance> {
    await ensureTables();
    const result = await db.execute(sql`
        SELECT
            COALESCE(SUM(CASE WHEN kind = 'earned' THEN amount_pesewas ELSE 0 END), 0)::int AS earned,
            COALESCE(SUM(CASE WHEN kind = 'spent'  THEN amount_pesewas ELSE 0 END), 0)::int AS spent
        FROM "referral_credits"
        WHERE "user_id" = ${userId}
    `);
    const row = (result.rows[0] ?? { earned: 0, spent: 0 }) as { earned: number; spent: number };
    return {
        earnedPesewas: Number(row.earned) || 0,
        spentPesewas: Number(row.spent) || 0,
        balancePesewas: Math.max(0, (Number(row.earned) || 0) - (Number(row.spent) || 0)),
    };
}

/** Has this account ever completed a purchase? Drives the one-time friend discount. */
export async function hasPaidBefore(userId: string): Promise<boolean> {
    const result = await db.execute(sql`
        SELECT 1 FROM "invoices"
        WHERE "user_id" = ${userId} AND "status" = 'paid'
        LIMIT 1
    `);
    return result.rows.length > 0;
}

export type CheckoutTotals = {
    /** The list price of the plan. */
    listPesewas: number;
    /** One-time GH₵ 10 off, for somebody who signed up with a referral code. */
    friendDiscountPesewas: number;
    /** Credit from past referrals, applied automatically. */
    creditAppliedPesewas: number;
    /** What the customer actually pays. Never below the gateway minimum. */
    payablePesewas: number;
    creditBalancePesewas: number;
    /** True when this is the account's first purchase, i.e. the friend discount applies. */
    firstPurchase: boolean;
};

/**
 * Work out exactly what a given user should be charged for a plan.
 *
 * Called by every checkout route, so the figure shown in the UI, the figure
 * sent to the provider and the figure written on the invoice all come from
 * this one function. That is the whole point of it existing.
 */
export async function checkoutTotals(userId: string, planId: PlanId): Promise<CheckoutTotals> {
    await ensureTables();
    const listPesewas = PLAN_PRICES_PESEWAS[planId];

    const [{ balancePesewas }, firstPurchase, referred] = await Promise.all([
        creditBalance(userId),
        hasPaidBefore(userId).then((paid) => !paid),
        db.execute(sql`SELECT "referred_by_code" AS code FROM "users" WHERE "id" = ${userId} LIMIT 1`),
    ]);

    const wasReferred = Boolean((referred.rows[0] as { code?: string | null } | undefined)?.code);
    const friendDiscountPesewas = firstPurchase && wasReferred ? Math.min(FRIEND_DISCOUNT_PESEWAS, listPesewas) : 0;

    const afterFriendDiscount = Math.max(MIN_PAYABLE_PESEWAS, listPesewas - friendDiscountPesewas);
    const headroomForCredit = Math.max(0, afterFriendDiscount - MIN_PAYABLE_PESEWAS);
    const creditAppliedPesewas = Math.min(balancePesewas, headroomForCredit);

    return {
        listPesewas,
        friendDiscountPesewas,
        creditAppliedPesewas,
        payablePesewas: afterFriendDiscount - creditAppliedPesewas,
        creditBalancePesewas: balancePesewas,
        firstPurchase,
    };
}

/**
 * Credit the referrer because this user's payment cleared.
 *
 * Called from every place a payment becomes real (MoMo approval, Paystack
 * activation, Stripe webhook). Safe to call more than once: the unique index
 * on (kind, source_id) makes the second attempt a no-op.
 */
export async function awardReferralCredit(
    refereeUserId: string,
): Promise<{ awarded: boolean; referrerUserId: string | null }> {
    await ensureTables();

    const found = await db.execute(sql`
        SELECT r."id" AS referral_id, r."referrer_user_id" AS referrer_id
        FROM "referrals" r
        WHERE r."referee_user_id" = ${refereeUserId}
        LIMIT 1
    `);
    const referral = found.rows[0] as { referral_id: string; referrer_id: string } | undefined;
    if (!referral) return { awarded: false, referrerUserId: null };

    const already = await db.execute(sql`
        SELECT 1 FROM "referral_credits"
        WHERE "kind" = 'earned' AND "source_id" = ${referral.referral_id}
        LIMIT 1
    `);
    if (already.rows.length > 0) return { awarded: false, referrerUserId: referral.referrer_id };

    await db.execute(sql`
        INSERT INTO "referral_credits" ("id", "user_id", "kind", "amount_pesewas", "referral_id", "source_id", "note")
        VALUES (
            ${crypto.randomUUID()}, ${referral.referrer_id}, 'earned', ${REFERRAL_REWARD_PESEWAS},
            ${referral.referral_id}, ${referral.referral_id},
            'Friend completed their first payment'
        )
        ON CONFLICT DO NOTHING
    `);

    return { awarded: true, referrerUserId: referral.referrer_id };
}

/**
 * Spend credit against a completed purchase. Idempotent per invoice.
 *
 * The amount is capped at the current balance, so a race (two purchases at
 * once, both reading the same balance) can never push a wallet negative.
 */
export async function spendCredit(params: {
    userId: string;
    amountPesewas: number;
    invoiceId: string;
}): Promise<{ spent: number }> {
    await ensureTables();
    if (params.amountPesewas <= 0) return { spent: 0 };

    // The balance check and the spend have to happen inside one transaction,
    // otherwise two checkouts running at the same time both read the same
    // balance and both spend it — which, for a wallet holding real money, means
    // giving away credit that does not exist. A per-user advisory lock makes
    // concurrent spenders queue up; it is released when the transaction ends.
    return db.transaction(async (tx) => {
        await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${"referral_credit:" + params.userId}))`);

        const balanceResult = await tx.execute(sql`
            SELECT
                COALESCE(SUM(CASE WHEN kind = 'earned' THEN amount_pesewas ELSE 0 END), 0)::int AS earned,
                COALESCE(SUM(CASE WHEN kind = 'spent'  THEN amount_pesewas ELSE 0 END), 0)::int AS spent
            FROM "referral_credits"
            WHERE "user_id" = ${params.userId}
        `);
        const row = (balanceResult.rows[0] ?? { earned: 0, spent: 0 }) as { earned: number; spent: number };
        const liveBalance = Math.max(0, (Number(row.earned) || 0) - (Number(row.spent) || 0));

        const amount = Math.min(params.amountPesewas, liveBalance);
        if (amount <= 0) return { spent: 0 };

        const result = await tx.execute(sql`
            INSERT INTO "referral_credits" ("id", "user_id", "kind", "amount_pesewas", "source_id", "note")
            VALUES (${crypto.randomUUID()}, ${params.userId}, 'spent', ${amount}, ${params.invoiceId}, 'Applied to purchase')
            ON CONFLICT DO NOTHING
            RETURNING "amount_pesewas" AS amount
        `);
        const inserted = (result.rows[0] as { amount?: number } | undefined)?.amount;
        return { spent: inserted ? Number(inserted) : 0 };
    });
}

/**
 * Which of this user's referrals have already paid out.
 *
 * Returns the set of referral ids that have an `earned` row, so the invite
 * screen can say "paid" or "waiting for their first payment" per friend
 * instead of guessing from the signup bonus. A referral exists from the
 * moment the friend registers; the money only lands when they pay, and those
 * are two different facts the referrer deserves to see separately.
 */
export async function paidOutReferralIds(userId: string): Promise<Set<string>> {
    await ensureTables();
    const result = await db.execute(sql`
        SELECT "source_id" FROM "referral_credits"
        WHERE "user_id" = ${userId} AND "kind" = 'earned' AND "source_id" IS NOT NULL
    `);
    return new Set(
        (result.rows as Array<{ source_id: string | null }>)
            .map((row) => row.source_id)
            .filter((id): id is string => Boolean(id)),
    );
}

/**
 * Mark what was discounted on an invoice, so a receipt can explain itself and
 * a support question has an answer without consulting a table of guesses.
 */
export async function recordInvoiceDiscount(invoiceId: string, discountPesewas: number): Promise<void> {
    await ensureTables();
    if (discountPesewas <= 0) return;
    await db.execute(sql`
        UPDATE "invoices" SET "discount_pesewas" = ${discountPesewas} WHERE "id" = ${invoiceId}
    `);
}
