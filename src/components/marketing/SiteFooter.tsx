import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-sm text-white">🩺</span>
            <span className="text-sm font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <Link href="/#overview" className="hover:text-emerald-700">
              Overview &amp; FAQ
            </Link>
            <Link href="/#pricing" className="hover:text-emerald-700">
              Pricing
            </Link>
            <Link href="/signup" className="hover:text-emerald-700">
              Sign up
            </Link>
            <Link href="/login" className="hover:text-emerald-700">
              Log in
            </Link>
            <Link href="/privacy" className="hover:text-emerald-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-emerald-700">
              Terms of Service
            </Link>
            <a href="mailto:support@nursegridprep.app" className="hover:text-emerald-700">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {YEAR} NurseGrid Prep. Built for student nurses, by nurses.</p>
          <p className="text-center sm:text-right">
            NurseGrid Prep is an independent study tool and is not affiliated with, endorsed by, or sponsored by the NCSBN or the official NCLEX
            examination.
          </p>
        </div>
      </div>
    </footer>
  );
}
