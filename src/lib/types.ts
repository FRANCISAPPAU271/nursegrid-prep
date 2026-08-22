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

export type LearningTopicSummary = {
  id: string;
  slug: string;
  title: string;
  category: string;
  icon: string;
  summary: string;
  imageUrl: string | null;
  videoId: string | null;
  sortOrder: number;
  isBookmarked: boolean;
};

export type LearningTopicDetail = LearningTopicSummary & {
  overview: string;
  keyStructures: string[];
  normalFindings: string[];
  nursingNotes: string[];
  redFlags: string[];
  commonConditions: string[];
  videoTitle: string | null;
  videoSource: string | null;
};

export type CarePlanIntervention = { action: string; rationale: string };

export type CarePlanStatus = "draft" | "active" | "completed";

export type CarePlan = {
  id: string;
  title: string;
  clientInfo: string;
  assessment: string;
  nursingDiagnosis: string;
  goals: string;
  interventions: CarePlanIntervention[];
  evaluation: string;
  status: CarePlanStatus;
  createdAt: string;
  updatedAt: string;
};

// ---------- Custom exams ----------
export type ExamListItem = {
  id: string;
  title: string;
  categorySlugs: string[];
  totalQuestions: number;
  correctCount: number;
  status: "in_progress" | "completed";
  startedAt: string;
  completedAt: string | null;
};

export type ExamQuestion = {
  id: string;
  categoryId: string;
  categoryName: string;
  stem: string;
  choices: QuestionChoice[];
  difficulty: "easy" | "medium" | "hard";
};

export type ExamReviewQuestion = ExamQuestion & {
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  selectedChoiceId: string | null;
  isCorrect: boolean;
};

// ---------- CAT (computerized adaptive testing) practice ----------
export type CatStatus = "in_progress" | "passed" | "failed" | "max_length";

export type CatListItem = {
  id: string;
  status: CatStatus;
  correctCount: number;
  questionsAnswered: number;
  minQuestions: number;
  maxQuestions: number;
  startedAt: string;
  completedAt: string | null;
};

export type CatQuestion = {
  id: string;
  categoryName: string;
  stem: string;
  choices: QuestionChoice[];
  difficulty: "easy" | "medium" | "hard";
};

export type CatHistoryEntry = {
  questionId: string;
  categoryId: string;
  categoryName: string;
  stem: string;
  choices: QuestionChoice[];
  correctChoiceId: string;
  selectedChoiceId: string;
  isCorrect: boolean;
  rationale: string;
  strategy: string;
  difficulty: "easy" | "medium" | "hard";
  thetaAfter: number;
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
