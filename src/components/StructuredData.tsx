import { SITE_URL as siteUrl, LEGAL_ENTITY, BRAND_NAME, CONTACT_EMAIL } from "@/lib/site";

// Site-level JSON-LD (Organization + WebSite), injected once in the root layout.
//
// TRUTH RULE: every value here is a verified fact — the brand, the legal entity
// (Again, With Love, LLC), the canonical URL, the real public contact email, and
// a real logo asset that exists in /public. We deliberately OMIT unverified
// fields: no postal address (not published for this brand yet), no social
// `sameAs` profiles (none exist), no telephone (support is by email). Add those
// later only when real — never fabricated.
export default function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: BRAND_NAME,
    legalName: LEGAL_ENTITY,
    url: siteUrl,
    logo: `${siteUrl}/logo-full.png`,
    description:
      "Again, With Love makes a caregiving app that helps family caregivers comfort a loved one living with dementia or Alzheimer's using short, pre-recorded video and audio messages in the caregiver's own voice.",
    email: CONTACT_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      availableLanguage: "en",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: BRAND_NAME,
    description:
      "Again, With Love helps dementia and Alzheimer's caregivers give gentle, repeated reassurance with pre-recorded messages from a loved one.",
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      // Static content built from trusted constants (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
