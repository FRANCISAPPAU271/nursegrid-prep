import type { CourseModule } from "../types";

export const patientsRightsAndAdvocacy: CourseModule = {
  slug: "patients-rights-and-advocacy",
  title: "Patients' rights, confidentiality and advocacy",
  summary:
    "The patient's side of the bed: the Ghana patients' charter with eight rights and six responsibilities, dignity in daily details from curtains to interpreters, and the complaint ladder that turns grievances into learning — then confidentiality by traffic lights (keep, share, break) with the mandatory breaks for children and danger, practical locks with the breach drill, and advocacy for the voiceless with safeguarding referrals.",
  lessons: [
    {
      slug: "patients-rights-and-dignity",
      title: "Patients' rights and dignity",
      minutes: 20,
      objectives: [
        "State the charter's eight rights and six responsibilities.",
        "Practise dignity: privacy, modesty, culture, language, dying.",
        "Run the complaint ladder from ward to NMC.",
        "Balance rights with safety where patients are violent.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The charter: eight rights on the OPD wall",
          paragraphs: [
            "Ghana's <strong>patients' charter</strong> (posted in every facility — read it, quote it, teach it) grants: <strong>1. care without discrimination</strong> (tribe, wealth, status, illness, disability — Module 02's justice at work); <strong>2. dignity, privacy and modesty</strong>; <strong>3. information + informed consent</strong> (diagnosis, options, costs, risks — including the right to know the bill before treatment); <strong>4. confidentiality</strong> (next lesson's traffic lights); <strong>5. refusal, second opinion and discharge against advice</strong> (documented, with consequences explained, care continued as far as accepted); <strong>6. pain relief, comfort, food and hygiene</strong>; <strong>7. complaint without punishment</strong>; <strong>8. next-of-kin contact, visitors and faith practice</strong>. Rights are not favours: the prisoner, the psychiatric patient, the uninsured emergency, the 'difficult' relative all hold them equally — and the nurse is their bedside guarantor when systems forget.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0007.svg",
          alt: "Patients' charter. Rights: non-discriminatory care; dignity, privacy, modesty; information plus informed consent; confidentiality; refusal, second opinion, discharge against advice; pain relief, comfort, food; complaint without punishment; next-of-kin, visitors, faith. Responsibilities: honest history, NHIS card, fees; follow agreed treatment or say why; respect staff, patients, rules; keep or cancel appointments; handle property with care, no violence; ask questions. Complaint ladder: ward in-charge now, facility management/QA, NMC/GHS/courts. Footer: dignity details, complaints as gifts, no retaliation, violent patients managed and still treated.",
          caption: "Eight rights the patient holds, six duties they owe — and complaints as gifts, never threats.",
        },
        {
          type: "text",
          heading: "Dignity in the details",
          paragraphs: [
            "Dignity lives in small acts: <strong>curtains fully drawn + gowns tied + exposure minimum</strong> (uncover only what's examined, recover immediately), <strong>chaperones</strong> offered every intimate exam (Module 02, A&P III), <strong>names and preferences</strong> used ('Maame Adwoa', not 'the diabetic in bed 4'), <strong>knocking + explaining + asking</strong> before touching, <strong>language interpreted</strong> professionally (never children for bad news — book interpreters, brief them, debrief them), <strong>culture and faith accommodated</strong> (prayer times, diet, fasting, birth/death rites, traditional leaders' visits — negotiate where safety collides, never mock), <strong>disability adapted</strong> (hearing loops, large print, step-free routes, extra time), <strong>elders unhurried</strong> (no shouting, no rushing, continence before catheters), <strong>dying undisturbed</strong> (family present, symptoms controlled, body handled reverently after). Audit yourself: would I accept this for my mother? If not, change it before the complaint teaches you.",
          ],
        },
        {
          type: "text",
          heading: "Responsibilities and the complaint ladder",
          paragraphs: [
            "Patients owe: <strong>honest history + NHIS card + fees</strong> (exact pricing visible before care — the billing desk's duty, the nurse's advocacy where costs block treatment); <strong>following agreed treatment</strong> (or saying why promptly — side effects, costs, beliefs — so plans adapt); <strong>respecting staff, patients and rules</strong> (visiting hours, noise, phones, smoking bans); <strong>keeping or cancelling appointments</strong>; <strong>handling property carefully</strong>; and <strong>asking questions</strong> (silence is not consent). Teach responsibilities at admission kindly — they enable care, never condition emergency treatment. <strong>Complaints</strong>: receive at the ward FIRST (in-charge now — listen fully, apologize for the experience sincerely, fix what's fixable today), escalate to <strong>facility management/quality assurance</strong> where unresolved, then <strong>NMC/GHS/courts</strong> for misconduct or harm. Document complaint + response + outcome; feed learning into handover and audit. <strong>Retaliation</strong> (delayed care, rudeness, discharge threats) is misconduct — chargeable. And <strong>violent/abusive patients</strong>: de-escalate, set boundaries, involve security/police where needed, document — AND still treat: safety measures restrict behaviour, never withdraw emergency care.",
          ],
        },
        {
          type: "table",
          heading: "Rights in hard cases",
          columns: ["Case", "Rights in play", "Professional response"],
          rows: [
            ["Prisoner in handcuffs needs examination", "Dignity + privacy + equal care", "Examine privately (officers outside curtain unless risk-assessed), same thoroughness, cuffs off where safe + documented"],
            ["Psychiatric patient refuses food/fronts aggression", "Autonomy + dignity + safety of all", "Capacity assessed, least-restrictive (choices, de-escalation, observation), restraint only ordered + reviewed + documented"],
            ["Uninsured emergency, family fears the bill", "Emergency care + cost information", "Treat FIRST (emergencies never wait for deposits), social welfare/NHIS enroled in parallel, exact bill explained after"],
            ["Elder left unfed, 'confused, won't eat'", "Dignity + nutrition + protection", "Assess (dentures? swallowing? depression? neglect?), assist feeds, refer dietitian/social welfare if neglect suspected"],
            ["Dying patient's family bars bad news + visitors", "Patient's autonomy + family's context", "4-box it (Module 02): patient's known wishes lead, negotiated joint disclosure, visitors per patient's lifetime pattern"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The admission talk that prevents complaints",
          body: "Within the first hour, tell every patient/family: my name and role, the ward routine (rounds, meals, visiting, call bell), the plan in plain language with costs flagged, how to ask questions, and how to complain (in-charge → management → NMC) — then document you said it. Most complaints are failed expectations ('nobody told us…'), not failed medicine. Ten minutes of orientation saves ten hours of grievance.",
        },
      ],
      keyPoints: [
        "Charter: 8 rights (care, dignity, information, confidentiality, refusal, comfort, complaint, family/faith) — posted, quoted, taught.",
        "Responsibilities (history, fees, adherence, respect, appointments, questions) enable care — never condition emergencies.",
        "Dignity: curtains, chaperones, names, interpreters (never children for bad news), faith/diet rites, disability, dying undisturbed.",
        "Complaints: ward first (listen + fix), facility QA, NMC/GHS/courts; document + learn; retaliation = misconduct.",
        "Hard cases: prisoners examined privately, psychiatric least-restrictive, uninsured emergencies treated first, elders assessed not labelled.",
        "Admission talk (name, routine, plan, costs, questions, complaints) prevents most grievances — document it.",
      ],
      quiz: {
        keywords: ["patients charter", "rights", "responsibilities", "dignity", "privacy", "informed consent", "refusal", "second opinion", "complaint", "retaliation", "interpreter", "chaperone", "NHIS", "discrimination", "violence"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "confidentiality-privacy-and-advocacy",
      title: "Confidentiality, privacy and advocacy",
      minutes: 20,
      objectives: [
        "Apply the keep/share/break traffic lights with tests.",
        "State the mandatory breaks: children, danger, disease, courts.",
        "Lock records practically and run the breach drill.",
        "Advocate for voiceless patients with safeguarding referrals.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Keep, share, break: the traffic lights",
          paragraphs: [
            "🟢 <strong>KEEP (default)</strong>: everything — records, corridor talk, screens, phones, handovers, enquiries ('is my husband here?' → verify identity + patient consent first), social media silence, and <strong>stigma-loaded conditions</strong> (HIV, STI, mental illness, abortion, assault) under extra lock, never ward gossip. The <strong>deceased</strong> keep confidentiality (executors/coroner/public-health only, per law); <strong>adolescents</strong> hold Gillick-competent privacy with safeguarding limits stated upfront. 🟡 <strong>SHARE (direct care, minimum necessary)</strong>: treating team via handover/referrals/results (consent implied for care); <strong>explicit consent</strong> for teaching, research, photography; <strong>patient access</strong> on request (shown + explained — Ghana <strong>Data Protection Act, 2012 (Act 843)</strong> backs access, accuracy and protection); relatives ONLY with consent or best-interests incapacity (document who + why); interpreters bound and briefed. 🔴 <strong>BREAK (serious harm or law, minimum to right authority)</strong>: <strong>child abuse/neglect → DOVVSU + social welfare (MANDATORY under Children's Act 560 — Module 06)</strong>, imminent violence → police + warned victim, notifiable disease → public health, court order → disclose as ordered, unfit driver/pilot or impaired colleague endangering patients → regulator/employer, partner at HIV/STI risk → notification services. Tests: KEEP — would the patient expect this person to know? SHARE — in the care + detail needed? BREAK — serious, imminent, identifiable harm only disclosure prevents?",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0008.svg",
          alt: "Confidentiality traffic lights. Green keep: records, talk, screens, handovers, social media, family enquiries, deceased, adolescents, stigma conditions — test: would the patient expect this person to know? Amber share: treating team minimum necessary, explicit consent for teaching/research/photos, patient access under Data Protection Act 843, relatives with consent or best-interests, interpreters bound — test: in the care plus detail needed? Red break: child abuse to DOVVSU/social welfare mandatory, imminent violence to police plus victim, notifiable disease, court orders, unfit drivers, impaired colleagues, partner notification — test: serious imminent identifiable harm only disclosure prevents; tell patient after. Footer: practical locks, breach drill, snooping misconduct, advocacy for voiceless.",
          caption: "Green by default, amber for care, red for danger — each with its test.",
        },
        {
          type: "text",
          heading: "Locks, drills and snooping",
          paragraphs: [
            "Practical locks: <strong>screens angled away + auto-lock</strong>, passwords never shared, folders <strong>closed + filed</strong> (never left on counters), handovers <strong>out of earshot</strong>, phones silent + clinical-use-only, <strong>no records home or photographed</strong>, confidential waste shredded, <strong>log off every exit</strong>. <strong>Breach drill</strong>: contain (retrieve, delete, re-lock) → inform in-charge + data/facility officer → assess harm (who saw? stigma? danger?) → notify patient + regulator per policy → incident form + learning + apology where due. <strong>Snooping</strong> — opening a colleague's, celebrity's, relative's or neighbour's file without a care role — is misconduct: <strong>systems log every access</strong>, audits catch the curious, tribunals erase for it. Famous-patient wards brief all staff on admission; family-staff request recusal from that patient's records. Curiosity is human; clicking is chargeable.",
          ],
        },
        {
          type: "text",
          heading: "Advocacy: voice for the voiceless",
          paragraphs: [
            "Advocacy activates where voice fails: <strong>children</strong> (pain believed, procedures explained, parents present, abuse reported — Act 560 duties, Module 06), <strong>unconscious/confused</strong> (best-interests process, dignity preserved, restraints minimal), <strong>mentally ill</strong> (Mental Health Act procedures, least-restrictive, seclusion reviewed), <strong>prisoners</strong> (equal care, privacy from officers, hunger-strike ethics per protocol), <strong>the poor/uninsured</strong> (NHIS enrolment, social welfare, fee waivers pursued — costs never silently block care), <strong>disabled</strong> (access, communication, consent supported), <strong>elderly neglected</strong> (social welfare + family meeting + follow-up), <strong>assault/trafficked survivors</strong> (DOVVSU + medical + psychosocial + safe shelter chain). Advocate by: <strong>speaking in the room</strong> ('the patient said…'), <strong>referring onward</strong> (social welfare, DOVVSU, legal aid, chaplaincy, disability services), <strong>following up</strong> (referrals without follow-up are theatre), <strong>documenting</strong> (concern + action + referral + response). Safeguarding is EVERY nurse's duty, not a specialist's hobby — see it, say it, write it, follow it.",
          ],
        },
        {
          type: "table",
          heading: "Safeguarding referrals in Ghana",
          columns: ["Concern", "Refer to", "Nurse's actions"],
          rows: [
            ["Child abuse/neglect/defilement", "DOVVSU (police) + Dept. of Social Welfare + medical exam", "Believe, examine gently + document verbatim + body map, do NOT confront alleged abuser alone, mandatory report same-shift"],
            ["Gender-based violence (adult)", "DOVVSU + medical + psychosocial + safe shelter", "Safety first, consent-led referral (adult may decline police — document + safety plan), forensic exam offered promptly"],
            ["Mental illness needing detention/care", "Psychiatry + Mental Health Authority procedures", "Least-restrictive, legal forms exact, family involved, seclusion reviewed hourly"],
            ["Elder/dependent neglect", "Social Welfare + family meeting + community follow-up", "Assess needs + carer strain, care plan, scheduled review — neglect recurs without follow-up"],
            ["Trafficking/child labour", "Anti-Human Trafficking Unit + Social Welfare + shelter", "Separate from 'guardians' safely, specialist interview, do not detain victim — protect + refer"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Mandatory reporting: no discretion, same shift",
          body: "Suspected child abuse, neglect, defilement or exploitation MUST be reported to DOVVSU/police and Social Welfare — suspicion suffices, proof is the investigators' job, and failure to report is itself punishable. Examine and document (verbatim words, body map, photos per protocol with consent/authority), preserve evidence (clothes bagged, no bathing before forensic exam where assault alleged), keep the child safe (admit where risk), inform in-charge, file incident + safeguarding forms, and follow the case — reported-and-forgotten fails the child twice. Tell the child in simple words what happens next; never promise secrecy you must break.",
        },
      ],
      keyPoints: [
        "Keep (default, incl. deceased + stigma conditions) → share (care team minimum + explicit for teaching/photos) → break (harm/law, minimum to authority).",
        "Tests: expect-to-know? in-care + needed? serious-imminent-identifiable harm? — each gate explicit.",
        "Mandatory breaks: child abuse (DOVVSU + welfare, Act 560), imminent violence, notifiable disease, court orders, unfit drivers, impaired colleagues.",
        "Locks: screens, passwords, filed folders, earshot handovers, no photos home, log-offs; breach drill: contain → inform → assess → notify → file.",
        "Snooping is misconduct — access logs catch curiosity; famous-patient wards brief + recuse.",
        "Advocacy: children, unconscious, mentally ill, prisoners, poor, disabled, elders, survivors — speak, refer, follow up, document.",
      ],
      quiz: {
        keywords: ["confidentiality", "privacy", "disclosure", "Data Protection Act", "DOVVSU", "social welfare", "mandatory reporting", "child abuse", "safeguarding", "advocacy", "notifiable disease", "court order", "snooping", "breach", "vulnerable"],
        categories: ["fundamentals"],
      },
    },
  ],
};
