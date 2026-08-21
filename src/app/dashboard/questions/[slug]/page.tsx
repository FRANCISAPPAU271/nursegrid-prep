import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questionCategories } from "@/db/schema";
import { eq } from "drizzle-orm";
import QuestionQuiz from "@/components/questions/QuestionQuiz";

export const dynamic = "force-dynamic";

export default async function CategoryQuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { slug } = await params;

  const [category] = await db.select().from(questionCategories).where(eq(questionCategories.slug, slug)).limit(1);
  if (!category) notFound();

  return (
    <QuestionQuiz
      title={category.name}
      subtitle={`${category.clientNeed} · ${category.description}`}
      queryString={`category=${encodeURIComponent(slug)}`}
      isPremiumUser={user.isPremium}
    />
  );
}
