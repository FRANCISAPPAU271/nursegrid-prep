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
        where authored_id in ('NG-MOD-CHN-001','NG-MOD-CHN-002','NG-MOD-CHN-003','NG-MOD-CHN-004','NG-MOD-CHN-005','NG-MOD-CHN-006','NG-MOD-CHN-007','NG-MOD-CHN-008','NG-MOD-CHN-009','NG-MOD-CHN-010','NG-MOD-CHN-011','NG-MOD-CHN-012','NG-MOD-CHN-013','NG-MOD-CHN-014','NG-MOD-CHN-015','NG-MOD-CHN-016','NG-MOD-CHN-017','NG-MOD-CHN-018','NG-MOD-CHN-019','NG-MOD-CHN-020','NG-MOD-GERO-001','NG-MOD-GERO-002','NG-MOD-GERO-003','NG-MOD-GERO-004','NG-MOD-GERO-005','NG-MOD-GERO-006','NG-MOD-GERO-007','NG-MOD-GERO-008','NG-MOD-GERO-009','NG-MOD-GERO-010','NG-MOD-GERO-011','NG-MOD-GERO-012','NG-MOD-GERO-013','NG-MOD-GERO-014','NG-MOD-GERO-015','NG-MOD-GERO-016','NG-MOD-GERO-017','NG-MOD-GERO-018','NG-MOD-GERO-019','NG-MOD-GERO-020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
