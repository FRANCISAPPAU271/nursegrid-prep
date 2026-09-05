import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// One-time admin action: add the new "eight_month" value to the
// subscription_plan enum in production so the new $9 / 8-month plan can be
// purchased. Safe to run multiple times (IF NOT EXISTS).
//
// Visit while logged in as admin:
//   https://nursegrid.vercel.app/api/admin/migrate-plans
// ---------------------------------------------------------------------------
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  await db.execute(sql`ALTER TYPE "subscription_plan" ADD VALUE IF NOT EXISTS 'eight_month'`);

  const values = await db.execute(
    sql`SELECT enumlabel FROM pg_enum
        JOIN pg_type ON pg_type.oid = pg_enum.enumtypid
        WHERE pg_type.typname = 'subscription_plan'
        ORDER BY enumsortorder`,
  );

  return NextResponse.json({
    ok: true,
    subscriptionPlanValues: values.rows.map((r) => (r as { enumlabel: string }).enumlabel),
  });
}
