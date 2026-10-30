import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { sessions, users, subscriptions } from "@/db/schema";
import { eq, inArray, lt, sql } from "drizzle-orm";
import { isEmailConfigured, newDeviceLoginEmail, sendEmail } from "@/lib/email";

// Hosts this app is served from, so the session is not stranded on one of them.
// Production uses all three of apex, www. and app.; a host-only cookie set on
// one is invisible on the others, which reads to the customer as being logged
// out — typically the moment they return from a payment page and land on the
// canonical host instead of the one they started on.
function sessionCookieDomain(): string | undefined {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) return undefined;
  try {
    const host = new URL(appUrl).hostname;
    if (!host.includes(".") || host === "localhost" || host === "127.0.0.1") return undefined;
    return `.${host.replace(/^www\./, "")}`;
  } catch {
    return undefined;
  }
}

export const SESSION_COOKIE = "nsm_session";

/**
 * How long a sign-in lasts.
 *
 * Thirty days was too short for how this product is actually used. A student
 * buys four months of access, opens the app on a phone, and then studies on and
 * off between clinical rotations. At thirty days the session lapses mid-course,
 * the app asks for a password chosen once at signup months earlier, and the
 * answer is usually "I don't remember it" — which the login endpoint can only
 * report as "Invalid email or password".
 *
 * That is not a login bug, but it is indistinguishable from one, and it arrives
 * in batches as each intake's sessions age out together. Ninety days covers a
 * full access period, so a customer who paid for four months is never asked to
 * prove themselves halfway through it.
 *
 * The trade-off is a shared phone: a longer session means a longer window for
 * the next person holding it. That is mitigated by the cookie being httpOnly and
 * sameSite, by the three-device cap in createSession, and by the fact that a
 * student who reports a lost phone can be signed out everywhere by resetting the
 * password.
 */
const SESSION_DAYS = 90;

// Prevents account/password sharing: only this many devices may be signed in
// at once per account. Logging in on a new device signs out the oldest
// session(s) beyond this limit.
//
// This was hardcoded to 1, which signed a paying customer out of their laptop
// every time they opened the app on their phone — the most common way a paid
// account "logs itself out". Three devices covers phone + laptop + tablet,
// which is normal use rather than sharing; it can be tightened by setting
// MAX_ACTIVE_SESSIONS in the environment.
const MAX_ACTIVE_SESSIONS = Math.max(
  1,
  Number.parseInt(process.env.MAX_ACTIVE_SESSIONS ?? "3", 10) || 3,
);

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  // bcrypt throws on a hash it cannot parse ("Invalid salt version"). If any
  // row ever holds a truncated or legacy value, that exception would escape the
  // login handler as a 500 - the user sees "Something went wrong" and cannot
  // sign in at all, which looks like an outage rather than a bad password.
  try {
    return await bcrypt.compare(password, hash);
  } catch {
    console.error("verifyPassword: stored hash is not a valid bcrypt hash");
    return false;
  }
}

export type SessionMeta = {
  userAgent?: string | null;
  ipAddress?: string | null;
};

