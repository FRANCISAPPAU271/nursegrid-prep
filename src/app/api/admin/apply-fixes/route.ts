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
        where authored_id in ('NG-USER-0001','NG-USER-0002','NG-USER-0003','NG-USER-0004','NG-USER-0005','NG-USER-0006','NG-USER-0007','NG-USER-0008','NG-USER-0009','NG-USER-0010','NG-USER-0011','NG-USER-0012','NG-USER-0013','NG-USER-0014','NG-USER-0015','NG-USER-0017','NG-USER-0018','NG-USER-0019','NG-USER-0020','NG-MAT2-0001','NG-MAT2-0002','NG-MAT2-0003','NG-MAT2-0004','NG-MAT2-0005','NG-MAT2-0006','NG-MAT2-0007','NG-MAT2-0008','NG-MAT2-0009','NG-MAT2-0010','NG-MAT2-0011','NG-MAT2-0012','NG-MAT2-0013','NG-MAT2-0014','NG-MAT2-0015','NG-MAT2-0016','NG-MAT2-0017','NG-MAT2-0018','NG-MAT2-0019','NG-MAT2-0020','NG-3500-0001','NG-3500-0002','NG-3500-0003','NG-3500-0004','NG-3500-0005','NG-3500-0006','NG-3500-0007','NG-3500-0008','NG-3500-0009','NG-3500-0010','NG-3500-0011','NG-3500-0013','NG-3500-0014','NG-3500-0015','NG-3500-0016','NG-3500-0017','NG-3500-0018','NG-3500-0019','NG-3500-0020','NG-3500-0021')
        order by authored_id`
    );
    return NextResponse.json({ ok: true, ms: Date.now() - t0, before: before.rows[0], spot: spot.rows });
  } finally {
    await client.end();
  }
}
