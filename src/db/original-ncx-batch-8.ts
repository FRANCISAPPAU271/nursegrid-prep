import type { AuthoredQuestion } from "./authored-bank";
import { NCX8_PART_A } from "./original-ncx-batch-8a";
import { NCX8_PART_B } from "./original-ncx-batch-8b";
import { NCX8_PART_C } from "./original-ncx-batch-8c";

/**
 * NurseGrid original authored batch "NCX-8" — 51 further clinically reviewed
 * questions (ids NG-ORIGINAL-NCX-1016 … 1066) with a fluid-electrolyte and
 * acid–base focus, written for Ghanaian nursing and midwifery students in the
 * same house format as batches NCX-1 through NCX-7.
 */
export const ORIGINAL_NCX_BATCH_8: AuthoredQuestion[] = [
  ...NCX8_PART_A,
  ...NCX8_PART_B,
  ...NCX8_PART_C,
];
