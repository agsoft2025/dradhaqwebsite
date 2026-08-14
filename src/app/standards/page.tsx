import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: 'Standards & Compliance | Drdha Q Healthcare',
  description:
    'ISO 9001, ISO 7101, NABH, NABL, JCI and other standards and compliance frameworks for healthcare organizations.',
};

const isoStandards = [
  {
    icon: 'verified',
    title: 'ISO 9001:2015',
    description:
      'Quality Management Systems (QMS). Establishing the foundational processes for consistent quality and continuous improvement across your organization.',
  },
  {
    icon: 'health_and_safety',
    title: 'ISO 7101:2023',
    description:
      'Healthcare Organization Management. The first ISO management system standard specifically dedicated to the healthcare sector, focusing on patient-centered care and clinical effectiveness.',
  },
];

const accreditations = [
  {
    icon: 'local_hospital',
    title: 'NABH',
    description:
      'National Accreditation Board for Hospitals & Healthcare Providers. We provide comprehensive readiness support for all NABH programs, ensuring alignment with rigorous national quality protocols.',
    points: ['Hospitals & Clinics', 'Blood Banks', 'Primary Health Centres'],
  },
  {
    icon: 'public',
    title: 'JCI',
    description:
      'Joint Commission International. Support for organizations aspiring to the gold standard in global healthcare accreditation, focusing on continuous quality improvement and patient safety goals.',
    points: ['International Patient Safety Goals', 'Clinical Care Protocols', 'Facility Management & Safety'],
  },
];

const laboratoryStandards = [
  {
    icon: 'biotech',
    title: 'NABL Accreditation',
    description:
      'National Accreditation Board for Testing and Calibration Laboratories. Readiness support for medical and calibration labs to demonstrate technical competence and reliable testing results.',
  },
  {
    icon: 'science',
    title: 'ISO 15189',
    description:
      'Medical Laboratories - Requirements for quality and competence. Comprehensive preparation for the specific technical and management system requirements for medical laboratories.',
  },
  {
    icon: 'scale',
    title: 'ISO/IEC 17025',
    description:
      'General requirements for the competence of testing and calibration laboratories. Support for implementing rigorous quality systems to generate valid and trustworthy results.',
  },
];

const readinessSteps = [
  {
    number: '1',
    title: 'Readiness Assessment',
    description:
      'Comprehensive gap analysis against standard requirements. We identify areas needing attention and develop a customized roadmap for compliance.',
    ringClass: 'animate-[spin_20s_linear_infinite] stroke-dasharray-[8_8]',
  },
  {
    number: '2',
    title: 'Implementation Support',
    description:
      'Collaborative development of policies, procedures, and quality manuals. We guide your team in operationalizing the required standards.',
    ringClass: 'animate-[spin_15s_linear_infinite_reverse] stroke-dasharray-[16_8]',
  },
  {
    number: '3',
    title: 'Audit Preparation',
    description:
      'Conducting rigorous mock audits and providing actionable feedback. We ensure your staff is confident and your systems are demonstrably compliant.',
    ringClass: '',
  },
];

