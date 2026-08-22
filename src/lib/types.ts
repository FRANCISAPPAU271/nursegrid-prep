export type TaskCategory = "clinical" | "assignment" | "study" | "exam" | "skills_lab" | "personal";
export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export type Task = {
  id: string;
  title: string;
  description: string | null;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  tag: string;
  pinned: boolean;
  createdAt: string;
  updatedAt: string;
};

export type QuestionChoice = { id: string; text: string };

export type QuestionCategorySummary = {
  id: string;
  slug: string;
  name: string;
  description: string;
  clientNeed: string;
  icon: string;
  sortOrder: number;
  totalQuestions: number;
  freeQuestions: number;
  attempted: number;
  correct: number;
};

export type QuestionPreview = {
  id: string;
  categoryId: string;
  stem: string;
  choices: QuestionChoice[];
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
  isFree: boolean;
  isBookmarked: boolean;
};

export type AttemptResult = {
  isCorrect: boolean;
  correctChoiceId: string;
  rationale: string;
  strategy: string;
};

export type Strategy = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  content: string[];
  example: string | null;
  icon: string;
  readTimeMinutes: number;
  sortOrder: number;
  isBookmarked: boolean;
};

export type PaymentMethod = "card" | "mtn_momo";

export type Subscription = {
  id: string;
  userId: string;
  plan: "monthly" | "quarterly" | "annual" | "lifetime" | "four_month";
  status: "active" | "canceled" | "expired";
  amountCents: number;
  startedAt: string;
  currentPeriodEnd: string | null;
  canceledAt: string | null;
  paymentMethod: PaymentMethod;
  createdAt: string;
};

export type Invoice = {
  id: string;
  userId: string;
  subscriptionId: string | null;
  amountCents: number;
  plan: string;
  status: string;
  paymentMethod: PaymentMethod;
  momoNumber: string | null;
  momoReference: string | null;
  issuedAt: string;
};
