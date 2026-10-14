import type { Course, CourseModule, Lesson } from "./types";
import { anatomyPhysiologyI } from "./anatomy-physiology-i";
import { anatomyPhysiologyII } from "./anatomy-physiology-ii";
import { anatomyPhysiologyIII } from "./anatomy-physiology-iii";
import { professionalismI } from "./professionalism-i";
import { professionalismII } from "./professionalism-ii";
import { gerontologyNursing } from "./gerontology-nursing";
import { nutritionAndDietetics } from "./nutrition-and-dietetics";
import { nursingInformatics } from "./nursing-informatics";
import { therapeuticCommunication } from "./therapeutic-communication";
import { behaviouralSciences } from "./behavioural-sciences";
import { tcam } from "./tcam";
import { cardiovascularNursing } from "./cardiovascular";
import { respiratoryNursing } from "./respiratory";
import { renalFluidElectrolyteNursing } from "./renal";
import { endocrineAndDiabetesNursing } from "./endocrine";
import { neurologicalNursing } from "./neurological";
import { gastrointestinalAndHepaticNursing } from "./gastrointestinal";
import { musculoskeletalNursing } from "./musculoskeletal";
import { integumentaryNursing } from "./integumentary";
import { haematologyAndImmunologyNursing } from "./haematology";
import { reproductiveAndObstetricNursing } from "./obstetric";
import { shockEmergencyAndCriticalCareNursing } from "./emergency";
import { pharmacologyAndMedicationCalculations } from "./pharmacology";
import { prioritisationDelegationAndLeadership } from "./leadership";
import { infectionPreventionAndControl } from "./infection-control";
import { paediatricNursingAndImmunisation } from "./paediatric";
import { mentalHealthAndPsychiatricNursing } from "./mental-health";
import { communityAndPublicHealthNursing } from "./community-health";
import { fundamentalsOfNursing } from "./fundamentals";
import { perioperativeAndSurgicalNursing } from "./perioperative";
import { communicableAndTropicalDiseaseNursing } from "./communicable";
import { nursingResearchEvidenceBasedPracticeAndBiostatistics } from "./research";
import { gynaecologicalSexualAndReproductiveHealthNursing } from "./gynaecology";
import { criticalCareAndEmergencyNursingAdvanced } from "./critical-care";
import { nursingProcedureManualCurrentClinicalProcedures } from "./procedures";

export type { Course, CourseModule, Lesson, LessonBlock, LessonQuiz } from "./types";

/** Every published course, in catalogue order. */
export const COURSES: Course[] = [
  anatomyPhysiologyI,
  anatomyPhysiologyII,
  anatomyPhysiologyIII,
  professionalismI,
  professionalismII,
  gerontologyNursing,
  nutritionAndDietetics,
  nursingInformatics,
  therapeuticCommunication,
  behaviouralSciences,
  tcam,
  cardiovascularNursing,
  respiratoryNursing,
  renalFluidElectrolyteNursing,
  endocrineAndDiabetesNursing,
  neurologicalNursing,
  gastrointestinalAndHepaticNursing,
  musculoskeletalNursing,
  integumentaryNursing,
  haematologyAndImmunologyNursing,
  reproductiveAndObstetricNursing,
  shockEmergencyAndCriticalCareNursing,
  pharmacologyAndMedicationCalculations,
  prioritisationDelegationAndLeadership,
  infectionPreventionAndControl,
  paediatricNursingAndImmunisation,
  mentalHealthAndPsychiatricNursing,
  communityAndPublicHealthNursing,
  fundamentalsOfNursing,
  perioperativeAndSurgicalNursing,
  communicableAndTropicalDiseaseNursing,
  nursingResearchEvidenceBasedPracticeAndBiostatistics,
  gynaecologicalSexualAndReproductiveHealthNursing,
  criticalCareAndEmergencyNursingAdvanced,
  nursingProcedureManualCurrentClinicalProcedures,
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export type FlatLesson = {
  lesson: Lesson;
  module: CourseModule;
  /** 1-based position across the whole course. */
  index: number;
  /** "1.2" style label (module.lesson). */
  label: string;
};

/** Lessons in course order with their module and position. */
export function flattenLessons(course: Course): FlatLesson[] {
  const out: FlatLesson[] = [];
  let index = 0;
  course.modules.forEach((module, m) => {
    module.lessons.forEach((lesson, l) => {
      index += 1;
      out.push({ lesson, module, index, label: `${m + 1}.${l + 1}` });
    });
  });
  return out;
}

export function getLesson(course: Course, lessonSlug: string): FlatLesson | undefined {
  return flattenLessons(course).find((f) => f.lesson.slug === lessonSlug);
}

/** The first lesson of every course is free; everything after it is Premium. */
export function isLessonFree(course: Course, lessonSlug: string): boolean {
  const first = flattenLessons(course)[0];
  return first?.lesson.slug === lessonSlug;
}

export function courseMinutes(course: Course): number {
  return flattenLessons(course).reduce((sum, f) => sum + f.lesson.minutes, 0);
}

/** Keywords for the course post-test pool: every lesson's keywords plus the course extras. */
export function courseKeywords(course: Course): string[] {
  const set = new Set<string>();
  for (const f of flattenLessons(course)) f.lesson.quiz.keywords.forEach((k) => set.add(k.toLowerCase()));
  (course.postTest.extraKeywords ?? []).forEach((k) => set.add(k.toLowerCase()));
  return [...set];
}

// ---------------------------------------------------------------------------
// Learning-activity model (the ordered list shown on the course details page)
// ---------------------------------------------------------------------------

export type ActivityKind = "lesson" | "post-test" | "evaluation" | "certificate";

export type CourseActivity = {
  /** Stable identifier stored in course_activity_progress.activity_slug. */
  slug: string;
  kind: ActivityKind;
  title: string;
  subtitle: string;
  minutes: number;
  /** Set for lesson activities only. */
  lesson?: FlatLesson;
};

export const POST_TEST_ACTIVITY = "post-test";
export const EVALUATION_ACTIVITY = "evaluation";
export const CERTIFICATE_ACTIVITY = "certificate";

/** Marker written into exam_sessions.categorySlugs so post-tests can be found later. */
export function postTestMarker(courseSlug: string): string {
  return `course:${courseSlug}`;
}

export function courseActivities(course: Course): CourseActivity[] {
  const lessons = flattenLessons(course).map<CourseActivity>((f) => ({
    slug: f.lesson.slug,
    kind: "lesson",
    title: `${f.label} ${f.lesson.title}`,
    subtitle: f.module.title,
    minutes: f.lesson.minutes,
    lesson: f,
  }));
  return [
    ...lessons,
    {
      slug: POST_TEST_ACTIVITY,
      kind: "post-test",
      title: course.postTest.title,
      subtitle: `${course.postTest.questionCount} questions · pass mark ${course.postTest.passMark}% · up to ${course.postTest.maxAttemptsPer24h} attempts per 24 hours`,
      minutes: Math.round(course.postTest.questionCount * 1.2),
    },
    {
      slug: EVALUATION_ACTIVITY,
      kind: "evaluation",
      title: course.evaluation.title,
      subtitle: "Required before your certificate is issued",
      minutes: 1,
    },
    {
      slug: CERTIFICATE_ACTIVITY,
      kind: "certificate",
      title: "Certificate of Completion",
      subtitle: `${course.creditHours} contact hours · added to your transcript`,
      minutes: 0,
    },
  ];
}
