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
        where authored_id in ('NG-MOD-CC-001','NG-MOD-CC-002','NG-MOD-CC-003','NG-MOD-CC-004','NG-MOD-CC-005','NG-MOD-CC-006','NG-MOD-CC-007','NG-MOD-CC-008','NG-MOD-CC-009','NG-MOD-CC-010','NG-MOD-CC-011','NG-MOD-CC-012','NG-MOD-CC-013','NG-MOD-CC-014','NG-MOD-CC-015','NG-MOD-CC-016','NG-MOD-CC-017','NG-MOD-CC-019','NG-MOD-CC-020','NG-MOD-PHARM-001','NG-MOD-PHARM-002','NG-MOD-PHARM-003','NG-MOD-PHARM-004','NG-MOD-PHARM-005','NG-MOD-PHARM-007','NG-MOD-PHARM-008','NG-MOD-PHARM-009','NG-MOD-PHARM-010','NG-MOD-PHARM-011','NG-MOD-PHARM-012','NG-MOD-PHARM-013','NG-MOD-PHARM-014','NG-MOD-PHARM-015','NG-MOD-PHARM-016','NG-MOD-PHARM-017','NG-MOD-PHARM-018','NG-MOD-PHARM-019','NG-MOD-PHARM-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
