import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import Testimonials from "@/components/marketing/Testimonials";
import Faq from "@/components/marketing/Faq";
import WaitlistForm from "@/components/marketing/WaitlistForm";
import SiteFooter from "@/components/marketing/SiteFooter";
import StructuredData from "@/components/marketing/StructuredData";
import { buildWhatsAppLink } from "@/lib/contact";

const TICKER_ITEMS = [
  "🇬🇭 NMC GHANA LICENSING EXAM COVERED",
  "🧠 5,700+ UNIQUE QUESTIONS WITH REAL RATIONALES",
  "💳 PAY WITH MTN MOMO OR VISA",
  "📲 WORKS OFFLINE — NO APP STORE",
  "💚 FROM $5 · NEVER AUTO-BILLED",
  "🎯 STRATEGY LIBRARY: PRIORITISATION · DELEGATION · PHARMA MATH",
];

const BENTO = [
  {
    icon: "🎯",
    title: "Strategy library",
    description:
      "Prioritisation, delegation, therapeutic communication, pharmacology math — frameworks you can apply in under 20 seconds per question.",
    accent: "",
  },
  {
    icon: "📈",
    title: "Weakness radar",
    description:
      "Accuracy by category shows exactly where you're losing marks. Bookmark killers, re-drill them, watch the graph turn green.",
    accent: "",
  },
  {
    icon: "🗂️",
    title: "Clinical task board",
    description:
      "Rotations, assignments, skills labs, index and licensing deadlines — one board with priorities and due dates. Free forever.",
    accent: "bg-lime-100",
  },
  {
    icon: "📲",
    title: "Installs like an app, works offline",
    description:
      "No app store, no 200MB download. Add it to your home screen on Android, iPhone, or desktop and keep practising when data is low.",
    accent: "bg-emerald-100",
  },
];

