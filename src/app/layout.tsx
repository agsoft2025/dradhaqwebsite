import type { Metadata } from 'next';
import './globals.css';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://drdha-q-healthcare.com';

export const metadata: Metadata = {
  title: 'Drdha Q Healthcare | Healthcare Quality & Audit Services',
  description:
    'Healthcare Quality, Audit & Certification Readiness Partner. Specializing in ISO Certification, NABH, JCI accreditation and healthcare sustainability.',
  keywords: [
    'Healthcare Quality',
    'Audit Services',
    'ISO Certification',
    'NABH',
    'JCI',
    'Accreditation',
    'Healthcare Consulting',
  ],
  metadataBase: new URL(siteUrl),

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Drdha Q Healthcare LLP',
    title: 'Healthcare Quality & Audit Services',
    description:
      'Professional healthcare quality, audit and certification readiness services',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Public+Sans:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-surface font-body-md text-on-surface">
        {children}
      </body>
    </html>
  );
}