import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EnquiryForm from '@/components/forms/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us | Drdha Q Healthcare',
  description: 'Get in touch with Drdha Q Healthcare. Contact us for healthcare quality, audit, and certification services.',
};

const contactDetails = [
  {
    icon: 'call',
    label: 'Phone',
    value: '+971 (0) 4 123 4567',
    href: 'tel:+971041234567',
  },
  {
    icon: 'mail',
    label: 'Email',
    value: 'consult@drdhaq.health',
    href: 'mailto:consult@drdhaq.health',
  },
  {
    icon: 'location_on',
    label: 'Location',
    value: 'Dubai Healthcare City\nBuilding 64, Dubai, UAE',
  },
  {
    icon: 'schedule',
    label: 'Business Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM GST',
  },
];

export default function Contact() {
  return (
    <>
      <Header />
      <main className="w-full bg-background pt-20">
        <div className="flex min-h-[calc(100vh-80px)] w-full flex-col bg-background pb-section-gap-mobile font-body-md text-on-background md:pb-section-gap-desktop">
          <section className="relative w-full overflow-hidden bg-primary px-4 py-12 md:px-grid-margin-desktop md:py-20">
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-container to-primary/80 opacity-80 mix-blend-multiply" />
            <div className="pointer-events-none absolute right-0 top-0 z-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-secondary-fixed/5 blur-3xl" />
            <div className="relative z-10 mx-auto flex max-w-container-max-width flex-col items-end justify-between gap-grid-gutter md:flex-row">
              <div className="w-full max-w-3xl md:w-2/3">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-[2px] w-12 rounded-full bg-secondary" />
                  <span className="font-label-md text-label-md uppercase tracking-widest text-secondary">
                    Contact
                  </span>
                </div>
                <h1 className="mb-6 font-display-lg text-display-lg text-on-primary">
                  Get in Touch
                </h1>
                <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-primary-fixed-dim/90">
                  Connect with our healthcare consulting experts to discuss your institution&apos;s path
                  to clinical excellence, audit readiness, and sustained operational quality.
                </p>
              </div>
            </div>
          </section>

          <section className="relative z-20 mx-auto w-full max-w-container-max-width px-4 py-12 md:px-grid-margin-desktop">
            <div className="flex flex-col items-start gap-grid-gutter lg:flex-row">
              <aside className="flex w-full flex-col gap-6 lg:w-5/12">
                <div className="flex flex-col gap-8 rounded-xl bg-surface-container-lowest p-8 shadow-lg shadow-on-background/5 transition-transform duration-300 hover:-translate-y-1">
                  {contactDetails.map(({ icon, label, value, href }) => (
                    <ContactItem key={label} icon={icon} label={label} value={value} href={href} />
                  ))}
                  <Link
                    href="https://wa.me/971041234567"
                    className="mt-4 flex w-full items-center justify-center gap-3 rounded bg-tertiary-container px-6 py-4 font-label-md text-label-md text-on-tertiary transition-colors duration-300 hover:bg-tertiary"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Message us on WhatsApp
                  </Link>
                </div>

                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Dubai%20Healthcare%20City%20Building%2064%20Dubai%20UAE"
                  className="group relative h-64 w-full overflow-hidden rounded-xl shadow-md shadow-on-background/5"
                >
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYMFgFCRcDGK5f6UilAF3Pj7K182X413DK0QYfwZpZu09PGr4Gry-LQPgyPRPNdmAtrY5pi4H8oBH64q81NaeZ1XnotslHCqIxAODwtO9uSYR6HLMXtfJGoWrn4UAlU7s65HqZWrDLyRvld7c0OpKrwEQEG8tYi1mRwNgOQLgVfJUo_ZJaZR-V-2jDV4s5DO2i4zQ1tkoVgQ8WM3r911C3IxjmgJazJyJF1ZmGkKgkl81Yr-TazSnANg')",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/10 transition-colors duration-300 group-hover:bg-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded bg-surface-container-lowest/95 p-3 shadow-sm backdrop-blur-sm">
                    <span className="font-label-md text-label-md text-on-surface">View on Map</span>
                    <span className="material-symbols-outlined text-secondary">arrow_forward</span>
                  </div>
                </Link>
              </aside>

              <section className="relative w-full lg:w-7/12">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-xl shadow-on-background/5 md:p-10">
                  <h2 className="mb-2 font-headline-lg text-headline-lg text-on-surface">
                    Detailed Enquiry Form
                  </h2>
                  <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
                    Please provide details about your institution and requirements so we can direct you
                    to the most appropriate specialist.
                  </p>
                  <EnquiryForm />
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const content = value.split('\n').map((line) => (
    <span key={line}>
      {line}
      <br />
    </span>
  ));

  return (
    <div className="group flex cursor-pointer items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container/20 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-on-secondary">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <div className="flex flex-col pt-1">
        <span className="mb-1 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
          {label}
        </span>
        {href ? (
          <Link
            className="break-all font-headline-md text-[20px] font-semibold text-on-surface transition-colors group-hover:text-secondary md:text-headline-md"
            href={href}
          >
            {value}
          </Link>
        ) : (
          <p className="max-w-[260px] font-body-md text-body-md leading-relaxed text-on-surface">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
