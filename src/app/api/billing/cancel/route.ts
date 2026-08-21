import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscriptions, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function POST() {
  try {
    const user = await requireUser();
    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));
    await db.update(users).set({ isPremium: false }).where(eq(users.id, user.id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
