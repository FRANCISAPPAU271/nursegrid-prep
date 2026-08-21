import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import TaskBoard from "@/components/tasks/TaskBoard";
import type { Task } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function TasksPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await db.select().from(tasks).where(eq(tasks.userId, user.id)).orderBy(desc(tasks.createdAt));

  const initialTasks: Task[] = rows.map((t) => ({
    id: t.id,
    title: t.title,
    description: t.description,
    category: t.category,
    status: t.status,
    priority: t.priority,
    dueDate: t.dueDate ? t.dueDate.toISOString() : null,
    createdAt: t.createdAt.toISOString(),
    updatedAt: t.updatedAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Tasks</h1>
        <p className="text-slate-600">Plan clinicals, assignments, and study sessions in one place.</p>
      </div>
      <TaskBoard initialTasks={initialTasks} />
    </div>
  );
}
