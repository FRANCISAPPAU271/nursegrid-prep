import { getCurrentUser } from "@/lib/auth";
import StudyPlanBuilder from "@/components/study-plan/StudyPlanBuilder";

export const dynamic = "force-dynamic";

export default async function StudyPlanPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Study Plan</h1>
        <p className="text-slate-600">
          Tell us your exam date. We build a week-by-week plan around your weakest categories — and can load it
          straight into your task manager.
        </p>
      </div>
      <StudyPlanBuilder />
    </div>
  );
}
