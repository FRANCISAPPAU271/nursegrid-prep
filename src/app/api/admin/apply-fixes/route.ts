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
        where authored_id in ('NG-MOD-CVN-001','NG-MOD-CVN-002','NG-MOD-CVN-003','NG-MOD-CVN-004','NG-MOD-CVN-005','NG-MOD-CVN-006','NG-MOD-CVN-007','NG-MOD-CVN-008','NG-MOD-CVN-009','NG-MOD-CVN-010','NG-MOD-CVN-011','NG-MOD-CVN-012','NG-MOD-CVN-013','NG-MOD-CVN-014','NG-MOD-CVN-015','NG-MOD-CVN-016','NG-MOD-CVN-017','NG-MOD-CVN-018','NG-MOD-CVN-019','NG-MOD-CVN-020','NG-MOD-CVN-021','NG-MOD-CVN-022','NG-MOD-CVN-023','NG-MOD-CVN-024','NG-MOD-PERIOP-001','NG-MOD-PERIOP-002','NG-MOD-PERIOP-003','NG-MOD-PERIOP-004','NG-MOD-PERIOP-005','NG-MOD-PERIOP-006','NG-MOD-PERIOP-007','NG-MOD-PERIOP-008','NG-MOD-PERIOP-009','NG-MOD-PERIOP-010','NG-MOD-PERIOP-011','NG-MOD-PERIOP-012','NG-MOD-PERIOP-013','NG-MOD-PERIOP-014','NG-MOD-PERIOP-015','NG-MOD-PERIOP-016','NG-MOD-PERIOP-017','NG-MOD-PERIOP-018','NG-MOD-PERIOP-019','NG-MOD-PERIOP-020','NG-MOD-PERIOP-021')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
