"use client";

import { Fragment, useState } from "react";
import { useToast } from "@/components/ui/Toast";

export type MissedRow = {
  id: string;
  stem: string;
  difficulty: string;
  categoryName: string;
  attempts: number;
  missed: number;
  missRate: number;
  mediaUrl: string | null;
  mediaCaption: string | null;
};

export default function MostMissedTable({ initial }: { initial: MissedRow[] }) {
  const [rows, setRows] = useState(initial);
  const [editing, setEditing] = useState<string | null>(null);
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  function openEditor(row: MissedRow) {
    setEditing(row.id);
    setUrl(row.mediaUrl ?? "");
    setCaption(row.mediaCaption ?? "");
  }

  async function save(questionId: string) {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/questions/media", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId, mediaUrl: url.trim(), mediaCaption: caption.trim() }),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed to save media");
      setRows((list) =>
        list.map((r) =>
          r.id === questionId
            ? { ...r, mediaUrl: url.trim() || null, mediaCaption: url.trim() ? caption.trim() || null : null }
            : r,
        ),
      );
      toast.push(url.trim() ? "Explanation media attached ✓" : "Media removed", "success");
      setEditing(null);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Failed to save media", "error");
    } finally {
      setSaving(false);
    }
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
        <div className="text-4xl">📊</div>
        <h3 className="mt-3 text-base font-bold text-slate-900">Not enough data yet</h3>
        <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
          Once questions accumulate at least 5 attempts each, the hardest ones will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50 text-xs font-bold uppercase tracking-wide text-slate-500">
            <th className="px-4 py-3">Question</th>
            <th className="hidden px-4 py-3 sm:table-cell">Category</th>
            <th className="px-4 py-3 text-right">Miss rate</th>
            <th className="hidden px-4 py-3 text-right sm:table-cell">Attempts</th>
            <th className="px-4 py-3 text-right">Media</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((q) => (
            <Fragment key={q.id}>
              <tr className="align-top hover:bg-slate-50/60">
                <td className="max-w-md px-4 py-3">
                  <p className="line-clamp-2 font-medium text-slate-800">{q.stem}</p>
                  <p className="mt-0.5 text-xs capitalize text-slate-400 sm:hidden">
                    {q.categoryName} · {q.attempts} attempts
                  </p>
                </td>
                <td className="hidden px-4 py-3 text-xs text-slate-500 sm:table-cell">{q.categoryName}</td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${
                      q.missRate >= 70
                        ? "bg-rose-100 text-rose-700"
                        : q.missRate >= 50
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {q.missRate}%
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-right text-xs text-slate-500 sm:table-cell">
                  {q.missed}/{q.attempts}
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => (editing === q.id ? setEditing(null) : openEditor(q))}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                      q.mediaUrl
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {q.mediaUrl ? "🖼️ Edit" : "+ Add"}
                  </button>
                </td>
              </tr>
              {editing === q.id && (
                <tr className="bg-slate-50/80">
                  <td colSpan={5} className="px-4 py-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Explanation media (diagram / table image)
                      </p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="text-xs font-semibold text-slate-600">Image URL (https)</label>
                          <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://…/diagram.png"
                            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-600">Caption (optional)</label>
                          <input
                            type="text"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="e.g. Fluid compartments and tonicity at a glance"
                            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-400"
                          />
                        </div>
                      </div>
                      {url.trim().startsWith("https://") && (
                        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={url.trim()} alt="Preview" className="max-h-56 w-full object-contain bg-slate-50" />
                        </div>
                      )}
                      <div className="mt-3 flex items-center justify-end gap-2">
                        {q.mediaUrl && (
                          <button
                            onClick={() => {
                              setUrl("");
                              setCaption("");
                              void save(q.id);
                            }}
                            disabled={saving}
                            className="rounded-xl border border-rose-200 bg-white px-3.5 py-2 text-xs font-bold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50"
                          >
                            Remove media
                          </button>
                        )}
                        <button
                          onClick={() => setEditing(null)}
                          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => save(q.id)}
                          disabled={saving || (url.trim() !== "" && !url.trim().startsWith("https://"))}
                          className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:shadow-md disabled:opacity-50"
                        >
                          {saving ? "Saving…" : "Save media"}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
