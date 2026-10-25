// ---------------------------------------------------------------------------
// Course content model.
//
// Courses are authored in code (one file per course under src/content/courses)
// so every lesson is version-controlled, reviewed in a pull request and
// deployed exactly like the question bank. Only *progress* (enrolment,
// activity completion, post-test sessions, evaluations, certificates) lives
// in the database. Nothing here references the database schema.
//
// The learner experience follows the learning-centre pattern used by
// hospital education departments: enrol → work through the learning
// activities strictly in order → post-test with a pass mark and limited
// attempts → course evaluation → certificate and transcript entry.
// ---------------------------------------------------------------------------

export type LessonBlock =
  | { type: "text"; heading?: string; paragraphs: string[] }
  | { type: "list"; heading?: string; items: string[]; style?: "bullets" | "steps" }
  | { type: "table"; heading?: string; columns: string[]; rows: string[][] }
  | { type: "callout"; tone: "tip" | "warning" | "exam"; title: string; body: string }
  | { type: "diagram"; src: string; alt: string; caption?: string };

export type LessonQuiz = {
  /** Keywords matched against question tags and stems (case-insensitive). */
  keywords: string[];
  /** Optional question-category slugs to restrict the search to. */
  categories?: string[];
  /** Optional authored question IDs directly mapped to this lesson. */
  questionIds?: string[];
};

export type Lesson = {
  slug: string;
  title: string;
  /** Estimated reading time in minutes. */
  minutes: number;
  /** "By the end of this lesson you will be able to…" */
  objectives: string[];
  blocks: LessonBlock[];
  keyPoints: string[];
  /** Keywords used to build the lesson's practice set and the course post-test pool. */
  quiz: LessonQuiz;
};

export type CourseModule = {
  slug: string;
  title: string;
  summary: string;
  lessons: Lesson[];
};

export type PostTestSettings = {
  title: string;
  description: string;
  /** Number of questions drawn at random from the course question pool. */
  questionCount: number;
  /** Pass mark as a percentage (0–100). */
  passMark: number;
  /** Maximum number of attempts allowed in any rolling 24-hour window. */
  maxAttemptsPer24h: number;
  /** Extra keywords (beyond the lesson keywords) that widen the question pool. */
  extraKeywords?: string[];
};

export type EvaluationItem = {
  id: string;
  prompt: string;
};

export type EvaluationSettings = {
  title: string;
  description: string;
  /** Likert items rated 1 (strongly disagree) – 5 (strongly agree). */
  items: EvaluationItem[];
  commentPrompt: string;
};

/**
 * One entry in a course glossary.
 *
 * Glossaries are course-level reference material, not graded activities: they
 * are not enrolled-shaped, do not gate progress and never appear in the
 * activity list. They exist so a learner can look up "Somogyi effect" without
 * hunting back through seven lessons.
 */
export type GlossaryEntry = {
  /** The headword, as the learner would search for it. */
  term: string;
  /** One or two sentences. Written to be understood on its own. */
  definition: string;
  /** Slug of the lesson that teaches it, so the page can link back. */
  lesson?: string;
  /** Spellings, abbreviations and synonyms the search should also match. */
  alsoKnownAs?: string[];
};

export type Course = {
  slug: string;
  title: string;
  /** Short code shown on the transcript and certificate, e.g. "NGP-CVN-101". */
  code: string;
  tagline: string;
  description: string;
  icon: string;
  level: "Foundation" | "Intermediate" | "Advanced";
  /** Tailwind gradient classes for the cover. */
  gradient: string;
  /** Continuing-education style credit printed on the certificate. */
  creditHours: number;
  /** Days allowed to finish after enrolling before the course shows as overdue. */
  dueInDays: number;
  outcomes: string[];
  audience: string[];
  modules: CourseModule[];
  postTest: PostTestSettings;
  evaluation: EvaluationSettings;
  /**
   * Optional course glossary. Courses that do not carry one simply do not show
   * the link — the page 404s rather than rendering an empty shell.
   */
  glossary?: GlossaryEntry[];
};
