import type { AuthoredQuestion } from "./authored-bank";
import { NCX9_PART_A } from "./original-ncx-batch-9a";
import { NCX9_PART_B } from "./original-ncx-batch-9b";
import { NCX9_PART_C } from "./original-ncx-batch-9c";

/**
 * NurseGrid original authored batch "NCX-9" — 58 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-1067 … 1124) with a paediatric and newborn
 * focus, written for Ghanaian nursing and midwifery students in the same
 * house format as batches NCX-1 through NCX-8.
 */
export const ORIGINAL_NCX_BATCH_9: AuthoredQuestion[] = [
  ...NCX9_PART_A,
  ...NCX9_PART_B,
  ...NCX9_PART_C,
];
