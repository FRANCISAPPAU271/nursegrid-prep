import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import Sidebar from "@/components/dashboard/Sidebar";
import { ToastProvider } from "@/components/ui/Toast";
import ReferralBonusToast from "@/components/dashboard/ReferralBonusToast";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <ToastProvider>
      <ReferralBonusToast />
      <div className="flex min-h-screen bg-slate-50">
        <Sidebar name={user.name} email={user.email} isPremium={user.isPremium} />
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </ToastProvider>
  );
}
