import type { AuthoredQuestion } from "./authored-bank";
import { NCX7_PART_A } from "./original-ncx-batch-7a";
import { NCX7_PART_B } from "./original-ncx-batch-7b";
import { NCX7_PART_C } from "./original-ncx-batch-7c";
import { NCX7_PART_D } from "./original-ncx-batch-7d";
import { NCX7_PART_E } from "./original-ncx-batch-7e";
import { NCX7_PART_F } from "./original-ncx-batch-7f";
import { NCX7_PART_G } from "./original-ncx-batch-7g";
import { NCX7_PART_H } from "./original-ncx-batch-7h";
import { NCX7_PART_I } from "./original-ncx-batch-7i";
import { NCX7_PART_J } from "./original-ncx-batch-7j";
import { NCX7_PART_K } from "./original-ncx-batch-7k";
import { NCX7_PART_L } from "./original-ncx-batch-7l";
import { NCX7_PART_M } from "./original-ncx-batch-7m";

/**
 * NurseGrid original authored batch "NCX-7" — 265 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-0751 … 1015) across all twelve categories,
 * written for Ghanaian nursing and midwifery students in the same house format
 * as batches NCX-1 through NCX-6.
 */
export const ORIGINAL_NCX_BATCH_7: AuthoredQuestion[] = [
  ...NCX7_PART_A,
  ...NCX7_PART_B,
  ...NCX7_PART_C,
  ...NCX7_PART_D,
  ...NCX7_PART_E,
  ...NCX7_PART_F,
  ...NCX7_PART_G,
  ...NCX7_PART_H,
  ...NCX7_PART_I,
  ...NCX7_PART_J,
  ...NCX7_PART_K,
  ...NCX7_PART_L,
  ...NCX7_PART_M,
];
