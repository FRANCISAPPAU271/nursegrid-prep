"use client";

import { useState } from "react";
import type { Task, TaskCategory, TaskPriority, TaskStatus } from "@/lib/types";

export type TaskFormValues = {
  title: string;
  description: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
};

export default function TaskForm({
  initial,
  saving,
  onCancel,
  onSubmit,
}: {
  initial: Task | null;
  saving: boolean;
  onCancel: () => void;
  onSubmit: (values: TaskFormValues) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [category, setCategory] = useState<TaskCategory>(initial?.category ?? "study");
  const [status, setStatus] = useState<TaskStatus>(initial?.status ?? "todo");
  const [priority, setPriority] = useState<TaskPriority>(initial?.priority ?? "medium");
  const [dueDate, setDueDate] = useState(initial?.dueDate ? initial.dueDate.slice(0, 10) : "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          description,
          category,
          status,
          priority,
          dueDate: dueDate ? new Date(`${dueDate}T12:00:00`).toISOString() : null,
        });
      }}
      className="space-y-4"
    >
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Complete med-surg care plan"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Add helpful details…"
          className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as TaskCategory)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
          >
            <option value="clinical">Clinical</option>
            <option value="assignment">Assignment</option>
            <option value="study">Study</option>
            <option value="exam">Exam</option>
            <option value="skills_lab">Skills lab</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
          >
            <option value="todo">To do</option>
            <option value="in_progress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Due date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
          />
        </div>
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
          {saving ? "Saving…" : initial ? "Save changes" : "Create task"}
        </button>
      </div>
    </form>
  );
}
