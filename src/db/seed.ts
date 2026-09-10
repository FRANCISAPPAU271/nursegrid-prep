/* eslint-disable no-console */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { db, pool } from "./index";
import {
  users,
  tasks,
  notes,
  questionCategories,
  questions,
  questionAttempts,
  questionBookmarks,
  strategies,
  strategyBookmarks,
  subscriptions,
  invoices,
  referrals,
  waitlistSignups,
  learningTopics,
  learningBookmarks,
  carePlans,
  momoPaymentRequests,
} from "./schema";

const REFERRAL_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function generateReferralCode(): string {
  let code = "";
  for (let i = 0; i < 7; i++) code += REFERRAL_ALPHABET[Math.floor(Math.random() * REFERRAL_ALPHABET.length)];
  return `NG-${code}`;
}

import { CATEGORY_DEFS, ARCHETYPES, MAX_VARIANTS_PER_FACT, buildCategoryQuestions, chunk, hashStr, seededShuffle, mulberry32 } from "./question-bank";
import { STRATEGY_DEFS as SHARED_STRATEGY_DEFS } from "@/db/strategy-defs";
import { LEARNING_TOPIC_DEFS as SHARED_LEARNING_TOPIC_DEFS } from "@/db/learning-topic-defs";

// ---------------------------------------------------------------------------
// Strategies library (test-taking strategy articles)
// ---------------------------------------------------------------------------
const STRATEGY_DEFS = SHARED_STRATEGY_DEFS;

// ---------------------------------------------------------------------------
// Learning library: body systems, obstetric anatomy, and the nursing process
// ---------------------------------------------------------------------------
const LEARNING_TOPIC_DEFS = SHARED_LEARNING_TOPIC_DEFS;

