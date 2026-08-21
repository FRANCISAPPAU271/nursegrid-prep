import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import Testimonials from "@/components/marketing/Testimonials";
import Faq from "@/components/marketing/Faq";
import WaitlistForm from "@/components/marketing/WaitlistForm";

const FEATURES = [
  {
    title: "Clinical & study task manager",
    description:
      "Plan clinicals, assignments, skills labs, and exam prep in one clean board with priorities, due dates, and status tracking.",
    icon: "🗂️",
  },
  {
    title: "10,000 NCLEX-style questions",
    description:
      "Every question ships with a client-need tag, a detailed rationale, and a test-taking strategy tip — not just an answer key.",
    icon: "🧠",
  },
  {
    title: "Proven answering strategies",
    description:
      "A curated strategy library covers prioritization, delegation, therapeutic communication, pharmacology math, and more.",
    icon: "🎯",
  },
  {
    title: "Track your progress",
    description:
      "See accuracy by category, spot weak areas, and bookmark tough questions to revisit before test day.",
    icon: "📈",
  },
];

const PAYMENT_METHODS = [
  { icon: "💳", label: "Visa Card", detail: "Accepted worldwide, outside Ghana" },
  { icon: "📱", label: "MTN Mobile Money", detail: "Ghana · send to 0503061727" },
];

export default async function HomePage() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </div>
        <nav className="flex items-center gap-3">
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700"
          >
            Get started free
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center md:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            Built for student nurses
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Organize your nursing program.
            <br />
            <span className="text-emerald-600">Pass the NCLEX with confidence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            NurseGrid Prep pairs a clinical-rotation task manager with a bank of 10,000 NCLEX-style
            questions — every one with a rationale and a test-taking strategy so you learn the
            reasoning, not just the answer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/signup"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
            >
              Create your free account
            </Link>
            <Link
              href="/login"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              I already have an account
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Free forever for tasks &amp; notes · 40 free preview questions · unlock everything for a one-time $5 payment.
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <span>📲</span> Installable as an app on Android, iPhone, and desktop — no app store needed.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <p className="text-sm font-semibold text-slate-500">Today&apos;s priorities</p>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                3 due
              </span>
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-rose-500" />
                <span className="text-sm text-slate-700">Med-surg clinical prep packet</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                <span className="text-sm text-slate-700">Pharmacology dosage calc worksheet</span>
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-700">50 NCLEX questions — Maternal Newborn</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-emerald-600 p-4 text-white">
              <p className="text-xs uppercase tracking-wide text-emerald-100">Question of the day</p>
              <p className="mt-2 text-sm leading-snug">
                &ldquo;A nurse prioritizes care for four clients. Which client should the nurse assess first?&rdquo;
              </p>
              <p className="mt-3 text-xs text-emerald-100">Strategy: Apply the ABC + Maslow framework</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-base font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-slate-900 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Invite & earn</p>
            <p className="mt-1 text-lg font-bold text-white">
              Give a friend 14 days of free premium — get 14 days back for yourself.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Create an account to get your link
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">Trusted by nursing students everywhere</h2>
          <p className="mt-2 text-slate-600">Real feedback from students using NurseGrid Prep to get through nursing school and pass the NCLEX.</p>
        </div>
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">Simple, student-friendly pricing</h2>
          <p className="mt-2 text-slate-600">
            Tasks and notes are free forever. Pay once — just $5 — to unlock all 10,000 questions, rationales, and strategies for life.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md rounded-3xl border-2 border-emerald-300 bg-white p-8 text-center shadow-xl shadow-emerald-100">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              One-time payment
            </span>
            <p className="mt-4 text-5xl font-extrabold text-slate-950">
              $5<span className="text-lg font-medium text-slate-500"> once</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">No subscription. No recurring charges. Yours forever.</p>
            <ul className="mx-auto mt-6 max-w-xs space-y-2 text-left text-sm text-slate-700">
              <li>✅ All 10,000 NCLEX-style questions</li>
              <li>✅ Full rationales &amp; strategy tips</li>
              <li>✅ Progress tracking by category</li>
              <li>✅ Bookmarking &amp; mixed practice mode</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 block rounded-xl bg-emerald-600 px-4 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700"
            >
              Create your account
            </Link>
            <div className="mt-6 flex flex-col gap-2 border-t border-slate-100 pt-5">
              {PAYMENT_METHODS.map((m) => (
                <div key={m.label} className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <span>{m.icon}</span>
                  <span className="font-semibold text-slate-700">{m.label}</span>
                  <span>· {m.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">Frequently asked questions</h2>
          <p className="mt-2 text-slate-600">Everything you need to know before you get started.</p>
        </div>
        <div className="mt-10">
          <Faq />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-950">Not ready to sign up yet?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            Join our waitlist for weekly exam-day tips, new question drops, and early access to upcoming features.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} NurseGrid Prep. Built for student nurses, by nurses.
      </footer>
    </main>
  );
}
