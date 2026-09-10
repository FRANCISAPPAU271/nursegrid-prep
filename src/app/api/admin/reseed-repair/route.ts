import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questionCategories } from "@/db/schema";
import { sql } from "drizzle-orm";
import { AUTHORED_QUESTIONS, AUTHORED_COUNT, AUTHORED_DIAGRAM_COUNT } from "@/db/authored-bank";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const TIME_BUDGET_MS = 30_000;
const BATCH_SIZE = 200;

// ---------------------------------------------------------------------------
// Admin action: reconcile the questions table against the authored bank.
//
// Why this exists
// ---------------
// The earlier reseed resumed by COUNTING rows with source='authored' and
// continuing from that offset. That assumes the stamped rows form an unbroken
// prefix of the payload. After a mid-run timeout they did not, so the resume
// point was wrong: some questions were inserted twice and others never at all.
// The table ended up with 3,006 distinct authored_ids instead of 3,059.
//
// This route does not count anything. It compares the SET of authored_ids in
// the database against the SET in the payload and:
//
//   * deletes rows that are not stamped source='authored'   (orphans)
//   * deletes duplicate authored_id rows, keeping the earliest
//   * inserts every authored_id that is missing
//
// That makes it convergent: however the table got into its current state,
// running this until done:true produces exactly the authored bank. It is
// idempotent, so running it again afterwards changes nothing.
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

  // ---- What is actually in the table? -------------------------------------
  const presentRes = await db.execute(
    sql`SELECT DISTINCT "authored_id" AS id FROM "questions" WHERE "authored_id" IS NOT NULL`,
  );
  const present = new Set((presentRes.rows as { id: string }[]).map((r) => r.id));

  const missing = AUTHORED_QUESTIONS.filter((q) => !present.has(q.authoredId));

  const orphanRes = await db.execute(
    sql`SELECT count(*)::int AS n FROM "questions" WHERE "source" IS DISTINCT FROM 'authored'`,
  );
  const orphans = (orphanRes.rows[0] as { n: number }).n;

  const dupRes = await db.execute(sql`
    SELECT count(*)::int AS n FROM (
      SELECT "authored_id" FROM "questions"
      WHERE "authored_id" IS NOT NULL
      GROUP BY "authored_id" HAVING count(*) > 1
    ) d
  `);
  const duplicatedIds = (dupRes.rows[0] as { n: number }).n;

  const before = await totals();

  if (!apply) {
    return NextResponse.json({
      ok: true,
      mode: "inspect",
      message:
        missing.length === 0 && orphans === 0 && duplicatedIds === 0
          ? "Nothing to repair. The table already matches the authored bank exactly."
          : `Repair needed: ${missing.length} question(s) missing, ${orphans} unstamped row(s), ${duplicatedIds} duplicated id(s). Re-run with ?apply=1.`,
      missingQuestions: missing.length,
      missingSample: missing.slice(0, 10).map((q) => q.authoredId),
      unstampedRows: orphans,
      duplicatedAuthoredIds: duplicatedIds,
      current: before,
      expected: { questions: AUTHORED_COUNT, diagrams: AUTHORED_DIAGRAM_COUNT },
      applyUrl: "/api/admin/reseed-repair?apply=1",
    });
  }

  // ---- Clean -------------------------------------------------------------
  const delOrphans = await db.execute(sql`
    DELETE FROM "questions"
    WHERE "source" IS DISTINCT FROM 'authored'
    RETURNING "id"
  `);

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

  // ---- Insert whatever is missing ----------------------------------------
  const cats = await db.select().from(questionCategories);
  const bySlug = new Map(cats.map((c) => [c.slug, c.id]));
  for (const q of missing) {
    if (!bySlug.has(q.categorySlug)) {
      return NextResponse.json(
        { error: `Unknown category slug in payload: ${q.categorySlug}` },
        { status: 500 },
      );
    }
  }

  let inserted = 0;
  while (inserted < missing.length) {
    if (Date.now() - startedAt > TIME_BUDGET_MS) break;

    const batch = missing.slice(inserted, inserted + BATCH_SIZE);
    const rows = batch.map(
      (q) =>
        sql`(
          ${crypto.randomUUID()},
          ${bySlug.get(q.categorySlug)!},
          ${q.stem},
          ${JSON.stringify(q.choices)}::jsonb,
          ${q.correctChoiceId},
          ${q.rationale},
          ${q.strategy},
          ${q.difficulty}::question_difficulty,
          ${JSON.stringify(q.tags)}::jsonb,
          ${q.isFree},
          'authored',
          ${q.authoredId},
          ${q.mediaUrl ?? null},
          ${q.mediaCaption ?? null}
        )`,
    );

    await db.execute(sql`
      INSERT INTO "questions"
        ("id", "category_id", "stem", "choices", "correct_choice_id", "rationale",
         "strategy", "difficulty", "tags", "is_free", "source", "authored_id",
         "media_url", "media_caption")
      VALUES ${sql.join(rows, sql`, `)}
    `);

    inserted += batch.length;
  }

  const after = await totals();
  const done = inserted >= missing.length;
  const countsMatch =
    after.questions === AUTHORED_COUNT &&
    after.diagrams === AUTHORED_DIAGRAM_COUNT &&
    after.distinctAuthoredIds === AUTHORED_COUNT;

  return NextResponse.json({
    ok: true,
    mode: "apply",
    done,
    countsMatch,
    message:
      done && countsMatch
        ? `Repaired. The table now holds exactly ${after.questions} authored questions and ${after.diagrams} diagrams.`
        : done
          ? `Finished this pass but totals still differ: expected ${AUTHORED_COUNT}/${AUTHORED_DIAGRAM_COUNT}, found ${after.questions}/${after.diagrams}. Run again.`
          : `Inserted ${inserted} of ${missing.length} missing question(s). Refresh to continue.`,
    missingAtStart: missing.length,
    insertedThisVisit: inserted,
    unstampedRowsDeleted: delOrphans.rows.length,
    duplicateRowsDeleted: delDupes.rows.length,
    before,
    after,
    expected: { questions: AUTHORED_COUNT, diagrams: AUTHORED_DIAGRAM_COUNT },
    elapsedMs: Date.now() - startedAt,
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
