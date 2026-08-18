import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'About Us | Drdha Q Healthcare',
  description:
    'Learn about Drdha Q Healthcare - institutional excellence in healthcare consulting, regulatory compliance, and clinical governance.',
};

const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD4-8E87FdBSkS0_RgHtoUfjMqLR84Bqvn14KdCOHVPLkm59C8BiginkZPY0Vqj3N5S8WRTRFQbvuNRXZV7aPKbCmUuE0VH7BeYFeaEnj3Xe7SHezSx54KpNa6dvBtldfCkLnX_kJkob3-k8TLlDUq5xDab0CA8rKgS1Xo14Fr87gbeGRM6mL_tDC1MuhpECmWDhXpmeRmnng3O4zI81IMCM6UNTP2_z7dYeEWQCu3_WVg5RaJEWb0ZRA';

const QMS_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBDeGtloIR0mQEJy_BCDjd5UhiPaQF-kNKusOnUCeEMDgkp5ye8jhcnLsL6yBmOfFVByZjBE2r9cWYhJ_1INo_X9fzJgIh1OvJzWukLu57_EEQTazJ3RoMiETSd1UdOJVaXKx7pWXtRWHf2CkqrLjNhHrg1htobd8qUTXp0Iuo0KgS7DBiDZO5LvMEondlap9vGh9WI-u_eKQbrsWxc_ttHzHF0lCWo_-4orfSVSd7QpW7KcvCM7i8J8w';

const CORE_VALUES = [
  {
    number: '01',
    title: 'Uncompromising Integrity',
    description:
      'We uphold the highest ethical standards, ensuring transparent, objective, and unbiased assessments in every engagement.',
  },
  {
    number: '02',
    title: 'Clinical Precision',
    description:
      'Our methodologies are rooted in exacting detail, reflecting the critical nature of healthcare environments where accuracy is paramount.',
  },
  {
    number: '03',
    title: 'Sustainable Excellence',
    description:
      'We build systems designed for long-term viability, moving beyond temporary audit-readiness to deeply embedded quality cultures.',
  },
];

const PROCESS_STEPS = [
  {
    phase: 'Phase 1',
    title: 'Diagnostic Assessment',
    description:
      'Comprehensive baseline audit to identify systemic gaps and regulatory vulnerabilities against target standards.',
    icon: 'search',
    iconClass: 'bg-surface-container-highest text-on-surface-variant group-hover:text-secondary',
    phaseClass: 'text-secondary',
  },
  {
    phase: 'Phase 2',
    title: 'Strategic Framework',
    description:
      'Development of customized policies, protocols, and standard operating procedures to bridge identified gaps.',
    icon: 'architecture',
    iconClass: 'bg-surface-container-highest text-on-surface-variant group-hover:text-secondary',
    phaseClass: 'text-secondary',
  },
  {
    phase: 'Phase 3',
    title: 'Implementation & Training',
    description:
      'Active integration of the framework into daily operations, supported by intensive staff capability building.',
    icon: 'build',
    iconClass: 'bg-surface-container-highest text-on-surface-variant group-hover:text-secondary',
    phaseClass: 'text-secondary',
  },
  {
    phase: 'Phase 4',
    title: 'Audit & Certification',
    description:
      'Rigorous mock audits followed by facilitation of formal certification processes with accrediting bodies.',
    icon: 'verified',
    iconClass: 'bg-primary text-on-primary shadow-md',
    phaseClass: 'text-primary',
    filled: true,
  },
];

