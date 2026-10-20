"use client";

import { Fragment, useMemo, useState } from "react";

export type AdminUser = {
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
  accuracy: number | null;
};

const fmt = (value: string | null) =>
  value
    ? new Date(value).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    : "—";

export default function AdminUsersTable({ rows }: { rows: AdminUser[] }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) =>
      [r.name, r.email, r.school ?? "", r.cohort ?? "", r.referralCode ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [rows, query]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, school, cohort or referral code"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 sm:max-w-md"
        />
        <p className="text-xs font-semibold text-slate-500">
          {filtered.length} of {rows.length} accounts
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">School</th>
                <th className="px-4 py-3">Plan</th>
                <th className="px-4 py-3">Joined</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => {
                const open = openId === u.id;
                return (
                  <Fragment key={u.id}>
                    <tr
                      onClick={() => setOpenId(open ? null : u.id)}
                      className={`cursor-pointer border-t border-slate-100 transition ${open ? "bg-emerald-50/50" : "hover:bg-slate-50"}`}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {u.name}
                        {u.isAdmin && (
                          <span className="ml-2 rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            admin
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-600">{u.email}</td>
                      <td className="px-4 py-3 text-slate-600">{u.school ?? "—"}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-bold ${
                            u.isPremium ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {u.isPremium ? "★ Premium" : "Free"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">{fmt(u.createdAt)}</td>
                      <td className="px-4 py-3 text-right text-slate-400">{open ? "▴" : "▾"}</td>
                    </tr>
                    {open && (
                      <tr className="border-t border-emerald-100 bg-emerald-50/40">
                        <td colSpan={6} className="px-4 py-5">
                          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                              ["Full name", u.name],
                              ["Email", u.email],
                              ["Nursing school", u.school ?? "—"],
                              ["Cohort / graduation year", u.cohort ?? "—"],
                              ["Referral code", u.referralCode ?? "—"],
                              ["Joined", fmt(u.createdAt)],
                              ["Premium since", fmt(u.premiumSince)],
                              ["Trial ends", fmt(u.trialEndsAt)],
                              ["Questions attempted", String(u.attempted)],
                              ["Correct", String(u.correct)],
                              ["Accuracy", u.accuracy === null ? "—" : `${u.accuracy}%`],
                              ["Account type", u.isAdmin ? "Administrator" : u.isPremium ? "Premium" : "Free"],
                            ].map(([label, value]) => (
                              <div key={label}>
                                <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</dt>
                                <dd className="mt-0.5 break-words text-sm font-semibold text-slate-900">{value}</dd>
                              </div>
                            ))}
                          </dl>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <p className="p-8 text-center text-sm text-slate-500">No account matches that search.</p>
        )}
      </div>
    </div>
  );
}
