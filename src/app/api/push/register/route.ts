import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { pushTokens } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

const schema = z.object({
  platform: z.enum(["ios", "android"]),
  token: z.string().trim().min(10).max(4096),
});

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = schema.parse(body);

    // A token belongs to one device; re-registering (e.g. after logout/login
    // on the same device) should move it to the current user.
    await db.delete(pushTokens).where(eq(pushTokens.token, data.token));
    await db.insert(pushTokens).values({ userId: user.id, platform: data.platform, token: data.token });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
