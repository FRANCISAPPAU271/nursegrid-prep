import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { requestEmailChange } from "@/lib/email-change";
import { sendEmail } from "@/lib/email";

/**
 * Ask for a change of address. Nothing changes yet: the new address is sent a
 * link, and the swap waits for it to come back.
 *
 * The confirmation goes to the address being *claimed*, never to the current
 * one. Sending it to the current address would be no use to the person this
 * exists for — their current address is the broken one — and it would mean the
 * proof of ownership could be satisfied by someone who only controls the old,
 * possibly compromised, mailbox.
 */

const bodySchema = z.object({
  newEmail: z.string().trim().toLowerCase().email("Enter a valid email address").max(254),
});

function appUrl(): string {
  return (process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com").replace(/\/$/, "");
}

function confirmEmailHtml(newEmail: string, url: string, minutes: number): { subject: string; html: string; text: string } {
  const subject = "Confirm your new NurseGrid Prep email address";
  const text = [
    "Confirm your new email address",
    "",
    `Someone — hopefully you — asked to use this address, ${newEmail}, to sign in to NurseGrid Prep and receive your weekly study email.`,
    "",
    `Confirm it here: ${url}`,
    "",
    `The link works once and expires in ${minutes} minutes.`,
    "If you did not ask for this, ignore this message: the address was not added to any account, and nothing has changed.",
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#f6f8f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
  <div style="max-width:520px;margin:0 auto;padding:32px 20px">
    <div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;padding-bottom:24px">🩺 NurseGrid Prep</div>
    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:28px">
      <h1 style="margin:0 0 12px;font-size:20px;line-height:1.3">Confirm your new email address</h1>
      <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#334155">
        Someone — hopefully you — asked to use this address, <strong>${newEmail}</strong>, for a
        NurseGrid Prep account. Confirming makes it the address we send your weekly study email
        and password resets to.
      </p>
      <p style="margin:0 0 24px">
        <a href="${url}" style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 20px;border-radius:10px">Confirm this address</a>
      </p>
      <p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#64748b">
        The link works once and expires in ${minutes} minutes.
      </p>
      <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b">
        If you did not ask for this, you can ignore this message — nothing has changed, and no
        account is using ${newEmail}.
      </p>
    </div>
    <p style="margin:20px 0 0;font-size:12px;line-height:1.6;color:#94a3b8;text-align:center">
      Sent because this address was entered on nursegridprep.com.
    </p>
  </div>
</body></html>`;

  return { subject, html, text };
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json().catch(() => ({}));
    const data = bodySchema.parse(body);

    const result = await requestEmailChange(user.id, user.email, data.newEmail);

    if (!result.ok) {
      if (result.reason === "same") {
        throw new ApiError("That is already the address on your account.", 422);
      }
      if (result.reason === "taken") {
        // Deliberately vague about who owns it.
        throw new ApiError("That address is already in use by another account. Try another, or contact support on WhatsApp.", 409);
      }
      throw new ApiError(
        `A confirmation was just sent. Wait ${result.retryAfterSeconds ?? 60} seconds before requesting another.`,
        429,
      );
    }

    const url = `${appUrl()}/email-change/confirm?t=${result.token}`;
    const mail = confirmEmailHtml(result.newEmail, url, 60);

    try {
      await sendEmail(result.newEmail, mail.subject, mail.html, { text: mail.text });
    } catch (e) {
      // The request row is left in place: the address is not changed, and a
      // second attempt replaces it cleanly once the cooldown passes.
      throw new ApiError(
        `We could not send a confirmation to ${result.newEmail}. Check the spelling and try again. (${e instanceof Error ? e.message : "send failed"})`,
        502,
      );
    }

    return NextResponse.json({
      ok: true,
      sentTo: result.newEmail,
      // The address is masked in the response so a shared screen does not show it.
      expiresInMinutes: 60,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Enter a valid email" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
