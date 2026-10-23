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
        where authored_id in ('NG-PNC-1909','NG-ORIGINAL-NCX-1013','NG-ORIGINAL-NCX-0778','NG-ORIGINAL-NCX-0732','NG-ORIGINAL-NCX-0668','NG-ORIGINAL-NCX-0664','NG-ORIGINAL-NCX-0619','NG-ORIGINAL-NCX-0597','NG-ORIGINAL-NCX-0539','NG-ORIGINAL-NCX-0517','NG-ORIGINAL-NCX-0468','NG-ORIGINAL-NCX-0450','NG-ORIGINAL-NCX-0434','NG-ORIGINAL-NCX-0398','NG-ORIGINAL-NCX-0389','NG-ORIGINAL-NCX-0359','NG-ORIGINAL-NCX-0239','NG-ORIGINAL-NCX-0174','NG-ORIGINAL-NCX-0005','NG-MSN-2766','NG-MSN-2752','NG-MIC-0046','NG-MEN-3196','NG-MCB-2513','NG-FND-2682','NG-FLD-2146','NG-DRC-2453','NG-DRC-2445','NG-DRC-2431','NG-CLN-2917','NG-CHP-2247','NG-PSY-1427','NG-ORIGINAL-NCX-0856','NG-ORIGINAL-NCX-0841','NG-ORIGINAL-NCX-0824','NG-ORIGINAL-NCX-0794','NG-ORIGINAL-NCX-0717','NG-ORIGINAL-NCX-0709','NG-ORIGINAL-NCX-0603','NG-ORIGINAL-NCX-0536','NG-ORIGINAL-NCX-0498','NG-ORIGINAL-NCX-0397','NG-ORIGINAL-NCX-0373','NG-ORIGINAL-NCX-0355','NG-ORIGINAL-NCX-0346','NG-ORIGINAL-NCX-0333','NG-ORIGINAL-NCX-0296','NG-ORIGINAL-NCX-0066','NG-ORIGINAL-NCX-0051','NG-ORIGINAL-CLINICAL-0056','NG-OBS-0553','NG-NUT-3127','NG-NUT-3124','NG-MSN-2731','NG-MSN-2725','NG-MOD-AP3-019','NG-MOD-AP3-002','NG-MOD-AP2-007','NG-MCB-2584','NG-MCB-2536','NG-MAT-2376','NG-MAT-2353','NG-MAT-2338','NG-LAB-0153','NG-LAB-0152','NG-KID-3219','NG-KID-3201','NG-JUS-2217','NG-JUS-2216','NG-IPC-0023','NG-FUN-0005','NG-FND-2679','NG-FND-2662','NG-FND-2629','NG-FND-2588','NG-FLD-3178','NG-DRC-2484','NG-DRC-2468','NG-DRC-2451','NG-CLP-2805','NG-CLN-2979','NG-CHP-2287','NG-CHP-2248','NG-CHI-3026','NG-BATCH2-0036','NG-ANP-0085')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
