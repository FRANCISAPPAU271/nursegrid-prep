import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-emerald-50 via-white to-white px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200">
          <h1 className="text-2xl font-bold text-slate-950">Welcome back</h1>
          <p className="mt-1 text-sm text-slate-600">Log in to keep up with your study plan.</p>
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
