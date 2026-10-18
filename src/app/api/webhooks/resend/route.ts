import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { db } from "@/db";
import { sql } from "drizzle-orm";

/**
 * Resend delivery events.
 *
 * Retiring Brevo removed the only delivery truth this project could read: its
 * event log both proved a batch had arrived and let a bad address be marked so
 * the next week skipped it. A sending-only Resend key cannot read that
 * equivalent — by design, it cannot read anything — so the events have to be
 * pushed to us instead.
 *
 * Resend signs webhooks with Svix: HMAC-SHA256 over `id.timestamp.body`, keyed
 * with the base64 body of the `whsec_...` secret, compared against one or more
 * `v1,<signature>` entries in the header. Verifying it is the whole security
 * model — this endpoint writes to the bounce list, so an unsigned request that
 * "reports a bounce" could quietly unsubscribe a real student.
 *
 * Records land in the tables the weekly job already consults:
 *   - a hard bounce  → `email_bounces`   (future sends skip that address)
 *   - a complaint    → `email_optouts`   (they asked, in the strongest way)
 * Soft bounces and deliveries are acknowledged and ignored: they change
 * nothing, and storing them would only fill a table nobody reads.
 */

const TOLERANCE_SECONDS = 5 * 60;

function verifySvix(secret: string, id: string, timestamp: string, body: string, header: string): boolean {
    // `whsec_` prefixes a base64 secret; the trailing part is the HMAC key.
    const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
    const expected = createHmac("sha256", key).update(`${id}.${timestamp}.${body}`).digest("base64");

    return header
        .split(" ")
        .map((part) => part.trim())
        .filter((part) => part.startsWith("v1,"))
        .some((part) => {
            const given = part.slice(3);
            const a = Buffer.from(given);
            const b = Buffer.from(expected);
            return a.length === b.length && timingSafeEqual(a, b);
        });
}

let tablesEnsured = false;

async function ensureTables() {
    if (tablesEnsured) return;
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "email_bounces" (
            "email" text PRIMARY KEY,
            "kind" text NOT NULL,
            "reason" text,
            "created_at" timestamptz NOT NULL DEFAULT now()
        )
    `);
    await db.execute(sql`
        CREATE TABLE IF NOT EXISTS "email_optouts" (
            "email" text PRIMARY KEY,
            "reason" text,
            "created_at" timestamptz NOT NULL DEFAULT now()
        )
    `);
    tablesEnsured = true;
}

type ResendEvent = {
    type?: string;
    data?: { to?: string[] | string; email_id?: string; bounce?: { type?: string; message?: string } };
};

export async function POST(request: Request) {
    const secret = process.env.RESEND_WEBHOOK_SECRET;
    if (!secret) {
        // Refusing is safer than accepting unsigned writes to the bounce list.
        return NextResponse.json({ error: "webhook not configured" }, { status: 503 });
    }

    const id = request.headers.get("svix-id") ?? "";
    const timestamp = request.headers.get("svix-timestamp") ?? "";
    const signature = request.headers.get("svix-signature") ?? "";
    const raw = await request.text();

    if (!id || !timestamp || !signature) {
        return NextResponse.json({ error: "missing signature headers" }, { status: 400 });
    }

    // A replayed old request should not be accepted just because it is signed.
    const age = Math.abs(Date.now() / 1000 - Number(timestamp));
    if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) {
        return NextResponse.json({ error: "stale timestamp" }, { status: 400 });
    }

    if (!verifySvix(secret, id, timestamp, raw, signature)) {
        return NextResponse.json({ error: "bad signature" }, { status: 401 });
    }

    let event: ResendEvent;
    try {
        event = JSON.parse(raw) as ResendEvent;
    } catch {
        return NextResponse.json({ error: "bad json" }, { status: 400 });
    }

    const recipients = Array.isArray(event.data?.to)
        ? event.data.to
        : event.data?.to
          ? [event.data.to]
          : [];
    const address = recipients[0]?.toLowerCase().trim();

    await ensureTables();

    // Always answer 200 after a verified event, even for types we ignore:
    // a non-2xx makes Resend retry, and retrying an event that will never be
    // handled just burns the queue.
    if (!address) return NextResponse.json({ ok: true, ignored: "no recipient" });

    if (event.type === "email.bounced") {
        // Resend reports bounce type as "Permanent" or "Transient"; older
        // payloads and some providers say "Hard"/"Soft". A full mailbox is
        // transient, and marking it dead would drop a student who has done
        // nothing wrong — so anything not clearly permanent is treated as soft.
        const kind = (event.data?.bounce?.type ?? "").toLowerCase();
        const hard = !/transient|soft/.test(kind) && /permanent|hard/.test(kind);
        if (hard) {
            await db.execute(sql`
                INSERT INTO "email_bounces" ("email", "kind", "reason")
                VALUES (${address}, 'hard', ${event.data?.bounce?.message ?? "bounced"})
                ON CONFLICT ("email") DO UPDATE SET "kind" = 'hard', "reason" = excluded."reason"
            `);
        }
        return NextResponse.json({ ok: true, recorded: hard ? "bounce" : "soft-bounce" });
    }

    if (event.type === "email.complained") {
        await db.execute(sql`
            INSERT INTO "email_optouts" ("email", "reason")
            VALUES (${address}, 'reported as spam')
            ON CONFLICT ("email") DO NOTHING
        `);
        return NextResponse.json({ ok: true, recorded: "optout" });
    }

    return NextResponse.json({ ok: true, ignored: event.type ?? "unknown" });
}
