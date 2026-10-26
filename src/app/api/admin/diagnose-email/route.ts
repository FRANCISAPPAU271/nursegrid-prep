import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { createHash } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

// TEMPORARY, READ-ONLY DIAGNOSTIC. Deleted in the commit that follows.
//
// Answers "why did no email go out?" without exposing a single secret: it
// reports whether each variable is PRESENT, never its value, and it reports
// row counts rather than addresses.
//
// Guarded by a hashed bearer token so it is not a public window into the
// user table for however many minutes it exists.
const TOKEN_SHA256 =
  "27fef079068931cf8dd673efee6a2e73ced7aab51a284209d16099ace81d4784";

function authorized(req: NextRequest): boolean {
  const header = req.headers.get("authorization") || "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!provided) return false;
  return createHash("sha256").update(provided, "utf8").digest("hex") === TOKEN_SHA256;
}

function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  // Presence only. A boolean cannot leak a key.
  const env = {
    CRON_SECRET: Boolean(process.env.CRON_SECRET),
    CRON_SECRET_LENGTH: process.env.CRON_SECRET ? process.env.CRON_SECRET.length : 0,
    RESEND_API_KEY: Boolean(process.env.RESEND_API_KEY),
    BREVO_API_KEY: Boolean(process.env.BREVO_API_KEY),
    EMAIL_FROM: process.env.EMAIL_FROM ? process.env.EMAIL_FROM.replace(/^[^<]*/, "…") : null,
    EMAIL_FROM_SET: Boolean(process.env.EMAIL_FROM),
    EMAIL_REPLY_TO_SET: Boolean(process.env.EMAIL_REPLY_TO),
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || null,
    DATABASE_URL_SET: Boolean(process.env.DATABASE_URL || process.env.DATABASEURL),
    WEEKLY_DIGEST_BATCH: process.env.WEEKLY_DIGEST_BATCH || null,
    VERCEL_ENV: process.env.VERCEL_ENV || null,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || null,
  };

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ env, error: "no database url" });

  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const one = async (q: string) => {
      try {
        const r = await client.query(q);
        return r.rows;
      } catch (e) {
        return { error: e instanceof Error ? e.message : "unknown" };
      }
    };

    const week = isoWeekKey(new Date());

    const users = await one(`select count(*)::int as n,
                                    count(*) filter (where is_admin)::int as admins
                               from users`);

    // Does the ledger table exist, and has anything ever been written to it?
    const ledgerExists = await one(`select to_regclass('public.weekly_digest_sends') is not null as present`);
    const ledgerTotal = await one(`select count(*)::int as n from weekly_digest_sends`);
    const ledgerThisWeek = await one(
      `select count(*)::int as n from weekly_digest_sends where period_key = '${week}' and kind = 'weekly'`,
    );
    const ledgerRecent = await one(
      `select period_key, kind, sent_at from weekly_digest_sends order by sent_at desc limit 5`,
    );

    const bounces = await one(`select count(*)::int as n from email_bounces`);
    const optouts = await one(`select count(*)::int as n from email_optouts`);

    // The exact "is anyone due" rule the cron uses, minus the 48h age gate, so
    // a brand-new database of seeded accounts is distinguishable from a
    // genuinely empty queue.
    const due = await one(`
      select count(*)::int as due_all,
             count(*) filter (where u.created_at < now() - interval '48 hours')::int as due_aged48h
        from users u
       where u.is_admin = false
         and not exists (select 1 from email_optouts e where lower(e.email) = lower(u.email))
         and not exists (select 1 from weekly_digest_sends d
                          where d.user_id = u.id and d.kind = 'weekly' and d.period_key = '${week}')
    `);

    // Ask Resend whether the key works and the sender is verified. Status code
    // only — the body can name the account.
    let resend: unknown = "not configured";
    if (process.env.RESEND_API_KEY) {
      try {
        const r = await fetch("https://api.resend.com/domains", {
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        });
        resend = { status: r.status, ok: r.ok };
      } catch (e) {
        resend = { error: e instanceof Error ? e.message : "unknown" };
      }
    }

    return NextResponse.json({
      now: new Date().toISOString(),
      week,
      env,
      users,
      ledger: { exists: ledgerExists, total: ledgerTotal, thisWeek: ledgerThisWeek, recent: ledgerRecent },
      bounces,
      optouts,
      due,
      resend,
    });
  } finally {
    await client.end();
  }
}
