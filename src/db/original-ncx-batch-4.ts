import type { AuthoredQuestion } from "./authored-bank";
import { NCX4_PART_A } from "./original-ncx-batch-4a";
import { NCX4_PART_B } from "./original-ncx-batch-4b";
import { NCX4_PART_C } from "./original-ncx-batch-4c";
import { NCX4_PART_D } from "./original-ncx-batch-4d";
import { NCX4_PART_E } from "./original-ncx-batch-4e";
import { NCX4_PART_F } from "./original-ncx-batch-4f";
import { NCX4_PART_G } from "./original-ncx-batch-4g";
import { NCX4_PART_H } from "./original-ncx-batch-4h";

/**
 * NurseGrid original authored batch "NCX-4" — 150 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0251 … 0400) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batches NCX-1, NCX-2 and NCX-3.
 */
export const ORIGINAL_NCX_BATCH_4: AuthoredQuestion[] = [
  ...NCX4_PART_A,
  ...NCX4_PART_B,
  ...NCX4_PART_C,
  ...NCX4_PART_D,
  ...NCX4_PART_E,
  ...NCX4_PART_F,
  ...NCX4_PART_G,
  ...NCX4_PART_H,
];
