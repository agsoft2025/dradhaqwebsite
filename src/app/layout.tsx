import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Drdha Q Healthcare | Healthcare Quality & Audit Services',
  description: 'Healthcare Quality, Audit & Certification Readiness Partner. Specializing in ISO Certification, NABH, JCI accreditation and healthcare sustainability.',
  keywords: 'Healthcare Quality, Audit Services, ISO Certification, NABH, JCI, Accreditation, Healthcare Consulting',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://drdha-q-healthcare.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://drdha-q-healthcare.com',
    siteName: 'Drdha Q Healthcare LLP',
    title: 'Healthcare Quality & Audit Services',
    description: 'Professional healthcare quality, audit and certification readiness services',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
