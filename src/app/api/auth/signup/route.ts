import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users, tasks, notes, referrals } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSession, hashPassword } from "@/lib/auth";
import { handleApiError } from "@/lib/api";
import { generateReferralCode, SIGNUP_TRIAL_DAYS } from "@/lib/referral";
import { checkTrialEligibility, recordSignup } from "@/db/signup-guard";
import { isSmsConfigured, normalizeGhPhone } from "@/lib/sms";
import { isPhoneRecentlyVerified, canPhoneClaimTrial, markTrialClaimed } from "@/db/phone-otp";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters").max(72),
  school: z.string().trim().max(120).optional().or(z.literal("")),
  cohort: z.string().trim().max(60).optional().or(z.literal("")),
  referralCode: z.string().trim().max(20).optional().or(z.literal("")),
  securityQuestion: z.string().trim().min(5, "Please choose a security question"),
  securityAnswer: z.string().trim().min(1, "Please enter your security answer"),
  deviceId: z.string().trim().max(80).optional().or(z.literal("")),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
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

    let referrer: { id: string } | null = null;
    const normalizedRefCode = data.referralCode?.trim().toUpperCase() || "";
    if (normalizedRefCode) {
      const rows = await db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.referralCode, normalizedRefCode))
        .limit(1);
      referrer = rows[0] ?? null;
    }

    const passwordHash = await hashPassword(data.password);
    const securityAnswerHash = await hashPassword(data.securityAnswer.toLowerCase());
    const referralCode = await uniqueReferralCode();
    const now = new Date();

    // Trial-abuse guard: a device or IP that has recently farmed signups
    // still gets an account — just without the free trial, and with any
    // referral voided.
    const guardIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
    const guardDeviceId = data.deviceId?.trim() || null;
    const trialCheck = await checkTrialEligibility(guardDeviceId, guardIp);
    let trialAllowed = trialCheck.eligible;

    // SMS OTP layer (active only when ARKESEL_API_KEY is configured):
    // a verified Ghana phone number becomes the trial anchor — one trial
    // claim per phone per 90 days. Unverified/absent phone = no trial,
    // account still created on the free tier.
    let verifiedPhone: string | null = null;
    // True only when a *verified* phone has already anchored a trial — a real
    // duplicate signal. Being unverified is not: OTP is optional at signup and
    // the UI frames it as a trial upsell, so most users never touch it.
    let phoneAlreadyClaimedTrial = false;
    if (isSmsConfigured()) {
      const normalized = data.phone ? normalizeGhPhone(data.phone) : null;
      if (normalized && (await isPhoneRecentlyVerified(normalized))) {
        verifiedPhone = normalized;
        if (!(await canPhoneClaimTrial(normalized))) {
          trialAllowed = false; // phone already claimed a trial in the last 90 days
          phoneAlreadyClaimedTrial = true;
        }
      } else {
        trialAllowed = false; // OTP enabled but phone not verified
      }
    }

    // Self-referral guard.
    //
    // The referral is voided only on a genuine abuse signal:
    //   • this device or IP has farmed signups recently, or
    //   • a verified phone has already anchored a trial.
    //
    // It is deliberately NOT tied to `trialAllowed`. That flag also goes false
    // when OTP is enabled and the phone was simply left blank — which is the
    // common case, because the phone field is an optional trial upsell. Testing
    // `!trialAllowed` therefore discarded every referral from an ordinary user,
    // silently: the signup still returned 201 and the referral was gone.
    if (referrer && (trialCheck.reason !== "ok" || phoneAlreadyClaimedTrial)) {
      referrer = null;
    }

    // Every new account starts with the same premium trial. The referral buys
    // the friend a discount on their first purchase, not extra days: the
    // referrer's reward is credit, awarded when this user's first payment
    // clears.
    const trialEnd = trialAllowed ? new Date(now.getTime() + SIGNUP_TRIAL_DAYS * 24 * 60 * 60 * 1000) : null;

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
        isPremium: trialAllowed,
        premiumSince: trialAllowed ? now : null,
        premiumTrialEndsAt: trialEnd,
        securityQuestion: data.securityQuestion,
        securityAnswerHash,
      })
      .returning({ id: users.id, name: users.name, email: users.email });

    if (referrer) {
      // Record the relationship only. The referrer's reward is GH₵ 20 of
      // account credit, paid when this friend's first payment clears
      // (awardReferralCredit). It is deliberately NOT premium days granted now:
      // rewarding a signup that may never pay is the farming vector the guard
      // above exists to close, and the UI and Terms both describe credit.
      await db.insert(referrals).values({
        referrerUserId: referrer.id,
        refereeUserId: user.id,
        rewardDays: 0,
      });
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

    // Record this signup's device + IP for future trial-eligibility checks.
    await recordSignup(user.id, guardDeviceId, ipAddress);

    // Mark the phone's trial claim so it can't anchor another trial for 90 days.
    if (verifiedPhone && trialAllowed) {
      await markTrialClaimed(verifiedPhone, user.id);
    }

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
