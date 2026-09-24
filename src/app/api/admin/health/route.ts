import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const checks: Record<string, { status: "ok" | "error"; detail: string }> = {};
  try { await db.execute(sql`SELECT 1`); checks.database = { status: "ok", detail: "Connected" }; } catch { checks.database = { status: "error", detail: "Unavailable" }; }
  try { const result = await db.execute(sql`SELECT COUNT(*)::int AS count FROM "questions"`); checks.questionBank = { status: "ok", detail: `${(result.rows[0] as { count: number }).count.toLocaleString()} questions available` }; } catch { checks.questionBank = { status: "error", detail: "Could not read question bank" }; }
  try { await db.execute(sql`SELECT 1 FROM "users" LIMIT 1`); checks.accounts = { status: "ok", detail: "Available" }; } catch { checks.accounts = { status: "error", detail: "Could not read accounts" }; }
  const healthy = Object.values(checks).every((check) => check.status === "ok");
  return NextResponse.json({ healthy, checkedAt: new Date().toISOString(), checks }, { headers: { "Cache-Control": "no-store" } });
}
