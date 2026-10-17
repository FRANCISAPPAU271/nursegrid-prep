import "server-only";
import { signedToken, signedUrl, verifySignedToken } from "@/lib/signed-links";

// Kept as thin wrappers so existing imports keep working, while all the
// signing logic lives in one place (signed-links.ts).

const PURPOSE_UNSUBSCRIBE = "unsub";
export const PURPOSE_EXAM_REGISTERED = "examreg";

export function unsubscribeToken(userId: string): string {
  return signedToken(userId, PURPOSE_UNSUBSCRIBE);
}

export function verifyUnsubscribeToken(userId: string, token: string): boolean {
  return verifySignedToken(userId, PURPOSE_UNSUBSCRIBE, token);
}

export function unsubscribeUrl(appUrl: string, userId: string): string {
  return signedUrl(appUrl, "/api/email/unsubscribe", userId, PURPOSE_UNSUBSCRIBE);
}

/** "I have already registered for the exam" — stops only the exam reminder. */
export function examRegisteredUrl(appUrl: string, userId: string): string {
  return signedUrl(appUrl, "/api/email/already-registered", userId, PURPOSE_EXAM_REGISTERED);
}

export function verifyExamRegisteredToken(userId: string, token: string): boolean {
  return verifySignedToken(userId, PURPOSE_EXAM_REGISTERED, token);
}
