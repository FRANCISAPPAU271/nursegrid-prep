type Badge = { icon: string; title: string; detail: string; unlocked: boolean };

export default function MilestonesCard({ attempted, accuracy, streak, tasksDone }: { attempted: number; accuracy: number | null; streak: number; tasksDone: number }) {
  const badges: Badge[] = [
    { icon: "🌱", title: "First step", detail: "Answer your first question", unlocked: attempted >= 1 },
    { icon: "⚡", title: "Getting started", detail: "Complete 10 questions", unlocked: attempted >= 10 },
    { icon: "💯", title: "Century", detail: "Complete 100 questions", unlocked: attempted >= 100 },
    { icon: "🔥", title: "Week on fire", detail: "Keep a 7-day streak", unlocked: streak >= 7 },
    { icon: "🎯", title: "Sharp thinking", detail: "Reach 80% accuracy", unlocked: accuracy !== null && accuracy >= 80 },
    { icon: "📋", title: "Organised learner", detail: "Complete 5 study tasks", unlocked: tasksDone >= 5 },
  ];
  const unlocked = badges.filter((b) => b.unlocked).length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-950">Milestones</h2>
          <p className="mt-1 text-xs text-slate-500">Small wins build exam confidence.</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">{unlocked}/{badges.length} unlocked</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {badges.map((badge) => (
          <div key={badge.title} className={`rounded-xl border p-3 ${badge.unlocked ? "border-emerald-200 bg-emerald-50" : "border-slate-100 bg-slate-50 opacity-60"}`}>
            <div className="flex items-center gap-2"><span className="text-xl grayscale-0">{badge.icon}</span><span className="text-xs font-bold text-slate-800">{badge.title}</span></div>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">{badge.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
