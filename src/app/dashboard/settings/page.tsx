import { getCurrentUser } from "@/lib/auth";
import SettingsForm from "@/components/settings/SettingsForm";
import InstallAppCard from "@/components/settings/InstallAppCard";
import SecurityCard from "@/components/settings/SecurityCard";
import SupportCard from "@/components/contact/SupportCard";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Settings</h1>
        <p className="text-slate-600">Update your profile and account security.</p>
      </div>
      <SettingsForm
        user={{
          name: user.name,
          email: user.email,
          school: user.school ?? "",
          cohort: user.cohort ?? "",
          isPremium: user.isPremium,
          createdAt: user.createdAt.toISOString(),
        }}
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <SecurityCard />
        <InstallAppCard />
        <SupportCard message="Hi NurseGrid Prep! I need help with my account settings." />
      </div>
    </div>
  );
}
