import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Audit & Assessment | Drdha Q Healthcare',
  description: 'Comprehensive healthcare audit and assessment services including gap analysis, compliance audits, and process reviews.',
};

export default function HealthcareAudit() {
  return (
    <main className="section-padding">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Healthcare Audit & Assessment</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Our healthcare audit and assessment services help organizations identify gaps, improve compliance, and enhance operational excellence.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Gap Analysis against applicable standards</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Internal audits and compliance reviews</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Process improvement assessments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Risk management assessments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Quality system evaluations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Corrective action planning</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
          <p className="text-gray-700">
            Our audit and assessment services provide actionable insights to improve your healthcare quality systems, ensure compliance, and prepare for accreditation or certification.
          </p>
        </section>
      </div>
    </main>
  );
}
