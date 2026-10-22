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
      [['NG-MOD-NUTR-001', 'NG-MOD-NUTR-002', 'NG-MOD-NUTR-003', 'NG-MOD-NUTR-004', 'NG-MOD-NUTR-005', 'NG-MOD-NUTR-006', 'NG-MOD-NUTR-007', 'NG-MOD-NUTR-008', 'NG-MOD-NUTR-009', 'NG-MOD-NUTR-010', 'NG-MOD-NUTR-011', 'NG-MOD-NUTR-012', 'NG-MOD-NUTR-013', 'NG-MOD-NUTR-014', 'NG-MOD-NUTR-015', 'NG-MOD-NUTR-016', 'NG-MOD-NUTR-017', 'NG-MOD-NUTR-018', 'NG-MOD-NUTR-019', 'NG-MOD-NUTR-020', 'NG-MOD-TCOM-001', 'NG-MOD-TCOM-002', 'NG-MOD-TCOM-003', 'NG-MOD-TCOM-004', 'NG-MOD-TCOM-005', 'NG-MOD-TCOM-006', 'NG-MOD-TCOM-007', 'NG-MOD-TCOM-008', 'NG-MOD-TCOM-009', 'NG-MOD-TCOM-010', 'NG-MOD-TCOM-011', 'NG-MOD-TCOM-012', 'NG-MOD-TCOM-013', 'NG-MOD-TCOM-014', 'NG-MOD-TCOM-015', 'NG-MOD-TCOM-016', 'NG-MOD-TCOM-017', 'NG-MOD-TCOM-018', 'NG-MOD-TCOM-019', 'NG-MOD-TCOM-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
