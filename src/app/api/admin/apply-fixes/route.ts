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
        where authored_id in ('NG-MOD-BEH-001','NG-MOD-BEH-003','NG-MOD-BEH-004','NG-MOD-BEH-005','NG-MOD-BEH-006','NG-MOD-BEH-007','NG-MOD-BEH-008','NG-MOD-BEH-009','NG-MOD-BEH-010','NG-MOD-BEH-011','NG-MOD-BEH-012','NG-MOD-BEH-013','NG-MOD-BEH-014','NG-MOD-BEH-015','NG-MOD-BEH-016','NG-MOD-BEH-017','NG-MOD-BEH-018','NG-MOD-BEH-019','NG-MOD-BEH-020','NG-MOD-LEAD-001','NG-MOD-LEAD-002','NG-MOD-LEAD-003','NG-MOD-LEAD-004','NG-MOD-LEAD-005','NG-MOD-LEAD-006','NG-MOD-LEAD-007','NG-MOD-LEAD-008','NG-MOD-LEAD-009','NG-MOD-LEAD-010','NG-MOD-LEAD-011','NG-MOD-LEAD-012','NG-MOD-LEAD-013','NG-MOD-LEAD-015','NG-MOD-LEAD-016','NG-MOD-LEAD-017','NG-MOD-LEAD-018','NG-MOD-LEAD-019','NG-MOD-LEAD-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
