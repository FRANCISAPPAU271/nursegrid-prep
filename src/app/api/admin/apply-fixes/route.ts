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
        where authored_id in ('NG-ORIGINAL-NCX-0929','NG-ORIGINAL-NCX-0529','NG-ORIGINAL-NCX-0415','NG-ORIGINAL-NCX-0142','NG-NUT-3138','NG-NUT-3133','NG-NUT-3097','NG-FLD-3150','NG-ADV-0171','NG-ORIGINAL-NCX-0376','NG-ORIGINAL-NCX-0246','NG-ORIGINAL-NCX-0234','NG-ORIGINAL-NCX-0179','NG-ORIGINAL-NCX-0140','NG-ORIGINAL-NCX-0057','NG-ORIGINAL-NCX-0028','NG-ORIGINAL-CLINICAL-0144','NG-ORIGINAL-CLINICAL-0059','NG-NUT-3134','NG-NUT-3129','NG-NUT-3123','NG-NUT-3113','NG-NUT-3111','NG-MOD-AP3-012','NG-MOD-AP3-010','NG-ADV-0134','NG-ADV-0120','NG-ORIGINAL-NCX-0190','NG-ORIGINAL-NCX-0169','NG-ORIGINAL-NCX-0089','NG-ORIGINAL-NCX-0054','NG-NUT-3110','NG-MSN-2693','NG-FND-2598','NG-FLD-3175','NG-FLD-3165','NG-PKD-1235','NG-ORIGINAL-NCX-0959','NG-ORIGINAL-NCX-0805','NG-ORIGINAL-NCX-0499','NG-ORIGINAL-NCX-0418','NG-ORIGINAL-NCX-0307','NG-ORIGINAL-NCX-0243','NG-ORIGINAL-NCX-0184','NG-ORIGINAL-NCX-0088','NG-ORIGINAL-NCX-0064','NG-ORIGINAL-NCX-0061','NG-ORIGINAL-NCX-0042','NG-ORIGINAL-NCX-0003','NG-ORIGINAL-CLINICAL-0127','NG-NUT-3137','NG-NUT-3135','NG-NUT-3130','NG-NUT-3105','NG-NUT-3060','NG-NUT-0024','NG-MSN-2772','NG-MIC-0047','NG-MCB-2566','NG-LAB-0190','NG-KID-3200','NG-FND-2627','NG-FLD-3170','NG-FLD-3169','NG-FLD-3162','NG-DRC-2475','NG-DRC-2434','NG-ORIGINAL-NCX-0547','NG-ORIGINAL-NCX-0445','NG-ORIGINAL-NCX-0341','NG-ORIGINAL-NCX-0337','NG-ORIGINAL-NCX-0207','NG-ORIGINAL-NCX-0102','NG-ORIGINAL-NCX-0059','NG-ORIGINAL-NCX-0052','NG-ORIGINAL-NCX-0023','NG-ORIGINAL-CLINICAL-0128','NG-ORIGINAL-CLINICAL-0092','NG-ORIGINAL-CLINICAL-0077','NG-NUT-3131','NG-MOD-AP2-016','NG-MOD-AP2-005','NG-MEN-3197','NG-MCB-2577','NG-MAT-2379','NG-MAN-0861','NG-JUS-2223','NG-FLD-3172','NG-FLD-3163','NG-FLD-2165','NG-DRC-2486','NG-CPD-1964','NG-ADV-0175','NG-ADV-0131','NG-TRD-2132','NG-ORIGINAL-NCX-0612','NG-ORIGINAL-NCX-0408','NG-ORIGINAL-NCX-0361','NG-ORIGINAL-NCX-0344','NG-ORIGINAL-NCX-0151','NG-ORIGINAL-NCX-0120','NG-ORIGINAL-NCX-0037','NG-MSN-2700','NG-MEN-3199','NG-LAB-0193','NG-KID-3208','NG-KID-3204','NG-IPC-0057','NG-FND-2642','NG-FLD-3159','NG-FLD-3158','NG-ELE-2983','NG-DRC-2420','NG-CHI-3028','NG-ANP-0079','NG-ADV-0177','NG-ADV-0118','NG-ADV-0117','NG-ORIGINAL-NCX-0393','NG-ORIGINAL-NCX-0381','NG-ORIGINAL-NCX-0303','NG-ORIGINAL-NCX-0295','NG-ORIGINAL-NCX-0294','NG-ORIGINAL-NCX-0273','NG-ORIGINAL-NCX-0270','NG-ORIGINAL-NCX-0143','NG-ORIGINAL-NCX-0038','NG-ORIGINAL-NCX-0013','NG-ORIGINAL-CLINICAL-0086','NG-NUT-3084','NG-MOD-AP3-015','NG-MOD-AP3-005','NG-MOD-AP2-020','NG-MCB-2581','NG-MCB-2551','NG-MCB-2491','NG-MAT-2386','NG-MAT-2375','NG-MAT-2305','NG-MAN-0857','NG-LAB-0158','NG-KID-3211','NG-FND-2647','NG-FND-2624','NG-FND-2600','NG-CLN-2933','NG-CLN-2909','NG-CHP-2276','NG-CHP-2263','NG-CHI-3020','NG-ADV-0137','NG-ADV-0119')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
