import "server-only";
import { db } from "@/db";
import { questionAttempts, questionCategories, catSessions, examSessions } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Readiness Score — an honest, explainable estimate of exam readiness built
// from the student's own practice data. It is deliberately transparent (each
// component is shown to the student) and framed as guidance, not a guarantee.
//
// Components (weights sum to 100):
//   1. Recent accuracy (40) — % correct over the last 200 attempts, weighted
//      toward the most recent work so improvement shows up quickly.
//   2. Coverage (20) — how many of the 12 categories have meaningful practice
//      (>= 20 attempts each). The real exam samples everything.
//   3. Volume (15) — total attempts against a 1,000-attempt benchmark
//      (log-scaled so early practice moves the needle fast).
//   4. Adaptive ability (15) — best recent CAT theta mapped onto 0-100.
//   5. Exam stamina (10) — performance on completed exams of 50+ questions.
//
// Bands: <40 Building Foundations, 40-59 Developing, 60-74 Approaching
// Readiness, 75-84 On Track, >=85 Exam Ready.
// ---------------------------------------------------------------------------

export type CategoryReadiness = {
  categoryId: string;
  name: string;
  icon: string;
  attempted: number;
  correct: number;
  accuracy: number | null; // null when attempted === 0
  recentAccuracy: number | null; // last 30 attempts in the category
};

export type ReadinessReport = {
  score: number; // 0-100
  band: "building" | "developing" | "approaching" | "on_track" | "exam_ready";
  bandLabel: string;
  components: {
    recentAccuracy: { value: number | null; points: number; max: number };
    coverage: { practicedCategories: number; totalCategories: number; points: number; max: number };
    volume: { attempts: number; benchmark: number; points: number; max: number };
    adaptive: { bestTheta: number | null; points: number; max: number };
    stamina: { longExamsCompleted: number; bestLongExamAccuracy: number | null; points: number; max: number };
  };
  weakest: CategoryReadiness[]; // up to 3, weakest first, only practiced ones
  unpracticed: CategoryReadiness[]; // categories with zero attempts
  categories: CategoryReadiness[];
  totalAttempts: number;
  advice: string[];
  // Cohort comparison — "you're scoring higher than X% of NurseGrid students".
  // null until the user has 20+ attempts and the cohort has 5+ qualifying students.
  percentile: number | null;
  cohortSize: number;
};

const BANDS: { min: number; band: ReadinessReport["band"]; label: string }[] = [
  { min: 85, band: "exam_ready", label: "Exam Ready" },
  { min: 75, band: "on_track", label: "On Track" },
  { min: 60, band: "approaching", label: "Approaching Readiness" },
  { min: 40, band: "developing", label: "Developing" },
  { min: 0, band: "building", label: "Building Foundations" },
];

// Cohort percentile: where does this user's recent accuracy sit among all
// students with meaningful practice (20+ attempts)? Computed with a single
// aggregate query over each qualifying user's last 200 attempts.
async function computeCohortPercentile(
  userId: string,
): Promise<{ percentile: number | null; cohortSize: number }> {
  try {
    const result = await db.execute(sql`
      WITH ranked AS (
        SELECT
          "user_id",
          "is_correct",
          row_number() OVER (PARTITION BY "user_id" ORDER BY "attempted_at" DESC) AS rn
        FROM "question_attempts"
      ),
      per_user AS (
        SELECT
          "user_id",
          count(*) AS total,
          avg(CASE WHEN "is_correct" THEN 1.0 ELSE 0.0 END) AS acc
        FROM ranked
        WHERE rn <= 200
        GROUP BY "user_id"
        HAVING count(*) >= 20
      )
      SELECT
        (SELECT count(*) FROM per_user) AS cohort_size,
        (SELECT acc FROM per_user WHERE "user_id" = ${userId}) AS my_acc,
        (SELECT count(*) FROM per_user p2 WHERE p2.acc < (SELECT acc FROM per_user WHERE "user_id" = ${userId})) AS below
    `);
    const row = result.rows[0] as { cohort_size: string | number; my_acc: string | null; below: string | number } | undefined;
    if (!row || row.my_acc === null || row.my_acc === undefined) return { percentile: null, cohortSize: 0 };
    const cohortSize = Number(row.cohort_size);
    if (cohortSize < 5) return { percentile: null, cohortSize };
    const below = Number(row.below);
    // Percentile of students scoring strictly below this user.
    const percentile = Math.round((below / Math.max(1, cohortSize - 1)) * 100);
    return { percentile: Math.min(99, Math.max(1, percentile)), cohortSize };
  } catch {
    // Percentile is a nice-to-have — never let it break the readiness page.
    return { percentile: null, cohortSize: 0 };
  }
}

