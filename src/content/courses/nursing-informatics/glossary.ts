import type { GlossaryEntry } from "../types";

// Glossary — authored against this course's own lessons.

export const glossary: GlossaryEntry[] = [
  {
    term: "Access control",
    definition:
      "Restricting a record to the people who need it for the patient's care. Curiosity is not a clinical need, and looking at a record one should not see is a disciplinary matter regardless of motive.",
    lesson: "confidentiality-in-the-digital-ward",
  },
  {
    term: "Alert fatigue",
    definition:
      "The desensitisation that follows too many warnings, so that the nurse clicks past the one that mattered. Systems are judged by the proportion of alerts that are genuinely actionable, not by how many they generate.",
    lesson: "alerts-reminders-and-barcoding",
  },
  {
    term: "Algorithmic bias",
    definition:
      "Systematic error in a model's output that disadvantages a group, usually because the data it learned from under-represented them. A tool that is accurate on average can be unsafe for the patients least represented in its training.",
    lesson: "ai-equity-and-leading-change",
  },
  {
    term: "Barcode medication administration",
    definition:
      "Scanning the patient's wristband and the medication before administration so the system confirms they match. It catches the wrong patient and the wrong drug at the point where the error would otherwise happen.",
    lesson: "alerts-reminders-and-barcoding",
  },
  {
    term: "Clinical decision support",
    definition:
      "Prompts, alerts and reminders built into the record to guide prescribing and care. Its power is also its weakness, because an alert that fires too often is an alert that is ignored.",
    lesson: "alerts-reminders-and-barcoding",
  },
  {
    term: "Computerised provider order entry",
    definition:
      "Doctors and prescribers entering orders directly into the system rather than onto paper for someone to transcribe. It removes the transcription error, and it introduces the wrong-patient selection error.",
    lesson: "orders-downtime-and-handover",
  },
  {
    term: "Digital divide",
    definition:
      "The gap between those who can use digital health services and those who cannot, by geography, income, literacy, language or disability. A digital service that excludes the people who most need care widens the inequality it was meant to close.",
    lesson: "ai-equity-and-leading-change",
  },
  {
    term: "Digital health",
    definition:
      "Using information and communication technology across the health system — records, registries, telehealth, supply and reporting. In Ghana it is unevenly distributed, so the nurse works with both the digital and the paper system at once.",
    lesson: "ghanas-digital-health-landscape",
  },
  {
    term: "Digital professionalism",
    definition:
      "The same professional standards applied online, where the audience is permanent, public and not the one intended. The test is not whether the post is private, but whether it would survive being read by the patient.",
    lesson: "social-media-and-the-nurses-reputation",
  },
  {
    term: "Downtime procedure",
    definition:
      "The agreed plan for documenting and ordering care when the system is unavailable. It must be known before it is needed, because the moment the system goes down is not the moment to look for the procedure.",
    lesson: "orders-downtime-and-handover",
  },
  {
    term: "Electronic health record",
    definition:
      "A digital record of a patient's care, shared across a facility or a system, replacing the paper folder. Its advantage is legibility and availability; its risk is that a record can be copied forward without being re-examined.",
    lesson: "charting-in-the-ehr",
  },
  {
    term: "Evidence hierarchy",
    definition:
      "An ordering of study designs by how well they resist bias, with systematic reviews at the top and expert opinion near the bottom. It guides where to look first, not what to believe without appraisal.",
    lesson: "finding-and-judging-evidence",
  },
  {
    term: "Interoperability",
    definition:
      "The ability of different systems to exchange and use each other's data. Its absence is why a patient's results exist somewhere but not where the nurse is standing.",
    lesson: "informatics-capstone-scenarios",
  },
  {
    term: "mHealth",
    definition:
      "Health services and support delivered through mobile devices, widely used in Ghana for reminders, results and community follow-up. Its reach depends on coverage and data cost, which is an equity question, not only a technical one.",
    lesson: "telehealth-and-mhealth",
  },
  {
    term: "Nurses' pledge",
    definition:
      "The professional declaration of the standards a nurse commits to at registration. It is a public undertaking about conduct and duty, which is why the profession holds its members to it rather than treating it as a ceremony.",
    lesson: "projects-exam-prep-and-pledge",
  },
  {
    term: "Nursing informatics",
    definition:
      "The use of information, data and technology to support nursing practice, decision-making and the flow of information to the patient. Its focus is the nurse's work and the patient's safety, not the software.",
    lesson: "what-nursing-informatics-is",
  },
  {
    term: "Phishing",
    definition:
      "A message that impersonates someone trustworthy to extract a password or install malicious software. It is how most health system breaches begin, which is why it is a clinical safety issue rather than an IT one.",
    lesson: "passwords-devices-and-incident-response",
  },
  {
    term: "Run chart",
    definition:
      "A graph of a measure over time with a median line, used to see whether a change produced real improvement or ordinary variation. It is the basic tool for judging a quality improvement without over-reading noise.",
    lesson: "dashboards-run-charts-and-qi-data",
  },
  {
    term: "Social media policy",
    definition:
      "The rules governing what a health worker may post, which begin with the absolute prohibition on patient information. A photograph, a ward name or a recognisable detail is an identifiable patient record even without a name.",
    lesson: "social-media-and-the-nurses-reputation",
  },
  {
    term: "Telehealth",
    definition:
      "Delivering care at a distance by phone, video or messaging. It widens access, and it makes assessment harder, so the nurse has to be more deliberate about what cannot be judged remotely.",
    lesson: "telehealth-and-mhealth",
  },
];
