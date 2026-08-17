import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Drdha Q Healthcare',
  description: 'Terms and conditions and disclaimer for Drdha Q Healthcare website.',
};

export default function TermsAndConditions() {
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
                <span className="text-primary">Terms & Conditions</span>
              </nav>
              <h1 className="text-display-lg font-display-lg text-primary">Terms & Conditions / Disclaimer</h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-4 max-w-3xl">
                Last updated: [Date] — This policy should be reviewed and approved by the company's legal advisor before publication.
              </p>
            </div>
          </section>

          {/* Terms & Conditions Content */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto max-w-4xl">
              <div className="prose prose-lg space-y-8">
                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">1. Introduction</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Welcome to the Drdha Q Healthcare LLP website. By accessing or using this website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with these terms, please do not use this website.
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-4">
                    This website is for general informational and consultancy-related purposes only and does not constitute professional advice.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">2. Purpose of the Website</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    This website provides information about Drdha Q Healthcare LLP's services in the following areas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li>Healthcare quality consulting</li>
                    <li>Healthcare audit and assessment</li>
                    <li>Accreditation support and readiness</li>
                    <li>ISO certification readiness</li>
                    <li>Quality management systems</li>
                    <li>Clinical governance and patient safety</li>
                    <li>Training and capacity building</li>
                    <li>Healthcare sustainability and ESG services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">3. No Guarantee of Certification or Accreditation</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    The information, guidance, and consultancy services provided through this website do not guarantee certification, accreditation, or regulatory approval. Final decisions regarding certification, accreditation, and compliance remain with the relevant organization and the applicable accreditation/certification bodies (e.g., NABH, NABL, JCI, ISO, and other regulatory authorities).
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">4. No Medical Advice or Emergency Services</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    <strong>Important:</strong> This website does not provide:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li>Patient medical advice or diagnosis</li>
                    <li>Emergency medical services</li>
                    <li>Treatment recommendations for individual patients</li>
                    <li>Clinical decision-making support for patient care</li>
                  </ul>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-4">
                    If you require medical attention, please contact a qualified healthcare professional or emergency services immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">5. User Responsibilities</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    When using this website and submitting enquiry forms, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-body-md font-body-md text-on-surface-variant">
                    <li>Provide accurate, complete, and current information</li>
                    <li>Not submit false, misleading, or fraudulent information</li>
                    <li>Use the website only for legitimate consultancy-related inquiries</li>
                    <li>Not use the website for any unlawful or prohibited purpose</li>
                    <li>Respect the intellectual property rights of Drdha Q Healthcare LLP</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">6. Intellectual Property</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    All content on this website, including but not limited to text, graphics, logos, images, software, and design, is the property of Drdha Q Healthcare LLP or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, modify, distribute, or create derivative works without prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">7. External Links Disclaimer</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    This website may contain links to third-party websites for your convenience. We do not endorse, control, or take responsibility for the content, privacy policies, or practices of any third-party websites. Your interaction with third-party websites is at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">8. Limitation of Liability</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    To the maximum extent permitted by law, Drdha Q Healthcare LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or any services obtained through it. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">9. Consultancy Engagement</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Any consultancy services provided by Drdha Q Healthcare LLP are governed by separate agreed terms and conditions, which will be outlined in the relevant engagement agreement or contract. These website terms do not govern formal consultancy engagements unless expressly stated in writing.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">10. Website Content Updates</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    We reserve the right to modify, update, or remove any content on this website at any time without prior notice. We also reserve the right to update these Terms & Conditions from time to time. Your continued use of the website after any changes constitutes acceptance of the updated terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">11. Governing Law and Jurisdiction</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>.
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    <strong>Jurisdiction:</strong> [Specific jurisdiction to be approved by owner — e.g., courts in [City/State], India]
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-4">
                    Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in the approved jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">12. Contact Information</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">
                    If you have questions about these Terms & Conditions, please contact us:
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
                    <strong>Legal Disclaimer:</strong> These Terms & Conditions are provided as a template and should be reviewed and approved by the company's legal advisor before publication to ensure compliance with applicable laws and regulations.
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
