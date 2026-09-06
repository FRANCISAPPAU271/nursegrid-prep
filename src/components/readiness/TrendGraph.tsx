// Server-renderable SVG trend graph — no chart library, no client JS.
// Plots daily accuracy (line + dots) with volume bars underneath for the
// last 30 days of practice.

import type { TrendPoint } from "@/lib/trend";

export default function TrendGraph({ points }: { points: TrendPoint[] }) {
  if (points.length < 2) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-bold text-slate-950">📈 Performance trend</h2>
        <p className="mt-2 text-sm text-slate-500">
          Practice on at least two different days and your accuracy trend will appear here — watch the line climb as you
          improve.
        </p>
      </div>
    );
  }

  const W = 640;
  const H = 200;
  const PAD_L = 34;
  const PAD_R = 10;
  const PAD_T = 14;
  const PAD_B = 34;
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;

  const maxAttempts = Math.max(...points.map((p) => p.attempted), 1);
  const n = points.length;
  const x = (i: number) => PAD_L + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (acc: number) => PAD_T + (1 - acc / 100) * plotH;

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(p.accuracy).toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${x(n - 1).toFixed(1)},${PAD_T + plotH} L${x(0).toFixed(1)},${PAD_T + plotH} Z`;

  // Simple linear-regression slope over the accuracy series for the verdict.
  const meanX = (n - 1) / 2;
  const meanY = points.reduce((s, p) => s + p.accuracy, 0) / n;
  let num = 0;
  let den = 0;
  points.forEach((p, i) => {
    num += (i - meanX) * (p.accuracy - meanY);
    den += (i - meanX) ** 2;
  });
  const slope = den === 0 ? 0 : num / den;
  const trendVerdict = slope > 0.5 ? "improving" : slope < -0.5 ? "declining" : "steady";

  const first = points[0];
  const last = points[n - 1];
  const fmtDay = (iso: string) =>
    new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(`${iso}T12:00:00Z`));

  const barW = Math.max(2, Math.min(14, (plotW / n) * 0.55));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-base font-bold text-slate-950">📈 Performance trend — last 30 days</h2>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-bold ${
            trendVerdict === "improving"
              ? "bg-emerald-100 text-emerald-700"
              : trendVerdict === "declining"
                ? "bg-rose-100 text-rose-700"
                : "bg-slate-100 text-slate-600"
          }`}
        >
          {trendVerdict === "improving" ? "▲ Improving" : trendVerdict === "declining" ? "▼ Needs attention" : "→ Steady"}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Daily accuracy (line) and questions answered (bars) across {n} practice day{n === 1 ? "" : "s"}.
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label="Daily accuracy trend graph">
        {/* Gridlines at 0/25/50/75/100% */}
        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line x1={PAD_L} x2={W - PAD_R} y1={y(g)} y2={y(g)} stroke="#e2e8f0" strokeWidth="1" strokeDasharray={g === 0 ? "0" : "3 4"} />
            <text x={PAD_L - 6} y={y(g) + 3.5} textAnchor="end" fontSize="9" fill="#94a3b8">
              {g}%
            </text>
          </g>
        ))}

        {/* Volume bars */}
        {points.map((p, i) => {
          const bh = (p.attempted / maxAttempts) * (plotH * 0.35);
          return (
            <rect
              key={`b${i}`}
              x={x(i) - barW / 2}
              y={PAD_T + plotH - bh}
              width={barW}
              height={bh}
              rx={2}
              fill="#a7f3d0"
              opacity={0.6}
            />
          );
        })}

        {/* Accuracy area + line */}
        <path d={areaPath} fill="#10b981" opacity={0.08} />
        <path d={linePath} fill="none" stroke="#059669" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

        {/* Dots */}
        {points.map((p, i) => (
          <circle key={`d${i}`} cx={x(i)} cy={y(p.accuracy)} r={3.2} fill="#059669" stroke="#fff" strokeWidth="1.5">
            <title>{`${fmtDay(p.date)}: ${p.accuracy}% (${p.correct}/${p.attempted})`}</title>
          </circle>
        ))}

        {/* X-axis endpoint labels */}
        <text x={x(0)} y={H - 12} textAnchor="start" fontSize="9.5" fill="#64748b">
          {fmtDay(first.date)}
        </text>
        <text x={x(n - 1)} y={H - 12} textAnchor="end" fontSize="9.5" fill="#64748b">
          {fmtDay(last.date)}
        </text>
      </svg>

      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-4 rounded bg-emerald-600" /> Accuracy
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-emerald-200" /> Questions answered
        </span>
        <span className="ml-auto font-semibold text-slate-600">
          Latest: {last.accuracy}% ({last.correct}/{last.attempted})
        </span>
      </div>
    </div>
  );
}
