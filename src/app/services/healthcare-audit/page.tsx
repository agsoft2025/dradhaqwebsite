import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Healthcare Audit & Assessment | Drdha Q Healthcare',
  description: 'Objective, evidence-based evaluations designed to identify gaps, mitigate institutional risk, and drive unwavering compliance across your healthcare ecosystem.',
};

export default function HealthcareAudit() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-surface-container -mt-20 pt-40 pb-section-gap-mobile md:pb-section-gap-desktop">
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwWIgOJVh07FvLflEbYZDWINFpuMOrEFNkmYTm7fukRdRz6fbQZUq8co1ssF8NDd_-JL6C4LKUFxLOxV8kN4aiOb719c1VJ5UmQDcJvgSux97Hi4F_ORYDQI0VZR3uJz1hLPG9Q1or9tuLmV_pWRNvAiN3yIplELNn6EjCD5xd_kdHtDQ8aEgX37cLidKHrKUfJrZEfok3aJVueZmrgETYzZ5CkLJkmru17M35sxPl_qQXmD31ELXYRw')" 
                }}
                role="img"
                aria-label="High quality professional photography in a modern clinical setting"
              />
              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-12 gap-6 lg:gap-grid-gutter">
                <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-start gap-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container/20 backdrop-blur-sm rounded-full">
                    <span className="material-symbols-outlined text-secondary text-label-md font-label-md">verified</span>
                    <span className="text-label-md font-label-md text-secondary-container uppercase tracking-wider">
                      Premium Service Line
                    </span>
                  </div>
                  <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-primary">
                    Rigorous Assessments for Clinical Excellence
                  </h1>
                  <p className="text-body-lg font-body-lg text-on-primary-container max-w-prose">
                    Objective, evidence-based evaluations designed to identify gaps, mitigate institutional risk, and drive unwavering compliance across your healthcare ecosystem.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href="/contact"
                      className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Schedule Assessment
                    </Link>
                    <button className="flex items-center gap-2 px-8 py-4 rounded-lg text-label-md font-label-md text-on-primary border border-on-primary/20 hover:bg-on-primary/10 transition-all">
                      <span className="material-symbols-outlined">download</span>
                      Audit Methodology Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Audit Overview & Value Prop (Asymmetric Layout) */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface relative z-20">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
                {/* Text Content */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 z-10">
                  <h2 className="text-headline-lg font-headline-lg text-on-surface">
                    Data-Driven Precision. Institutional Resilience.
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Our audit and assessment protocols go beyond basic compliance checkboxes. We deploy seasoned clinical auditors to conduct deep-dive, objective evaluations of your operational frameworks, clinical pathways, and quality management systems.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center mt-1">
                        <span className="material-symbols-outlined text-on-secondary-container text-label-md">analytics</span>
                      </div>
                      <div>
                        <h3 className="text-label-md font-label-md text-on-surface mb-1">Evidence-Based Methodology</h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">Findings rooted in verifiable data, not subjective observation.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center mt-1">
                        <span className="material-symbols-outlined text-on-secondary-container text-label-md">shield</span>
                      </div>
                      <div>
                        <h3 className="text-label-md font-label-md text-on-surface mb-1">Risk Mitigation</h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">Proactive identification of vulnerabilities before they manifest as critical failures.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Image & Graphic overlapping */}
                <div className="col-span-12 lg:col-span-7 relative mt-12 lg:mt-0">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-10">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6V5QQyZiwv8yWJA9Zpm72Z9VF3RpaOpR_fdyXSAuQqL0IdYCUEqLblcvjyYRthg3vwXMkXh8VOAZrJK6GDOQ77OrZQlarvqmm1hCAlwD_8h_ADN3Yc9ooj9RLqXWGdUaZMX9c9zmx8WsqOYNNKxW5_hgUrSM1mZl7R-kw6IsSHomZcH6ao-hPF-l5qtCGO3Ocv39isLp13-dLriyuuFkemFRDln6jPgdUSCKXdKZ-8Z59Dzf1vCLzrA"
                      alt="Close up photography of complex data visualizations and audit checklists displayed on a large high-resolution monitor"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Background Element */}
                  <div className="absolute -top-8 -right-8 w-64 h-64 bg-surface-container rounded-full blur-3xl -z-10" />
                  {/* Floating Stat Card */}
                  <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-6 rounded-xl shadow-lg border border-outline-variant/30 z-20 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                    <div className="p-3 bg-secondary rounded-lg">
                      <span 
                        className="material-symbols-outlined text-on-secondary text-headline-md" 
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        assignment_turned_in
                      </span>
                    </div>
                    <div>
                      <p className="text-display-lg font-display-lg text-on-surface tracking-tight leading-none mb-1">500+</p>
                      <p className="text-label-md font-label-md text-on-surface-variant uppercase">Audits Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Services Bento Grid */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container relative">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
                  Comprehensive Assessment Portfolio
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Targeted interventions tailored to the specific regulatory and operational demands of modern healthcare institutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-grid-gutter auto-rows-[280px]">
                {/* Service 1: Span 2 cols on Desktop */}
                <div className="lg:col-span-2 group relative bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 ease-out duration-500" />
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="p-4 bg-surface-container rounded-xl">
                      <span className="material-symbols-outlined text-secondary text-[32px]">troubleshoot</span>
                    </div>
                    <span className="text-label-md font-label-md text-on-surface-variant px-3 py-1 bg-surface-container-highest rounded-full">
                      High Priority
                    </span>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Gap Assessment</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-2 w-3/4">
                      Rigorous baseline evaluation against mandated standards (JCI, ISO, National Health Authorities) to pinpoint exact areas of non-compliance and operational variance.
                    </p>
                    <div className="mt-6 flex items-center text-secondary text-label-md font-label-md group-hover:translate-x-2 transition-transform cursor-pointer">
                      Explore Methodology <span className="material-symbols-outlined ml-1">arrow_forward</span>
                    </div>
                  </div>
                </div>
                {/* Service 2 */}
                <div className="group bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="p-4 bg-surface-container rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px]">fact_check</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Internal Audits</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
                      Scheduled, ongoing mock-surveys designed to maintain continuous survey readiness and instill a culture of perpetual quality improvement.
                    </p>
                  </div>
                </div>
                {/* Service 3 */}
                <div className="group bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="p-4 bg-surface-container rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px]">rule</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Compliance Assessments</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
                      Targeted reviews of specific departments (e.g., Pharmacy, Infection Control) against strict statutory and regulatory frameworks.
                    </p>
                  </div>
                </div>
                {/* Service 4 */}
                <div className="group bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="p-4 bg-surface-container rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px]">account_tree</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Process Reviews</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
                      End-to-end mapping and evaluation of clinical and administrative workflows to identify bottlenecks and efficiency opportunities.
                    </p>
                  </div>
                </div>
                {/* Service 5 */}
                <div className="group bg-primary-container p-8 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
                  <div className="p-4 bg-primary/30 rounded-xl w-fit mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px]">healing</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-primary mb-3">CAPA Development</h3>
                    <p className="text-body-md font-body-md text-on-primary-container line-clamp-3">
                      Strategic formulation and implementation support for Corrective and Preventive Action plans post-assessment to ensure sustainable resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Rail Section */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Sticky Header for Process */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                  <div className="inline-block mb-4">
                    <span className="text-label-md font-label-md text-secondary tracking-widest uppercase absolute -left-12 top-0 text-on-surface-variant opacity-50 hidden lg:block" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      Methodology
                    </span>
                    <h2 className="text-headline-lg font-headline-lg text-on-surface">The Audit Lifecycle</h2>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-8">
                    A structured, transparent, and rigorous approach ensures minimal disruption to clinical operations while maximizing the depth of insight.
                  </p>
                  <div className="w-24 h-1 bg-secondary rounded-full" />
                </div>
                {/* Stepper */}
                <div className="lg:w-2/3 relative">
                  {/* Continuous Vertical Line */}
                  <div className="absolute left-[27px] top-4 bottom-4 w-px bg-outline-variant/50" />
                  <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="relative flex gap-8 group">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                        <span className="text-label-md font-label-md text-on-surface group-hover:text-on-secondary transition-colors">01</span>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                          Pre-Audit Planning
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          Scope definition, documentation request list issuance, and stakeholder alignment. We establish clear objectives and survey schedules tailored to operational realities.
                        </p>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex gap-8 group">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                        <span className="text-label-md font-label-md text-on-surface group-hover:text-on-secondary transition-colors">02</span>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                          Onsite Assessment
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          Execution of the audit plan via clinical tracer methodologies, staff interviews, direct observation of patient care environments, and rigorous chart reviews.
                        </p>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex gap-8 group">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                        <span className="text-label-md font-label-md text-on-surface group-hover:text-on-secondary transition-colors">03</span>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                          Comprehensive Reporting
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          Delivery of an executive summary and detailed findings matrix, categorizing non-conformities by risk severity (Critical, Major, Minor, Observation).
                        </p>
                        {/* Interactive Mini Chart */}
                        <div className="mt-6 p-4 bg-surface-container rounded-lg border border-outline-variant/30 flex items-end gap-2 h-32 max-w-sm">
                          <div className="w-1/4 bg-error-container hover:bg-error rounded-t-md transition-all cursor-pointer h-[20%] group-hover:h-[30%]" title="Critical Risk" />
                          <div className="w-1/4 bg-tertiary-fixed hover:bg-tertiary-fixed-dim rounded-t-md transition-all cursor-pointer h-[50%] group-hover:h-[60%]" title="Major Risk" />
                          <div className="w-1/4 bg-secondary-fixed-dim hover:bg-secondary-fixed rounded-t-md transition-all cursor-pointer h-[80%] group-hover:h-[90%]" title="Minor Risk" />
                          <div className="w-1/4 bg-surface-dim hover:bg-surface-tint rounded-t-md transition-all cursor-pointer h-[40%] group-hover:h-[50%]" title="Observation" />
                        </div>
                      </div>
                    </div>
                    {/* Step 4 */}
                    <div className="relative flex gap-8 group">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-surface-container-highest border-2 border-surface flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300 shadow-sm">
                        <span className="text-label-md font-label-md text-on-surface group-hover:text-on-secondary transition-colors">04</span>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-2 group-hover:text-secondary transition-colors">
                          CAPA & Remediation Strategy
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          Collaborative development of a Corrective and Preventive Action plan, assigning clear ownership and timelines to close identified compliance gaps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-inverse-surface relative overflow-hidden">
            {/* Abstract Background Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect className="text-on-secondary" fill="url(#grid)" height="100%" stroke="none" width="100%" />
            </svg>
            <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-grid-margin-desktop text-center relative z-10">
              <span className="material-symbols-outlined text-[48px] text-secondary mb-6">assignment_add</span>
              <h2 className="text-headline-lg font-headline-lg text-on-secondary mb-6">
                Ready to Ensure Audit Readiness?
              </h2>
              <p className="text-body-lg font-body-lg text-on-secondary/80 mb-10">
                Engage our clinical audit specialists to conduct a comprehensive assessment and fortify your quality management system.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-colors shadow-lg"
                >
                  Request a Consultation
                </Link>
                <button className="w-full sm:w-auto bg-transparent border border-on-secondary/30 text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-on-secondary/10 transition-colors">
                  View Assessor Profiles
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
