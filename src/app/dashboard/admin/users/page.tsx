import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import AdminUsersTable, { type AdminUser } from "@/components/admin/AdminUsersTable";

export const dynamic = "force-dynamic";

type Row = {
  id: string;
  name: string;
  email: string;
  school: string | null;
  cohort: string | null;
  isPremium: boolean;
  isAdmin: boolean;
  premiumSince: string | null;
  trialEndsAt: string | null;
  referralCode: string | null;
  createdAt: string;
  attempted: number;
  correct: number;
};

/**
 * Every registered account, with the particulars the student entered at
 * signup and everything the app knows about their study activity.
 *
 * The numbers come from one grouped subquery rather than a count per row, so
 * the page stays a single round trip however many accounts exist.
 */
export default async function AdminUsersPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");

  const result = await db.execute(sql`
    SELECT u."id", u."name", u."email", u."school", u."cohort",
           u."is_premium" AS "isPremium", u."is_admin" AS "isAdmin",
           u."premium_since" AS "premiumSince",
           u."premium_trial_ends_at" AS "trialEndsAt",
           u."referral_code" AS "referralCode",
           u."created_at" AS "createdAt",
           COALESCE(a."attempted", 0)::int AS "attempted",
           COALESCE(a."correct", 0)::int AS "correct"
    FROM "users" u
    LEFT JOIN (
      SELECT "user_id",
             count(*)::int AS "attempted",
             count(*) FILTER (WHERE "is_correct")::int AS "correct"
      FROM "question_attempts"
      GROUP BY "user_id"
    ) a ON a."user_id" = u."id"
    ORDER BY u."created_at" DESC
    LIMIT 500
  `);

  const iso = (value: unknown) =>
    value instanceof Date ? value.toISOString() : value ? String(value) : null;

  const rows: AdminUser[] = (result.rows as unknown as Record<string, unknown>[]).map((r) => {
    const attempted = Number(r.attempted ?? 0);
    const correct = Number(r.correct ?? 0);
    return {
      id: String(r.id),
      name: String(r.name ?? ""),
      email: String(r.email ?? ""),
      school: (r.school as string | null) ?? null,
      cohort: (r.cohort as string | null) ?? null,
      isPremium: Boolean(r.isPremium),
      isAdmin: Boolean(r.isAdmin),
      premiumSince: iso(r.premiumSince),
      trialEndsAt: iso(r.trialEndsAt),
      referralCode: (r.referralCode as string | null) ?? null,
      createdAt: iso(r.createdAt) ?? "",
      attempted,
      correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : null,
    };
  });

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Users</h1>
        <p className="text-slate-600">
          Every registered account with the particulars entered at signup. Tap a row to open the full record.
        </p>
      </div>
      <AdminUsersTable rows={rows} />
    </div>
  );
}
