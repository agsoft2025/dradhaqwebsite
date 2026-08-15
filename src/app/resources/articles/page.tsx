import { Metadata } from 'next';
import ArticlesContent from './ArticlesContent';

export const metadata: Metadata = {
  title: 'Articles & Insights | Drdha Q Healthcare',
  description: 'Healthcare quality insights, regulatory updates, and strategic frameworks to elevate clinical standards and ensure audit readiness.',
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
