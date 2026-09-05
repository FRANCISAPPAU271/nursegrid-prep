import "server-only";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars

export function generateReferralCode(): string {
  let code = "";
  for (let i = 0; i < 7; i++) {
    code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return `NG-${code}`;
}

export const REFERRAL_REWARD_DAYS = 3;

// Every new signup gets a short taste of full premium — the biggest
// conversion lever: students who experience the full question bank and
// readiness tooling convert far better than those who hit the free wall cold.
// Referral signups earn the same 3-day reward for both parties (never stacked).
export const SIGNUP_TRIAL_DAYS = 3;
