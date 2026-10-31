/**
 * Can this deployment actually send email?
 *
 * Every way back into an account now runs through an email: the reset link, the
 * passwordless sign-in link, the admin's "email them a link" tool. When any of
 * those silently fails, the student is told to check an inbox that will stay
 * empty - which is exactly the complaint this project keeps having to chase.
 *
 * The database can never answer the question. A `weekly_digest_sends` row is a
 * record of intent, not of delivery. What CAN be answered, cheaply, is whether
 * the provider accepted a message and whether the sending domain is verified -
 * because Resend rejects mail from an unverified domain with a 403 that used to
 * be swallowed by the SDK.
 *
 * So this file makes the provider answer, in words, on demand.
 */

import { sendEmail } from "@/lib/email";

const FROM_ADDRESS = process.env.EMAIL_FROM || "NurseGrid Prep <onboarding@resend.dev>";

/** `Name <a@b.com>` -> `b.com`. Bare addresses pass through. */
export function fromDomain(from: string = FROM_ADDRESS): string {
  const match = /<([^>]+)>/.exec(from);
  const address = (match ? match[1] : from).trim();
  const at = address.lastIndexOf("@");
  return at === -1 ? "" : address.slice(at + 1).toLowerCase();
}

export type EmailReadiness = {
  configured: boolean;
  provider: "resend" | "brevo" | "none";
  from: string;
  domain: string;
  /** `verified`, `pending`, `not_started`, `failed`, or `unknown`. */
  domainStatus: string;
  /** One sentence a human can act on. */
  summary: string;
};

/**
 * Ask the provider what it thinks of our sending domain.
 *
 * Never throws: a diagnostic that fails is useless. An unreachable API answers
 * `unknown` rather than pretending to be a verdict.
 */
export async function emailReadiness(): Promise<EmailReadiness> {
  const domain = fromDomain();
  const base = { from: FROM_ADDRESS, domain };

  if (process.env.BREVO_API_KEY) {
    // Brevo's API exposes account and sender verification, but the shape is
    // different and this deployment sends through Resend. Report what is known
    // rather than guess: the test send below is the real evidence either way.
    return {
      ...base,
      configured: true,
      provider: "brevo",
      domainStatus: "unknown",
      summary: `Emails are sent through Brevo from ${FROM_ADDRESS}. Send a test to prove it works; Brevo will not report domain status here.`,
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      ...base,
      configured: false,
      provider: "none",
      domainStatus: "unknown",
      summary: "No email provider is configured. Reset links, sign-in links and digest emails cannot be sent at all.",
    };
  }

  let domainStatus = "unknown";
  try {
    const response = await fetch("https://api.resend.com/domains", {
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (response.ok) {
      const body = (await response.json()) as { data?: { name?: string; status?: string }[] };
      const match = (body.data ?? []).find((item) => (item.name ?? "").toLowerCase() === domain);
      domainStatus = match?.status ?? "not_found";
    } else {
      domainStatus = `http_${response.status}`;
    }
  } catch {
    // A timeout here says nothing about mail delivery, so say nothing about it.
    domainStatus = "unknown";
  }

  const verified = domainStatus === "verified";
  const summary = verified
    ? `Resend reports "${domain}" as verified, so it will accept mail from ${FROM_ADDRESS}. Send a test to confirm the whole path.`
    : domainStatus === "not_found"
      ? `Resend does not list "${domain}" among this account's domains. Mail from ${FROM_ADDRESS} will be refused until the domain is added and verified - or change EMAIL_FROM to a verified address.`
      : domainStatus === "unknown"
        ? `Could not read the domain list from Resend. ${FROM_ADDRESS} may or may not be accepted; the test send below is the only reliable check.`
        : `Resend reports "${domain}" as ${domainStatus}. Mail from ${FROM_ADDRESS} will be refused until it is verified.`;

  return { ...base, configured: true, provider: "resend", domainStatus, summary };
}

export type TestSendResult = {
  ok: boolean;
  /** Provider's message id when it accepted the message. */
  id?: string;
  /** The provider's exact words when it refused. */
  error?: string;
};

/**
 * Send one real message and report what the provider said.
 *
 * `ok` means the provider ACCEPTED the message. That is not the same as arrival
 * - nothing in this application can prove arrival - so the caller must say so
 * rather than report success as delivery.
 */
export async function sendTestEmail(to: string): Promise<TestSendResult> {
  const stamp = new Date().toISOString();
  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;padding:24px">
    <h1 style="font-size:18px;margin:0 0 12px">Test message from NurseGrid Prep</h1>
    <p style="font-size:14px;line-height:1.6;color:#334155;margin:0 0 12px">
      If you are reading this in an inbox, then reset links and sign-in links can reach students.
    </p>
    <p style="font-size:13px;color:#64748b;margin:0">Sent ${stamp} from ${FROM_ADDRESS}.</p>
  </div>`;

  try {
    const result = await sendEmail(to, "NurseGrid Prep — email delivery test", html, {
      text: `Test message from NurseGrid Prep. Sent ${stamp} from ${FROM_ADDRESS}. If you are reading this in an inbox, reset and sign-in links can reach students.`,
    });
    return { ok: true, id: result?.id };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
