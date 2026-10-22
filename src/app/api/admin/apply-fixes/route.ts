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
      `select authored_id, correct_choice_id, length(rationale) as rat from questions
        where authored_id = any($1)
        order by authored_id`,
      [['NG-MOD-PRO1-001', 'NG-MOD-PRO1-002', 'NG-MOD-PRO1-003', 'NG-MOD-PRO1-004', 'NG-MOD-PRO1-005', 'NG-MOD-PRO1-006', 'NG-MOD-PRO1-007', 'NG-MOD-PRO1-008', 'NG-MOD-PRO1-009', 'NG-MOD-PRO1-010', 'NG-MOD-PRO1-011', 'NG-MOD-PRO1-012', 'NG-MOD-PRO1-013', 'NG-MOD-PRO1-014', 'NG-MOD-PRO1-015', 'NG-MOD-PRO1-016', 'NG-MOD-PRO1-017', 'NG-MOD-PRO1-018', 'NG-MOD-PRO1-019', 'NG-MOD-PRO1-020', 'NG-MOD-PRO2-001', 'NG-MOD-PRO2-002', 'NG-MOD-PRO2-003', 'NG-MOD-PRO2-004', 'NG-MOD-PRO2-005', 'NG-MOD-PRO2-006', 'NG-MOD-PRO2-007', 'NG-MOD-PRO2-008', 'NG-MOD-PRO2-009', 'NG-MOD-PRO2-010', 'NG-MOD-PRO2-011', 'NG-MOD-PRO2-012', 'NG-MOD-PRO2-013', 'NG-MOD-PRO2-014', 'NG-MOD-PRO2-015', 'NG-MOD-PRO2-016', 'NG-MOD-PRO2-017', 'NG-MOD-PRO2-018', 'NG-MOD-PRO2-019', 'NG-MOD-PRO2-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
