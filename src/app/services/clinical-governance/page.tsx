import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Clinical Governance & Patient Safety | Drdha Q Healthcare',
  description: 'Strengthening clinical accountability and cultivating a robust patient safety culture. We design bespoke governance frameworks that protect patients and empower healthcare professionals.',
};

export default function ClinicalGovernance() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative min-h-[819px] flex items-center bg-primary-container text-on-primary-container overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClLbVfXRfRJAWsN75vPbvQc0Dxj5xSJWoyBTx4RzFtOW1zJbKa6_UVFNS6eCbIsaAwo4jU_JhIRnGxHaBte7c67Ea0XSlq1mfF42lHhEA4dGALQPx--oOza7mF-8Qraxji7k50j198-veglA8CzbU0u__o892pUKjFPYIb7GioE8eKpYCEob11aXjsu07lNa0-_OmHz21zvzqipswrpi1PweI4Lydzz5Q_ptfQ3QmPfsnyn-1VgNwyRw')" 
                }}
                role="img"
                aria-label="Modern hospital corridor with natural light conveying clinical safety"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop py-section-gap-mobile md:py-section-gap-desktop flex flex-col items-start gap-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary text-label-md font-label-md tracking-widest uppercase backdrop-blur-sm shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                Premium Service
              </span>
              <h1 className="text-display-lg font-display-lg text-on-primary-container max-w-3xl leading-tight">
                Prioritizing Safety, <br /> Ensuring Trust
              </h1>
              <p className="text-body-lg font-body-lg text-on-primary-container/80 max-w-2xl">
                Strengthening clinical accountability and cultivating a robust patient safety culture. We design bespoke governance frameworks that protect patients and empower healthcare professionals.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="#enquiry"
                  className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-colors shadow-md"
                >
                  Request Assessment <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-transparent text-secondary outline-secondary outline-1 outline px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/10 transition-colors"
                >
                  Explore Frameworks
                </a>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface text-on-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
                <div className="lg:col-span-5 relative">
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-surface-container-high rounded-full blur-3xl opacity-50 pointer-events-none" />
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-6 relative z-10">The Foundation of Clinical Excellence</h2>
                  <div className="w-16 h-1 bg-secondary mb-8" />
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    Clinical governance is not merely a compliance exercise; it is the fundamental mechanism through which healthcare organizations guarantee high standards of care, transparency, and continuous improvement.
                  </p>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Our approach moves beyond theoretical frameworks, embedding safety culture directly into operational workflows. We partner with leadership to build resilient systems where risk is managed proactively and accountability is shared.
                  </p>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square md:aspect-video lg:aspect-[4/3] bg-surface-container">
                    <Image
                      className="w-full h-full object-cover mix-blend-multiply opacity-90"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqaZNtkePC_9kj5ARb7x5A-GYy1uai7LWfshoAuprW8ntWyngs2IxOEbMQqRgH_SlAOwJAijyL91t0-QliWyNs1OBzjb01VlKZuyf1DIs9duTs0BDhmiZPTuSb2zpPAmpBRv0ApqydeWxA04mFN1pfNBuPyxuJIXKobE-rNAVSUpmQxWIop9VEd16oub3T0bIUGWvOikmRVjXUDZ3O_n2bJTr-DjwgSHxXfFduzNJODZkKzkJVOq7Wjw"
                      alt="Medical professionals analyzing data dashboard in conference room"
                      width={800}
                      height={600}
                    />
                  </div>
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-xs">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/5 rounded-lg text-primary">
                        <span className="material-symbols-outlined text-[32px]">query_stats</span>
                      </div>
                      <div>
                        <div className="text-display-lg font-display-lg text-primary">85%</div>
                        <div className="text-label-md font-label-md text-on-surface-variant mt-1">Reduction in critical incidents within 12 months.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid (Bento Style) */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-low text-on-surface" id="services">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col items-center text-center mb-16">
                <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4">Core Capabilities</span>
                <h2 className="text-headline-lg font-headline-lg text-primary">Comprehensive Safety Solutions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-grid-gutter">
                {/* Service 1: Governance Design */}
                <div className="lg:col-span-2 group relative bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                    <span className="material-symbols-outlined text-[120px]">account_tree</span>
                  </div>
                  <div className="relative z-10 mb-12">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-primary mb-4">Governance Framework Design</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                      Architecting robust governance structures aligned with international best practices. We establish clear lines of accountability, defining committee terms of reference and reporting cascades to ensure board-to-ward visibility.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="relative z-10 inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-secondary-fixed-dim transition-colors w-max mt-auto"
                  >
                    View Methodology <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Service 2: Risk Management */}
                <div className="group relative bg-primary-container p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-on-primary-container">
                  <div className="mb-12">
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary-fixed mb-6">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-primary-container mb-4">Enterprise Risk Management</h3>
                    <p className="text-body-md font-body-md text-on-primary-container/80">
                      Proactive identification, assessment, and mitigation of clinical and non-clinical risks before they manifest into critical incidents.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary-fixed hover:text-secondary-fixed-dim transition-colors w-max mt-auto"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Service 3: Incident Reporting */}
                <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-12">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>report</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-primary mb-4">Incident Reporting & Investigation</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Implementing root cause analysis methodologies (RCA) and fostering a 'just culture' where reporting is encouraged without fear of punitive action.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-secondary-fixed-dim transition-colors w-max mt-auto"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Service 4: Clinical Audit */}
                <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-12">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-primary mb-4">Clinical Audit Programs</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Designing cyclical audit programs to measure clinical practice against evidenced-based standards, driving continuous quality improvement cycles.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-secondary-fixed-dim transition-colors w-max mt-auto"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Service 5: QI Frameworks */}
                <div className="group bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-12">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                      <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-primary mb-4">Quality Improvement Frameworks</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Deploying robust QI methodologies (e.g., Lean Six Sigma, PDSA) tailored to clinical settings to optimize patient outcomes and resource utilization.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-secondary-fixed-dim transition-colors w-max mt-auto"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology / Process Timeline */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface text-on-surface overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-grid-gutter items-start">
                <div className="sticky top-32">
                  <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4 block">Proven Approach</span>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-6">Transformation Through Structure</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-8 max-w-md">
                    Our implementation methodology ensures clinical governance frameworks are embedded deeply within organizational culture, not just written in manuals.
                  </p>
                  {/* Interactive chart placeholder (simulated with SVG) */}
                  <div className="bg-surface-container-low p-6 rounded-xl shadow-inner relative">
                    <svg className="w-full h-48" fill="none" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 130 C 50 130, 100 80, 150 90 C 200 100, 250 40, 300 50 C 350 60, 380 20, 400 20" stroke="var(--color-secondary, #006a61)" strokeLinecap="round" strokeWidth="4" />
                      <path d="M0 130 C 50 130, 100 80, 150 90 C 200 100, 250 40, 300 50 C 350 60, 380 20, 400 20 L 400 150 L 0 150 Z" fill="url(#gradient)" opacity="0.1" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="gradient" x1="200" x2="200" y1="20" y2="150">
                          <stop stopColor="var(--color-secondary, #006a61)" />
                          <stop offset="1" stopColor="var(--color-secondary, #006a61)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute top-4 left-6 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider text-[10px]">Safety Maturity Index over Time</div>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-surface-container-high mt-12 lg:mt-0 space-y-16">
                  {/* Step 1 */}
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-secondary rounded-full shadow-[0_0_0_8px_var(--color-surface, #f8f9ff)] transition-transform group-hover:scale-110" />
                    <span className="text-display-lg font-display-lg text-surface-container-high absolute -top-12 -left-4 -z-10 font-bold select-none">01</span>
                    <h4 className="text-headline-md font-headline-md text-primary mb-2">Culture & Gap Assessment</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      We begin by evaluating your existing clinical safety culture and baseline governance structures, identifying critical vulnerabilities and compliance gaps against national standards.
                    </p>
                  </div>
                  {/* Step 2 */}
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-surface-container-high group-hover:bg-secondary rounded-full shadow-[0_0_0_8px_var(--color-surface, #f8f9ff)] transition-colors duration-300" />
                    <span className="text-display-lg font-display-lg text-surface-container-high absolute -top-12 -left-4 -z-10 font-bold select-none">02</span>
                    <h4 className="text-headline-md font-headline-md text-primary mb-2">Framework Design</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Collaborative design of customized policies, reporting lines, and terms of reference. We build the architecture required for effective clinical oversight and risk escalation.
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-surface-container-high group-hover:bg-secondary rounded-full shadow-[0_0_0_8px_var(--color-surface, #f8f9ff)] transition-colors duration-300" />
                    <span className="text-display-lg font-display-lg text-surface-container-high absolute -top-12 -left-4 -z-10 font-bold select-none">03</span>
                    <h4 className="text-headline-md font-headline-md text-primary mb-2">Implementation & Training</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Rolling out the framework through targeted training programs, building internal capacity, and integrating safety protocols directly into daily clinical pathways.
                    </p>
                  </div>
                  {/* Step 4 */}
                  <div className="relative group">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-surface-container-high group-hover:bg-secondary rounded-full shadow-[0_0_0_8px_var(--color-surface, #f8f9ff)] transition-colors duration-300" />
                    <span className="text-display-lg font-display-lg text-surface-container-high absolute -top-12 -left-4 -z-10 font-bold select-none">04</span>
                    <h4 className="text-headline-md font-headline-md text-primary mb-2">Monitoring & Assurance</h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Establishing KPIs and continuous audit cycles to verify that the governance framework is actively improving patient outcomes and reducing risk over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ & Final CTA */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container text-on-surface" id="enquiry">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-grid-margin-desktop">
                {/* FAQ Accordion */}
                <div>
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {/* FAQ Item 1 */}
                    <details className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden group">
                      <summary className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer list-none">
                        <span className="text-headline-md font-headline-md text-primary text-[18px]">How long does a governance overhaul take?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 text-on-surface-variant group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          A comprehensive governance design and implementation typically spans 3 to 6 months, depending on the size and complexity of the healthcare organization. We prioritize phased rollouts to minimize operational disruption.
                        </p>
                      </div>
                    </details>
                    {/* FAQ Item 2 */}
                    <details className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden group">
                      <summary className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer list-none">
                        <span className="text-headline-md font-headline-md text-primary text-[18px]">Do you align with specific accreditation bodies?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 text-on-surface-variant group-open:rotate-180">expand_more</span>
                      </summary>
                      <div className="px-6 pb-5 pt-0">
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          Yes. Our frameworks are mapped to leading international standards including JCI, ISO 9001:2015 for Healthcare, and relevant national health authority regulations, ensuring audit readiness built-in by design.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
                {/* Consultation Form */}
                <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-xl">
                  <h3 className="text-headline-md font-headline-md text-primary mb-2">Request an Initial Consultation</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-8">Discuss your specific governance challenges with our senior clinical consultants.</p>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="name">Full Name</label>
                        <input 
                          className="bg-surface-container-low border-none rounded-lg px-4 py-3 text-body-md text-on-surface focus:ring-2 focus:ring-secondary outline-none transition-shadow" 
                          id="name" 
                          placeholder="Dr. Jane Doe" 
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="org">Organization</label>
                        <input 
                          className="bg-surface-container-low border-none rounded-lg px-4 py-3 text-body-md text-on-surface focus:ring-2 focus:ring-secondary outline-none transition-shadow" 
                          id="org" 
                          placeholder="General Hospital" 
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="email">Professional Email</label>
                      <input 
                        className="bg-surface-container-low border-none rounded-lg px-4 py-3 text-body-md text-on-surface focus:ring-2 focus:ring-secondary outline-none transition-shadow" 
                        id="email" 
                        placeholder="jane.doe@hospital.com" 
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="interest">Primary Area of Interest</label>
                      <select 
                        className="bg-surface-container-low border-none rounded-lg px-4 py-3 text-body-md text-on-surface focus:ring-2 focus:ring-secondary outline-none transition-shadow appearance-none" 
                        id="interest"
                      >
                        <option>Governance Framework Design</option>
                        <option>Risk Management Assessment</option>
                        <option>Clinical Audit Strategy</option>
                        <option>Incident Management Systems</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-secondary text-on-secondary py-4 rounded-lg text-label-md font-label-md shadow-md hover:bg-secondary/90 transition-colors mt-4 flex items-center justify-center"
                    >
                      Submit Consultation Request
                    </Link>
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
