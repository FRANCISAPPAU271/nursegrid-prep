import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  doublePrecision,
  jsonb,
  pgEnum,
  primaryKey,
  index,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const genId = () => crypto.randomUUID();

// ---------- Enums ----------
export const taskStatusEnum = pgEnum("task_status", ["todo", "in_progress", "done"]);
export const taskPriorityEnum = pgEnum("task_priority", ["low", "medium", "high"]);
export const taskCategoryEnum = pgEnum("task_category", [
  "clinical",
  "assignment",
  "study",
  "exam",
  "skills_lab",
  "personal",
]);
export const questionDifficultyEnum = pgEnum("question_difficulty", ["easy", "medium", "hard"]);
export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "canceled",
  "expired",
]);
export const subscriptionPlanEnum = pgEnum("subscription_plan", [
  "monthly",
  "quarterly",
  "annual",
  "lifetime",
  "four_month",
]);
export const paymentMethodEnum = pgEnum("payment_method", ["card", "mtn_momo"]);
export const momoRequestStatusEnum = pgEnum("momo_request_status", ["pending", "approved", "rejected"]);

// ---------- Auth ----------
export const users = pgTable("users", {
  id: text("id").primaryKey().$defaultFn(genId),
  name: text("name").notNull(),
  email: text("email").notNull(),
  passwordHash: text("password_hash").notNull(),
  school: text("school"),
  cohort: text("cohort"),
  isPremium: boolean("is_premium").notNull().default(false),
  isAdmin: boolean("is_admin").notNull().default(false),
  premiumSince: timestamp("premium_since", { withTimezone: true }),
  premiumTrialEndsAt: timestamp("premium_trial_ends_at", { withTimezone: true }),
  referralCode: text("referral_code"),
  referredByCode: text("referred_by_code"),
  stripeCustomerId: text("stripe_customer_id"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  uniqueIndex("users_email_idx").on(t.email),
  uniqueIndex("users_referral_code_idx").on(t.referralCode),
]);

export const referrals = pgTable("referrals", {
  id: text("id").primaryKey().$defaultFn(genId),
  referrerUserId: text("referrer_user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  refereeUserId: text("referee_user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  rewardDays: integer("reward_days").notNull().default(14),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("referrals_referrer_idx").on(t.referrerUserId),
  uniqueIndex("referrals_referee_idx").on(t.refereeUserId),
]);

export const waitlistSignups = pgTable("waitlist_signups", {
  id: text("id").primaryKey().$defaultFn(genId),
  email: text("email").notNull(),
  source: text("source").notNull().default("landing"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex("waitlist_email_idx").on(t.email)]);

export const pushPlatformEnum = pgEnum("push_platform", ["ios", "android"]);

// Device push tokens registered from the native iOS/Android apps (via
// Capacitor's Push Notifications plugin), used for future study-reminder and
// new-question-drop notification campaigns.
export const pushTokens = pgTable("push_tokens", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  platform: pushPlatformEnum("platform").notNull(),
  token: text("token").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  uniqueIndex("push_tokens_token_idx").on(t.token),
  index("push_tokens_user_idx").on(t.userId),
]);

export const sessions = pgTable("sessions", {
  token: text("token").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("sessions_user_idx").on(t.userId)]);

export const passwordResetTokens = pgTable("password_reset_tokens", {
  token: text("token").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  usedAt: timestamp("used_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("password_reset_tokens_user_idx").on(t.userId)]);

// ---------- Tasks ----------
export const tasks = pgTable("tasks", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  description: text("description"),
  category: taskCategoryEnum("category").notNull().default("study"),
  status: taskStatusEnum("status").notNull().default("todo"),
  priority: taskPriorityEnum("priority").notNull().default("medium"),
  dueDate: timestamp("due_date", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("tasks_user_idx").on(t.userId),
  index("tasks_user_status_idx").on(t.userId, t.status),
  index("tasks_user_due_idx").on(t.userId, t.dueDate),
]);

// ---------- Notes ----------
export const notes = pgTable("notes", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull().default(""),
  tag: text("tag").notNull().default("general"),
  pinned: boolean("pinned").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("notes_user_idx").on(t.userId),
  index("notes_user_updated_idx").on(t.userId, t.updatedAt),
]);

// ---------- NMC exam question bank ----------
export const questionCategories = pgTable("question_categories", {
  id: text("id").primaryKey().$defaultFn(genId),
  slug: text("slug").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull().default(""),
  clientNeed: text("client_need").notNull().default(""),
  icon: text("icon").notNull().default("stethoscope"),
  sortOrder: integer("sort_order").notNull().default(0),
}, (t) => [uniqueIndex("question_categories_slug_idx").on(t.slug)]);

export const questions = pgTable("questions", {
  id: text("id").primaryKey().$defaultFn(genId),
  categoryId: text("category_id").notNull().references(() => questionCategories.id, { onDelete: "cascade" }),
  stem: text("stem").notNull(),
  choices: jsonb("choices").$type<{ id: string; text: string }[]>().notNull(),
  correctChoiceId: text("correct_choice_id").notNull(),
  rationale: text("rationale").notNull(),
  strategy: text("strategy").notNull(),
  difficulty: questionDifficultyEnum("difficulty").notNull().default("medium"),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  isFree: boolean("is_free").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("questions_category_idx").on(t.categoryId),
  index("questions_free_idx").on(t.isFree),
]);

export const questionAttempts = pgTable("question_attempts", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  questionId: text("question_id").notNull().references(() => questions.id, { onDelete: "cascade" }),
  categoryId: text("category_id").notNull().references(() => questionCategories.id, { onDelete: "cascade" }),
  selectedChoiceId: text("selected_choice_id").notNull(),
  isCorrect: boolean("is_correct").notNull(),
  attemptedAt: timestamp("attempted_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("attempts_user_idx").on(t.userId),
  index("attempts_question_idx").on(t.questionId),
  index("attempts_user_category_idx").on(t.userId, t.categoryId),
]);

export const questionBookmarks = pgTable("question_bookmarks", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  questionId: text("question_id").notNull().references(() => questions.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.questionId] })]);

// ---------- Custom exams (student picks N questions across categories,
// answers all of them, then reviews results after submitting) ----------
export const examStatusEnum = pgEnum("exam_status", ["in_progress", "completed"]);

export type ExamQuestionSnapshot = {
  id: string;
  categoryId: string;
  categoryName: string;
  stem: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  difficulty: "easy" | "medium" | "hard";
};

export type ExamAnswer = { questionId: string; selectedChoiceId: string; isCorrect: boolean };

export const examSessions = pgTable("exam_sessions", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  categorySlugs: jsonb("category_slugs").$type<string[]>().notNull().default([]),
  questionSnapshot: jsonb("question_snapshot").$type<ExamQuestionSnapshot[]>().notNull(),
  answers: jsonb("answers").$type<ExamAnswer[]>().notNull().default([]),
  totalQuestions: integer("total_questions").notNull(),
  correctCount: integer("correct_count").notNull().default(0),
  status: examStatusEnum("status").notNull().default("in_progress"),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
}, (t) => [index("exam_sessions_user_idx").on(t.userId)]);

