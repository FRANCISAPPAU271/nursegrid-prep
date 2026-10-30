import "server-only";
import { sql } from "drizzle-orm";
import { db } from "@/db";

/**
 * Brute-force protection for the login endpoint.
 *
 * There was none: `grep` for rate limiting across the auth routes returned
 * nothing, so a password could be guessed at whatever rate the network allowed.
 * With 201 accounts and a student's name, cohort and school often visible on
 * campus, that is a realistic attack rather than a theoretical one.
 *
 * A fixed window is deliberate. It is trivially understood, it costs one row per
 * bucket, and its failure mode — refusing one extra attempt in a fifteen-minute
 * window — is far safer than the alternative of no limit at all.
 *
 * Nothing here ever blocks a *successful* login, and every function fails open:
 * if the throttle table cannot be read, the login proceeds. Locking every
 * customer out because an internal table is unavailable would be a worse outage
 * than the one this protects against.
 */

const WINDOW_MINUTES = 15;
const MAX_FAILURES_PER_EMAIL = 10;
/**
 * Deliberately loose, and nowhere near the per-account limit.
 *
 * Ghanaian mobile data is carrier-grade NAT: MTN and Telecel place thousands of
 * subscribers behind one public address, and a campus Wi-Fi does the same to
 * everyone on it. A strict per-IP cap therefore does not count attackers, it
 * counts *students* — thirty mistyped passwords spread across a whole campus in
 * fifteen minutes would have refused the correct password for everybody sharing
 * that address, which is a self-inflicted outage and looks exactly like "I
 * can't log in".
 *
 * The precise control is the per-address bucket above. This one exists only to
 * stop a single source hammering the endpoint, so it is set high enough that
 * normal shared-IP traffic cannot reach it and low enough that a runaway script
 * still trips it.
 */
const MAX_FAILURES_PER_IP = 300;

let ensured = false;

async function ensureTable() {
  if (ensured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "auth_throttle" (
      "bucket" text PRIMARY KEY,
      "failures" integer NOT NULL DEFAULT 0,
      "window_start" timestamptz NOT NULL DEFAULT now()
    )
  `);
  ensured = true;
}

export type LoginVerdict =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

/** Read one bucket, treating an expired window as empty. */
async function readBucket(bucket: string): Promise<{ failures: number; ageSeconds: number }> {
  const rows = (
    await db.execute(sql`
      SELECT failures, extract(epoch FROM (now() - window_start))::int AS age
        FROM auth_throttle WHERE bucket = ${bucket}
    `)
  ).rows as unknown as { failures: number; age: number }[];
  const row = rows[0];
  if (!row || row.age >= WINDOW_MINUTES * 60) return { failures: 0, ageSeconds: 0 };
  return { failures: row.failures, ageSeconds: row.age };
}

export async function precheckLogin(email: string, ip: string): Promise<LoginVerdict> {
  try {
    await ensureTable();
    const key = email.trim().toLowerCase();

    const [byEmail, byIp] = await Promise.all([
      readBucket(`email:${key}`),
      readBucket(`ip:${ip}`),
    ]);

    const overEmail = byEmail.failures >= MAX_FAILURES_PER_EMAIL;
    const overIp = byIp.failures >= MAX_FAILURES_PER_IP;
    if (!overEmail && !overIp) return { allowed: true };

    const age = Math.max(overEmail ? byEmail.ageSeconds : 0, overIp ? byIp.ageSeconds : 0);
    return { allowed: false, retryAfterSeconds: Math.max(60, WINDOW_MINUTES * 60 - age) };
  } catch (error) {
    console.error("login throttle unavailable; allowing the attempt", error);
    return { allowed: true };
  }
}

async function bump(bucket: string) {
  await db.execute(sql`
    INSERT INTO auth_throttle (bucket, failures, window_start)
    VALUES (${bucket}, 1, now())
    ON CONFLICT (bucket) DO UPDATE SET
      failures = CASE
        WHEN auth_throttle.window_start < now() - (${WINDOW_MINUTES} || ' minutes')::interval
        THEN 1 ELSE auth_throttle.failures + 1 END,
      window_start = CASE
        WHEN auth_throttle.window_start < now() - (${WINDOW_MINUTES} || ' minutes')::interval
        THEN now() ELSE auth_throttle.window_start END
  `);
}

export async function recordLoginFailure(email: string, ip: string): Promise<void> {
  try {
    await ensureTable();
    await bump(`email:${email.trim().toLowerCase()}`);
    await bump(`ip:${ip}`);
    // Housekeeping: the table only has to be accurate for one window.
    await db.execute(sql`DELETE FROM auth_throttle WHERE window_start < now() - interval '1 day'`);
  } catch (error) {
    console.error("login failure not recorded", error);
  }
}

/** A correct password clears the email bucket: the owner proved who they are. */
export async function clearLoginFailures(email: string): Promise<void> {
  try {
    await ensureTable();
    await db.execute(sql`DELETE FROM auth_throttle WHERE bucket = ${`email:${email.trim().toLowerCase()}`}`);
  } catch (error) {
    console.error("login failures not cleared", error);
  }
}
