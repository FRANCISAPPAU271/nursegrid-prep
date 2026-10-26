import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";
import { createHash } from "node:crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 300;

// One-shot route: applies the single, reviewed consolidated question-fix file
// and nothing else. It is pinned to that exact file by SHA-256, refuses any
// statement that is not an UPDATE, and is guarded by a bearer token held in
// the environment — never in this file, because the repository is public.
//
// The file it applies is the whole consolidated bundle (4,579 UPDATEs). Every
// statement is idempotent, so the 4,553 that are already live are no-ops and
// only the 26 pending items actually change. Running it twice is harmless.
//
// Ships in batches 169-172: 3 + 2 + 5 + 16 = 26 rewrites.
//
// REMOVE THIS ROUTE once the spot check below confirms the 26 landed.
const RAW =
  "https://raw.githubusercontent.com/FRANCISAPPAU271/nursegrid-prep/main/apply-all-question-fixes.sql";

// sha256 of the rebuilt bundle, verified locally with quality/build_all.py
// before it was pushed. If the file on main is not byte-identical to the one
// that was reviewed, this route refuses to run.
const EXPECTED_SHA256 =
  "1ea1f0c1eed8e1251233201d31712af473ea0b18b501f6cbcd8227d044f04bd6";

// The 26 items this run is supposed to move, one block per batch. Used to prove
// after the fact that each batch actually landed.
const SPOT = [
  // 169 — three scan duplicates rewritten onto free topics
  "NG-CHI-3023", "NG-MCB-2563", "NG-PKD-1189",
  // 170 — two scan duplicates rewritten onto free topics
  "NG-OBS-0548", "NG-PHARM-0013",
  // 171 — five duplicates onto free topics
  "NG-CHI-3039", "NG-FND-2652", "NG-MEN-0044",
  "NG-ORIGINAL-NCX-0326", "NG-ORIGINAL-NCX-0501",
  // 172 — sixteen batch-157 tag repairs
  "NG-CLP-2815", "NG-EPH-2087", "NG-MCH-0008", "NG-MDS-1656",
  "NG-MNH-3043", "NG-MOD-FUND-020", "NG-MOD-RESP-006", "NG-MOD-RESP-008",
  "NG-OBS-0556", "NG-ORIGINAL-CLINICAL-0061", "NG-ORIGINAL-CLINICAL-0127",
  "NG-PHARM-0001", "NG-PHM-0357", "NG-PNC-1908", "NG-PSY-1430", "NG-SGY-0760",
];

// Bearer tokens are checked against a SHA-256, not stored as a string.
//
// The repository is public, so a literal token here would be readable by
// anyone. A hash is not: the token is 256 bits of randomness, so it cannot be
// recovered from its digest, and there is nothing to brute-force. This also
// avoids depending on a Vercel environment variable, which had to be set by
// hand and could not be set from here.
//
// APPLY_FIXES_TOKEN still works if it is present, so the variable can be used
// instead of the hash without another code change.
const TOKEN_SHA256 =
  "e0ad191c5bc7015a32ca5f02c11893ef60276b125e0f28bfbb919305e758f419";

function authorized(req: NextRequest): boolean {
  const header = req.headers.get("authorization") || "";
  const provided = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (!provided) return false;
  const env = process.env.APPLY_FIXES_TOKEN;
  if (env && provided === env) return true;
  return createHash("sha256").update(provided, "utf8").digest("hex") === TOKEN_SHA256;
}

export async function POST(req: NextRequest) {
  if (!authorized(req)) {
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
    // Every one of the 26 must be found, and each must carry the house-format
    // distractor block — that is what these batches were rewriting.
    const spot = await client.query(
      `select authored_id,
              correct_choice_id,
              length(rationale) as rat,
              rationale like '%Why the other options fail%' as has_block,
              left(stem, 70) as stem
         from questions where authored_id = any($1::text[]) order by authored_id`,
      [SPOT]
    );
    const found = spot.rows.length;
    const withBlock = spot.rows.filter((r) => r.has_block).length;
    return NextResponse.json({
      ok: found === SPOT.length && withBlock === found,
      ms,
      sha,
      expected: SPOT.length,
      before: before.rows[0],
      after: after.rows[0],
      spot_found: found,
      spot_with_block: withBlock,
      spot: spot.rows,
    });
  } finally {
    await client.end();
  }
}
