import type { AuthoredQuestion } from "./authored-bank";
import { NCX6_PART_A } from "./original-ncx-batch-6a";
import { NCX6_PART_B } from "./original-ncx-batch-6b";
import { NCX6_PART_C } from "./original-ncx-batch-6c";
import { NCX6_PART_D } from "./original-ncx-batch-6d";
import { NCX6_PART_E } from "./original-ncx-batch-6e";
import { NCX6_PART_F } from "./original-ncx-batch-6f";
import { NCX6_PART_G } from "./original-ncx-batch-6g";
import { NCX6_PART_H } from "./original-ncx-batch-6h";
import { NCX6_PART_I } from "./original-ncx-batch-6i";
import { NCX6_PART_J } from "./original-ncx-batch-6j";

/**
 * NurseGrid original authored batch "NCX-6" — 200 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0551 … 0750) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batches NCX-1 through NCX-5.
 */
export const ORIGINAL_NCX_BATCH_6: AuthoredQuestion[] = [
  ...NCX6_PART_A,
  ...NCX6_PART_B,
  ...NCX6_PART_C,
  ...NCX6_PART_D,
  ...NCX6_PART_E,
  ...NCX6_PART_F,
  ...NCX6_PART_G,
  ...NCX6_PART_H,
  ...NCX6_PART_I,
  ...NCX6_PART_J,
];
