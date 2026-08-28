import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { sessions, users, subscriptions } from "@/db/schema";
import { and, eq, inArray, lt } from "drizzle-orm";

export const SESSION_COOKIE = "nsm_session";
const SESSION_DAYS = 30;

// Prevents account/password sharing: only this many devices may be signed in
// at once per account. Logging in on a new device signs out the oldest
// session(s) beyond this limit. Set to 1 to strictly allow only one active
// device at a time.
const MAX_ACTIVE_SESSIONS = 1;

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
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

  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
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
  store.delete(SESSION_COOKIE);
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

  // Lazily recompute premium status now that plans are fixed-term (4 months /
  // 1 year) rather than lifetime. Only do this extra work when the user is
  // currently marked premium, so free users (the majority) pay no extra cost.
  if (user.isPremium) {
    const trialActive = Boolean(user.premiumTrialEndsAt && user.premiumTrialEndsAt.getTime() > Date.now());

    if (!trialActive) {
      const activeSubs = await db
        .select({ id: subscriptions.id, currentPeriodEnd: subscriptions.currentPeriodEnd })
        .from(subscriptions)
        .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));

      const hasValidSub = activeSubs.some((s) => !s.currentPeriodEnd || s.currentPeriodEnd.getTime() > Date.now());

      if (!hasValidSub) {
        const expiredIds = activeSubs
          .filter((s) => s.currentPeriodEnd && s.currentPeriodEnd.getTime() <= Date.now())
          .map((s) => s.id);
        if (expiredIds.length > 0) {
          await db.update(subscriptions).set({ status: "expired" }).where(inArray(subscriptions.id, expiredIds));
        }
        await db.update(users).set({ isPremium: false }).where(eq(users.id, user.id));
        user.isPremium = false;
      }
    }
  }

  return user;
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
