import "server-only";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { db } from "@/db";
import { sessions, users, subscriptions } from "@/db/schema";
import { and, eq, lt } from "drizzle-orm";

export const SESSION_COOKIE = "nsm_session";
const SESSION_DAYS = 30;

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function createSession(userId: string) {
  const token = crypto.randomUUID() + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  await db.insert(sessions).values({ token, userId, expiresAt });
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
  premiumSince: Date | null;
  premiumTrialEndsAt: Date | null;
  referralCode: string | null;
  createdAt: Date;
};

export async function getCurrentUser(): Promise<SessionUser | null> {
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

  // Lazily expire free trials earned through referrals: if a trial end date has
  // passed and the user has no active paid subscription, downgrade to free.
  if (user.isPremium && user.premiumTrialEndsAt && user.premiumTrialEndsAt.getTime() < Date.now()) {
    const activeSub = await db
      .select({ id: subscriptions.id })
      .from(subscriptions)
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")))
      .limit(1);
    if (activeSub.length === 0) {
      await db.update(users).set({ isPremium: false }).where(eq(users.id, user.id));
      user.isPremium = false;
    }
  }

  return user;
}

export async function cleanupExpiredSessions() {
  await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
}
