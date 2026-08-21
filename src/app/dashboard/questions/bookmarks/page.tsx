import { getCurrentUser } from "@/lib/auth";
import QuestionQuiz from "@/components/questions/QuestionQuiz";

export const dynamic = "force-dynamic";

export default async function BookmarksPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <QuestionQuiz
      title="Bookmarked questions"
      subtitle="Revisit the questions you've flagged for extra review."
      queryString="bookmarked=true"
      isPremiumUser={user.isPremium}
    />
  );
}
