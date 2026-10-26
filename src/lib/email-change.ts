import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { sql } from "drizzle-orm";
import { db } from "@/db";

/**
 * Changing the address on an account.
 *
 * Until now this was impossible: `PATCH /api/me` accepts a name, a school and a
 * cohort, and the settings page renders the email read-only. An account whose
 * address was mistyped at signup — `@nursegrid.app`, a domain that does not
 * resolve at all — could never be corrected, and so could never receive a
 * password reset, a receipt or the weekly email. That is a support dead end for
 * the student and a silent dead address for the sender.
 *
 * The rule that makes it safe: **the change only takes effect when the new
 * address proves it can receive mail.** A signed, single-use, expiring token is
 * mailed to the address being claimed, and the swap happens only when that
 * token comes back. Nobody can redirect another account's mail to themselves,
 * and a typo in the new address fails harmlessly instead of starting a second
 * dead address.
 *
 * State lives in `email_changes`, created on demand with CREATE TABLE IF NOT
 * EXISTS — the same convention the weekly job and the Resend webhook already
 * use, so the deploy needs no migration step. One row per user (primary key),
 * so asking again simply replaces the previous request.
 */

const TTL_MINUTES = 60;
/** Minimum gap between requests, so the endpoint cannot be used to post mail to
 *  arbitrary addresses in a loop. */
const COOLDOWN_SECONDS = 60;

let tablesEnsured = false;

async function ensureTable() {
  if (tablesEnsured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "email_changes" (
      "user_id" text PRIMARY KEY REFERENCES "users"("id") ON DELETE CASCADE,
      "new_email" text NOT NULL,
      "token_hash" text NOT NULL,
      "expires_at" timestamptz NOT NULL,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "email_changes_token_idx" ON "email_changes" ("token_hash")
  `);
  tablesEnsured = true;
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export type RequestResult =
  | { ok: true; newEmail: string; expiresAt: Date; token: string }
  | { ok: false; reason: "same" | "taken" | "cooldown"; retryAfterSeconds?: number };

/**
 * Create (or replace) a pending change for one user.
 *
 * The token is returned in clear exactly once, to be mailed to the address it
 * proves; only its SHA-256 is stored, so a leaked database row cannot be turned
 * into a working link.
 */
export async function requestEmailChange(userId: string, currentEmail: string, newEmail: string): Promise<RequestResult> {
  await ensureTable();

  const target = newEmail.trim().toLowerCase();
  if (target === currentEmail.trim().toLowerCase()) return { ok: false, reason: "same" };

  // Another account already owns this address. Checked before mailing anything,
  // and checked again at confirm time, because the window is an hour wide.
  const taken = await db.execute(sql`
    SELECT 1 FROM users WHERE lower(email) = ${target} AND id <> ${userId} LIMIT 1
  `);
  if (taken.rows.length > 0) return { ok: false, reason: "taken" };

  const [previous] = (
    await db.execute(sql`
      SELECT extract(epoch FROM (now() - created_at))::int AS age
        FROM email_changes WHERE user_id = ${userId}
    `)
  ).rows as unknown as { age: number }[];
  if (previous && previous.age < COOLDOWN_SECONDS) {
    return { ok: false, reason: "cooldown", retryAfterSeconds: COOLDOWN_SECONDS - previous.age };
  }

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + TTL_MINUTES * 60_000);

  await db.execute(sql`
    INSERT INTO email_changes (user_id, new_email, token_hash, expires_at)
    VALUES (${userId}, ${target}, ${hashToken(token)}, ${expiresAt})
    ON CONFLICT (user_id) DO UPDATE
      SET new_email = excluded.new_email,
          token_hash = excluded.token_hash,
          expires_at = excluded.expires_at,
          created_at = now()
  `);

  return { ok: true, newEmail: target, expiresAt, token };
}

export type LookupResult =
  | { state: "pending"; userId: string; newEmail: string }
  | { state: "invalid" }
  | { state: "expired" };

/** Read-only: does this token still describe a change waiting to happen? */
export async function lookupEmailChange(token: string): Promise<LookupResult> {
  if (!/^[a-f0-9]{64}$/.test(token)) return { state: "invalid" };
  await ensureTable();

  const rows = (
    await db.execute(sql`
      SELECT user_id, new_email, expires_at FROM email_changes WHERE token_hash = ${hashToken(token)}
    `)
  ).rows as unknown as { user_id: string; new_email: string; expires_at: string }[];

  const row = rows[0];
  if (!row) return { state: "invalid" };
  if (new Date(row.expires_at).getTime() < Date.now()) return { state: "expired" };
  return { state: "pending", userId: row.user_id, newEmail: row.new_email };
}

export type ConfirmResult =
  | { ok: true; newEmail: string }
  | { ok: false; reason: "invalid" | "expired" | "taken" };

/**
 * Complete the change. Single use: the row is deleted whatever happens, so a
 * link cannot be replayed, and a failed attempt cannot be retried against a
 * different account state.
 */
export async function confirmEmailChange(token: string): Promise<ConfirmResult> {
  const found = await lookupEmailChange(token);
  if (found.state === "invalid") return { ok: false, reason: "invalid" };
  if (found.state === "expired") {
    await db.execute(sql`DELETE FROM email_changes WHERE token_hash = ${hashToken(token)}`);
    return { ok: false, reason: "expired" };
  }

  // The hour between asking and confirming leaves room for someone else to
  // claim the address, so ownership is re-checked inside the same statement
  // that performs the swap.
  const swapped = await db.execute(sql`
    UPDATE users SET email = ${found.newEmail}
     WHERE id = ${found.userId}
       AND NOT EXISTS (SELECT 1 FROM users u2 WHERE lower(u2.email) = ${found.newEmail} AND u2.id <> ${found.userId})
    RETURNING email
  `);

  await db.execute(sql`DELETE FROM email_changes WHERE token_hash = ${hashToken(token)}`);

  if (swapped.rows.length === 0) return { ok: false, reason: "taken" };

  // The new address has just proved it is live by clicking the link, so any
  // earlier bounce recorded against it is stale and would otherwise keep a real
  // student out of every future send.
  await db.execute(sql`DELETE FROM email_bounces WHERE lower(email) = ${found.newEmail}`);

  // An unsubscribe is never cleared. That was a decision about receiving mail,
  // and moving address does not retract it.
  return { ok: true, newEmail: found.newEmail };
}
