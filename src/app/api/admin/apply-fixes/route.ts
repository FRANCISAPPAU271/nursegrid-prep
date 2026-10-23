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
        where authored_id in ('NG-PHARM-0001','NG-PHARM-0002','NG-PHARM-0003','NG-PHARM-0004','NG-PHARM-0005','NG-PHARM-0006','NG-PHARM-0007','NG-PHARM-0008','NG-PHARM-0009','NG-PHARM-0010','NG-PHARM-0011','NG-PHARM-0012','NG-PHARM-0013','NG-PHARM-0014','NG-PHARM-0015','NG-PHARM-0016','NG-PHARM-0017','NG-PHARM-0018','NG-PHARM-0020','NG-RESP-0001','NG-RESP-0002','NG-RESP-0003','NG-RESP-0004','NG-RESP-0005','NG-RESP-0006','NG-RESP-0007','NG-RESP-0008','NG-RESP-0010','NG-RESP-0011','NG-RESP-0012','NG-RESP-0013','NG-RESP-0015','NG-RESP-0016','NG-RESP-0017','NG-RESP-0018','NG-RESP-0019','NG-RESP-0020','NG-PEDS2-0001','NG-PEDS2-0002','NG-PEDS2-0003','NG-PEDS2-0004','NG-PEDS2-0005','NG-PEDS2-0006','NG-PEDS2-0007','NG-PEDS2-0009','NG-PEDS2-0010','NG-PEDS2-0011','NG-PEDS2-0012','NG-PEDS2-0013','NG-PEDS2-0014','NG-PEDS2-0016','NG-PEDS2-0017','NG-PEDS2-0018','NG-PEDS2-0019','NG-PEDS2-0020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
