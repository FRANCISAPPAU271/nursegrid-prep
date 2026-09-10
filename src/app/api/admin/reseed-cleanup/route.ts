import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { AUTHORED_COUNT, AUTHORED_DIAGRAM_COUNT } from "@/db/authored-bank";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Admin action: remove leftover question rows from an interrupted reseed.
//
// Why this is needed
// ------------------
// The first version of /api/admin/reseed-authored inserted a batch and then
// stamped source/authored_id/media with one UPDATE per row. Postgres
// autocommits each statement, so when that version hit the 60s function
// limit, rows that had been inserted but not yet stamped stayed behind. The
// resume counter only counts stamped rows, so those positions were inserted a
// second time, leaving unstamped orphans in the table.
//
// This route removes exactly two kinds of junk:
//   1. rows whose "source" is not 'authored'  (never stamped, so orphaned)
//   2. duplicate "authored_id" values         (keeps the earliest row)
//
// It is read-only until ?apply=1 is supplied, so you can inspect the damage
// before changing anything. Re-running after a successful clean is a no-op.
// ---------------------------------------------------------------------------
export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  const apply = new URL(request.url).searchParams.get("apply") === "1";

  // ---- Diagnose -----------------------------------------------------------
  const bySource = await db.execute(sql`
    SELECT COALESCE("source", '(null)') AS source, count(*)::int AS n
    FROM "questions" GROUP BY 1 ORDER BY 2 DESC
  `);

  const orphanRes = await db.execute(sql`
    SELECT count(*)::int AS n FROM "questions"
    WHERE "source" IS DISTINCT FROM 'authored'
  `);
  const orphans = (orphanRes.rows[0] as { n: number }).n;

  const dupRes = await db.execute(sql`
    SELECT count(*)::int AS n FROM (
      SELECT "authored_id" FROM "questions"
      WHERE "authored_id" IS NOT NULL
      GROUP BY "authored_id" HAVING count(*) > 1
    ) d
  `);
  const duplicateIds = (dupRes.rows[0] as { n: number }).n;

  const before = await totals();

  if (!apply) {
    return NextResponse.json({
      ok: true,
      mode: "inspect",
      message:
        orphans === 0 && duplicateIds === 0
          ? "Nothing to clean. The table already holds only stamped authored rows."
          : `Found ${orphans} unstamped row(s) and ${duplicateIds} duplicated authored_id(s). Re-run with ?apply=1 to remove them.`,
      rowsBySource: bySource.rows,
      unstampedRows: orphans,
      duplicatedAuthoredIds: duplicateIds,
      current: before,
      expected: { questions: AUTHORED_COUNT, diagrams: AUTHORED_DIAGRAM_COUNT },
      applyUrl: "/api/admin/reseed-cleanup?apply=1",
    });
  }

  // ---- Apply --------------------------------------------------------------
  // 1. Drop rows that were never stamped: they are orphans from the
  //    interrupted run, and every legitimate row carries source='authored'.
  const delOrphans = await db.execute(sql`
    DELETE FROM "questions"
    WHERE "source" IS DISTINCT FROM 'authored'
    RETURNING "id"
  `);

  // 2. Drop duplicate authored_id rows, keeping the earliest of each.
  const delDupes = await db.execute(sql`
    DELETE FROM "questions" q
    USING (
      SELECT "id",
             row_number() OVER (PARTITION BY "authored_id" ORDER BY "created_at", "id") AS rn
      FROM "questions"
      WHERE "authored_id" IS NOT NULL
    ) d
    WHERE q."id" = d."id" AND d.rn > 1
    RETURNING q."id"
  `);

  const after = await totals();
  const countsMatch =
    after.questions === AUTHORED_COUNT && after.diagrams === AUTHORED_DIAGRAM_COUNT;

  return NextResponse.json({
    ok: true,
    mode: "apply",
    countsMatch,
    message: countsMatch
      ? `Clean. The table now holds exactly ${after.questions} authored questions and ${after.diagrams} diagrams.`
      : `Removed the junk, but totals still do not match: expected ${AUTHORED_COUNT}/${AUTHORED_DIAGRAM_COUNT}, found ${after.questions}/${after.diagrams}.`,
    unstampedRowsDeleted: delOrphans.rows.length,
    duplicateRowsDeleted: delDupes.rows.length,
    before,
    after,
    expected: { questions: AUTHORED_COUNT, diagrams: AUTHORED_DIAGRAM_COUNT },
  });
}

async function totals() {
  const q = await db.execute(sql`SELECT count(*)::int AS n FROM "questions"`);
  const m = await db.execute(
    sql`SELECT count(*)::int AS n FROM "questions" WHERE "media_url" IS NOT NULL`,
  );
  const a = await db.execute(
    sql`SELECT count(DISTINCT "authored_id")::int AS n FROM "questions" WHERE "authored_id" IS NOT NULL`,
  );
  return {
    questions: (q.rows[0] as { n: number }).n,
    diagrams: (m.rows[0] as { n: number }).n,
    distinctAuthoredIds: (a.rows[0] as { n: number }).n,
  };
}
