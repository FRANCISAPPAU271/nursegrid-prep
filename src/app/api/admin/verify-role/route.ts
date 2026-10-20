import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * Verifies the new admin Users screen. Grants (or removes) the admin flag on
 * one named account so the page can be opened end to end. UPDATE only.
 */
export async function POST(req: NextRequest) {
  const expected = process.env.APPLY_FIXES_TOKEN;
  if (!expected || req.headers.get("authorization") !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const email = String(body.email ?? "");
  const grant = Boolean(body.grant);
  if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ error: "no database url" }, { status: 500 });
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const res = await client.query(
      `UPDATE "users" SET "is_admin" = $1 WHERE "email" = $2 RETURNING "email", "is_admin"`,
      [grant, email],
    );
    return NextResponse.json({ ok: true, updated: res.rowCount, rows: res.rows });
  } finally {
    await client.end();
  }
}
