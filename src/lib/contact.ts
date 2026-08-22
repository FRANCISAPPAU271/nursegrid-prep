// Shared WhatsApp contact details, used for the floating contact button,
// footer link, and support copy across the app. Ghana country code is +233;
// the local number's leading 0 is dropped for the international/wa.me format.
export const WHATSAPP_LOCAL_NUMBER = "0598872146";
export const WHATSAPP_INTL_NUMBER = "233598872146";
export const WHATSAPP_DISPLAY_NUMBER = "+233 59 887 2146";

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_INTL_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE = "Hi NurseGrid Prep! I have a question about my account.";
