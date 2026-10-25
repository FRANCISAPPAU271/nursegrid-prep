"use client";

import { useMemo, useState } from "react";
import type { GlossaryEntry } from "@/content/courses/types";

/**
 * Searchable glossary.
 *
 * A glossary with fifty entries is a wall of text unless it can be filtered, so
 * search is the primary control and the alphabet is secondary. Matching covers
 * the term, the definition and every alias, because the reason a learner is
 * here is usually that they cannot remember what an abbreviation stands for.
 *
 * Client-side only: the whole list ships in the payload. At fifty to a hundred
 * entries that is a few kilobytes, which is cheaper than a request per
 * keystroke and keeps the page usable offline inside the mobile shell.
 */

type Props = {
  entries: GlossaryEntry[];
  /** lesson slug → title, so an entry can link back to where it is taught. */
  lessonTitles: Record<string, string>;
  /** Stem of the course URL, e.g. /dashboard/courses/endocrine-and-diabetes-nursing */
  basePath: string;
};

function normalise(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export default function GlossaryBrowser({ entries, lessonTitles, basePath }: Props) {
  const [query, setQuery] = useState("");
  const [letter, setLetter] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...entries].sort((a, b) => a.term.localeCompare(b.term, "en")),
    [entries],
  );

  const letters = useMemo(() => {
    const set = new Set<string>();
    for (const e of sorted) {
      const first = e.term[0]?.toUpperCase();
      if (first && /[A-Z]/.test(first)) set.add(first);
    }
    return Array.from(set).sort();
  }, [sorted]);

  const visible = useMemo(() => {
    const q = normalise(query);
    return sorted.filter((e) => {
      if (letter && e.term[0]?.toUpperCase() !== letter) return false;
      if (!q) return true;
      const haystack = [e.term, e.definition, ...(e.alsoKnownAs ?? [])].map(normalise).join(" ");
      return haystack.includes(q);
    });
  }, [sorted, query, letter]);

  const filtered = Boolean(query) || Boolean(letter);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-1 bg-white/95 px-1 pb-3 pt-1 backdrop-blur print:static">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a term, an abbreviation or a definition…"
            aria-label="Search the glossary"
            className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
          />
          <span aria-hidden className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => setLetter(null)}
            className={`rounded-md px-2 py-1 text-xs font-bold ${
              letter === null ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {letters.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLetter(letter === l ? null : l)}
              className={`rounded-md px-2 py-1 text-xs font-bold ${
                letter === l ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {l}
            </button>
          ))}
          <span className="ml-auto text-xs font-semibold text-slate-400">
            {filtered ? `${visible.length} of ${sorted.length}` : `${sorted.length} terms`}
          </span>
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="text-sm font-semibold text-slate-700">No term matches “{query}”.</p>
          <p className="mt-1 text-xs text-slate-500">
            Try the abbreviation (DKA), the drug name, or part of the definition.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setLetter(null);
            }}
            className="mt-3 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-800"
          >
            Clear search
          </button>
        </div>
      ) : (
        <dl className="mt-2 divide-y divide-slate-100">
          {visible.map((e) => (
            <div key={e.term} className="py-4">
              <dt className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-base font-extrabold text-slate-900">{e.term}</span>
                {e.alsoKnownAs?.length ? (
                  <span className="text-xs font-semibold text-slate-400">
                    also {e.alsoKnownAs.join(", ")}
                  </span>
                ) : null}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">{e.definition}</dd>
              {e.lesson && lessonTitles[e.lesson] ? (
                <dd className="mt-1.5">
                  <a
                    href={`${basePath}/${e.lesson}`}
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    → Taught in “{lessonTitles[e.lesson]}”
                  </a>
                </dd>
              ) : null}
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
