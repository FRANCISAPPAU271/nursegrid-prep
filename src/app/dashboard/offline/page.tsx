import { getCurrentUser } from "@/lib/auth";
import OfflineStudy from "@/components/offline/OfflineStudy";

export const dynamic = "force-dynamic";

export default async function OfflinePage() {
  const user = await getCurrentUser();
  if (!user) return null;

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Offline Study <span className="align-middle text-lg">📶</span>
        </h1>
        <p className="text-slate-600">
          Download questions while you have data, practice anywhere with zero network, and sync your answers when you
          reconnect — built for real Ghanaian data budgets.
        </p>
      </div>
      <OfflineStudy />
    </div>
  );
}