export default function Standards() {
  return (
    <>
      <Header />
      <main className="w-full bg-surface pt-20">
        <div className="relative flex w-full flex-col">
          <section className="relative w-full overflow-hidden bg-surface-container px-4 pb-32 pt-16 md:px-grid-margin-desktop">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10" aria-hidden="true">
              <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path
                  className="text-primary"
                  d="M0,100 C20,80 40,90 60,70 C80,50 90,60 100,40 L100,100 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-8 lg:w-3/4">
              <span className="text-label-md font-label-md uppercase tracking-wider text-secondary">
                Standards Overview
              </span>
              <h1 className="font-display-lg text-headline-lg-mobile tracking-tight text-primary md:text-display-lg">
                Navigating the Landscape of Quality Excellence
              </h1>
              <p className="max-w-3xl text-body-lg font-body-lg text-on-surface-variant">
                Achieving and maintaining compliance with international and national standards requires
                precision, deep industry knowledge, and an unwavering commitment to quality. Drdha Q
                provides comprehensive readiness support, guiding your healthcare organization through
                the rigorous demands of ISO, NABH, JCI, and laboratory accreditations.
              </p>
            </div>
          </section>

          <section className="relative z-20 -mt-16 w-full bg-surface px-4 py-section-gap-mobile md:px-grid-margin-desktop md:py-section-gap-desktop">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid grid-cols-1 items-center gap-grid-gutter lg:grid-cols-12">
                <div className="flex flex-col gap-6 lg:col-span-5">
                  <span className="text-label-md font-label-md text-secondary">
                    ISO Certification Support
                  </span>
                  <h2 className="text-headline-lg font-headline-lg text-primary">
                    Global Benchmarks for Quality Management
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    ISO standards represent the international consensus on best practices. We support
                    your readiness for these critical certifications, ensuring your processes align
                    with global expectations for quality and safety.
                  </p>
                </div>
                <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7">
                  {isoStandards.map(({ icon, title, description }) => (
                    <StandardCard key={title} icon={icon} title={title} description={description} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-primary-container px-4 py-section-gap-mobile text-on-primary-container md:px-grid-margin-desktop md:py-section-gap-desktop">
            <div className="mx-auto max-w-[1280px]">
              <div className="mb-16 flex flex-col items-center gap-6 text-center">
                <span className="text-label-md font-label-md text-secondary-fixed">
                  Clinical Excellence
                </span>
                <h2 className="text-headline-lg font-headline-lg text-on-primary">
                  Healthcare Accreditation Readiness
                </h2>
                <p className="max-w-2xl text-body-lg font-body-lg text-on-primary-container/80">
                  Achieving national and international healthcare accreditation demonstrates a
                  commitment to patient safety and superior clinical outcomes.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-2">
                {accreditations.map(({ icon, title, description, points }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-outline-variant/20 bg-surface-container/10 p-8 backdrop-blur-sm transition-colors hover:bg-surface-container/20 md:p-10"
                  >
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <h3 className="text-headline-lg font-headline-lg text-on-primary">{title}</h3>
                      <span className="material-symbols-outlined text-4xl text-secondary-fixed">
                        {icon}
                      </span>
                    </div>
                    <p className="mb-6 text-body-md font-body-md text-on-primary-container">
                      {description}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-sm text-secondary-fixed">
                            check_circle
                          </span>
                          <span className="text-body-md font-body-md">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-container-low px-4 py-section-gap-mobile md:px-grid-margin-desktop md:py-section-gap-desktop">
            <div className="mx-auto max-w-[1280px]">
              <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
                <div className="lg:sticky lg:top-32 lg:col-span-1">
                  <span className="mb-4 block text-label-md font-label-md uppercase tracking-wider text-secondary">
                    Precision & Accuracy
                  </span>
                  <h2 className="mb-6 text-headline-lg font-headline-lg text-primary">
                    Laboratory Standards
                  </h2>
                  <p className="mb-8 text-body-md font-body-md text-on-surface-variant">
                    Accurate diagnostics are the foundation of effective healthcare. We support
                    laboratories in achieving readiness for critical national and international
                    standards, ensuring reliability and competence.
                  </p>
                  <div
                    className="h-64 w-full rounded-xl bg-cover bg-center shadow-md"
                    role="img"
                    aria-label="Modern laboratory equipment in a sterile clinical environment"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYgItqjXy1ppURsMqSgv2TYb4K5YYUWGFxflL9VTU9Cm1zP_n8oaePX1_Oe3MDP4DAabzGQEQLG3Hhfis8vFJdmIUdDc4-s39_40vavzimztX0yriiuzqoAWjAYNppMj3nOG6i_W8b2lTTYFI8L7PniSoa7w8-66Pv9UGgm5Nzhj__v11mWPgDKHgSz9fRemZ2_M6XNCsVqlye53laf-SApiUNK7S6TtF099Y9XlGYvP7m7H_jb5I_dQ')",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-6 lg:col-span-2">
                  {laboratoryStandards.map(({ icon, title, description }) => (
                    <div
                      key={title}
                      className="group flex items-start gap-6 rounded-xl bg-surface p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <span className="material-symbols-outlined text-2xl">{icon}</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-headline-md font-headline-md text-primary">
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

          <section className="w-full bg-surface px-4 py-section-gap-mobile md:px-grid-margin-desktop md:py-section-gap-desktop">
            <div className="mx-auto max-w-[1280px]">
              <div className="mb-16 text-center">
                <h2 className="text-headline-lg font-headline-lg text-primary">
                  How We Support Your Readiness Journey
                </h2>
                <p className="mt-4 text-body-lg font-body-lg text-on-surface-variant">
                  A structured, methodological approach to achieving compliance.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {readinessSteps.map(({ number, title, description, ringClass }) => (
                  <div key={title} className="flex flex-col items-center text-center">
                    <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-surface-container text-3xl font-display-lg text-primary">
                      {number}
                      <svg className="absolute inset-0 h-full w-full text-secondary" viewBox="0 0 100 100">
                        <circle
                          className={ringClass}
                          cx="50"
                          cy="50"
                          fill="none"
                          r="48"
                          stroke="currentColor"
                          strokeDasharray={ringClass ? undefined : undefined}
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-4 text-headline-md font-headline-md text-primary">{title}</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative w-full overflow-hidden bg-tertiary-container px-4 py-24 md:px-grid-margin-desktop">
            <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" aria-hidden="true">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhvktz3o7NChPcR4Pkzc9m-bnzaVPtLiDtsNcyPBn_8gCabOxTzg70sWL22vQLrJUJzle-hVTwyVFwsABbnmf3bEcA70Rn-R-jlP_RHt_FMk4VJ5vzhseMX440nO7f9T3yCK3iQBMxdOvbIObFNU4K1r-0w3fvjbUWFfF-Gfb3HGBTD5GJOS87XchTuU27HAVyLfjcdPJZOhQczFz8PynjKA2-EDX9tTamAVk6vWnqYfTmIEQQ8BFgSg')",
                }}
              />
            </div>
            <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-12 rounded-xl bg-surface/95 p-8 shadow-2xl backdrop-blur-md md:flex-row md:p-12">
              <div className="flex flex-1 flex-col gap-4">
                <h2 className="text-headline-lg font-headline-lg text-primary">
                  Ready to Elevate Your Standards?
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Partner with Drdha Q for expert support in achieving and maintaining your critical
                  healthcare certifications and accreditations.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  className="inline-flex items-center justify-center rounded-lg bg-tertiary px-8 py-4 text-label-md font-label-md text-on-tertiary shadow-lg transition-all hover:-translate-y-1 hover:bg-on-surface hover:shadow-xl"
                  href="/contact"
                >
                  Request a Consultation
                  <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}

function StandardCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-secondary transition-transform duration-300 ease-out group-hover:scale-y-100" />
      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-headline-md font-headline-md text-primary">{title}</h3>
          <p className="text-body-md font-body-md text-on-surface-variant">{description}</p>
        </div>
      </div>
    </div>
  );
}
