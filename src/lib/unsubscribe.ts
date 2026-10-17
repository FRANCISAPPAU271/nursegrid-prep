import "server-only";
import { signedToken, signedUrl, verifySignedToken } from "@/lib/signed-links";

// One-click unsubscribe for the weekly email. The signature is what makes the
// link work from a mail client with no session, without letting anyone
// unsubscribe a user they don't control.

const PURPOSE = "unsub";

export function unsubscribeToken(userId: string): string {
  return signedToken(userId, PURPOSE);
}

export function verifyUnsubscribeToken(userId: string, token: string): boolean {
  return verifySignedToken(userId, PURPOSE, token);
}

export function unsubscribeUrl(appUrl: string, userId: string): string {
  return signedUrl(appUrl, "/api/email/unsubscribe", userId, PURPOSE);
}
