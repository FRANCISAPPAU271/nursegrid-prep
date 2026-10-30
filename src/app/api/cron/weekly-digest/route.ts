import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { weeklyDigestEmail } from "@/lib/weekly-digest";
import { isPushConfigured, pushToUser } from "@/lib/web-push";
import { unsubscribeUrl } from "@/lib/unsubscribe";
import { recordDigestRun, recordEvent } from "@/lib/ops";

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

const MAX_PER_RUN = Number(process.env.WEEKLY_DIGEST_BATCH ?? 60);
const CONCURRENCY = 6;

/**
 * Minimum spacing between provider calls.
 *
 * The account is on Resend's free plan, where the team-wide limit is 10
 * requests per second. The previous settings fired 175 sends in 13.2 seconds -
 * 13.2 req/s - and about a quarter of them came back 429. Because the SDK does
 * not retry, those were simply dropped, while the ledger recorded them as sent.
 *
 * Two defences, because one is not enough: space requests at 9 per second
 * (below the limit, and it costs only a few extra seconds for a batch this
 * size), and cap the batch below the free plan's daily allowance so a burst can
 * never outrun the day's quota in the first place.
 */
const MIN_GAP_MS = 110;
const FREE_PLAN_DAILY_CAP = 100;
/**
 * Why the batch is 60 and not 90.
 *
 * The free plan allows 100 emails per UTC day across the whole team, and the
 * digest is not the only thing that sends: password resets, payment receipts and
 * new-device alerts draw on the same allowance. A batch of 90 left ten sends for
 * everything else, so on a Monday morning a student who had forgotten their
 * password could be refused — locked out by the marketing email they did not ask
 * for. 60 leaves 40 for mail that people actually need.
 */
const RESERVED_FOR_TRANSACTIONAL = 40;

/** A single gate shared by every worker, so CONCURRENCY cannot defeat pacing. */
function makePacer(gapMs: number) {
  let next = 0;
  return async function pace(): Promise<void> {
    const now = Date.now();
    const wait = Math.max(0, next - now);
    next = Math.max(now, next) + gapMs;
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  };
}
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

/**
 * Addresses that can never receive mail.
 *
 * RFC 2606 and RFC 6761 reserve these names for documentation and testing, so a
 * message sent to one is a guaranteed bounce. Bounces are the fastest way to
 * lose a sender's reputation, and this database contains seeded demo accounts
 * (`demo@nursegrid.app`, `*@example.com`) that are not real people.
 *
 * Filtered in SQL so they never enter the batch, rather than skipped afterwards
 * where they would still count against the daily quota.
 */
const UNDELIVERABLE_DOMAINS = [
  "example.com",
  "example.org",
  "example.net",
  "test",
  "invalid",
  "localhost",
  // The app's own alternate domain. It has no MX record — checked 2026-10-17 —
  // so seeded demo accounts at @nursegrid.app bounce every time. Real users are
  // on whatever address they registered with; nobody legitimately has one here.
  "nursegrid.app",
];

/**
 * Addresses the provider has told us are dead, learned rather than listed.
 *
 * The first real send produced 9 hard bounces — "550-5.1.1 the email account
 * that you tried to reach does not exist". Those are permanent: retrying them
 * every week achieves nothing except raising the bounce rate, and bounce rate
 * is what gets a sender throttled. At 169 recipients, nine dead addresses is
 * over 5%, past the point where mailbox providers start noticing.
 *
 * `email_bounces` is filled from the provider's own event log after each send,
 * so this stays correct without anybody maintaining a list.
 */
const PERMANENTLY_UNDELIVERABLE_SQL = sql`
  NOT EXISTS (SELECT 1 FROM email_bounces b WHERE lower(b.email) = lower(u.email))
`;

