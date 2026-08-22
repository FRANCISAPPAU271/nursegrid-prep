// MTN Mobile Money (Ghana) payment details for the manual "send + confirm"
// flow. NurseGrid Prep does not currently have MTN's Collections API
// credentials (subscription key / API user / API key from
// momodeveloper.mtn.com), so payments are confirmed by the customer entering
// the MoMo transaction reference they receive by SMS after sending payment.
export const MOMO_RECEIVER_NUMBER = "0598872146";
export const MOMO_RECEIVER_NAME = "NurseGrid Prep";

// Approximate USD → GHS conversion for display purposes only. Actual amount
// sent should follow the current MTN MoMo exchange rate shown in the app the
// customer uses to send money. This is intentionally a rough estimate with a
// visible disclaimer in the UI.
export const APPROX_USD_TO_GHS_RATE = 15.5;

export function approxGhsAmount(usdCents: number): number {
  return Math.round((usdCents / 100) * APPROX_USD_TO_GHS_RATE);
}
