import "server-only";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no ambiguous chars

export function generateReferralCode(): string {
  let code = "";
  for (let i = 0; i < 7; i++) {
    code += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return `NG-${code}`;
}

// Every new signup gets a short taste of full premium — the biggest
// conversion lever: students who experience the full question bank and
// readiness tooling convert far better than those who hit the free wall cold.
// A referral does not change this: it earns the friend a first-purchase
// discount and the referrer account credit, never bonus days.
export const SIGNUP_TRIAL_DAYS = 3;
