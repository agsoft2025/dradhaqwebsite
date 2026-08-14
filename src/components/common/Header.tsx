'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMpNsDUuQVj7vSr_le4enF3f4x1h6HS9_Fj2kU0S22Zqb0u_Ai82KQ1Mw-8-xGdT55JAmSt9Kw2pg0Bkv6bvASjMd1mgLS__VUZSSbvyDIUko_6yuCVArGXLpiRU1LKgz7KqwRyXljZkM_kECrMcJGAiVS2q1OzSM8VTYu6O4Po3tAjQHVNnfvEm6x7CcqgypW4SYGR0GkLpYe7uIUSUpRnPFwqTALyvKXM61x8e0A6HnVbCwFZUUMCA';

const SERVICE_LINKS = [
  { href: '/services', label: 'Healthcare Quality Consulting' },
  { href: '/services/healthcare-audit', label: 'Healthcare Audit & Assessment' },
  { href: '/services/iso-certification', label: 'ISO Certification Readiness' },
  { href: '/services/accreditation-support', label: 'Accreditation Support' },
  { href: '/services', label: 'Quality Management Systems' },
  { href: '/services', label: 'Clinical Governance & Patient Safety' },
  { href: '/services/training', label: 'Training & Capacity Building' },
  { href: '/services/healthcare-sustainability', label: 'Healthcare Sustainability' },
];

const RESOURCE_LINKS = [
  { href: '/#resources', label: 'Insights / Articles' },
  { href: '#', label: 'FAQs' },
  { href: '#', label: 'Guides / Checklists' },
];

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={
        active
          ? 'text-primary font-bold transition-colors'
          : 'text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors'
      }
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="relative dropdown-group group">
      <button
        type="button"
        className="text-label-md font-label-md text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1"
      >
        {label}
        <span className="material-symbols-outlined text-[16px]">expand_more</span>
      </button>
      <div className="dropdown-menu hidden absolute top-full left-0 mt-4 w-72 bg-surface border border-surface-dim rounded-lg shadow-lg py-2 z-50">
        {links.map(({ href, label: linkLabel }) => (
          <Link
            key={linkLabel}
            href={href}
            className="block px-4 py-2 text-label-md font-label-md text-on-surface-variant hover:bg-surface-container hover:text-primary"
          >
            {linkLabel}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-dim">
      <div className="h-20 max-w-[1280px] mx-auto px-4 md:px-grid-margin-desktop flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-4">
          <img alt="Drdha Q Healthcare Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <span className="font-display-lg tracking-[-0.02em] text-xl md:text-2xl font-bold text-primary">
            Drdha Q
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavLink href="/" active={pathname === '/'}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === '/about'}>
            About
          </NavLink>
          <Dropdown label="Services" links={SERVICE_LINKS} />
          <NavLink href={isHome ? '#standards' : '/standards'}>Standards</NavLink>
          <NavLink href={isHome ? '#industries' : '/industries'}>Industries</NavLink>
          <Dropdown label="Resources" links={RESOURCE_LINKS} />
          <NavLink href="/contact" active={pathname === '/contact'}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="text-secondary hover:text-secondary-fixed-dim transition-colors flex items-center"
            aria-label="Contact us"
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
          </Link>
          <Link
            href={isHome ? '#request-consultation' : '/contact'}
            className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded text-label-md font-label-md hover:opacity-90 transition-all"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
