import { NextResponse } from "next/server";
import { db } from "@/db";
import { questions } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { ensureSourceColumn } from "@/db/manual-questions";

export const dynamic = "force-dynamic";

// DELETE /api/admin/questions/:id — remove a manually uploaded question.
// Generated questions cannot be deleted here; they are managed by reseeds.
export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin();
    await ensureSourceColumn();
    const { id } = await params;

    const rows = await db
      .select({ id: questions.id, source: sql<string>`${questions}."source"` })
      .from(questions)
      .where(eq(questions.id, id))
      .limit(1);
    const row = rows[0];
    if (!row) throw new ApiError("Question not found", 404);
    if (row.source !== "manual") throw new ApiError("Only manually uploaded questions can be deleted here.", 400);

    await db.delete(questions).where(eq(questions.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
