import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/** One-off maintenance route; removed once the batch has been applied. */
const RAW =
  "https://raw.githubusercontent.com/FRANCISAPPAU271/nursegrid-prep/main/apply-all-question-fixes.sql";

export async function POST(req: NextRequest) {
  const expected = process.env.APPLY_FIXES_TOKEN;
  const header = req.headers.get("authorization") ?? "";
  if (!expected || header !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const dry = new URL(req.url).searchParams.get("dry") === "1";
  const res = await fetch(RAW, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ error: `fetch ${res.status}` }, { status: 502 });
  let sql = await res.text();
  const forbidden = (sql.match(/^(DELETE|TRUNCATE|DROP|ALTER|CREATE|INSERT)\s/gm) || []).length;
  if (forbidden) return NextResponse.json({ error: `refusing: ${forbidden} non-UPDATE` }, { status: 400 });
  if (dry) sql = sql.replace(/COMMIT;\s*$/m, "ROLLBACK;");

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ error: "no database url" }, { status: 500 });
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const before = await client.query(
      "select count(*)::int as questions, count(authored_id)::int as authored from questions"
    );
    const t0 = Date.now();
    await client.query(sql);
    const ms = Date.now() - t0;
    const spot = await client.query(
      `select authored_id, correct_choice_id, left(stem, 66) as stem from questions
        where authored_id in ('NG-IMD-0912','NG-CPD-1956','NG-SUR-0350','NG-CVM-1515')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, dry, ms, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
