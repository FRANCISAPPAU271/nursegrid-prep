import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { verifyExamRegisteredToken } from "@/lib/unsubscribe";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// "I have already registered for the NMC exam."
//
// Stops the weekly registration reminder for this user but keeps the rest of
// the digest, so a student who registered in week one is not told to register
// every week for four months. Signed like the unsubscribe link, so it works
// from an email client with no login and cannot be triggered for someone else.
// ---------------------------------------------------------------------------

async function markRegistered(userId: string) {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "exam_registered" (
      "user_id" text PRIMARY KEY,
      "sitting" text,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`
    INSERT INTO exam_registered (user_id, sitting)
    VALUES (${userId}, NULL)
    ON CONFLICT (user_id) DO NOTHING
  `);
}

function page(title: string, message: string, ok: boolean) {
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${title} · NurseGrid Prep</title>
<style>
  body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f6f8f5;
       font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:24px}
  .card{max-width:460px;background:#fff;border:1px solid #e2e8f0;border-radius:20px;
        padding:32px;text-align:center;box-shadow:0 10px 30px rgba(15,23,42,.06)}
  .ico{font-size:34px}
  h1{font-size:19px;margin:14px 0 8px;color:#0f172a}
  p{font-size:14px;line-height:1.65;color:#475569;margin:0 0 18px}
  a.btn{display:inline-block;background:#059669;color:#fff;text-decoration:none;padding:11px 22px;
    border-radius:11px;font-weight:700;font-size:14px}
</style></head>
<body><div class="card">
  <div class="ico">${ok ? "✅" : "⚠️"}</div>
  <h1>${title}</h1>
  <p>${message}</p>
  <a class="btn" href="/dashboard">Back to my dashboard</a>
</div></body></html>`;
}

function readParams(request: Request) {
  const { searchParams } = new URL(request.url);
  return { userId: searchParams.get("u") ?? "", token: searchParams.get("t") ?? "" };
}

export async function GET(request: Request) {
  const { userId, token } = readParams(request);

  if (!userId || !verifyExamRegisteredToken(userId, token)) {
    return new NextResponse(
      page("That link didn't work", "It may have been shortened by your email app. Use the link in this week's email again.", false),
      { status: 400, headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }

  try {
    await markRegistered(userId);
  } catch {
    return new NextResponse(
      page("Something went wrong", "We couldn't save that just now. Reply to the email and we'll update it for you.", false),
      { status: 500, headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }

  return new NextResponse(
    page(
      "Noted — you're registered",
      "We'll stop the weekly registration reminder. You'll still get your progress email and any updates.",
      true,
    ),
    { status: 200, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export async function POST(request: Request) {
  const { userId, token } = readParams(request);
  if (!userId || !verifyExamRegisteredToken(userId, token)) {
    return NextResponse.json({ error: "Invalid link" }, { status: 400 });
  }
  try {
    await markRegistered(userId);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not save" }, { status: 500 });
  }
}
