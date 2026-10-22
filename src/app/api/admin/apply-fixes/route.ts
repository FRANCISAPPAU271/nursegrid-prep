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
      [['NG-MOD-INFO-001', 'NG-MOD-INFO-002', 'NG-MOD-INFO-003', 'NG-MOD-INFO-004', 'NG-MOD-INFO-005', 'NG-MOD-INFO-006', 'NG-MOD-INFO-007', 'NG-MOD-INFO-008', 'NG-MOD-INFO-009', 'NG-MOD-INFO-010', 'NG-MOD-INFO-011', 'NG-MOD-INFO-012', 'NG-MOD-INFO-013', 'NG-MOD-INFO-014', 'NG-MOD-INFO-015', 'NG-MOD-INFO-016', 'NG-MOD-INFO-017', 'NG-MOD-INFO-018', 'NG-MOD-INFO-019', 'NG-MOD-INFO-020', 'NG-MOD-RSCH-001', 'NG-MOD-RSCH-002', 'NG-MOD-RSCH-003', 'NG-MOD-RSCH-004', 'NG-MOD-RSCH-005', 'NG-MOD-RSCH-006', 'NG-MOD-RSCH-007', 'NG-MOD-RSCH-008', 'NG-MOD-RSCH-009', 'NG-MOD-RSCH-010', 'NG-MOD-RSCH-011', 'NG-MOD-RSCH-012', 'NG-MOD-RSCH-013', 'NG-MOD-RSCH-014', 'NG-MOD-RSCH-015', 'NG-MOD-RSCH-016', 'NG-MOD-RSCH-017', 'NG-MOD-RSCH-018', 'NG-MOD-RSCH-019', 'NG-MOD-RSCH-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
