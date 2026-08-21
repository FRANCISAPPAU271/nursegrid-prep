import "server-only";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars

export function generateReferralCode(): string {
  let code = "";
  for (let i = 0; i < 7; i++) {
    code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return `NG-${code}`;
}

export const REFERRAL_REWARD_DAYS = 14;
