import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ISO Certification Readiness | Drdha Q Healthcare',
  description: 'Expert preparation for international quality management standards. We demystify the compliance journey, transforming complex regulatory requirements into structured, achievable milestones.',
};

export default function IsoCertification() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-primary-container text-on-primary-container py-section-gap-mobile md:py-section-gap-desktop flex items-center min-h-[716px]">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%" />
              </svg>
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
            </div>
            <div className="relative max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter z-10 items-center">
              <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-12 h-[2px] bg-secondary-fixed" />
                  <span className="text-label-md font-label-md text-secondary-fixed uppercase tracking-wider">
                    Service Offering
                  </span>
                </div>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-primary">
                  Streamlining Your Path to <span className="text-secondary-fixed">ISO Certification</span>
                </h1>
                <p className="text-body-lg font-body-lg text-on-primary-container max-w-2xl">
                  Expert preparation for international quality management standards. We demystify the compliance journey, transforming complex regulatory requirements into structured, achievable milestones for your healthcare organization.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Link
                    href="/contact"
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-lg"
                  >
                    Start Your Assessment
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                  <button className="px-8 py-4 rounded-lg text-label-md font-label-md text-on-primary-container bg-surface/10 hover:bg-surface/20 transition-all backdrop-blur-sm">
                    View Success Stories
                  </button>
                </div>
              </div>
              {/* Abstract Illustration/Data Viz for Hero */}
              <div className="col-span-1 lg:col-span-5 hidden lg:block relative h-full min-h-[400px]">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-secondary-fixed/5 blur-3xl" />
                <div className="relative w-full h-full flex justify-center items-center">
                  <svg className="w-full h-auto max-w-md drop-shadow-2xl" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle className="animate-[spin_20s_linear_infinite]" cx="100" cy="100" opacity="0.5" r="80" stroke="#89f5e7" strokeDasharray="4 4" strokeWidth="2" />
                    <circle cx="100" cy="100" r="60" stroke="#dae2fd" strokeLinecap="round" strokeWidth="4" />
                    <path className="animate-[pulse_3s_ease-in-out_infinite]" d="M60 100 A40 40 0 1 1 140 100" stroke="#89f5e7" strokeLinecap="round" strokeWidth="8" />
                    <circle cx="100" cy="100" fill="#89f5e7" r="20" />
                    <path d="M92 100 L98 106 L110 94" stroke="#131b2e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    {/* Floating Nodes */}
                    <circle className="animate-[bounce_4s_infinite]" cx="30" cy="60" fill="#dae2fd" r="6" />
                    <circle className="animate-[bounce_5s_infinite]" cx="170" cy="140" fill="#dae2fd" r="6" />
                    <circle className="animate-[ping_3s_infinite]" cx="150" cy="40" fill="#89f5e7" r="4" />
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* Standards Grid Section (Bento Layout) */}
          <section className="w-full bg-surface py-section-gap-mobile md:py-section-gap-desktop relative z-20 -mt-12 lg:-mt-20">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto pt-12 lg:pt-20">
                <h2 className="text-headline-lg font-headline-lg text-on-surface">
                  Supported Standards Portfolio
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  We provide comprehensive readiness support across a spectrum of critical ISO standards, ensuring your clinical and operational frameworks meet global benchmarks.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-6 lg:gap-grid-gutter">
                {/* Large Featured Card */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-surface-container rounded-xl p-8 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
                  <div className="flex flex-col gap-4 z-10">
                    <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-2">
                      <span 
                        className="material-symbols-outlined text-[32px] text-primary" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        fact_check
                      </span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors">
                      ISO 9001
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
                      Quality Management Systems. The foundational standard ensuring consistent service quality and continuous improvement in healthcare delivery.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="text-label-md font-label-md text-primary flex items-center gap-2 mt-6 group-hover:translate-x-2 transition-transform"
                  >
                    Explore 9001 Readiness <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Standard Cards */}
                <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-[28px] text-secondary">health_and_safety</span>
                    <h3 className="text-headline-md font-headline-md text-on-surface">ISO 7101</h3>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm mb-4 flex-grow">
                    Healthcare Organization Management. Specific to clinical environments.
                  </p>
                </div>
                <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-[28px] text-secondary">eco</span>
                    <h3 className="text-headline-md font-headline-md text-on-surface">ISO 14001</h3>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm mb-4 flex-grow">
                    Environmental Management Systems for sustainable medical operations.
                  </p>
                </div>
                <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-[28px] text-secondary">admin_panel_settings</span>
                    <h3 className="text-headline-md font-headline-md text-on-surface">ISO 45001</h3>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm mb-4 flex-grow">
                    Occupational Health & Safety. Protecting staff and patients.
                  </p>
                </div>
                <div className="bg-surface-container rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-[28px] text-secondary">security</span>
                    <h3 className="text-headline-md font-headline-md text-on-surface">ISO 27001</h3>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant text-sm mb-4 flex-grow">
                    Information Security. Safeguarding sensitive patient health records.
                  </p>
                </div>
                {/* Wide Card for Lab Standards */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-low rounded-xl p-6 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent z-0" />
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="p-4 bg-surface rounded-lg shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[32px] text-secondary">science</span>
                    </div>
                    <div>
                      <h3 className="text-headline-md font-headline-md text-on-surface mb-2">ISO 15189 & 17025</h3>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Specialized standards for Medical Laboratories and Testing/Calibration. Ensuring absolute precision and reliability in clinical diagnostics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Readiness Journey (Timeline/Steps) */}
          <section className="w-full bg-surface-container-lowest py-section-gap-mobile md:py-section-gap-desktop">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left Column: Sticky Intro */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                  <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4 block">
                    The Process
                  </span>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
                    Your Readiness Journey
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-8">
                    We systematically navigate the complexities of certification. Our phased approach minimizes disruption to daily operations while building a robust compliance culture.
                  </p>
                  <div 
                    className="hidden lg:block w-full h-64 rounded-xl bg-surface-container overflow-hidden"
                    style={{ 
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmRgOi8JFx2il_d9pwkxIiCCIwFpBLwG9vEaEiZdZ-onE5zHsBY_A8lIE58TqpRcJTdVD84MwjKNyPrTozGYVA4vAX_nyIT9h7UITLScJ9fR3YTWfQAzHDdmZ_xcjcectIjX3N2icPG2t8FMerYjmdyVfjvsLg5cyXIinBm5NRzLjuccSzAlLE-P_x2uGv7wSTJ8-kMkoA_ve8xxN4QenNAdvLNqOXQs-KbxK2R3wcy5ZHq7I8aSkr9Q')" 
                    }}
                    role="img"
                    aria-label="A macro shot of a clinician's hands carefully reviewing a printed audit checklist on a clipboard"
                  />
                </div>
                {/* Right Column: Interactive Steps */}
                <div className="w-full lg:w-2/3 flex flex-col gap-8 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-outline-variant/30 z-0" />
                  {/* Step 1 */}
                  <div className="relative z-10 flex gap-8 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface shadow-md flex items-center justify-center shrink-0 border-2 border-surface group-hover:border-secondary transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-on-surface-variant group-hover:text-secondary">1</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-8 flex-grow shadow-sm group-hover:shadow-md transition-shadow">
                      <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                        Comprehensive Gap Assessment
                      </h3>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        We conduct an exhaustive review of your current processes against the chosen ISO standard. This identifies vulnerabilities, undocumented practices, and areas requiring strategic alignment.
                      </p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative z-10 flex gap-8 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface shadow-md flex items-center justify-center shrink-0 border-2 border-surface group-hover:border-secondary transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-on-surface-variant group-hover:text-secondary">2</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-8 flex-grow shadow-sm group-hover:shadow-md transition-shadow">
                      <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                        Documentation Architecture
                      </h3>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Development of mandatory Quality Manuals, Standard Operating Procedures (SOPs), and policy frameworks tailored to your institution’s specific operational realities.
                      </p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative z-10 flex gap-8 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface shadow-md flex items-center justify-center shrink-0 border-2 border-surface group-hover:border-secondary transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-on-surface-variant group-hover:text-secondary">3</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-8 flex-grow shadow-sm group-hover:shadow-md transition-shadow">
                      <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                        System Implementation
                      </h3>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Rolling out the documented procedures across departments. We facilitate targeted training sessions to ensure staff comprehend and adopt the new quality management protocols.
                      </p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="relative z-10 flex gap-8 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface shadow-md flex items-center justify-center shrink-0 border-2 border-surface group-hover:border-secondary transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-on-surface-variant group-hover:text-secondary">4</span>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-8 flex-grow shadow-sm group-hover:shadow-md transition-shadow">
                      <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                        Internal Audit & Review
                      </h3>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        A rigorous pre-assessment audit performed by our lead auditors. This stress-tests the implemented systems, identifying any non-conformities before the official certification body arrives.
                      </p>
                    </div>
                  </div>
                  {/* Step 5 */}
                  <div className="relative z-10 flex gap-8 group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-secondary shadow-md flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-on-secondary">done_all</span>
                    </div>
                    <div className="bg-surface-container p-8 flex-grow shadow-md rounded-xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent" />
                      <div className="relative z-10">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                          Certification & Ongoing Support
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          We stand by you during the external audit process, providing expert liaison with certification bodies. Post-certification, we offer continuous improvement strategies to maintain compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dual Layout: FAQ & Final CTA */}
          <section className="w-full bg-surface py-section-gap-mobile md:py-section-gap-desktop">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* FAQ Section */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Clarity on the certification process.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {/* FAQ Item 1 */}
                  <details className="group bg-surface-container-low rounded-xl open:shadow-md transition-all duration-300">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-on-surface p-6 cursor-pointer list-none">
                      How long does ISO readiness take?
                      <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                      The timeline varies based on your organization’s size and current maturity level, but typically ranges from 3 to 6 months for a comprehensive ISO 9001 implementation.
                    </div>
                  </details>
                  {/* FAQ Item 2 */}
                  <details className="group bg-surface-container-low rounded-xl open:shadow-md transition-all duration-300">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-on-surface p-6 cursor-pointer list-none">
                      Do we need dedicated staff for the QMS?
                      <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                      While a designated Management Representative is required, we integrate the Quality Management System into existing roles to prevent the need for excessive new hires.
                    </div>
                  </details>
                  {/* FAQ Item 3 */}
                  <details className="group bg-surface-container-low rounded-xl open:shadow-md transition-all duration-300">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-on-surface p-6 cursor-pointer list-none">
                      Can you integrate multiple standards?
                      <span className="material-symbols-outlined text-outline transition-transform duration-300 group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                      Yes. We specialize in Integrated Management Systems (IMS), aligning standards like 9001, 14001, and 45001 into a single, cohesive operational framework to reduce audit fatigue.
                    </div>
                  </details>
                </div>
              </div>
              {/* Final Enquiry CTA */}
              <div className="bg-primary-container text-on-primary-container rounded-2xl p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center">
                {/* Decorative Background Pattern */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute right-10 top-10 w-24 h-24 bg-tertiary-fixed/10 rounded-full blur-2xl" />
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="material-symbols-outlined text-[48px] text-secondary">assignment_turned_in</span>
                  <h2 className="text-headline-lg font-headline-lg text-on-primary">
                    Ready to elevate your institutional quality?
                  </h2>
                  <p className="text-body-lg font-body-lg text-on-primary-container/80 mb-4">
                    Schedule a confidential consultation to discuss your specific operational landscape and define a roadmap to certification.
                  </p>
                  <form className="flex flex-col gap-4 w-full max-w-md">
                    <div className="flex flex-col gap-1">
                      <label className="text-label-md font-label-md text-on-primary-container/80 ml-1">Work Email</label>
                      <input 
                        className="bg-surface-container text-on-surface px-4 py-3 rounded-lg text-body-md focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow border-none w-full" 
                        placeholder="professional@institution.com" 
                        type="email"
                      />
                    </div>
                    <Link
                      href="/contact"
                      className="bg-secondary text-on-secondary px-6 py-3 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      Request Consultation
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </Link>
                    <span className="text-label-md font-label-md text-on-primary-container/50 text-center mt-2 text-xs">
                      Typical response time: 24 business hours.
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
