import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed unsubscribe links.
 *
 * A one-click unsubscribe has to work from an email client, with no session
 * and no login — so the link itself must prove which user it belongs to. The
 * user id travels in the URL alongside an HMAC of that id; without the secret
 * you cannot mint a link for someone else, so nobody can unsubscribe a user
 * they don't control.
 *
 * The key is whichever server secret is present. Email can only be configured
 * when at least one of these exists, so a key is always available in practice.
 */
function key(): string {
  return (
    process.env.UNSUBSCRIBE_SECRET ||
    process.env.CRON_SECRET ||
    process.env.BREVO_API_KEY ||
    process.env.RESEND_API_KEY ||
    ""
  );
}

export function unsubscribeToken(userId: string): string {
  const k = key();
  if (!k) return "";
  return createHmac("sha256", k).update(`unsub:${userId}`).digest("hex").slice(0, 32);
}

export function verifyUnsubscribeToken(userId: string, token: string): boolean {
  const expected = unsubscribeToken(userId);
  if (!expected || !token || expected.length !== token.length) return false;
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  } catch {
    return false;
  }
}

export function unsubscribeUrl(appUrl: string, userId: string): string {
  const token = unsubscribeToken(userId);
  if (!token) return "";
  return `${appUrl}/api/email/unsubscribe?u=${encodeURIComponent(userId)}&t=${token}`;
}
