import "server-only";
import webpush from "web-push";
import { db } from "@/db";
import { sql } from "drizzle-orm";

/**
 * Web Push — the alert that does not depend on Gmail's opinion.
 *
 * The weekly email is delivered, but Gmail files it under Promotions, and Gmail
 * only raises a notification for Primary. Nothing inside an email can change
 * that; the tab is decided by the recipient's mail app. A push notification is
 * a different channel: the browser subscribes the device directly, and the
 * message arrives in the operating system's tray whether or not the email was
 * ever looked at.
 *
 * This needs no app store, no native rebuild and no third-party account — the
 * VAPID key pair below is the whole credential set, and it is generated once
 * and stored in the environment. It reaches everyone using the site on
 * Android/Chrome (and iPhone once the site is added to the home screen), which
 * is most of the audience.
 *
 * Everything here degrades to a no-op when the keys are absent, so a missing
 * configuration cannot break the weekly send.
 */

let configured = false;

function configure(): boolean {
    const publicKey = process.env.VAPID_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
    const privateKey = process.env.VAPID_PRIVATE_KEY;
    if (!publicKey || !privateKey) return false;
    if (!configured) {
        webpush.setVapidDetails(
            // A mailto in the VAPID subject is how push services contact the
            // sender about abusive traffic. It is not shown to users.
            process.env.VAPID_SUBJECT || "mailto:nursegritprep@gmail.com",
            publicKey,
            privateKey,
        );
        configured = true;
    }
    return true;
}

export function isPushConfigured(): boolean {
    return Boolean(
        (process.env.VAPID_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY) &&
            process.env.VAPID_PRIVATE_KEY,
    );
}

let tablesEnsured = false;

/**
 * Idempotent DDL, same pattern as the referral ledger: this project deploys
 * without a migration step, so the table exists once something has run this.
 */
export async function ensurePushTables() {
    if (tablesEnsured) return;
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "web_push_subscriptions" (
            "id" text PRIMARY KEY,
            "user_id" text NOT NULL,
            "endpoint" text NOT NULL,
            "p256dh" text NOT NULL,
            "auth" text NOT NULL,
            "user_agent" text,
            "created_at" timestamptz NOT NULL DEFAULT now()
        )
    `);
    // One row per browser endpoint. Re-subscribing on the same device updates
    // the keys instead of piling up rows that will never deliver again.
    await db.execute(sql`
        CREATE UNIQUE INDEX IF NOT EXISTS "web_push_endpoint_idx"
        ON "web_push_subscriptions" ("endpoint")
    `);
    await db.execute(sql`
        CREATE INDEX IF NOT EXISTS "web_push_user_idx"
        ON "web_push_subscriptions" ("user_id")
    `);
    tablesEnsured = true;
}

export type PushSubscriptionInput = {
    endpoint: string;
    keys: { p256dh: string; auth: string };
};

export async function saveSubscription(
    userId: string,
    sub: PushSubscriptionInput,
    userAgent: string | null,
): Promise<void> {
    await ensurePushTables();
    await db.execute(sql`
        INSERT INTO "web_push_subscriptions" ("id", "user_id", "endpoint", "p256dh", "auth", "user_agent")
        VALUES (${crypto.randomUUID()}, ${userId}, ${sub.endpoint}, ${sub.keys.p256dh}, ${sub.keys.auth}, ${userAgent})
        ON CONFLICT ("endpoint") DO UPDATE
        SET "user_id" = ${userId},
            "p256dh"  = ${sub.keys.p256dh},
            "auth"    = ${sub.keys.auth}
    `);
}

export async function removeSubscription(endpoint: string): Promise<void> {
    await ensurePushTables();
    await db.execute(sql`DELETE FROM "web_push_subscriptions" WHERE "endpoint" = ${endpoint}`);
}

export async function subscriptionCount(userId: string): Promise<number> {
    await ensurePushTables();
    const result = await db.execute(sql`
        SELECT count(*)::int AS n FROM "web_push_subscriptions" WHERE "user_id" = ${userId}
    `);
    return Number((result.rows[0] as { n?: number } | undefined)?.n) || 0;
}

/**
 * Send one notification to every browser this user has subscribed.
 *
 * A push service answers 404 or 410 when a subscription is dead — the user
 * cleared site data, uninstalled, or the token simply expired. Those rows are
 * deleted rather than retried forever, because a table of permanently failing
 * endpoints turns a quiet no-op into a slow loop that grows every week.
 *
 * Never throws: a failed notification must not fail the email it accompanies.
 */
export async function pushToUser(
    userId: string,
    payload: { title: string; body: string; url?: string },
): Promise<{ sent: number; removed: number }> {
    if (!configure()) return { sent: 0, removed: 0 };
    await ensurePushTables();

    const result = await db.execute(sql`
        SELECT "endpoint", "p256dh", "auth" FROM "web_push_subscriptions"
        WHERE "user_id" = ${userId}
    `);
    const rows = result.rows as Array<{ endpoint: string; p256dh: string; auth: string }>;
    if (rows.length === 0) return { sent: 0, removed: 0 };

    const body = JSON.stringify({
        title: payload.title,
        body: payload.body,
        url: payload.url ?? "/dashboard",
    });

    let sent = 0;
    let removed = 0;

    await Promise.all(
        rows.map(async (row) => {
            try {
                await webpush.sendNotification(
                    { endpoint: row.endpoint, keys: { p256dh: row.p256dh, auth: row.auth } },
                    body,
                );
                sent += 1;
            } catch (error) {
                const status = (error as { statusCode?: number }).statusCode;
                if (status === 404 || status === 410) {
                    await removeSubscription(row.endpoint).catch(() => {});
                    removed += 1;
                }
                // Any other status (429, 5xx) is transient; leave the row.
            }
        }),
    );

    return { sent, removed };
}
