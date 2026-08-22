import { NextResponse } from "next/server";
import { db } from "@/db";
import { strategyBookmarks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { getCachedStrategiesList } from "@/lib/catalog";

export async function GET() {
  try {
    const user = await requireUser();
    const [rows, bookmarkRows] = await Promise.all([
      getCachedStrategiesList(),
      db.select({ strategyId: strategyBookmarks.strategyId }).from(strategyBookmarks).where(eq(strategyBookmarks.userId, user.id)),
    ]);
    const bookmarked = new Set(bookmarkRows.map((b) => b.strategyId));

    return NextResponse.json({
      strategies: rows.map((s) => ({ ...s, isBookmarked: bookmarked.has(s.id) })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
