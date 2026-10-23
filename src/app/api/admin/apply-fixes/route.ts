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
        where authored_id in ('NG-ORIGINAL-NCX-0394','NG-ORIGINAL-NCX-0210','NG-ORIGINAL-NCX-0194','NG-ORIGINAL-NCX-0200','NG-ORIGINAL-NCX-0029','NG-MOD-AP3-004','NG-ORIGINAL-NCX-0386','NG-ORIGINAL-NCX-0372','NG-ORIGINAL-NCX-0113','NG-ORIGINAL-NCX-0083','NG-NUT-3073','NG-LAB-0160','NG-IPC-0060','NG-ADV-0170','NG-ORIGINAL-NCX-0367','NG-ORIGINAL-NCX-0170','NG-ORIGINAL-NCX-0154','NG-ORIGINAL-NCX-0147','NG-ORIGINAL-NCX-0092','NG-NUT-3122','NG-MOD-AP2-017','NG-MCB-2518','NG-FLD-3145','NG-ORIGINAL-NCX-0232','NG-ORIGINAL-NCX-0125','NG-ORIGINAL-NCX-0026','NG-NUT-3089','NG-FLD-3151','NG-ADV-0136','NG-ORIGINAL-NCX-0696','NG-ORIGINAL-NCX-0519','NG-ORIGINAL-NCX-0231','NG-ORIGINAL-NCX-0119','NG-ORIGINAL-CLINICAL-0070','NG-ORIGINAL-CLINICAL-0055','NG-MOD-AP3-020','NG-MCB-2542','NG-ADV-0182','NG-ADV-0163','NG-ORIGINAL-NCX-0299','NG-ORIGINAL-NCX-0104','NG-NUT-3070','NG-MOD-AP2-019','NG-MAT-2358','NG-LAB-0159','NG-DRC-2427','NG-ADV-0169','NG-ADV-0135','NG-ADV-0122','NG-ADV-0103')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
