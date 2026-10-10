import type { ActivityStatus, CourseStatus } from "@/lib/courses-types";

const STYLES: Record<ActivityStatus | CourseStatus | "overdue", { label: string; className: string }> = {
  "not-enrolled": { label: "Not enrolled", className: "bg-slate-100 text-slate-600" },
  "not-started": { label: "Not started", className: "bg-slate-100 text-slate-700" },
  "in-progress": { label: "In progress", className: "bg-amber-100 text-amber-800" },
  completed: { label: "Completed", className: "bg-emerald-100 text-emerald-800" },
  failed: { label: "Not passed", className: "bg-rose-100 text-rose-800" },
  locked: { label: "Locked", className: "bg-slate-100 text-slate-500" },
  overdue: { label: "Overdue", className: "bg-rose-100 text-rose-800" },
};

export default function StatusBadge({ status, className = "" }: { status: keyof typeof STYLES; className?: string }) {
  const s = STYLES[status];
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold ${s.className} ${className}`}>{s.label}</span>;
}
