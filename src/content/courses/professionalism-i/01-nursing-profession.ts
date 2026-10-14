import type { CourseModule } from "../types";

export const nursingProfession: CourseModule = {
  slug: "nursing-profession",
  title: "The nursing profession: history, cadres and regulation",
  summary:
    "What makes nursing a profession: the five marks of a profession, nursing's history from Nightingale to Ghana's wards, today's cadres with their registers and scopes, the settings from CHPS to policy, and the regulator-versus-association split — then the NMC's mandate under Act 857, the indexed-student-to-licence journey, renewal with CPD, unlicensed-practice offences and the fitness-to-practice exit door.",
  lessons: [
    {
      slug: "nursing-as-a-profession",
      title: "Nursing as a profession",
      minutes: 20,
      objectives: [
        "State the five marks of a profession and apply them to nursing.",
        "Trace nursing's history to Ghana's wards and CHPS compounds.",
        "Name the cadres with their registers, scopes and supervision lines.",
        "Distinguish the NMC regulator from the GRNA association.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five marks that separate profession from job",
          paragraphs: [
            "A <strong>profession</strong> earns its status five ways: a <strong>specialized body of knowledge</strong> (taught in accredited schools, tested by licensing exams, advanced by research), a <strong>code of ethics</strong> (binding even when nobody watches), <strong>autonomy with accountability</strong> (judgment exercised — and owned), <strong>service orientation</strong> (the patient's interest above convenience or profit), and <strong>self-regulation</strong> (a statutory body admitting, licensing and disciplining its own). Nursing carries all five: the curriculum you study, the NMC code you will sign, the clinical judgment you will exercise at 2 a.m., the patient you will serve before yourself, and the register that can strike you off. The uniform borrows the public's trust; only professional conduct repays it — every shift, every patient, including the rude, the poor and the unconscious.",
          ],
        },
        {
          type: "text",
          heading: "From Scutari to CHPS: a short history",
          paragraphs: [
            "<strong>Florence Nightingale</strong> (Crimean War, 1850s) proved trained nurses cut death rates — then built the first training school (St Thomas', 1860), kept statistics that shamed governments, and wrote the notes every curriculum still echoes. Mission hospitals carried nursing to the Gold Coast; <strong>Korle Bu</strong> (1923) and the nursing schools that followed trained generations; independence (1957) Ghanaianized leadership; the <strong>Nurses and Midwives Decree (NRCD 117, 1972)</strong> first unified regulation; today the <strong>Health Professions Regulatory Bodies Act (Act 857, 2013)</strong> governs the NMC, and degree/diploma programmes plus <strong>CHPS compounds</strong> (community-based care since the 2000s) define the landscape. Know the arc for exams — Nightingale → missions → Korle Bu → NRCD 117 → Act 857 → CHPS — and know what it means: Ghana's nursing was built by deliberate professionalization, and every PIN defends it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0001.svg",
          alt: "Nursing in Ghana. NMC regulator under Act 857: registers, licences, accredits schools, disciplines via tribunal (caution, conditions, suspension, erasure) — protects the public. GRNA association: professional and union voice, bargains conditions, CPD and welfare, cannot licence or erase — serves the nurse. Cadres: registered (RGN, RM, RPHN, RMN, RCN) assess, plan, prescribe per protocol, lead and delegate; enrolled and assistants give bedside care supervised but accountable for own acts. Settings: hospital, community/CHPS, education, leadership/policy.",
          caption: "Regulator protects the public, association serves the nurse — and every cadre answers for its own acts.",
        },
        {
          type: "text",
          heading: "Cadres, scopes and settings",
          paragraphs: [
            "<strong>Registered</strong> nurses/midwives (RGN, RM, RPHN/public health, RMN/mental health, RCN/paediatric — degree <strong>BSc</strong> or diploma) assess, make nursing diagnoses, plan, evaluate, <strong>prescribe within protocols</strong>, lead wards and <strong>delegate</strong> — each on their own register with its own scope. <strong>Enrolled</strong> nurses and <strong>health care assistants/aides</strong> deliver bedside care <strong>under supervision</strong> — but supervision never transfers accountability: the enrolled nurse who gives the wrong drug answers for it alongside whoever delegated badly. Settings span <strong>hospitals</strong> (wards, OPD, theatre, ICU), <strong>community</strong> (CHPS compounds, health centres, outreaches, schools, homes), <strong>education</strong> (tutors, clinical preceptors), <strong>research</strong>, and <strong>leadership/policy</strong> (ward in-charge → DDNS → directors → Ministry). Scope follows cadre + competence + context: the CHPS midwife sutures and prescribes per standing orders where no doctor exists; the Accra ward nurse refers the same case upward — both professional, both within scope, because scope is register plus competence plus setting, not courage.",
          ],
        },
        {
          type: "table",
          heading: "NMC versus GRNA: the exam's favourite trap",
          columns: ["Question", "NMC (regulator)", "GRNA (association)"],
          rows: [
            ["Who licences and renews PINs?", "YES — sole authority under Act 857", "No — can only advocate and educate"],
            ["Who disciplines / erases?", "YES — tribunal: caution, conditions, suspension, erasure", "No — may support the member's defence"],
            ["Who accredits schools + sets licensure exams?", "YES", "No"],
            ["Who negotiates salaries + conditions?", "No — regulator stays out of labour", "YES — union voice"],
            ["Who protects the PUBLIC?", "YES — its founding purpose", "Indirectly, via professional standards"],
            ["Who do you pay dues to for welfare/CPD?", "Renewal fees (licence)", "Membership dues (benefits)"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Answer 'who' questions with the purpose test",
          body: "Ask: does this protect the PUBLIC (licence, discipline, standards, exams)? → NMC. Does this serve the NURSE (pay, welfare, CPD, solidarity)? → GRNA. 'Who disciplines the negligent nurse?' — public protection → NMC. 'Who called the strike over allowances?' — nurses' welfare → GRNA. Examiners set this trap yearly because students conflate uniforms with regulators — run the purpose test and it never catches you.",
        },
      ],
      keyPoints: [
        "Profession = knowledge + ethics + autonomy-with-accountability + service + self-regulation — nursing carries all five.",
        "History arc: Nightingale → missions → Korle Bu → NRCD 117 → Act 857 → CHPS; professionalization was deliberate.",
        "Registered (RGN/RM/RPHN/RMN/RCN) assess, plan, prescribe per protocol, lead, delegate; enrolled/assistants supervised — all accountable.",
        "Scope = register + competence + setting; CHPS standing orders differ from ward referral — both professional.",
        "NMC: licences, examines, accredits, disciplines — protects the PUBLIC. GRNA: bargains, supports, educates — serves the NURSE.",
        "Purpose test for 'who' questions: public → NMC, nurse → GRNA — the exam trap, defused.",
      ],
      quiz: {
        keywords: ["profession", "Nightingale", "Korle Bu", "NMC", "GRNA", "Act 857", "RGN", "midwife", "enrolled", "scope of practice", "CHPS", "regulator", "association", "accountability", "supervision"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "regulation-registration-and-licence",
      title: "Regulation, registration and the licence",
      minutes: 20,
      objectives: [
        "State the NMC's mandate and functions under Act 857.",
        "Trace the journey: indexing → training → licensure → PIN → renewal.",
        "Explain CPD, unlicensed-practice offences and student status.",
        "Describe fitness-to-practice: complaints to erasure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The NMC's mandate: public protection by register",
          paragraphs: [
            "The <strong>Nursing and Midwifery Council of Ghana</strong>, established under the <strong>Health Professions Regulatory Bodies Act, 2013 (Act 857)</strong>, exists for one purpose: <strong>protecting the public</strong> from unqualified or unsafe nursing and midwifery. Its functions: <strong>registering</strong> qualified practitioners (separate registers/divisions per cadre), <strong>licensing</strong> practice (the yearly PIN), <strong>accrediting</strong> training institutions and monitoring standards, <strong>setting and conducting licensure examinations</strong>, prescribing <strong>codes of conduct and ethics</strong>, mandating <strong>CPD</strong>, and <strong>disciplining</strong> through fitness-to-practice. Note what is missing: salaries, postings, promotions, welfare — those belong to employer (Ghana Health Service/teaching hospitals/CHAG/private) and union (GRNA). When the exam asks 'which body ensures only qualified nurses practise?' — the register-holding, exam-setting, licence-issuing NMC, every time.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0002.svg",
          alt: "Classroom to licence journey. 1. Indexing: admitted to accredited school, NMC index number, supervised and accountable. 2. Training: theory plus clinical hours, logbook and assessments, school vouches. 3. Licensure exam: NMC theory plus practical — pass is eligible, fail resits, never practises. 4. Registration plus PIN: name on register, licence issued, unlicensed practice an offence. 5. Renewal plus CPD: yearly PIN, CPD points, verification for abroad via NMC. Fitness-to-practice exit: complaint to investigation to tribunal (caution, conditions, suspension, erasure). Footer: expired PIN offences, student supervision, failed-exam rules, sanctions travelling abroad, CPD guarding the PIN.",
          caption: "Five steps in, one tribunal out — and the PIN is the only paper between you and 'unqualified'.",
        },
        {
          type: "text",
          heading: "The journey in detail",
          paragraphs: [
            "<strong>Indexing</strong>: on admission to an <strong>accredited</strong> school, the NMC issues your <strong>index number</strong> — your file opens, and misconduct as a student follows it to registration. Train only at accredited institutions: unaccredited schools produce graduates the NMC will not examine. <strong>Training</strong>: prescribed theory + clinical hours, logbook, continuous assessment — the school attests character and competence before presenting you. <strong>Licensure examination</strong>: NMC theory + practical — pass and you are registrable; fail and you <strong>resit, never practise</strong> ('small small' ward work while failed is unlicensed practice). <strong>Registration + PIN</strong>: name entered on the register, licence (Personal Identification Number) issued — only now may you call yourself nurse/midwife and practise. <strong>Renewal + CPD</strong>: PIN renewed <strong>yearly</strong> with required <strong>CPD points</strong> (courses, workshops, reflection) — lapse and practice is barred until restored. <strong>Verification for abroad</strong> (CGFNS/NNAS/NMC-UK and others): the NMC confirms registration + good standing — <strong>sanctions travel with you</strong>; an erasure in Accra ends the London dream too.",
          ],
        },
        {
          type: "table",
          heading: "Status and what it allows",
          columns: ["Status", "May do", "Must not do", "Accountable to"],
          rows: [
            ["Indexed student", "Learn + practise supervised, within taught competence", "Practise unsupervised, exceed taught skills, sign as nurse", "NMC + school + ward supervisor"],
            ["Graduate, exam failed/pending", "Study, resit; work only as unlicensed aide within limits", "Call self nurse/midwife, hold PIN duties, take charge", "NMC (file open) + employer"],
            ["Registered, PIN current", "Full scope of cadre + competence, delegate, prescribe per protocol", "Exceed scope/competence, practise while suspended", "NMC + employer + law"],
            ["Registered, PIN lapsed/suspended", "Stop practising; restore/serve sanction; CPD where allowed", "Any nursing practice for gain or title", "NMC tribunal + criminal law (Act 857 offence)"],
            ["Struck off (erased)", "Apply restoration only per NMC rules after sanction period", "Practise or use the title — criminal offence", "Courts + NMC"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Fitness-to-practice: the exit door, step by step",
          body: "Complaint (patient, family, employer, police, NMC own-motion, media) → screening + investigation (records seized, statements taken — YOUR documentation is exhibit A) → case examiners → disciplinary tribunal (formal hearing, legal representation allowed, witnesses sworn) → sanction: caution, conditions on practice, suspension, or ERASURE (struck off). Grounds: misconduct (abuse, fraud, theft, falsified records, practising while suspended), incompetence (repeated unsafe practice), criminal conviction (especially dishonesty, violence, drugs), fraud in registration. Employers must report dismissals for misconduct; practising while suspended is itself erasure-level. The tribunal publishes — reputation, employment and emigration all die with the register entry. Prevention is dull and total: current PIN, in-scope practice, honest records, sober shifts, chaperoned examinations, incident honesty.",
        },
      ],
      keyPoints: [
        "NMC under Act 857: register, licence, accredit, examine, code-set, CPD, discipline — to protect the PUBLIC.",
        "Journey: indexing (file opens) → accredited training → licensure exam → registration + PIN → yearly renewal + CPD.",
        "Unaccredited schools = unexaminable graduates; failed exam = resit, never practise; expired PIN = barred.",
        "Students: supervised, in-competence, indexed — misconduct follows the file to registration.",
        "Verification for abroad confirms good standing — sanctions travel; erasure ends emigration too.",
        "Tribunal: complaint → investigation → hearing → caution/conditions/suspension/erasure; honest records are exhibit A.",
      ],
      quiz: {
        keywords: ["NMC", "Act 857", "indexing", "accreditation", "licensure", "registration", "PIN", "renewal", "CPD", "verification", "fitness-to-practice", "tribunal", "erasure", "suspension", "unlicensed"],
        categories: ["fundamentals"],
      },
    },
  ],
};
