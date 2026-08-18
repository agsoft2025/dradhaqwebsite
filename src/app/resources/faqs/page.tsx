import { Metadata } from 'next';
import FAQsContent from './FAQsContent';

export const metadata: Metadata = {
  title: 'FAQs | Drdha Q Healthcare',
  description: 'Frequently asked questions about healthcare quality consulting, audits, accreditation, ISO certification readiness, training and healthcare sustainability.',
};

export default function FAQsPage() {
  return <FAQsContent />;
}
