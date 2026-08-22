"use client";

import { buildWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from "@/lib/contact";

export default function SupportCard({ message }: { message?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#25D366]/10 text-xl">💬</span>
        <div>
          <h2 className="text-base font-bold text-slate-950">Need help?</h2>
          <p className="text-xs text-slate-500">Chat with us directly on WhatsApp — usually the fastest way to get support.</p>
        </div>
      </div>
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:brightness-95"
      >
        <span aria-hidden>💬</span> Chat on WhatsApp · {WHATSAPP_DISPLAY_NUMBER}
      </a>
      <p className="mt-3 text-center text-xs text-slate-400">
        Or email{" "}
        <a href="mailto:support@nursegridprep.app" className="font-semibold text-slate-500 hover:text-emerald-700">
          support@nursegridprep.app
        </a>
      </p>
    </div>
  );
}
