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
      [['NG-MOD-HAEM-001', 'NG-MOD-HAEM-002', 'NG-MOD-HAEM-003', 'NG-MOD-HAEM-004', 'NG-MOD-HAEM-005', 'NG-MOD-HAEM-006', 'NG-MOD-HAEM-007', 'NG-MOD-HAEM-008', 'NG-MOD-HAEM-009', 'NG-MOD-HAEM-010', 'NG-MOD-HAEM-011', 'NG-MOD-HAEM-012', 'NG-MOD-HAEM-013', 'NG-MOD-HAEM-014', 'NG-MOD-HAEM-015', 'NG-MOD-HAEM-016', 'NG-MOD-HAEM-017', 'NG-MOD-HAEM-019', 'NG-MOD-HAEM-020', 'NG-MOD-IPC-001', 'NG-MOD-IPC-002', 'NG-MOD-IPC-003', 'NG-MOD-IPC-004', 'NG-MOD-IPC-005', 'NG-MOD-IPC-006', 'NG-MOD-IPC-007', 'NG-MOD-IPC-008', 'NG-MOD-IPC-009', 'NG-MOD-IPC-010', 'NG-MOD-IPC-011', 'NG-MOD-IPC-012', 'NG-MOD-IPC-013', 'NG-MOD-IPC-014', 'NG-MOD-IPC-015', 'NG-MOD-IPC-016', 'NG-MOD-IPC-017', 'NG-MOD-IPC-019', 'NG-MOD-IPC-020']]
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
