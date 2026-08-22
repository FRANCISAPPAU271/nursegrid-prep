import { NextResponse } from "next/server";
import { getCurrentSessionInfo } from "@/lib/auth";

export async function GET() {
  const session = await getCurrentSessionInfo();
  if (!session) return NextResponse.json({ session: null });
  return NextResponse.json({
    session: {
      userAgent: session.userAgent,
      createdAt: session.createdAt,
    },
  });
}
