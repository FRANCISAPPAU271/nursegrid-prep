import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { randomInt } from "node:crypto";
import { db } from "@/db";
import { users, sessions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { hashPassword } from "@/lib/auth";
import { isEmailConfigured, sendPasswordResetEmail } from "@/lib/email";
import { issueResetTokenForUser, resetUrl } from "@/lib/password-reset";
import { recordEvent } from "@/lib/ops";

/**
 * The escape hatch for a student who cannot recover their own account.
 *
 * Every automated route assumes one of three things is true: the address can
 * receive mail, the security answer is remembered, or a phone is linked. When
 * all three are false - a typo'd signup address, an answer from three years
 * ago, no phone - the person is simply stuck, and no amount of better UI helps
 * them. Before this, "stuck" meant the student had no way in and the operator
 * had no tool, so the only outcome was a complaint.
 *
 * Two actions, both admin-only and both recorded:
 *
 *   send-link    issues a fresh 24-hour reset link and mails it, ignoring the
 *                per-address cooldown that exists to stop public abuse.
 *   temp-password generates a readable one-time password, sets it, and returns
 *                it once so the admin can read it to the student on the phone.
 *                Every active session is destroyed, because if an admin is
 *                resetting the password the previous holder may be the problem.
 *
 * A temporary password is a blunt instrument. It is deliberately the second
 * option, it is logged with the admin's own id, and the student should change
 * it immediately - it exists for the case where nothing else can work.
 */

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  action: z.enum(["send-link", "temp-password"]),
});

/** Readable when spoken aloud: no 0/O, 1/l/I confusion. */
function readablePassword(): string {
  const alphabet = "abcdefghjkmnpqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < 10; i++) out += alphabet[randomInt(alphabet.length)];
  return `${out.slice(0, 5)}-${out.slice(5)}`;
}

export async function POST(request: Request) {
  try {
    const admin = await requireAdmin();
    const body = await request.json().catch(() => ({}));
    const data = schema.parse(body);

    const rows = await db
      .select({ id: users.id, name: users.name, email: users.email })
      .from(users)
      .where(sql`lower(${users.email}) = ${data.email}`)
      .limit(1);

    const user = rows[0];
    if (!user) throw new ApiError("No account with that email address.", 404);

    if (data.action === "send-link") {
      if (!isEmailConfigured()) {
        throw new ApiError(
          "Email is not configured on this server, so a link cannot be sent. Use a temporary password instead.",
          503,
        );
      }
      const token = await issueResetTokenForUser(user.id);
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";
      let sent = false;
      let sendError: string | null = null;
      try {
        await sendPasswordResetEmail(user.email, user.name, resetUrl(appUrl, token));
        sent = true;
      } catch (e) {
        sendError = e instanceof Error ? e.message : "send failed";
        await recordEvent("email_send_failed", `admin reset link: ${sendError}`);
      }

      await recordEvent("admin_reset_link", `admin=${admin.id} user=${user.id} sent=${sent}`);

      if (!sent) {
        throw new ApiError(
          `The link was created but the email could not be sent (${sendError}). Use a temporary password instead.`,
          502,
        );
      }
      return NextResponse.json({
        ok: true,
        action: "send-link",
        sentTo: user.email,
        name: user.name,
        note: "A 24-hour reset link was sent. If it does not arrive, the address cannot receive mail — use a temporary password.",
      });
    }

    // temp-password
    const password = readablePassword();
    await db.update(users).set({ passwordHash: await hashPassword(password) }).where(eq(users.id, user.id));
    await db.delete(sessions).where(eq(sessions.userId, user.id));
    await recordEvent("admin_temp_password", `admin=${admin.id} user=${user.id}`);

    return NextResponse.json({
      ok: true,
      action: "temp-password",
      email: user.email,
      name: user.name,
      password,
      note: "Read this to the student and ask them to change it in Settings immediately. All their other sessions have been signed out.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
