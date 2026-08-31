import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accreditation Support | Drdha Q Healthcare',
  description: 'Navigate the complex landscape of healthcare standards with our expert support. We build resilient quality frameworks that ensure seamless certification and sustained clinical excellence.',
};

export default function AccreditationSupport() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full min-h-[819px] flex items-center bg-primary-container text-on-primary-container overflow-hidden">
            {/* Ambient Background Graphic */}
            <div className="absolute inset-0 z-0 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z" fill="currentColor" />
                <circle cx="80" cy="20" fill="currentColor" r="15" />
                <circle cx="15" cy="70" fill="currentColor" r="8" />
              </svg>
            </div>
            <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 lg:px-grid-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter relative z-10 py-section-gap-mobile md:py-section-gap-desktop">
              <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-8 h-1 bg-secondary-container" />
                  <span className="text-label-md font-label-md uppercase tracking-wider text-secondary-container">
                    Premium Service
                  </span>
                </div>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg mb-6 leading-tight">
                  Achieve Excellence with <br />
                  <span className="text-secondary-fixed">Global Accreditation</span>
                </h1>
                <p className="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-xl">
                  Navigate the complex landscape of healthcare standards with our expert support. We build resilient quality frameworks that ensure seamless certification and sustained clinical excellence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-colors shadow-lg"
                  >
                    Start Your Journey
                  </Link>
                  <button className="px-8 py-4 rounded-lg text-label-md font-label-md text-on-primary-container hover:bg-surface-container/10 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">play_circle</span> Watch Overview
                  </button>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-5 relative hidden lg:block">
                <div className="absolute inset-0 bg-secondary-fixed/20 blur-3xl rounded-full transform -translate-x-10 translate-y-10" />
                <div 
                  className="relative rounded-xl overflow-hidden shadow-2xl h-[500px] w-full"
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCq8FGr4DZ5z9OBtN1s7VddYppA5lEO2n97qm5xqQPPAy4r9O09JVw9ic2D_tyTkPSyWdzOhuoYVkbCVMaJNz7U_D88CEOwB9YPocnRtKoOZavvaQ2c5Y0Y_MUOMF3ebzSOrzs4OW-7KvDyGqgxV35RhMlcEW9WyPFoFQr8ig3ChwtA0FORrbyj3Y5HMN5hU35heXN3pebAlI8Uh2L_BFcMhlos1lMq1EmFQ8UY_EU5kMbyTOmPLDXz6g')" 
                  }}
                  role="img"
                  aria-label="Healthcare professionals reviewing digital charts in a modern hospital boardroom"
                >
                  {/* Overlay for texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent mix-blend-multiply" />
                </div>
                {/* Floating Stat Card */}
                <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-lg shadow-xl max-w-[200px]">
                  <div className="text-display-lg font-display-lg text-secondary mb-1">100%</div>
                  <div className="text-label-md font-label-md text-on-surface-variant">First-Time Pass Rate for Guided Institutions</div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface relative z-20">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
                <div className="col-span-1 lg:col-span-5 relative">
                  <div 
                    className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg"
                    style={{ 
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi2YAw4rw80bvpXCuhQ5FSPTJqmjea1DOMZlToJiXU0o7dA0mPhbQexkVRTcDSTOvde-H1PCYf-lNJSQ9AnZqr9j-Gm_bOO2zCDQBU9WWcqjYTOqbkqQRaKQ9jXzZ08bc37aSI4peO1maS-4bLQ-50h-j3ZM2TNXvYQW1eOXQVPR6PUzo0EEYMGjUVugTFlKot_R_TId-TxCkzjuUv_QjKjNOR_X4fZMK4BC__Pz4yiw8UOQVG9yHErw')" 
                    }}
                    role="img"
                    aria-label="Healthcare certification documents and golden seal of approval"
                  />
                  {/* Decorative element */}
                  <div className="absolute top-10 -right-10 w-32 h-32 bg-surface-container rounded-full mix-blend-multiply flex items-center justify-center opacity-80 shadow-inner">
                    <span className="material-symbols-outlined text-4xl text-primary">verified</span>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-6 lg:col-start-7 flex flex-col gap-8">
                  <div>
                    <h2 className="text-headline-lg font-headline-lg mb-6">
                      Specialized Support for National & International Standards
                    </h2>
                    <p className="text-body-lg font-body-lg text-on-surface-variant">
                      Accreditation is more than a badge—it is a commitment to patient safety and operational superiority. Our methodology transforms the rigorous demands of standard compliance into an engine for institutional growth.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-secondary-container">policy</span>
                      </div>
                      <div>
                        <h3 className="text-headline-md font-headline-md text-base mb-2">Regulatory Alignment</h3>
                        <p className="text-body-md font-body-md text-on-surface-variant text-sm">Mapping your existing processes to stringent international benchmarks.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">health_and_safety</span>
                      </div>
                      <div>
                        <h3 className="text-headline-md font-headline-md text-base mb-2">Risk Mitigation</h3>
                        <p className="text-body-md font-body-md text-on-surface-variant text-sm">Proactive identification and resolution of clinical vulnerabilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accreditations & Services Bento Grid */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-lowest">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="text-center mb-16">
                <h2 className="text-headline-lg font-headline-lg mb-4">Comprehensive Coverage</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                  Tailored roadmaps for the world’s most demanding healthcare standards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-grid-gutter">
                {/* Accreditation Cards */}
                <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full transition-transform group-hover:scale-110" />
                  <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg mb-6 shadow-inner">
                    <span className="text-display-lg font-display-lg text-2xl text-primary">JCI</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md mb-3">Joint Commission International</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">The gold standard in global healthcare quality. We prepare your institution for rigorous JCI surveys with exacting precision.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary hover:text-primary transition-colors"
                  >
                    Explore JCI Readiness <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full transition-transform group-hover:scale-110" />
                  <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg mb-6 shadow-inner">
                    <span className="text-display-lg font-display-lg text-2xl text-primary">NABH</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md mb-3">National Accreditation Board</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">Structuring your hospital’s operations to meet national excellence frameworks for hospitals and healthcare providers.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary hover:text-primary transition-colors"
                  >
                    Explore NABH Roadmap <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/5 rounded-bl-full transition-transform group-hover:scale-110" />
                  <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-lg mb-6 shadow-inner">
                    <span className="text-display-lg font-display-lg text-2xl text-primary">NABL</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md mb-3">Laboratory Accreditation</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">Ensuring unassailable accuracy and quality management systems for medical testing laboratories.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-label-md font-label-md text-secondary hover:text-primary transition-colors"
                  >
                    Explore NABL Support <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                {/* Services Span */}
                <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-grid-gutter mt-8 pt-8 relative">
                  {/* Separator Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
                  <div className="flex flex-col gap-2 p-4">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-2">description</span>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface">Documentation</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Drafting and review of all mandatory manuals, SOPs, and policies.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-2">school</span>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface">Staff Training</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Comprehensive capacity building and culture-shift workshops.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-2">rule</span>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface">Mock Assessments</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Rigorous simulated audits to identify gaps before the final survey.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-2">fact_check</span>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface">Readiness Evaluation</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Final baseline assessment providing a definitive “go/no-go” metric.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accreditation Journey (Progress Rail Concept) */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-32 h-64 bg-surface-container-high rounded-r-full -translate-y-1/2 opacity-50 mix-blend-multiply blur-2xl" />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="mb-16">
                <h2 className="text-headline-lg font-headline-lg mb-4">The Accreditation Journey</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">A structured, five-phase methodology ensuring predictable success.</p>
              </div>
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-8 right-8 h-[2px] bg-surface-variant hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {/* Phase 1 */}
                  <div className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                      <span className="text-headline-md font-headline-md">1</span>
                    </div>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface mb-2">Assessment</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Gap analysis against target standards.</p>
                  </div>
                  {/* Phase 2 */}
                  <div className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                      <span className="text-headline-md font-headline-md">2</span>
                    </div>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface mb-2">Planning</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Strategic roadmap and resource allocation.</p>
                  </div>
                  {/* Phase 3 */}
                  <div className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                      <span className="text-headline-md font-headline-md">3</span>
                    </div>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface mb-2">Training</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Process alignment and staff empowerment.</p>
                  </div>
                  {/* Phase 4 */}
                  <div className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-16 h-16 rounded-full bg-surface-container border-2 border-surface flex items-center justify-center mb-6 relative z-10 shadow-sm transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
                      <span className="text-headline-md font-headline-md">4</span>
                    </div>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-surface mb-2">Verification</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Mock audits and corrective actions.</p>
                  </div>
                  {/* Phase 5 */}
                  <div className="relative flex flex-col md:items-center text-left md:text-center group">
                    <div className="w-16 h-16 rounded-full bg-secondary-container border-2 border-surface flex items-center justify-center mb-6 relative z-10 shadow-md">
                      <span className="material-symbols-outlined text-on-secondary-container">done_all</span>
                    </div>
                    <h4 className="text-label-md font-label-md uppercase tracking-wider text-primary mb-2">Submission</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant text-sm">Final survey support and sustained compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA & FAQ Hybrid Section */}
          <section className="bg-primary-container text-on-primary-container py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden">
            {/* Subtle architectural background pattern */}
            <div 
              className="absolute inset-0 opacity-5" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg mb-6">Ready for Audit?</h2>
                  <p className="text-body-lg font-body-lg text-on-primary-container/80 mb-10 max-w-md">
                    Don’t leave your institution’s reputation to chance. Secure our expert guidance to ensure a seamless accreditation process.
                  </p>
                  <div className="bg-surface p-8 rounded-xl text-on-surface shadow-2xl relative">
                    <h3 className="text-headline-md font-headline-md mb-6">Request Readiness Consultation</h3>
                    <form className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-on-surface-variant">Institution Name</label>
                        <input 
                          className="px-4 py-3 bg-surface-container-lowest border-none shadow-sm rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-shadow" 
                          placeholder="e.g. City General Hospital" 
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-label-md font-label-md text-on-surface-variant">Target Accreditation</label>
                        <select className="px-4 py-3 bg-surface-container-lowest border-none shadow-sm rounded-lg focus:ring-2 focus:ring-secondary outline-none transition-shadow text-on-surface">
                          <option>JCI</option>
                          <option>NABH</option>
                          <option>NABL</option>
                          <option>Other / Unsure</option>
                        </select>
                      </div>
                      <Link
                        href="/contact"
                        className="mt-4 bg-primary text-on-primary py-4 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-colors shadow-md w-full flex items-center justify-center"
                      >
                        Submit Request
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-headline-lg font-headline-lg mb-4">Frequently Asked Questions</h3>
                  <details className="group bg-on-primary-container/5 rounded-lg open:bg-on-primary-container/10 transition-colors">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-base p-6 cursor-pointer list-none">
                      How long does the preparation process take?
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 text-body-md font-body-md text-on-primary-container/70">
                      Timelines vary significantly based on the current state of your quality systems and the target standard. Typically, a full JCI preparation spans 12-18 months, while national accreditations may take 6-12 months.
                    </div>
                  </details>
                  <details className="group bg-on-primary-container/5 rounded-lg open:bg-on-primary-container/10 transition-colors">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-base p-6 cursor-pointer list-none">
                      Do you provide continuous support post-accreditation?
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 text-body-md font-body-md text-on-primary-container/70">
                      Yes. Achieving accreditation is a milestone, but sustaining it is the ongoing challenge. We offer retainer services for continuous quality improvement and recertification audits.
                    </div>
                  </details>
                  <details className="group bg-on-primary-container/5 rounded-lg open:bg-on-primary-container/10 transition-colors">
                    <summary className="flex justify-between items-center text-headline-md font-headline-md text-base p-6 cursor-pointer list-none">
                      Can you integrate multiple standards simultaneously?
                      <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div className="px-6 pb-6 text-body-md font-body-md text-on-primary-container/70">
                      Absolutely. Our consultants specialize in mapping cross-standard requirements to minimize redundancy, allowing institutions to pursue ISO, NABH, and specialized clinical certifications in a unified roadmap.
                    </div>
                  </details>
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
