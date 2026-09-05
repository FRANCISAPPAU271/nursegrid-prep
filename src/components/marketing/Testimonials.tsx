const TESTIMONIALS = [
  {
    quote:
      "The rationales are what sold me. I finally understood WHY an answer is correct instead of memorising letters from a PDF. I passed my licensing exam on the first attempt — my whole study group has switched.",
    name: "Ama B.",
    role: "RGN, Korle Bu — licensed 2025",
    initials: "AB",
  },
  {
    quote:
      "I was juggling clinicals and revision in final year. The task board kept every rotation and deadline on track, while the weakness radar told me exactly what to drill in my trotro rides to the ward.",
    name: "Kwame O.",
    role: "Final-year nursing student, Kumasi",
    initials: "KO",
  },
  {
    quote:
      "The strategy library taught me to think through prioritisation instead of guessing. And honestly? $9 for a full year when foreign apps wanted $60 — paid with MoMo in 2 minutes. No contest.",
    name: "Efua M.",
    role: "Midwife, passed licensing first attempt",
    initials: "EM",
  },
  {
    quote:
      "Bookmarking tough questions and reviewing them before my pharmacology paper was a game changer. The progress tracker showed me exactly which categories needed more work before exam day.",
    name: "Adwoa D.",
    role: "Nursing student, Class of 2027",
    initials: "AD",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {TESTIMONIALS.map((t) => (
        <figure key={t.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 text-amber-400" aria-hidden>
            {"★★★★★"}
          </div>
          <blockquote className="flex-1 text-sm text-slate-700">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
              {t.initials}
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
