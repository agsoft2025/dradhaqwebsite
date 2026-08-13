import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Sustainability | Drdha Q Healthcare',
  description: 'Green healthcare, ESG, environmental management and sustainability services for healthcare organizations.',
};

export default function HealthcareSustainability() {
  return (
    <main className="section-padding">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Healthcare Sustainability</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Comprehensive healthcare sustainability services including green healthcare, ESG initiatives, environmental management, and carbon reduction programs.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Green healthcare assessment and planning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Environmental management system implementation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Carbon footprint assessment and reduction</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Waste management and circular economy initiatives</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Energy efficiency and renewable energy planning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>ESG (Environmental, Social, Governance) reporting</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Net-zero initiatives and sustainability roadmap</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Green building certification support</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Standards & Frameworks</h2>
          <ul className="space-y-2">
            <li>• ISO 14001 - Environmental Management Systems</li>
            <li>• ISO 50001 - Energy Management Systems</li>
            <li>• Green Healthcare Standards</li>
            <li>• ESG Reporting Frameworks</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
