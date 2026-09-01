import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/marketing/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — NurseGrid Prep",
  description: "How NurseGrid Prep collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const UPDATED = "January 15, 2026";

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: {UPDATED}</p>

        <div className="prose-sm mt-8 space-y-8 text-sm leading-relaxed text-slate-700">
          <Section title="1. Overview">
            <p>
              NurseGrid Prep (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides a task manager and NMC exam-style question bank
              for student nurses. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By creating
              an account or using NurseGrid Prep, you agree to the practices described here.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <ul className="list-disc space-y-1.5 pl-5">
              <li><strong>Account information:</strong> name, email address, hashed password, nursing school, and cohort (if provided).</li>
              <li><strong>Study activity:</strong> tasks, notes, care plans, question attempts, bookmarks, and progress statistics you create while using the app.</li>
              <li><strong>Payment information:</strong> when you purchase full access, payment is processed by Stripe (for card payments) or recorded manually for MTN Mobile Money payments. We do not store full card numbers on our servers.</li>
              <li><strong>Device information:</strong> browser type, IP address, device identifiers, and push notification tokens (only if you enable notifications in our mobile apps).</li>
              <li><strong>Usage data:</strong> pages visited, features used, and general analytics to help us improve the product.</li>
            </ul>
          </Section>

          <Section title="3. How we use your information">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>To provide, maintain, and improve the task manager, question bank, and other core features.</li>
              <li>To process payments and manage your subscription or access period.</li>
              <li>To send transactional emails (e.g., password resets) and, if you opt in, study reminders or product updates.</li>
              <li>To detect and prevent fraud, abuse, or account sharing that violates our Terms of Service.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>
          </Section>

          <Section title="4. Sharing your information">
            <p>
              We do not sell your personal information. We share limited data with trusted service providers who help us operate NurseGrid Prep,
              including our hosting provider, database provider, and payment processors (Stripe for card payments). These providers are only
              permitted to use your data to perform services on our behalf.
            </p>
          </Section>

          <Section title="5. Cookies and similar technologies">
            <p>
              We use essential cookies to keep you signed in and to remember your session securely. We do not use third-party advertising cookies.
              If we add analytics tools in the future, we will update this policy accordingly.
            </p>
          </Section>

          <Section title="6. Data retention">
            <p>
              We retain your account and study data for as long as your account is active. If you delete your account, we will delete or
              anonymize your personal information within a reasonable period, except where we are required to retain it for legal or accounting
              purposes.
            </p>
          </Section>

          <Section title="7. Your rights and choices">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>You can update your profile information at any time from Settings.</li>
              <li>You can request a copy of your data or request deletion of your account by contacting us at the email below.</li>
              <li>You can unsubscribe from non-essential emails at any time using the link in those emails.</li>
            </ul>
          </Section>

          <Section title="8. Children's privacy">
            <p>
              NurseGrid Prep is intended for nursing students and is not directed at children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </Section>

          <Section title="9. Security">
            <p>
              We use industry-standard measures — including password hashing, encrypted connections (HTTPS/TLS), and access controls — to protect
              your information. No method of transmission or storage is 100% secure, but we work to protect your data to a high standard.
            </p>
          </Section>

          <Section title="10. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version on this page with a new &ldquo;Last
              updated&rdquo; date. Continued use of NurseGrid Prep after changes means you accept the updated policy.
            </p>
          </Section>

          <Section title="11. Contact us">
            <p>
              If you have questions about this Privacy Policy or your personal information, contact us at{" "}
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
