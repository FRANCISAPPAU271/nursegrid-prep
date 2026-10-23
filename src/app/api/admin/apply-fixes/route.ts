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
        where authored_id in ('NG-ORIGINAL-CLINICAL-0103','NG-ORIGINAL-CLINICAL-0109','NG-ORIGINAL-CLINICAL-0110','NG-ORIGINAL-CLINICAL-0112','NG-ORIGINAL-CLINICAL-0113','NG-ORIGINAL-CLINICAL-0114','NG-ORIGINAL-CLINICAL-0115','NG-ORIGINAL-CLINICAL-0116','NG-ORIGINAL-CLINICAL-0117','NG-ORIGINAL-CLINICAL-0118','NG-ORIGINAL-CLINICAL-0119','NG-ORIGINAL-CLINICAL-0120','NG-ORIGINAL-CLINICAL-0121','NG-ORIGINAL-CLINICAL-0122','NG-ORIGINAL-CLINICAL-0123','NG-ORIGINAL-CLINICAL-0125','NG-ORIGINAL-CLINICAL-0129','NG-ORIGINAL-CLINICAL-0130','NG-ORIGINAL-CLINICAL-0131','NG-ORIGINAL-CLINICAL-0132','NG-ORIGINAL-CLINICAL-0133','NG-ORIGINAL-CLINICAL-0135','NG-ORIGINAL-CLINICAL-0136','NG-ORIGINAL-CLINICAL-0137','NG-ORIGINAL-CLINICAL-0138','NG-ORIGINAL-CLINICAL-0142','NG-ORIGINAL-CLINICAL-0143','NG-ORIGINAL-CLINICAL-0147','NG-ORIGINAL-CLINICAL-0149','NG-ORIGINAL-CLINICAL-0150')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
