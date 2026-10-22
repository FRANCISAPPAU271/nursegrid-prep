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
      [['NG-MOD-GYN-001', 'NG-MOD-GYN-002', 'NG-MOD-GYN-003', 'NG-MOD-GYN-004', 'NG-MOD-GYN-005', 'NG-MOD-GYN-006', 'NG-MOD-GYN-007', 'NG-MOD-GYN-008', 'NG-MOD-GYN-009', 'NG-MOD-GYN-010', 'NG-MOD-GYN-011', 'NG-MOD-GYN-012', 'NG-MOD-GYN-013', 'NG-MOD-GYN-014', 'NG-MOD-GYN-015', 'NG-MOD-GYN-016', 'NG-MOD-GYN-017', 'NG-MOD-GYN-018', 'NG-MOD-GYN-019', 'NG-MOD-GYN-020', 'NG-MOD-INTEG-001', 'NG-MOD-INTEG-002', 'NG-MOD-INTEG-003', 'NG-MOD-INTEG-004', 'NG-MOD-INTEG-005', 'NG-MOD-INTEG-006', 'NG-MOD-INTEG-007', 'NG-MOD-INTEG-008', 'NG-MOD-INTEG-009', 'NG-MOD-INTEG-010', 'NG-MOD-INTEG-011', 'NG-MOD-INTEG-012', 'NG-MOD-INTEG-013', 'NG-MOD-INTEG-014', 'NG-MOD-INTEG-015', 'NG-MOD-INTEG-016', 'NG-MOD-INTEG-017', 'NG-MOD-INTEG-018', 'NG-MOD-INTEG-019', 'NG-MOD-INTEG-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
