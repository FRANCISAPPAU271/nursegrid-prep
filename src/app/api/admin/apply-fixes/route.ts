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
        where authored_id in ('NG-ORIGINAL-CLINICAL-0033','NG-ORIGINAL-CLINICAL-0034','NG-ORIGINAL-CLINICAL-0035','NG-ORIGINAL-CLINICAL-0036','NG-ORIGINAL-CLINICAL-0037','NG-ORIGINAL-CLINICAL-0038','NG-ORIGINAL-CLINICAL-0039','NG-ORIGINAL-CLINICAL-0040','NG-ORIGINAL-CLINICAL-0041','NG-ORIGINAL-CLINICAL-0042','NG-ORIGINAL-CLINICAL-0043','NG-ORIGINAL-CLINICAL-0044','NG-ORIGINAL-CLINICAL-0045','NG-ORIGINAL-CLINICAL-0046','NG-ORIGINAL-CLINICAL-0047','NG-ORIGINAL-CLINICAL-0048','NG-ORIGINAL-CLINICAL-0049','NG-ORIGINAL-CLINICAL-0050','NG-ORIGINAL-CLINICAL-0051','NG-ORIGINAL-CLINICAL-0063','NG-ORIGINAL-CLINICAL-0066','NG-ORIGINAL-CLINICAL-0067','NG-ORIGINAL-CLINICAL-0069','NG-ORIGINAL-CLINICAL-0071','NG-ORIGINAL-CLINICAL-0072','NG-ORIGINAL-CLINICAL-0074','NG-ORIGINAL-CLINICAL-0076','NG-ORIGINAL-CLINICAL-0091','NG-ORIGINAL-CLINICAL-0099','NG-ORIGINAL-CLINICAL-0102')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
