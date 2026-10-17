import { COMPARISON_ROWS } from "./comparison-data";

function Cell({ value, highlight }: { value: string | false; highlight?: boolean }) {
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 text-slate-400">
        <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-400">
          ✕
        </span>
        <span className="sr-only">No</span>
      </span>
    );
  }
  return (
    <span className={highlight ? "font-semibold text-emerald-900" : "text-slate-600"}>{value}</span>
  );
}

/**
 * Comparison table.
 *
 * On phones this becomes a stack of cards, one per row — a three-column table
 * is unreadable at 360px and horizontal scrolling hides the column that wins.
 * The table version is kept from `sm` upward, where it is genuinely faster to
 * scan than the cards.
 */
export default function ComparisonTable() {
  return (
    <div>
      {/* Mobile: one card per row, NurseGrid value emphasised. */}
      <div className="space-y-3 sm:hidden">
        {COMPARISON_ROWS.map((row) => (
          <div key={row.label} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-900">{row.label}</p>
            <dl className="mt-2.5 space-y-1.5 text-xs">
              <div className="flex items-start justify-between gap-3">
                <dt className="text-slate-500">PDF dumps</dt>
                <dd className="text-right">
                  <Cell value={row.pdf} />
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="text-slate-500">Foreign apps</dt>
                <dd className="text-right">
                  <Cell value={row.foreign} />
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3 rounded-lg bg-emerald-50 px-2 py-1.5">
                <dt className="font-semibold text-emerald-800">NurseGrid</dt>
                <dd className="text-right">
                  <Cell value={row.nursegrid} highlight />
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* Tablet and up: the real table. */}
      <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            How NurseGrid Prep compares with recycled PDF past questions and foreign subscription apps
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                What matters
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                📄 PDF dumps
              </th>
              <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                💸 Foreign apps
              </th>
              <th scope="col" className="bg-emerald-600 px-5 py-4 text-xs font-bold uppercase tracking-wide text-white">
                🩺 NurseGrid Prep
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 1 ? "bg-slate-50/60" : "bg-white"}>
                <th scope="row" className="px-5 py-3.5 text-sm font-semibold text-slate-900">
                  {row.label}
                </th>
                <td className="px-5 py-3.5">
                  <Cell value={row.pdf} />
                </td>
                <td className="px-5 py-3.5">
                  <Cell value={row.foreign} />
                </td>
                <td className="bg-emerald-50/70 px-5 py-3.5">
                  <Cell value={row.nursegrid} highlight />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
