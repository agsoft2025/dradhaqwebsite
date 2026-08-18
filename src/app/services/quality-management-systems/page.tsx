import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quality Management Systems | Drdha Q Healthcare',
  description: 'We design and implement bespoke Quality Management Systems (QMS) tailored to the unique complexities of healthcare providers, ensuring clinical excellence, patient safety, and operational efficiency.',
};

export default function QualityManagementSystems() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-surface-container pt-section-gap-mobile md:pt-section-gap-desktop pb-16 lg:pb-32 px-4 md:px-8 lg:px-grid-margin-desktop">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path className="text-primary-container" d="M0,100 C30,70 70,30 100,0 L100,100 Z" fill="currentColor" />
                <path className="text-secondary" d="M0,50 C40,20 60,80 100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="relative max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
              <div className="lg:col-span-7 flex flex-col gap-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 text-on-secondary-container text-label-md font-label-md w-fit">
                  <span className="material-symbols-outlined text-[16px]">architecture</span>
                  <span>Quality Management Systems</span>
                </div>
                <h1 className="text-display-lg font-display-lg text-on-surface">Architecting Quality for Better Outcomes</h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                  We design and implement bespoke Quality Management Systems (QMS) tailored to the unique complexities of healthcare providers, ensuring clinical excellence, patient safety, and operational efficiency.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <Link
                    href="#enquiry"
                    className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2"
                  >
                    Schedule Consultation
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <a
                    href="#framework"
                    className="bg-transparent text-primary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-surface-container-high transition-all outline outline-1 outline-outline inline-flex items-center gap-2"
                  >
                    Explore Framework
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-surface-variant"
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXq6nV7-Etsvuhl41ydna6tqArv9lV-k1dWu_TOZe-VJGNkNgx4kKkq8FdE_JjhY3JpbVSow4WtGrAUR1-xZDxGTp1J9aFIOpaqJHqpuerYBPIduTBK9wWz4bWKIDpDHiXFpB6nqzHeSsdLLJ2FlPKOjnyh2gIjvP6HKr5Ub8rCF0gcd91QtWcOZ32IyD8m_M8AvLUwZOaS6Ilp_Kssajt4VCJM5CJZqUl2GpjZ4pDTJhGzhD_vwXM-w')" 
                  }}
                  role="img"
                  aria-label="Blueprint or architectural diagram overlaying a modern hospital corridor"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-surface/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <span className="block text-label-md font-label-md text-on-surface-variant mb-1">System Efficiency</span>
                      <div className="flex items-end gap-2">
                        <span className="text-headline-lg font-headline-lg text-primary">98.4%</span>
                        <span className="text-body-md font-body-md text-secondary mb-1">↑ 12%</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-secondary-container/50 rounded-full blur-3xl" />
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-grid-gutter">
              <div className="md:col-span-4 flex flex-col gap-4">
                <h2 className="text-headline-lg font-headline-lg text-on-surface">The Anatomy of Excellence</h2>
                <div className="w-12 h-1 bg-secondary rounded-full" />
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  A robust Quality Management System is the central nervous system of any high-performing healthcare organization. It transforms fragmented procedures into a cohesive, measurable, and continually improving engine of clinical delivery.
                </p>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Our approach moves beyond basic compliance. We engineer systems that embed quality into the daily workflow of clinical and administrative staff, creating a culture where excellence is standardized, predictable, and sustainable. By aligning your organizational objectives with internationally recognized standards, we help you build a resilient foundation for long-term clinical success.
                </p>
              </div>
            </div>
          </section>

          {/* Core Services Bento Grid */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface-container-lowest">
            <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
              <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
                <span className="text-label-md font-label-md text-secondary tracking-widest uppercase">Core Capabilities</span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface">Comprehensive QMS Architecture</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                {/* Service 1: Design (Large Span) */}
                <div className="lg:col-span-2 bg-surface-container rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-[120px] text-primary">schema</span>
                  </div>
                  <div className="z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary text-on-primary rounded-xl flex items-center justify-center shadow-md">
                      <span className="material-symbols-outlined">design_services</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">QMS Design & Architecture</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                      Custom-built frameworks tailored to your clinical environment. We map organizational context, define quality policy, and establish clear objectives aligned with strategic goals.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="z-10 inline-flex items-center gap-2 text-label-md font-label-md text-primary mt-8 group-hover:translate-x-2 transition-transform"
                  >
                    Learn more <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Service 2: Process Standardization */}
                <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-5">
                    <span className="material-symbols-outlined text-[150px] text-on-surface">account_tree</span>
                  </div>
                  <div className="z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">account_tree</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">Process Standardization</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Mapping and optimizing clinical and administrative pathways to reduce variance and error.
                    </p>
                  </div>
                </div>
                {/* Service 3: Documentation */}
                <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute -left-4 -bottom-4 opacity-5">
                    <span className="material-symbols-outlined text-[150px] text-on-surface">description</span>
                  </div>
                  <div className="z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">Robust Documentation</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Developing clear, accessible SOPs, manuals, and records that ensure compliance without bureaucratic bloat.
                    </p>
                  </div>
                </div>
                {/* Service 4: Monitoring */}
                <div className="bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-5">
                    <span className="material-symbols-outlined text-[150px] text-on-surface">monitoring</span>
                  </div>
                  <div className="z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-error-container text-on-error-container rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined">monitoring</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">Monitoring & Measurement</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Establishing KPIs and data collection mechanisms to track system performance and clinical outcomes accurately.
                    </p>
                  </div>
                </div>
                {/* Service 5: Continual Improvement */}
                <div className="bg-primary-container text-on-primary-container rounded-2xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10" />
                  <div className="z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-surface text-on-surface rounded-xl flex items-center justify-center shadow-inner">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-primary-container">Continual Improvement</h3>
                    <p className="text-body-md font-body-md text-on-primary-container/80">
                      Embedding corrective and preventive action (CAPA) frameworks and root cause analysis methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Framework / Process Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface overflow-hidden relative" id="framework">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-surface-container-high rounded-full blur-[100px] opacity-50 -z-10" />
            <div className="max-w-[1280px] mx-auto">
              <div className="mb-16 md:w-2/3">
                <h2 className="text-display-lg font-display-lg text-on-surface mb-6">The Implementation Framework</h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  A structured, phased approach to building a resilient QMS. We guide your institution from initial assessment through to full operational maturity.
                </p>
              </div>
              <div className="relative">
                {/* Connecting Line Desktop */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-surface-container-highest" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Phase 1 */}
                  <div className="relative flex flex-col gap-4 group">
                    <div className="w-24 h-24 rounded-full bg-surface-container shadow-md flex items-center justify-center z-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                      <span className="text-headline-lg font-headline-lg font-bold">01</span>
                    </div>
                    <div className="text-center md:text-left mt-4">
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">Design</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Gap analysis, context evaluation, and blueprinting the architecture of your specific quality system.
                      </p>
                    </div>
                  </div>
                  {/* Phase 2 */}
                  <div className="relative flex flex-col gap-4 group">
                    <div className="w-24 h-24 rounded-full bg-surface-container shadow-md flex items-center justify-center z-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                      <span className="text-headline-lg font-headline-lg font-bold">02</span>
                    </div>
                    <div className="text-center md:text-left mt-4">
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">Implement</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Process deployment, staff training, documentation rollout, and embedding new workflows into daily operations.
                      </p>
                    </div>
                  </div>
                  {/* Phase 3 */}
                  <div className="relative flex flex-col gap-4 group">
                    <div className="w-24 h-24 rounded-full bg-surface-container shadow-md flex items-center justify-center z-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                      <span className="text-headline-lg font-headline-lg font-bold">03</span>
                    </div>
                    <div className="text-center md:text-left mt-4">
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">Monitor</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Internal auditing, KPI tracking, and management reviews to ensure systemic compliance and effectiveness.
                      </p>
                    </div>
                  </div>
                  {/* Phase 4 */}
                  <div className="relative flex flex-col gap-4 group">
                    <div className="w-24 h-24 rounded-full bg-surface-container shadow-md flex items-center justify-center z-10 mx-auto md:mx-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                      <span className="text-headline-lg font-headline-lg font-bold">04</span>
                    </div>
                    <div className="text-center md:text-left mt-4">
                      <h4 className="text-headline-md font-headline-md text-on-surface mb-2">Optimize</h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Iterative refinement based on data insights, driving a permanent culture of continual clinical improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Standards / Credentials Section (Split Panel) */}
          <section className="py-16 md:py-0 bg-inverse-surface text-inverse-on-surface">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Half */}
              <div 
                className="h-[400px] md:h-auto min-h-[500px] bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDohm5N3YRJIIwpdCcvUHg_mNwWQ69KTKY2M2Y6e5z-C7FlyZqFSmV2NfviaBJxSNun8oXD2khOPMI6zbLhbxk1ak7jIGrKjnXvqIxHYJJxf2ZtD0sbtAehVdcUqu8vWYEwOspZu--QNf4WFvoe-B9O2W1KtShswcQ-anKVGEw_Rl9lgswtULKpIEzpt2X5RZTHWN407pQdtPIwD3mz6m-M-StoTnJBNmIwVei4Jiz5G67LPrq4LkE7Xow')" 
                }}
                role="img"
                aria-label="Healthcare quality auditor reviewing digital documentation with senior clinician"
              />
              {/* Content Half */}
              <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 gap-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[32px] text-secondary-container">verified</span>
                  <span className="text-label-md font-label-md uppercase tracking-widest text-surface-dim">International Standards</span>
                </div>
                <h2 className="text-display-lg font-display-lg text-on-secondary">Built to Global Benchmarks</h2>
                <p className="text-body-lg font-body-lg text-inverse-on-surface/80">
                  We ensure your system is structurally sound and immediately ready for international certification, seamlessly integrating the requirements of top-tier quality standards.
                </p>
                <div className="flex flex-col gap-6 mt-4">
                  <div className="bg-surface/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-headline-md font-headline-md text-on-secondary mb-2 flex items-center gap-2">
                      ISO 9001:2015
                    </h4>
                    <p className="text-body-md font-body-md text-inverse-on-surface/70">
                      The foundational standard for generic quality management, emphasizing strong customer (patient) focus, management leadership, and continual improvement.
                    </p>
                  </div>
                  <div className="bg-surface/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-headline-md font-headline-md text-on-secondary mb-2 flex items-center gap-2">
                      ISO 7101:2023
                    </h4>
                    <p className="text-body-md font-body-md text-inverse-on-surface/70">
                      The specific standard for healthcare organization management, focusing on high-quality care, patient safety, and person-centered service delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface-container-lowest">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
              <div className="text-center">
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">Frequently Asked Questions</h2>
                <p className="text-body-md font-body-md text-on-surface-variant">Clarity on our QMS implementation process.</p>
              </div>
              <div className="flex flex-col gap-4">
                {/* FAQ Item 1 */}
                <div className="bg-surface rounded-xl p-6 shadow-sm">
                  <h4 className="text-headline-md font-headline-md text-on-surface mb-3">How long does a typical QMS implementation take?</h4>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Depending on the size and complexity of your organization, a full QMS design and implementation typically ranges from 6 to 12 months. We phase the rollout to minimize disruption to active clinical services.
                  </p>
                </div>
                {/* FAQ Item 2 */}
                <div className="bg-surface rounded-xl p-6 shadow-sm">
                  <h4 className="text-headline-md font-headline-md text-on-surface mb-3">Do we need new software to implement a QMS?</h4>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Not necessarily. While dedicated eQMS software can streamline document control and CAPA management, we often design systems that integrate seamlessly with your existing hospital information systems (HIS) or electronic medical records (EMR).
                  </p>
                </div>
                {/* FAQ Item 3 */}
                <div className="bg-surface rounded-xl p-6 shadow-sm">
                  <h4 className="text-headline-md font-headline-md text-on-surface mb-3">Does your QMS design guarantee ISO certification?</h4>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Our systems are meticulously engineered to meet and exceed ISO standard requirements. When our frameworks are fully implemented and adopted by your staff, you will be in the optimal position to successfully pass third-party certification audits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface" id="enquiry">
            <div className="max-w-[1280px] mx-auto bg-primary text-on-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
              {/* Background texture */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
              />
              <div className="relative z-10 md:w-2/3 flex flex-col gap-6">
                <h2 className="text-display-lg font-display-lg text-on-primary">Ready to architect clinical excellence?</h2>
                <p className="text-body-lg font-body-lg text-on-primary/80">
                  Connect with our senior consultants to discuss how a bespoke Quality Management System can transform your operational and clinical outcomes.
                </p>
              </div>
              <div className="relative z-10 md:w-1/3 w-full flex flex-col gap-4">
                <form className="flex flex-col gap-4 bg-surface p-6 rounded-2xl shadow-xl w-full">
                  <h4 className="text-headline-md font-headline-md text-on-surface mb-2">Request Assessment</h4>
                  <div className="flex flex-col gap-1">
                    <label className="text-label-md font-label-md text-on-surface-variant">Organization Name</label>
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant px-4 py-2 focus:outline-none focus:border-primary transition-colors text-body-md font-body-md text-on-surface" 
                      placeholder="e.g. Metro General Hospital" 
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-label-md font-label-md text-on-surface-variant">Professional Email</label>
                    <input 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant px-4 py-2 focus:outline-none focus:border-primary transition-colors text-body-md font-body-md text-on-surface" 
                      placeholder="director@hospital.org" 
                      type="email"
                    />
                  </div>
                  <Link
                    href="/contact"
                    className="mt-4 bg-secondary text-on-secondary px-6 py-3 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-colors w-full shadow-md flex items-center justify-center"
                  >
                    Initiate Contact
                  </Link>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
