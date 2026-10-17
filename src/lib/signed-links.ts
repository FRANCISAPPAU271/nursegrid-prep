import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed, login-free action links.
 *
 * An email link has to work from the mail client, with no session, so the link
 * itself must prove which user and which action it belongs to. Each link
 * carries the user id plus an HMAC over `purpose:userId`; without the server
 * key nobody can mint a link for another user, so one person cannot unsubscribe
 * or mark someone else as registered.
 *
 * A purpose prefix keeps the actions separate — an unsubscribe token is not
 * valid on the "already registered" endpoint and vice versa.
 */
function key(): string {
  return (
    process.env.LINK_SECRET ||
    process.env.UNSUBSCRIBE_SECRET ||
    process.env.CRON_SECRET ||
    process.env.BREVO_API_KEY ||
    process.env.RESEND_API_KEY ||
    ""
  );
}

export function signedToken(userId: string, purpose: string): string {
  const k = key();
  if (!k) return "";
  return createHmac("sha256", k).update(`${purpose}:${userId}`).digest("hex").slice(0, 32);
}

export function verifySignedToken(userId: string, purpose: string, token: string): boolean {
  const expected = signedToken(userId, purpose);
  if (!expected || !token || expected.length !== token.length) return false;
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(token));
  } catch {
    return false;
  }
}

export function signedUrl(appUrl: string, path: string, userId: string, purpose: string): string {
  const token = signedToken(userId, purpose);
  if (!token) return "";
  return `${appUrl}${path}?u=${encodeURIComponent(userId)}&t=${token}`;
}
