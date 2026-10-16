import type { LessonBlock } from "@/content/courses";
import DiagramLightbox from "@/components/questions/DiagramLightbox";
import { InlineText } from "./InlineText";

const CALLOUT_STYLE = {
  tip: { wrap: "border-sky-200 bg-sky-50", title: "text-sky-900", body: "text-sky-900/90", icon: "💡" },
  warning: { wrap: "border-rose-200 bg-rose-50", title: "text-rose-900", body: "text-rose-900/90", icon: "⚠️" },
  exam: { wrap: "border-amber-200 bg-amber-50", title: "text-amber-900", body: "text-amber-900/90", icon: "🎯" },
} as const;

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-extrabold tracking-tight text-slate-950">{children}</h3>;
}

export default function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="space-y-7">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <section key={i} className="space-y-2.5">
                {block.heading && <Heading>{block.heading}</Heading>}
                {block.paragraphs.map((p, j) => (
                  <p key={j} className="text-[15px] leading-relaxed text-slate-700">
                    <InlineText text={p} />
                  </p>
                ))}
              </section>
            );
          case "list": {
            const steps = block.style === "steps";
            return (
              <section key={i} className="space-y-2.5">
                {block.heading && <Heading>{block.heading}</Heading>}
                {steps ? (
                  <ol className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">{j + 1}</span>
                        <span className="flex-1">
                          <InlineText text={item} />
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-2">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-700">
                        <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span className="flex-1">
                          <InlineText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          }
          case "table":
            return (
              <section key={i} className="space-y-2.5">
                {block.heading && <Heading>{block.heading}</Heading>}
                <div className="relative">
                  <div className="sm:hidden mb-1 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>📊 Table</span>
                    <span className="flex items-center gap-1 text-emerald-700">👉 Swipe horizontally to view full table</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-slate-200 overscroll-x-contain [-webkit-overflow-scrolling:touch]">
                    <table className="w-full min-w-[500px] border-collapse text-left text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          {block.columns.map((c, j) => (
                            <th key={j} className="border-b border-slate-200 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-600">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr key={r} className={r % 2 === 1 ? "bg-slate-50/60" : "bg-white"}>
                            {row.map((cell, c) => (
                              <td key={c} className={`border-b border-slate-100 px-3 py-2 align-top leading-relaxed text-slate-700 ${c === 0 ? "font-semibold text-slate-900" : ""}`}>
                                <InlineText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            );
          case "callout": {
            const s = CALLOUT_STYLE[block.tone];
            return (
              <aside key={i} className={`rounded-2xl border p-4 ${s.wrap}`}>
                <p className={`text-sm font-extrabold ${s.title}`}>
                  <span className="mr-1.5">{s.icon}</span>
                  {block.title}
                </p>
                <p className={`mt-1.5 text-sm leading-relaxed ${s.body}`}>
                  <InlineText text={block.body} />
                </p>
              </aside>
            );
          }
          case "diagram":
            return (
              <figure key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <DiagramLightbox src={block.src} alt={block.alt} caption={block.caption} />
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