export async function createSession(userId: string, meta: SessionMeta = {}) {
  const token = crypto.randomUUID() + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);

  // Enforce a maximum number of concurrent active sessions per account. This
  // is the core defense against two people sharing one password: signing in
  // on a new device automatically signs out the oldest device(s) beyond the
  // allowed limit, so only MAX_ACTIVE_SESSIONS people can ever be using the
  // account at the same time.
  const existing = await db
    .select({ token: sessions.token, createdAt: sessions.createdAt })
    .from(sessions)
    .where(eq(sessions.userId, userId));

  if (existing.length >= MAX_ACTIVE_SESSIONS) {
    const sorted = [...existing].sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    const toRemove = sorted.slice(0, existing.length - MAX_ACTIVE_SESSIONS + 1).map((s) => s.token);
    if (toRemove.length > 0) {
      await db.delete(sessions).where(inArray(sessions.token, toRemove));
    }
  }

  await db.insert(sessions).values({
    token,
    userId,
    expiresAt,
    userAgent: meta.userAgent ?? null,
    ipAddress: meta.ipAddress ?? null,
  });

  // Keep a short login history for account-sharing detection. This is
  // diagnostic only: if it fails, the customer must still be signed in.
  try {
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "login_events" (
        "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
        "user_id" text NOT NULL,
        "user_agent" text,
        "ip_address" text,
        "created_at" timestamptz NOT NULL DEFAULT now()
      )
    `);
    const recentSameDevice = await db.execute(sql`
      SELECT 1 FROM "login_events"
      WHERE "user_id" = ${userId}
        AND "user_agent" IS NOT DISTINCT FROM ${meta.userAgent ?? null}
      ORDER BY "created_at" DESC
      LIMIT 1
    `);
    await db.execute(sql`
      INSERT INTO "login_events" ("user_id", "user_agent", "ip_address")
      VALUES (${userId}, ${meta.userAgent ?? null}, ${meta.ipAddress ?? null})
    `);

    if (recentSameDevice.rows.length === 0 && isEmailConfigured()) {
      try {
        const userRows = await db.execute(sql`SELECT "name", "email" FROM "users" WHERE "id" = ${userId} LIMIT 1`);
        const recipient = userRows.rows[0] as { name?: string | null; email?: string | null } | undefined;
        if (recipient?.email) {
          const message = newDeviceLoginEmail(recipient.name ?? "", meta.userAgent ?? "a new device", meta.ipAddress);
          await sendEmail(recipient.email, message.subject, message.html);
        }
      } catch (error) {
        console.error("New-device login email failed", error);
      }
    }
  } catch (error) {
    console.error("Login history write failed; continuing", error);
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    domain: sessionCookieDomain(),
    path: "/",
    expires: expiresAt,
  });
  return token;
}

export async function destroySession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token) {
    await db.delete(sessions).where(eq(sessions.token, token));
  }
  // Clearing must target the same domain the cookie was set on, or the
  // browser keeps the cookie and "log out" silently does nothing.
  store.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    domain: sessionCookieDomain(),
    path: "/",
    maxAge: 0,
  });
}

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  school: string | null;
  cohort: string | null;
  isPremium: boolean;
  isAdmin: boolean;
  premiumSince: Date | null;
  premiumTrialEndsAt: Date | null;
  referralCode: string | null;
  createdAt: Date;
};

// How long after a paid period ends the account keeps working while a renewal
// settles. Covers late webhooks, clock skew between regions, and the window in
// which a customer is on the phone with support.
const ENTITLEMENT_GRACE_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Decide whether this user may study — without ever destroying the stored flag.
 *
 * This used to be inline and destructive: whenever no active subscription row
 * with a future period end could be found, it wrote `users.is_premium = false`.
 * Because it runs on every dashboard render, a single missing, cancelled or
 * momentarily unavailable row permanently stripped access from someone who had
 * paid, and the study gate then invited them to pay a second time. The buyer's
 * session looked fine; their entitlement had simply been deleted.
 *
 * Entitlement is now derived from evidence, not destroyed on the absence of it:
 *
 *   1. a running trial or an admin grants access;
 *   2. a live subscription grants access — and repairs a stored `false`;
 *   3. if the subscription table cannot be read, the stored flag is trusted;
 *   4. access is revoked only when a subscription row proves the last period
 *      ended more than the grace window ago;
 *   5. no subscription rows at all is treated as "no evidence", not as expiry,
 *      so legacy and manually-granted accounts keep working.
 */
async function resolveEntitlement(user: SessionUser): Promise<SessionUser> {
  if (user.isAdmin) return user;

  const now = Date.now();
  const trialActive = Boolean(user.premiumTrialEndsAt && user.premiumTrialEndsAt.getTime() > now);

  if (trialActive) {
    if (!user.isPremium) await healPremium(user);
    user.isPremium = true;
    return user;
  }

  let rows: { status: string; currentPeriodEnd: Date | null }[];
  try {
    rows = await db
      .select({ status: subscriptions.status, currentPeriodEnd: subscriptions.currentPeriodEnd })
      .from(subscriptions)
      .where(eq(subscriptions.userId, user.id));
  } catch (error) {
    // A failed lookup must never cost a paying customer their access.
    console.error("Entitlement lookup failed; keeping stored premium flag", error);
    return user;
  }

  // A period that has not ended is entitlement, whatever label the row wears.
  // The old code trusted only status === "active" and then wrote "expired"
  // over rows it had itself misjudged, so rows now exist that are labelled
  // expired while still holding a future period end. A null period end still
  // requires an active row, or an unpaid cancelled signup would grant access.
  const liveSub = rows.some((s) =>
    s.currentPeriodEnd ? s.currentPeriodEnd.getTime() > now : s.status === "active",
  );

  if (liveSub) {
    if (!user.isPremium) await healPremium(user);
    user.isPremium = true;
    return user;
  }

  if (!user.isPremium) return user;

  const revoke = async () => {
    user.isPremium = false;
    try {
      await db.update(users).set({ isPremium: false }).where(eq(users.id, user.id));
    } catch (error) {
      console.error("Premium expiry persist failed", error);
    }
    return user;
  };

  // No subscription rows at all. Subscription rows are only ever updated, never
  // deleted (only the dev seed deletes them), so an empty history means this
  // account has never paid. If it was holding a trial, that trial is simply
  // over. If it holds no trial date either, it is a legacy or admin-granted
  // plan with no end date and must keep working — that population is exactly
  // who the old code was wrongly locking out.
  if (rows.length === 0) {
    return user.premiumTrialEndsAt ? revoke() : user;
  }

  // There is subscription history. Honor the latest period end, with grace, so
  // a renewal that is still settling cannot strand a customer.
  const lastPeriodEnd = rows.reduce(
    (latest, s) => Math.max(latest, s.currentPeriodEnd?.getTime() ?? 0),
    0,
  );

  if (lastPeriodEnd === 0) return user; // rows exist but carry no date: keep
  if (now < lastPeriodEnd + ENTITLEMENT_GRACE_MS) return user;

  return revoke();
}

/** Repair a stored premium flag that a subscription proves should be true. */
async function healPremium(user: SessionUser) {
  try {
    await db
      .update(users)
      .set({ isPremium: true, premiumSince: user.premiumSince ?? new Date() })
      .where(eq(users.id, user.id));
    user.premiumSince = user.premiumSince ?? new Date();
  } catch (error) {
    // Access is already granted in memory; a failed repair must not block it.
    console.error("Premium heal failed", error);
  }
}

// Wrapped in React's cache() so multiple calls within the same request/render
// (e.g. the dashboard layout and every page both call getCurrentUser()) share
// a single database round trip instead of duplicating it — a meaningful
// speed win with no behavior change.
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const rows = await db
    .select({
      id: users.id,
      name: users.name,
      email: users.email,
      school: users.school,
      cohort: users.cohort,
      isPremium: users.isPremium,
      isAdmin: users.isAdmin,
      premiumSince: users.premiumSince,
      premiumTrialEndsAt: users.premiumTrialEndsAt,
      referralCode: users.referralCode,
      createdAt: users.createdAt,
      expiresAt: sessions.expiresAt,
    })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(eq(sessions.token, token))
    .limit(1);

  const row = rows[0];
  if (!row) return null;
  if (row.expiresAt.getTime() < Date.now()) {
    await db.delete(sessions).where(eq(sessions.token, token));
    return null;
  }

  const { expiresAt: _expiresAt, ...user } = row;

  return resolveEntitlement(user);
});

export async function getCurrentSessionInfo() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const rows = await db
    .select({ userAgent: sessions.userAgent, createdAt: sessions.createdAt })
    .from(sessions)
    .where(eq(sessions.token, token))
    .limit(1);

  return rows[0] ?? null;
}

export async function cleanupExpiredSessions() {
  await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
}
