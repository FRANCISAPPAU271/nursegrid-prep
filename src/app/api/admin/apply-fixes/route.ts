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
        where authored_id in ('NG-MOD-AP1-016','NG-MOD-AP1-017','NG-MOD-AP1-018','NG-MOD-AP1-019','NG-MOD-AP1-020','NG-MOD-PROC-002','NG-MOD-PROC-003','NG-MOD-PROC-004','NG-MOD-PROC-005','NG-MOD-PROC-006','NG-MOD-PROC-007','NG-MOD-PROC-008','NG-MOD-PROC-009','NG-MOD-PROC-010','NG-MOD-PROC-011','NG-MOD-PROC-012','NG-MOD-PROC-013','NG-MOD-PROC-015','NG-MOD-PROC-016','NG-MOD-PROC-017','NG-MOD-PROC-018','NG-MOD-PROC-019','NG-MOD-PROC-020','NG-MOD-TCAM-004','NG-MOD-TCAM-007','NG-MOD-TCAM-009','NG-MOD-TCAM-013','NG-MOD-TCAM-014','NG-MOD-TCAM-015','NG-MOD-TCAM-019','NG-MOD-TCAM-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
