import "server-only";

// ---------------------------------------------------------------------------
// SMS delivery for Ghana via Arkesel (sms.arkesel.com) — the widely used
// local provider with simple API-key auth and pay-as-you-go pricing.
//
// Set ARKESEL_API_KEY in Vercel to enable SMS OTP at signup. Without it the
// entire OTP flow is invisible and signup works exactly as before.
// ARKESEL_SENDER_ID is optional (max 11 chars, must be registered/approved
// in the Arkesel dashboard); defaults to "NurseGrid".
// ---------------------------------------------------------------------------

export function isSmsConfigured(): boolean {
  return Boolean(process.env.ARKESEL_API_KEY);
}

// Normalize Ghanaian phone input to international 233XXXXXXXXX form.
// Accepts 0XXXXXXXXX, 233XXXXXXXXX, +233XXXXXXXXX (spaces/dashes ignored).
export function normalizeGhPhone(input: string): string | null {
  const digits = input.replace(/[^\d]/g, "");
  if (/^0\d{9}$/.test(digits)) return `233${digits.slice(1)}`;
  if (/^233\d{9}$/.test(digits)) return digits;
  return null;
}

export async function sendSms(phone233: string, message: string): Promise<void> {
  const apiKey = process.env.ARKESEL_API_KEY;
  if (!apiKey) throw new Error("ARKESEL_API_KEY is not configured");
  const sender = (process.env.ARKESEL_SENDER_ID || "NurseGrid").slice(0, 11);

  const res = await fetch("https://sms.arkesel.com/api/v2/sms/send", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ sender, message, recipients: [phone233] }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || (data.status && data.status !== "success")) {
    throw new Error(`SMS send failed: ${JSON.stringify(data).slice(0, 200)}`);
  }
}
