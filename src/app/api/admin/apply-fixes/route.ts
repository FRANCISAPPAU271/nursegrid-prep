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
        where authored_id in ('NG-ORIGINAL-NCX-0527','NG-ORIGINAL-NCX-0480','NG-ORIGINAL-NCX-0421','NG-ORIGINAL-NCX-0311','NG-ORIGINAL-CLINICAL-0080','NG-NUT-3126','NG-NUT-3118','NG-MOD-AP3-017','NG-MOD-AP2-009','NG-LAB-0154','NG-FLD-3147','NG-EMG-0064','NG-BST-1279','NG-ADV-0161','NG-ORIGINAL-NCX-0783','NG-ORIGINAL-NCX-0515','NG-ORIGINAL-NCX-0327','NG-ORIGINAL-NCX-0108','NG-ORIGINAL-NCX-0071','NG-ORIGINAL-NCX-0069','NG-ORIGINAL-NCX-0058','NG-ORIGINAL-CLINICAL-0088','NG-NUT-3128','NG-MOD-AP3-009','NG-MOD-AP3-008','NG-MIC-0045','NG-MEN-3195','NG-MEN-3185','NG-MEN-3182','NG-FLD-3179','NG-FLD-3176','NG-ORIGINAL-NCX-0447','NG-ORIGINAL-NCX-0391','NG-ORIGINAL-NCX-0352','NG-ORIGINAL-NCX-0279','NG-ORIGINAL-NCX-0209','NG-ORIGINAL-NCX-0202','NG-ORIGINAL-NCX-0070','NG-NUT-3121','NG-NUT-3109','NG-FND-2595','NG-ADV-0114','NG-ORIGINAL-NCX-0326','NG-ORIGINAL-NCX-0138','NG-ORIGINAL-NCX-0065','NG-ORIGINAL-CLINICAL-0145','NG-ORIGINAL-CLINICAL-0085','NG-NUT-3136','NG-NUT-3112','NG-NUT-3091','NG-MOD-AP3-007','NG-MEN-3198','NG-MAT-2374','NG-MAT-2310','NG-IPC-0059','NG-RES-0009','NG-ORIGINAL-NCX-0405','NG-ORIGINAL-NCX-0395','NG-ORIGINAL-NCX-0220','NG-ORIGINAL-NCX-0199')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