// ---------- Adaptive difficulty practice sessions ----------
// A simplified, transparent adaptive-difficulty practice mode: question
// difficulty adapts based on prior answers, and the session stops early once
// a simple confidence-interval rule indicates a likely pass/fail, or once the
// maximum length is reached. Note: the real NMC CBT (Computer Based Test) is
// a fixed-length, non-adaptive multiple-choice exam delivered via Pearson
// VUE — this practice mode is a study tool, not a simulation of that exam.
export const catStatusEnum = pgEnum("cat_status", ["in_progress", "passed", "failed", "max_length"]);

export type CatHistoryItem = {
  questionId: string;
  categoryId: string;
  categoryName: string;
  stem: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  selectedChoiceId: string;
  isCorrect: boolean;
  rationale: string;
  strategy: string;
  difficulty: "easy" | "medium" | "hard";
  thetaAfter: number;
};

export const catSessions = pgTable("cat_sessions", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  status: catStatusEnum("status").notNull().default("in_progress"),
  theta: doublePrecision("theta").notNull().default(0),
  minQuestions: integer("min_questions").notNull().default(15),
  maxQuestions: integer("max_questions").notNull().default(50),
  currentQuestionId: text("current_question_id"),
  askedQuestionIds: jsonb("asked_question_ids").$type<string[]>().notNull().default([]),
  history: jsonb("history").$type<CatHistoryItem[]>().notNull().default([]),
  correctCount: integer("correct_count").notNull().default(0),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  completedAt: timestamp("completed_at", { withTimezone: true }),
}, (t) => [index("cat_sessions_user_idx").on(t.userId)]);

// ---------- Strategies library ----------
export const strategies = pgTable("strategies", {
  id: text("id").primaryKey().$defaultFn(genId),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  summary: text("summary").notNull(),
  content: jsonb("content").$type<string[]>().notNull(),
  example: text("example"),
  icon: text("icon").notNull().default("compass"),
  readTimeMinutes: integer("read_time_minutes").notNull().default(4),
  sortOrder: integer("sort_order").notNull().default(0),
  videoId: text("video_id"),
  videoTitle: text("video_title"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex("strategies_slug_idx").on(t.slug)]);

export const strategyBookmarks = pgTable("strategy_bookmarks", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  strategyId: text("strategy_id").notNull().references(() => strategies.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.strategyId] })]);

