import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Healthcare Quality Consulting | Drdha Q Healthcare',
  description: 'Comprehensive quality consulting focused on clinical excellence, operational efficiency, and institutional authority. Expert guidance through regulatory landscapes.',
};

export default function HealthcareQualityConsulting() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full min-h-[614px] flex items-center bg-surface-container overflow-hidden pt-12 pb-24">
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center opacity-40"
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcxYqo5rbnFV8fQQ4talN-tgKPCWKO6TSyF_ngvadX2xUxZvBDejo1-dM6J0KjdE0ba9xXUGtdhI7f4ffuGAU5Bw7XfUh6JnqZIdwNYgvBXkDodLWKrFQVKCqmPpuwwwECQmvPRWrToOzZs4863VQeoYwR1sezLtB3fvek6ER691O4zVlUL4NQ-6kjCNM3LSr_HBWZL_sPGV2UDdvWFcB6VPFZWHlX_8BDH_X2QyoHkbuQzQar0jrumA')" 
                }}
                role="img"
                aria-label="Abstract, high-end medical consulting concept"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/90 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto w-full px-4 md:px-8 lg:px-grid-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
              <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-12 h-px bg-secondary" />
                  <span className="text-label-md font-label-md text-secondary uppercase tracking-widest">
                    Premium Consulting
                  </span>
                </div>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary text-balance">
                  Elevating Healthcare Standards.
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl text-pretty">
                  Comprehensive quality consulting focused on clinical excellence, operational efficiency, and institutional authority. We guide healthcare organizations through complex regulatory landscapes to achieve measurable, lasting improvements.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="bg-primary text-on-primary px-8 py-4 rounded text-label-md font-label-md shadow-md hover:bg-primary/90 transition-colors flex items-center gap-2 group"
                  >
                    Request Consultation
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <button className="px-8 py-4 rounded text-label-md font-label-md text-primary bg-surface shadow-sm hover:bg-surface-container-low transition-colors flex items-center gap-2">
                    Explore Methodology
                  </button>
                </div>
              </div>
              <div className="hidden lg:block col-span-5 relative">
                <div className="absolute -inset-4 bg-secondary-container/20 rounded-2xl blur-2xl" />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqpEVzrL2fuivvVLINiXvzgMrfJhmtkoKEIei81q89HIYLRPHgvuu33uQIbR4kGQGfJYWU-Q1eQK9jRstUVscpl1ieA74Z93_NwAxAwsjWh_87jc85ILG2Xb-_RlFH-jfGR45Vxeig4mTlsFVZoZL22MJEZDc46MYKu7tkyxHbIaJGKpaGjbN3A6Gq94WsMg0L3L75pzcOoyUWUWjX67FtMbIuCMfgv59Rtgvn0aSKj-ac5nmu9scYw"
                  alt="A diverse team of senior healthcare professionals and consultants in a well-lit, modern boardroom"
                  width={500}
                  height={400}
                  className="relative w-full h-[400px] object-cover rounded-xl shadow-xl"
                />
                {/* Floating Trust Badge */}
                <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-lg shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <p className="text-headline-md font-headline-md text-primary leading-none">15+</p>
                    <p className="text-label-md font-label-md text-on-surface-variant">Years Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Overview & Standards */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop w-full bg-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-start">
                {/* Left Column: Overview */}
                <div className="col-span-1 lg:col-span-6 flex flex-col gap-8">
                  <div>
                    <h2 className="text-headline-lg font-headline-lg text-primary mb-6">
                      Uncompromising Quality for Clinical Excellence
                    </h2>
                    <p className="text-body-md font-body-md text-on-surface-variant text-pretty mb-6">
                      Our Healthcare Quality Consulting service is engineered to transform operational challenges into institutional strengths. We employ rigorous, data-driven methodologies to identify systemic gaps, refine clinical pathways, and cultivate a pervasive culture of safety and accountability.
                    </p>
                    <p className="text-body-md font-body-md text-on-surface-variant text-pretty">
                      Whether preparing for initial accreditation or striving to exceed global benchmarks, our expert interventions are bespoke, pragmatic, and decisively effective.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-3">
                      <span className="material-symbols-outlined text-secondary text-3xl">trending_up</span>
                      <h3 className="text-headline-md font-headline-md text-primary text-lg">Operational Efficiency</h3>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-3">
                      <span className="material-symbols-outlined text-secondary text-3xl">health_and_safety</span>
                      <h3 className="text-headline-md font-headline-md text-primary text-lg">Clinical Safety</h3>
                    </div>
                  </div>
                </div>
                {/* Right Column: Standards */}
                <div className="col-span-1 lg:col-span-5 lg:col-start-8">
                  <div className="bg-primary-container text-on-primary-container p-8 rounded-xl shadow-lg relative overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
                    <h3 className="text-headline-md font-headline-md text-on-primary mb-2 relative z-10">
                      Global Standards Mastery
                    </h3>
                    <p className="text-body-md font-body-md text-on-primary-container/80 mb-8 relative z-10">
                      We ensure your institution is ready for the most demanding international and national accreditations.
                    </p>
                    <ul className="flex flex-col gap-4 relative z-10">
                      <li className="flex items-center gap-4 bg-surface/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center text-secondary-fixed">
                          <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                        </div>
                        <span className="text-body-md font-body-md text-on-primary font-medium">ISO 9001:2015 QMS</span>
                      </li>
                      <li className="flex items-center gap-4 bg-surface/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center text-secondary-fixed">
                          <span className="material-symbols-outlined text-[20px]">local_hospital</span>
                        </div>
                        <span className="text-body-md font-body-md text-on-primary font-medium">ISO 7101 Healthcare Quality</span>
                      </li>
                      <li className="flex items-center gap-4 bg-surface/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center text-secondary-fixed">
                          <span className="material-symbols-outlined text-[20px]">shield</span>
                        </div>
                        <span className="text-body-md font-body-md text-on-primary font-medium">JCI Accreditation Readiness</span>
                      </li>
                      <li className="flex items-center gap-4 bg-surface/10 p-4 rounded-lg">
                        <div className="w-10 h-10 rounded bg-secondary/20 flex items-center justify-center text-secondary-fixed">
                          <span className="material-symbols-outlined text-[20px]">verified</span>
                        </div>
                        <span className="text-body-md font-body-md text-on-primary font-medium">NABH Standards Alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Consulting Services (Bento Grid) */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop bg-surface-container-low w-full">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
                  Core Consulting Offerings
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Targeted interventions designed to address critical vulnerabilities and elevate overall institutional performance.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="col-span-1 lg:col-span-2 bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-6xl text-secondary">analytics</span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center relative z-10">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-headline-md font-headline-md text-primary mb-3">
                      Comprehensive Gap Analysis
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant max-w-xl">
                      Meticulous evaluation of current practices against desired statutory, regulatory, and accreditation standards. We deliver actionable roadmaps detailing specific non-conformances and strategic remediation plans.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="col-span-1 bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">ssid_chart</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-primary text-xl mb-3">
                      KPI Development
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Establishing robust, quantifiable metrics tailored to clinical outcomes and operational efficiency for continuous monitoring.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div className="col-span-1 bg-surface p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">warning</span>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-primary text-xl mb-3">
                      Incident Management
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Designing proactive frameworks for reporting, tracking, and mitigating adverse clinical events to ensure patient safety.
                    </p>
                  </div>
                </div>
                {/* Card 4 */}
                <div className="col-span-1 lg:col-span-2 bg-primary text-on-primary p-8 rounded-xl shadow-md flex flex-col sm:flex-row gap-8 items-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary z-0" />
                  <div className="flex-1 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-on-primary/10 text-on-primary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined">troubleshoot</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md mb-3">
                      Root Cause Analysis (RCA)
                    </h3>
                    <p className="text-body-md font-body-md text-on-primary/80">
                      Systematic investigation of critical incidents to identify underlying systemic failures rather than individual errors. We implement sustainable corrective and preventive actions (CAPA) to prevent recurrence.
                    </p>
                  </div>
                  <div className="w-full sm:w-1/3 relative z-10 flex justify-center">
                    {/* Minimal Inline SVG Representation of RCA/Node mapping */}
                    <svg className="text-secondary-fixed" fill="none" height="120" viewBox="0 0 120 120" width="120" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="20" fill="currentColor" r="8" />
                      <circle cx="30" cy="60" fill="currentColor" opacity="0.8" r="6" />
                      <circle cx="90" cy="60" fill="currentColor" opacity="0.8" r="6" />
                      <circle cx="20" cy="100" fill="currentColor" opacity="0.6" r="4" />
                      <circle cx="50" cy="100" fill="currentColor" opacity="0.6" r="4" />
                      <circle cx="80" cy="100" fill="currentColor" opacity="0.6" r="4" />
                      <circle cx="100" cy="100" fill="currentColor" opacity="0.6" r="4" />
                      <path d="M56 27L34 54" opacity="0.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M64 27L86 54" opacity="0.5" stroke="currentColor" strokeWidth="2" />
                      <path d="M28 66L22 92" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M34 66L48 92" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M88 66L82 92" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M92 66L98 92" opacity="0.4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology Flow */}
          <section className="py-section-gap-mobile md:py-section-gap-desktop w-full bg-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                  <h2 className="text-headline-lg font-headline-lg text-primary mb-4">
                    Our Transformation Methodology
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    A proven, systematic progression from initial discovery to sustained accreditation excellence.
                  </p>
                </div>
              </div>
              {/* Linear Process visualization */}
              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-outline-variant/30" />
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-2">
                  {/* Step 1 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">01</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Discover</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Initial operational baseline.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">02</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Assess</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Detailed gap analysis.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">03</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Plan</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Strategic roadmap creation.</p>
                    </div>
                  </div>
                  {/* Step 4 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 bg-primary text-on-primary transition-colors duration-300">
                      <span className="text-headline-md font-headline-md">04</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Implement</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant font-medium">Executing system changes.</p>
                    </div>
                  </div>
                  {/* Step 5 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">05</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Train</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Staff capacity building.</p>
                    </div>
                  </div>
                  {/* Step 6 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">06</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Audit</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Internal compliance checks.</p>
                    </div>
                  </div>
                  {/* Step 7 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">07</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1">Improve</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant">Continuous refinement.</p>
                    </div>
                  </div>
                  {/* Step 8 */}
                  <div className="relative group flex flex-row md:flex-col items-start gap-4">
                    <div className="w-20 h-20 md:w-[80px] md:h-[80px] rounded-full bg-surface border-4 border-surface shadow-sm z-10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-colors duration-300">
                      <span className="text-headline-md font-headline-md text-primary">08</span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h4 className="text-label-md font-label-md text-primary mb-1 text-balance">Accredit</h4>
                      <p className="text-[13px] leading-tight text-on-surface-variant text-balance">Certification readiness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="w-full bg-primary-container text-on-primary-container py-24 relative overflow-hidden">
            <div 
              className="absolute inset-0 z-0 opacity-20"
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXKqIOV3wEsSo-bfe-h0-vhCHWjwttUa3TIzBN9wc73j4mZnC4DtPgBqS0v-B26fLx8494EIrJTZwSdiMEH-QzHJTWlgxfN-kJTIEeyWcEmpo9svDnYjZtIalzhpQCiU0lzWwRu0Hot9OmpzZoCE18UVNVU0ReAu0FHKTU8Klit1E1SCpEB54UNb1JeiRDVZNlHhUGxxmwhf1Rbwb28LnFvvUQe-IXlTqNkXfZZxjcYt4Cj--yst8D1A')" 
              }}
              role="img"
              aria-label="Abstract geometric background"
            />
            <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-primary mb-6">
                  Ready to elevate your institutional quality?
                </h2>
                <p className="text-body-lg font-body-lg text-on-primary-container/80 mb-8">
                  Engage with our senior consulting team to discuss your specific accreditation goals, compliance challenges, or quality improvement initiatives.
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="/contact"
                    className="bg-secondary text-on-secondary px-8 py-4 rounded font-label-md text-label-md shadow-lg hover:bg-secondary/90 transition-all transform hover:-translate-y-1"
                  >
                    Schedule Executive Briefing
                  </Link>
                  <div className="flex items-center gap-2 text-on-primary-container/60">
                    <span className="material-symbols-outlined">lock</span>
                    <span className="text-label-md font-label-md">Confidential Consultation</span>
                  </div>
                </div>
              </div>
              {/* Minimal Contact Card */}
              <div className="bg-surface p-8 rounded-xl shadow-2xl w-full md:w-auto min-w-[320px]">
                <h4 className="text-headline-md font-headline-md text-primary mb-6">Direct Inquiry</h4>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">mail</span>
                    <div>
                      <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Email</p>
                      <p className="text-body-md font-body-md text-primary font-medium">consult@drdhaq.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-secondary mt-1">phone</span>
                    <div>
                      <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-1">Global Desk</p>
                      <p className="text-body-md font-body-md text-primary font-medium">+1 (800) 555-0199</p>
                    </div>
                  </div>
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
