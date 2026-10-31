import Link from "next/link";
import { lookupSignInToken } from "@/lib/signin-link";

export const dynamic = "force-dynamic";

/**
 * Where a sign-in link lands.
 *
 * Reading the token here changes nothing: mail scanners fetch every link in a
 * message, and a GET that signed somebody in would be spent before the student
 * saw it. The button posts to the verify route instead.
 */
export default async function SignInPage({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t } = await searchParams;
  const token = (t ?? "").trim();
  const found = token ? await lookupSignInToken(token) : { state: "invalid" as const };

  const heading =
    found.state === "pending" ? "Sign in to NurseGrid Prep" : found.state === "expired" ? "That link has expired" : "That link is not valid";

  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-b from-emerald-50 via-white to-white px-4 py-10">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </Link>
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200">
          <h1 className="text-2xl font-bold text-slate-950">{heading}</h1>

          {found.state === "pending" ? (
            <>
              <p className="mt-1 text-sm text-slate-600">
                Tap below and you are in. The link works once, then expires.
              </p>
              <form action="/api/auth/signin-link/verify" method="post" className="mt-6">
                <input type="hidden" name="t" value={token} />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Sign in
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="mt-1 text-sm text-slate-600">
                {found.state === "expired"
                  ? "Sign-in links last 30 minutes. Request a fresh one from the login page."
                  : "It may already have been used, or the mail client wrapped it. Request a fresh one."}
              </p>
              <Link
                href="/login"
                className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Back to login
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
