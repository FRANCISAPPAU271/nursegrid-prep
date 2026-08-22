import { getCurrentUser } from "@/lib/auth";
import CatSessionRunner from "@/components/cat/CatSessionRunner";

export const dynamic = "force-dynamic";

export default async function CatSessionPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { id } = await params;

  return <CatSessionRunner sessionId={id} />;
}
