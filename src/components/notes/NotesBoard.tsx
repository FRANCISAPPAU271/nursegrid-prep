"use client";

import { useMemo, useState } from "react";
import type { Note } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import Empty from "@/components/ui/Empty";
import { useToast } from "@/components/ui/Toast";

const TAG_COLORS: Record<string, string> = {
  general: "bg-slate-100 text-slate-600",
  pharmacology: "bg-violet-100 text-violet-700",
  "med-surg": "bg-blue-100 text-blue-700",
  pediatrics: "bg-pink-100 text-pink-700",
  "mental-health": "bg-amber-100 text-amber-700",
  maternity: "bg-fuchsia-100 text-fuchsia-700",
  fundamentals: "bg-teal-100 text-teal-700",
  clinical: "bg-emerald-100 text-emerald-700",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "bg-slate-100 text-slate-600";
}

function fmtDate(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(
    new Date(d),
  );
}

export default function NotesBoard({ initialNotes }: { initialNotes: Note[] }) {
  const [noteList, setNoteList] = useState<Note[]>(initialNotes);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Note | null>(null);
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return noteList;
    return noteList.filter((n) => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q));
  }, [noteList, search]);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(note: Note) {
    setEditing(note);
    setModalOpen(true);
  }

  async function handleSubmit(values: { title: string; content: string; tag: string }) {
    setSaving(true);
    const now = new Date().toISOString();
    if (editing) {
      const previous = noteList;
      setNoteList((list) => list.map((n) => (n.id === editing.id ? { ...n, ...values, updatedAt: now } : n)));
      try {
        const res = await fetch(`/api/notes/${editing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Failed to update note");
        const data = await res.json();
        setNoteList((list) => list.map((n) => (n.id === editing.id ? data.note : n)));
        toast.push("Note updated", "success");
        setModalOpen(false);
      } catch (err) {
        setNoteList(previous);
        toast.push(err instanceof Error ? err.message : "Failed to update note", "error");
      } finally {
        setSaving(false);
      }
      return;
    }

    const tempId = `temp-${Date.now()}`;
    const optimistic: Note = { id: tempId, pinned: false, createdAt: now, updatedAt: now, ...values };
    setNoteList((list) => [optimistic, ...list]);
    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to create note");
      const data = await res.json();
      setNoteList((list) => list.map((n) => (n.id === tempId ? data.note : n)));
      toast.push("Note created", "success");
      setModalOpen(false);
    } catch (err) {
      setNoteList((list) => list.filter((n) => n.id !== tempId));
      toast.push(err instanceof Error ? err.message : "Failed to create note", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(note: Note) {
    const previous = noteList;
    setNoteList((list) => list.filter((n) => n.id !== note.id));
    try {
      const res = await fetch(`/api/notes/${note.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete note");
      toast.push("Note deleted", "success");
    } catch (err) {
      setNoteList(previous);
      toast.push(err instanceof Error ? err.message : "Failed to delete note", "error");
    }
  }

  async function togglePin(note: Note) {
    const previous = noteList;
    setNoteList((list) =>
      [...list.map((n) => (n.id === note.id ? { ...n, pinned: !n.pinned } : n))].sort(
        (a, b) => Number(b.pinned) - Number(a.pinned),
      ),
    );
    try {
      const res = await fetch(`/api/notes/${note.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pinned: !note.pinned }),
      });
      if (!res.ok) throw new Error("Failed to update note");
    } catch {
      setNoteList(previous);
      toast.push("Failed to update note", "error");
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search notes…"
          className="w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
        <button
          onClick={openCreate}
          className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
        >
          + New note
        </button>
      </div>

      {filtered.length === 0 ? (
        <Empty
          icon="📝"
          title={noteList.length === 0 ? "No notes yet" : "No matching notes"}
          description={
            noteList.length === 0
              ? "Save clinical pearls, drug cards, or reminders before your next exam."
              : "Try a different search term."
          }
          action={
            noteList.length === 0 && (
              <button onClick={openCreate} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                Create a note
              </button>
            )
          }
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((note) => (
            <div key={note.id} className="animate-fade-in flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-bold text-slate-900">{note.title}</h3>
                <button
                  onClick={() => togglePin(note)}
                  title={note.pinned ? "Unpin" : "Pin"}
                  className={`text-base ${note.pinned ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
                >
                  {note.pinned ? "📌" : "📍"}
                </button>
              </div>
              <p className="mt-2 line-clamp-4 flex-1 whitespace-pre-line text-sm text-slate-600">{note.content || "No content yet."}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${tagColor(note.tag)}`}>{note.tag}</span>
                <span className="text-[11px] text-slate-400">{fmtDate(note.updatedAt)}</span>
              </div>
              <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-3">
                <button onClick={() => openEdit(note)} className="text-xs font-semibold text-slate-500 hover:text-emerald-700">
                  Edit
                </button>
                <button onClick={() => handleDelete(note)} className="text-xs font-semibold text-slate-500 hover:text-rose-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit note" : "New note"}>
        <NoteForm initial={editing} saving={saving} onCancel={() => setModalOpen(false)} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}

function NoteForm({
  initial,
  saving,
  onCancel,
  onSubmit,
}: {
  initial: Note | null;
  saving: boolean;
  onCancel: () => void;
  onSubmit: (values: { title: string; content: string; tag: string }) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [tag, setTag] = useState(initial?.tag ?? "general");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, content, tag });
      }}
      className="space-y-4"
    >
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Tag</label>
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
        >
          {Object.keys(TAG_COLORS).map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
        >
          {saving ? "Saving…" : initial ? "Save changes" : "Create note"}
        </button>
      </div>
    </form>
  );
}
