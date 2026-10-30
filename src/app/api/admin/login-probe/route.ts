import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { createHash } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// TEMPORARY, READ-ONLY. Deleted in the commit that follows.
// Counts the ways an account can be unable to log in, without naming anybody.
const TOKEN_SHA256 = "eb78d7f74cb03062cbbfb59a4d827dea6ac6833d74c29ad94ea70fd98299dc23";

function authorized(req: NextRequest): boolean {
  const header = req.headers.get("authorization") || "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!provided) return false;
  return createHash("sha256").update(provided, "utf8").digest("hex") === TOKEN_SHA256;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: "no database" }, { status: 500 });

  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  const q = async (sql: string) => (await client.query(sql)).rows;

  try {
    const out: Record<string, unknown> = { now: new Date().toISOString() };

    out.users = await q(`
      SELECT count(*)::int AS total,
             count(*) FILTER (WHERE is_admin)::int AS admins,
             count(*) FILTER (WHERE email <> lower(email))::int AS mixed_case_email,
             count(*) FILTER (WHERE password_hash NOT LIKE '$2%')::int AS non_bcrypt_hash,
             count(*) FILTER (WHERE security_question IS NULL)::int AS no_security_question,
             count(*) FILTER (WHERE security_question IS NULL AND password_hash NOT LIKE '$2%')::int AS no_question_and_bad_hash
        FROM users`);

    // Who has NO working recovery path: no question, and an address that is
    // either on a dead domain or already known to bounce.
    out.noRecovery = await q(`
      SELECT count(*)::int AS n FROM users u
       WHERE u.security_question IS NULL
         AND (
           lower(split_part(u.email,'@',2)) IN ('example.com','nursegrid.app','test','invalid','localhost')
           OR EXISTS (SELECT 1 FROM email_bounces b WHERE lower(b.email) = lower(u.email))
         )`);

    out.resetTable = await q(`
      SELECT to_regclass('public.password_reset_tokens') IS NOT NULL AS present`);
    out.resetTokens = await q(`
      SELECT count(*)::int AS total,
             count(*) FILTER (WHERE used_at IS NULL AND expires_at > now())::int AS live
        FROM password_reset_tokens`);

    out.sessions = await q(`
      SELECT count(*)::int AS active, count(DISTINCT user_id)::int AS users
        FROM sessions WHERE expires_at > now()`);

    // Is anybody actually getting in? 48h of sign-ins, by success shape.
    out.loginEvents = await q(`
      SELECT to_regclass('public.login_events') IS NOT NULL AS present`);
    out.recentLogins = await q(`
      SELECT count(*)::int AS n, count(DISTINCT user_id)::int AS users,
             max(created_at) AS last
        FROM login_events WHERE created_at > now() - interval '48 hours'`);

    return NextResponse.json(out);
  } finally {
    await client.end();
  }
}
