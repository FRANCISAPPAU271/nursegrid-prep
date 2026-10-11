import type { AuthoredQuestion } from "./authored-bank";

/**
 * Helpers for the NCX ("decision-tree") original question sets.
 *
 * Every item is written from scratch by NurseGrid: a new clinical scenario,
 * new options and an original rationale that follows the house format
 * (CORRECT (X) — "option". Explanation / Why the other options fail / Reference).
 * The strategy line walks the test-taking decision tree: what is really being
 * asked → assessment or action → Maslow → ABCs → safety.
 *
 * Authors write the correct option first (so the spec is easy to review);
 * `ncx()` then applies a deterministic shuffle keyed on the item number so the
 * published position of the correct answer varies across the set.
 */

type Letter = "a" | "b" | "c" | "d";

export type NcxSpec = {
  n: number;
  cat: string;
  difficulty?: "easy" | "medium" | "hard";
  free?: boolean;
  stem: string;
  choices: [string, string, string, string];
  correct: Letter;
  /** Why the correct option is right. May contain <strong> emphasis. */
  explain: string;
  /** Why each wrong option fails, keyed by the letter used in `choices`. */
  others: Partial<Record<Letter, string>>;
  ref: string;
  strategy: string;
  tags: string[];
};

const LETTERS: Letter[] = ["a", "b", "c", "d"];

/** All 24 orderings of four options; one is picked per item from its number. */
const PERMUTATIONS: number[][] = (() => {
  const out: number[][] = [];
  const walk = (rest: number[], acc: number[]) => {
    if (rest.length === 0) {
      out.push(acc);
      return;
    }
    rest.forEach((v, i) => walk([...rest.slice(0, i), ...rest.slice(i + 1)], [...acc, v]));
  };
  walk([0, 1, 2, 3], []);
  return out;
})();

function orderFor(n: number): number[] {
  // Small multiplicative hash — spreads the correct answer evenly over a–d.
  return PERMUTATIONS[(n * 7 + 11) % PERMUTATIONS.length];
}

export function ncx(set: string, spec: NcxSpec): AuthoredQuestion {
  const order = orderFor(spec.n); // order[newIndex] = originalIndex
  const correctOriginal = LETTERS.indexOf(spec.correct);
  const newChoices = order.map((orig, i) => ({ id: LETTERS[i], text: spec.choices[orig] }));
  const newCorrectIndex = order.indexOf(correctOriginal);
  const newCorrect = LETTERS[newCorrectIndex];

  const fails = order
    .map((orig, i) => ({ orig, letter: LETTERS[i] }))
    .filter(({ orig }) => orig !== correctOriginal)
    .map(
      ({ orig, letter }) =>
        `• ${letter.toUpperCase()} — ${spec.others[LETTERS[orig]] ?? "Does not address the priority identified in the stem."}`,
    )
    .join("\n");

  const rationale =
    `CORRECT (${newCorrect.toUpperCase()}) — "${spec.choices[correctOriginal]}". ${spec.explain}\n\n` +
    `Why the other options fail:\n${fails}\n\nReference: ${spec.ref}`;

  return {
    authoredId: `NG-ORIGINAL-${set}-${String(spec.n).padStart(4, "0")}`,
    categorySlug: spec.cat,
    stem: spec.stem,
    choices: newChoices,
    correctChoiceId: newCorrect,
    rationale,
    strategy: spec.strategy,
    difficulty: spec.difficulty ?? "medium",
    tags: spec.tags,
    isFree: spec.free ?? false,
  };
}
