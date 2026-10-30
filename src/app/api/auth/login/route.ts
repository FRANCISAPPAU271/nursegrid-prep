import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { createSession, verifyPassword } from "@/lib/auth";
import { handleApiError } from "@/lib/api";
import { precheckLogin, recordLoginFailure, clearLoginFailures } from "@/lib/login-throttle";

const schema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    // Refuse before touching the database. A password guess costs the attacker
    // a full bcrypt comparison otherwise, which is the expensive half.
    const verdict = await precheckLogin(data.email, ip);
    if (!verdict.allowed) {
      const minutes = Math.ceil(verdict.retryAfterSeconds / 60);
      return NextResponse.json(
        {
          error: `Too many failed attempts. Try again in ${minutes} minute${minutes === 1 ? "" : "s"}, or reset your password.`,
          retryAfterSeconds: verdict.retryAfterSeconds,
        },
        { status: 429, headers: { "retry-after": String(verdict.retryAfterSeconds) } },
      );
    }

    // Case-insensitive on purpose. The signup form lowercases the address, but
    // accounts created earlier - or imported - can hold capitals in the column,
    // and a case-sensitive comparison then rejects the correct password with
    // "Invalid email or password", which is indistinguishable from a wrong
    // password and unrecoverable by the person hitting it.
    const rows = await db
      .select()
      .from(users)
      .where(sql`lower(${users.email}) = ${data.email}`)
      .limit(1);
    const user = rows[0];
    if (!user) {
      await recordLoginFailure(data.email, ip);
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const valid = await verifyPassword(data.password, user.passwordHash);
    if (!valid) {
      await recordLoginFailure(data.email, ip);
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const userAgent = request.headers.get("user-agent");
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    await createSession(user.id, { userAgent, ipAddress });
    // A correct password clears the counter for that address.
    await clearLoginFailures(data.email);

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
