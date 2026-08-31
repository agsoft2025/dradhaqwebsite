import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Drdha Q Healthcare',
  description: 'Privacy policy and data protection information for Drdha Q Healthcare website.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Breadcrumb / Page Title Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-low px-4 md:px-8 lg:px-grid-margin-desktop">
            <div className="max-w-[1280px] mx-auto">
              <nav className="text-label-md font-label-md text-on-surface-variant mb-4">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-primary">Privacy Policy</span>
              </nav>
              <h1 className="text-display-lg font-display-lg text-primary">Privacy Policy</h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-4 max-w-3xl">
                Last updated: [Date] — This policy should be reviewed and approved by the company’s legal advisor before publication.
              </p>
            </div>
          </section>

          {/* Privacy Policy Content */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto max-w-4xl">
              <div className="prose prose-lg space-y-8">
                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">1. Introduction</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Drdha Q Healthcare LLP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and submit enquiry forms.
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-4">
                    By using our website, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">2. Information We Collect</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    We collect information through our website enquiry form for the purpose of responding to your consultancy-related inquiries. The information collected includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li><strong>Name</strong> — Your full name and designation</li>
                    <li><strong>Organization</strong> — Company or healthcare facility name</li>
                    <li><strong>Contact Information</strong> — Email address and phone/WhatsApp number</li>
                    <li><strong>Service Interest</strong> — Specific healthcare quality, audit, accreditation, or certification-readiness services you are interested in</li>
                    <li><strong>Standards</strong> — Relevant standards (e.g., ISO, NABH, JCI) applicable to your enquiry</li>
                    <li><strong>Message</strong> — Additional details about your requirements</li>
                    <li><strong>Consent</strong> — Your consent to be contacted regarding your enquiry</li>
                  </ul>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-4">
                    <strong>Important:</strong> We do not collect patient medical or clinical information through our general enquiry form. Our website is not designed to collect or process patient health data.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">3. How We Use Your Information</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    We use the information collected for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li>To respond to your enquiry and provide consultancy-related information</li>
                    <li>To assess your requirements and provide relevant service recommendations</li>
                    <li>To facilitate communication between you and our consultants</li>
                    <li>To improve our website and service offerings</li>
                    <li>To comply with legal and regulatory obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">4. Data Storage and Processing</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    Your enquiry information is stored and processed as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li><strong>Google Sheets</strong> — Enquiry data is stored in Google Sheets for lead management and follow-up purposes</li>
                    <li><strong>WhatsApp</strong> — WhatsApp may be used to send enquiry notifications to the owner for prompt response</li>
                    <li><strong>Analytics</strong> — We may use analytics tools and cookies to track website usage, UTM parameters, and source attribution for marketing optimization</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">5. Data Security</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is impenetrable, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">6. Data Retention and Access</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    We retain your enquiry information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    You may request access to, correction of, or deletion of your personal information by contacting us using the details provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">7. Third-Party Service Providers</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., Google for data storage, WhatsApp for messaging). These parties are obligated to keep your information confidential and are only permitted to use your information for the specific services they provide.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">8. Your Rights</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of further communications</li>
                    <li>Make a privacy-related enquiry or complaint</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">9. Cookies and Tracking</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    We may use cookies and similar tracking technologies to collect information about your browsing behavior, UTM parameters, and traffic sources. This helps us understand user preferences and improve our website. You can manage your cookie preferences through your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">10. Policy Updates</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">11. Contact Information</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    If you have questions, comments, or requests regarding this Privacy Policy or your personal information, please contact us:
                  </p>
                  <div className="bg-surface-container-low p-6 rounded-lg space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <p><strong>Drdha Q Healthcare LLP</strong></p>
                    <p><strong>Email:</strong> [To be provided by owner]</p>
                    <p><strong>Phone:</strong> [To be provided by owner]</p>
                    <p><strong>Address:</strong> [To be provided by owner]</p>
                    <p><strong>Registration Details:</strong> [To be provided by owner]</p>
                  </div>
                </section>

                <section className="bg-surface-container-low p-6 rounded-lg border-l-4 border-secondary">
                  <p className="text-label-md font-label-md text-on-surface-variant">
                    <strong>Legal Disclaimer:</strong> This Privacy Policy is provided as a template and should be reviewed and approved by the company’s legal advisor before publication to ensure compliance with applicable laws and regulations.
                  </p>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
