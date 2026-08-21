import { NextResponse } from "next/server";
import { db } from "@/db";
import { questionBookmarks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await db
      .insert(questionBookmarks)
      .values({ userId: user.id, questionId: id })
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
      .delete(questionBookmarks)
      .where(and(eq(questionBookmarks.userId, user.id), eq(questionBookmarks.questionId, id)));
    return NextResponse.json({ bookmarked: false });
  } catch (error) {
    return handleApiError(error);
  }
}
