import type { CourseModule } from "../types";

export const lawEthicsAndProfessionalRegulation: CourseModule = {
  slug: "law-ethics-and-professional-regulation",
  title: "Law, ethics and professional regulation",
  summary: "The rules a Ghanaian nurse answers to — consent and the three things that must all be true, capacity and the age of consent, refusal and self-discharge, confidentiality and its four doors, the Patients' Charter; the four ethical principles and the dilemmas examiners build from them (truth-telling, scarce resources, gifts and boundaries, conscientious objection, assisted dying, FGM, abuse, restraint, the Mental Health Act, disability and discrimination, culture and religion); and then negligence, accountability in four directions, the Nursing and Midwifery Council, the PIN, misconduct and its sanctions, whistleblowing, and the laws every nurse should be able to name.",
  lessons: [
    {
      slug: "consent-capacity-and-confidentiality",
      title: "Consent, capacity and confidentiality",
      minutes: 18,
      objectives: [
        "State the three elements of valid consent, explain why a signature is not consent, and describe the nurse's role when the patient cannot say what operation he is having.",
        "Apply the rules on capacity and the age of consent in Ghana — the presumption of capacity, decision-specific capacity, the adult at eighteen, children and assent, the unconscious emergency, the competent refusal, withdrawal of consent and the patient who wants to leave.",
        "State the rule of confidentiality and the four exceptions, and recognise the everyday breaches — the corridor, the WhatsApp group, the photograph, the neighbour's record, the husband who is paying.",
        "Describe the rights and responsibilities in Ghana's Patients' Charter and the rules on privacy, dignity, interpreters and chaperones.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Consent — three things that must all be true",
          paragraphs: [
            "Touching a competent adult without consent is an <strong>assault</strong>, however therapeutic the touch — an injection given to a patient who has said no, an examination performed on a patient who was never asked. Valid consent requires <strong>three elements, all at once</strong>: <strong>capacity</strong> (the person can understand the information, retain it long enough to use it, weigh it against her own values and communicate a decision), <strong>information</strong> (what the procedure is and why, the material risks and benefits, the alternatives including doing nothing, given in a language she speaks at a level she follows) and <strong>voluntariness</strong> (freely given, without pressure from staff, family, a husband or the fear of losing care, and withdrawable at any time). Missing any one and there is no consent — it is not a scale but all or nothing.",
            "<strong>A signature is not consent.</strong> A signed form is evidence that a conversation happened; if the conversation did not happen the form records nothing. The person who will <strong>perform the procedure</strong> is responsible for obtaining consent — the surgeon for the operation, the midwife for the episiotomy, the nurse for the catheter — because only the person who will do it can answer the questions. The nurse's role in surgical consent is to <strong>verify</strong>: that the form is signed, that the patient can say in his own words what is to be done and why, and that he has had the chance to ask. A patient who has signed but <strong>cannot say what operation he is having was not informed</strong>; the nurse stops the process, informs the surgeon, and does not send him to theatre on that form. Consent given while sedated, signed on the trolley at the theatre door, explained in a language the patient half follows, or signed by a relative for a competent adult is not consent either.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2188.svg",
          alt: "Consent — the three things that must all be true: capacity, information and voluntariness — with the note that missing any one means there is no consent at all, because it is not a scale but all or nothing.",
          caption: "Capacity, information, voluntariness. All three, or it is not consent — and the form is only the receipt for the conversation.",
        },
        {
          type: "table",
          heading: "Who consents? — capacity and age in Ghana",
          columns: ["Situation", "Rule", "Note"],
          rows: [
            ["<strong>A competent adult</strong>", "She consents or refuses for herself. Nobody else — husband, head of family, pastor, doctor — can consent on her behalf or veto her decision.", "A husband who insists on signing for his wife's surgery is told that <strong>she must consent herself</strong>; he is involved with her permission."],
            ["<strong>Capacity is presumed and decision-specific</strong>", "Every adult is presumed to have capacity until shown otherwise (Mental Health Act, 2012, section 97); it is assessed <strong>for the specific decision</strong>, not as a global label.", "A patient with schizophrenia who needs an appendicectomy consents himself — a diagnosis does not remove capacity. An elderly woman confused about the date who explains clearly why she refuses an operation may have capacity for that decision. A person with dementia who declines a wash today is respected and approached again later."],
            ["<strong>When capacity is genuinely lacking</strong>", "Treatment proceeds in the patient's <strong>best interests</strong>, involving the family and a second clinician, choosing the least restrictive option, and recording the assessment and the reasoning.", "Family are consulted about what she would have wanted; they do not acquire a right to decide against her interests."],
            ["<strong>Age of consent</strong>", "A child is a person <strong>under eighteen</strong> (1992 Constitution, article 28(5); Children's Act, 1998, Act 560). Below eighteen, a <strong>parent or guardian</strong> consents, and the child's own view is sought and weighted with age and maturity (<strong>assent</strong>).", "Ghana has <strong>no statutory Gillick-type rule</strong> allowing a mature minor to consent alone to treatment; in practice adolescents receive confidential sexual and reproductive health services under Ghana Health Service policy, and a nurse who faces a sixteen-year-old seeking care alone provides confidential care within policy and escalates rather than turning her away. Parental authority is held for the child's benefit: when a parent refuses life-saving treatment, the team <strong>explores the concern, seeks senior review and legal authority if still refused</strong>; the child's welfare is paramount."],
            ["<strong>The unconscious emergency</strong>", "Treat under the <strong>doctrine of necessity</strong> — what a reasonable person would want to save life or prevent serious harm — and no more than is necessary until the patient can decide.", "An HIV test on an unconscious patient proceeds only where it is necessary for his own care, with confidentiality kept and counselling given when he can receive it — not for the convenience of staff."],
            ["<strong>Refusal</strong>", "A competent adult may refuse any treatment, including one that will save his life, and including on traditional or religious grounds; the nurse <strong>explores the reasons, ensures he understands the consequences, respects the refusal, records it and continues all other care</strong>. A competent adult who refuses a blood transfusion that the team believes is essential is respected; a prisoner or patient in police custody retains the same right.", "Refusing treatment is not refusing care. The team may not deceive, coerce, sedate or wait until he is unconscious to do what he refused."],
            ["<strong>Withdrawal</strong>", "Consent may be withdrawn at any moment, including after the form is signed and during the procedure; a patient who tells the nurse to <strong>stop</strong> is stopped, made safe, and the reason is explored.", "Continuing after a clear withdrawal converts the procedure into an assault."],
            ["<strong>Advance refusal</strong>", "A clear, informed refusal made in advance by a competent adult for a foreseen situation is <strong>strong evidence of her wishes</strong> and is followed unless there is reason to doubt it applied to these circumstances.", "Ghana has no comprehensive advance-directive statute; the ethical weight of a documented, witnessed refusal is nonetheless high and it is recorded and respected."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PFC-0653.svg",
          alt: "Valid consent — capacity, information and voluntariness explained, where it goes wrong (signed on the trolley, half-understood language, a relative signing for a competent adult, just sign here, sedated when signing) and the nurse's role: check understanding, stop and call the person who advised, arrange proper interpretation, record what was checked.",
          caption: "If the patient cannot repeat back what was explained, he was not informed. Stop, call the person who advised the procedure, arrange a proper interpreter rather than a passing relative, and record what you checked and did.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FAM-1713.svg",
          alt: "When a patient wants to leave — what she says and what is usually underneath (the bill, the children, not knowing the diagnosis, fear of an unexplained operation), what to do in order, the fact that a competent adult may leave and no form changes that, the self-discharge form protecting the record not the nurse, and the exceptions that require escalation: lack of capacity, detention under the Mental Health Act, a child being removed against her interests.",
          caption: "Almost nobody discharges herself because she feels well. Sit down and ask what changed today, deal with the real obstacle, explain the specific risk plainly, accept the decision — and send her home safely anyway with medicines, warning signs and a way back.",
        },
        {
          type: "text",
          heading: "The patient who wants to leave",
          paragraphs: [
            "A competent adult may leave hospital against medical advice, and no form changes that. The <strong>self-discharge form</strong> protects the record — it shows that the risks were explained — and it does not transfer liability, is not a punishment and is not a condition of leaving: a patient with capacity who insists on leaving and <strong>declines to sign is still given the discharge advice, and the nurse documents the refusal to sign</strong>. The nursing skill is in the conversation before the form: the reason is usually not the reason, and the bill, the children at home, the diagnosis nobody explained or the operation nobody described can often be dealt with. Three situations change everything and require <strong>immediate escalation rather than a decision made alone</strong>: a patient who lacks capacity, a patient detained under the Mental Health Act, and a child being removed by an adult against the child's interests.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2206.svg",
          alt: "Confidentiality — the rule (information is not disclosed without the patient's consent, right 8 of the Patients' Charter, including to family, employers and colleagues not involved) and the four doors out of it: the patient agrees, the care team needs it, the law requires it, serious risk to others — with the everyday breaches: the corridor and the WhatsApp group, the ward photograph, looking up a neighbour's record, telling the husband because he asked and is paying.",
          caption: "The duty survives discharge and survives death. Removing the name is not enough — if the person can still be worked out, it is still a breach.",
        },
        {
          type: "table",
          heading: "Confidentiality — the rule and the four doors",
          columns: ["Door", "What it permits", "Example"],
          rows: [
            ["<strong>The rule</strong>", "Information obtained about a patient is <strong>not disclosed to anyone without the patient's consent</strong> — not to family, employers, the church, the police on an informal request, or colleagues not involved in the care (Patients' Charter; Data Protection Act, 2012, Act 843). The duty continues after discharge and after death.", "A woman's brother asks her diagnosis and she has not given permission: the nurse explains she cannot discuss it and offers to ask the patient whether she wishes him to be told. A husband who asks for his wife's diagnosis because he is paying is told the same."],
            ["<strong>1. The patient agrees</strong>", "Consent to share — ideally recorded, naming who may be told and what.", "She asks that her mother be told about the operation but not about the HIV result; both instructions are followed."],
            ["<strong>2. The care team needs it</strong>", "Sharing on a <strong>need-to-know</strong> basis with those involved in the patient's care; the colleague taking over needs the handover, the curious colleague on another ward does not.", "A nurse who looks up the <strong>electronic record of a neighbour admitted to another ward</strong> has breached confidentiality even though she has access — access is not authority."],
            ["<strong>3. The law requires it</strong>", "Notifiable diseases to the district under IDSR; a <strong>court order</strong>; statutory reporting duties (suspected child abuse under the Children's Act; the Domestic Violence Act's provisions). A <strong>police officer asking informally is not a court order</strong>: the nurse declines, refers the officer to the person in charge, and discloses only under a lawful requirement.", "Cholera is reported within 24 hours whatever the patient wishes; a patient's address is not given to a police officer at the nurses' station."],
            ["<strong>4. Serious risk to others</strong>", "Disclosure in the public interest, <strong>limited to what is necessary, to the person who can act</strong>, telling the patient first where safe. A specific, credible threat to an identifiable person justifies it — a patient who says he will kill a named neighbour tonight.", "The team and, through them, the person at risk are informed; the ward does not announce it to the bay."],
          ],
        },
        {
          type: "text",
          heading: "Where nurses breach it without meaning to",
          paragraphs: [
            "Discussing a patient in the corridor, the canteen, the trotro or the staff <strong>WhatsApp group</strong>. Posting a <strong>photograph</strong> from the ward — a patient is identifiable by a wristband, a bedsheet, a tattoo or a room, and a nurse who has posted one <strong>removes it immediately, reports it and apologises</strong>; the facility's social media policy exists for this. Talking across an <strong>open bay</strong> where the next bed can hear: curtains are not privacy if voices carry, and sensitive conversations — the HIV result, the diagnosis, the bill — happen in a side room or at a volume that reaches only the patient. Labelling notes with a <strong>red sticker for HIV</strong>, or a separate set of crockery, discloses the diagnosis to everyone who walks past and stigmatises the patient; infection control uses standard precautions for all, not labels for some. A <strong>17-year-old who asks for sexually transmitted infection treatment and begs the nurse not to tell her parents</strong> is given confidential care and support is explored — adolescents who fear disclosure avoid services and come back later and sicker; the limit, explained at the start, is serious risk of harm. An employer who telephones a psychiatric unit to ask whether an employee is admitted is told nothing, including whether she is there.",
            "<strong>Interpreters and chaperones.</strong> When a patient speaks a language none of the staff understands, the interpreter is <strong>a trained interpreter or a member of staff competent in the language</strong> — not a child, and not a relative for anything sensitive, because the relative may edit both directions and the patient cannot speak freely. For a profoundly deaf patient who attends alone, writing, pictures and a sign-language interpreter are arranged rather than guessing. Before any intimate or vaginal examination a <strong>chaperone</strong> is offered and arranged, whatever the sex of the examiner, and the offer and the chaperone's name are recorded; the patient may decline a chaperone, and the examiner may decline to proceed without one.",
          ],
        },
        {
          type: "table",
          heading: "Ghana's Patients' Charter — rights and responsibilities a nurse should be able to quote",
          columns: ["Rights", "Responsibilities"],
          rows: [
            ["Quality basic health services and <strong>no discrimination</strong> on grounds of illness, sex, age, religion, ethnicity, politics or ability to pay in an emergency", "To provide <strong>accurate information</strong> about health, medicines and previous treatment"],
            ["Full information about the condition and treatment, in a language the patient understands, and participation in decisions; the right to <strong>refuse</strong> treatment or participation in <strong>research</strong> without losing care", "To follow the agreed treatment plan and advice, or to say that one will not"],
            ["<strong>A second medical opinion</strong>", "To respect the rights of other patients and of staff; to keep appointments"],
            ["Knowing the <strong>identity and professional status of all the people caring</strong> for her, including students", "To pay agreed bills and fees promptly"],
            ["<strong>Privacy, dignity and confidentiality</strong> (right 8), including of the record, which survives discharge and death", "To respect facility property and rules"],
            ["<strong>Charges, fees and exemptions explained before treatment</strong> wherever possible, and an itemised bill", ""],
            ["A <strong>complaints procedure</strong> explained and accessible, with a response, without prejudice to care", ""],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about consent and confidentiality",
          body: "Valid consent needs capacity, information and voluntariness; a signed form is not consent; the person performing the procedure obtains it; a patient who cannot say what operation he is having was not informed and the surgeon is called. A diagnosis of schizophrenia does not remove capacity; capacity is decision-specific; a competent adult's refusal, including of a blood transfusion and including in custody, is respected. The age of consent is eighteen under article 28(5) and the Children's Act; parental refusal of life-saving treatment is escalated for senior review and legal authority. An unconscious patient is treated under necessity; a patient who withdraws consent is stopped. A patient with capacity may leave against advice and is given discharge advice even if he will not sign. Confidentiality survives death; the four exceptions are consent, the care team's need to know, a legal requirement (a court order, not an informal police request) and serious risk to an identifiable person; looking up a neighbour's record is a breach; a ward photograph is removed and reported; a trained interpreter or competent staff member interprets, never a child; a chaperone is arranged before vaginal examination; the Charter promises a second opinion, charges explained before treatment, the identity of caregivers including students and no discrimination.",
        },
      ],
      keyPoints: [
        "Consent requires capacity, information and voluntariness — all three — and a signature is only evidence of a conversation; the person performing the procedure obtains consent and the nurse verifies understanding, stopping the process when the patient cannot explain what is to be done.",
        "Capacity is presumed and assessed for the specific decision; a psychiatric diagnosis or confusion about the date does not remove it; when it is genuinely lacking, treatment proceeds in the patient's best interests with the family consulted, the least restrictive option and the reasoning recorded.",
        "A child is anyone under eighteen (article 28(5); Children's Act 560): parents or guardians consent, the child's assent is sought, parental refusal of life-saving treatment is escalated for senior review and legal authority, and adolescents receive confidential services within policy.",
        "A competent adult may refuse any treatment, including a life-saving transfusion and including in police custody; refusal is explored, informed, respected, recorded and never circumvented; consent may be withdrawn at any moment; the unconscious emergency is treated under necessity.",
        "A patient with capacity may leave against advice — find the real obstacle, explain the specific risk, document, and discharge safely with medicines and a way back; escalate immediately if capacity is lacking, the patient is detained under the Mental Health Act or a child is being removed against her interests.",
        "Confidentiality is the rule, surviving discharge and death, with four doors: the patient's consent, the care team's need to know, a legal requirement (court order, notifiable disease, statutory duty — not an informal police request) and serious risk to an identifiable person, disclosed minimally to the person who can act.",
        "Everyday breaches are corridors, WhatsApp groups, photographs, open bays, HIV stickers, husbands who pay and neighbours' records; interpreters are trained or competent staff, never children; chaperones are offered and recorded for intimate examinations; the Patients' Charter guarantees information, refusal, a second opinion, the identity of all caregivers, privacy, charges explained beforehand and a complaints procedure.",
      ],
      quiz: {
        questionIds: ["NG-MOD-LEAD-011", "NG-MOD-LEAD-012"],
        categories: ["leadership-delegation"],
        keywords: ["consent","valid consent","informed consent","capacity to consent","capacity is decision","capacity in an older person","mental health act 846 — capacity","competent adult","competent patient","competent","presumption of capacity","dementia declines","eighteen","age of consent","gillick","head of family","a relative who answers","unconscious man","unconscious emergency","emergency treatment of an unconscious","refusal of treatment","refuses a blood transfusion","withdrawing consent","wants the nurse to stop","battery","treatment without consent","advance refusal","advance planning","interpreter","dagbani","only dagbani","language none of the staff","sign language","confidential","confidentiality","disclos","diagnosis to","wife's diagnosis","social media","photograph","neighbour admitted","electronic record","looks up","police","curtain","open bay","shared ward","can hear","adolescent confidentiality","duty to warn","confidentiality in mental health","employer telephones","duty of confidentiality","after death","patients' charter","charter","second opinion","people caring","charges","rights","informing a patient of her rights","rights of a voluntary patient","clinical study","chaperone","intimate examination","consent in children","consent for an older child","assent","consent verification","consent and the anxious","informed consent for surgery","hiv testing and consent","consent to treatment in mental illness","consent by a person in your care","signed a consent form","cannot say what operation","who consents"]
      },
    },
    {
      slug: "ethical-principles-and-dilemmas-in-ghanaian-practice",
      title: "Ethical principles and dilemmas in Ghanaian practice",
      minutes: 18,
      objectives: [
        "Define autonomy, beneficence, non-maleficence and justice — with veracity, fidelity and advocacy — recognise the cue words that signal each in a question, and apply the tie-breaking rules when principles collide.",
        "Respond to the classic dilemmas: the family who ask you not to tell, the scarce bed and the senior official, the gift, the personal phone number, conscientious objection, the request to end a life, and the do-not-resuscitate decision.",
        "Act lawfully and ethically on female genital mutilation, suspected child abuse, intimate-partner violence, elder abuse, restraint and seclusion, detention under the Mental Health Act, and the person chained at a prayer camp.",
        "Practise without discrimination — HIV, disability under Act 715, culture, religion, the prisoner and the patient who cannot pay — and respond to traditional beliefs, religious rites and grief with respect that does not endorse harm.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four principles and the words examiners hide behind them",
          paragraphs: [
            "<strong>Autonomy</strong> — the patient decides, even unwisely — is seen in consent, refusal, privacy, truth-telling and keeping promises, and is signalled by <em>refuses</em>, <em>insists</em>, <em>wants to go home</em>. <strong>Beneficence</strong> — do good — is advocating, relieving pain and arranging what the patient needs, signalled by <em>best interest</em>, <em>benefit</em>, <em>help</em>. <strong>Non-maleficence</strong> — do no harm, including harm from acting outside your competence — is refusing an unsafe task and questioning a wrong dose, signalled by <em>risk</em>, <em>unsafe</em>, <em>side effect</em>. <strong>Justice</strong> — fairness — is equals treated equally and scarce resources shared by need, seen in triage, queue-jumping and refusing to favour the wealthy or the well-connected. Around them sit <strong>veracity</strong> (truthfulness), <strong>fidelity</strong> (keeping promises, loyalty to the patient) and <strong>advocacy</strong> (speaking for the patient who cannot speak for himself — the man who does not understand what the doctors have decided, the patient who cannot afford the prescribed medicine and quietly stops taking it, the wheelchair user who cannot reach the toilet).",
            "Most ethics questions ask <strong>which principle wins when two collide</strong>. Four rules break most ties. If the patient is a competent adult and the question is about her own body, <strong>autonomy almost always wins</strong>. <strong>Doing good never licenses acting without consent</strong> — a benefit imposed on an adult is still a wrong. When resources are short, decide by <strong>clinical need, never by status, payment, tribe or who complained loudest</strong>. If an option requires you to <strong>deceive the patient, it is wrong however kind the motive</strong>. And a last check: restriction presented as safety is usually the harm — ask who the restriction actually protects, the patient or the institution from embarrassment.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2193.svg",
          alt: "The four principles and the words examiners hide behind them — autonomy (refuses, insists, wants to go home), beneficence (best interest, benefit, help), non-maleficence (risk, unsafe, side effect), justice (triage, queue-jumping, favouring the well-connected) — with four rules for breaking the tie.",
          caption: "Autonomy wins for a competent adult's own body; beneficence never licenses acting without consent; scarcity is decided by need, never status; an option that requires deceiving the patient is wrong however kind the motive.",
        },
        {
          type: "table",
          heading: "The classic dilemmas — and the defensible answer",
          columns: ["Dilemma", "Defensible response", "Principle at work"],
          rows: [
            ["<strong>The family ask you not to tell her</strong> (a woman with cancer; her relatives say \"please do not tell her\")", "Neither agree nor overrule. Ask what they fear will happen if she is told; explain that you <strong>will not lie to her and equally will not force information on her</strong> but will follow her own questions; ask her how much she wants to know. Most families accept this because it answers the fear. A patient with cancer who asks her diagnosis directly is not deceived.", "Veracity and autonomy; the family cannot veto truth-telling to a competent adult."],
            ["<strong>Veracity after an error</strong>", "Tell the patient what happened, what is being done and what it means — after the patient has been checked and treated and the prescriber told. Concealment is the misconduct, not the error.", "Veracity, non-maleficence, candour."],
            ["<strong>The scarce bed</strong> (one intensive-care bed; a senior official's relative and a market woman with the greater clinical need)", "<strong>Allocate by clinical need and likelihood of benefit</strong>, document the reasoning, and resist the pressure through the chain of command.", "Justice."],
            ["<strong>Queue-jumping</strong> (a well-connected patient demands to be seen before sicker patients)", "The order is clinical; explain the triage system; the same explanation to everyone.", "Justice."],
            ["<strong>Gifts</strong> (a grateful family offers a substantial sum; a patient offers a small gift of food)", "<strong>Decline money and anything of significant value</strong>, explain kindly that care is not conditional on gifts, and suggest a letter of thanks or a donation to the ward through the proper channel; a small, culturally ordinary token (a tuber of yam, a bottle of drink for the ward) may be accepted on behalf of the team and declared where policy requires.", "Fidelity and justice — a gift that creates obligation distorts the next decision."],
            ["<strong>Boundaries</strong> (a patient asks for the nurse's personal phone number; a nurse begins a relationship with a current patient)", "Keep the relationship professional: give the ward number, not a personal one; no romantic or financial relationship with a current patient; do not nurse close relatives or friends where it can be avoided; record and report any relationship that develops.", "Fidelity; the therapeutic relationship exists for the patient's needs, not the nurse's."],
            ["<strong>Conscientious objection</strong> (a nurse has a sincere objection to participating in a lawful procedure, such as a termination permitted under Ghanaian law)", "She <strong>declares it in advance to her manager, so that another practitioner is arranged, and never abandons the patient</strong>: she gives information without judgement, refers, and in an emergency provides life-saving care regardless of her objection.", "Autonomy of the nurse balanced against non-abandonment of the patient."],
            ["<strong>\"Help me end my life\"</strong> (a man dying of cancer asks the nurse to help him die)", "Assisted dying and euthanasia are unlawful in Ghana. The nurse <strong>does not agree and does not simply refuse and leave</strong>: she explores the request — uncontrolled pain, fear, depression, feeling a burden — treats what can be treated, escalates for palliative care review, and stays with him.", "Non-maleficence and beneficence; the request is almost always a request for relief."],
            ["<strong>The do-not-attempt-resuscitation decision</strong>", "A DNAR decision concerns <strong>one intervention only</strong>; pain relief, mouth care, positioning, company and honest answers all continue and usually intensify. It is made with the patient where possible and the family, by the senior clinician, documented and reviewed. Never say or write that there is nothing more to be done.", "Beneficence, non-maleficence, autonomy."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FAM-1722.svg",
          alt: "Breaking bad news and the family who ask you not to — a structure (private place, ask what she understands and how much she wants to know, warning then the news in plain words, silence, respond to feeling, agree what happens next), the response to \"please do not tell her\" (ask what they fear; you will not lie and will not force information), care that continues after a DNAR decision, and after a death in a Ghanaian setting: loud communal grief is normal, give private time with the body, ask about washing and rites, explain the mortuary steps once and write them down.",
          caption: "Most of breaking bad news is asking and waiting rather than telling. To the family who ask you not to tell her: you will not lie to her, and you will not force information on her — you will follow her questions.",
        },
        {
          type: "table",
          heading: "Harm, protection and the law — when the nurse must act",
          columns: ["Situation", "What the nurse does", "Legal basis"],
          rows: [
            ["<strong>Female genital mutilation</strong> — a family asks a nurse to perform it \"safely\" in a clinic", "<strong>Refuses</strong>; explains that it is a crime and harmful; a child at risk is a safeguarding matter and is reported; a woman or girl who has undergone it receives care without judgement.", "Criminal Offences Act, 1960 (Act 29), section 69A as amended (1994, 2007) — an offence punishable by imprisonment; medicalising it is not a defence."],
            ["<strong>Suspected child abuse</strong> — injuries on a child that do not match the story; a child who flinches; a parent who delays care", "<strong>Treat the child first, record findings objectively</strong> (measurements, diagrams, the words used, not conclusions), <strong>do not confront the carer alone, do not let the child leave unassessed, and report to the designated safeguarding lead and the Department of Social Welfare / DOVVSU</strong> as the Children's Act requires.", "Children's Act, 1998 (Act 560); the child's welfare is paramount; failure to report may itself be an offence."],
            ["<strong>Intimate-partner violence</strong> — a woman discloses that her husband beats her and asks you not to tell anyone", "<strong>Assess her immediate safety first</strong> (is she in danger tonight, are there children, weapons, somewhere to go), treat injuries, document carefully with her consent, give information about DOVVSU, shelters and protection orders, respect her decision about reporting unless a child is at risk, and keep the record confidential from the partner.", "Domestic Violence Act, 2007 (Act 732); protection orders; DOVVSU of the Ghana Police Service."],
            ["<strong>Elder abuse and financial abuse</strong> — an older person with unexplained injuries, neglect, or a relative controlling her pension", "Assess, document, ensure safety, involve social welfare; an older woman accused of witchcraft is protected and her confusion assessed medically.", "Criminal law; the duty of care; advocacy."],
            ["<strong>Restraint and seclusion</strong> — a confused patient keeps pulling out his cannula; a relative suggests tying his wrists", "<strong>Treat the cause</strong> (pain, hypoxia, retention, infection, drugs), use the <strong>least restrictive measure that works</strong> — a sitter, a family member, moving him near the station, hiding the cannula, re-siting it — and restrain only for imminent danger when less restrictive measures have failed, with authorisation, observation, release and review, and a full record.", "Mental Health Act, 2012 (Act 846), section 58 for psychiatric settings; the common-law duty of care elsewhere; a child held still for a procedure is held briefly, with explanation and a parent, never tied."],
            ["<strong>Detention under the Mental Health Act</strong>", "Voluntary patients may leave on written request within 24 hours; involuntary admission needs the statutory route and review; the emergency certificate allows up to 72 hours; the patient is told of her right to appeal to the Review Tribunal as part of admission; capacity is presumed; children are kept separate from adults; attempted suicide is no longer a crime (2023) — a person who has attempted suicide is brought to care, not to a police station.", "Act 846, sections 39–41, 42–44, 48–49, 24–26, 58, 65, 97."],
            ["<strong>The man chained at a prayer camp</strong>", "Engage the family and the camp without confrontation, explain, offer treatment and follow-up, involve the community psychiatric nurse and, where the person is in danger, the authorities under the Act; chaining is unlawful and the goal is treatment, not punishment of the family.", "Act 846; GHS mental health policy."],
            ["<strong>The prisoner under police guard</strong>", "Same standard of care, same consent and confidentiality, examination out of earshot of the escort where safety allows; restraints removed for examination where safe; the nurse does not become an agent of the police.", "Patients' Charter; constitutional rights."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PSY-1423.svg",
          alt: "Detention under the Mental Health Act 2012, Act 846 — voluntary admission (sections 39–41, leave on written request within 24 hours), involuntary admission (42–44, court order and two recommendations, review), the certificate of urgency (48–49, up to 72 hours), the Review Tribunal (24–26), seclusion and restraint only for imminent danger with authorisation (58), capacity presumed (97), children separate (65), and attempted suicide decriminalised in 2023.",
          caption: "Every power to detain comes tied to a time limit and to somebody who reviews it. Detaining a voluntary patient by simply not opening the door is unlawful — and telling her about the Tribunal is part of admitting her.",
        },
        {
          type: "text",
          heading: "Discrimination, stigma and disability",
          paragraphs: [
            "Nurses who use a <strong>separate set of crockery</strong> for patients with HIV, a <strong>red sticker</strong> on the notes, or who are <strong>reluctant to care</strong> for a patient because of his diagnosis are practising discrimination and breaching the Charter — and they are also wrong about infection control, which protects everyone through standard precautions and nobody through labels. Stigma drives people away from testing and treatment, so it worsens outcomes for the whole community, not only for the patient in front of you. A nurse who refuses to care for a patient on grounds of diagnosis, religion, ethnicity or ability to pay is referred to her manager; her objection is not a conscientious objection.",
            "The <strong>Persons with Disability Act, 2006 (Act 715)</strong> gives the nurse language for advocacy: no discrimination in any form (section 4), access to public buildings (section 6), <strong>free general medical care in public health facilities</strong> (section 31), rehabilitation in the community (section 15), and an offence for breach (section 8), enforced through the National Council on Persons with Disability. The <strong>social model</strong> says the flight of steps disables the wheelchair user, not her legs — so the nurse's response to a clinic she cannot enter is to quote the section, put the barrier in writing and take it to someone with a budget. <strong>Person-first, respectful language</strong> — \"the woman in bed 4 with diabetes\", not \"the diabetic\" or \"the amputee\" — is part of the same duty.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-HCB-1327.svg",
          alt: "Ghana's Persons with Disability Act, 2006, Act 715 — rights (no discrimination s.4, access s.6, free education s.18, free general medical care in public facilities s.31, community rehabilitation s.15), duties on employers and the Health Ministry, enforcement through the National Council on Persons with Disability, and the gap between the law and the ramp.",
          caption: "A right written in a statute is not a ramp built at a clinic door. The Act gives the nurse the words for advocacy: quote the section, put the barrier in writing, take it to someone with a budget.",
        },
        {
          type: "text",
          heading: "Culture, religion, traditional practice and grief",
          paragraphs: [
            "Sort traditional practices before you judge them: most are harmless (naming ceremonies, prayer, dietary customs) and are left alone; some are helpful and can be built on; a few — uvulectomy, enemas for infants, cutting, withholding colostrum, chaining — cause the injury you are treating and are addressed directly. A patient who wishes to continue a herbal remedy alongside prescribed medicines is <strong>asked what it is and how much</strong>, told honestly about the risks you know of (kidney, liver, interactions) and <strong>not threatened</strong>, because the threat teaches him to hide it. A competent adult who declines surgery in favour of traditional treatment is respected after an honest explanation, and the door is left open. The nurse <strong>respects a belief without endorsing a treatment</strong>: \"many people find prayer a comfort; this medicine is what will treat the infection\".",
            "After a death in a Ghanaian setting, <strong>loud, public, communal grieving is normal and healthy</strong>, not a breakdown to be sedated. Give the family a private space and time with the body; ask about washing and <strong>religious rites and last offices</strong> before proceeding — Muslim families will want same-day burial and family washing, Christian families may want a pastor — and explain the mortuary and documentation steps once, slowly, and write them down. A family who ask to perform rites at the bedside are accommodated where safety and the other patients allow. Respect for culture is not the same as abandoning judgement: a practice that harms the next patient is still declined, with explanation.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about ethics and dilemmas",
          body: "Autonomy wins for a competent adult's own body; justice allocates the scarce bed by clinical need, not by who the relative is; the family cannot veto telling a competent patient her diagnosis — you will not lie and will not force information; a request to end a life is explored, not granted and not dismissed; a DNAR decision stops one intervention and nothing else. Female genital cutting is refused — it is a criminal offence under Act 29; suspected child abuse is treated, documented objectively and reported; a woman disclosing partner violence has her immediate safety assessed first; restraint is a last resort for imminent danger after less restrictive measures, with treatment of the cause; under Act 846 a voluntary patient leaves on written request within 24 hours and restraint requires authorisation; attempted suicide is no longer a crime. A red HIV sticker and separate crockery are discrimination; Act 715 guarantees free general medical care in public facilities and no discrimination; the steps, not the legs, disable the wheelchair user. Gifts of money are declined; personal phone numbers are not given; a conscientious objector arranges cover in advance and never abandons the patient; loud communal grief is normal; herbal use is asked about, not punished.",
        },
      ],
      keyPoints: [
        "Autonomy (the competent patient decides), beneficence (do good), non-maleficence (do no harm, including by practising beyond competence) and justice (fairness, resources by need) are joined by veracity, fidelity and advocacy; recognise the cue words and apply the tie-breakers — autonomy over her own body, no benefit imposed without consent, scarcity decided by need, never deceive.",
        "The family cannot veto truth-telling: ask what they fear, promise not to lie and not to force information, and follow the patient's own questions; errors are disclosed after the patient is treated and the prescriber told.",
        "Money and significant gifts are declined, personal numbers are not given, relationships with current patients are forbidden, conscientious objection is declared in advance with cover arranged and never abandons the patient, a request for assisted dying is explored and relieved, and a DNAR decision concerns one intervention only.",
        "FGM is refused and is a crime under section 69A of Act 29; suspected child abuse is treated, recorded objectively and reported under the Children's Act; intimate-partner violence is met with a safety assessment first under the Domestic Violence Act; elder and financial abuse are documented and referred.",
        "Restraint and seclusion are last resorts for imminent danger after treating the cause and trying less restrictive measures, with authorisation, observation and record; the Mental Health Act 846 gives voluntary patients the right to leave within 24 hours, time-limits every detention, presumes capacity, separates children, requires patients to be told of the Review Tribunal — and attempted suicide is no longer a crime.",
        "Discrimination by diagnosis, religion, ethnicity or ability to pay breaches the Charter; HIV stickers and separate crockery are stigma, not infection control; the Persons with Disability Act 715 guarantees non-discrimination, access and free general medical care in public facilities, and the social model locates disability in the barrier.",
        "Traditional practices are sorted into harmless, helpful and harmful; herbal use is asked about openly and beliefs respected without endorsing harmful treatment; after a death, communal grief is normal, rites and washing are asked about before last offices, and the practical steps are explained slowly and written down.",
      ],
      quiz: {
        questionIds: ["NG-MOD-LEAD-013"],
        categories: ["leadership-delegation"],
        keywords: ["autonomy","justice","veracity","truth telling","not to tell","diagnosis from","veracity after an error","wrong time","cancer asks","allocating a scarce","intensive care bed","senior official","fair","accepting gifts","gift","substantial sum","boundar","personal phone number","therapeutic relationship","conscientious objection","sincere personal objection","interpreting for","advocacy","advocacy for a patient","cannot afford a prescribed","stops taking","discriminat","reluctant to care","refusing to care","hiv status","stigma","stigma in the ward","red sticker","separate set of crockery","end his life","assistance in dying","care of the dying patient","recognising the dying phase","female genital","genital cutting","child abuse","suspected child abuse","injuries on a child","do not match","safeguard","gender based violence","husband beats","elder abuse","financial abuse","witchcraft","restraint","least restrictive","tying his wrists","seclusion","chained","mental health act","act 846","detention","voluntary patient","emergency detention","decriminalisation","attempted suicide","police custody","under police guard","custody","prisoner","disability","act 715","persons with disability","models of disability","social model","wheelchair","inclusive language","respectful language","language and labelling","cultural beliefs","culturally appropriate","religious rites","traditional rites","last offices","head of family","family requests","family of a competent","bad news","breaking bad news","professional boundaries","ethic","whistleblow","under act 720","act 720","sex selection","loud grieving","bereaved family","supporting a newly bereaved","justice in allocating","equity","preserving dignity and autonomy","toileting and dignity","isolation and dignity","dignity during a procedure","chaperone and dignity","respecting belief"]
      },
    },
    {
      slug: "negligence-accountability-and-the-nursing-and-midwifery-council",
      title: "Negligence, accountability and the Nursing and Midwifery Council",
      minutes: 17,
      objectives: [
        "State the four elements of negligence and apply them to a ward incident, and distinguish the nurse's accountability to the patient, the employer, the Council and the courts.",
        "Describe the Nursing and Midwifery Council's functions under Act 857 — registration, the PIN and AIN, renewal and CPD, the offence of practising unregistered, the disciplinary process and its sanctions.",
        "Act correctly after an error, when asked to do something unsafe, when a colleague is impaired or dishonest, and when disclosure outside the facility is justified under the Whistleblower Act.",
        "Name the laws that frame Ghanaian nursing practice and explain, for each, the one thing a nurse must know.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Accountability — four ways at once",
          paragraphs: [
            "A nurse answers for what she did and for what she allowed, and she answers <strong>four ways at once</strong>. To the <strong>patient</strong>, through a civil claim in negligence, where the remedy is compensation. To the <strong>employer</strong>, through a disciplinary process leading to warning, transfer or dismissal. To the <strong>Nursing and Midwifery Council</strong>, through a misconduct inquiry leading to reprimand, suspension or removal from the register. And to the <strong>courts</strong>, through a criminal charge in the most serious cases — assault, theft of controlled drugs, manslaughter by gross negligence. <strong>One act can trigger all four, and being cleared by the employer does not clear the nurse with the Council.</strong> Responsibility is the duty to perform a task; accountability is being answerable for the outcome and for the judgement that preceded it — which is why it cannot be delegated and why \"I was told to\" has never protected a nurse before the Council.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2212.svg",
          alt: "Accountability — answerable four ways at once: to the patient (civil claim, compensation), the employer (disciplinary process), the Council (misconduct inquiry, reprimand, suspension, removal) and the courts (criminal charge); the four things negligence requires (duty, breach, causation, harm); and the four-step order when asked to do something unsafe: say so, ask the prescriber, escalate, record.",
          caption: "One act can trigger all four routes, and being cleared by your employer does not clear you with the Council. Negligence needs all four of duty, breach, causation and harm — or the claim fails.",
        },
        {
          type: "table",
          heading: "The four elements of negligence — all four, or the claim fails",
          columns: ["Element", "Meaning", "Ward example: a confused patient falls from a bed with the rails left down"],
          rows: [
            ["<strong>Duty of care</strong>", "A patient in your care — the duty arises from the relationship, from the moment he is admitted to your ward or you accept the handover.", "He was an inpatient on your ward; you owed him a duty."],
            ["<strong>Breach</strong>", "Care fell below the <strong>standard of a reasonable nurse</strong> in the same role with the same information — judged by policy, guidelines, training and what a responsible body of nurses would have done, not by hindsight.", "Policy and his falls-risk assessment required rails up and hourly checks; they were down and he was not checked for three hours."],
            ["<strong>Causation</strong>", "The breach <strong>caused</strong> the injury — but for the breach, the harm would not have occurred, or the breach materially contributed.", "He fell because the rails were down; had they been up he would not have fallen."],
            ["<strong>Harm (damage)</strong>", "Actual loss resulted — injury, prolonged stay, cost, pain.", "A fractured neck of femur, surgery and six extra weeks in hospital."],
          ],
        },
        {
          type: "text",
          heading: "Standard of care, vicarious liability and indemnity",
          paragraphs: [
            "The <strong>standard</strong> is that of the reasonably competent practitioner in that role — a student is judged by the standard of the registered nurse she is performing the task for, which is why she performs it only under supervision; a newly qualified nurse is judged as a registered nurse, which is why she declines what she is not competent to do. <strong>Documentation</strong> is the evidence by which breach and causation are decided years later: the entry that says \"rails up, checked 02:00, 03:00, 04:00\" wins the case, and the gap in the chart loses it. An employer is <strong>vicariously liable</strong> for negligence by staff acting in the course of their employment — the facility pays the compensation — but vicarious liability does not remove the nurse's personal accountability to the Council or the criminal court, and it does not cover a nurse acting outside her employment, such as in private practice. That is why a nurse in <strong>private practice holds professional indemnity insurance</strong>: it meets a compensation claim she would otherwise meet from her own pocket.",
          ],
        },
        {
          type: "text",
          heading: "The Nursing and Midwifery Council",
          paragraphs: [
            "The Nursing and Midwifery Council of Ghana is established under the <strong>Health Professions Regulatory Bodies Act, 2013 (Act 857)</strong> to <strong>protect the public</strong> by setting standards of education and practice, approving training institutions and programmes, conducting the licensing examination, <strong>registering</strong> practitioners and keeping the register, issuing the <strong>PIN</strong> (professional identification number) to nurses and midwives and the <strong>AIN</strong> to nurse assistants, renewing registration annually (<strong>by 31 January</strong>) on evidence of CPD (<strong>10, 15 and 20 credits</strong> by grade), publishing the Code of Ethics and the scope of practice, and investigating and disciplining misconduct. The Registrar must be told of any change of name or address.",
            "Practising on a <strong>lapsed PIN</strong> — a nurse whose PIN expired two weeks ago and who is still on the roster — is <strong>unregistered practice and an offence under section 73 of Act 857</strong>, however competent the nurse and however short the ward; she tells her manager, stops independent practice until renewal is confirmed, and the manager who knowingly rostered her shares the fault. <strong>Professional misconduct</strong> includes practising while impaired, falsifying records, abuse of patients, breach of confidentiality, practising beyond scope, criminal convictions, dishonesty and bringing the profession into disrepute. A complaint goes to the Council, which investigates; the <strong>Disciplinary Committee</strong> holds an inquiry at which the practitioner may attend, be represented and call evidence; the sanctions if misconduct is proved are <strong>reprimand</strong>, <strong>suspension from practice</strong> for a period, <strong>removal of the name from the register</strong>, or <strong>postponement of the order on conditions</strong> (supervised practice, training, treatment). There is a right of appeal, and a name removed may later be restored on application. Suspension is not the end of a career; <strong>concealment</strong> usually is.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRC-2423.svg",
          alt: "The five rights of medication administration plus documentation, reason and response, the patient's right to refuse, and the correct order of actions after an error.",
          caption: "After an error the order is fixed: patient, then prescriber, then paper — check and treat the patient, tell the prescriber or person in charge, record factually and complete the incident form, and be open with the patient. Never paper first, and never nothing at all.",
        },
        {
          type: "list",
          heading: "The moment you make a mistake — the order that protects the patient and the nurse",
          style: "steps",
          items: [
            "<strong>Check and treat the patient</strong>: observations, and whatever the specific error requires — glucose after the wrong insulin, an antidote, a doctor at the bedside.",
            "<strong>Tell the prescriber or the person in charge straight away</strong>; speed limits the harm, and the decision about what else is needed is not yours alone.",
            "<strong>Record what happened factually</strong> in the notes — the drug, dose, time, what was done, who was informed — and complete the <strong>incident form</strong>; the form is how the ward learns, not a punishment record.",
            "<strong>Be open with the patient and family</strong> about what occurred and what is being done; apologise for the event — an apology is not an admission of negligence, and concealment is misconduct.",
            "<strong>Never alter or erase an entry.</strong> A wrong entry is corrected with a single line through it so that it remains legible, the correction written, and the correction signed, dated and timed; an entry in the wrong patient's notes is handled the same way, and the correct notes are written up.",
          ],
        },
        {
          type: "text",
          heading: "The unsafe instruction, the dishonest request and the Whistleblower Act",
          paragraphs: [
            "When asked to do something you believe is unsafe the order is: <strong>say so, ask the prescriber, escalate upward, record it</strong>. Refusing is not insubordination when the task is outside your competence or clearly unsafe; carrying it out is the offence. A colleague who asks you to <strong>sign that observations were done</strong> when they were not is declined — signing for care not given is falsification. A nurse who has <strong>given another patient's medication</strong> and asks you to keep it quiet is told that the patient must be checked and the prescriber informed now, and if she will not, you do it.",
            "Concerns are raised <strong>inside the facility first</strong> — the nurse in charge, the manager, the medical director, the incident system — in writing, with facts and dates. Where the facility fails to act, or the wrongdoing involves those who would receive the report, the <strong>Whistleblower Act, 2006 (Act 720)</strong> protects a nurse who discloses impropriety — a crime, a danger to health or safety, miscarriage of justice, misuse of public funds — provided the disclosure is made <strong>in good faith</strong>, on <strong>reasonable belief</strong> that it is substantially true, and <strong>to a listed recipient</strong>: the employer, a police officer, the Attorney-General, the Auditor-General, the Commission on Human Rights and Administrative Justice, the Economic and Organised Crime Office, a member of Parliament, a chief, a head of a recognised religious body, a District Chief Executive or a Minister, among others. The Act protects the whistleblower from victimisation and provides for a reward where public funds are recovered; it does not protect malicious or reckless disclosure, and it does not protect disclosure to the press or social media.",
          ],
        },
        {
          type: "table",
          heading: "The laws every Ghanaian nurse should be able to name",
          columns: ["Law", "The one thing to know"],
          rows: [
            ["<strong>1992 Constitution</strong>", "Fundamental rights — dignity, life, non-discrimination, privacy; article 28(5) defines a child as under eighteen."],
            ["<strong>Health Professions Regulatory Bodies Act, 2013 (Act 857)</strong>", "Establishes the Nursing and Midwifery Council (and the Medical and Dental, Pharmacy, Allied Health and Psychology Councils); registration, PIN/AIN, CPD, misconduct, and the offence of unregistered practice."],
            ["<strong>Ghana Health Service and Teaching Hospitals Act, 1996 (Act 525)</strong>", "Creates the Ghana Health Service and the teaching hospital boards; the Ministry sets policy, the Service delivers."],
            ["<strong>Health Institutions and Facilities Act, 2011 (Act 829)</strong>", "Creates the Health Facilities Regulatory Agency (HeFRA), which licenses and inspects every health facility, public and private."],
            ["<strong>National Health Insurance Act, 2012 (Act 852)</strong>", "The NHIS and the Authority; benefit package, exemptions, provider accreditation and claims."],
            ["<strong>Public Health Act, 2012 (Act 851)</strong>", "Notifiable diseases and quarantine, immunisation, tobacco control, the Food and Drugs Authority, environmental sanitation."],
            ["<strong>Mental Health Act, 2012 (Act 846)</strong>", "Rights of persons with mental illness, voluntary and involuntary admission, time limits, the Tribunal, restraint only for imminent danger, presumption of capacity."],
            ["<strong>Children's Act, 1998 (Act 560)</strong>", "The child's welfare is paramount; the duty to report abuse; consent for a child rests with the parent or guardian."],
            ["<strong>Domestic Violence Act, 2007 (Act 732)</strong>", "Protection orders; DOVVSU; the duty of health workers to assist and document."],
            ["<strong>Persons with Disability Act, 2006 (Act 715)</strong>", "No discrimination; access; free general medical care in public facilities."],
            ["<strong>Criminal Offences Act, 1960 (Act 29)</strong>", "Assault (treatment without consent), FGM (section 69A), abortion permitted only on defined grounds (section 58), negligence causing harm; attempted suicide decriminalised in 2023."],
            ["<strong>Data Protection Act, 2012 (Act 843)</strong>", "Personal and health data are processed lawfully, kept secure and disclosed only with consent or lawful authority."],
            ["<strong>Whistleblower Act, 2006 (Act 720)</strong>", "Protects good-faith disclosure of impropriety to a listed recipient."],
            ["<strong>Public Procurement Act, 2003 (Act 663), amended 2016 (Act 914)</strong>", "Competitive tendering by default; single-source only by exception; conflicts of interest declared."],
            ["<strong>Labour Act, 2003 (Act 651)</strong>", "Hours, rest, leave, twelve weeks' maternity leave, safe workplace, fair dismissal, unions."],
            ["<strong>Patients' Charter (Ghana Health Service)</strong>", "Not a statute but the standard the Council and the courts expect: information, consent and refusal, second opinion, identity of caregivers, confidentiality, charges explained, complaints."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about negligence and regulation",
          body: "Negligence requires duty, breach, causation and harm — all four. A nurse is accountable to the patient, the employer, the Council and the courts at once; vicarious liability does not remove personal accountability; a private practitioner needs indemnity insurance. The Nursing and Midwifery Council is established under Act 857; registration is renewed by 31 January; CPD is 10, 15 or 20 credits by grade; practising on an expired PIN is unregistered practice and an offence; the Council's sanctions are reprimand, suspension, removal from the register or postponement of the order on conditions, with a right to attend, be represented and appeal. After an error: patient, prescriber, paper — and openness with the patient; entries are corrected with a single line, signed, dated and timed, never erased. An unsafe instruction: say so, ask, escalate, record. The Whistleblower Act 720 protects a disclosure made in good faith, on reasonable belief, to a listed recipient such as the employer, the police, the Attorney-General, CHRAJ or a chief — not to the press.",
        },
      ],
      keyPoints: [
        "A nurse is accountable four ways at once — to the patient in negligence, to the employer in discipline, to the Council in a misconduct inquiry and to the criminal court — and one act can trigger all four; being cleared by the employer does not clear her with the Council.",
        "Negligence needs duty, breach of the reasonable-nurse standard, causation and actual harm; documentation decides breach and causation years later; vicarious liability makes the employer pay but leaves personal accountability intact, and private practitioners carry indemnity insurance.",
        "The Nursing and Midwifery Council (Act 857) protects the public through education standards, the licensing examination, the register, the PIN and AIN, annual renewal by 31 January on 10/15/20 CPD credits, the Code of Ethics and the scope of practice, and discipline.",
        "Practising on a lapsed PIN is unregistered practice and an offence under section 73, however short the ward; misconduct proved before the Disciplinary Committee leads to reprimand, suspension, removal or a postponed order on conditions, with representation and appeal, and concealment is what ends careers.",
        "After an error: check and treat the patient, tell the prescriber or person in charge, record factually and complete the incident form, be open with the patient — and correct a wrong entry with a single line, signed, dated and timed.",
        "An unsafe instruction is met with say so, ask the prescriber, escalate and record; signing for care not given and concealing another nurse's error are falsification; concerns go inside the facility first and, where it fails to act, the Whistleblower Act 720 protects good-faith disclosure to a listed recipient.",
        "Know the framing laws — the Constitution (child under eighteen), Acts 857, 525, 829, 852, 851, 846, 560, 732, 715, 29, 843, 720, 663/914 and 651 — and the Patients' Charter, each for the single rule it imposes on practice.",
      ],
      quiz: {
        questionIds: ["NG-MOD-LEAD-014"],
        categories: ["leadership-delegation"],
        keywords: ["negligen","elements of negligence","bed rails","breach","causation","liability","indemnity","accountab","accountability","delegates a task to a nurse assistant","performs it incorrectly","unsafe instruction","ten times too high","doctor instructs","the council","disciplinary","sanction","misconduct","professional misconduct","the register","renew her registration","renewal of the pin","pin expired","expired two weeks ago","valid pin","practising without","continuing professional development","credit requirement","senior officer","whistleblow","act 720","impaired","smells strongly of alcohol","reporting a colleague","falsifying observation","falsif","retrospective documentation","sign that observations were done","incident report","medication error disclosure","documentation and error disclosure","another patient's medication","legal","criminal","legislation","patient complaint","wishes to complain","witness","evidence in an assault","preserving evidence","professionalism","uniform","professional accountability","professional indemnity","insurance for a health business","death on a practitioner's premises","public procurement","whistleblower"]
      },
    },
  ],
};
