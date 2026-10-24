import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { createHash } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 300;

// One-shot route: applies the single, reviewed consolidated question-fix file
// (batches 162-168, 65 rewrites) and nothing else. It is pinned to that exact
// file by SHA-256, refuses any statement that is not an UPDATE, and is guarded
// by a bearer token. It is removed again once the fix has landed.
const RAW =
  "https://raw.githubusercontent.com/FRANCISAPPAU271/nursegrid-prep/main/apply-all-question-fixes.sql";

const EXPECTED_SHA256 =
  "2fa0437c5d6cd78957d744ce1d3e5bd5f64a9ca6c1c9a0ffe1810fc3b3c350dc";

// A sample spanning every batch in the bundle, used to prove the update landed.
const SPOT = [
  "NG-NCX-0914", "NG-MHN-0797", "NG-BST-1283",            // 162
  "NG-SRG-0528", "NG-MOD-PERIOP-017",                      // 163
  "NG-MED-0016", "NG-ORIGINAL-NCX-0397",                   // 164
  "NG-ORIGINAL-NCX-0601", "NG-PKD-1224",                   // 165
  "NG-ADV-0140", "NG-MED-0321",                            // 166
  "NG-DRC-2432", "NG-CPD-1956",                            // 167
  "NG-DRC-2478", "NG-PHM-0362",                            // 168
];

export async function POST(req: NextRequest) {
  const expected = process.env.APPLY_FIXES_TOKEN;
  if (!expected || req.headers.get("authorization") !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const res = await fetch(RAW, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ error: `fetch ${res.status}` }, { status: 502 });
  const sql = await res.text();

  const sha = createHash("sha256").update(Buffer.from(sql, "utf8")).digest("hex");
  if (sha !== EXPECTED_SHA256) {
    return NextResponse.json({ error: "unexpected file", sha }, { status: 409 });
  }
  const forbidden = (sql.match(/^(DELETE|TRUNCATE|DROP|ALTER|CREATE|INSERT)\s/gm) || []).length;
  if (forbidden) return NextResponse.json({ error: `refusing: ${forbidden} non-UPDATE` }, { status: 400 });

  const url = process.env.DATABASE_URL || process.env.DATABASEURL;
  if (!url) return NextResponse.json({ error: "no database url" }, { status: 500 });
  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
  await client.connect();
  try {
    const before = await client.query(
      `select count(*)::int as questions,
              count(*) filter (where rationale like '%Why the other options fail%')::int as with_block
         from questions`
    );
    const t0 = Date.now();
    await client.query(sql);
    const ms = Date.now() - t0;
    const after = await client.query(
      `select count(*)::int as questions,
              count(*) filter (where rationale like '%Why the other options fail%')::int as with_block
         from questions`
    );
    const spot = await client.query(
      `select authored_id, correct_choice_id, length(rationale) as rat, left(stem, 60) as stem
         from questions where authored_id = any($1::text[]) order by authored_id`,
      [SPOT]
    );
    return NextResponse.json({
      ok: true, ms, sha,
      before: before.rows[0], after: after.rows[0],
      spot: spot.rows, spot_found: spot.rows.length,
    });
  } finally {
    await client.end();
  }
}
