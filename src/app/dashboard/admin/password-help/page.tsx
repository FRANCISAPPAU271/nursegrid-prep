import { redirect } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import PasswordHelpForm from "@/components/admin/PasswordHelpForm";

export const dynamic = "force-dynamic";

export default async function PasswordHelpPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6">
        <Link href="/dashboard/admin/users" className="text-sm font-semibold text-emerald-700 hover:underline">
          ← All users
        </Link>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">Help someone sign in</h1>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          For a student who cannot recover their own password. Use this instead of walking them through the
          forgot-password page on the phone.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <PasswordHelpForm />
      </div>
    </div>
  );
}
