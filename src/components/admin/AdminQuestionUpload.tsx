"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/Toast";

type Category = { id: string; name: string; slug: string };
type Choice = { id: string; text: string };
type ManualQuestion = {
  id: string;
  categoryId: string;
  categoryName: string;
  stem: string;
  choices: Choice[];
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  difficulty: "easy" | "medium" | "hard";
  isFree: boolean;
  createdAt: string;
};

const LETTERS = ["a", "b", "c", "d", "e", "f"];

const EMPTY_FORM = {
  categoryId: "",
  stem: "",
  choiceTexts: ["", "", "", ""],
  correctIndex: 0,
  rationale: "",
  strategy: "",
  difficulty: "medium" as "easy" | "medium" | "hard",
  isFree: false,
};

export default function AdminQuestionUpload() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [existing, setExisting] = useState<ManualQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toast = useToast();

  const load = useCallback(() => {
    fetch("/api/admin/questions")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories ?? []);
        setExisting(data.questions ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const setChoice = (i: number, text: string) => {
    setForm((f) => {
      const next = [...f.choiceTexts];
      next[i] = text;
      return { ...f, choiceTexts: next };
    });
  };

  const addChoice = () => setForm((f) => (f.choiceTexts.length >= 6 ? f : { ...f, choiceTexts: [...f.choiceTexts, ""] }));
  const removeChoice = (i: number) =>
    setForm((f) => {
      if (f.choiceTexts.length <= 2) return f;
      const next = f.choiceTexts.filter((_, idx) => idx !== i);
      let correctIndex = f.correctIndex;
      if (i === f.correctIndex) correctIndex = 0;
      else if (i < f.correctIndex) correctIndex = f.correctIndex - 1;
      return { ...f, choiceTexts: next, correctIndex };
    });

  const submit = async () => {
    const filled = form.choiceTexts.map((t) => t.trim());
    if (!form.categoryId) return toast.push("Choose a category.", "error");
    if (form.stem.trim().length < 10) return toast.push("Write the question (at least 10 characters).", "error");
    if (filled.some((t) => !t)) return toast.push("Fill in every answer choice (or remove empty ones).", "error");
    if (form.rationale.trim().length < 10) return toast.push("Add a rationale — it is what makes the question teach.", "error");

    const choices = filled.map((text, i) => ({ id: LETTERS[i], text }));
    setSaving(true);
    try {
      const res = await fetch("/api/admin/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categoryId: form.categoryId,
          stem: form.stem.trim(),
          choices,
          correctChoiceId: LETTERS[form.correctIndex],
          rationale: form.rationale.trim(),
          strategy: form.strategy.trim(),
          difficulty: form.difficulty,
          isFree: form.isFree,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      toast.push("Question uploaded — it is live for students now.", "success");
      setForm((f) => ({ ...EMPTY_FORM, categoryId: f.categoryId, difficulty: f.difficulty }));
      load();
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Upload failed", "error");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: string) => {
    if (!window.confirm("Delete this question? Students' past attempts at it will also be removed.")) return;
    try {
      const res = await fetch(`/api/admin/questions/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Delete failed");
      toast.push("Question deleted.", "success");
      setExisting((qs) => qs.filter((q) => q.id !== id));
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Delete failed", "error");
    }
  };

  return (
    <div className="space-y-8">
      {/* ---- Upload form ---- */}
      <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="text-base font-bold text-slate-950">New question</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Category</span>
            <select
              value={form.categoryId}
              onChange={(e) => setForm((f) => ({ ...f, categoryId: e.target.value }))}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
            >
              <option value="">Choose a category…</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700">Difficulty</span>
              <select
                value={form.difficulty}
                onChange={(e) => setForm((f) => ({ ...f, difficulty: e.target.value as typeof f.difficulty }))}
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <label className="flex items-end gap-2 pb-2.5">
              <input
                type="checkbox"
                checked={form.isFree}
                onChange={(e) => setForm((f) => ({ ...f, isFree: e.target.checked }))}
                className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm font-semibold text-slate-700">Free preview</span>
            </label>
          </div>
        </div>

        <label className="mt-4 block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Question</span>
          <textarea
            value={form.stem}
            onChange={(e) => setForm((f) => ({ ...f, stem: e.target.value }))}
            rows={3}
            placeholder="e.g. A client with severe malaria suddenly becomes drowsy. Which assessment should the nurse perform FIRST?"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </label>

        <div className="mt-4">
          <span className="mb-1 block text-sm font-semibold text-slate-700">
            Answer choices <span className="font-normal text-slate-500">(tick the correct one)</span>
          </span>
          <div className="space-y-2">
            {form.choiceTexts.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correct"
                  checked={form.correctIndex === i}
                  onChange={() => setForm((f) => ({ ...f, correctIndex: i }))}
                  className="h-4 w-4 shrink-0 border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  title="Mark as the correct answer"
                />
                <span className="w-5 shrink-0 text-sm font-bold uppercase text-slate-500">{LETTERS[i]}.</span>
                <input
                  value={text}
                  onChange={(e) => setChoice(i, e.target.value)}
                  placeholder={`Choice ${LETTERS[i].toUpperCase()}`}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                />
                {form.choiceTexts.length > 2 && (
                  <button
                    type="button"
                    onClick={() => removeChoice(i)}
                    className="shrink-0 rounded-lg px-2 py-1 text-sm font-bold text-slate-400 hover:bg-red-50 hover:text-red-600"
                    title="Remove this choice"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          {form.choiceTexts.length < 6 && (
            <button type="button" onClick={addChoice} className="mt-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800">
              + Add another choice
            </button>
          )}
        </div>

        <label className="mt-4 block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Rationale</span>
          <textarea
            value={form.rationale}
            onChange={(e) => setForm((f) => ({ ...f, rationale: e.target.value }))}
            rows={4}
            placeholder="Explain WHY the correct answer is right and why the others are wrong — this is what students learn from."
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </label>

        <label className="mt-4 block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">
            Strategy tip <span className="font-normal text-slate-500">(optional)</span>
          </span>
          <input
            value={form.strategy}
            onChange={(e) => setForm((f) => ({ ...f, strategy: e.target.value }))}
            placeholder="e.g. When two options both look right, ask which one the client would die without."
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none"
          />
        </label>

        <button
          onClick={submit}
          disabled={saving}
          className="mt-5 w-full rounded-xl bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-70 sm:w-auto"
        >
          {saving ? "Uploading…" : "Upload question"}
        </button>
      </div>

      {/* ---- Existing manual questions ---- */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-base font-bold text-slate-950">
          Your uploaded questions {!loading && <span className="font-normal text-slate-500">({existing.length})</span>}
        </h2>
        {loading ? (
          <p className="py-6 text-center text-sm text-slate-500">Loading…</p>
        ) : existing.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">
            No manually uploaded questions yet. Questions you add above appear here — and are never removed by automatic
            question-bank updates.
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-100">
            {existing.map((q) => (
              <li key={q.id} className="py-3">
                <div className="flex items-start justify-between gap-3">
                  <button
                    onClick={() => setExpandedId((id) => (id === q.id ? null : q.id))}
                    className="min-w-0 flex-1 text-left"
                  >
                    <p className="truncate text-sm font-semibold text-slate-900">{q.stem}</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {q.categoryName} · {q.difficulty}
                      {q.isFree && " · free preview"} ·{" "}
                      {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(
                        new Date(q.createdAt),
                      )}
                    </p>
                  </button>
                  <button
                    onClick={() => remove(q.id)}
                    className="shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-bold text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
                {expandedId === q.id && (
                  <div className="mt-2 rounded-xl bg-slate-50 p-3 text-sm">
                    <ul className="space-y-1">
                      {q.choices.map((c) => (
                        <li key={c.id} className={c.id === q.correctChoiceId ? "font-semibold text-emerald-700" : "text-slate-600"}>
                          {c.id.toUpperCase()}. {c.text} {c.id === q.correctChoiceId && "✓"}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-slate-600">
                      <span className="font-semibold text-slate-800">Rationale:</span> {q.rationale}
                    </p>
                    {q.strategy && (
                      <p className="mt-1 text-slate-600">
                        <span className="font-semibold text-slate-800">Strategy:</span> {q.strategy}
                      </p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
