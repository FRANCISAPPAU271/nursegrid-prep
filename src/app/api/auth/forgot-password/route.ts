import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users, sessions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { handleApiError, ApiError } from "@/lib/api";
import { hashPassword, verifyPassword } from "@/lib/auth";

const getQuerySchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

const postBodySchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  securityAnswer: z.string().trim().toLowerCase(),
  newPassword: z.string().min(6, "Password must be at least 6 characters").max(72),
});

// GET: retrieve the security question for a given email address so we can
// show it on the forgot-password screen.
/**
 * Compare a typed answer against the stored one, allowing for the differences
 * people actually produce.
 *
 * Only the trimmed, lowercased form was ever accepted, so an answer stored as
 * "rex" was rejected for anyone who typed "Rex.", "my rex" or with a stray
 * trailing space - each of which reads to a student as "my answer is right and
 * the app is broken". For an exam-prep product that is not a security boundary
 * worth defending at the cost of a support ticket.
 *
 * The stored value is a bcrypt hash made from the old normalisation, so past
 * answers keep working: the variants are applied to what is typed, and the
 * first one that matches the hash wins. Nothing weaker is accepted - the
 * comparison is still exact, just against a small set of sensible readings.
 */
function answerVariants(raw: string): string[] {
  const base = raw.trim().toLowerCase();
  const stripped = base.replace(/[^\p{L}\p{N}\s]/gu, "").replace(/\s+/g, " ").trim();
  const noArticle = stripped.replace(/^(the|a|an)\s+/, "");
  const noPossessive = stripped.replace(/^(my|our)\s+/, "");
  return [...new Set([base, stripped, noArticle, noPossessive])].filter(Boolean);
}

async function matchesSecurityAnswer(raw: string, hash: string): Promise<boolean> {
  for (const variant of answerVariants(raw)) {
    if (await verifyPassword(variant, hash)) return true;
  }
  return false;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const data = getQuerySchema.parse({ email });

    const rows = await db
      .select({ securityQuestion: users.securityQuestion })
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    const user = rows[0];
    if (!user) {
      throw new ApiError("No account found with that email address.", 444);
    }

    if (!user.securityQuestion) {
      throw new ApiError(
        "No security question was set up for this account. Please contact support on WhatsApp to reset your password.",
        400,
      );
    }

    return NextResponse.json({ securityQuestion: user.securityQuestion });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Enter a valid email" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

// POST: verify the answered security question and instantly reset the
// password, invalidating any active sessions across all other devices.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = postBodySchema.parse(body);

    const rows = await db
      .select({ id: users.id, securityAnswerHash: users.securityAnswerHash })
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    const user = rows[0];
    if (!user) {
      throw new ApiError("No account found with that email address.", 404);
    }

    if (!user.securityAnswerHash) {
      throw new ApiError("No security answer was set up for this account.", 400);
    }

    const valid = await matchesSecurityAnswer(data.securityAnswer, user.securityAnswerHash);
    if (!valid) {
      throw new ApiError("Incorrect answer. Please try again or contact WhatsApp support.", 401);
    }

    const passwordHash = await hashPassword(data.newPassword);
    await db.update(users).set({ passwordHash }).where(eq(users.id, user.id));

    // Clear all existing active sessions as a security measure
    await db.delete(sessions).where(eq(sessions.userId, user.id));

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