// ---------------------------------------------------------------------------
// Main seed routine
// ---------------------------------------------------------------------------
async function main() {
  console.log("Seeding NurseGrid Prep demo data...");

  console.log("Clearing existing data...");
  await db.delete(questionAttempts);
  await db.delete(questionBookmarks);
  await db.delete(strategyBookmarks);
  await db.delete(learningBookmarks);
  await db.delete(carePlans);
  await db.delete(momoPaymentRequests);
  await db.delete(invoices);
  await db.delete(subscriptions);
  await db.delete(referrals);
  await db.delete(waitlistSignups);
  await db.delete(notes);
  await db.delete(tasks);
  await db.delete(questions);
  await db.delete(strategies);
  await db.delete(learningTopics);
  await db.delete(questionCategories);
  await db.delete(users);

  console.log("Inserting question categories...");
  const insertedCategories = await db
    .insert(questionCategories)
    .values(
      CATEGORY_DEFS.map((c, i) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        clientNeed: c.clientNeed,
        icon: c.icon,
        sortOrder: i,
      })),
    )
    .returning();
  const categoryIdBySlug = new Map(insertedCategories.map((c) => [c.slug, c.id]));

  console.log("Inserting strategies...");
  await db.insert(strategies).values(
    STRATEGY_DEFS.map((s: any, i) => ({
      slug: s.slug,
      title: s.title,
      category: s.category,
      summary: s.summary,
      content: [...s.content],
      example: s.example,
      icon: s.icon,
      readTimeMinutes: s.readTimeMinutes,
      sortOrder: i,
      videoId: s.videoId || null,
      videoTitle: s.videoTitle || null,
    })),
  );

  console.log("Inserting learning library topics...");
  const insertedLearningTopics = await db
    .insert(learningTopics)
    .values(
      LEARNING_TOPIC_DEFS.map((t, i) => ({
        slug: t.slug,
        title: t.title,
        category: t.category,
        icon: t.icon,
        summary: t.summary,
        overview: t.overview,
        keyStructures: [...t.keyStructures],
        normalFindings: [...t.normalFindings],
        nursingNotes: [...t.nursingNotes],
        redFlags: [...t.redFlags],
        commonConditions: [...t.commonConditions],
        imageUrl: t.imageUrl,
        videoId: t.videoId,
        videoTitle: t.videoTitle,
        videoSource: t.videoSource,
        sortOrder: i,
      })),
    )
    .returning();

  // Target is derived from real content: every unique knowledge point
  // (clinical item × question archetype) appears at most MAX_VARIANTS_PER_FACT
  // times, each with different wording and different distractors. Growing the
  // item banks (see seed-extra-items.ts) automatically grows this number.
  const capacity = CATEGORY_DEFS.reduce(
    (sum, def) => sum + def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT,
    0,
  );
  console.log(`Generating question bank (${capacity} distinct questions from real content)...`);

  const allInsertedQuestions: { id: string; categoryId: string; correctChoiceId: string }[] = [];

  for (let i = 0; i < CATEGORY_DEFS.length; i++) {
    const def = CATEGORY_DEFS[i];
    const categoryId = categoryIdBySlug.get(def.slug)!;
    const target = def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT;
    const rows = buildCategoryQuestions([...def.items], target, categoryId, def.slug);

    let insertedForCategory = 0;
    for (const batch of chunk(rows, 500)) {
      const inserted = await db
        .insert(questions)
        .values(batch)
        .returning({ id: questions.id, categoryId: questions.categoryId, correctChoiceId: questions.correctChoiceId });
      allInsertedQuestions.push(...inserted);
      insertedForCategory += inserted.length;
    }
    console.log(`  ${def.name}: ${insertedForCategory} questions`);
  }
  console.log(`Total questions inserted: ${allInsertedQuestions.length}`);

  console.log("Creating demo premium account...");
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const passwordHash = await bcrypt.hash("password123", 10);
  const premiumSince = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000);
  const answerHash = await bcrypt.hash("spot", 10);
  const [demoUser] = await db
    .insert(users)
    .values({
      name: "Jordan Alvarez",
      email: "demo@nursegrid.app",
      passwordHash,
      school: "Riverbend School of Nursing",
      cohort: "BSN Class of 2027",
      isPremium: true,
      premiumSince,
      referralCode: "NG-DEMO001",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: answerHash,
    })
    .returning();

  // A second, free-tier account so reviewers can see the paywall experience too.
  const [freeUser] = await db
    .insert(users)
    .values({
      name: "Casey Morgan",
      email: "free@nursegrid.app",
      passwordHash: await bcrypt.hash("password123", 10),
      school: "Lakeside Community College",
      cohort: "ADN Class of 2026",
      isPremium: false,
      referralCode: "NG-FREE001",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: await bcrypt.hash("buddy", 10),
    })
    .returning();

  // An admin account that can review and approve/reject MTN MoMo payments
  // from the /dashboard/admin/payments screen.
  const [adminUser] = await db
    .insert(users)
    .values({
      name: "NurseGrid Admin",
      email: "admin@nursegrid.app",
      passwordHash: await bcrypt.hash("password123", 10),
      isPremium: true,
      isAdmin: true,
      premiumSince: new Date(now - 90 * day),
      referralCode: "NG-ADMIN01",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: await bcrypt.hash("rover", 10),
    })
    .returning();

  // A few extra referred accounts so the Invite & Earn page has real history.
  const referredNames = [
    { name: "Taylor Nguyen", email: "taylor.nguyen@example.com", school: "Riverbend School of Nursing" },
    { name: "Sam Whitfield", email: "sam.whitfield@example.com", school: "Riverbend School of Nursing" },
    { name: "Morgan Ellis", email: "morgan.ellis@example.com", school: "Coastal University Nursing" },
  ];
  const referredUsers = [];
  for (const r of referredNames) {
    const [u] = await db
      .insert(users)
      .values({
        name: r.name,
        email: r.email,
        passwordHash: await bcrypt.hash("password123", 10),
        school: r.school,
        isPremium: true,
        premiumSince: new Date(now - 3 * day),
        premiumTrialEndsAt: new Date(now + 11 * day),
        referralCode: generateReferralCode(),
        referredByCode: "NG-DEMO001",
      })
      .returning();
    referredUsers.push(u);
  }
  await db.insert(referrals).values(
    referredUsers.map((u, i) => ({
      referrerUserId: demoUser.id,
      refereeUserId: u.id,
      rewardDays: 14,
      createdAt: new Date(now - (i + 1) * 3 * day),
    })),
  );

  console.log("Seeding demo tasks...");
  await db.insert(tasks).values([
    { userId: demoUser.id, title: "Submit med-surg care plan", description: "Complete and upload the care plan for Mr. Thompson (CHF).", category: "assignment", status: "in_progress", priority: "high", dueDate: new Date(now + 1 * day) },
    { userId: demoUser.id, title: "Clinical rotation — Labour & Delivery", description: "7am arrival, review foetal monitoring strips before pre-conference.", category: "clinical", status: "todo", priority: "high", dueDate: new Date(now + 2 * day) },
    { userId: demoUser.id, title: "Pharmacology unit exam", description: "Covers cardiac, respiratory, and endocrine medications.", category: "exam", status: "todo", priority: "high", dueDate: new Date(now + 5 * day) },
    { userId: demoUser.id, title: "Practice 50 NMC exam questions — Med-Surg", description: "Focus on cardiac and respiratory categories this week.", category: "study", status: "in_progress", priority: "medium", dueDate: new Date(now + 3 * day) },
    { userId: demoUser.id, title: "Skills lab — IV insertion check-off", description: "Bring gloves, tourniquet, and skills packet.", category: "skills_lab", status: "todo", priority: "medium", dueDate: new Date(now + 4 * day) },
    { userId: demoUser.id, title: "Read Ch. 12 — Fluid & Electrolytes", description: "Focus on potassium and sodium imbalances before Friday's quiz.", category: "study", status: "todo", priority: "medium", dueDate: new Date(now + 6 * day) },
    { userId: demoUser.id, title: "Dosage calculation worksheet", description: "20 problems, due before pharmacology lab.", category: "assignment", status: "done", priority: "medium", dueDate: new Date(now - 2 * day) },
    { userId: demoUser.id, title: "Study group — Mental health unit", description: "Meeting at the library with study group at 6pm.", category: "study", status: "done", priority: "low", dueDate: new Date(now - 5 * day) },
    { userId: demoUser.id, title: "Complete HIPAA training module", description: "Required before next clinical rotation.", category: "assignment", status: "todo", priority: "high", dueDate: new Date(now - 1 * day) },
    { userId: demoUser.id, title: "Renew CPR certification", description: "Card expires end of month — schedule a class.", category: "personal", status: "todo", priority: "low", dueDate: new Date(now + 20 * day) },
    { userId: demoUser.id, title: "Review Kaplan diagnostic results", description: "Identify weakest content areas and plan next week's study blocks.", category: "study", status: "in_progress", priority: "medium", dueDate: new Date(now + 2 * day) },
    { userId: demoUser.id, title: "Peds clinical paperwork", description: "Submit growth and development assessment for assigned client.", category: "clinical", status: "done", priority: "medium", dueDate: new Date(now - 7 * day) },
  ]);

  await db.insert(tasks).values([
    { userId: freeUser.id, title: "Complete NMC exam diagnostic quiz", description: "Try a few free preview questions to see where you stand.", category: "exam", status: "todo", priority: "high", dueDate: new Date(now + 2 * day) },
    { userId: freeUser.id, title: "Review med-surg clinical prep packet", description: "Read tomorrow's clinical assignment before pre-conference.", category: "clinical", status: "todo", priority: "medium", dueDate: new Date(now + 5 * day) },
  ]);

  console.log("Seeding demo notes...");
  await db.insert(notes).values([
    { userId: demoUser.id, title: "Digoxin quick facts", content: "Hold if apical pulse < 60. Therapeutic range 0.5-2.0 ng/mL. Watch for visual halos, nausea, and bradycardia as signs of toxicity.", tag: "pharmacology", pinned: true },
    { userId: demoUser.id, title: "Prioritisation cheat sheet", content: "ABC first, then Maslow. Acute > chronic. Unexpected > expected. Assess before you act unless it's an emergency.", tag: "fundamentals", pinned: true },
    { userId: demoUser.id, title: "Preeclampsia red flags", content: "BP > 160/110, headache, visual changes, epigastric pain, brisk reflexes. Mag sulfate for seizure prophylaxis — watch respiratory rate and reflexes.", tag: "maternity", pinned: false },
    { userId: demoUser.id, title: "Isolation precautions mnemonic", content: "MTV = Measles, TB, Varicella need AIRBORNE. Everything else contact/droplet by mode of transmission.", tag: "clinical", pinned: false },
    { userId: demoUser.id, title: "Electrolyte panic values", content: "K+ > 6.5 or < 2.5, Na+ > 155 or < 120, Ca2+ critical low with tetany/seizures. Know these cold before exam day.", tag: "med-surg", pinned: false },
    { userId: demoUser.id, title: "Therapeutic communication phrases", content: "'Tell me more about that.' 'It sounds like you are feeling...' Avoid 'why' questions and false reassurance.", tag: "mental-health", pinned: false },
    { userId: demoUser.id, title: "Peds vital sign ranges", content: "Infant HR 100-160, RR 30-60. Toddler HR 90-140, RR 24-40. Always compare to age-appropriate norms, not adult ranges.", tag: "paediatrics", pinned: false },
    { userId: demoUser.id, title: "Delegation quick check", content: "Stable + routine + predictable = can delegate to ward assistant. Assessment, teaching, evaluation = always RN.", tag: "general", pinned: false },
  ]);

  await db.insert(notes).values([
    {
      userId: freeUser.id,
      title: "Welcome to NurseGrid Prep 👋",
      content: "This is your Notes space. Jot down clinical pearls, drug facts, or reminders here. Try creating a note for each unit exam!",
      tag: "general",
      pinned: true,
    },
  ]);

  console.log("Seeding demo subscription, invoice, attempts, and bookmarks...");
  const [sub] = await db
    .insert(subscriptions)
    .values({
      userId: demoUser.id,
      plan: "annual",
      status: "active",
      amountCents: 1300,
      startedAt: premiumSince,
      currentPeriodEnd: new Date(premiumSince.getTime() + 365 * day),
      paymentMethod: "card",
    })
    .returning();

  await db.insert(invoices).values([
    {
      userId: demoUser.id,
      subscriptionId: sub.id,
      amountCents: 1300,
      plan: "1 Year",
      status: "paid",
      paymentMethod: "card",
      issuedAt: premiumSince,
    },
  ]);

  // Example of a friend who paid via MTN Mobile Money, to showcase that flow.
  if (referredUsers[0]) {
    const momoStart = new Date(now - 3 * day);
    const [momoSub] = await db
      .insert(subscriptions)
      .values({
        userId: referredUsers[0].id,
        plan: "four_month",
        status: "active",
        amountCents: 500,
        startedAt: momoStart,
        currentPeriodEnd: new Date(momoStart.getTime() + 120 * day),
        paymentMethod: "mtn_momo",
      })
      .returning();
    await db.insert(invoices).values({
      userId: referredUsers[0].id,
      subscriptionId: momoSub.id,
      amountCents: 500,
      plan: "4 Months",
      status: "paid",
      paymentMethod: "mtn_momo",
      momoNumber: "0554123456",
      momoReference: "MP240915.1122.A98213",
      issuedAt: momoStart,
    });

    // Also log this already-approved payment in the review queue so the
    // admin history shows a realistic mix of statuses.
    await db.insert(momoPaymentRequests).values({
      userId: referredUsers[0].id,
      plan: "four_month",
      amountCents: 500,
      momoNumber: "0554123456",
      momoReference: "MP240915.1122.A98213",
      status: "approved",
      reviewedBy: adminUser.id,
      reviewedAt: momoStart,
      subscriptionId: momoSub.id,
      createdAt: momoStart,
    });
  }

  // A couple of MoMo submissions still waiting on admin review, and one that
  // was rejected — so the /dashboard/admin/payments screen looks alive.
  if (referredUsers[1] && referredUsers[2]) {
    await db.insert(momoPaymentRequests).values([
      {
        userId: referredUsers[1].id,
        plan: "annual",
        amountCents: 1300,
        momoNumber: "0209876543",
        momoReference: "MP240921.0847.B10492",
        status: "pending",
        createdAt: new Date(now - 3 * 60 * 60 * 1000),
      },
      {
        userId: freeUser.id,
        plan: "four_month",
        amountCents: 500,
        momoNumber: "0244001122",
        momoReference: "MP240921.1930.C55210",
        status: "pending",
        createdAt: new Date(now - 45 * 60 * 1000),
      },
      {
        userId: referredUsers[2].id,
        plan: "four_month",
        amountCents: 500,
        momoNumber: "0271239988",
        momoReference: "INVALID-REF-0001",
        status: "rejected",
        reviewNote: "Reference not found in MoMo transaction history — asked student to resend via WhatsApp.",
        reviewedBy: adminUser.id,
        reviewedAt: new Date(now - 1 * day),
        createdAt: new Date(now - 1 * day - 30 * 60 * 1000),
      },
    ]);
  }

  // Attempts: sample a spread of questions per category with a realistic ~72% accuracy.
  const rand = mulberry32(42);
  const byCategory = new Map<string, typeof allInsertedQuestions>();
  for (const q of allInsertedQuestions) {
    const list = byCategory.get(q.categoryId) ?? [];
    list.push(q);
    byCategory.set(q.categoryId, list);
  }

  const attemptRows: (typeof questionAttempts.$inferInsert)[] = [];
  for (const [categoryId, qs] of byCategory) {
    const sampleSize = Math.min(18, qs.length);
    const sample = seededShuffle(qs, hashStr(categoryId)).slice(0, sampleSize);
    for (const q of sample) {
      const isCorrect = rand() < 0.72;
      const wrongLetters = ["a", "b", "c", "d"].filter((l) => l !== q.correctChoiceId);
      const selectedChoiceId = isCorrect ? q.correctChoiceId : wrongLetters[Math.floor(rand() * wrongLetters.length)];
      const attemptedAt = new Date(now - Math.floor(rand() * 20) * day);
      attemptRows.push({ userId: demoUser.id, questionId: q.id, categoryId, selectedChoiceId, isCorrect, attemptedAt });
    }
  }
  for (const batch of chunk(attemptRows, 500)) {
    await db.insert(questionAttempts).values(batch);
  }

  const bookmarkCandidates = seededShuffle(allInsertedQuestions, 777).slice(0, 12);
  await db.insert(questionBookmarks).values(bookmarkCandidates.map((q) => ({ userId: demoUser.id, questionId: q.id })));

  const allStrategies = await db.select({ id: strategies.id }).from(strategies);
  const strategyBookmarkCandidates = seededShuffle(allStrategies, 321).slice(0, 5);
  await db.insert(strategyBookmarks).values(strategyBookmarkCandidates.map((s) => ({ userId: demoUser.id, strategyId: s.id })));

  console.log("Seeding learning library bookmarks and demo care plans...");
  const learningBookmarkCandidates = seededShuffle(insertedLearningTopics, 555).slice(0, 3);
  await db.insert(learningBookmarks).values(learningBookmarkCandidates.map((t) => ({ userId: demoUser.id, topicId: t.id })));

  await db.insert(carePlans).values([
    {
      userId: demoUser.id,
      title: "Excess Fluid Volume — CHF exacerbation",
      clientInfo: "72 y/o client admitted with heart failure exacerbation, 3-day history of worsening dyspnea and leg swelling.",
      assessment:
        "Subjective: client reports shortness of breath with minimal exertion and 'heavy' swollen legs.\nObjective: bilateral 2+ pitting oedema, crackles in bilateral lung bases, weight up 4 lbs from baseline, SpO2 91% on room air.",
      nursingDiagnosis: "Excess Fluid Volume related to compromised regulatory mechanism (heart failure) as evidenced by oedema, crackles, and weight gain.",
      goals:
        "Client will exhibit reduced peripheral oedema and clear breath sounds within 48 hours.\nClient will maintain stable daily weight (within 2 lbs of dry weight) by discharge.",
      interventions: [
        { action: "Weigh client daily at the same time, same scale, same clothing.", rationale: "Daily weight is the most sensitive indicator of fluid status changes." },
        { action: "Administer diuretics as prescribed and monitor electrolytes.", rationale: "Diuretics promote fluid excretion; monitoring prevents electrolyte imbalance." },
        { action: "Restrict sodium and fluids per prescribed limits and educate the client on why.", rationale: "Reducing sodium and fluid intake decreases fluid retention." },
        { action: "Auscultate lung sounds and assess oedema each shift.", rationale: "Tracks response to treatment and detects worsening fluid overload early." },
      ],
      evaluation: "After 48 hours, client's weight decreased by 3 lbs, oedema improved to 1+, and lung sounds are clearer. Goal partially met — continue plan.",
      status: "active",
      createdAt: new Date(now - 2 * day),
      updatedAt: new Date(now - 1 * day),
    },
    {
      userId: demoUser.id,
      title: "Risk for Falls — post-op day 1",
      clientInfo: "65 y/o client, post-op day 1 following total hip replacement, first attempt at ambulation today.",
      assessment:
        "Subjective: client states 'I feel a little dizzy when I stand up.'\nObjective: orthostatic blood pressure drop noted, unsteady gait with walker, hip precautions in place.",
      nursingDiagnosis: "Risk for Falls related to orthostatic hypotension and post-surgical mobility impairment.",
      goals: "Client will ambulate with assistive device without falling throughout hospitalization.",
      interventions: [
        { action: "Check orthostatic vital signs before ambulation and have client dangle at bedside first.", rationale: "Identifies orthostatic hypotension before it causes a fall." },
        { action: "Ensure non-slip footwear and use a gait belt during ambulation.", rationale: "Reduces slipping risk and provides secure support if client becomes unsteady." },
        { action: "Keep bed in lowest position with call light within reach.", rationale: "Minimizes injury risk and enables the client to call for help." },
        { action: "Reinforce hip precautions (no crossing legs, no bending past 90 degrees) with each mobility attempt.", rationale: "Prevents hip dislocation while also focusing attention on safe movement." },
      ],
      evaluation: "",
      status: "draft",
      createdAt: new Date(now - 1 * day),
      updatedAt: new Date(now - 1 * day),
    },
  ]);

  console.log("Seeding waitlist signups...");
  await db.insert(waitlistSignups).values([
    { email: "hopeful.nursing.student@example.com", source: "landing", createdAt: new Date(now - 4 * day) },
    { email: "future.rn.2028@example.com", source: "landing", createdAt: new Date(now - 2 * day) },
    { email: "nmc.curious@example.com", source: "landing", createdAt: new Date(now - 1 * day) },
  ]);

  console.log("Seed complete!");
  console.log("Demo premium login: demo@nursegrid.app / password123");
  console.log("Demo free login:    free@nursegrid.app / password123");
  console.log("Admin login:        admin@nursegrid.app / password123");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