const UNDELIVERABLE_SQL = sql`
  lower(split_part(u.email, '@', 2)) NOT IN (${sql.join(
    UNDELIVERABLE_DOMAINS.map((d) => sql`${d}`),
    sql`, `,
  )})
  AND ${PERMANENTLY_UNDELIVERABLE_SQL}
`;

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

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });

      if (res.status === 401) {
        // Two very different 401s. A key created with "Sending access" only is
        // perfectly good for this job and is refused by every read endpoint,
        // including this one; an unknown key is a real problem. Reading the
        // body tells them apart, and conflating them would have this route
        // report a healthy send-only key as broken - the same class of mistake
        // as "sent: 173" when nothing had been delivered.
        const body = (await res.json().catch(() => ({}))) as { message?: string; name?: string };
        const restricted =
          body.name === "restricted_api_key" || /restricted to only send/i.test(body.message ?? "");
        return {
          provider: "resend",
          keyValid: restricted,
          canSend: restricted,
          senderVerified: null,
          detail: restricted
            ? "Key is valid and limited to sending, so domain verification cannot be read with this scope. A real test send is the proof: use ?to=address."
            : "Resend rejected the key. Create a new one at Resend -> API Keys; they start with re_.",
        };
      }
      if (!res.ok) {
        return {
          provider: "resend",
          keyValid: null,
          canSend: null,
          senderVerified: null,
          detail: `Unexpected answer from Resend while checking the key: ${res.status}.`,
        };
      }

      // A valid key is not the whole story: Resend will accept a message for a
      // domain whose DNS has not verified, then fail it. Check the domain the
      // From address actually uses, and name the records still outstanding -
      // "pending" alone sends people hunting through four DNS entries.
      const body = (await res.json().catch(() => ({}))) as {
        data?: { name?: string; status?: string; records?: { record?: string; name?: string; status?: string }[] }[];
      };
      const domain = (fromAddress.split("@")[1] ?? "").toLowerCase();
      const match = (body.data ?? []).find(
        (d) => (d.name ?? "").toLowerCase() === domain,
      );

      if (!match) {
        return {
          provider: "resend",
          keyValid: true,
          canSend: true,
          senderVerified: false,
          detail: `The key works, but ${domain || "(EMAIL_FROM unset)"} has not been added in Resend. Add it under Domains, then publish the DNS records it shows.`,
        };
      }

      const pending = (match.records ?? [])
        .filter((r) => (r.status ?? "").toLowerCase() !== "verified")
        .map((r) => `${r.record ?? "record"} (${r.name ?? "?"})`);

      const verified = (match.status ?? "").toLowerCase() === "verified";
      return {
        provider: "resend",
        keyValid: true,
        canSend: true,
        senderVerified: verified,
        detail: verified
          ? `${domain} is verified in Resend and may send.`
          : `${domain} is in Resend but not verified yet. Still outstanding: ${pending.length ? pending.join(", ") : "see the Domains page"}. DNS can take a few minutes to an hour to propagate.`,
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
  bounced?: number;
  reason: string | null;
}> {
  const none = { checked: false, delivered: 0, rejected: 0, unconfirmed: 0, rolledBack: 0, reason: null };
  if (!process.env.BREVO_API_KEY || recipients.length === 0) {
    // Brevo's event log is the only delivery truth this project can read. With
    // Brevo retired there is nothing to reconcile against, so say so instead of
    // reporting zero delivered and alarming whoever reads the batch result.
    return recipients.length === 0 ? none : { ...none, reason: "delivery events are only readable from Brevo; this deployment sends with Resend" };
  }

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
    const bounced = new Map<string, { kind: string; reason: string | null }>();
    let reason: string | null = null;
    for (const e of events) {
      if (!e.email) continue;
      const email = e.email.toLowerCase();
      if (e.event === "error") {
        rejected.add(email);
        reason ??= e.reason?.trim() ?? null;
      } else if (e.event === "hardBounces" || e.event === "softBounces") {
        // A hard bounce is permanent: the mailbox does not exist. Retrying it
        // next week only adds to the bounce rate that gets senders throttled,
        // so it is remembered and excluded from future batches.
        bounced.set(email, { kind: e.event, reason: e.reason?.trim() ?? null });
      } else if (e.event === "delivered" || e.event === "opened" || e.event === "clicks" || e.event === "uniqueOpened") {
        delivered.add(email);
      }
    }
    return { rejected, delivered, bounced, reason };
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
    let { rejected, delivered, bounced, reason } = classify(events);

    const known = new Set([...rejected, ...delivered]);
    const unknownCount = recipients.filter((r) => !known.has(r.email.toLowerCase())).length;
    if (unknownCount > 0 && rejected.size > 0) {
      await new Promise((r) => setTimeout(r, 6000));
      events = (await readEvents()) ?? events;
      ({ rejected, delivered, bounced, reason } = classify(events));
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

    // Remember dead mailboxes so they are never retried.
    for (const [email, info] of bounced) {
      await db.execute(sql`
        INSERT INTO email_bounces (email, kind, reason)
        VALUES (${email}, ${info.kind}, ${info.reason})
        ON CONFLICT (email) DO UPDATE SET kind = EXCLUDED.kind, reason = EXCLUDED.reason
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
      bounced: bounced.size,
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
      return NextResponse.json({ ok: true, skipped: "email not configured (set BREVO_API_KEY or RESEND_API_KEY, plus EMAIL_FROM)" });
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
        return NextResponse.json(
          {
            ok: true,
            skipped:
              "Delivery events can only be read from Brevo. This deployment sends with Resend, which is verified for nursegridprep.com, so there is no event log to reconcile here.",
          },
          { status: 200 },
        );
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

    // `?to=someone@example.com` sends the real weekly email to exactly one
    // address — the same template, the same provider, the same headers as the
    // Monday run — and writes nothing to the send ledger.
    //
    // This exists because "does the new sender work?" is otherwise unanswerable
    // without mailing all ~170 students and reading the wreckage. Guarded by the
    // cron secret like everything else here, and capped to one recipient so it
    // cannot be turned into an open relay.
    const testTo = (params.get("to") ?? "").trim();
    if (testTo && !dryRun) {
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(testTo)) {
        return NextResponse.json({ ok: false, error: "`to` is not a valid address" }, { status: 400 });
      }
      const sample = weeklyDigestEmail({ userId: "test-recipient", name: "there" });
      try {
        const result = await sendEmail(testTo, sample.subject, sample.html, {
          text: sample.text,
          // No unsubscribe header on a test: it would imply a subscription
          // relationship for an address that has none.
        });
        return NextResponse.json({
          ok: true,
          sent: true,
          to: testTo,
          from: process.env.EMAIL_FROM || "(unset — provider default)",
          replyTo: process.env.EMAIL_REPLY_TO || null,
          provider: process.env.BREVO_API_KEY ? "brevo" : process.env.RESEND_API_KEY ? "resend" : "none",
          messageId: result.id ?? null,
          note: "Open it in the inbox, then Show original. SPF, DKIM and DMARC should all say PASS and the authenticated domain should be the one in EMAIL_FROM.",
        });
      } catch (e) {
        return NextResponse.json(
          { ok: false, sent: false, to: testTo, error: e instanceof Error ? e.message : String(e) },
          { status: 502 },
        );
      }
    }

    // `?dryRun=1` reports exactly what a real run would do — how many people are
    // due, and whether the provider would accept the message — without sending.
    if (dryRun) {
      const cutoff = new Date(Date.now() - 48 * 3600000).toISOString();
      const countRow = (
        await db.execute(sql`
          SELECT
            count(*) FILTER (WHERE ${UNDELIVERABLE_SQL})::int AS due,
            count(*) FILTER (WHERE NOT (${UNDELIVERABLE_SQL}))::int AS undeliverable
          FROM users u
          WHERE u.created_at < ${cutoff}::timestamptz
            AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
            AND NOT EXISTS (
              SELECT 1 FROM weekly_digest_sends d
              WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${isoWeekKey(new Date())}
            )
        `)
      ).rows[0] as unknown as { due: number; undeliverable: number };

      const provider = await checkProvider();
      return NextResponse.json({
        ok: provider.keyValid === true && provider.canSend === true && provider.senderVerified !== false,
        dryRun: true,
        week: isoWeekKey(new Date()),
        accountsDue: countRow?.due ?? 0,
        excludedUndeliverable: countRow?.undeliverable ?? 0,
        provider,
      });
    }

    // Admins are included. The owner's own account is the only admin, and
    // excluding it meant the one person who could see the product working was
    // the one person never sent it. A bad address is already caught by
    // UNDELIVERABLE_SQL, which is the correct test - not the role flag.
    const now = new Date();
    const weekKey = isoWeekKey(now);
    const newAccountCutoff = new Date(now.getTime() - 48 * 3600000);

    const rows = (
      await db.execute(sql`
        SELECT u.id, u.name, u.email
        FROM users u
        WHERE u.created_at < ${newAccountCutoff.toISOString()}::timestamptz
          AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
          AND NOT EXISTS (
            SELECT 1 FROM weekly_digest_sends d
            WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${weekKey}
          )
          AND ${UNDELIVERABLE_SQL}
        ORDER BY u.created_at ASC
        LIMIT ${MAX_PER_RUN}
      `)
    ).rows as unknown as Row[];

    const batchStartedAt = new Date();
    const accepted: { id: string; email: string }[] = [];
    const errors: string[] = [];

    const pace = makePacer(MIN_GAP_MS);
    // Set when the provider reports the day's allowance is gone. Retrying the
    // rest of the batch would only produce a wall of identical failures.
    let quotaHalted: string | null = null;

    await mapLimit(rows, CONCURRENCY, async (u) => {
      if (quotaHalted) return;
      try {
        const { subject, html, text } = weeklyDigestEmail({ userId: u.id, name: u.name });

        await pace();
        await sendEmail(u.email, subject, html, {
          unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined,
          text,
        });

        // The email is sent; whether the mail app shows it in Primary or files
        // it under Promotions is out of our hands, and only Primary raises a
        // notification. A device subscription is the one channel where the
        // alert is ours to deliver, so ring it here, next to the send, and let
        // it fail silently - a notification must never break the email.
        if (isPushConfigured()) {
          await pushToUser(u.id, {
            title: "Your NurseGrid update is ready",
            body: "This week's new questions and where your access stands — open the app.",
            url: "/dashboard",
          }).catch(() => {});
        }

        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);

        accepted.push({ id: u.id, email: u.email });
      } catch (e) {
        const message = e instanceof Error ? e.message : "send failed";
        if (/daily_quota|monthly_quota/i.test(message)) quotaHalted = message;
        errors.push(`digest:${u.id}: ${message}`);
      }
    });

    // "accepted" is what we know for certain; "delivered" is what the provider
    // confirms. Anything rejected is un-marked so it is retried.
    const verdict = await reconcileBatch(batchStartedAt, accepted, weekKey);

    // Write down what happened, so the health check has something to read.
    // Deliberately after the reconcile: the record describes the final state.
    await recordDigestRun({
      periodKey: weekKey,
      accepted: accepted.length,
      failed: errors.length,
      quotaHalted,
      notes: verdict.checked
        ? `reconciled: delivered ${verdict.delivered}, rejected ${verdict.rejected}, unconfirmed ${verdict.unconfirmed}`
        : `not reconciled: ${verdict.reason ?? "no event log access"}`,
    });
    if (quotaHalted) {
      await recordEvent("digest_quota_halted", quotaHalted);
    }

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
      bounced: verdict.bounced ?? null,
      rolledBack: verdict.rolledBack,
      verification: verdict.checked
        ? verdict.rejected > 0 || verdict.unconfirmed > 0
          ? `provider rejected ${verdict.rejected} and left ${verdict.unconfirmed} unconfirmed; ${verdict.rolledBack} returned to the due list — ${verdict.reason ?? "no reason given"}`
          : `all ${verdict.delivered} confirmed delivered`
        : `not verified — ${verdict.reason ?? "no event log access"}`,
      batchLimit: MAX_PER_RUN,
      freePlanDailyCap: FREE_PLAN_DAILY_CAP,
      reservedForTransactional: RESERVED_FOR_TRANSACTIONAL,
      // Present only when the provider cut the batch short.
      quotaHalted,
      moreQueuedForTomorrow: rows.length === MAX_PER_RUN || Boolean(quotaHalted),
      errors: errors.slice(0, 5),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Weekly email job failed" }, { status: 500 });
  }
}
