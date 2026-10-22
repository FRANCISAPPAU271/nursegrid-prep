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
        where authored_id in ('NG-MOD-PAED-001','NG-MOD-PAED-002','NG-MOD-PAED-003','NG-MOD-PAED-004','NG-MOD-PAED-005','NG-MOD-PAED-006','NG-MOD-PAED-007','NG-MOD-PAED-008','NG-MOD-PAED-009','NG-MOD-PAED-010','NG-MOD-PAED-011','NG-MOD-PAED-012','NG-MOD-PAED-013','NG-MOD-PAED-014','NG-MOD-PAED-015','NG-MOD-PAED-016','NG-MOD-PAED-017','NG-MOD-PAED-018','NG-MOD-PAED-019','NG-MOD-PAED-020','NG-MOD-EMERG-001','NG-MOD-EMERG-002','NG-MOD-EMERG-003','NG-MOD-EMERG-004','NG-MOD-EMERG-005','NG-MOD-EMERG-006','NG-MOD-EMERG-007','NG-MOD-EMERG-008','NG-MOD-EMERG-009','NG-MOD-EMERG-010','NG-MOD-EMERG-011','NG-MOD-EMERG-012','NG-MOD-EMERG-013','NG-MOD-EMERG-014','NG-MOD-EMERG-015','NG-MOD-EMERG-016','NG-MOD-EMERG-017','NG-MOD-EMERG-018','NG-MOD-EMERG-019','NG-MOD-EMERG-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
