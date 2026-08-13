import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Standards & Compliance | Drdha Q Healthcare',
  description: 'ISO 9001, ISO 7101, NABH, NABL, JCI and other standards and compliance frameworks for healthcare organizations.',
};

export default function Standards() {
  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Standards & Compliance</h1>
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 mb-12">
            We provide comprehensive support for healthcare organizations pursuing ISO certification and other quality/accreditation standards.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="font-bold text-lg mb-2">ISO Standards</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ISO 9001 - Quality Management</li>
                <li>• ISO 7101 - Healthcare Quality Management</li>
                <li>• ISO 45001 - Occupational Health & Safety</li>
                <li>• ISO 14001 - Environmental Management</li>
              </ul>
            </div>

            <div className="border-l-4 border-accent-teal pl-6">
              <h3 className="font-bold text-lg mb-2">Accreditations</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• NABH - National Accreditation</li>
                <li>• NABL - Laboratory Standards</li>
                <li>• JCI - International Standards</li>
                <li>• ISO 15189 & 17025 - Lab Standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
