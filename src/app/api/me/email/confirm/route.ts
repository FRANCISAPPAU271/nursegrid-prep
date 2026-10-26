import { NextResponse } from "next/server";
import { lookupEmailChange, confirmEmailChange } from "@/lib/email-change";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Completing a change of address.
//
// Lives under /api like the unsubscribe link, because it has to work straight
// from a mail client with no session. The token is the whole authorisation: it
// is 32 random bytes, stored only as a hash, single-use and valid for an hour.
//
// GET only shows a button. Mail providers fetch every link in a message to scan
// it, so a GET that performed the swap would be consumed by a scanner before
// the recipient saw it, and the person would be left with a dead link. The
// POST below is what actually changes anything, and a scanner does not submit
// forms.
// ---------------------------------------------------------------------------

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function page(opts: { title: string; body: string; action?: { label: string; token: string } }): string {
  const button = opts.action
    ? `<form method="post" action="/api/me/email/confirm">
         <input type="hidden" name="t" value="${esc(opts.action.token)}" />
         <button type="submit">${esc(opts.action.label)}</button>
       </form>`
    : `<a href="/dashboard/settings">Go to Settings</a>`;

  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${esc(opts.title)} · NurseGrid Prep</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f8f5;
       font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:24px;}
  .card{max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:20px;
        padding:32px;text-align:center;box-shadow:0 10px 30px rgba(15,23,42,.06);}
  h1{font-size:19px;margin:0 0 10px;color:#0f172a}
  p{font-size:14px;line-height:1.65;color:#475569;margin:0 0 20px}
  .muted{font-size:12px;color:#94a3b8;margin:18px 0 0}
  form{margin:0}
  button,a{display:inline-block;background:#059669;color:#fff;text-decoration:none;padding:12px 24px;
    border-radius:11px;font-weight:700;font-size:14px;border:0;cursor:pointer;font-family:inherit}
</style></head>
<body><div class="card">
  <h1>${esc(opts.title)}</h1>
  <p>${opts.body}</p>
  ${button}
  ${opts.action ? '<p class="muted">Did not ask for this? Close this page — nothing changes until the button is pressed.</p>' : ""}
</div></body></html>`;
}

function html(body: string, status = 200) {
  return new NextResponse(body, { status, headers: { "content-type": "text/html; charset=utf-8" } });
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("t") ?? "";
  const found = await lookupEmailChange(token);

  if (found.state === "expired") {
    return html(
      page({
        title: "That link has expired",
        body: "Confirmation links last one hour. Nothing changed — request a new one from Settings.",
      }),
      410,
    );
  }
  if (found.state === "invalid") {
    return html(
      page({
        title: "That link is not valid",
        body: "It may already have been used, or the mail client wrapped it. Nothing changed — request a new one from Settings.",
      }),
      404,
    );
  }

  return html(
    page({
      title: "Confirm your new address",
      body: `We will use <strong>${esc(found.newEmail)}</strong> for your weekly study email and for password resets. Your current address stops being used once you confirm.`,
      action: { label: "Confirm this address", token },
    }),
  );
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const token = String(form?.get("t") ?? "");
  const result = await confirmEmailChange(token);

  if (result.ok) {
    return html(
      page({
        title: "Email updated",
        body: `That address — <strong>${esc(result.newEmail)}</strong> — is now the one on your account. Your weekly study email and password resets will go there. If it lands in spam the first time, mark it “not spam”.`,
      }),
    );
  }

  const copy =
    result.reason === "taken"
      ? {
          title: "That address is already in use",
          body: "Another account claimed it while this link was waiting. Nothing on your account changed — try a different address from Settings.",
        }
      : result.reason === "expired"
        ? { title: "That link has expired", body: "Confirmation links last one hour. Nothing changed — request a new one from Settings." }
        : { title: "That link is not valid", body: "It may already have been used. Nothing changed — request a new one from Settings." };

  return html(page(copy), result.reason === "taken" ? 409 : 410);
}