export default async function HomePage() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  return (
    <main className="min-h-screen bg-[#f6f8f5]">
      <StructuredData />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#f6f8f5]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5" aria-label="NurseGrid Prep home">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-lg text-white shadow-md shadow-emerald-500/30">
              🩺
            </span>
            <span className="text-base font-extrabold tracking-tight text-slate-950">NurseGrid Prep</span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/#why"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950 md:inline-block"
            >
              Why us
            </Link>
            <Link
              href="/#pricing"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950 md:inline-block"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-700 sm:px-5"
            >
              Start free →
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="main-content"
        className="relative overflow-hidden bg-[#04120d] px-4 pb-20 pt-14 text-emerald-50 sm:px-6 md:pt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_85%_-10%,rgba(16,185,129,0.28),transparent_60%),radial-gradient(700px_420px_at_-10%_110%,rgba(163,230,53,0.14),transparent_55%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-lime-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-400" />
              Built for Ghana&apos;s student nurses &amp; midwives 🇬🇭
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your nursing PIN starts with{" "}
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                one exam.
              </span>
              <br />
              Pass it first time.
            </h1>
            <p className="mt-6 max-w-xl text-base text-emerald-100/60 sm:text-lg">
              NurseGrid Prep is built for nurses and midwives sitting the{" "}
              <strong className="font-bold text-emerald-50">NMC Ghana licensing exam</strong> — 5,700+ unique
              exam-style questions where every rationale teaches you the{" "}
              <strong className="font-bold text-emerald-50">clinical reasoning the Council actually tests</strong>,
              plus a task manager that keeps clinicals and revision on track.{" "}
              <strong className="font-bold text-emerald-50">From $5. Pay with MoMo.</strong>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/signup"
                className="rounded-2xl bg-lime-400 px-7 py-4 text-center text-base font-extrabold text-slate-950 shadow-lg shadow-lime-400/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-400/50"
              >
                Try 40 questions free
              </Link>
              <Link
                href="/login"
                className="rounded-2xl border-2 border-emerald-50/25 px-7 py-4 text-center text-base font-bold text-emerald-50 transition hover:border-lime-400 hover:text-lime-300"
              >
                I have an account
              </Link>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-emerald-100/50 sm:text-sm">
              <b className="text-lime-300">No card needed to start</b> · Tasks &amp; notes free forever · Full
              access from <b className="text-lime-300">$5</b> — one payment, never auto-billed
            </p>
          </div>

          {/* Question mock card */}
          <div className="relative rounded-3xl border border-lime-400/20 bg-gradient-to-br from-[#0d281e] to-[#0a1f17] p-5 shadow-2xl shadow-black/40 sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-emerald-50 sm:text-sm">Question 7 of 50 · Prioritisation</span>
              <span className="rounded-full bg-lime-400/15 px-3 py-1 text-[10px] font-extrabold text-lime-300">
                NMC LICENSING STYLE
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm leading-relaxed text-emerald-100/90">
                A nurse is prioritising care for four patients. Which patient should be assessed <b>first</b>?
              </p>
              <div className="mt-3 space-y-2 text-xs text-emerald-100/60 sm:text-[13px]">
                <p className="rounded-lg px-3 py-2.5">A · Post-op day 2, requesting analgesia</p>
                <p className="rounded-lg border border-emerald-400/40 bg-emerald-400/15 px-3 py-2.5 font-bold text-emerald-200">
                  B · Asthmatic with new audible wheeze ✓
                </p>
                <p className="rounded-lg px-3 py-2.5">C · Awaiting discharge teaching</p>
                <p className="rounded-lg px-3 py-2.5">D · Scheduled IV antibiotic due in 30 min</p>
              </div>
            </div>
            <div className="mt-4 rounded-r-xl border-l-[3px] border-lime-400 bg-lime-400/10 p-3.5 text-xs leading-relaxed text-emerald-100/80">
              <b className="text-lime-300">Why B — and how to spot it in 20 seconds:</b> Airway trumps everything
              (ABC). A <i>new</i> wheeze signals deterioration — licensing scenarios reward recognising the changing
              patient, not the loudest complaint. Strategy: eliminate &ldquo;stable + expected&rdquo; options first.
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden whitespace-nowrap bg-lime-400 py-3 text-xs font-extrabold tracking-wide text-slate-950 sm:text-sm" aria-hidden>
        <div className="inline-block animate-[ng-scroll_26s_linear_infinite]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} className="mx-7">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
          Why NurseGrid Prep
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          You&apos;ve seen the other options.
          <br />
          Here&apos;s why nurses switch to us.
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          The licensing exam isn&apos;t a memory test — it&apos;s a clinical judgement test. Most prep tools get that
          wrong.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-900/5 bg-white p-7 opacity-80 transition hover:-translate-y-1 hover:shadow-xl">
            <span className="text-3xl">📄</span>
            <h3 className="mt-4 text-lg font-extrabold text-slate-950">Recycled PDF dumps</h3>
            <p className="mt-2 text-sm text-slate-600">
              Outdated &ldquo;past questions&rdquo; packs shared on WhatsApp with answer keys and zero explanation. You
              memorise letters, then panic when the Council words it differently.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-900/5 bg-white p-7 opacity-80 transition hover:-translate-y-1 hover:shadow-xl">
            <span className="text-3xl">💸</span>
            <h3 className="mt-4 text-lg font-extrabold text-slate-950">Foreign apps at foreign prices</h3>
            <p className="mt-2 text-sm text-slate-600">
              $30–$100 subscriptions built around NCLEX and other foreign exams — auto-renewing, card-only, and blind
              to Ghana&apos;s NMC syllabus. Built for their market, not yours.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-lime-400/40 bg-[#04120d] p-7 text-emerald-50 transition hover:-translate-y-1 hover:shadow-2xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_220px_at_100%_0%,rgba(163,230,53,0.16),transparent_60%)]"
            />
            <span className="relative inline-block rounded-full bg-lime-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-950">
              The NurseGrid way
            </span>
            <span className="relative mt-4 block text-3xl">🧠</span>
            <h3 className="relative mt-3 text-lg font-extrabold">Reasoning-first, priced for you</h3>
            <p className="relative mt-2 text-sm text-emerald-100/60">
              Every one of our 5,700+ unique questions teaches the <em>why</em> and the 20-second strategy to crack the next
              one like it. Built around the Ghana NMC syllabus, from $5, paid once with MoMo — never auto-billed.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES BENTO */}
      <section id="features" className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            What&apos;s inside
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            One app for the whole journey —
            <br />
            from clinicals to licensing pass.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#04120d] to-[#123527] p-8 text-emerald-50 md:col-span-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime-400/15 text-2xl">🧠</span>
              <p className="mt-5 text-4xl font-extrabold tracking-tight text-lime-400 sm:text-5xl">5,700+</p>
              <h3 className="mt-2 text-xl font-extrabold">Licensing-style questions that teach reasoning</h3>
              <p className="mt-2 max-w-2xl text-sm text-emerald-100/60">
                Every question carries a client-need tag, a full rationale, and a test-taking strategy tip. You
                don&apos;t memorise answers — you learn the pattern examiners repeat, so an unseen question feels
                familiar.
              </p>
            </div>
            {BENTO.map((f, i) => (
              <div
                key={f.title}
                className={`rounded-3xl border border-slate-900/5 p-7 transition hover:-translate-y-1 hover:shadow-xl md:col-span-2 ${
                  f.accent || "bg-[#f6f8f5]"
                } ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-extrabold text-slate-950">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="stories" className="bg-[#04120d] px-4 py-16 text-emerald-50 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full bg-lime-400/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-lime-300">
            Real stories
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            From night shift on the ward
            <br />
            to your name on the register.
          </h2>
          <p className="mt-3 max-w-2xl text-emerald-100/60">
            Nurses and midwives across Ghana using NurseGrid Prep to pass the licensing exam and earn their PIN.
          </p>
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* INVITE */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-slate-900 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-lime-400">Invite &amp; earn</p>
            <p className="mt-1 text-lg font-extrabold text-white">
              Give a friend 14 days of free premium — get 14 days back for yourself.
            </p>
          </div>
          <Link
            href="/signup"
            className="shrink-0 rounded-xl bg-lime-400 px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-lime-300"
          >
            Create an account to get your link
          </Link>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Less than the cost of one taxi
            <br />
            to the exam centre.
          </h2>
          <p className="mt-3 text-slate-600">
            Tasks &amp; notes free forever. One payment unlocks everything —{" "}
            <b className="text-slate-900">we never auto-bill you.</b>
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-3xl border border-slate-900/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-base font-extrabold text-slate-950">Sprint · 4 Months</p>
            <p className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
              $5<span className="text-base font-semibold text-slate-500"> / 4 months</span>
            </p>
            <p className="mt-2 text-sm text-slate-500">≈ GH₵ 80 · perfect if your exam date is close</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
              <li>✓ All 5,700+ unique licensing-style questions</li>
              <li>✓ Full rationales &amp; strategy tips</li>
              <li>✓ Weakness radar by category</li>
              <li>✓ Bookmarks &amp; mixed practice mode</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 block rounded-2xl bg-slate-950 px-4 py-3.5 text-center text-base font-extrabold text-white transition hover:bg-emerald-700"
            >
              Start Sprint
            </Link>
          </div>
          <div className="flex flex-col rounded-3xl border border-slate-900/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-base font-extrabold text-slate-950">Steady · 8 Months</p>
            <p className="mt-3 text-5xl font-extrabold tracking-tight text-slate-950">
              $9<span className="text-base font-semibold text-slate-500"> / 8 months</span>
            </p>
            <p className="mt-2 text-sm text-slate-500">≈ GH₵ 140 · a full academic year of prep</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-slate-600">
              <li>✓ Everything in Sprint, for 8 months</li>
              <li>✓ Ideal from mid-programme to exam day</li>
              <li>✓ New question drops included</li>
              <li>✓ Bookmarks &amp; mixed practice mode</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 block rounded-2xl bg-slate-950 px-4 py-3.5 text-center text-base font-extrabold text-white transition hover:bg-emerald-700"
            >
              Start Steady
            </Link>
          </div>
          <div className="relative flex flex-col rounded-3xl border-2 border-lime-400 bg-[#04120d] p-8 text-emerald-50 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-lime-400 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
              Best value · lowest monthly cost
            </span>
            <p className="text-base font-extrabold">Journey · 1 Year</p>
            <p className="mt-3 text-5xl font-extrabold tracking-tight">
              $13<span className="text-base font-semibold text-emerald-100/50"> / year</span>
            </p>
            <p className="mt-2 text-sm text-emerald-100/50">≈ GH₵ 200 · about $1/month for the full journey</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-emerald-100/80">
              <li>✓ Everything in Sprint, for 12 months</li>
              <li>✓ Covers resits &amp; final-year revision</li>
              <li>✓ New question drops included</li>
              <li>✓ Priority WhatsApp support</li>
            </ul>
            <Link
              href="/signup"
              className="mt-8 block rounded-2xl bg-lime-400 px-4 py-3.5 text-center text-base font-extrabold text-slate-950 transition hover:bg-lime-300"
            >
              Start Journey
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 sm:w-auto">
            📱 MTN MoMo · send to 0598872146
          </span>
          <span className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 sm:w-auto">
            💳 Visa · accepted worldwide
          </span>
          <span className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-2.5 text-xs font-bold text-slate-600 sm:w-auto">
            🔒 One-time payment · zero auto-renewal
          </span>
        </div>
      </section>

      {/* FAQ */}
      <section id="overview" className="bg-white px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Questions? Answered.
            </h2>
          </div>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      {/* FINAL CTA + WAITLIST */}
      <section className="relative overflow-hidden bg-[#04120d] px-4 py-20 text-center text-emerald-50 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_380px_at_50%_120%,rgba(163,230,53,0.18),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/35 bg-lime-400/10 px-5 py-2 text-xs font-bold text-lime-300 sm:text-sm">
            🎁 Invite a friend → you both get 14 days of premium free
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your PIN is waiting.
            <br />
            Your licensing pass starts today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100/60">
            40 free questions. No card. No auto-billing. Just the smartest way to prep — from $5.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-2xl bg-lime-400 px-7 py-4 text-base font-extrabold text-slate-950 shadow-lg shadow-lime-400/30 transition hover:-translate-y-0.5"
            >
              Create your free account
            </Link>
            <a
              href={buildWhatsAppLink("Hi NurseGrid Prep! I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-2 border-emerald-50/25 px-7 py-4 text-base font-bold text-emerald-50 transition hover:border-lime-400 hover:text-lime-300"
            >
              Chat on WhatsApp
            </a>
          </div>
          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sm font-extrabold text-emerald-50">Not ready to sign up yet?</p>
            <p className="mt-1 text-xs text-emerald-100/60">
              Join the waitlist for weekly exam-day tips, new question drops, and early access to new features.
            </p>
            <div className="mt-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
