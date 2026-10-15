import type { AuthoredQuestion } from "./authored-bank";
import { NCX3_PART_A } from "./original-ncx-batch-3a";
import { NCX3_PART_B } from "./original-ncx-batch-3b";
import { NCX3_PART_C } from "./original-ncx-batch-3c";
import { NCX3_PART_D } from "./original-ncx-batch-3d";
import { NCX3_PART_E } from "./original-ncx-batch-3e";

/**
 * NurseGrid original authored batch "NCX-3" — 100 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0151 … 0250) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batches NCX-1 and NCX-2.
 */
export const ORIGINAL_NCX_BATCH_3: AuthoredQuestion[] = [
  ...NCX3_PART_A,
  ...NCX3_PART_B,
  ...NCX3_PART_C,
  ...NCX3_PART_D,
  ...NCX3_PART_E,
];
