import "server-only";
import { sql } from "drizzle-orm";
import { db } from "@/db";

/**
 * Operational records, kept so the system can report on itself.
 *
 * The two failures this replaces both went unnoticed until a student complained:
 * a digest that was accepted by the provider and then thrown away, and a
 * password reset that was never wired up at all. Neither was detectable from the
 * outside, because nothing wrote down what the jobs did.
 *
 * These writes are always best-effort. Recording that a send failed must never
 * be the reason a request fails.
 */

let ensured = false;

export async function ensureOpsTables() {
  if (ensured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "digest_runs" (
      "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
      "period_key" text NOT NULL,
      "ran_at" timestamptz NOT NULL DEFAULT now(),
      "accepted" integer NOT NULL DEFAULT 0,
      "failed" integer NOT NULL DEFAULT 0,
      "quota_halted" text,
      "notes" text
    )
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "ops_events" (
      "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
      "kind" text NOT NULL,
      "detail" text,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  await db.execute(sql`
    CREATE INDEX IF NOT EXISTS "ops_events_created_idx" ON "ops_events" ("created_at")
  `);
  ensured = true;
}

export async function recordEvent(kind: string, detail: string): Promise<void> {
  try {
    await ensureOpsTables();
    await db.execute(sql`INSERT INTO ops_events (kind, detail) VALUES (${kind}, ${detail})`);
  } catch (error) {
    console.error("ops event not recorded", error);
  }
}

export async function recordDigestRun(run: {
  periodKey: string;
  accepted: number;
  failed: number;
  quotaHalted: string | null;
  notes?: string;
}): Promise<void> {
  try {
    await ensureOpsTables();
    await db.execute(sql`
      INSERT INTO digest_runs (period_key, accepted, failed, quota_halted, notes)
      VALUES (${run.periodKey}, ${run.accepted}, ${run.failed}, ${run.quotaHalted}, ${run.notes ?? null})
    `);
  } catch (error) {
    console.error("digest run not recorded", error);
  }
}
