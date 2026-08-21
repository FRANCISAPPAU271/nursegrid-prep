import { NextResponse } from "next/server";
import { db } from "@/db";
import { strategies, strategyBookmarks } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db.select().from(strategies).orderBy(asc(strategies.sortOrder));
    const bookmarkRows = await db
      .select({ strategyId: strategyBookmarks.strategyId })
      .from(strategyBookmarks)
      .where(eq(strategyBookmarks.userId, user.id));
    const bookmarked = new Set(bookmarkRows.map((b) => b.strategyId));

    return NextResponse.json({
      strategies: rows.map((s) => ({ ...s, isBookmarked: bookmarked.has(s.id) })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
