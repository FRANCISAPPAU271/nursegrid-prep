import { FAQS } from "@/content/faqs";

/**
 * FAQPage structured data for the landing page.
 *
 * The landing page already shows these questions, but without this markup
 * Google has no machine-readable copy, so the page cannot earn FAQ rich
 * results. Both the markup and the accordion read from `@/content/faqs`, which
 * is what keeps the marked-up answer identical to the visible one — Google
 * drops rich results when the two disagree.
 */
export default function FaqSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
