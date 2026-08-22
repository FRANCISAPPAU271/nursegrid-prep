export function SkeletonLine({ className = "" }: { className?: string }) {
  return <div className={`skeleton rounded-md ${className}`} />;
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <SkeletonLine className="h-4 w-1/3" />
      <SkeletonLine className="mt-3 h-3 w-2/3" />
      <SkeletonLine className="mt-2 h-3 w-1/2" />
    </div>
  );
}

export function SkeletonList({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

// A full dashboard-page shell: heading + a grid or list of skeleton cards.
// Used as the shared `loading.tsx` UI so route navigations show instant
// visual feedback (via Next.js's automatic per-segment Suspense boundary)
// instead of a blank screen while the server component fetches data.
export function DashboardPageSkeleton({ variant = "grid", count }: { variant?: "grid" | "list"; count?: number }) {
  return (
    <div>
      <div className="mb-6 space-y-2">
        <SkeletonLine className="h-7 w-56" />
        <SkeletonLine className="h-4 w-80" />
      </div>
      {variant === "grid" ? <SkeletonGrid count={count ?? 6} /> : <SkeletonList count={count ?? 4} />}
    </div>
  );
}
