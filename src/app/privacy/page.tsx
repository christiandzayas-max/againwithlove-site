import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { CONTACT_EMAIL, LEGAL_ENTITY, BRAND_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Again, With Love collects, uses, stores, and protects your information, and how to access or delete it.",
  alternates: { canonical: "/privacy" },
};

/*
  COUNSEL REVIEW PENDING. This is plain-English copy drafted from the actual
  data flows of the Again, With Love app (memory_care v1.3.3+11): Firebase
  Authentication (email/password), Cloud Firestore (account, patient profile,
  reassurance buttons, usage logs), and Cloud Storage (recorded media). There
  is NO third-party analytics, crash reporting, advertising, or push SDK in the
  app. Have counsel review before relying on this for app-store submission or
  banking, and keep it consistent with Apple's App Privacy labels and Google
  Play's Data Safety form.
*/
export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 21, 2026"
      intro={`This Privacy Policy explains how ${LEGAL_ENTITY} ("Again, With Love," "we," "us") collects, uses, and protects information when you use the Again, With Love app and this website. We've tried to write it in plain language. Again, With Love is built for caregivers, and privacy is part of its design: we don't show ads, we don't use third-party trackers, and we don't sell your information.`}
    >
      <LegalSection heading="A note on where the app is today">
        <p>
          The Again, With Love app is in active development and testing and is
          not yet generally available to download. This policy describes how the
          app and site handle information today; we&apos;ll update it as the
          product grows.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>We collect only what the app needs to do its job:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <strong>Account information.</strong> When you create a caregiver
            account, we collect your email address and password, and an optional
            display name. Passwords are handled by our authentication provider
            and are not stored by us in readable form.
          </li>
          <li>
            <strong>Profiles you create.</strong> You can add a profile for the
            person in your care (typically just a first name) and labels for
            the reassurance buttons you set up.
          </li>
          <li>
            <strong>Content you record.</strong> The short video and audio
            messages, and any images, that you record or choose for your
            reassurance buttons.
          </li>
          <li>
            <strong>Usage within the app.</strong> Basic records of which
            reassurance buttons are played and when, so you can see what&apos;s
            being used. This stays in your account. It is not sent to any
            advertising or analytics company.
          </li>
          <li>
            <strong>Device permissions.</strong> With your permission, the app
            uses the camera, microphone, and photo/file access only to record or
            select the content you choose. It doesn&apos;t use them for anything
            else.
          </li>
          <li>
            <strong>On-device data.</strong> To work offline and stay locked in
            the simple patient screen, the app stores a security PIN and offline
            copies of your content securely on the device. This data stays on the
            device and is removed when you uninstall the app.
          </li>
        </ul>
        <p>
          <strong>What we don&apos;t collect.</strong> We do not collect your
          precise location or contacts, and the app contains no third-party
          analytics, no advertising identifiers, no advertising SDKs, and no
          cross-app or cross-site tracking.
        </p>
      </LegalSection>

      <LegalSection heading="How we use information">
        <p>We use the information above to:</p>
        <ul className="ml-5 list-disc space-y-2">
          <li>Create and secure your account and sign you in.</li>
          <li>
            Store your reassurance content and play it back for the person in
            your care, including offline.
          </li>
          <li>Keep your content in sync across your own devices.</li>
          <li>Provide support and respond to your requests.</li>
          <li>Keep the app working, safe, and reliable.</li>
        </ul>
        <p>
          We do not use your content or information to advertise to you, and we
          do not sell or rent personal information.
        </p>
      </LegalSection>

      <LegalSection heading="Consent and the person in your care">
        <p>
          Again, With Love is used by a caregiver. A person living with dementia
          may not be able to give informed consent for the collection and use of
          their information. By adding someone to the app and recording content
          for their care, you confirm that you are their caregiver, family
          member, or legal representative and that you have the authority to do
          so on their behalf.
        </p>
        <p>
          We treat the name and usage information connected to the person in your
          care as sensitive, and we ask you to record and use content
          respectfully and only for their care and comfort.
        </p>
      </LegalSection>

      <LegalSection heading="How information is stored and shared">
        <p>
          We use Google&apos;s Firebase platform to run the app, specifically
          Firebase Authentication, Cloud Firestore, and Cloud Storage. Your
          account information, profiles, button labels, recordings, and usage
          records are stored on Google&apos;s servers and processed by Google as
          our service provider under their security and privacy commitments. You
          can read more in{" "}
          <a
            href="https://policies.google.com/privacy"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase&apos;s privacy information
          </a>
          .
        </p>
        <p>
          We do not sell or rent your personal information, and we do not share
          it with advertisers. We may disclose information if required by law, to
          protect someone&apos;s safety, or as part of a future business transfer,
          in which case we&apos;ll require the recipient to honor this policy.
        </p>
      </LegalSection>

      <LegalSection heading="Newsletter signup">
        <p>
          If you subscribe to our newsletter on this website, we collect your
          email address (and your name, if you provide it) to send you the
          newsletter and occasional updates. We use beehiiv, our newsletter
          platform, to store this and send the emails on our behalf. You can
          unsubscribe at any time using the link at the bottom of any email. See{" "}
          <a
            href="https://www.beehiiv.com/privacy"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            beehiiv&apos;s privacy policy
          </a>
          . We do not sell your email address.
        </p>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <p>
          Again, With Love is intended for adult caregivers and is not directed
          to children. We do not knowingly collect personal information from
          children. If you believe a child has provided us information, please
          contact us and we&apos;ll remove it.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep information">
        <p>
          We keep your information for as long as your account is active or as
          needed to provide the app. When you ask us to delete your account, we
          delete your data as described in{" "}
          <Link
            href="/delete-account"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            Delete your account &amp; data
          </Link>
          . Routine encrypted backups are purged on a rolling schedule.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices and rights">
        <p>
          You can access, correct, or delete your information at any time. To
          delete your account and all associated data, follow the steps on our{" "}
          <Link
            href="/delete-account"
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            account-deletion page
          </Link>
          , or email us. Depending on where you live, you may have additional
          rights under laws such as the GDPR or U.S. state privacy laws,
          including the right to access or delete your information and to be free
          from discrimination for exercising these rights. We honor these
          requests; just contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="How we protect information">
        <p>
          Information is encrypted in transit and at rest on Google&apos;s
          infrastructure, and sensitive data on the device (such as your PIN) is
          stored using the device&apos;s secure storage. No method of storage or
          transmission is completely secure, but we work to protect your
          information and limit access to it.
        </p>
      </LegalSection>

      <LegalSection heading="Where information is processed">
        <p>
          We are based in the United States, and information is stored and
          processed on Google&apos;s servers, which may be located in the United
          States and other countries. By using the app, you understand your
          information may be processed in the United States.
        </p>
      </LegalSection>

      <LegalSection heading="Again, With Love is a caregiving aid">
        <p>
          Again, With Love is a tool to help caregivers offer comfort and
          reassurance. It is not a medical device or service and does not provide
          medical advice, diagnosis, or treatment.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this policy">
        <p>
          We may update this Privacy Policy as the app evolves. When we make
          meaningful changes, we&apos;ll update the date above and, where
          appropriate, let you know in the app or by email.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          Questions about your privacy? Email{" "}
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
