import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import AdminQuestionUpload from "@/components/admin/AdminQuestionUpload";

export const dynamic = "force-dynamic";

export default async function AdminQuestionsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Upload Questions</h1>
        <p className="text-slate-600">
          Add your own questions to the bank. Manually uploaded questions are kept safe during automatic
          question-bank updates — they are never deleted by a reseed.
        </p>
      </div>
      <AdminQuestionUpload />
    </div>
  );
}
