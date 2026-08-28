// Shared WhatsApp contact details, used for the floating contact button,
// footer link, and support copy across the app. This is intentionally a
// different number from the MTN Mobile Money payment number (see
// src/lib/momo.ts) — one is for receiving payments, this one is for chat
// support. Ghana country code is +233; the local number's leading 0 is
// dropped for the international/wa.me format.
export const WHATSAPP_LOCAL_NUMBER = "0542428075";
export const WHATSAPP_INTL_NUMBER = "233542428075";
export const WHATSAPP_DISPLAY_NUMBER = "+233 54 242 8075";

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = "Hi NurseGrid Prep! I have a question about my account.";
