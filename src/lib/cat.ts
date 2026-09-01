import "server-only";

// ---------------------------------------------------------------------------
// A simplified, transparent adaptive-difficulty practice mode. The real NMC
// CBT (Computer Based Test) used for UK nursing registration is a
// fixed-length, non-adaptive multiple-choice exam delivered via Pearson VUE
// — it does not adjust question difficulty during the test. This feature is
// a study tool inspired by adaptive testing concepts, intended to help
// students practice across a spread of difficulty levels; it is not a
// simulation of the official NMC CBT.
// ---------------------------------------------------------------------------

export const CAT_MIN_QUESTIONS = 15;
export const CAT_MAX_QUESTIONS = 50;
export const CAT_FREE_QUESTION_CAP = 10;

export type Difficulty = "easy" | "medium" | "hard";

const DIFFICULTY_VALUE: Record<Difficulty, number> = { easy: -1, medium: 0, hard: 1 };

export function difficultyToTheta(difficulty: Difficulty): number {
  return DIFFICULTY_VALUE[difficulty];
}

// Update the ability estimate after an answer. A correct answer nudges theta
// up toward harder questions; an incorrect answer nudges it down. The step
// size shrinks as more questions are answered (like a simple Newton-Raphson
// style update), so the estimate stabilizes over the course of the exam.
export function updateTheta(theta: number, questionDifficulty: Difficulty, isCorrect: boolean, questionNumber: number): number {
  const step = Math.max(0.15, 1 / Math.sqrt(questionNumber + 1));
  const qDiff = difficultyToTheta(questionDifficulty);
  const direction = isCorrect ? 1 : -1;
  // Move theta toward (questionDifficulty + direction), pulling it partway there.
  const target = qDiff + direction;
  return theta + step * (target - theta);
}

// Pick the target difficulty bucket for the next question given the current
// ability estimate.
export function targetDifficulty(theta: number): Difficulty {
  if (theta <= -0.4) return "easy";
  if (theta >= 0.4) return "hard";
  return "medium";
}

export type StopDecision = { shouldStop: boolean; status: "passed" | "failed" | "max_length" | null };

// Simplified 95%-confidence-interval stopping rule against a passing
// standard of theta = 0 (i.e., "average" difficulty). This mirrors the
// *shape* of adaptive-testing stopping rules used in some computerized
// exams (stop once confidence interval clears the passing standard) as a
// general study concept — it is not tied to any specific exam board.
export function checkStopCondition(theta: number, questionNumber: number, minQuestions: number, maxQuestions: number): StopDecision {
  if (questionNumber >= maxQuestions) {
    return { shouldStop: true, status: theta >= 0 ? "passed" : "failed" };
  }
  if (questionNumber < minQuestions) {
    return { shouldStop: false, status: null };
  }
  const standardError = 1.5 / Math.sqrt(questionNumber);
  const margin = 1.96 * standardError;
  if (theta - margin > 0) {
    return { shouldStop: true, status: "passed" };
  }
  if (theta + margin < 0) {
    return { shouldStop: true, status: "failed" };
  }
  return { shouldStop: false, status: null };
}
