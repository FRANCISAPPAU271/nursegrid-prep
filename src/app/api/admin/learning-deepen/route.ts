import { NextResponse } from "next/server";
import { requireAdmin, handleApiError } from "@/lib/api";
import { applyDeepContent } from "@/db/learning-deepen";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// POST /api/admin/learning-deepen — replace the core learning topics'
// content with the substantially deeper versions (matched by slug).
// Titles, categories, icons, images, videos, bookmarks and ordering are
// preserved. Idempotent — safe to run repeatedly.
export async function POST() {
  try {
    await requireAdmin();
    const result = await applyDeepContent();
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return handleApiError(error);
  }
}
