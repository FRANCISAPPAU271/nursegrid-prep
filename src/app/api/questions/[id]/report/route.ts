import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { requireStudyAccess, handleApiError } from "@/lib/api";

const schema = z.object({ reason: z.enum(["incorrect", "unclear", "broken_diagram", "duplicate", "outdated"]) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { id } = await params;
    const { reason } = schema.parse(await request.json());
    await db.execute(sql`CREATE TABLE IF NOT EXISTS "question_reports" ("id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text), "question_id" text NOT NULL, "user_id" text NOT NULL, "reason" text NOT NULL, "status" text NOT NULL DEFAULT 'open', "created_at" timestamptz NOT NULL DEFAULT now(), "resolved_at" timestamptz)`);
    await db.execute(sql`INSERT INTO "question_reports" ("question_id", "user_id", "reason") SELECT ${id}, ${user.id}, ${reason} WHERE NOT EXISTS (SELECT 1 FROM "question_reports" WHERE "question_id" = ${id} AND "user_id" = ${user.id} AND "status" = 'open')`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Invalid report reason" }, { status: 422 });
    return handleApiError(error);
  }
}
