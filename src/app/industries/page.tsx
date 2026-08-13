import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries | Drdha Q Healthcare',
  description: 'Healthcare quality services for hospitals, medical colleges, dental colleges, laboratories and diagnostic centers.',
};

export default function Industries() {
  const industries = [
    { name: 'Hospitals', description: 'Quality systems, audit, and accreditation support' },
    { name: 'Corporate Hospitals', description: 'Compliance, clinical governance, quality management' },
    { name: 'Medical Colleges', description: 'Academic standards, quality assurance, accreditation' },
    { name: 'Dental Colleges', description: 'Institutional quality, accreditation readiness' },
    { name: 'Laboratories & Diagnostics', description: 'ISO 15189, ISO 17025, quality standards' },
    { name: 'Healthcare Networks', description: 'Multi-facility quality systems and compliance' },
  ];

  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12">Industries We Serve</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-gradient-to-br from-primary-50 to-transparent border border-primary-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary-700 mb-2">{industry.name}</h3>
              <p className="text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
