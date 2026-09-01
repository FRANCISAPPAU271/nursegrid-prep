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
          "A task manager built for student nurses: organize clinicals and study time, then master 10,000 NMC exam-style questions with rationales and proven test-taking strategies.",
        publisher: { "@id": `${baseUrl}/#organization` },
      },
      {
        "@type": "Product",
        name: "NurseGrid Prep",
        description: "NMC exam-style question bank, task manager, and study tools for nursing students.",
        brand: { "@type": "Brand", name: "NurseGrid Prep" },
        offers: [
          { "@type": "Offer", name: "4 Months Full Access", price: "5.00", priceCurrency: "USD" },
          { "@type": "Offer", name: "1 Year Full Access", price: "9.00", priceCurrency: "USD" },
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
