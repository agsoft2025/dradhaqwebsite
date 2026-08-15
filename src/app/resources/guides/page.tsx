import { Metadata } from 'next';
import GuidesContent from './GuidesContent';

export const metadata: Metadata = {
  title: 'Guides & Checklists | Drdha Q Healthcare',
  description: 'Actionable tools, comprehensive frameworks, and pre-audit checklists designed by seasoned healthcare quality experts to ensure your institution is always ready.',
};

export default function GuidesPage() {
  return <GuidesContent />;
}
