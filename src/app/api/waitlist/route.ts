import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { waitlistSignups } from "@/db/schema";
import { eq } from "drizzle-orm";
import { handleApiError } from "@/lib/api";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  source: z.string().trim().max(40).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const existing = await db
      .select({ id: waitlistSignups.id })
      .from(waitlistSignups)
      .where(eq(waitlistSignups.email, data.email))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({ ok: true, alreadyJoined: true });
    }

    await db.insert(waitlistSignups).values({ email: data.email, source: data.source || "landing" });
    return NextResponse.json({ ok: true, alreadyJoined: false }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
