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
      [['NG-MOD-RENAL-001', 'NG-MOD-RENAL-002', 'NG-MOD-RENAL-004', 'NG-MOD-RENAL-005', 'NG-MOD-RENAL-006', 'NG-MOD-RENAL-007', 'NG-MOD-RENAL-008', 'NG-MOD-RENAL-009', 'NG-MOD-RENAL-010', 'NG-MOD-RENAL-011', 'NG-MOD-RENAL-012', 'NG-MOD-RENAL-013', 'NG-MOD-RENAL-014', 'NG-MOD-RENAL-015', 'NG-MOD-RENAL-016', 'NG-MOD-RENAL-017', 'NG-MOD-RENAL-018', 'NG-MOD-RENAL-019', 'NG-MOD-RENAL-020', 'NG-MOD-GI-001', 'NG-MOD-GI-002', 'NG-MOD-GI-003', 'NG-MOD-GI-004', 'NG-MOD-GI-005', 'NG-MOD-GI-006', 'NG-MOD-GI-007', 'NG-MOD-GI-008', 'NG-MOD-GI-009', 'NG-MOD-GI-010', 'NG-MOD-GI-011', 'NG-MOD-GI-012', 'NG-MOD-GI-013', 'NG-MOD-GI-014', 'NG-MOD-GI-017', 'NG-MOD-GI-018', 'NG-MOD-GI-019', 'NG-MOD-GI-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
