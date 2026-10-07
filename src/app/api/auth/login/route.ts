import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { createSession, verifyPassword } from "@/lib/auth";
import { handleApiError } from "@/lib/api";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const rows = await db.select().from(users).where(eq(users.email, data.email)).limit(1);
    const user = rows[0];
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const valid = await verifyPassword(data.password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const userAgent = request.headers.get("user-agent");
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

    // Server-side rapid device-change protection. This table is additive and
    // safe for existing databases; it avoids requiring a destructive migration.
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "account_security_locks" (
        "user_id" text PRIMARY KEY REFERENCES "users"("id") ON DELETE CASCADE,
        "locked_until" timestamptz NOT NULL,
        "reason" text NOT NULL,
        "created_at" timestamptz NOT NULL DEFAULT now()
      )
    `);
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "login_events" (
        "id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text),
        "user_id" text NOT NULL,
        "user_agent" text,
        "ip_address" text,
        "created_at" timestamptz NOT NULL DEFAULT now()
      )
    `);

    const activeLock = await db.execute(sql`
      SELECT "locked_until" FROM "account_security_locks"
      WHERE "user_id" = ${user.id} AND "locked_until" > now()
      LIMIT 1
    `);
    if (activeLock.rows.length > 0) {
      return NextResponse.json(
        { error: "This account is temporarily locked for security. Please try again after the lock expires." },
        { status: 423 },
      );
    }

    const recentEvents = await db.execute(sql`
      SELECT "user_agent", "ip_address" FROM "login_events"
      WHERE "user_id" = ${user.id}
        AND "created_at" > now() - interval '15 minutes'
      ORDER BY "created_at" DESC
      LIMIT 10
    `);
    const currentFingerprint = `${userAgent ?? ""}|${ipAddress ?? ""}`;
    const recentFingerprints = new Set(
      recentEvents.rows.map((row) => `${String((row as { user_agent?: string | null }).user_agent ?? "")}|${String((row as { ip_address?: string | null }).ip_address ?? "")}`),
    );
    const differentRecentDevice = recentFingerprints.size > 0 && !recentFingerprints.has(currentFingerprint);
    if (differentRecentDevice) {
      const lockedUntil = new Date(Date.now() + 72 * 60 * 60 * 1000);
      await db.execute(sql`
        INSERT INTO "account_security_locks" ("user_id", "locked_until", "reason")
        VALUES (${user.id}, ${lockedUntil}, 'rapid device change')
        ON CONFLICT ("user_id") DO UPDATE SET "locked_until" = EXCLUDED."locked_until", "reason" = EXCLUDED."reason"
      `);
      return NextResponse.json(
        { error: "This account is temporarily locked for security after a rapid device change. Please try again after 72 hours." },
        { status: 423 },
      );
    }

    await createSession(user.id, { userAgent, ipAddress });

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
