import type { AuthoredQuestion } from "./authored-bank";
import { NCX_PART_A } from "./original-ncx-batch-1a";
import { NCX_PART_B } from "./original-ncx-batch-1b";
import { NCX_PART_C } from "./original-ncx-batch-1c";
import { NCX_PART_D } from "./original-ncx-batch-1d";

/**
 * NurseGrid original authored batch "NCX-1" — 75 clinically reviewed
 * questions across all twelve categories, written for Ghanaian nursing and
 * midwifery students. Every item has a fresh scenario, four options, a
 * house-format rationale and a decision-tree strategy.
 */
export const ORIGINAL_NCX_BATCH_1: AuthoredQuestion[] = [
  ...NCX_PART_A,
  ...NCX_PART_B,
  ...NCX_PART_C,
  ...NCX_PART_D,
];
