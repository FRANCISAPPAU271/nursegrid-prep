import { NextResponse } from "next/server";
import { db } from "@/db";
import { strategyBookmarks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await db
      .insert(strategyBookmarks)
      .values({ userId: user.id, strategyId: id })
      .onConflictDoNothing();
    return NextResponse.json({ bookmarked: true });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await db
      .delete(strategyBookmarks)
      .where(and(eq(strategyBookmarks.userId, user.id), eq(strategyBookmarks.strategyId, id)));
    return NextResponse.json({ bookmarked: false });
  } catch (error) {
    return handleApiError(error);
  }
}
