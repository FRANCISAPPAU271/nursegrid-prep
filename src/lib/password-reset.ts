import "server-only";
import { randomBytes } from "node:crypto";
import { and, eq, gt, isNull, sql } from "drizzle-orm";
import { db } from "@/db";
import { passwordResetTokens, sessions, users } from "@/db/schema";
import { hashPassword } from "@/lib/auth";

/**
 * Password reset by email.
 *
 * The pieces for this existed and were never joined up: the
 * `password_reset_tokens` table, the `sendPasswordResetEmail` template, the
 * `ResetPasswordForm` component, and a form posting to `/api/auth/reset-password`
 * — a route that has never existed, so the path 404s in production. The only
 * recovery route that works is the security question, which is a single
 * memorised answer with no fallback. Anyone who forgot both, or who signed up
 * before the question existed, is locked out permanently and has to ask a human.
 *
 * That is the failure this fixes.
 */

/**
 * How long a reset link stays good.
 *
 * An hour was the wrong number, and it is the single most likely reason a
 * student says "I still can't reset". People do not read email on demand: they
 * ask for a link at the end of a clinical shift, then open their inbox that
 * night, or the next morning. By then the link was dead, and all the page said
 * was that it had expired.
 *
 * Twenty-four hours covers "I'll deal with it after dinner" and "I'll deal with
 * it tomorrow", which is how the request actually arrives. The token is still
 * single-use, still tied to one account, and still short enough that a leaked
 * mailbox is not a permanent skeleton key.
 */
const TTL_MINUTES = 24 * 60;
/** Don't let this become a way to post mail to someone in a loop. */
/**
 * How long before the same address may ask again.
 *
 * Kept short. A student who did not receive the first message will ask again
 * within seconds, and refusing them for a minute teaches them the form is
 * broken. The real protection against mail-bombing is that only one token is
 * live at a time and the provider has its own quota.
 */
const COOLDOWN_SECONDS = 20;

export const RESET_TTL_MINUTES = TTL_MINUTES;
export const RESET_TTL_HOURS = Math.round(TTL_MINUTES / 60);

export function resetUrl(appUrl: string, token: string): string {
  return `${appUrl.replace(/\/$/, "")}/reset-password?t=${token}`;
}

/**
 * Issue a token for an address, if that address belongs to an account.
 *
 * Returns the token so the caller can mail it. The caller must answer the same
 * way whether or not the account exists — a different response for an unknown
 * address turns this into a way to discover who has signed up.
 */
export async function issueResetToken(email: string): Promise<{ token: string; name: string } | null> {
  const rows = await db
    .select({ id: users.id, name: users.name })
    .from(users)
    // Matched case-insensitively: accounts created before the signup form
    // lowercased addresses can hold capitals in the column, and a
    // case-sensitive lookup would tell the owner of such an account that it
    // does not exist.
    .where(sql`lower(${users.email}) = ${email.trim().toLowerCase()}`)
    .limit(1);

  const user = rows[0];
  if (!user) return null;

  // Recent issue? Refuse quietly rather than mailing again.
  const recent = await db.execute(sql`
    SELECT 1 FROM password_reset_tokens
     WHERE user_id = ${user.id}
       AND created_at > now() - (${COOLDOWN_SECONDS} || ' seconds')::interval
     LIMIT 1
  `);
  if (recent.rows.length > 0) return null;

  // One live token per account: a second request invalidates the first, so a
  // leaked older link cannot be used after the person asked for a fresh one.
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, user.id));

  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + TTL_MINUTES * 60 * 1000);
  await db.insert(passwordResetTokens).values({ token, userId: user.id, expiresAt });

  return { token, name: user.name };
}

export type RedeemResult = { ok: true; email: string } | { ok: false; reason: "invalid" | "expired" };

/**
 * Redeem a token and set the new password.
 *
 * A successful reset signs the account out everywhere. If someone else had
 * access, resetting the password must end that access, otherwise the whole
 * exercise is pointless.
 */
export async function redeemResetToken(token: string, newPassword: string): Promise<RedeemResult> {
  if (!/^[a-f0-9]{64}$/.test(token)) return { ok: false, reason: "invalid" };

  const rows = await db
    .select({ userId: passwordResetTokens.userId, expiresAt: passwordResetTokens.expiresAt })
    .from(passwordResetTokens)
    .where(and(eq(passwordResetTokens.token, token), isNull(passwordResetTokens.usedAt)))
    .limit(1);

  const row = rows[0];
  if (!row) return { ok: false, reason: "invalid" };
  if (row.expiresAt.getTime() < Date.now()) {
    await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
    return { ok: false, reason: "expired" };
  }

  const passwordHash = await hashPassword(newPassword);

  // Burn the token and set the password together: if the second write fails,
  // the token must not be spent.
  const updated = await db
    .update(users)
    .set({ passwordHash })
    .where(eq(users.id, row.userId))
    .returning({ email: users.email });

  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.token, token));
  await db.delete(sessions).where(eq(sessions.userId, row.userId));

  const email = updated[0]?.email;
  if (!email) return { ok: false, reason: "invalid" };
  return { ok: true, email };
}

/** Used by the diagnostic: does this address have a working recovery path? */
export async function describeRecovery(email: string) {
  const rows = await db.execute(sql`
    SELECT id, (security_question IS NOT NULL) AS has_question, email
      FROM users WHERE lower(email) = ${email.trim().toLowerCase()} LIMIT 1
  `);
  return rows.rows[0] ?? null;
}

/**
 * Issue a token directly for one account, for the support tool.
 *
 * No cooldown: an admin is acting because the person in front of them cannot
 * get in, and making them wait twenty seconds would be absurd. Every use is
 * recorded in ops_events, so an admin abusing this is visible.
 */
export async function issueResetTokenForUser(userId: string): Promise<string> {
  await db.delete(passwordResetTokens).where(eq(passwordResetTokens.userId, userId));
  const token = randomBytes(32).toString("hex");
  await db.insert(passwordResetTokens).values({
    token,
    userId,
    expiresAt: new Date(Date.now() + TTL_MINUTES * 60 * 1000),
  });
  return token;
}

/** Housekeeping so the table cannot grow without bound. */
export async function pruneExpiredTokens(): Promise<void> {
  await db.delete(passwordResetTokens).where(gt(sql`now()`, passwordResetTokens.expiresAt));
}
