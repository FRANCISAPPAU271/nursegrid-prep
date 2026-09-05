import { NextResponse } from "next/server";
import { requireAdmin, handleApiError } from "@/lib/api";
import { insertExtraLearningTopics } from "@/db/learning-extras";

export const dynamic = "force-dynamic";

// POST /api/admin/learning-extras — insert the Quick Reference learning
// topics into the live database. Idempotent: topics that already exist
// (matched by slug) are skipped, and nothing is ever deleted or modified.
// The cached topics list revalidates within 5 minutes, so new topics appear
// shortly after insertion without a redeploy.
export async function POST() {
  try {
    await requireAdmin();
    const result = await insertExtraLearningTopics();
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return handleApiError(error);
  }
}
