import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { and, eq, isNull } from "drizzle-orm";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { signinTokens, users } from "@/db/schema";

/**
 * Passwordless sign-in.
 *
 * The most common support message this product receives is "I can't log in",
 * and nearly every one of them is really "I don't know my password". A student
 * chooses one at signup, months later, on a phone they may no longer have, and
 * then never types it again until a session expires.
 *
 * Rather than make password recovery better, this removes the password from the
 * path: enter an address, receive a link, click it, and you are in. It reuses
 * the same trust the reset flow already relies on - control of the mailbox -
 * without ever asking somebody to invent and remember a secret.
 *
 * Deliberately separate from reset tokens so the two purposes cannot be
 * confused: a sign-in link that leaked would grant a session, and should never
 * be interchangeable with a link that changes the password.
 */

const TTL_MINUTES = 30;
const COOLDOWN_SECONDS = 20;

let tableEnsured = false;

/**
 * Create the table on first use, like the other runtime tables here
 * (weekly_digest_sends, email_bounces, verified_phones). The drizzle schema
 * declares it so the queries type-check; nothing runs a migration at deploy.
 */
async function ensureTable() {
  if (tableEnsured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "signin_tokens" (
      "token_hash" text PRIMARY KEY,
      "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
      "expires_at" timestamptz NOT NULL,
      "used_at" timestamptz,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`CREATE INDEX IF NOT EXISTS "signin_tokens_user_idx" ON "signin_tokens" ("user_id")`);
  tableEnsured = true;
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export const SIGNIN_TTL_MINUTES = TTL_MINUTES;

export function signInUrl(appUrl: string, token: string): string {
  return `${appUrl.replace(/\/$/, "")}/signin?t=${token}`;
}

/**
 * Issue a sign-in token for an address, if it belongs to an account.
 * Returns null for an unknown address so the caller can answer identically.
 */
export async function issueSignInToken(email: string): Promise<{ token: string; name: string } | null> {
  await ensureTable();
  const rows = await db
    .select({ id: users.id, name: users.name })
    .from(users)
    .where(sql`lower(${users.email}) = ${email.trim().toLowerCase()}`)
    .limit(1);

  const user = rows[0];
  if (!user) return null;

  // One live link per account, and not more often than the cooldown - the
  // endpoint is public, so without this it is a way to post mail on demand.
  const recent = await db.execute(sql`
    SELECT 1 FROM signin_tokens
     WHERE user_id = ${user.id}
       AND created_at > now() - (${COOLDOWN_SECONDS} || ' seconds')::interval
     LIMIT 1
  `);
  if (recent.rows.length > 0) return null;

  await db.delete(signinTokens).where(eq(signinTokens.userId, user.id));

  const token = randomBytes(32).toString("hex");
  await db.insert(signinTokens).values({
    tokenHash: hashToken(token),
    userId: user.id,
    expiresAt: new Date(Date.now() + TTL_MINUTES * 60 * 1000),
  });

  return { token, name: user.name };
}

export type SignInLookup =
  | { state: "pending"; userId: string }
  | { state: "invalid" }
  | { state: "expired" };

/** Read-only check, so the landing page can render without consuming a token. */
export async function lookupSignInToken(token: string): Promise<SignInLookup> {
  await ensureTable();
  if (!/^[a-f0-9]{64}$/.test(token)) return { state: "invalid" };

  const rows = await db
    .select({ userId: signinTokens.userId, expiresAt: signinTokens.expiresAt })
    .from(signinTokens)
    .where(and(eq(signinTokens.tokenHash, hashToken(token)), isNull(signinTokens.usedAt)))
    .limit(1);

  const row = rows[0];
  if (!row) return { state: "invalid" };
  if (row.expiresAt.getTime() < Date.now()) return { state: "expired" };
  return { state: "pending", userId: row.userId };
}

/** Consume the token. Single use: the row is deleted whatever happens. */
export async function consumeSignInToken(token: string): Promise<{ ok: true; userId: string } | { ok: false; reason: "invalid" | "expired" }> {
  const found = await lookupSignInToken(token);
  if (found.state === "invalid") return { ok: false, reason: "invalid" };
  if (found.state === "expired") {
    await db.delete(signinTokens).where(eq(signinTokens.tokenHash, hashToken(token)));
    return { ok: false, reason: "expired" };
  }
  await db.delete(signinTokens).where(eq(signinTokens.tokenHash, hashToken(token)));
  return { ok: true, userId: found.userId };
}
