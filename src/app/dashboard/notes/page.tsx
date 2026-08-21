import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import NotesBoard from "@/components/notes/NotesBoard";
import type { Note } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await db
    .select()
    .from(notes)
    .where(eq(notes.userId, user.id))
    .orderBy(desc(notes.pinned), desc(notes.updatedAt));

  const initialNotes: Note[] = rows.map((n) => ({
    id: n.id,
    title: n.title,
    content: n.content,
    tag: n.tag,
    pinned: n.pinned,
    createdAt: n.createdAt.toISOString(),
    updatedAt: n.updatedAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Notes</h1>
        <p className="text-slate-600">Capture clinical pearls, drug facts, and exam reminders.</p>
      </div>
      <NotesBoard initialNotes={initialNotes} />
    </div>
  );
}
