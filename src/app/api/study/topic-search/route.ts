import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/auth";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const query = new URL(request.url).searchParams.get("q")?.trim();
  if (!query || query.length < 2) return NextResponse.json({ results: [] });
  const term = `%${query}%`;
  const result = await db.execute(sql`SELECT q."id", q."stem", q."rationale", q."strategy", q."correct_choice_id" AS "correctChoiceId", c."name" AS "category" FROM "questions" q LEFT JOIN "question_categories" c ON c."id" = q."category_id" WHERE q."stem" ILIKE ${term} OR q."rationale" ILIKE ${term} OR q."strategy" ILIKE ${term} OR q."tags"::text ILIKE ${term} ORDER BY q."created_at" DESC LIMIT 25`);
  return NextResponse.json({ results: result.rows });
}
