"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

type UserInfo = {
  name: string;
  email: string;
  school: string;
  cohort: string;
  isPremium: boolean;
  createdAt: string;
};

export default function SettingsForm({ user }: { user: UserInfo }) {
  const [name, setName] = useState(user.name);
  const [school, setSchool] = useState(user.school);
  const [cohort, setCohort] = useState(user.cohort);
  const [savingProfile, setSavingProfile] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  const toast = useToast();
  const router = useRouter();

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSavingProfile(true);
    try {
      const res = await fetch("/api/me", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, school, cohort }),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed to update profile");
      toast.push("Profile updated", "success");
      router.refresh();
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Failed to update profile", "error");
    } finally {
      setSavingProfile(false);
    }
  }

  async function changePassword(e: React.FormEvent) {
    e.preventDefault();
    setSavingPassword(true);
    try {
      const res = await fetch("/api/me/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed to update password");
      toast.push("Password updated", "success");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Failed to update password", "error");
    } finally {
      setSavingPassword(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <form onSubmit={saveProfile} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-950">Profile</h2>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
          <input disabled value={user.email} className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Full name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Nursing school</label>
          <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Cohort / graduation year</label>
          <input
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            placeholder="e.g. Spring 2027"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <button
          type="submit"
          disabled={savingProfile}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
        >
          {savingProfile ? "Saving…" : "Save profile"}
        </button>
      </form>

      <div className="space-y-6">
        <form onSubmit={changePassword} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-bold text-slate-950">Change password</h2>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">Current password</label>
            <input
              type="password"
              required
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700">New password</label>
            <input
              type="password"
              required
              minLength={6}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
            />
          </div>
          <button
            type="submit"
            disabled={savingPassword}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
          >
            {savingPassword ? "Updating…" : "Update password"}
          </button>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-base font-bold text-slate-950">Account</h2>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Plan</dt>
              <dd className="font-semibold text-slate-800">{user.isPremium ? "Premium" : "Free"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Member since</dt>
              <dd className="font-semibold text-slate-800">
                {new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(user.createdAt))}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
