import { db } from "@/db";
import { sql } from "drizzle-orm";

// Lazily ensure the users.exam_date column exists (same pattern as
// ensureSourceColumn in manual-questions.ts — avoids a formal migration on
// the hosted database while remaining idempotent and cheap after first run).
let ensured = false;

export async function ensureExamDateColumn(): Promise<void> {
  if (ensured) return;
  await db.execute(sql`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "exam_date" date`);
  ensured = true;
}

export async function setUserExamDate(userId: string, examDate: string): Promise<void> {
  await ensureExamDateColumn();
  await db.execute(sql`UPDATE "users" SET "exam_date" = ${examDate} WHERE "id" = ${userId}`);
}

export async function getUserExamDate(userId: string): Promise<string | null> {
  await ensureExamDateColumn();
  const result = await db.execute(sql`SELECT "exam_date" FROM "users" WHERE "id" = ${userId} LIMIT 1`);
  const row = result.rows[0] as { exam_date: string | Date | null } | undefined;
  if (!row || !row.exam_date) return null;
  const d = row.exam_date instanceof Date ? row.exam_date : new Date(row.exam_date);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}
