import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_ENTITY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete your account & data",
  description:
    "How to request deletion of your Again, With Love account and all associated data, including recordings and the information you added.",
  alternates: { canonical: "/delete-account" },
};

// This page is the publicly reachable account-deletion URL required by the
// Google Play Store (and good practice for Apple). The app does not yet offer
// in-app deletion, so deletion is handled as a verified email request.
export default function DeleteAccountPage() {
  return (
    <div className="section pb-16 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <span className="eyebrow">Your data</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Delete your account &amp; data
        </h1>
        <p className="mt-6 prose-legal">
          You can ask us to delete your Again, With Love account and all of the
          data connected to it at any time. Here&apos;s how.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-ink">
              How to request deletion
            </h2>
            <div className="mt-3 space-y-3 prose-legal">
              <p>
                Email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Delete%20my%20account%20and%20data`}
                  className="font-semibold text-gold-deep underline underline-offset-2 hover:text-ink"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                from the email address on your account, with the subject{" "}
                <strong>&ldquo;Delete my account and data.&rdquo;</strong>
              </p>
              <p>
                We&apos;ll confirm the request comes from your account, delete
                your data, and email you when it&apos;s done, normally within 30
                days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">What gets deleted</h2>
            <div className="mt-3 space-y-3 prose-legal">
              <p>When you ask us to delete your account, we remove:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Your account and sign-in credentials.</li>
                <li>
                  The profiles you created for the people in your care (such as a
                  first name).
                </li>
                <li>
                  Your reassurance buttons and the video, audio, and image files
                  you recorded or uploaded.
                </li>
                <li>Usage records (such as which buttons were played and when).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">
              What we may keep, briefly
            </h2>
            <div className="mt-3 space-y-3 prose-legal">
              <p>
                We may retain limited records if the law requires it (for
                example, to handle a dispute). Routine encrypted backups are
                purged on a rolling schedule. Anything on your own device is
                removed when you uninstall the app.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink">Questions?</h2>
            <div className="mt-3 space-y-3 prose-legal">
              <p>
                See our{" "}
                <Link
                  href="/privacy"
                  className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
                >
                  Privacy Policy
                </Link>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="font-medium text-gold-deep underline underline-offset-2 hover:text-ink"
                >
                  contact us
                </Link>
                . Again, With Love is operated by {LEGAL_ENTITY}.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
