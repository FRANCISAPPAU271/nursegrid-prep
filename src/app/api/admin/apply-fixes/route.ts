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
        where authored_id in ('NG-MIC-0048','NG-EMG-0062','NG-GER-0599','NG-PUB-0625','NG-PFC-0644','NG-PFC-0650','NG-PFC-0652','NG-BUS-0696','NG-BUS-0729','NG-MHN-0791','NG-MAN-0839','NG-MAN-0840','NG-MAN-0849','NG-MAN-0851','NG-MAN-0856','NG-MAN-0879','NG-IMD-0913','NG-MDS-1641','NG-MDS-1642','NG-MDS-1645','NG-MDS-1662','NG-MDS-1666','NG-MDS-1670','NG-MDS-1676','NG-FLD-2159','NG-MAT-2311','NG-DRC-2391','NG-DRC-2458','NG-DRC-2477','NG-FND-2673','NG-CLN-2923','NG-MCH-0002','NG-MCH-0003','NG-MCH-0004','NG-MCH-0005','NG-MCH-0007','NG-MCH-0008','NG-MCH-0009','NG-MCH-0010','NG-MCH-0011','NG-MCH-0012','NG-MCH-0013','NG-MCH-0014','NG-MCH-0015','NG-MCH-0016','NG-MCH-0017','NG-MCH-0018','NG-MCH-0019','NG-MCH-0020','NG-MCH2-0002','NG-MCH2-0004','NG-MCH2-0005','NG-MCH2-0006','NG-MCH2-0007','NG-MCH2-0008','NG-MCH2-0009','NG-MCH2-0010','NG-MCB-2517','NG-TRD-2088','NG-REVIEW-CARDIO-0001','NG-REVIEW-CARDIO-0002','NG-REVIEW-CARDIO-0003','NG-REVIEW-CARDIO-0004','NG-REVIEW-CARDIO-0005','NG-REVIEW-CARDIO-0006','NG-REVIEW-CARDIO-0007','NG-REVIEW-CARDIO-0008','NG-REVIEW-CARDIO-0009','NG-REVIEW-CARDIO-0010')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
