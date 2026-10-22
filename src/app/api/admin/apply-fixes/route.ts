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
        where authored_id in ('NG-BUS-0688','NG-BUS-0719','NG-MAN-0861','NG-ORIGINAL-CLINICAL-0055','NG-ORIGINAL-CLINICAL-0058','NG-ORIGINAL-CLINICAL-0059','NG-ORIGINAL-CLINICAL-0060','NG-ORIGINAL-CLINICAL-0077','NG-ORIGINAL-CLINICAL-0078','NG-ORIGINAL-CLINICAL-0081','NG-ORIGINAL-CLINICAL-0082','NG-ORIGINAL-CLINICAL-0084','NG-ORIGINAL-CLINICAL-0085','NG-ORIGINAL-CLINICAL-0086','NG-ORIGINAL-CLINICAL-0087','NG-ORIGINAL-CLINICAL-0089','NG-ORIGINAL-CLINICAL-0094','NG-ORIGINAL-CLINICAL-0100','NG-ORIGINAL-CLINICAL-0106','NG-ORIGINAL-CLINICAL-0111','NG-ORIGINAL-CLINICAL-0124','NG-ORIGINAL-CLINICAL-0126','NG-ORIGINAL-CLINICAL-0127','NG-ORIGINAL-CLINICAL-0128','NG-ORIGINAL-CLINICAL-0134','NG-ORIGINAL-CLINICAL-0139','NG-ORIGINAL-CLINICAL-0140','NG-ORIGINAL-CLINICAL-0141','NG-ORIGINAL-CLINICAL-0144','NG-ORIGINAL-CLINICAL-0145','NG-ORIGINAL-CLINICAL-0146','NG-ORIGINAL-CLINICAL-0164')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
