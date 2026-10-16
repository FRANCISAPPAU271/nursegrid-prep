import type { AuthoredQuestion } from "./authored-bank";

export const RSCH_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-RSCH-001",
    categorySlug: "leadership-delegation",
    stem: "A hospital clinical nurse specialist is explaining the fundamental difference between Nursing Research and Clinical Quality Improvement (QI) to ward nurses. Which statement accurately distinguishes research from quality improvement?",
    choices: [
      {
        id: "a",
        text: "Research aims to generate new generalizable scientific knowledge and test hypotheses across broad populations, whereas Quality Improvement aims to improve local clinical processes and patient care outcomes within a specific healthcare facility",
      },
      {
        id: "b",
        text: "Research never requires ethical review board approval, whereas quality improvement always requires full institutional review board clearance",
      },
      {
        id: "c",
        text: "Quality improvement studies are published in international textbooks, whereas research findings are kept secret within the hospital",
      },
      {
        id: "d",
        text: "Research and quality improvement are identical terms with no methodological or regulatory distinction",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Nursing research is a systematic scientific inquiry designed to generate new generalizable knowledge, discover relationships, or test biological/behavioral hypotheses that can be applied beyond the local institution. Quality Improvement (QI), by contrast, uses established evidence and systematic data-guided activities to bring about immediate, practical improvements in local healthcare delivery processes and outcomes within a specific clinical setting. Research typically requires formal IRB ethical oversight (b); research is intended for dissemination (c); and they have distinct methodologies and governance (d).",
    strategy: "Research vs. QI: Research generates new, generalizable knowledge; Quality Improvement optimizes local clinical processes using existing evidence.",
    difficulty: "easy",
    tags: ["research", "evidence-based-practice", "quality-improvement", "methodology", "leadership"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-002",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher conducts an experimental study entitled: 'The effect of a 10-minute warm foot bath before bedtime on sleep quality in hospitalized elderly clients.' In this study, what are the Independent and Dependent variables?",
    choices: [
      {
        id: "a",
        text: "The independent variable is hospital discharge status; the dependent variable is room temperature",
      },
      {
        id: "b",
        text: "The independent variable is the 10-minute warm foot bath; the dependent variable is sleep quality",
      },
      {
        id: "c",
        text: "The independent variable is sleep quality; the dependent variable is the warm foot bath",
      },
      {
        id: "d",
        text: "The independent variable is client age; the dependent variable is the nurse's years of experience",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In scientific research, the Independent Variable (IV) is the experimental intervention, treatment, or condition manipulated by the researcher (the presumed cause—here, the 10-minute warm foot bath). The Dependent Variable (DV) is the outcome or response measured to determine the effect of the intervention (the presumed effect—here, the client's sleep quality). Option c reverses the cause and effect; options a and d identify unrelated demographic or confounding factors.",
    strategy: "Variables: Independent variable = Intervention/Cause (manipulated). Dependent variable = Outcome/Effect (measured).",
    difficulty: "easy",
    tags: ["research", "independent-variable", "dependent-variable", "experimental-design", "methodology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-003",
    categorySlug: "leadership-delegation",
    stem: "A nurse proposes the following research hypothesis: 'Clients receiving structured preoperative virtual reality education will experience significantly lower postoperative anxiety scores than clients receiving standard printed brochures.' How is this hypothesis categorized?",
    choices: [
      {
        id: "a",
        text: "Null hypothesis",
      },
      {
        id: "b",
        text: "Non-directional hypothesis",
      },
      {
        id: "c",
        text: "Directional research hypothesis",
      },
      {
        id: "d",
        text: "Complex qualitative hypothesis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A directional research hypothesis explicitly predicts the direction of the expected relationship or difference between groups (e.g., specifying that group A will have 'lower anxiety' or 'higher scores' than group B). A non-directional hypothesis (b) predicts a difference exists without specifying which group will be higher or lower (e.g., 'there will be a difference in anxiety scores'). A null hypothesis (a) states that no relationship or difference exists between the variables (e.g., 'there will be no difference in anxiety scores'). Qualitative studies (d) explore phenomena rather than testing statistical hypotheses.",
    strategy: "Hypotheses: Directional specifies direction (higher, lower, greater); Non-directional predicts difference without direction; Null predicts no difference.",
    difficulty: "easy",
    tags: ["research", "directional-hypothesis", "null-hypothesis", "research-design", "variables"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-004",
    categorySlug: "leadership-delegation",
    stem: "A clinical trial evaluates the efficacy of a new topical antimicrobial barrier film compared to standard gauze dressings in preventing surgical site infections. To be classified as a true Randomized Controlled Trial (RCT), which three core methodological properties must be present?",
    choices: [
      {
        id: "a",
        text: "Historical controls, open-label assignment, and purposive convenience selection",
      },
      {
        id: "b",
        text: "Retrospective chart review, snowball sampling, and qualitative thematic coding",
      },
      {
        id: "c",
        text: "Quasi-experimentation, pre-test without post-test, and unblinded self-selection",
      },
      {
        id: "d",
        text: "Manipulation (of the independent variable), Control (comparison group), and Randomization (random allocation of participants to intervention or control arms)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A true experimental design or Randomized Controlled Trial (RCT) requires three essential scientific pillars: 1) MANIPULATION: The researcher actively introduces an intervention (the independent variable) to some participants; 2) CONTROL: The researcher maintains a control or comparison group that does not receive the experimental treatment (e.g., placebo, standard care); 3) RANDOMIZATION: Participants are randomly assigned to groups, ensuring every subject has an equal probability of assignment and balancing confounding baseline characteristics. Option d correctly identifies all three pillars.",
    strategy: "Pillars of a true experiment (RCT): Manipulation, Control group, and Randomization.",
    difficulty: "medium",
    tags: ["research", "rct", "randomized-controlled-trial", "experimental-design", "randomization"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-005",
    categorySlug: "leadership-delegation",
    stem: "An epidemiological study identifies 200 clients diagnosed with deep vein thrombosis (cases) and 200 clients without thrombosis (controls) admitted to the same facility over the past five years, looking backward in time to compare their prior oral contraceptive use. Which observational study design is this?",
    choices: [
      {
        id: "a",
        text: "Case-control study",
      },
      {
        id: "b",
        text: "Prospective cohort study",
      },
      {
        id: "c",
        text: "Cross-sectional survey",
      },
      {
        id: "d",
        text: "Double-blind randomized controlled trial",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A case-control study is a retrospective observational design that begins with the outcome: individuals who already have the disease or condition (cases) are matched with individuals who do not (controls), and researchers look back in time (retrospectively) to determine differences in prior exposure to risk factors (calculating an Odds Ratio). A prospective cohort study (b) starts with exposed and unexposed groups free of disease and follows them forward in time. A cross-sectional study (c) measures exposure and outcome simultaneously at a single point in time. An RCT (d) involves active experimental randomization.",
    strategy: "Study designs: Case-control starts with diseased cases vs. healthy controls and looks backward for past exposures (retrospective). Cohort follows groups forward in time.",
    difficulty: "medium",
    tags: ["research", "case-control-study", "epidemiology", "observational-study", "odds-ratio"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-006",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher conducts a phenomenological qualitative study exploring the lived experiences of family caregivers caring for terminally ill relatives with dementia. The researcher conducts in-depth interviews until no new themes, concepts, or insights emerge from subsequent participants. What qualitative research concept has been reached?",
    choices: [
      {
        id: "a",
        text: "Statistical power calculation of 80%",
      },
      {
        id: "b",
        text: "Data saturation",
      },
      {
        id: "c",
        text: "Type II statistical error",
      },
      {
        id: "d",
        text: "Cronbach's alpha internal consistency",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In qualitative research, sample size is not determined by pre-study statistical mathematical formulas (power analysis). Instead, sampling continues until 'Data Saturation' (or informational redundancy) is achieved—the point at which gathering additional participant data no longer reveals new perspectives, properties, or themes. Statistical power (a), Type II errors (c), and Cronbach's alpha (d) are quantitative psychometric and inferential statistical concepts irrelevant to qualitative sampling closure.",
    strategy: "Qualitative research standard: Sample size is determined by Data Saturation—continuing interviews until no new themes or information emerge.",
    difficulty: "easy",
    tags: ["research", "qualitative-research", "data-saturation", "phenomenology", "sampling"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-007",
    categorySlug: "leadership-delegation",
    stem: "To enhance the trustworthiness and rigor of a qualitative study on adolescent adherence to sickle cell disease therapy, the researcher returns interview transcripts and emerging thematic summaries to the adolescent participants to verify that the findings accurately reflect their lived experiences. Which trustworthiness technique is this?",
    choices: [
      {
        id: "a",
        text: "Double-blind randomization",
      },
      {
        id: "b",
        text: "Cluster sampling",
      },
      {
        id: "c",
        text: "Member checking (participant validation)",
      },
      {
        id: "d",
        text: "Multivariate linear regression",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Member checking (also known as participant validation) is a core method used in qualitative research to establish Credibility (the qualitative parallel to internal validity). The researcher shares transcripts, analytic categories, or preliminary thematic findings with study participants to allow them to confirm whether the interpretations accurately and authentically represent their true lived realities. Randomization (a), cluster sampling (b), and regression (d) belong exclusively to quantitative statistical methods.",
    strategy: "Qualitative trustworthiness: Member checking involves sharing findings with participants to verify the accuracy of the researcher's interpretations.",
    difficulty: "easy",
    tags: ["research", "member-checking", "trustworthiness", "credibility", "qualitative-rigor"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-008",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher wants to survey public hospital registered nurses across Ghana regarding burnout. To ensure that nurses from all ten former administrative regions and both secondary and tertiary hospitals are proportionally represented in the sample, the researcher divides the national nursing roster into regional and facility tiers, then randomly selects participants from each tier. Which sampling method is this?",
    choices: [
      {
        id: "a",
        text: "Snowball sampling",
      },
      {
        id: "b",
        text: "Convenience sampling",
      },
      {
        id: "c",
        text: "Purposive expert sampling",
      },
      {
        id: "d",
        text: "Stratified random sampling",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Stratified random sampling is a probability sampling method in which the target population is first divided into mutually exclusive, homogeneous subgroups or strata (e.g., geographical regions, hospital tiers, clinical cadres), and random samples are drawn proportionally from each stratum. This ensures that smaller or minority sub-populations are adequately and representatively reflected in the final sample, minimizing sampling error. Snowball (a), convenience (b), and purposive (c) are non-probability sampling methods prone to severe selection bias.",
    strategy: "Sampling methods: Stratified random sampling divides the population into strata (subgroups) and randomly samples within each stratum to ensure representativeness.",
    difficulty: "medium",
    tags: ["research", "sampling-methods", "stratified-random-sampling", "probability-sampling", "bias-reduction"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-009",
    categorySlug: "leadership-delegation",
    stem: "A researcher develops a new 20-item Likert scale measuring 'Nurse Compassion Fatigue.' When pilot testing the instrument, the statistical analysis reveals a Cronbach's alpha coefficient of 0.88. How should the researcher interpret this result?",
    choices: [
      {
        id: "a",
        text: "The instrument demonstrates strong internal consistency reliability, indicating that the questionnaire items correlate well and measure the same underlying construct",
      },
      {
        id: "b",
        text: "The scale is completely invalid and must be discarded because alpha exceeds 0.05",
      },
      {
        id: "c",
        text: "The scale has an unacceptable 88% error rate",
      },
      {
        id: "d",
        text: "The instrument demonstrates high content validity across all hospital wards",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Cronbach's alpha ($\alpha$) is a measure of internal consistency reliability for multi-item psychometric scales, evaluating the degree to which items that propose to measure the same general construct produce similar scores. A Cronbach's alpha of 0.70 to 0.79 is considered acceptable, 0.80 to 0.89 is good/strong, and $\ge 0.90$ is excellent. An alpha of 0.88 confirms strong internal reliability. It is not a p-value where $< 0.05$ is sought (b); it does not denote an error rate (c); and reliability does not automatically guarantee content validity (d), which evaluates whether items cover the full conceptual domain.",
    strategy: "Psychometrics: Cronbach's alpha measures internal consistency reliability. Values $\ge 0.70\text{--}0.80$ indicate good-to-strong reliability.",
    difficulty: "medium",
    tags: ["research", "cronbachs-alpha", "reliability", "internal-consistency", "measurement-instruments"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-010",
    categorySlug: "leadership-delegation",
    stem: "Two independent registered nurses simultaneously assess the pressure injury risk of 50 geriatric clients using the Braden Scale. The research team compares the two sets of Braden scores to evaluate the degree of agreement between the two raters (calculating Cohen's kappa coefficient). What psychometric property is being evaluated?",
    choices: [
      {
        id: "a",
        text: "Predictive criterion validity",
      },
      {
        id: "b",
        text: "Inter-rater reliability",
      },
      {
        id: "c",
        text: "Construct validity",
      },
      {
        id: "d",
        text: "Face validity",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Inter-rater (or inter-observer) reliability measures the degree of consistency or agreement between two or more independent raters or observers scoring the same subjects using the same instrument at the same point in time (often quantified by Cohen's kappa or intra-class correlation). High inter-rater reliability ensures that assessment scores reflect true client characteristics rather than idiosyncratic examiner biases. Predictive validity (a) examines whether a score predicts future events; construct validity (c) tests whether an instrument measures a theoretical trait; face validity (d) is superficial inspection.",
    strategy: "Measurement reliability: Inter-rater reliability assesses consistency between two or more independent observers scoring the same subjects.",
    difficulty: "easy",
    tags: ["research", "inter-rater-reliability", "cohens-kappa", "braden-scale", "measurement"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-011",
    categorySlug: "leadership-delegation",
    stem: "A clinical trial evaluates an investigational oral malaria vaccine in children aged 7 to 11 years. In accordance with international research ethics guidelines (such as the Belmont Report and Declaration of Helsinki), how must ethical consent be secured for these pediatric participants?",
    choices: [
      {
        id: "a",
        text: "Secure only verbal permission from the local village chief, without asking parents or children",
      },
      {
        id: "b",
        text: "Children cannot participate in research under any legal circumstances, even with parental consent",
      },
      {
        id: "c",
        text: "Obtain informed parental/guardian permission (consent) and obtain developmentally appropriate voluntary assent from the child, respecting the child's explicit refusal if assent is withheld",
      },
      {
        id: "d",
        text: "Force the child to take the vaccine if the school headmaster signs a waiver",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In pediatric research ethics, minors lack legal competence to provide legal informed consent. Ethical standards mandate obtaining: 1) legal informed consent (permission) from the parent(s) or legal guardian; and 2) affirmative, developmentally appropriate 'Assent' from the child (typically children aged 7 and older who possess cognitive capability). If a child refuses to assent to a non-therapeutic research protocol, their dissent must be respected and cannot be overridden by parents or teachers. Community permission (a) complements but never replaces individual family consent.",
    strategy: "Pediatric research ethics: Parental informed permission + Child developmentally appropriate assent. Respect the child's dissent.",
    difficulty: "medium",
    tags: ["research", "research-ethics", "assent", "pediatrics", "belmont-report"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-012",
    categorySlug: "leadership-delegation",
    stem: "A university nursing faculty member completes a research project on post-cesarean pain management. Unable to enroll the planned 100 participants, the researcher invents fictional survey data for 30 non-existent clients, modifies real blood pressure readings to fit the hypothesis, and copies extensive background text from another author without citation. Which three recognized forms of scientific research misconduct (FFP) were committed?",
    choices: [
      {
        id: "a",
        text: "Negligence, malpractice, and battery",
      },
      {
        id: "b",
        text: "Libel, slander, and defamation",
      },
      {
        id: "c",
        text: "Bribery, extortion, and false imprisonment",
      },
      {
        id: "d",
        text: "Fabrication (making up data), Falsification (manipulating or altering data), and Plagiarism (appropriating ideas or text without attribution)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The internationally recognized federal and academic definition of Scientific Research Misconduct encompasses 'FFP': 1) FABRICATION: Making up data or results and recording or reporting them as real; 2) FALSIFICATION: Manipulating research materials, equipment, or processes, or changing/omitting data such that research is not accurately represented; and 3) PLAGIARISM: Appropriating another person's ideas, processes, results, or words without giving appropriate credit. Options a, b, and c refer to clinical torts, crimes, or communications rather than scientific research misconduct.",
    strategy: "Research misconduct: FFP = Fabrication (making up data), Falsification (altering data), Plagiarism (copying without citation).",
    difficulty: "easy",
    tags: ["research", "research-misconduct", "fabrication", "falsification", "plagiarism"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-013",
    categorySlug: "leadership-delegation",
    stem: "A clinical nurse researcher records hospital length of stay (in days) for 200 post-surgical clients. The data distribution is heavily positively skewed, with most clients discharged on day 3, but a few complicated outliers remaining hospitalized for up to 90 days. Which measure of central tendency is the most accurate and appropriate summary metric for this skewed data?",
    choices: [
      {
        id: "a",
        text: "The Median, because it is resistant to extreme outliers and accurately reflects the central midpoint of a skewed distribution",
      },
      {
        id: "b",
        text: "The Mean, because calculating mathematical averages is always superior regardless of distribution shape",
      },
      {
        id: "c",
        text: "The Mode, because the most frequent single number is the only statistically valid average",
      },
      {
        id: "d",
        text: "The Standard Deviation, because it represents the arithmetic center of all numbers",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When continuous data are normally distributed (bell-shaped symmetrical curve), the Mean and standard deviation are the preferred parametric measures. However, when data are skewed (asymmetrical with extreme outliers, such as length of stay or healthcare costs), the arithmetic Mean is heavily distorted by extreme values. The Median (the 50th percentile) is non-parametric and resistant to outliers, making it the most accurate measure of central tendency for skewed datasets. The standard deviation (d) is a measure of dispersion, not central tendency.",
    strategy: "Biostatistics rule: Use the Mean for symmetrical, normally distributed data. Use the Median for skewed data with extreme outliers.",
    difficulty: "medium",
    tags: ["research", "biostatistics", "median", "mean", "skewed-distribution"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-014",
    categorySlug: "leadership-delegation",
    stem: "In a district with an average mid-year population of 100,000 people, the disease surveillance officer records 250 newly diagnosed cases of pulmonary tuberculosis during the year 2025. At the same time, there are a total of 1,200 active tuberculosis cases receiving treatment across the district throughout that year. What epidemiological concepts do 250 and 1,200 represent?",
    choices: [
      {
        id: "a",
        text: "250 represents the infant mortality rate; 1,200 represents the maternal mortality ratio",
      },
      {
        id: "b",
        text: "250 represents the Tuberculosis Incidence (new cases occurring over a time period); 1,200 represents the Tuberculosis Prevalence (total existing cases present in the population)",
      },
      {
        id: "c",
        text: "250 represents the prevalence; 1,200 represents the incidence",
      },
      {
        id: "d",
        text: "250 represents the case fatality rate; 1,200 represents the herd immunity threshold",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Incidence and Prevalence are fundamental epidemiological metrics: INCIDENCE refers to the number of NEW cases of a disease that develop in a population at risk during a specified time interval (here, 250 new TB cases in 2025). PREVALENCE refers to the TOTAL number of all existing cases (both new and pre-existing) in the population at a given time point or period (here, 1,200 total cases). Option c reverses these definitions; options a and d identify unrelated mortality or immunological parameters.",
    strategy: "Epidemiology: Incidence = NEW cases (inflow). Prevalence = ALL existing cases (total burden).",
    difficulty: "easy",
    tags: ["research", "epidemiology", "incidence", "prevalence", "biostatistics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-015",
    categorySlug: "leadership-delegation",
    stem: "In a clinical trial testing an experimental antihypertensive drug against placebo, the researcher sets alpha at 0.05. The statistical analysis finds p = 0.02, leading the researcher to reject the null hypothesis and declare the drug effective. However, in reality, the drug is completely inert and has zero true therapeutic effect. What type of statistical error was committed?",
    choices: [
      {
        id: "a",
        text: "Sampling attrition bias",
      },
      {
        id: "b",
        text: "Hawthorne effect",
      },
      {
        id: "c",
        text: "Type I error (False Positive, alpha error)",
      },
      {
        id: "d",
        text: "Type II error (False Negative, beta error)",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In hypothesis testing: A TYPE I ERROR (alpha error, false positive) occurs when the researcher rejects the null hypothesis when the null hypothesis is actually true in reality (concluding that a treatment works when it is actually ineffective). A TYPE II ERROR (beta error, false negative) occurs when the researcher fails to reject the null hypothesis when it is actually false (concluding that a treatment does not work when it actually does, often due to inadequate sample size/power). Rejecting a true null hypothesis is a Type I error.",
    strategy: "Statistical errors: Type I error = False Positive (claiming a difference when none exists). Type II error = False Negative (missing a real difference).",
    difficulty: "medium",
    tags: ["research", "type-i-error", "hypothesis-testing", "p-value", "biostatistics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-016",
    categorySlug: "leadership-delegation",
    stem: "A meta-analysis reports that using a chlorhexidine oral rinse in mechanically ventilated ICU clients reduces ventilator-associated pneumonia (VAP) with an Odds Ratio (OR) of 0.62 and a 95% Confidence Interval (CI) of [0.48 to 0.81]. How should the nurse interpret this confidence interval?",
    choices: [
      {
        id: "a",
        text: "The intervention is completely ineffective because the confidence interval includes zero",
      },
      {
        id: "b",
        text: "The study has an 81% mortality rate among ICU clients",
      },
      {
        id: "c",
        text: "The intervention causes a 62% increase in pneumonia cases",
      },
      {
        id: "d",
        text: "The intervention statistically significantly reduces the odds of pneumonia because the entire 95% confidence interval is below 1.0 (does not cross 1.0), indicating a true protective benefit",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "For ratio statistics such as Odds Ratios (OR) and Relative Risk (RR), the null value (indicating no difference between groups) is 1.0. If the 95% Confidence Interval does NOT include 1.0, the finding is statistically significant at $p < 0.05$. An OR of 0.62 with a 95% CI of [0.48 to 0.81] means that clients receiving chlorhexidine have 38% lower odds of developing pneumonia, and because the upper bound (0.81) is below 1.0, the protective effect is statistically significant. If the CI crossed 1.0 (e.g., [0.75 to 1.25]), it would not be statistically significant.",
    strategy: "Interpreting Odds Ratios & 95% CI: For ratios (OR/RR), the null value is 1.0. If the 95% CI excludes 1.0, the finding is statistically significant.",
    difficulty: "hard",
    tags: ["research", "confidence-intervals", "odds-ratio", "meta-analysis", "vap-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-017",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher compares the mean blood pressure reduction (continuous numerical data in mmHg) between two independent client groups: Group A receives music therapy and Group B receives standard care. The data are normally distributed. Which inferential statistical test is appropriate to compare these two independent group means?",
    choices: [
      {
        id: "a",
        text: "Independent samples Student's t-test",
      },
      {
        id: "b",
        text: "Chi-square ($\chi^2$) test of independence",
      },
      {
        id: "c",
        text: "Kruskal-Wallis non-parametric test",
      },
      {
        id: "d",
        text: "Kaplan-Meier survival analysis",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "An Independent Samples Student's t-test is the standard parametric inferential statistical test used to determine whether there is a statistically significant difference between the means of two independent groups on a continuous, normally distributed dependent variable (e.g., mean blood pressure in mmHg). A Chi-square test (b) compares categorical proportions between groups. Kruskal-Wallis (c) is non-parametric for 3 or more groups. Kaplan-Meier (d) analyzes time-to-event survival data.",
    strategy: "Choosing statistical tests: Comparing continuous means between 2 independent groups = Independent t-test. Comparing categorical proportions = Chi-square.",
    difficulty: "medium",
    tags: ["research", "t-test", "inferential-statistics", "bivariate-analysis", "biostatistics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-018",
    categorySlug: "leadership-delegation",
    stem: "A new rapid point-of-care antigen diagnostic test for malaria is evaluated against the gold standard microscopy. Among 100 clients with microscopically proven malaria, the rapid test correctly identifies 96 as positive. Among 100 healthy clients without malaria, the rapid test correctly identifies 92 as negative. What are the Sensitivity and Specificity of this rapid test?",
    choices: [
      {
        id: "a",
        text: "Sensitivity is 50%; Specificity is 50%",
      },
      {
        id: "b",
        text: "Sensitivity is 96% (true positive rate); Specificity is 92% (true negative rate)",
      },
      {
        id: "c",
        text: "Sensitivity is 92%; Specificity is 96%",
      },
      {
        id: "d",
        text: "Sensitivity is 4%; Specificity is 8%",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "SENSITIVITY is the ability of a test to correctly identify individuals who HAVE the disease (True Positive Rate = True Positives / Total Diseased = 96 / 100 = 96%). SPECIFICITY is the ability of a test to correctly identify individuals who DO NOT HAVE the disease (True Negative Rate = True Negatives / Total Non-diseased = 92 / 100 = 92%). High sensitivity rules OUT disease when negative (SnNOut); high specificity rules IN disease when positive (SpPIn). Option b correctly calculates both metrics.",
    strategy: "Diagnostic accuracy: Sensitivity = ability to detect true positives (sick people). Specificity = ability to identify true negatives (healthy people).",
    difficulty: "easy",
    tags: ["research", "sensitivity", "specificity", "screening-tests", "malaria-rdt"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-019",
    categorySlug: "leadership-delegation",
    stem: "A clinical nursing team seeks to implement an Evidence-Based Practice (EBP) change on their ward. According to the standard 5-step EBP cycle (the 5 A's), in which sequence should the team proceed?",
    choices: [
      {
        id: "a",
        text: "Apply -> Ask -> Assess -> Acquire -> Appraise",
      },
      {
        id: "b",
        text: "Appraise -> Acquire -> Apply -> Assess -> Ask",
      },
      {
        id: "c",
        text: "Ask (formulate a PICO question) -> Acquire (search for best evidence) -> Appraise (critically appraise evidence) -> Apply (integrate evidence with clinical expertise and client preferences) -> Assess (evaluate practice change outcomes)",
      },
      {
        id: "d",
        text: "Assess -> Apply -> Appraise -> Acquire -> Ask",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The evidence-based practice process follows the classic 5 A's sequential framework: 1) ASK: Convert clinical need into a structured, answerable clinical inquiry (PICO); 2) ACQUIRE: Efficiently search biomedical databases for the best available evidence; 3) APPRAISE: Critically evaluate the evidence for validity, reliability, and clinical applicability; 4) APPLY: Integrate critical evidence with clinical expertise, patient values/circumstances, and available resources; 5) ASSESS: Evaluate the outcomes of the practice change and identify areas for ongoing improvement.",
    strategy: "The 5 A's of EBP: Ask -> Acquire -> Appraise -> Apply -> Assess.",
    difficulty: "easy",
    tags: ["research", "ebp", "5-as-of-ebp", "evidence-based-practice", "pico"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RSCH-020",
    categorySlug: "leadership-delegation",
    stem: "A hospital quality council identifies poor hand hygiene compliance on surgical wards (38% compliance vs national 85% standard). The team introduces automated alcohol rub dispensers, staff coaching, and visual prompts, followed by re-auditing hand hygiene compliance three months later, which improves to 88%. What critical phase of the clinical audit cycle does the re-audit represent?",
    choices: [
      {
        id: "a",
        text: "Initiating research misconduct investigations",
      },
      {
        id: "b",
        text: "Falsifying infection metrics for government subsidies",
      },
      {
        id: "c",
        text: "Publishing a fictional randomized controlled trial",
      },
      {
        id: "d",
        text: "Closing the audit loop, confirming that implemented changes successfully improved practice toward established standards",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A clinical audit is incomplete without 'closing the audit loop'. The complete audit cycle consists of: 1) setting standards; 2) measuring baseline practice; 3) comparing practice against standards; 4) implementing targeted changes; and 5) re-auditing practice. The re-audit verifies whether implemented interventions achieved sustained compliance with standards, closing the loop and establishing clinical governance. Audits are quality improvement activities, not punitive misconduct trials (a) or falsifications (b).",
    strategy: "Clinical audit cycle: Setting standards -> Measuring -> Implementing change -> Re-auditing (Closing the loop).",
    difficulty: "easy",
    tags: ["research", "clinical-audit", "audit-cycle", "closing-the-loop", "hand-hygiene"],
    isFree: true,
  },
];
