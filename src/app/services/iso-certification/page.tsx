import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISO Certification Readiness | Drdha Q Healthcare',
  description: 'ISO certification readiness support including gap assessment, documentation, implementation, and facilitation.',
};

export default function IsoCertification() {
  return (
    <main className="section-padding">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">ISO Certification Readiness</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          We provide comprehensive support for ISO certification readiness including ISO 9001, ISO 7101, ISO 45001, ISO 14001, and other applicable standards.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Readiness assessment and gap analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Quality management system documentation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Implementation guidance and support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Internal audit preparation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Management review facilitation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Certification facilitation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Post-certification support and maintenance</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Standards Covered</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Quality Management</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• ISO 9001</li>
                <li>• ISO 7101</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Occupational & Environmental</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• ISO 45001</li>
                <li>• ISO 14001</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
