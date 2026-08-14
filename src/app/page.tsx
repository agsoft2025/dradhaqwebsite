import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Drdha Q Healthcare',
  description: 'Healthcare Quality, Audit & Certification Readiness Partner',
};

const stats = [
  { value: '50+', label: 'Certified Orgs' },
  { value: '91%', label: 'Audit Success' },
  { value: '15+', label: 'Years Exp.' },
  { value: '273+', label: 'Audits Conducted' },
];

const services = [
  {
    title: 'Certification Readiness',
    description:
      'End-to-end preparation for NABH, JCI, and NABL accreditations. We eliminate gaps before the auditors arrive.',
    icon: 'verified',
    href: '/services/accreditation-support',
    className: 'bg-surface-container',
    iconClass: 'text-secondary-fixed',
  },
  {
    title: 'Internal Audits',
    description:
      'Rigorous, independent assessments of your clinical and operational processes to ensure continuous compliance.',
    icon: 'fact_check',
    href: '/services/healthcare-audit',
    className: 'bg-surface-container-high',
    iconClass: 'text-primary',
  },
  {
    title: 'Quality Training',
    description:
      'Empower your staff with targeted workshops on infection control, patient safety, and regulatory adherence.',
    icon: 'school',
    href: '/services/training',
    className: 'bg-primary-container text-on-primary-container',
    iconClass: 'text-tertiary-fixed-dim',
    dark: true,
  },
];

const standards = ['NABH', 'NABL', 'JCI', 'ISO'];
const approach = [
  ['1', 'Assess', 'Gap analysis and baseline evaluation.'],
  ['2', 'Plan', 'Strategic roadmap development.'],
  ['3', 'Implement', 'Process optimization and training.'],
  ['4', 'Sustain', 'Continuous monitoring and audits.'],
];

const reasons = [
  {
    icon: 'psychology',
    title: 'Deep Clinical Expertise',
    description: 'Led by seasoned healthcare professionals who understand clinical realities.',
  },
  {
    icon: 'handshake',
    title: 'Tailored Solutions',
    description: 'Frameworks adapted to your specific institutional context and scale.',
  },
  {
    icon: 'trending_up',
    title: 'Proven Track Record',
    description: 'Consistent success rates in achieving complex accreditations.',
  },
];

