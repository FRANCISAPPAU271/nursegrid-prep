import { getCurrentUser } from "@/lib/auth";
import QuestionQuiz from "@/components/questions/QuestionQuiz";

export const dynamic = "force-dynamic";

export default async function PracticePage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <QuestionQuiz
      title="Mixed random practice"
      subtitle="A shuffled mix of questions from every category — great for a quick warm-up."
      queryString="random=true"
      isPremiumUser={user.isPremium}
    />
  );
}
