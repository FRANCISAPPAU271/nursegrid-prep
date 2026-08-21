"use client";

import { useMemo, useState } from "react";
import type { Task, TaskCategory, TaskPriority, TaskStatus } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import Empty from "@/components/ui/Empty";
import { useToast } from "@/components/ui/Toast";
import TaskForm, { type TaskFormValues } from "@/components/tasks/TaskForm";

const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "To do",
  in_progress: "In progress",
  done: "Done",
};

const STATUS_ORDER: TaskStatus[] = ["todo", "in_progress", "done"];

const CATEGORY_LABEL: Record<TaskCategory, string> = {
  clinical: "Clinical",
  assignment: "Assignment",
  study: "Study",
  exam: "Exam",
  skills_lab: "Skills lab",
  personal: "Personal",
};

function fmtDate(d: string | null) {
  if (!d) return "No due date";
  const date = new Date(d);
  const today = new Date();
  const diffDays = Math.round((date.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0)) / 86400000);
  const formatted = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(d));
  if (diffDays === 0) return `Today · ${formatted}`;
  if (diffDays === 1) return `Tomorrow · ${formatted}`;
  if (diffDays < 0) return `${formatted} (overdue)`;
  return formatted;
}

function isOverdue(t: Task) {
  return t.status !== "done" && t.dueDate !== null && new Date(t.dueDate).getTime() < Date.now();
}

export default function TaskBoard({ initialTasks }: { initialTasks: Task[] }) {
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Task | null>(null);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<TaskCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const filtered = useMemo(() => {
    return taskList.filter((t) => {
      if (statusFilter !== "all" && t.status !== statusFilter) return false;
      if (categoryFilter !== "all" && t.category !== categoryFilter) return false;
      if (search.trim() && !t.title.toLowerCase().includes(search.trim().toLowerCase())) return false;
      return true;
    });
  }, [taskList, statusFilter, categoryFilter, search]);

  const grouped = useMemo(() => {
    const map: Record<TaskStatus, Task[]> = { todo: [], in_progress: [], done: [] };
    for (const t of filtered) map[t.status].push(t);
    return map;
  }, [filtered]);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(task: Task) {
    setEditing(task);
    setModalOpen(true);
  }

  async function handleSubmit(values: TaskFormValues) {
    setSaving(true);
    const tempId = `temp-${Date.now()}`;
    const now = new Date().toISOString();

    if (editing) {
      const previous = taskList;
      setTaskList((list) =>
        list.map((t) => (t.id === editing.id ? { ...t, ...values, updatedAt: now } : t)),
      );
      try {
        const res = await fetch(`/api/tasks/${editing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error((await res.json()).error ?? "Failed to update task");
        const data = await res.json();
        setTaskList((list) => list.map((t) => (t.id === editing.id ? data.task : t)));
        toast.push("Task updated", "success");
        setModalOpen(false);
      } catch (err) {
        setTaskList(previous);
        toast.push(err instanceof Error ? err.message : "Failed to update task", "error");
      } finally {
        setSaving(false);
      }
      return;
    }

    const optimisticTask: Task = {
      id: tempId,
      title: values.title,
      description: values.description || null,
      category: values.category,
      status: values.status,
      priority: values.priority,
      dueDate: values.dueDate || null,
      createdAt: now,
      updatedAt: now,
    };
    setTaskList((list) => [optimisticTask, ...list]);
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed to create task");
      const data = await res.json();
      setTaskList((list) => list.map((t) => (t.id === tempId ? data.task : t)));
      toast.push("Task created", "success");
      setModalOpen(false);
    } catch (err) {
      setTaskList((list) => list.filter((t) => t.id !== tempId));
      toast.push(err instanceof Error ? err.message : "Failed to create task", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(task: Task) {
    const previous = taskList;
    setTaskList((list) => list.filter((t) => t.id !== task.id));
    try {
      const res = await fetch(`/api/tasks/${task.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete task");
      toast.push("Task deleted", "success");
    } catch (err) {
      setTaskList(previous);
      toast.push(err instanceof Error ? err.message : "Failed to delete task", "error");
    }
  }

  async function handleStatusChange(task: Task, status: TaskStatus) {
    const previous = taskList;
    setTaskList((list) => list.map((t) => (t.id === task.id ? { ...t, status } : t)));
    try {
      const res = await fetch(`/api/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      const data = await res.json();
      setTaskList((list) => list.map((t) => (t.id === task.id ? data.task : t)));
    } catch (err) {
      setTaskList(previous);
      toast.push(err instanceof Error ? err.message : "Failed to update status", "error");
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks…"
            className="w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 sm:w-56"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as TaskStatus | "all")}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
          >
            <option value="all">All statuses</option>
            {STATUS_ORDER.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]}
              </option>
            ))}
          </select>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as TaskCategory | "all")}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
          >
            <option value="all">All categories</option>
            {Object.entries(CATEGORY_LABEL).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={openCreate}
          className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
        >
          + New task
        </button>
      </div>

      {filtered.length === 0 ? (
        <Empty
          icon="🗂️"
          title={taskList.length === 0 ? "No tasks yet" : "No tasks match your filters"}
          description={
            taskList.length === 0
              ? "Add your first clinical, assignment, or study task to get organized."
              : "Try adjusting your search or filters."
          }
          action={
            taskList.length === 0 && (
              <button
                onClick={openCreate}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Create a task
              </button>
            )
          }
        />
      ) : (
        <div className="grid gap-4 lg:grid-cols-3">
          {STATUS_ORDER.map((status) => (
            <div key={status} className="rounded-2xl bg-slate-100/70 p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <h3 className="text-sm font-bold text-slate-700">{STATUS_LABEL[status]}</h3>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-500">
                  {grouped[status].length}
                </span>
              </div>
              <div className="space-y-3">
                {grouped[status].map((task) => (
                  <div key={task.id} className="animate-fade-in rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-slate-900">{task.title}</h4>
                      <PriorityDot priority={task.priority} />
                    </div>
                    {task.description && <p className="mt-1.5 line-clamp-2 text-xs text-slate-500">{task.description}</p>}
                    <div className="mt-3 flex items-center justify-between">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold capitalize text-slate-600">
                        {CATEGORY_LABEL[task.category]}
                      </span>
                      <span className={`text-[11px] font-medium ${isOverdue(task) ? "text-rose-600" : "text-slate-500"}`}>
                        {fmtDate(task.dueDate)}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                      <select
                        value={task.status}
                        onChange={(e) => handleStatusChange(task, e.target.value as TaskStatus)}
                        className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-600 outline-none"
                      >
                        {STATUS_ORDER.map((s) => (
                          <option key={s} value={s}>
                            {STATUS_LABEL[s]}
                          </option>
                        ))}
                      </select>
                      <div className="flex items-center gap-3">
                        <button onClick={() => openEdit(task)} className="text-xs font-semibold text-slate-500 hover:text-emerald-700">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(task)} className="text-xs font-semibold text-slate-500 hover:text-rose-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {grouped[status].length === 0 && (
                  <p className="px-2 py-6 text-center text-xs text-slate-400">Nothing here</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit task" : "New task"}>
        <TaskForm initial={editing} saving={saving} onCancel={() => setModalOpen(false)} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}

function PriorityDot({ priority }: { priority: TaskPriority }) {
  const colors: Record<TaskPriority, string> = {
    high: "bg-rose-500",
    medium: "bg-amber-500",
    low: "bg-slate-300",
  };
  return <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${colors[priority]}`} title={`${priority} priority`} />;
}
