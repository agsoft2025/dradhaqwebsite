import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training & Capacity Building | Drdha Q Healthcare',
  description: 'Healthcare quality, audit, standards and compliance training programs for healthcare professionals and support staff.',
};

export default function Training() {
  return (
    <main className="section-padding">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Training & Capacity Building</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Comprehensive training and capacity building programs for healthcare professionals and support staff delivered through physical, digital, and hybrid formats.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Training Programs</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Healthcare quality management fundamentals</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Internal audit and compliance auditing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>ISO standards implementation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Accreditation readiness training</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Clinical governance and patient safety</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Risk management and compliance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Document management and process improvement</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-600 font-bold">•</span>
              <span>Healthcare professionals continuing education</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Delivery Formats</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-primary-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Physical</h4>
              <p className="text-sm text-gray-700">On-site training programs at your organization.</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Digital</h4>
              <p className="text-sm text-gray-700">Online training programs with flexible scheduling.</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <h4 className="font-bold mb-2">Hybrid</h4>
              <p className="text-sm text-gray-700">Combination of physical and online delivery.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
