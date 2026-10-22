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
      `select authored_id, correct_choice_id, left(stem, 56) as stem, length(rationale) as rat from questions
        where authored_id in ('NG-MOD-MH-001','NG-MOD-MH-002','NG-MOD-MH-003','NG-MOD-MH-004','NG-MOD-MH-005','NG-MOD-MH-006','NG-MOD-MH-007','NG-MOD-MH-008','NG-MOD-MH-009','NG-MOD-MH-010','NG-MOD-MH-011','NG-MOD-MH-012','NG-MOD-MH-013','NG-MOD-MH-014','NG-MOD-MH-015','NG-MOD-MH-016','NG-MOD-MH-017','NG-MOD-MH-018','NG-MOD-MH-019','NG-MOD-MH-020','NG-MOD-COMM-001','NG-MOD-COMM-002','NG-MOD-COMM-003','NG-MOD-COMM-004','NG-MOD-COMM-005','NG-MOD-COMM-006','NG-MOD-COMM-007','NG-MOD-COMM-008','NG-MOD-COMM-009','NG-MOD-COMM-010','NG-MOD-COMM-011','NG-MOD-COMM-012','NG-MOD-COMM-013','NG-MOD-COMM-014','NG-MOD-COMM-015','NG-MOD-COMM-016','NG-MOD-COMM-017','NG-MOD-COMM-018','NG-MOD-COMM-019','NG-MOD-COMM-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
