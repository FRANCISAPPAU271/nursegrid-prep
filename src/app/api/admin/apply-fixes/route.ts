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
        where authored_id in ('NG-ORIGINAL-NCX-0886','NG-ORIGINAL-NCX-0738','NG-ORIGINAL-NCX-0549','NG-ORIGINAL-NCX-0470','NG-ORIGINAL-NCX-0463','NG-ORIGINAL-NCX-0410','NG-ORIGINAL-NCX-0364','NG-ORIGINAL-NCX-0347','NG-ORIGINAL-NCX-0338','NG-ORIGINAL-NCX-0266','NG-ORIGINAL-NCX-0214','NG-ORIGINAL-NCX-0168','NG-ORIGINAL-NCX-0047','NG-ORIGINAL-NCX-0008','NG-ORIGINAL-CLINICAL-0062','NG-NUT-3093','NG-NUT-3072','NG-MSN-2715','NG-MEN-3180','NG-MCB-2523','NG-MAT-2290','NG-EMG-0065','NG-CLN-2906','NG-CHD-1753','NG-ANP-0031','NG-ADV-0098','NG-ORIGINAL-NCX-0739','NG-ORIGINAL-NCX-0723','NG-ORIGINAL-NCX-0523','NG-ORIGINAL-NCX-0486','NG-ORIGINAL-NCX-0387','NG-ORIGINAL-NCX-0371','NG-ORIGINAL-NCX-0289','NG-ORIGINAL-NCX-0256','NG-ORIGINAL-NCX-0227','NG-ORIGINAL-NCX-0226','NG-ORIGINAL-NCX-0204','NG-MSN-2775','NG-MOD-AP3-006','NG-MNH-3048','NG-MAT-2368','NG-MAT-2343','NG-MAT-2336','NG-MAT-2329','NG-JUS-2231','NG-IPC-0058','NG-FND-2687','NG-FLD-3146','NG-EMG-0067','NG-DRC-2422','NG-CLP-2826','NG-CHI-3030','NG-ADV-0174','NG-PED-0475','NG-ORIGINAL-NCX-0762','NG-ORIGINAL-NCX-0692','NG-ORIGINAL-NCX-0657','NG-ORIGINAL-NCX-0572','NG-ORIGINAL-NCX-0530','NG-ORIGINAL-NCX-0526')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
