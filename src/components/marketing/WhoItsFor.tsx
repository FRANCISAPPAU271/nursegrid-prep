// Self-identification block.
//
// The rest of the page argues that NurseGrid is good. This section answers the
// quieter question a visitor is actually asking — "is this for someone like
// me?" — because a student who cannot place herself in the copy has no reason
// to start a trial, however good the product is.

const PERSONAS = [
  {
    icon: "🎓",
    title: "Final-year student",
    situation: "Clinicals by day, revision by night, exam in a few months.",
    fit: "The task board keeps rotations and deadlines in one place, and the weakness radar tells you what to drill in the twenty minutes you actually have.",
  },
  {
    icon: "🔁",
    title: "Resitting the paper",
    situation: "You passed the course but not the licensing exam, and the clock is running.",
    fit: "Start with the categories you scored lowest in, not from question one. Every rationale rebuilds the reasoning that the first attempt missed.",
  },
  {
    icon: "🤰",
    title: "Midwifery candidate",
    situation: "Sitting the midwifery licensing paper, not the general nursing one.",
    fit: "Maternal-newborn, obstetrics, gynaecology and paediatrics are first-class categories here, not a chapter bolted onto a medical-surgical bank.",
  },
  {
    icon: "🩺",
    title: "Working nurse or midwife",
    situation: "Already on the ward, preparing for a licensing or promotion exam.",
    fit: "Practise on a phone between shifts, offline, without paying for another subscription that renews itself while you're not looking.",
  },
];

export default function WhoItsFor() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {PERSONAS.map((p) => (
        <li
          key={p.title}
          className="rounded-3xl border border-slate-900/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-lg">
              {p.icon}
            </span>
            <h3 className="text-base font-extrabold text-slate-950">{p.title}</h3>
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-700">{p.situation}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.fit}</p>
        </li>
      ))}
    </ul>
  );
}
