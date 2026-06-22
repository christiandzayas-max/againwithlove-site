import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { CONTACT_EMAIL, LEGAL_ENTITY, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using the Again, With Love app and website, including important disclaimers and your responsibilities.",
  alternates: { canonical: "/terms" },
};

/*
  COUNSEL REVIEW PENDING. Baseline terms for a pre-launch caregiving app +
  marketing site operated by Again, With Love, LLC. Governing law is stated as
  Arizona because that is where the LLC is organized; confirm with counsel
  before relying on this for app-store submission or banking.
*/
export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      lastUpdated="June 21, 2026"
      intro={`These Terms of Use ("Terms") are an agreement between you and ${LEGAL_ENTITY} ("Again, With Love," "we," "us") for the Again, With Love app and this website (together, the "Service"). By using the Service, you agree to these Terms. If you don't agree, please don't use the Service.`}
    >
      <LegalSection heading="Not medical advice">
        <p>
          Again, With Love is a caregiving aid that helps you share pre-recorded
          reassurance with a loved one. It is <strong>not</strong> a medical
          device, medical service, or a substitute for professional medical care,
          and it does not diagnose, treat, cure, or slow dementia or any other
          condition. Always rely on qualified healthcare professionals for
          medical decisions. If someone may be in danger or needs urgent help,
          contact your local emergency services.
        </p>
      </LegalSection>

      <LegalSection heading="Who can use the Service">
        <p>
          You must be at least 18 years old and able to form a binding contract
          to use the Service. If you add a person in your care or record content
          about them, you confirm that you are their caregiver, family member, or
          legal representative and that you have the authority to do so on their
          behalf.
        </p>
      </LegalSection>

      <LegalSection heading="Your account">
        <p>
          You&apos;re responsible for the information you provide and for keeping
          your account credentials secure. Please give accurate information and
          let us know promptly if you believe your account has been used without
          your permission.
        </p>
      </LegalSection>

      <LegalSection heading="Your content and the permissions you give us">
        <p>
          You keep ownership of the recordings, images, names, and other content
          you add (&ldquo;Your Content&rdquo;). You grant us a limited license to
          store, process, and display Your Content solely to provide the Service
          to you — for example, to save your recordings and play them back in the
          app.
        </p>
        <p>
          You confirm that you have the right to record and use Your Content,
          including the name, image, and voice of the person in your care and of
          anyone who appears in your recordings, and that doing so doesn&apos;t
          violate anyone&apos;s rights or the law.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>When using the Service, please don&apos;t:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Use it for any unlawful, harmful, or abusive purpose.</li>
          <li>
            Upload content you don&apos;t have the right to use, or that is
            unlawful or infringing.
          </li>
          <li>
            Try to disrupt, reverse engineer, or gain unauthorized access to the
            Service or its systems.
          </li>
          <li>Use the Service to harm or exploit any person.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Service availability and changes">
        <p>
          The Service is in active development. We may add, change, or remove
          features, and we may suspend or discontinue parts of the Service. We
          aim to give reasonable notice of significant changes where we can.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <p>
          The Service relies on Google&apos;s Firebase platform for
          authentication, data storage, and file storage. Your use of the Service
          is also subject to the terms and policies of those providers. See our{" "}
          <Link
            href="/privacy"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            Privacy Policy
          </Link>{" "}
          for details on how information is handled.
        </p>
      </LegalSection>

      <LegalSection heading="Our intellectual property">
        <p>
          The Again, With Love name, logo, and the app and website themselves are
          owned by {LEGAL_ENTITY} and protected by law. These Terms don&apos;t
          give you the right to use our branding without our permission. Your
          Content remains yours.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimers">
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, whether express or
          implied, including warranties of merchantability, fitness for a
          particular purpose, and non-infringement. We don&apos;t warrant that
          the Service will be uninterrupted, error-free, or that content will
          always be available.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {LEGAL_ENTITY} will not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or for any loss of data, arising out of or relating
          to your use of the Service. Some jurisdictions don&apos;t allow certain
          limitations, so some of these may not apply to you.
        </p>
      </LegalSection>

      <LegalSection heading="Indemnification">
        <p>
          You agree to indemnify and hold harmless {LEGAL_ENTITY} from claims
          arising out of your misuse of the Service, your violation of these
          Terms, or your violation of any law or the rights of another person.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          You can stop using the Service and delete your account at any time. We
          may suspend or end your access if you violate these Terms or to protect
          the Service or others. You can delete your account and data following
          the steps on our{" "}
          <Link
            href="/delete-account"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            account-deletion page
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of the State of Arizona, United
          States, without regard to its conflict-of-laws rules. Any dispute will
          be handled in the appropriate courts located in Arizona, unless the law
          where you live requires otherwise.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these Terms">
        <p>
          We may update these Terms from time to time. When we make meaningful
          changes, we&apos;ll update the date above and, where appropriate, let
          you know in the app or by email. Continuing to use the Service after a
          change means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about these Terms? Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            {CONTACT_EMAIL}
          </a>
          . {BRAND_NAME} is operated by {LEGAL_ENTITY}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
