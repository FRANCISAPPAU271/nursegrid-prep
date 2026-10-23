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
        where authored_id in ('NG-FLUID-0001','NG-FLUID-0002','NG-FLUID-0003','NG-FLUID-0004','NG-FLUID-0005','NG-FLUID-0006','NG-FLUID-0007','NG-FLUID-0008','NG-FLUID-0009','NG-FLUID-0010','NG-FLUID-0011','NG-FLUID-0012','NG-FLUID-0013','NG-FLUID-0014','NG-FLUID-0015','NG-FLUID-0016','NG-FLUID-0017','NG-FLUID-0018','NG-FLUID-0019','NG-FLUID-0020','NG-PEDS-0001','NG-PEDS-0002','NG-PEDS-0003','NG-PEDS-0004','NG-PEDS-0005','NG-PEDS-0006','NG-PEDS-0007','NG-PEDS-0008','NG-PEDS-0009','NG-PEDS-0010','NG-PEDS-0011','NG-PEDS-0012','NG-PEDS-0013','NG-PEDS-0014','NG-PEDS-0015','NG-PEDS-0016','NG-PEDS-0017','NG-PEDS-0018','NG-PEDS-0019','NG-PEDS-0020','NG-MIX-0001','NG-MIX-0002','NG-MIX-0003','NG-MIX-0004','NG-MIX-0005','NG-MIX-0006','NG-MIX-0007','NG-MIX-0008','NG-MIX-0009','NG-MIX-0010','NG-MIX-0011','NG-MIX-0012','NG-MIX-0013','NG-MIX-0014','NG-MIX-0015','NG-MIX-0016','NG-MIX-0017','NG-MIX-0018','NG-MIX-0019','NG-MIX-0020')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
