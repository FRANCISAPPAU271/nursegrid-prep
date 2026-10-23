import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const RAW =
  "https://raw.githubusercontent.com/FRANCISAPPAU271/nursegrid-prep/main/apply-all-question-fixes.sql";

export async function POST(req: NextRequest) {
  const expected = process.env.APPLY_FIXES_TOKEN;
  if (!expected || req.headers.get("authorization") !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const res = await fetch(RAW, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ error: `fetch ${res.status}` }, { status: 502 });
  const sql = await res.text();
  const forbidden = (sql.match(/^(DELETE|TRUNCATE|DROP|ALTER|CREATE|INSERT)\s/gm) || []).length;
  if (forbidden) return NextResponse.json({ error: `refusing: ${forbidden} non-UPDATE` }, { status: 400 });

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ error: "no database url" }, { status: 500 });
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const before = await client.query("select count(*)::int as questions from questions");
    const t0 = Date.now();
    await client.query(sql);
    const spot = await client.query(
      `select authored_id, correct_choice_id, length(rationale) as rat, left(stem, 56) as stem from questions
        where authored_id in ('NG-MOD-FUND-001','NG-MOD-FUND-002','NG-MOD-FUND-003','NG-MOD-FUND-004','NG-MOD-FUND-005','NG-MOD-FUND-006','NG-MOD-FUND-007','NG-MOD-FUND-008','NG-MOD-FUND-009','NG-MOD-FUND-010','NG-MOD-FUND-011','NG-MOD-FUND-014','NG-MOD-FUND-015','NG-MOD-FUND-016','NG-MOD-FUND-017','NG-MOD-FUND-018','NG-MOD-FUND-019','NG-MOD-OBS-001','NG-MOD-OBS-002','NG-MOD-OBS-003','NG-MOD-OBS-004','NG-MOD-OBS-005','NG-MOD-OBS-007','NG-MOD-OBS-008','NG-MOD-OBS-009','NG-MOD-OBS-010','NG-MOD-OBS-012','NG-MOD-OBS-013','NG-MOD-OBS-015','NG-MOD-OBS-016','NG-MOD-OBS-017','NG-MOD-OBS-018','NG-MOD-OBS-019','NG-MOD-OBS-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