export async function computeReadiness(userId: string): Promise<ReadinessReport> {
  const [categories, perCategory, recent, catRows, examRows, cohort] = await Promise.all([
    db
      .select({ id: questionCategories.id, name: questionCategories.name, icon: questionCategories.icon })
      .from(questionCategories)
      .orderBy(questionCategories.sortOrder),
    db
      .select({
        categoryId: questionAttempts.categoryId,
        attempted: sql<number>`count(*)`.mapWith(Number),
        correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect})`.mapWith(Number),
      })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, userId))
      .groupBy(questionAttempts.categoryId),
    db
      .select({ categoryId: questionAttempts.categoryId, isCorrect: questionAttempts.isCorrect })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, userId))
      .orderBy(desc(questionAttempts.attemptedAt))
      .limit(200),
    db
      .select({ theta: catSessions.theta, status: catSessions.status })
      .from(catSessions)
      .where(eq(catSessions.userId, userId))
      .orderBy(desc(catSessions.startedAt))
      .limit(10),
    db
      .select({
        totalQuestions: examSessions.totalQuestions,
        correctCount: examSessions.correctCount,
        status: examSessions.status,
      })
      .from(examSessions)
      .where(eq(examSessions.userId, userId))
      .orderBy(desc(examSessions.startedAt))
      .limit(25),
    computeCohortPercentile(userId),
  ]);

  const perCatMap = new Map(perCategory.map((p) => [p.categoryId, p]));
  const totalAttempts = perCategory.reduce((s, p) => s + p.attempted, 0);

  // Recent accuracy per category from the recent window.
  const recentByCat = new Map<string, { total: number; correct: number }>();
  for (const r of recent) {
    const entry = recentByCat.get(r.categoryId) ?? { total: 0, correct: 0 };
    if (entry.total < 30) {
      entry.total += 1;
      if (r.isCorrect) entry.correct += 1;
    }
    recentByCat.set(r.categoryId, entry);
  }

  const categoryReadiness: CategoryReadiness[] = categories.map((c) => {
    const p = perCatMap.get(c.id);
    const rec = recentByCat.get(c.id);
    return {
      categoryId: c.id,
      name: c.name,
      icon: c.icon,
      attempted: p?.attempted ?? 0,
      correct: p?.correct ?? 0,
      accuracy: p && p.attempted > 0 ? Math.round((p.correct / p.attempted) * 100) : null,
      recentAccuracy: rec && rec.total >= 5 ? Math.round((rec.correct / rec.total) * 100) : null,
    };
  });

  // ---- Component 1: recent accuracy (40 pts) ----
  const recentTotal = recent.length;
  const recentCorrect = recent.filter((r) => r.isCorrect).length;
  const recentAccuracy = recentTotal >= 10 ? Math.round((recentCorrect / recentTotal) * 100) : null;
  // 50% accuracy earns 0; 90%+ earns full marks (the exam pass mark region).
  const accuracyPoints =
    recentAccuracy === null ? 0 : Math.round(Math.min(1, Math.max(0, (recentAccuracy - 50) / 40)) * 40);

  // ---- Component 2: coverage (20 pts) ----
  const practicedCategories = categoryReadiness.filter((c) => c.attempted >= 20).length;
  const coveragePoints = Math.round((practicedCategories / categories.length) * 20);

  // ---- Component 3: volume (15 pts, log-scaled to 1000) ----
  const VOLUME_BENCHMARK = 1000;
  const volumePoints =
    totalAttempts <= 0
      ? 0
      : Math.round(Math.min(1, Math.log10(1 + totalAttempts) / Math.log10(1 + VOLUME_BENCHMARK)) * 15);

  // ---- Component 4: adaptive ability (15 pts) ----
  const completedCats = catRows.filter((c) => c.status !== "in_progress");
  const bestTheta = completedCats.length > 0 ? Math.max(...completedCats.map((c) => c.theta)) : null;
  // theta -1.5 -> 0 pts, +1.5 -> 15 pts.
  const adaptivePoints =
    bestTheta === null ? 0 : Math.round(Math.min(1, Math.max(0, (bestTheta + 1.5) / 3)) * 15);

  // ---- Component 5: exam stamina (10 pts) ----
  const longExams = examRows.filter((e) => e.status === "completed" && e.totalQuestions >= 50);
  const bestLongExamAccuracy =
    longExams.length > 0
      ? Math.max(...longExams.map((e) => Math.round((e.correctCount / e.totalQuestions) * 100)))
      : null;
  const staminaPoints =
    bestLongExamAccuracy === null
      ? 0
      : Math.round(Math.min(1, Math.max(0, (bestLongExamAccuracy - 40) / 45)) * 10);

  const score = Math.max(
    0,
    Math.min(100, accuracyPoints + coveragePoints + volumePoints + adaptivePoints + staminaPoints),
  );
  const bandDef = BANDS.find((b) => score >= b.min) ?? BANDS[BANDS.length - 1];

  const practiced = categoryReadiness.filter((c) => c.attempted > 0);
  const weakest = [...practiced]
    .filter((c) => c.accuracy !== null)
    .sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100))
    .slice(0, 3);
  const unpracticed = categoryReadiness.filter((c) => c.attempted === 0);

  const advice: string[] = [];
  if (recentAccuracy === null) advice.push("Answer at least 10 questions so your recent accuracy can be measured.");
  else if (recentAccuracy < 65) advice.push(`Your recent accuracy is ${recentAccuracy}% — read every rationale fully before moving on; the explanation is where the learning happens.`);
  if (unpracticed.length > 0) advice.push(`You haven't touched ${unpracticed.length} categor${unpracticed.length === 1 ? "y" : "ies"} yet (${unpracticed.slice(0, 3).map((c) => c.name).join(", ")}${unpracticed.length > 3 ? "…" : ""}). The real exam samples all of them.`);
  if (weakest.length > 0 && weakest[0].accuracy !== null && weakest[0].accuracy < 70)
    advice.push(`Prioritise ${weakest[0].name} — it is your weakest practiced category at ${weakest[0].accuracy}%.`);
  if (completedCats.length === 0) advice.push("Complete an Adaptive Test (CAT) session — it measures your ability level, not just your accuracy.");
  if (longExams.length === 0) advice.push("Sit at least one 50+ question exam in a single sitting to build test-day stamina.");
  if (advice.length === 0) advice.push("Keep your streak going with daily mixed practice, and re-test with a full mock exam each week.");

  return {
    score,
    band: bandDef.band,
    bandLabel: bandDef.label,
    components: {
      recentAccuracy: { value: recentAccuracy, points: accuracyPoints, max: 40 },
      coverage: { practicedCategories, totalCategories: categories.length, points: coveragePoints, max: 20 },
      volume: { attempts: totalAttempts, benchmark: VOLUME_BENCHMARK, points: volumePoints, max: 15 },
      adaptive: { bestTheta, points: adaptivePoints, max: 15 },
      stamina: { longExamsCompleted: longExams.length, bestLongExamAccuracy, points: staminaPoints, max: 10 },
    },
    weakest,
    unpracticed,
    categories: categoryReadiness,
    totalAttempts,
    advice,
    percentile: cohort.percentile,
    cohortSize: cohort.cohortSize,
  };
}
