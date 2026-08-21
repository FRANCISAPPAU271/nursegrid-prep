"use client";

export default function InstallAppCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-xl">📲</span>
        <div>
          <h2 className="text-base font-bold text-slate-950">Install as an app</h2>
          <p className="text-xs text-slate-500">Get quick, full-screen access from your home screen.</p>
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div>
          <p className="font-semibold text-slate-800">On Android (Chrome)</p>
          <p>Tap the ⋮ menu → &ldquo;Install app&rdquo; or &ldquo;Add to Home screen&rdquo;.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">On iPhone/iPad (Safari)</p>
          <p>Tap the Share icon → &ldquo;Add to Home Screen&rdquo;.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">On desktop (Chrome/Edge)</p>
          <p>Click the install icon in the address bar, or the menu → &ldquo;Install NurseGrid Prep&rdquo;.</p>
        </div>
      </div>
    </div>
  );
}
