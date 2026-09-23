"use client";

import Link from "next/link";
import { useState } from "react";
import { RichText } from "@/components/questions/RichText";

type Question = { stem: string; choices: { id: string; text: string }[]; correctChoiceId: string; rationale: string; categorySlug: string };

export default function SampleQuiz({ questions }: { questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const q = questions[index];
  const done = index >= questions.length;
  if (done) return <main className="min-h-screen bg-slate-50 px-5 py-16"><div className="mx-auto max-w-2xl rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-sm"><p className="text-4xl">🎉</p><h1 className="mt-3 text-2xl font-extrabold text-slate-950">You tried the sample set</h1><p className="mt-2 text-slate-600">Create a free account to practise the full question bank, track progress and build your readiness score.</p><Link href="/signup" className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700">Start your free access →</Link></div></main>;
  return <main className="min-h-screen bg-slate-50 px-5 py-10"><div className="mx-auto max-w-2xl"><Link href="/" className="text-sm font-bold text-emerald-700 hover:underline">← NurseGrid Prep</Link><div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Free sample {index + 1} of {questions.length}</span><span className="text-xs text-slate-400">{q.categorySlug.replaceAll("-", " ")}</span></div><h1 className="mt-5 text-xl font-extrabold leading-relaxed text-slate-950">{q.stem}</h1><div className="mt-6 space-y-3">{q.choices.map((c) => <button key={c.id} disabled={Boolean(selected)} onClick={() => setSelected(c.id)} className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm ${selected && c.id === q.correctChoiceId ? "border-emerald-400 bg-emerald-50 text-emerald-900" : selected === c.id ? "border-rose-400 bg-rose-50 text-rose-900" : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"}`}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-xs font-bold uppercase">{c.id}</span><span>{c.text}</span></button>)}</div>{selected && <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className={`font-bold ${selected === q.correctChoiceId ? "text-emerald-700" : "text-rose-700"}`}>{selected === q.correctChoiceId ? "Correct!" : `Not quite. The correct answer is ${q.correctChoiceId.toUpperCase()}.`}</p><RichText text={q.rationale} className="mt-2 text-sm leading-relaxed text-slate-700" /><button onClick={() => { setIndex((i) => i + 1); setSelected(null); }} className="mt-4 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white">{index + 1 === questions.length ? "Finish sample" : "Next question →"}</button></div>}</div></div></main>;
}