// ---------- Learning library (body systems, obstetric anatomy, nursing process) ----------
export const learningTopics = pgTable("learning_topics", {
  id: text("id").primaryKey().$defaultFn(genId),
  slug: text("slug").notNull(),
  title: text("title").notNull(),
  category: text("category").notNull(), // "Body Systems" | "Obstetric & Reproductive" | "Nursing Process"
  icon: text("icon").notNull().default("stethoscope"),
  summary: text("summary").notNull().default(""),
  overview: text("overview").notNull().default(""),
  keyStructures: jsonb("key_structures").$type<string[]>().notNull().default([]),
  normalFindings: jsonb("normal_findings").$type<string[]>().notNull().default([]),
  nursingNotes: jsonb("nursing_notes").$type<string[]>().notNull().default([]),
  redFlags: jsonb("red_flags").$type<string[]>().notNull().default([]),
  commonConditions: jsonb("common_conditions").$type<string[]>().notNull().default([]),
  imageUrl: text("image_url"),
  videoId: text("video_id"),
  videoTitle: text("video_title"),
  videoSource: text("video_source"),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex("learning_topics_slug_idx").on(t.slug)]);

export const learningBookmarks = pgTable("learning_bookmarks", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  topicId: text("topic_id").notNull().references(() => learningTopics.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.topicId] })]);

// ---------- Nursing care plans (student-authored, full CRUD) ----------
export const carePlanStatusEnum = pgEnum("care_plan_status", ["draft", "active", "completed"]);

export const carePlans = pgTable("care_plans", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  clientInfo: text("client_info").notNull().default(""),
  assessment: text("assessment").notNull().default(""),
  nursingDiagnosis: text("nursing_diagnosis").notNull().default(""),
  goals: text("goals").notNull().default(""),
  interventions: jsonb("interventions").$type<{ action: string; rationale: string }[]>().notNull().default([]),
  evaluation: text("evaluation").notNull().default(""),
  status: carePlanStatusEnum("status").notNull().default("draft"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("care_plans_user_idx").on(t.userId)]);

// ---------- Billing ----------
export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  plan: subscriptionPlanEnum("plan").notNull(),
  status: subscriptionStatusEnum("status").notNull().default("active"),
  amountCents: integer("amount_cents").notNull(),
  startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
  currentPeriodEnd: timestamp("current_period_end", { withTimezone: true }),
  canceledAt: timestamp("canceled_at", { withTimezone: true }),
  stripeSubscriptionId: text("stripe_subscription_id"),
  stripeCheckoutSessionId: text("stripe_checkout_session_id"),
  paymentMethod: paymentMethodEnum("payment_method").notNull().default("card"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("subscriptions_user_idx").on(t.userId)]);

export const invoices = pgTable("invoices", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  subscriptionId: text("subscription_id").references(() => subscriptions.id, { onDelete: "set null" }),
  amountCents: integer("amount_cents").notNull(),
  plan: text("plan").notNull(),
  status: text("status").notNull().default("paid"),
  paymentMethod: paymentMethodEnum("payment_method").notNull().default("card"),
  momoNumber: text("momo_number"),
  momoReference: text("momo_reference"),
  issuedAt: timestamp("issued_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("invoices_user_idx").on(t.userId)]);

// ---------- MTN Mobile Money payments awaiting manual admin review ----------
// Since NurseGrid Prep does not yet have MTN's Collections API credentials to
// verify payments automatically, every MoMo "I've paid" submission creates a
// pending request here instead of instantly granting premium. An admin
// reviews it against the actual MoMo transaction history/SMS and approves or
// rejects it; only approval grants premium access.
export const momoPaymentRequests = pgTable("momo_payment_requests", {
  id: text("id").primaryKey().$defaultFn(genId),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  plan: subscriptionPlanEnum("plan").notNull(),
  amountCents: integer("amount_cents").notNull(),
  momoNumber: text("momo_number").notNull(),
  momoReference: text("momo_reference").notNull(),
  status: momoRequestStatusEnum("status").notNull().default("pending"),
  reviewNote: text("review_note"),
  reviewedBy: text("reviewed_by").references(() => users.id, { onDelete: "set null" }),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  subscriptionId: text("subscription_id").references(() => subscriptions.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [
  index("momo_requests_user_idx").on(t.userId),
  index("momo_requests_status_idx").on(t.status),
]);
