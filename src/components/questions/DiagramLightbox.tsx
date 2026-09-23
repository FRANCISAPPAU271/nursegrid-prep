"use client";

import { useState } from "react";

export default function DiagramLightbox({ src, alt, caption }: { src: string; alt: string; caption?: string | null }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="block w-full cursor-zoom-in text-left" aria-label="Open diagram larger">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full object-contain transition hover:opacity-90" loading="lazy" />
      </button>
      {caption && <p className="border-t border-slate-100 px-3 py-2 text-xs font-medium text-slate-500">📊 {caption}</p>}
      {open && (
        <div role="dialog" aria-modal="true" aria-label={alt} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4" onClick={() => setOpen(false)}>
          <div className="relative max-h-[92vh] max-w-5xl rounded-2xl bg-white p-2 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close diagram" className="absolute right-3 top-3 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xl leading-none text-white">×</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-h-[86vh] w-auto max-w-full object-contain" />
            {caption && <p className="px-3 pb-2 pt-2 text-xs text-slate-600">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}
