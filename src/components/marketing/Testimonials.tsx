const TESTIMONIALS = [
  {
    quote:
      "The rationales are what sold me. I finally understand WHY an answer is correct instead of just memorizing it. My med-surg exam scores went up almost immediately.",
    name: "Priya S.",
    role: "BSN Student, Class of 2026",
    initials: "PS",
  },
  {
    quote:
      "I used the task board to keep track of every clinical rotation and assignment for a whole semester — it's the only planner that actually understood what nursing school looks like.",
    name: "Marcus T.",
    role: "ADN Student",
    initials: "MT",
  },
  {
    quote:
      "The strategy library taught me how to actually think through prioritization questions instead of guessing. I passed NCLEX on my first attempt.",
    name: "Aaliyah R.",
    role: "RN, recent graduate",
    initials: "AR",
  },
  {
    quote:
      "Bookmarking tough questions and reviewing them before my pharmacology final was a game changer. The progress tracker showed me exactly which categories needed more work.",
    name: "Diego M.",
    role: "BSN Student, Class of 2027",
    initials: "DM",
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
