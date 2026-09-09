/**
 * Standalone integrity check for the authored question bank.
 *
 *   npx tsx src/db/verify-authored-bank.ts
 *
 * Runs as part of `npm run build` (see package.json prebuild) so a malformed
 * bank, or an advertised count that has drifted from the shipped data, fails
 * the Vercel build instead of reaching customers.
 *
 * No database and no network: it only inspects the generated modules.
 */
import { AUTHORED_QUESTIONS, AUTHORED_COUNT, AUTHORED_DIAGRAM_COUNT } from "./authored-bank";
import { QUESTION_COUNT, QUESTION_COUNT_LABEL, DIAGRAM_COUNT } from "../lib/question-count";

const LIVE_SLUGS = new Set([
  "fundamentals", "pharmacology-parenteral", "med-surg", "maternal-newborn",
  "pediatrics", "mental-health", "fluid-electrolyte", "safety-infection-control",
  "leadership-delegation", "health-promotion", "risk-reduction", "gerontology-community",
]);

const failures: string[] = [];
const fail = (m: string) => failures.push(m);

// --- advertised number must match what actually ships ----------------------
if (QUESTION_COUNT !== AUTHORED_QUESTIONS.length) {
  fail(`QUESTION_COUNT ${QUESTION_COUNT} != payload ${AUTHORED_QUESTIONS.length}`);
}
if (AUTHORED_COUNT !== AUTHORED_QUESTIONS.length) {
  fail(`AUTHORED_COUNT ${AUTHORED_COUNT} != payload ${AUTHORED_QUESTIONS.length}`);
}
const withMedia = AUTHORED_QUESTIONS.filter((q) => q.mediaUrl).length;
if (DIAGRAM_COUNT !== withMedia) fail(`DIAGRAM_COUNT ${DIAGRAM_COUNT} != ${withMedia} with media`);
if (AUTHORED_DIAGRAM_COUNT !== withMedia) fail(`AUTHORED_DIAGRAM_COUNT != ${withMedia}`);

if (!/^\d{1,3}(,\d{3})*\+$/.test(QUESTION_COUNT_LABEL)) {
  fail(`QUESTION_COUNT_LABEL "${QUESTION_COUNT_LABEL}" is not of the form "2,900+"`);
}
const advertised = Number(QUESTION_COUNT_LABEL.replace(/[^0-9]/g, ""));
if (advertised > QUESTION_COUNT) {
  fail(`OVERSTATED: advertising ${advertised} but only ${QUESTION_COUNT} ship`);
}

// --- every question well formed -------------------------------------------
const ids = new Set<string>();
const stems = new Map<string, string>();
const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
const perCategory = new Map<string, number>();

for (const q of AUTHORED_QUESTIONS) {
  const id = q.authoredId;
  if (ids.has(id)) fail(`duplicate id ${id}`);
  ids.add(id);

  if (q.choices.length !== 4) fail(`${id}: ${q.choices.length} choices, expected 4`);
  const letters = q.choices.map((c) => c.id).join(",");
  if (letters !== "a,b,c,d") fail(`${id}: choice ids are ${letters}`);
  if (!q.choices.some((c) => c.id === q.correctChoiceId)) {
    fail(`${id}: correctChoiceId "${q.correctChoiceId}" not among choices`);
  }
  if (!q.stem.trim()) fail(`${id}: empty stem`);
  if (!q.rationale.trim()) fail(`${id}: empty rationale`);
  if (!q.strategy.trim()) fail(`${id}: empty strategy`);
  if (/<[^>]+>/.test(q.stem)) fail(`${id}: HTML markup left in stem`);
  for (const c of q.choices) if (/<[^>]+>/.test(c.text)) fail(`${id}: HTML markup left in choice ${c.id}`);
  if (!LIVE_SLUGS.has(q.categorySlug)) fail(`${id}: unknown category "${q.categorySlug}"`);

  const k = norm(q.stem);
  const prev = stems.get(k);
  if (prev) fail(`${id}: stem duplicates ${prev}`);
  else stems.set(k, id);

  perCategory.set(q.categorySlug, (perCategory.get(q.categorySlug) ?? 0) + 1);
}

for (const slug of LIVE_SLUGS) {
  if (!perCategory.get(slug)) fail(`category "${slug}" has no questions`);
}

// --- report ----------------------------------------------------------------
if (failures.length) {
  console.error(`\n\u274c authored bank FAILED ${failures.length} check(s):\n`);
  for (const f of failures.slice(0, 40)) console.error(`   - ${f}`);
  if (failures.length > 40) console.error(`   ... and ${failures.length - 40} more`);
  process.exit(1);
}

console.log(`\u2705 authored bank OK: ${QUESTION_COUNT} questions, ${DIAGRAM_COUNT} diagrams, advertising "${QUESTION_COUNT_LABEL}"`);
for (const slug of [...perCategory.keys()].sort()) {
  console.log(`     ${String(perCategory.get(slug)).padStart(5)}  ${slug}`);
}
