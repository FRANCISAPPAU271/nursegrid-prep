import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await db.execute(sql`CREATE TABLE IF NOT EXISTS "login_events" ("id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text), "user_id" text NOT NULL, "user_agent" text, "ip_address" text, "created_at" timestamptz NOT NULL DEFAULT now())`);
  const rows = await db.execute(sql`SELECT "user_agent" AS "userAgent", "ip_address" AS "ipAddress", "created_at" AS "createdAt" FROM "login_events" WHERE "user_id" = ${user.id} ORDER BY "created_at" DESC LIMIT 10`);
  return NextResponse.json({ activity: rows.rows });
}