export default function About() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="w-full bg-surface-container py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#76777d 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="max-w-container-max-width mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter items-center">
                <div className="lg:col-span-6 flex flex-col gap-8">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-secondary" />
                    <span className="text-label-md font-label-md text-secondary uppercase tracking-widest">
                      About Drdha Q
                    </span>
                  </div>
                  <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-surface">
                    Institutional Excellence in Healthcare Consulting
                  </h1>
                  <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                    Drdha Q is a premier healthcare consulting firm dedicated to elevating clinical
                    standards, ensuring rigorous compliance, and fostering sustainable operational
                    excellence across the healthcare spectrum. We partner with medical institutions to
                    navigate complex regulatory landscapes with precision and authority.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 relative">
                  <div className="relative w-full aspect-[4/5]">
                    <div className="absolute top-8 -right-8 w-full h-full bg-surface-variant rounded-xl shadow-sm" />
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl z-10"
                      alt="Healthcare consultants reviewing compliance documents in a modern corporate boardroom"
                      src={HERO_IMAGE_URL}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Focus & Expertise */}
          <section className="w-full bg-surface py-section-gap-mobile md:py-section-gap-desktop relative">
            <div className="max-w-container-max-width mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col items-center text-center mb-16 gap-4">
                <h2 className="text-headline-lg font-headline-lg text-on-surface">
                  Our Focus &amp; Expertise
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
                  We deliver specialized solutions tailored to the stringent demands of modern
                  healthcare, focusing on quality assurance, regulatory adherence, and organizational
                  resilience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-grid-gutter auto-rows-[280px]">
                {/* Regulatory Compliance */}
                <div className="lg:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute -right-16 -top-16 w-64 h-64 bg-secondary/5 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-500" />
                  <div className="flex items-center gap-4 mb-6 z-10">
                    <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center text-secondary shadow-sm">
                      <span
                        className="material-symbols-outlined text-[28px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        assured_workload
                      </span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface">
                      Regulatory Compliance
                    </h3>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant max-w-lg z-10">
                    Navigating local and international healthcare standards. We ensure your facility
                    is audit-ready, mitigating risk and establishing robust governance frameworks that
                    align with JCI, NABH, and ISO requirements.
                  </p>
                </div>

                {/* Clinical Governance */}
                <div className="bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-on-primary-container/10 flex items-center justify-center text-secondary-fixed">
                      <span className="material-symbols-outlined text-[28px]">vital_signs</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-primary mb-2">
                      Clinical Governance
                    </h3>
                    <p className="text-body-md font-body-md text-on-primary-container/80">
                      Enhancing patient safety protocols and clinical effectiveness through
                      evidence-based practice models.
                    </p>
                  </div>
                </div>

                {/* Workforce Training */}
                <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-outline-variant/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                      <span
                        className="material-symbols-outlined text-[28px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        model_training
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                      Workforce Training
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Specialized capability building programs to align clinical and administrative
                      staff with international quality standards.
                    </p>
                  </div>
                </div>

                {/* Quality Management Systems */}
                <div className="lg:col-span-2 relative rounded-xl shadow-sm overflow-hidden group">
                  <div
                    className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${QMS_IMAGE_URL}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="material-symbols-outlined text-secondary-fixed text-[28px]">
                        health_metrics
                      </span>
                      <h3 className="text-headline-md font-headline-md text-on-primary">
                        Quality Management Systems
                      </h3>
                    </div>
                    <p className="text-body-md font-body-md text-on-primary/80 max-w-xl">
                      Designing and implementing bespoke QMS frameworks that drive continuous
                      improvement, operational efficiency, and measurable clinical outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision & Core Values */}
          <section className="w-full bg-surface-container-high py-section-gap-mobile md:py-section-gap-desktop">
            <div className="max-w-container-max-width mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5 flex flex-col gap-12">
                  <div className="flex flex-col gap-6 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-secondary">
                    <h3 className="text-label-md font-label-md text-secondary uppercase tracking-widest">
                      Our Mission
                    </h3>
                    <p className="text-headline-md font-headline-md text-on-surface">
                      To empower healthcare organizations to deliver exceptionally safe, high-quality
                      care through rigorous systemic improvements and strategic compliance alignment.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-outline-variant">
                    <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest">
                      Our Vision
                    </h3>
                    <p className="text-headline-md font-headline-md text-on-surface-variant">
                      To be the globally recognized benchmark for healthcare quality consulting,
                      transforming institutions into models of clinical excellence and patient-centric
                      safety.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-widest mb-8">
                    Core Values
                  </h3>
                  <div className="flex flex-col gap-6">
                    {CORE_VALUES.map(({ number, title, description }) => (
                      <div
                        key={number}
                        className="flex gap-6 items-start bg-surface rounded-xl p-6 shadow-sm"
                      >
                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-surface-container flex items-center justify-center text-primary mt-1">
                          <span className="text-label-md font-label-md">{number}</span>
                        </div>
                        <div>
                          <h4 className="text-body-lg font-headline-md text-on-surface font-semibold mb-2">
                            {title}
                          </h4>
                          <p className="text-body-md font-body-md text-on-surface-variant">
                            {description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="w-full bg-surface py-section-gap-mobile md:py-section-gap-desktop">
            <div className="max-w-container-max-width mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="mb-16">
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
                  How We Work
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                  A meticulous, phased approach ensuring thorough gap analysis, strategic
                  implementation, and continuous monitoring.
                </p>
              </div>
              <div className="relative">
                <div className="hidden lg:block absolute top-[40px] left-[40px] right-[40px] h-[2px] bg-surface-container-highest" />
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {PROCESS_STEPS.map(({ phase, title, description, icon, iconClass, phaseClass, filled }) => (
                    <div key={phase} className="relative flex flex-col gap-6 group">
                      <div
                        className={`w-20 h-20 rounded-xl flex items-center justify-center z-10 transition-colors ${filled ? 'transition-transform group-hover:-translate-y-1' : 'group-hover:bg-secondary/10'} ${iconClass}`}
                      >
                        <span
                          className="material-symbols-outlined text-[32px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {icon}
                        </span>
                      </div>
                      <div>
                        <span className={`text-label-md font-label-md ${phaseClass} mb-2 block`}>
                          {phase}
                        </span>
                        <h3 className="text-headline-md font-headline-md text-on-surface mb-3">
                          {title}
                        </h3>
                        <p className="text-body-md font-body-md text-on-surface-variant">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full bg-primary-container py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
            <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full border border-secondary/20 pointer-events-none" />
            <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border border-secondary/10 pointer-events-none" />
            <div className="max-w-container-max-width mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col gap-4 max-w-2xl">
                  <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-primary">
                    Elevate Your Institutional Standards
                  </h2>
                  <p className="text-body-lg font-body-lg text-on-primary-container/80">
                    Partner with Drdha Q to ensure your facility not only meets global compliance
                    mandates but defines clinical excellence. Secure your audit-readiness today.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/contact"
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary-fixed-dim transition-colors shadow-md flex items-center gap-3"
                  >
                    Request a Consultation
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
