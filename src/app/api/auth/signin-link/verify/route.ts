import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";
import { consumeSignInToken } from "@/lib/signin-link";

export const dynamic = "force-dynamic";

/**
 * Consume a sign-in link and open a session.
 *
 * POST only. The GET landing page renders a button, because every mail provider
 * fetches the links in a message to scan them - a GET that signed a user in
 * would be burned by a scanner before the student ever clicked.
 */
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const token = String(form?.get("t") ?? "");

  const result = await consumeSignInToken(token);
  if (!result.ok) {
    return NextResponse.redirect(new URL(`/signin?t=${encodeURIComponent(token)}&e=${result.reason}`, request.url), { status: 303 });
  }

  await createSession(result.userId, {
    userAgent: request.headers.get("user-agent"),
    ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
  });

  return NextResponse.redirect(new URL("/dashboard", request.url), { status: 303 });
}
