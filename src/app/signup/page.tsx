import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import SignupForm from "@/components/auth/SignupForm";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");
  const { ref } = await searchParams;

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-emerald-50 via-white to-white px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200">
          <h1 className="text-2xl font-bold text-slate-950">Create your account</h1>
          <p className="mt-1 text-sm text-slate-600">
            Free forever for tasks &amp; notes. Unlock the full question bank anytime for a one-time $5 payment.
          </p>
          {ref && (
            <div className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
              🎁 You were invited with code {ref.toUpperCase()} — sign up to get 14 days of free premium!
            </div>
          )}
          <div className="mt-6">
            <SignupForm defaultReferralCode={ref ?? ""} />
          </div>
        </div>
      </div>
    </main>
  );
}
