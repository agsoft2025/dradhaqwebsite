import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accreditation Support | Drdha Q Healthcare',
  description: 'NABH, NABL, JCI and other healthcare accreditation support services.',
};

export default function AccreditationSupport() {
  return (
    <main className="section-padding">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Accreditation Support</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Specialized accreditation support for NABH, NABL, JCI, and other healthcare quality accreditation standards.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Accreditation Programs Supported</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-600 pl-4">
              <h3 className="font-bold mb-2">NABH - National Accreditation Board for Hospitals & Healthcare Providers</h3>
              <p className="text-gray-700 text-sm">Assessment, documentation, implementation, training and accreditation readiness support.</p>
            </div>
            <div className="border-l-4 border-accent-teal pl-4">
              <h3 className="font-bold mb-2">NABL - National Accreditation Board for Testing and Calibration Laboratories</h3>
              <p className="text-gray-700 text-sm">Laboratory quality system and accreditation-readiness support.</p>
            </div>
            <div className="border-l-4 border-accent-pink pl-4">
              <h3 className="font-bold mb-2">JCI - Joint Commission International</h3>
              <p className="text-gray-700 text-sm">Institutional readiness, gap assessment and quality improvement support.</p>
            </div>
            <div className="border-l-4 border-accent-purple pl-4">
              <h3 className="font-bold mb-2">Other Standards</h3>
              <p className="text-gray-700 text-sm">ISO 15189 (Medical Laboratories), ISO 17025 (Testing Laboratories) and other applicable standards.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Support Includes</h2>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Initial readiness assessment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Gap analysis and planning</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Documentation support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Training and awareness programs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Mock assessments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Accreditation facilitation</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
