import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { AUTHORED_QUESTIONS, AUTHORED_COUNT } from "@/db/authored-bank";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const TIME_BUDGET_MS = 30_000;
const BATCH_SIZE = 200;

// ---------------------------------------------------------------------------
// Admin action: refresh the TEXT of existing question rows from the payload.
//
// Why this exists
// ---------------
// reseed-repair reconciles which questions exist. It compares id SETS and
// inserts whatever is missing. It never touches a row whose authored_id is
// already present -- that is deliberate, because it is what makes it safe to
// run against live data.
//
// So when the wording of an already-seeded question changes in the payload,
// reseed-repair reports "countsMatch: true" and does nothing. The counts are
// right and the text is stale. That is exactly what happened when emphasis
// markers were added to 932 stems: the 140 genuinely new rows arrived with
// their markers, and the 3,059 rows already in the table kept the old text.
//
// This route closes that gap. It compares stem/rationale/strategy/choices
// field by field and UPDATEs only the rows that actually differ. Rows that
// already match are skipped, so a second run reports zero changes.
//
// It never inserts and never deletes -- run reseed-repair for that. Attempts
// and bookmarks reference question ids, which are untouched here, so progress
// is preserved.
//
// Read-only until ?apply=1.
// ---------------------------------------------------------------------------
export async function GET(request: Request) {
  const startedAt = Date.now();

  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  const apply = new URL(request.url).searchParams.get("apply") === "1";

  if (AUTHORED_QUESTIONS.length !== AUTHORED_COUNT) {
    return NextResponse.json(
      { error: `Payload mismatch: ${AUTHORED_QUESTIONS.length} rows vs AUTHORED_COUNT ${AUTHORED_COUNT}` },
      { status: 500 },
    );
  }

  // ---- Current text of every authored row ---------------------------------
  const currentRes = await db.execute(
    sql`SELECT "authored_id" AS id, "stem", "rationale", "strategy", "choices", "media_url"
        FROM "questions" WHERE "authored_id" IS NOT NULL`,
  );

  type Row = {
    id: string;
    stem: string;
    rationale: string;
    strategy: string;
    choices: unknown;
    media_url: string | null;
  };
  const current = new Map<string, Row>();
  for (const r of currentRes.rows as Row[]) current.set(r.id, r);

  // ---- Which rows differ? -------------------------------------------------
  const norm = (v: unknown) => JSON.stringify(v ?? null);
  const stale: typeof AUTHORED_QUESTIONS = [];
  let notInDb = 0;

  for (const q of AUTHORED_QUESTIONS) {
    const row = current.get(q.authoredId);
    if (!row) {
      notInDb++;
      continue; // reseed-repair's job, not ours
    }
    const differs =
      row.stem !== q.stem ||
      row.rationale !== q.rationale ||
      row.strategy !== q.strategy ||
      norm(row.choices) !== norm(q.choices) ||
      (row.media_url ?? null) !== (q.mediaUrl ?? null);
    if (differs) stale.push(q);
  }

  const withMarkers = AUTHORED_QUESTIONS.filter((q) => q.stem.includes("**")).length;
  const dbWithMarkers = [...current.values()].filter((r) => r.stem.includes("**")).length;

  if (!apply) {
    return NextResponse.json({
      ok: true,
      mode: "inspect",
      message:
        stale.length === 0
          ? "Nothing to refresh: every row already matches the payload."
          : `${stale.length} row(s) have stale text. Re-run with ?apply=1.`,
      staleRows: stale.length,
      staleSample: stale.slice(0, 10).map((q) => q.authoredId),
      notInDatabase: notInDb,
      emphasis: { inPayload: withMarkers, inDatabase: dbWithMarkers },
      rowsInDatabase: current.size,
      applyUrl: "/api/admin/refresh-text?apply=1",
    });
  }

  // ---- Apply --------------------------------------------------------------
  let updated = 0;
  while (updated < stale.length) {
    if (Date.now() - startedAt > TIME_BUDGET_MS) break;

    const batch = stale.slice(updated, updated + BATCH_SIZE);
    for (const q of batch) {
      await db.execute(sql`
        UPDATE "questions" SET
          "stem"          = ${q.stem},
          "rationale"     = ${q.rationale},
          "strategy"      = ${q.strategy},
          "choices"       = ${JSON.stringify(q.choices)}::jsonb,
          "media_url"     = ${q.mediaUrl ?? null},
          "media_caption" = ${q.mediaCaption ?? null}
        WHERE "authored_id" = ${q.authoredId}
      `);
    }
    updated += batch.length;
  }

  const done = updated >= stale.length;
  const afterRes = await db.execute(
    sql`SELECT COUNT(*)::int AS n FROM "questions"
        WHERE "authored_id" IS NOT NULL AND "stem" LIKE '%**%'`,
  );
  const nowWithMarkers = (afterRes.rows as { n: number }[])[0]?.n ?? 0;

  return NextResponse.json({
    ok: true,
    mode: "apply",
    done,
    message: done
      ? `Refreshed. ${updated} row(s) updated; ${nowWithMarkers} stem(s) now carry emphasis.`
      : `Updated ${updated} of ${stale.length}. Refresh to continue.`,
    staleAtStart: stale.length,
    updatedThisVisit: updated,
    emphasis: { inPayload: withMarkers, inDatabaseNow: nowWithMarkers },
    elapsedMs: Date.now() - startedAt,
  });
}
