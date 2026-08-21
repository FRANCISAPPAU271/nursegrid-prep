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
