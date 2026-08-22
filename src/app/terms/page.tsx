import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service — NurseGrid Prep",
  description: "The terms and conditions for using NurseGrid Prep's task manager and NCLEX question bank.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const UPDATED = "January 15, 2026";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-lg text-white">🩺</span>
          <span className="text-lg font-bold tracking-tight text-slate-900">NurseGrid Prep</span>
        </Link>
        <Link href="/" className="text-sm font-semibold text-emerald-700 hover:underline">
          ← Back home
        </Link>
      </header>

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {UPDATED}</p>

        <div className="prose-sm mt-8 space-y-8 text-sm leading-relaxed text-slate-700">
          <Section title="1. Acceptance of terms">
            <p>
              By creating an account or using NurseGrid Prep (&ldquo;the Service&rdquo;), you agree to these Terms of Service and our{" "}
              <Link href="/privacy" className="font-semibold text-emerald-700 hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Service.
            </p>
          </Section>

          <Section title="2. Description of service">
            <p>
              NurseGrid Prep is a study and productivity tool for nursing students, including a task manager, notes, an NCLEX-style question bank
              with rationales, a test-taking strategy library, a body-systems learning library, and nursing care plan tools. It is an independent
              educational product and is not affiliated with, endorsed by, or sponsored by the NCSBN or the official NCLEX examination. We make no
              guarantee of exam results.
            </p>
          </Section>

          <Section title="3. Accounts and account sharing">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>You must provide accurate information when creating an account and are responsible for keeping your login credentials confidential.</li>
              <li>
                Each account is intended for use by a single individual. To protect the integrity of the Service, we limit each account to one
                active session at a time — signing in on a new device will sign you out of other devices. Sharing an account or password with
                others is not permitted.
              </li>
              <li>You are responsible for all activity that occurs under your account.</li>
            </ul>
          </Section>

          <Section title="4. Payments and access plans">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Tasks, notes, and a limited preview of the question bank are available free of charge.</li>
              <li>Full access to the question bank is available through fixed-term plans (e.g., 4 months or 1 year) purchased via Visa card or MTN Mobile Money.</li>
              <li>Plans are not automatically recurring — access expires at the end of the purchased term unless you purchase again.</li>
              <li>Payments are generally non-refundable except where required by law. Contact us if you believe you were charged in error.</li>
              <li>For MTN Mobile Money payments, access is granted after you submit your transaction reference for verification.</li>
            </ul>
          </Section>

          <Section title="5. Referral program">
            <p>
              Our referral program grants bonus access time to both the referrer and the referred user when a new account is created using a valid
              referral link or code. We may modify, suspend, or discontinue the referral program, or reward amounts, at any time, and may withhold
              rewards obtained through fraud or abuse.
            </p>
          </Section>

          <Section title="6. Acceptable use">
            <p>You agree not to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Share your account credentials or resell access to the Service.</li>
              <li>Copy, scrape, redistribute, or resell the question bank, rationales, strategies, or learning content.</li>
              <li>Use the Service for any unlawful purpose or in a way that disrupts or interferes with its operation.</li>
              <li>Attempt to gain unauthorized access to other users' accounts or data.</li>
            </ul>
          </Section>

          <Section title="7. Content and intellectual property">
            <p>
              All questions, rationales, strategies, learning content, and other materials provided through the Service are owned by NurseGrid
              Prep or its licensors and are protected by copyright. You may use this content for your personal study only.
            </p>
          </Section>

          <Section title="8. Disclaimer of warranties">
            <p>
              The Service is provided &ldquo;as is&rdquo; without warranties of any kind. NurseGrid Prep does not guarantee that using the Service
              will result in passing the NCLEX or any other examination. Content is for educational purposes and should not replace guidance from
              your nursing program or licensed instructors.
            </p>
          </Section>

          <Section title="9. Limitation of liability">
            <p>
              To the maximum extent permitted by law, NurseGrid Prep will not be liable for any indirect, incidental, or consequential damages
              arising from your use of the Service. Our total liability for any claim relating to the Service will not exceed the amount you paid
              us in the 12 months before the claim arose.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              We may suspend or terminate your account if you violate these Terms, including account-sharing or abuse of the referral program. You
              may stop using the Service and request account deletion at any time.
            </p>
          </Section>

          <Section title="11. Changes to these terms">
            <p>
              We may update these Terms from time to time. We will post the updated version on this page with a new &ldquo;Last updated&rdquo;
              date. Continued use of the Service after changes means you accept the updated Terms.
            </p>
          </Section>

          <Section title="12. Contact us">
            <p>
              Questions about these Terms? Contact us at{" "}
              <a href="mailto:support@nursegridprep.app" className="font-semibold text-emerald-700 hover:underline">
                support@nursegridprep.app
              </a>
              .
            </p>
          </Section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}
