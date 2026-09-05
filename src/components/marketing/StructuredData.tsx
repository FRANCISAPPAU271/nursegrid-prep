export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

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
          "Built for Ghana's student nurses & midwives: organise clinicals and revision, then master 5,700+ unique NMC licensing exam-style questions with rationales and proven test-taking strategies.",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Product",
        name: "NurseGrid Prep",
        description: "NMC Ghana licensing exam-style question bank, task manager, and study tools for nursing and midwifery students.",
        brand: { "@type": "Brand", name: "NurseGrid Prep" },
        offers: [
          { "@type": "Offer", name: "4 Months Full Access", price: "5.00", priceCurrency: "USD" },
          { "@type": "Offer", name: "8 Months Full Access", price: "9.00", priceCurrency: "USD" },
          { "@type": "Offer", name: "1 Year Full Access", price: "13.00", priceCurrency: "USD" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
