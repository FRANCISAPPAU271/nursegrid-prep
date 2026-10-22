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
        where authored_id in ('NG-MOD-RESP-001','NG-MOD-RESP-002','NG-MOD-RESP-003','NG-MOD-RESP-004','NG-MOD-RESP-005','NG-MOD-RESP-006','NG-MOD-RESP-007','NG-MOD-RESP-008','NG-MOD-RESP-009','NG-MOD-RESP-010','NG-MOD-RESP-011','NG-MOD-RESP-012','NG-MOD-RESP-013','NG-MOD-RESP-014','NG-MOD-RESP-015','NG-MOD-RESP-016','NG-MOD-RESP-017','NG-MOD-RESP-018','NG-MOD-RESP-019','NG-MOD-RESP-020','NG-MOD-ENDO-001','NG-MOD-ENDO-002','NG-MOD-ENDO-003','NG-MOD-ENDO-004','NG-MOD-ENDO-005','NG-MOD-ENDO-006','NG-MOD-ENDO-007','NG-MOD-ENDO-008','NG-MOD-ENDO-009','NG-MOD-ENDO-010','NG-MOD-ENDO-011','NG-MOD-ENDO-012','NG-MOD-ENDO-013','NG-MOD-ENDO-014','NG-MOD-ENDO-015','NG-MOD-ENDO-016','NG-MOD-ENDO-017','NG-MOD-ENDO-018','NG-MOD-ENDO-019','NG-MOD-ENDO-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
