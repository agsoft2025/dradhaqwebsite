import Link from 'next/link';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMpNsDUuQVj7vSr_le4enF3f4x1h6HS9_Fj2kU0S22Zqb0u_Ai82KQ1Mw-8-xGdT55JAmSt9Kw2pg0Bkv6bvASjMd1mgLS__VUZSSbvyDIUko_6yuCVArGXLpiRU1LKgz7KqwRyXljZkM_kECrMcJGAiVS2q1OzSM8VTYu6O4Po3tAjQHVNnfvEm6x7CcqgypW4SYGR0GkLpYe7uIUSUpRnPFwqTALyvKXM61x8e0A6HnVbCwFZUUMCA';

const ABOUT_FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'Our Story' },
      { href: '/about', label: 'Expertise' },
      { href: '/approach', label: 'Approach' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services', label: 'Consulting' },
      { href: '/services/healthcare-audit', label: 'Auditing' },
      { href: '/services/training', label: 'Training' },
    ],
  },
  {
    title: 'Standards',
    links: [
      { href: '/standards', label: 'ISO 9001' },
      { href: '/standards', label: 'Compliance' },
      { href: '/standards', label: 'Certifications' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { href: '/industries', label: 'Healthcare' },
      { href: '/industries', label: 'Clinical' },
      { href: '/industries', label: 'Pharma' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '#', label: 'Case Studies' },
      { href: '#', label: 'Whitepapers' },
      { href: '/services/healthcare-sustainability', label: 'Sustainability' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: '/contact', label: 'Global Offices' },
      { href: '/contact', label: 'Support' },
      { href: '/contact', label: 'Inquiries' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy' },
      { href: '#', label: 'Terms' },
      { href: '#', label: 'Cookies' },
    ],
  },
];

function HomeFooter() {
  return (
    <footer className="w-full bg-primary-container py-20 text-on-primary-container border-t border-surface-dim">
      <div className="max-w-[1280px] mx-auto px-4 md:px-grid-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-grid-gutter mb-16">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img alt="Logo" className="h-6 w-auto brightness-0 invert" src={LOGO_URL} />
              <span className="font-display-lg tracking-[-0.02em] text-xl font-bold text-on-primary">
                Drdha Q
              </span>
            </div>
            <p className="text-body-md font-body-md text-on-primary-container/80">
              Excellence in clinical auditing and healthcare transformation consulting.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-primary">
              Quick Links
            </h4>
            <Link href="/about" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Our Expertise
            </Link>
            <Link href="/services/healthcare-audit" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Audit Portfolio
            </Link>
            <Link href="/contact" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Global Presence
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-primary">
              Legal
            </h4>
            <Link href="/privacy-policy" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/standards" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Certifications
            </Link>
            <Link href="/standards" className="text-body-md font-body-md hover:text-on-primary transition-colors">
              Compliance
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-primary">
              Connect
            </h4>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer hover:text-on-primary">share</span>
              <Link href="/contact" className="material-symbols-outlined cursor-pointer hover:text-on-primary">
                mail
              </Link>
              <span className="material-symbols-outlined cursor-pointer hover:text-on-primary">verified</span>
            </div>
          </div>
        </div>
        <div className="border-t border-on-primary-container/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-label-md font-label-md text-on-primary-container/60 text-center md:text-left">
          <span>&copy; 2024 Drdha Q Healthcare Consulting. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span>ISO 9001:2015 Certified</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AboutFooter() {
  return (
    <footer className="w-full bg-primary-container py-section-gap-mobile md:py-section-gap-desktop text-on-primary-container border-t border-primary-container">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-grid-gutter mb-16">
          {ABOUT_FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-label-md font-label-md uppercase tracking-wider text-on-primary">
                {title}
              </h4>
              {links.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-body-md font-body-md hover:text-on-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-on-primary-container/10 pt-8 text-label-md font-label-md text-on-primary-container/60">
          <span>&copy; 2024 Drdha Q Healthcare Consulting. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Footer({ variant = 'home' }: { variant?: 'home' | 'about' }) {
  if (variant === 'about') {
    return <AboutFooter />;
  }
  return <HomeFooter />;
}
