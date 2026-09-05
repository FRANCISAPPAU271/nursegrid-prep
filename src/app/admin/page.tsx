import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

/**
 * Staff entry point: nursegrid.vercel.app/admin
 *
 * - Not signed in  -> /login (sign in with an admin account, then revisit /admin)
 * - Signed in, admin -> the admin payments dashboard
 * - Signed in, regular student -> their own dashboard (admin area stays invisible)
 */
export default async function AdminEntryPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isAdmin) redirect("/dashboard");
  redirect("/dashboard/admin/payments");
}
