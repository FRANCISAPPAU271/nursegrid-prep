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
        where authored_id in ('NG-MOD-NEURO-001','NG-MOD-NEURO-002','NG-MOD-NEURO-003','NG-MOD-NEURO-004','NG-MOD-NEURO-005','NG-MOD-NEURO-006','NG-MOD-NEURO-007','NG-MOD-NEURO-008','NG-MOD-NEURO-009','NG-MOD-NEURO-010','NG-MOD-NEURO-011','NG-MOD-NEURO-012','NG-MOD-NEURO-013','NG-MOD-NEURO-014','NG-MOD-NEURO-015','NG-MOD-NEURO-016','NG-MOD-NEURO-017','NG-MOD-NEURO-018','NG-MOD-NEURO-019','NG-MOD-NEURO-020','NG-MOD-MSK-001','NG-MOD-MSK-002','NG-MOD-MSK-003','NG-MOD-MSK-004','NG-MOD-MSK-005','NG-MOD-MSK-006','NG-MOD-MSK-007','NG-MOD-MSK-008','NG-MOD-MSK-009','NG-MOD-MSK-010','NG-MOD-MSK-011','NG-MOD-MSK-012','NG-MOD-MSK-013','NG-MOD-MSK-014','NG-MOD-MSK-015','NG-MOD-MSK-016','NG-MOD-MSK-017','NG-MOD-MSK-018','NG-MOD-MSK-019','NG-MOD-MSK-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
