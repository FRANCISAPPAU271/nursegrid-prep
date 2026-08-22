"use client";

import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/contact";

// Floating WhatsApp contact button shown on every page (marketing + dashboard).
// Placed bottom-left so it never collides with the toast notifications or the
// "Install app" prompt, which both anchor to the bottom-right.
export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NurseGrid Prep on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-4 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-emerald-900/20 transition hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
    >
      <span aria-hidden className="drop-shadow-sm">
        💬
      </span>
      <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
