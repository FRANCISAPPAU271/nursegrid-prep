import type { CourseModule } from "../types";

export const lawForNurses: CourseModule = {
  slug: "law-for-nurses",
  title: "Law for nurses",
  summary:
    "Ghana law at the bedside: the 7 Acts every nurse must know (licensing, mental health, children, domestic violence, whistleblowing, data protection, criminal offences), deaths and police cases — then civil versus criminal courts, giving evidence with statements and inquests, and the five-rung concern ladder with retaliation protection and social-media law.",
  lessons: [
    {
      slug: "ghana-health-law-essentials",
      title: "Ghana health law essentials",
      minutes: 20,
      objectives: [
        "Name the 7 key Acts and each one's bedside meaning.",
        "Apply detention, reporting and data rules correctly.",
        "Handle deaths, coroners and police cases lawfully.",
        "Link every Act to Modules 02–05 duties.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Sources of law, then your licence",
          paragraphs: [
            "Ghana law flows: <strong>Constitution (1992)</strong> (supreme — rights in Chapter 5 anchor Modules 02/04) → <strong>Acts of Parliament</strong> (this lesson's seven) → <strong>Legislative Instruments/regulations</strong> (NMC LIs detail licensing, exams, discipline) → <strong>common law + equity</strong> (judge-made negligence rules — Module 03's duty/breach/causation/damage) → <strong>customary law</strong> (family/consent contexts — yields where statute or rights conflict). <strong>Act 857 (2013), Health Professions Regulatory Bodies</strong>: establishes the <strong>NMC</strong> — registration, licensing exams, PIN renewals, CPD, Code enforcement, disciplinary tribunal. Practising <strong>unregistered, unlicensed or expired</strong> is an offence (prosecution + tribunal); students practise only under supervision within scope; 'nurse' title misuse misleads the public and offends. Module 03's accountability ladder (employer → civil → NMC → criminal) is powered by this Act — the tribunal's erase/suspend powers sit in its sections. Renew early, CPD honestly, scope strictly: the Act protects the public FROM practitioners, not practitioners from consequences.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0011.svg",
          alt: "Seven Ghana Acts: Act 857 licensing and NMC discipline; Act 846 mental health detention with tribunal review and restraint last resort; Act 560 Children's Act and Act 732 Domestic Violence with DOVVSU reporting and injury documentation; Act 720 whistleblower protection; Act 843 data protection for health data; Criminal Offences Act bedside crimes plus Patients' Charter; deaths needing coroner post-mortem without family consent; police cases with evidence preservation.",
          caption: "Seven Acts, one bedside: licence, liberty, children, safety, speech, data, death.",
        },
        {
          type: "text",
          heading: "Liberty, children, safety, data",
          paragraphs: [
            "<strong>Act 846 (2012), Mental Health</strong>: treatment needs consent; <strong>involuntary admission</strong> requires prescribed certification (two medical recommendations + tribunal review) for danger/neglect grounds — nurses never 'detain by locked door' informally; restraint is <strong>last resort, prescribed, least-restrictive, time-limited, documented + reviewed</strong> (Module 04 capacity rules apply doubly). <strong>Act 560 (1998), Children's Act</strong> + <strong>Act 732 (2007), Domestic Violence</strong>: suspected abuse/neglect/defilement/trafficking/DV → <strong>report to DOVVSU + Social Welfare</strong> (Module 04's mandatory break), document injuries (body map, verbatim quotes, photos per protocol), treat + refer medically, never 'mediate' the family out of prosecution — protection overrides consent here. <strong>Act 843 (2012), Data Protection</strong>: health data is <strong>sensitive personal data</strong> — process lawfully, minimally, securely; breaches notify the Commission + subjects; fines + prosecution attach — Module 04's locks and Module 05's access-log warnings are statutory duties, not courtesy. <strong>Criminal Offences Act (1960)</strong>: touching without consent = <strong>assault/battery</strong>; abortion lawful only on legal grounds (rape/defilement/incest, maternal risk, foetal abnormality — certified); falsifying records, stealing drugs, abandoning patients prosecute criminally.",
          ],
        },
        {
          type: "text",
          heading: "Deaths and police cases",
          paragraphs: [
            "Nurses certify NOTHING about cause — <strong>doctors certify death/cause</strong>; nurses document time found, observations, resuscitation, notifications. <strong>Coroner-reportable</strong>: sudden/unnatural/unexplained, operative/anaesthetic, maternal, infant, custody, occupational, unidentified, or no-doctor-attended deaths → inform doctor + in-charge + police per protocol; <strong>coroner-ordered post-mortems need NO family consent</strong> (explain kindly: 'the law requires answers'); never release such bodies against advice. <strong>Police cases</strong> (assault, RTA, poisoning, sexual offences, DOVVSU): <strong>treat first, preserve always</strong> — bag + label clothing, don't wash evidence, document verbatim ('he said…'), body-map injuries, chain-of-custody receipts for handovers; statements via in-charge/lawyer (next lesson). Organ/tissue requests: statute + documented consent only. Religious objections to post-mortem: empathize, escalate to doctor/coroner — explain the law decides, kindness delivers.",
          ],
        },
        {
          type: "table",
          heading: "Act to bedside: quick links",
          columns: ["Act", "Bedside trigger", "Your duty"],
          rows: [
            ["857 (licensing)", "Expired PIN, student unsupervised, title misuse", "Renew early, supervise + countersign, report unlicensed practice"],
            ["846 (mental health)", "Agitated patient, family wants 'lock him up'", "Least-restrictive care, certified process only, prescribed restraint + review"],
            ["560/732 (children/DV)", "Bruised child, battered woman, 'don't tell'", "Treat + document + report DOVVSU/Welfare; protection beats secrecy"],
            ["720 (whistleblower)", "Faulty oxygen, diverted drugs, cover-up", "Climb the ladder in writing; retaliation is unlawful (next lesson)"],
            ["843 (data)", "Relative demands records, phone photos, lost file", "Consent/role-gated access, lock + log, breach-notify per policy"],
            ["Criminal Offences", "Refused touch, police-case injuries, drug theft", "Consent or statutory ground, preserve evidence, report crimes"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The Act-number habit",
          body: "Examiners and tribunals love numbers: 857 (licence), 846 (mental), 560 (children), 732 (DV), 720 (whistle), 843 (data). Memorize as pairs: 857 guards your PIN, 846 guards liberty, 560+732 guard the vulnerable, 720 guards your voice, 843 guards data. Cite the number in incident forms, concern letters and exam answers — 'per the Children's Act, 1998 (Act 560)' persuades where 'the law says' merely gestures. Law quoted precisely is law obeyed visibly.",
        },
      ],
      keyPoints: [
        "Hierarchy: Constitution → Acts → LIs → common law → customary; Act 857 powers NMC licensing + tribunal.",
        "Act 846: certified involuntary process only; restraint last-resort, prescribed, reviewed.",
        "Acts 560/732: abuse/DV → treat + document + report DOVVSU/Welfare; protection overrides consent.",
        "Act 843: health data sensitive — lawful/minimal/secure, breach-notify; Module 04 locks are statutory.",
        "Doctors certify death; coroner cases need no family consent; police cases: treat first, preserve always.",
        "Memorize Act numbers in pairs; cite precisely in forms, letters and exams.",
      ],
      quiz: {
        keywords: ["Act 857", "NMC", "licensing", "Act 846", "mental health", "detention", "restraint", "Act 560", "Act 732", "DOVVSU", "Act 843", "data protection", "coroner", "police cases", "evidence", "constitution"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "courts-evidence-and-whistleblowing",
      title: "Courts, evidence and whistleblowing",
      minutes: 20,
      objectives: [
        "Distinguish civil, criminal, coroner and tribunal tracks.",
        "Give statements and court evidence professionally.",
        "Climb the five-rung concern ladder with Act 720 protection.",
        "Stay lawful on social media and after retaliation.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four tracks, different tests",
          paragraphs: [
            "<strong>Civil</strong> (patient/family sues): negligence's four elements (Module 03) on <strong>balance of probabilities</strong>; remedy = <strong>damages</strong>; employers often <strong>vicariously liable</strong> (but indemnity isn't immunity — NMC still bites); records are exhibit A. <strong>Criminal</strong> (State prosecutes): assault, manslaughter, unlawful abortion, unlicensed practice, record falsification, drug theft — <strong>beyond reasonable doubt</strong>; penalties = <strong>fines/imprisonment</strong>; police → Attorney-General → court. <strong>Coroner</strong> (fact-finding, not fault-finding): who/when/where/how died in reportable deaths; nurses assist with records + testimony; recommendations prevent repeats. <strong>NMC tribunal</strong> (Module 03): fitness-to-practise on professional standards — can <strong>strike off after a court acquittal</strong> (different tests, different purposes) and vice versa. One drug error can thus run ALL FOUR tracks simultaneously: civil claim, criminal charge (if reckless), coroner (if death), tribunal (always possible) — which is why Modules 03–05 (scope, records, handover, incident chain) are survival skills, not theory.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0012.svg",
          alt: "Civil versus criminal: compensation on balance of probabilities with vicarious liability versus punishment beyond reasonable doubt by the State. Giving evidence: factual statements with copies, subpoena attendance, bench demeanour, truth over guessing, coroner assistance, discipline independent of courts. Concern ladder: in-charge, management, regulators, police, media last with lawyer; Act 720 makes victimisation unlawful; report retaliation; support plus report impaired colleagues; no patient data or defamation on social media.",
          caption: "Four tracks, honest evidence, and a ladder climbed in writing — protected at every rung.",
        },
        {
          type: "text",
          heading: "Giving evidence without fear or favour",
          paragraphs: [
            "<strong>Statements</strong>: write with in-charge/lawyer support — <strong>facts only</strong> (what you saw/heard/did, times, verbatim quotes), no opinions ('negligent'), no speculation; <strong>keep a copy</strong>; sign + date. <strong>Subpoena</strong>: a court order — <strong>attend</strong> (notify employer, arrange cover); refresh memory from <strong>your own notes</strong> beforehand (courts permit); claim fees per rules. <strong>In court</strong>: address the bench ('My Lord/Lady' or 'Your Honour' per court), dress professionally, <strong>truth even when ugly</strong> ('I don't recall' beats guessing; 'I made an error' beats perjury), no jargon, no arguing with cross-examination (answer, don't spar). <strong>Inquests</strong>: assist fact-finding (timeline, records, lessons) — defensive nurses look guilty; open ones look professional. <strong>Media</strong>: 'no comment, matter before court/tribunal' — never litigate in press or posts. After proceedings: reflect, remediate (training, supervision), return — one case need not define a career; cover-ups do.",
          ],
        },
        {
          type: "text",
          heading: "The concern ladder (Act 720)",
          paragraphs: [
            "<strong>Whistleblower Act, 2006 (Act 720)</strong> protects disclosures about danger, illegality, corruption, miscarriages of justice — made internally or to prescribed bodies. Climb in order, <strong>in writing, keeping copies</strong>: <strong>Rung 1 — in-charge</strong> (verbal + written: danger, short-staffing, faulty equipment, bullying); <strong>Rung 2 — management/CEO</strong> (written, copied: no action, repeated harm, cover-up pressure); <strong>Rung 3 — regulators</strong> (NMC, HeFRA, Data Protection Commission, CHRAJ: unlicensed practice, systemic danger, breaches); <strong>Rung 4 — police/DOVVSU</strong> (crimes: assault, theft, falsification, abuse — preserve evidence); <strong>Rung 5 — media, LAST with lawyer first</strong> (public danger + rungs exhausted + public interest). <strong>Victimisation</strong> for protected disclosures (dismissal, demotion, transfer, threats, failed references) is <strong>unlawful</strong> — report retaliation to CHRAJ/NMC; union + legal aid support. <strong>Impaired colleague</strong> (substance use, diversion, unsafe illness): support + report (patients first, Module 03) — covering makes you party to the next harm. Anonymous where policy allows, but signed disclosures carry weight. And <strong>social media</strong>: no patient images/details, no workplace defamation, no ward identifiers — truth + public interest defend; viral carelessness ends careers.",
          ],
        },
        {
          type: "table",
          heading: "Concern scenarios: which rung first?",
          columns: ["Scenario", "First rung", "Notes"],
          rows: [
            ["Only 2 nurses for 40 acute patients, night shift", "Rung 1 → 2 same shift (written)", "Module 05: written escalation + visible prioritizing + document deferred care"],
            ["Oxygen manifold faulty, engineer 'too busy'", "Rung 1 (written) → 2 within hours", "Imminent danger shortens patience — lives beat hierarchy"],
            ["Senior nurse diverting pethidine, juniors threatened", "Rung 2/4 (crime + cover-up)", "Preserve evidence, don't confront alone; patients + juniors need protection now"],
            ["Colleague practising with 3-year-expired PIN", "Rung 1 → 3 (NMC)", "Act 857 offence; patients treated unlawfully; report kindly but firmly"],
            ["Manager buries fall incidents, 'no forms this month'", "Rung 2 → 3 (HeFRA/NMC)", "Suppressed learning kills future patients; keep your own dated copies"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Defamation: the ladder's guardrail",
          body: "Raising concerns lawfully protects you; spreading false claims destroys you. Defamation (written libel counts) needs only: published false statement harming reputation — damages follow. So: report FACTS through proper channels (privileged), never conclusions on WhatsApp ward groups ('thief', 'killer', 'fake nurse'); never patient data anywhere public; media only with lawyer + evidence + exhausted rungs. The nurse who wrote careful dated facts to CHRAJ is a protected whistleblower; the nurse who posted ward accusations on TikTok is a defendant. Same concern, opposite fates — the channel is the shield.",
        },
      ],
      keyPoints: [
        "Four tracks: civil (damages, probabilities), criminal (punishment, beyond doubt), coroner (facts), tribunal (fitness).",
        "One error can run all four — Modules 03–05 are survival skills.",
        "Evidence: factual statements with copies, attend subpoenas, truth over guessing, assist inquests.",
        "Ladder: in-charge → management → regulators → police → media-last; written, copied, in order.",
        "Act 720: victimisation unlawful — report retaliation; support + report impaired colleagues.",
        "Defamation guardrail: facts via channels (privileged), never accusations on social media.",
      ],
      quiz: {
        keywords: ["civil", "criminal", "coroner", "tribunal", "evidence", "statement", "subpoena", "inquest", "whistleblower", "Act 720", "CHRAJ", "retaliation", "defamation", "social media", "vicarious"],
        categories: ["fundamentals"],
      },
    },
  ],
};
