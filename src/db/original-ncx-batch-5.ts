import type { AuthoredQuestion } from "./authored-bank";
import { NCX5_PART_A } from "./original-ncx-batch-5a";
import { NCX5_PART_B } from "./original-ncx-batch-5b";
import { NCX5_PART_C } from "./original-ncx-batch-5c";
import { NCX5_PART_D } from "./original-ncx-batch-5d";
import { NCX5_PART_E } from "./original-ncx-batch-5e";
import { NCX5_PART_F } from "./original-ncx-batch-5f";
import { NCX5_PART_G } from "./original-ncx-batch-5g";
import { NCX5_PART_H } from "./original-ncx-batch-5h";

/**
 * NurseGrid original authored batch "NCX-5" — 150 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0401 … 0550) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batches NCX-1 through NCX-4.
 */
export const ORIGINAL_NCX_BATCH_5: AuthoredQuestion[] = [
  ...NCX5_PART_A,
  ...NCX5_PART_B,
  ...NCX5_PART_C,
  ...NCX5_PART_D,
  ...NCX5_PART_E,
  ...NCX5_PART_F,
  ...NCX5_PART_G,
  ...NCX5_PART_H,
];
