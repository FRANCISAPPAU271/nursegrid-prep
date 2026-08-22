import { getCurrentUser } from "@/lib/auth";
import ExamRunner from "@/components/exams/ExamRunner";

export const dynamic = "force-dynamic";

export default async function ExamRunnerPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { id } = await params;

  return <ExamRunner examId={id} />;
}
