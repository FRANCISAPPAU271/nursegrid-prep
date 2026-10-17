import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { weeklyDigestEmail } from "@/lib/weekly-digest";
import { unsubscribeUrl } from "@/lib/unsubscribe";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Weekly email job: one general reminder to subscribe, plus what's new.
//
// The email itself is identical for everyone, so this route only has to answer
// one question: who has not had this week's email yet? No segments, no
// per-user copy, no subscription lookup.
//
// Runs daily at 07:00 UTC and meters the list across batches, so a long list
// never trips the function timeout or Brevo's 300/day free tier. Each person
// still gets at most ONE email per ISO week, enforced by the primary key on
// weekly_digest_sends — a retry or a manual run cannot double-send.
//
// Fails closed if CRON_SECRET is unset, so it can never become a public
// mail cannon.
// ---------------------------------------------------------------------------

const MAX_PER_RUN = Number(process.env.WEEKLY_DIGEST_BATCH ?? 200);
const CONCURRENCY = 6;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

let tablesEnsured = false;

async function ensureTables() {
  if (tablesEnsured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "weekly_digest_sends" (
      "user_id" text NOT NULL,
      "kind" text NOT NULL,
      "period_key" text NOT NULL,
      "sent_at" timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY ("user_id", "kind", "period_key")
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

/** Monday-based ISO week key, e.g. "2026-W42". One email per key per user. */
function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Bounded concurrency so a large batch can't blow the function timeout. */
async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

type Row = { id: string; name: string; email: string };

/**
 * Preflight check, used by `?dryRun=1`.
 *
 * The failure this exists for: a dead provider key used to surface as two
 * hundred identical errors in the response, buried under one another, with
 * nothing saying "the credential is the problem". This asks the provider
 * directly and answers in one line.
 */
async function checkProvider(): Promise<{
  provider: "brevo" | "resend" | "none";
  keyValid: boolean | null;
  keyKind?: "api" | "smtp" | "unknown";
  canSend?: boolean | null;
  senderVerified: boolean | null;
  detail: string;
}> {
  const from = process.env.EMAIL_FROM || "";
  const fromAddress = (from.match(/<([^>]+)>/)?.[1] ?? from).trim();

  if (process.env.BREVO_API_KEY) {
    const key = process.env.BREVO_API_KEY.trim();
    // Only the credential family is ever reported, never the key itself.
    const keyKind: "api" | "smtp" | "unknown" = key.startsWith("xkeysib-")
      ? "api"
      : key.startsWith("xsmtpsib-")
        ? "smtp"
        : "unknown";

    try {
      // Probe the endpoint we actually use, with an empty body, which cannot
      // deliver anything. Brevo answers 400 "sender is missing" when the key
      // may send, 401 when the key is unknown, 403 when it lacks the send
      // scope. Checking /v3/account would be wrong: a send-only key, the
      // correct scope for this job, is forbidden there.
      const probe = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": key, "Content-Type": "application/json", Accept: "application/json" },
        body: "{}",
      });

      if (probe.status === 401) {
        return {
          provider: "brevo",
          keyValid: false,
          keyKind,
          canSend: false,
          senderVerified: null,
          detail:
            keyKind === "smtp"
              ? "The stored value is a Brevo SMTP relay password (xsmtpsib-...), not an API key, so it cannot authenticate api.brevo.com. Create an API key at Brevo -> SMTP & API -> API Keys, it starts with xkeysib-."
              : keyKind === "unknown"
                ? "Brevo rejected the stored value (401 Key not found) and it matches neither Brevo credential format. Create an API key at Brevo -> SMTP & API -> API Keys, it starts with xkeysib-."
                : "Brevo rejected a correctly-formatted API key (401 Key not found), so it has most likely been revoked. Generate a new one at Brevo -> SMTP & API -> API Keys.",
        };
      }

      if (probe.status === 403) {
        return {
          provider: "brevo",
          keyValid: true,
          keyKind,
          canSend: false,
          senderVerified: null,
          detail:
            "The key is genuine but is not allowed to send transactional email. In Brevo -> SMTP & API -> API Keys, grant this key access to transactional email.",
        };
      }

      if (probe.status !== 400) {
        return {
          provider: "brevo",
          keyValid: null,
          keyKind,
          canSend: null,
          senderVerified: null,
          detail: `Unexpected answer from Brevo while checking the key: ${probe.status}.`,
        };
      }

      // The key may send. Sender verification needs the sender scope, which a
      // send-only key does not have - say so rather than implying a problem.
      let senderVerified: boolean | null = null;
      let note = "";
      const senders = await fetch("https://api.brevo.com/v3/senders", {
        headers: { "api-key": key, Accept: "application/json" },
      });
      if (senders.status === 403) {
        note = " The key cannot list senders (send-only scope), so the sender address was not confirmed - expected for this scope.";
      } else if (senders.ok) {
        const list = (await senders.json().catch(() => ({}))) as { senders?: { email?: string; active?: boolean }[] };
        const match = (list.senders ?? []).find((x) => (x.email ?? "").toLowerCase() === fromAddress.toLowerCase());
        senderVerified = Boolean(match?.active);
        note = senderVerified ? "" : ` ${fromAddress || "(EMAIL_FROM unset)"} is not an active, verified sender in Brevo.`;
      }

      return {
        provider: "brevo",
        keyValid: true,
        keyKind,
        canSend: true,
        senderVerified,
        detail: `Key is accepted and permitted to send.${note}`,
      };
    } catch (e) {
      return {
        provider: "brevo",
        keyValid: null,
        keyKind,
        canSend: null,
        senderVerified: null,
        detail: `Could not reach Brevo: ${e instanceof Error ? e.message : "unknown"}`,
      };
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
      return {
        provider: "resend",
        keyValid: res.ok ? true : res.status === 401 ? false : null,
        senderVerified: null,
        detail: res.ok ? "Resend key is valid." : `Resend returned ${res.status}.`,
      };
    } catch (e) {
      return {
        provider: "resend",
        keyValid: null,
        senderVerified: null,
        detail: `Could not reach Resend: ${e instanceof Error ? e.message : "unknown"}`,
      };
    }
  }

  return { provider: "none", keyValid: null, senderVerified: null, detail: "No email provider configured." };
}

/**
 * Reconcile what we just sent against what the provider actually did with it.
 *
 * A 2xx from Brevo means "accepted", not "delivered". When a sender address is
 * not verified, every message is accepted and then rejected a moment later. The
 * ledger row is written on acceptance, so without this check those users would
 * silently skip a whole week — which is exactly what happened on 2026-10-17:
 * "sent: 173", and all 173 were thrown away.
 *
 * Brevo's event log carries the recipient address, so a rejection can be traced
 * back to a specific user and their ledger row removed. They then stay due.
 */
async function reconcileBatch(
  batchStartedAt: Date,
  recipients: { id: string; email: string }[],
  weekKey: string,
): Promise<{
  checked: boolean;
  delivered: number;
  rejected: number;
  unconfirmed: number;
  rolledBack: number;
  reason: string | null;
}> {
  const none = { checked: false, delivered: 0, rejected: 0, unconfirmed: 0, rolledBack: 0, reason: null };
  if (!process.env.BREVO_API_KEY || recipients.length === 0) return none;

  type Ev = { event?: string; email?: string; date?: string; reason?: string };
  const readEvents = async (): Promise<Ev[] | null> => {
    const res = await fetch("https://api.brevo.com/v3/smtp/statistics/events?limit=500&days=1&sort=desc", {
      headers: { "api-key": process.env.BREVO_API_KEY!.trim(), Accept: "application/json" },
    });
    // A send-only key cannot read the log. That is a legitimate configuration,
    // so it is reported rather than treated as a failure.
    if (!res.ok) return null;
    const body = (await res.json().catch(() => ({}))) as { events?: Ev[] };
    const cutoff = batchStartedAt.getTime() - 60_000;
    return (body.events ?? []).filter((e) => {
      const t = e.date ? Date.parse(e.date) : NaN;
      return Number.isFinite(t) ? t >= cutoff : false;
    });
  };

  const classify = (events: Ev[]) => {
    const rejected = new Set<string>();
    const delivered = new Set<string>();
    let reason: string | null = null;
    for (const e of events) {
      if (!e.email) continue;
      const email = e.email.toLowerCase();
      if (e.event === "error") {
        rejected.add(email);
        reason ??= e.reason?.trim() ?? null;
      } else if (e.event === "delivered" || e.event === "opened" || e.event === "clicks" || e.event === "uniqueOpened") {
        delivered.add(email);
      }
    }
    return { rejected, delivered, reason };
  };

  try {
    // Events land asynchronously. Check, and if anything is still unexplained
    // while the batch is failing, look once more before deciding — a single
    // short window is how a rejected message gets mis-filed as delivered.
    await new Promise((r) => setTimeout(r, 6000));
    let events = await readEvents();
    if (events === null) {
      return { ...none, checked: false, reason: "the key cannot read the event log" };
    }
    let { rejected, delivered, reason } = classify(events);

    const known = new Set([...rejected, ...delivered]);
    const unknownCount = recipients.filter((r) => !known.has(r.email.toLowerCase())).length;
    if (unknownCount > 0 && rejected.size > 0) {
      await new Promise((r) => setTimeout(r, 6000));
      events = (await readEvents()) ?? events;
      ({ rejected, delivered, reason } = classify(events));
    }

    const allKnown = new Set([...rejected, ...delivered]);
    const unconfirmed = recipients.filter((r) => !allKnown.has(r.email.toLowerCase()));

    // Anything rejected is un-marked so the person stays due. When the batch is
    // demonstrably failing, unconfirmed messages are treated the same way: a
    // working sender resolves every message promptly, and leaving them marked
    // is what silently costs someone a week.
    const toRollBack = [
      ...recipients.filter((r) => rejected.has(r.email.toLowerCase())),
      ...(rejected.size > 0 ? unconfirmed : []),
    ];
    const uniqueIds = [...new Set(toRollBack.map((r) => r.id))];

    for (const id of uniqueIds) {
      await db.execute(sql`
        DELETE FROM weekly_digest_sends
        WHERE user_id = ${id} AND kind = 'weekly' AND period_key = ${weekKey}
      `);
    }

    return {
      checked: true,
      // Only messages with a delivery event are called delivered. Subtracting
      // rejections from accepts would be a guess.
      delivered: recipients.filter((r) => delivered.has(r.email.toLowerCase())).length,
      rejected: recipients.filter((r) => rejected.has(r.email.toLowerCase())).length,
      unconfirmed: unconfirmed.length,
      rolledBack: uniqueIds.length,
      reason,
    };
  } catch (e) {
    return { ...none, checked: false, reason: `could not read the event log: ${e instanceof Error ? e.message : "unknown"}` };
  }
}

export async function GET(request: Request) {
  try {
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const params = new URL(request.url).searchParams;
    const dryRun = params.get("dryRun") === "1";
    const verify = params.get("verify") === "1";
    const reset = params.get("reset") === "1";
    const currentWeek = isoWeekKey(new Date());

    if (!isEmailConfigured()) {
      return NextResponse.json({ ok: true, skipped: "email not configured (set BREVO_API_KEY + EMAIL_FROM)" });
    }

    await ensureTables();

    // `?reset=1` clears this week's ledger so the same people can be sent to
    // again. Needed when sends were accepted by the provider but rejected
    // afterwards (an unverified sender, for instance) and therefore never
    // reached anybody: the normal path would otherwise wait a whole week.
    if (reset) {
      const deleted = await db.execute(sql`
        DELETE FROM weekly_digest_sends
        WHERE kind = 'weekly' AND period_key = ${currentWeek}
      `);
      return NextResponse.json({
        ok: true,
        reset: currentWeek,
        rowsDeleted: (deleted as unknown as { rowCount?: number }).rowCount ?? null,
      });
    }

    // `?verify=1` asks the provider what actually happened to recent sends.
    // A 2xx from the send endpoint only means "accepted"; the real outcome
    // (delivered, rejected for an unverified sender, bounced) shows up here.
    if (verify) {
      if (!process.env.BREVO_API_KEY) {
        return NextResponse.json({ ok: false, error: "verify needs BREVO_API_KEY" }, { status: 400 });
      }
      const res = await fetch(
        "https://api.brevo.com/v3/smtp/statistics/events?limit=500&days=2&sort=desc",
        { headers: { "api-key": process.env.BREVO_API_KEY.trim(), Accept: "application/json" } },
      );
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: `Brevo statistics returned ${res.status}` }, { status: 502 });
      }
      const body = (await res.json().catch(() => ({}))) as {
        events?: { event?: string; reason?: string; email?: string }[];
      };
      const events = body.events ?? [];
      const counts: Record<string, number> = {};
      const reasons: Record<string, number> = {};
      for (const e of events) {
        const k = e.event ?? "unknown";
        counts[k] = (counts[k] ?? 0) + 1;
        if (k === "error" && e.reason) reasons[e.reason.trim()] = (reasons[e.reason.trim()] ?? 0) + 1;
      }
      const delivered = (counts.delivered ?? 0) + (counts.opened ?? 0) + (counts.clicks ?? 0);
      return NextResponse.json({
        ok: delivered > 0 || (counts.error ?? 0) === 0,
        checkedEvents: events.length,
        counts,
        topReasons: Object.entries(reasons)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([reason, n]) => ({ reason, count: n })),
      });
    }

    // `?dryRun=1` reports exactly what a real run would do — how many people are
    // due, and whether the provider would accept the message — without sending.
    if (dryRun) {
      const countRow = (
        await db.execute(sql`
          SELECT count(*)::int AS due
          FROM users u
          WHERE u.is_admin = false
            AND u.created_at < ${new Date(Date.now() - 48 * 3600000).toISOString()}::timestamptz
            AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
            AND NOT EXISTS (
              SELECT 1 FROM weekly_digest_sends d
              WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${isoWeekKey(new Date())}
            )
        `)
      ).rows[0] as unknown as { due: number };

      const provider = await checkProvider();
      return NextResponse.json({
        ok: provider.keyValid === true && provider.canSend === true && provider.senderVerified !== false,
        dryRun: true,
        week: isoWeekKey(new Date()),
        accountsDue: countRow?.due ?? 0,
        provider,
      });
    }

    const now = new Date();
    const weekKey = isoWeekKey(now);
    const newAccountCutoff = new Date(now.getTime() - 48 * 3600000);

    const rows = (
      await db.execute(sql`
        SELECT u.id, u.name, u.email
        FROM users u
        WHERE u.is_admin = false
          AND u.created_at < ${newAccountCutoff.toISOString()}::timestamptz
          AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
          AND NOT EXISTS (
            SELECT 1 FROM weekly_digest_sends d
            WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${weekKey}
          )
        ORDER BY u.created_at ASC
        LIMIT ${MAX_PER_RUN}
      `)
    ).rows as unknown as Row[];

    const batchStartedAt = new Date();
    const accepted: { id: string; email: string }[] = [];
    const errors: string[] = [];

    await mapLimit(rows, CONCURRENCY, async (u) => {
      try {
        const { subject, html } = weeklyDigestEmail({ userId: u.id, name: u.name });

        await sendEmail(u.email, subject, html, {
          unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined,
        });

        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);

        accepted.push({ id: u.id, email: u.email });
      } catch (e) {
        errors.push(`digest:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    });

    // "accepted" is what we know for certain; "delivered" is what the provider
    // confirms. Anything rejected is un-marked so it is retried.
    const verdict = await reconcileBatch(batchStartedAt, accepted, weekKey);

    return NextResponse.json({
      ok: errors.length === 0 && verdict.checked && verdict.rejected === 0 && verdict.unconfirmed === 0,
      week: weekKey,
      accepted: accepted.length,
      // Kept for anything still reading `sent`.
      sent: accepted.length,
      // Confirmed by the provider. Never inferred by subtraction — that is how
      // a rejected message gets filed as delivered.
      delivered: verdict.checked ? verdict.delivered : null,
      rejected: verdict.checked ? verdict.rejected : null,
      unconfirmed: verdict.checked ? verdict.unconfirmed : null,
      rolledBack: verdict.rolledBack,
      verification: verdict.checked
        ? verdict.rejected > 0 || verdict.unconfirmed > 0
          ? `provider rejected ${verdict.rejected} and left ${verdict.unconfirmed} unconfirmed; ${verdict.rolledBack} returned to the due list — ${verdict.reason ?? "no reason given"}`
          : `all ${verdict.delivered} confirmed delivered`
        : `not verified — ${verdict.reason ?? "no event log access"}`,
      batchLimit: MAX_PER_RUN,
      moreQueuedForTomorrow: rows.length === MAX_PER_RUN,
      errors: errors.slice(0, 5),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Weekly email job failed" }, { status: 500 });
  }
}
