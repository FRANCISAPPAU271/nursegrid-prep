import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { SITE_URL } from "@/lib/site-url";
export default function StructuredData() {
  const baseUrl = SITE_URL;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "NurseGrid Prep",
        url: baseUrl,
        logo: `${baseUrl}/icons/icon-512.png`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "NurseGrid Prep",
        description:
          `Built for student nurses & midwives: organise clinicals and revision, then master ${QUESTION_COUNT_LABEL} unique NMC licensing exam-style questions with rationales and proven test-taking strategies.`,
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        // Modelled as a SoftwareApplication rather than a Product: the app has
        // no published price (pricing is shown in-app), and a Product node with
        // no `offers` or `review` just triggers a "missing field" warning in
        // Search Console while earning no rich result. This type is also simply
        // more accurate — it is a web application, not a retail product.
        "@type": "SoftwareApplication",
        name: "NurseGrid Prep",
        description:
          "NMC licensing exam-style question bank, task manager, and study tools for nursing and midwifery students.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        brand: { "@type": "Brand", name: "NurseGrid Prep" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
