import { getCurrentUser } from "@/lib/auth";
import FlashcardDeck from "@/components/flashcards/FlashcardDeck";

export const dynamic = "force-dynamic";

export default async function FlashcardsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Flashcards</h1>
        <p className="text-slate-600">
          Your personal deck, built automatically from every question you get wrong. Spaced repetition brings each
          one back right before you&apos;d forget it.
        </p>
      </div>
      <FlashcardDeck />
    </div>
  );
}
