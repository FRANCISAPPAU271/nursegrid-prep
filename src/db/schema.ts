import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
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
]);
export const paymentMethodEnum = pgEnum("payment_method", ["card", "mtn_momo"]);

// ---------- Auth ----------
export const users = pgTable("users", {
  id: text("id").primaryKey().$defaultFn(genId),
  name: text("name").notNull(),
  email: text("email").notNull(),
  passwordHash: text("password_hash").notNull(),
  school: text("school"),
  cohort: text("cohort"),
  isPremium: boolean("is_premium").notNull().default(false),
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
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [index("sessions_user_idx").on(t.userId)]);

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
}, (t) => [index("tasks_user_idx").on(t.userId)]);

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
}, (t) => [index("notes_user_idx").on(t.userId)]);

// ---------- NCLEX Question bank ----------
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
]);

export const questionBookmarks = pgTable("question_bookmarks", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  questionId: text("question_id").notNull().references(() => questions.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.questionId] })]);

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
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [uniqueIndex("strategies_slug_idx").on(t.slug)]);

export const strategyBookmarks = pgTable("strategy_bookmarks", {
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  strategyId: text("strategy_id").notNull().references(() => strategies.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
}, (t) => [primaryKey({ columns: [t.userId, t.strategyId] })]);

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