const insights = [
  {
    type: 'Insight',
    title: 'Preparing for the New NABH Standards',
    description: 'Key changes and how your organization can adapt seamlessly.',
  },
  {
    type: 'Guide',
    title: 'Infection Control Audit Checklist',
    description: 'A comprehensive guide for your internal teams.',
  },
  {
    type: 'Article',
    title: 'Building a Culture of Patient Safety',
    description: 'Moving beyond compliance to embed quality in daily operations.',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface overflow-hidden">
        <div className="relative flex w-full flex-col overflow-hidden bg-background">
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="40" id="home-grid" patternUnits="userSpaceOnUse" width="40">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect className="text-primary-fixed-dim" fill="url(#home-grid)" height="100%" width="100%" />
            </svg>
          </div>

          <section className="relative z-10 flex min-h-[600px] items-center justify-center bg-surface px-4 py-20 md:px-grid-margin-desktop lg:min-h-[800px]">
            <div className="relative z-20 mx-auto flex w-full max-w-[1280px] flex-col items-center text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-surface-container-high/80 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                <span className="text-label-md font-label-md uppercase tracking-widest text-secondary">
                  Quality · Audit · Certification
                </span>
              </div>
              <h1 className="mb-8 max-w-[1000px] text-4xl font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-[56px]">
                Elevate Your{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Healthcare
                </span>{' '}
                Standards
              </h1>
              <p className="mx-auto mb-12 max-w-2xl text-body-lg font-body-lg text-on-surface-variant">
                Institutional authority meets clinical precision. We transform healthcare organizations
                through meticulous audit readiness, continuous quality improvement, and seamless
                certification pathways.
              </p>
              <Link
                className="group flex items-center justify-center gap-2 rounded bg-primary px-8 py-4 text-label-md font-label-md text-on-primary shadow-sm transition-transform hover:-translate-y-1"
                href="#request-consultation"
              >
                Request a Consultation
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </section>

          <section className="relative z-20 -mt-8 mx-4 overflow-hidden rounded border border-surface-dim bg-primary-container py-12 text-on-primary-container shadow-sm lg:mx-grid-margin-desktop">
            <div className="mx-auto max-w-[1280px] px-4 md:px-8">
              <div className="grid grid-cols-2 gap-8 divide-y divide-on-primary-container/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center justify-center px-4 pt-4 text-center lg:pt-0">
                    <span className="mb-2 block w-full text-[40px] font-bold tracking-tight text-on-primary">
                      {value}
                    </span>
                    <span className="text-label-md font-label-md uppercase tracking-wider text-on-primary-container/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative z-10 mx-auto w-full max-w-[1280px] px-4 py-20 md:px-grid-margin-desktop" id="services">
            <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                  Core Services
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Structured approaches to achieve uncompromising quality and compliance.
                </p>
              </div>
              <Link
                className="group flex items-center gap-1 text-label-md font-label-md text-secondary transition-colors hover:text-on-secondary-fixed-variant"
                href="/services"
              >
                View All Services
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, icon, href, className, iconClass, dark }) => (
                <Link
                  key={title}
                  href={href}
                  className={`${className} group flex min-h-[350px] flex-col overflow-hidden rounded border border-surface-dim p-8 shadow-sm transition-all hover:shadow-md`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded border border-surface-dim bg-surface shadow-sm">
                    <span
                      className={`material-symbols-outlined text-2xl ${iconClass}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h3 className={`mb-3 text-xl font-bold tracking-tight ${dark ? 'text-on-primary' : 'text-on-surface'}`}>
                    {title}
                  </h3>
                  <p className={`mb-6 text-body-md font-body-md ${dark ? 'text-on-primary-container/80' : 'text-on-surface-variant'}`}>
                    {description}
                  </p>
                  <div className="mt-auto flex justify-end">
                    <span className="material-symbols-outlined flex h-8 w-8 items-center justify-center rounded border border-surface-dim bg-surface text-sm transition-colors group-hover:bg-primary group-hover:text-on-primary">
                      north_east
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-surface-dim bg-surface py-20" id="standards">
            <div className="mx-auto max-w-[1280px] px-4 text-center md:px-grid-margin-desktop">
              <h2 className="mb-12 text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                Standards &amp; Accreditations
              </h2>
              <div className="grid grid-cols-2 gap-8 opacity-70 md:grid-cols-4">
                {standards.map((standard) => (
                  <div key={standard} className="flex h-24 items-center justify-center rounded border border-surface-dim bg-surface-container">
                    <span className="text-xl font-bold text-on-surface-variant">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative border-t border-surface-dim bg-surface-container-lowest py-20" id="industries">
            <div className="mx-auto max-w-[1280px] px-4 md:px-grid-margin-desktop">
              <div className="flex flex-col items-center gap-16 lg:flex-row">
                <div className="w-full lg:w-1/3">
                  <div className="-ml-2 mb-4 text-[80px] font-bold leading-none text-surface-container-highest/50 md:-ml-4 md:text-[120px]" aria-hidden="true">
                    02
                  </div>
                  <h2 className="mb-6 text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                    Industries We Transform
                  </h2>
                  <p className="mb-8 text-body-lg font-body-lg text-on-surface-variant">
                    Tailored consulting solutions for every tier of the healthcare ecosystem.
                  </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-2/3">
                  <IndustryCard title="Corporate Hospitals" />
                  <IndustryCard title="Laboratories" variant="high" />
                  <IndustryCard title="Medical Colleges" eyebrow="Academic" variant="dark" />
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-surface-dim bg-surface py-20">
            <div className="mx-auto max-w-[1280px] px-4 md:px-grid-margin-desktop">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                  Our Approach
                </h2>
                <p className="mx-auto max-w-2xl text-body-lg font-body-lg text-on-surface-variant">
                  A systematic process to drive sustainable quality improvements.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
                {approach.map(([number, title, description], index) => (
                  <div key={title}>
                    <div className={`${index === 3 ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-primary'} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-surface-dim text-xl font-bold`}>
                      {number}
                    </div>
                    <h3 className="mb-2 font-bold text-on-surface">{title}</h3>
                    <p className="text-body-md text-on-surface-variant">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-surface-dim bg-surface-container-low py-20">
            <div className="mx-auto max-w-[1280px] px-4 md:px-grid-margin-desktop">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {reasons.map(({ icon, title, description }) => (
                  <div key={title} className="rounded border border-surface-dim bg-surface p-8">
                    <span className="material-symbols-outlined mb-4 text-3xl text-secondary">{icon}</span>
                    <h3 className="mb-2 text-xl font-bold text-on-surface">{title}</h3>
                    <p className="text-body-md text-on-surface-variant">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-surface-dim bg-surface py-20">
            <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-4 md:grid-cols-2 md:px-grid-margin-desktop">
              <FeatureLink
                href="/services/training"
                title="Training & Capacity Building"
                description="Equip your workforce with the knowledge and skills necessary to maintain excellence in patient care and operational compliance."
              />
              <FeatureLink
                href="/services/healthcare-sustainability"
                title="Healthcare Sustainability"
                description="Integrate sustainable practices into your healthcare delivery model to reduce environmental impact while maintaining quality care."
              />
            </div>
          </section>

          <section className="border-t border-surface-dim bg-surface-container-low py-20" id="resources">
            <div className="mx-auto max-w-[1280px] px-4 md:px-grid-margin-desktop">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <h2 className="text-3xl font-bold tracking-tight text-on-surface md:text-[32px]">
                  Resources &amp; Insights
                </h2>
                <Link className="font-bold text-secondary" href="#resources">
                  View All Articles
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {insights.map(({ type, title, description }) => (
                  <article key={title} className="overflow-hidden rounded border border-surface-dim bg-surface">
                    <div className="flex h-48 items-center justify-center bg-surface-dim">
                      <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-50">
                        article
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-secondary">
                        {type}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-on-surface">{title}</h3>
                      <p className="line-clamp-2 text-body-md text-on-surface-variant">{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-primary py-20 text-on-primary" id="request-consultation">
            <div className="absolute right-0 top-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary opacity-30 blur-[80px] md:h-[500px] md:w-[500px] md:blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[200px] w-[200px] -translate-x-1/2 translate-y-1/2 rounded-full bg-tertiary-fixed opacity-20 blur-[60px] md:h-[400px] md:w-[400px] md:blur-[100px]" />
            <div className="relative z-10 mx-auto max-w-[800px] px-4 text-center md:px-grid-margin-desktop">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-[32px]">
                Ready to Ensure Compliance?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-body-lg font-body-lg text-primary-fixed-dim">
                Schedule a strategic consultation to evaluate your current readiness and map the exact
                path to operational excellence.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  className="rounded bg-tertiary-fixed px-8 py-4 text-label-md font-label-md text-on-tertiary-fixed-variant shadow-sm transition-colors hover:bg-tertiary-fixed-dim"
                  href="/contact"
                >
                  Request a Consultation
                </Link>
                <Link
                  className="rounded border border-outline-variant bg-transparent px-8 py-4 text-label-md font-label-md text-white shadow-sm transition-colors hover:bg-white/10"
                  href="/services/healthcare-audit"
                >
                  Download Audit Checklist
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function IndustryCard({
  title,
  eyebrow,
  variant = 'default',
}: {
  title: string;
  eyebrow?: string;
  variant?: 'default' | 'high' | 'dark';
}) {
  const isDark = variant === 'dark';
  const className = isDark
    ? 'bg-primary-container text-on-primary-container sm:col-span-2'
    : variant === 'high'
      ? 'bg-surface-container-high'
      : 'bg-surface-container';

  return (
    <Link
      href="/industries"
      className={`${className} group relative flex h-48 cursor-pointer items-end overflow-hidden rounded border border-surface-dim p-6 shadow-sm md:h-64`}
    >
      <div className="relative z-20 flex w-full items-end justify-between">
        <div>
          {eyebrow ? (
            <span className="mb-1 block text-label-md font-label-md uppercase tracking-wider text-primary-fixed-dim">
              {eyebrow}
            </span>
          ) : null}
          <h4 className={`${isDark ? 'text-on-primary' : 'text-on-surface'} text-xl font-bold tracking-tight`}>
            {title}
          </h4>
        </div>
        <span className={`${isDark ? 'text-on-primary' : 'text-primary'} material-symbols-outlined -translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100`}>
          arrow_forward
        </span>
      </div>
    </Link>
  );
}

function FeatureLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded border border-surface-dim bg-surface-container p-8">
      <h3 className="mb-4 text-2xl font-bold text-on-surface">{title}</h3>
      <p className="mb-6 text-body-md text-on-surface-variant">{description}</p>
      <Link className="flex items-center gap-1 font-bold text-secondary" href={href}>
        Learn More
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </div>
  );
}
