import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

/**
 * One-off maintenance endpoint. Applies the consolidated, UPDATE-only question
 * repair file to the production database.
 *
 *   POST /api/admin/apply-fixes          apply
 *   POST /api/admin/apply-fixes?dry=1    run it, then roll back
 *   Authorization: Bearer $APPLY_FIXES_TOKEN
 *
 * The endpoint is removed from the repository once the repair has been applied.
 */
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
  if (!res.ok) {
    return NextResponse.json({ error: `could not fetch sql: ${res.status}` }, { status: 502 });
  }
  let sql = await res.text();

  const forbidden = (sql.match(/^(DELETE|TRUNCATE|DROP|ALTER|CREATE|INSERT)\s/gm) || []).length;
  if (forbidden > 0) {
    return NextResponse.json(
      { error: `refusing to run: ${forbidden} non-UPDATE statements in the file` },
      { status: 400 }
    );
  }
  if (dry) sql = sql.replace(/COMMIT;\s*$/m, "ROLLBACK;");

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ error: "no database url in env" }, { status: 500 });

  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const before = await client.query(
      "select count(*)::int as questions, count(authored_id)::int as authored from questions"
    );
    const started = Date.now();
    await client.query(sql);
    const ms = Date.now() - started;
    const after = await client.query(
      "select count(*)::int as questions, count(authored_id)::int as authored from questions"
    );
    const spot = await client.query(
      `select authored_id, correct_choice_id, left(stem, 70) as stem
         from questions
        where authored_id in ('NG-ORIGINAL-NCX-1029','NG-ORIGINAL-NCX-1060','NG-NUT-0237','NG-LTC-1811','NG-FAM-1712')
        order by authored_id`
    );
    return NextResponse.json({
      ok: true,
      dry,
      ms,
      before: before.rows[0],
      after: after.rows[0],
      spot: spot.rows,
    });
  } finally {
    await client.end();
  }
}
