import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users, tasks, notes, referrals } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSession, hashPassword } from "@/lib/auth";
import { handleApiError } from "@/lib/api";
import { generateReferralCode, REFERRAL_REWARD_DAYS, SIGNUP_TRIAL_DAYS } from "@/lib/referral";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters").max(72),
  school: z.string().trim().max(120).optional().or(z.literal("")),
  cohort: z.string().trim().max(60).optional().or(z.literal("")),
  referralCode: z.string().trim().max(20).optional().or(z.literal("")),
  securityQuestion: z.string().trim().min(5, "Please choose a security question"),
  securityAnswer: z.string().trim().min(1, "Please enter your security answer"),
});

async function uniqueReferralCode(): Promise<string> {
  for (let attempt = 0; attempt < 8; attempt++) {
    const code = generateReferralCode();
    const existing = await db.select({ id: users.id }).from(users).where(eq(users.referralCode, code)).limit(1);
    if (existing.length === 0) return code;
  }
  return `${generateReferralCode()}${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const existing = await db.select({ id: users.id }).from(users).where(eq(users.email, data.email)).limit(1);
    if (existing.length > 0) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
    }

    let referrer: { id: string; premiumTrialEndsAt: Date | null; isPremium: boolean } | null = null;
    const normalizedRefCode = data.referralCode?.trim().toUpperCase() || "";
    if (normalizedRefCode) {
      const rows = await db
        .select({ id: users.id, premiumTrialEndsAt: users.premiumTrialEndsAt, isPremium: users.isPremium })
        .from(users)
        .where(eq(users.referralCode, normalizedRefCode))
        .limit(1);
      referrer = rows[0] ?? null;
    }

    const passwordHash = await hashPassword(data.password);
    const securityAnswerHash = await hashPassword(data.securityAnswer.toLowerCase());
    const referralCode = await uniqueReferralCode();
    const now = new Date();
    // Every new account starts with a premium trial: 14 days when invited
    // with a referral code, otherwise the standard 3-day taste of premium.
    const trialDays = referrer ? REFERRAL_REWARD_DAYS : SIGNUP_TRIAL_DAYS;
    const trialEnd = new Date(now.getTime() + trialDays * 24 * 60 * 60 * 1000);

    const [user] = await db
      .insert(users)
      .values({
        name: data.name,
        email: data.email,
        passwordHash,
        school: data.school || null,
        cohort: data.cohort || null,
        referralCode,
        referredByCode: referrer ? normalizedRefCode : null,
        isPremium: true,
        premiumSince: now,
        premiumTrialEndsAt: trialEnd,
        securityQuestion: data.securityQuestion,
        securityAnswerHash,
      })
      .returning({ id: users.id, name: users.name, email: users.email });

    if (referrer) {
      await db.insert(referrals).values({
        referrerUserId: referrer.id,
        refereeUserId: user.id,
        rewardDays: REFERRAL_REWARD_DAYS,
      });

      // Reward the referrer with bonus premium days too, stacking onto any
      // existing trial rather than overwriting it.
      const base = referrer.premiumTrialEndsAt && referrer.premiumTrialEndsAt.getTime() > now.getTime()
        ? referrer.premiumTrialEndsAt
        : now;
      const referrerTrialEnd = new Date(base.getTime() + REFERRAL_REWARD_DAYS * 24 * 60 * 60 * 1000);
      await db
        .update(users)
        .set({
          isPremium: true,
          premiumSince: referrer.isPremium ? undefined : now,
          premiumTrialEndsAt: referrerTrialEnd,
        })
        .where(eq(users.id, referrer.id));
    }

    const inTwoDays = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
    const inFiveDays = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);

    await db.insert(tasks).values([
      {
        userId: user.id,
        title: "Complete NMC exam diagnostic quiz",
        description: "Take a short quiz from the question bank to see where you stand.",
        category: "exam",
        status: "todo",
        priority: "high",
        dueDate: inTwoDays,
      },
      {
        userId: user.id,
        title: "Review med-surg clinical prep packet",
        description: "Read tomorrow's clinical assignment before pre-conference.",
        category: "clinical",
        status: "todo",
        priority: "medium",
        dueDate: inFiveDays,
      },
      {
        userId: user.id,
        title: "Read: Answering priority questions",
        description: "Check the Strategies tab for the ABC/Maslow prioritization guide.",
        category: "study",
        status: "todo",
        priority: "low",
        dueDate: null,
      },
    ]);

    await db.insert(notes).values({
      userId: user.id,
      title: "Welcome to NurseGrid Prep 👋",
      content:
        "This is your Notes space. Jot down clinical pearls, drug facts, or reminders here. Try creating a note for each unit exam!",
      tag: "general",
      pinned: true,
    });

    const userAgent = request.headers.get("user-agent");
    const ipAddress = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    await createSession(user.id, { userAgent, ipAddress });

    return NextResponse.json(
      { user: { id: user.id, name: user.name, email: user.email }, referralBonusApplied: Boolean(referrer) },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
