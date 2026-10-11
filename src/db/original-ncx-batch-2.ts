import type { AuthoredQuestion } from "./authored-bank";
import { NCX2_PART_A } from "./original-ncx-batch-2a";
import { NCX2_PART_B } from "./original-ncx-batch-2b";
import { NCX2_PART_C } from "./original-ncx-batch-2c";
import { NCX2_PART_D } from "./original-ncx-batch-2d";

/**
 * NurseGrid original authored batch "NCX-2" — 75 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0076 … 0150) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batch NCX-1.
 */
export const ORIGINAL_NCX_BATCH_2: AuthoredQuestion[] = [
  ...NCX2_PART_A,
  ...NCX2_PART_B,
  ...NCX2_PART_C,
  ...NCX2_PART_D,
];
