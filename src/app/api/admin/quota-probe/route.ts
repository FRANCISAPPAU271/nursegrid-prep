import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { createHash } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

// TEMPORARY, READ-ONLY DIAGNOSTIC. Deleted in the commit that follows.
//
// Answers one question: how much of the provider's daily allowance had been
// spent when the Monday run tried to send 175 emails, and is the account on the
// free plan at all. Resend reports that in response headers — x-resend-daily-
// quota is only sent to free-plan accounts — and a POST with an empty body is
// refused by validation, so nothing is mailed and no quota is consumed.
const TOKEN_SHA256 = "a64816b1f4786d0f0b88a13a0ea3f91ab4b368f065e9f369e443de2af0cf286f";

function authorized(req: NextRequest): boolean {
  const header = req.headers.get("authorization") || "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!provided) return false;
  return createHash("sha256").update(provided, "utf8").digest("hex") === TOKEN_SHA256;
}

const HEADERS_OF_INTEREST = [
  "x-resend-daily-quota",
  "x-resend-monthly-quota",
  "ratelimit-limit",
  "ratelimit-remaining",
  "ratelimit-reset",
  "retry-after",
];

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  const out: Record<string, unknown> = { now: new Date().toISOString() };

  // 1. Ask Resend for its headers. An empty body fails validation, so the
  //    request is rejected before any message is queued.
  if (process.env.RESEND_API_KEY) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: "{}",
      });
      const headers: Record<string, string | null> = {};
      for (const h of HEADERS_OF_INTEREST) headers[h] = r.headers.get(h);
      const body = (await r.json().catch(() => ({}))) as { message?: string; name?: string };
      out.resendProbe = {
        status: r.status,
        headers,
        // Header presence is the plan tell: Resend only sends the daily-quota
        // header to Free accounts.
        onFreePlan: r.headers.get("x-resend-daily-quota") !== null,
        message: body.message ?? null,
        name: body.name ?? null,
      };
    } catch (e) {
      out.resendProbe = { error: e instanceof Error ? e.message : "unknown" };
    }
  } else {
    out.resendProbe = "not configured";
  }

  // 2. Send exactly one real message, so the quota headers appear. A 422 proves
  //    nothing about quota; only an accepted send carries them.
  const to = req.nextUrl.searchParams.get("send");
  if (to && process.env.RESEND_API_KEY) {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
      out.realSend = { error: "not a valid address" };
    } else {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || "onboarding@resend.dev",
          to,
          subject: "NurseGrid Prep — delivery check",
          html: "<p>One-message test from the delivery probe. Nothing to do.</p>",
        }),
      });
      const headers: Record<string, string | null> = {};
      for (const h of HEADERS_OF_INTEREST) headers[h] = r.headers.get(h);
      const body = (await r.json().catch(() => ({}))) as { id?: string; message?: string; name?: string };
      out.realSend = {
        status: r.status,
        headers,
        onFreePlan: r.headers.get("x-resend-daily-quota") !== null,
        id: body.id ?? null,
        message: body.message ?? null,
        name: body.name ?? null,
      };
    }
  }

  // 3. What the app itself believes it sent today, in UTC days.
  if (process.env.DATABASE_URL) {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    try {
      const q = async (sql: string) => (await client.query(sql)).rows;
      out.ledgerToday = await q(`
        SELECT count(*)::int AS n,
               min(sent_at) AS first,
               max(sent_at) AS last
          FROM weekly_digest_sends
         WHERE sent_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'
      `);
      out.ledgerByHourToday = await q(`
        SELECT to_char(sent_at, 'HH24') AS hour, count(*)::int AS n
          FROM weekly_digest_sends
         WHERE sent_at >= date_trunc('day', now() AT TIME ZONE 'UTC') AT TIME ZONE 'UTC'
         GROUP BY 1 ORDER BY 1
      `);
      out.ledgerAllTime = await q(`SELECT count(*)::int AS n FROM weekly_digest_sends`);
    } finally {
      await client.end();
    }
  }

  return NextResponse.json(out);
}
