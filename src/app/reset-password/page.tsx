import Link from "next/link";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export const dynamic = "force-dynamic";

/**
 * Where the reset link lands.
 *
 * Renders the `ResetPasswordForm` that was already written and, until now, was
 * not rendered by any page — the component and its endpoint both existed only
 * as dead code, so the emailed reset had nowhere to arrive.
 *
 * The token is read here and posted with the form; nothing is consumed on this
 * page load, so a mail scanner prefetching the link cannot burn it.
 */
export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string }>;
}) {
  const { t } = await searchParams;
  const token = (t ?? "").trim();

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-emerald-50 via-white to-white px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200">
          <h1 className="text-2xl font-bold text-slate-950">Choose a new password</h1>
          <p className="mt-1 text-sm text-slate-600">
            Pick something you have not used before. Resetting will sign you out of every device.
          </p>
          <div className="mt-6">
            {token ? (
              <ResetPasswordForm token={token} />
            ) : (
              <div className="space-y-4 text-center">
                <div className="rounded-lg bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                  This page needs the link from your reset email. Open the most recent one, or request another.
                </div>
                <Link
                  href="/forgot-password"
                  className="inline-block rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Request a new link
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
