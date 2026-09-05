// ---------------------------------------------------------------------------
// SATA ("select all that apply") support — pure helpers usable on both
// server and client.
//
// Design: no schema change. A SATA question stores its correct answers in
// the existing `correctChoiceId` text column as a sorted, comma-separated
// list ("a,c,d"). Single-answer questions keep a single id ("a").
// A student's SATA answer is stored in `selectedChoiceId` the same way.
// Grading is all-or-nothing (exact set match), matching NMC-style marking.
// ---------------------------------------------------------------------------

/** True if this correct-answer value represents a SATA question. */
export function isSata(correctChoiceId: string): boolean {
  return correctChoiceId.includes(",");
}

/** Splits a stored value into its choice ids (handles single values too). */
export function splitChoiceIds(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Canonical form: sorted, deduplicated, comma-joined. */
export function normalizeChoiceIds(value: string | string[]): string {
  const ids = Array.isArray(value) ? value : splitChoiceIds(value);
  return [...new Set(ids.map((s) => s.trim()).filter(Boolean))].sort().join(",");
}

/** All-or-nothing grading that is order-insensitive. */
export function gradeAnswer(selected: string, correct: string): boolean {
  return normalizeChoiceIds(selected) === normalizeChoiceIds(correct);
}
