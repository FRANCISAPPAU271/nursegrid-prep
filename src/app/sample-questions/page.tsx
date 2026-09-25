import { AUTHORED_QUESTIONS } from "@/db/authored-bank";
import SampleQuiz from "@/components/marketing/SampleQuiz";

export const metadata = { title: "Try sample nursing questions" };

export default function SampleQuestionsPage() {
  const questions = AUTHORED_QUESTIONS.slice(0, 5).map((q) => ({
    stem: q.stem,
    choices: q.choices,
    correctChoiceId: q.correctChoiceId,
    rationale: q.rationale.split("\\n\\n")[0],
    categorySlug: q.categorySlug,
  }));
  return <SampleQuiz questions={questions} />;
}
