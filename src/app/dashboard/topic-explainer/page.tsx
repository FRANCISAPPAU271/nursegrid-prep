import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import TopicExplainer from "@/components/study/TopicExplainer";

export default async function TopicExplainerPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return <div><div className="mb-6"><h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Topic explainer</h1><p className="mt-1 text-slate-600">Build a focused study guide from a reviewed nursing topic.</p></div><TopicExplainer /></div>;
}
