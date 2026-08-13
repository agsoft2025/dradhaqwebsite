import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Drdha Q Healthcare',
  description: 'Healthcare quality, audit, ISO certification, accreditation support, training and sustainability services.',
};

export default function Services() {
  const services = [
    {
      title: 'Healthcare Audit & Assessment',
      description: 'Gap assessments, compliance audits, and process reviews',
      href: '/services/healthcare-audit',
    },
    {
      title: 'ISO Certification Readiness',
      description: 'ISO 9001, ISO 7101, and specialized standards support',
      href: '/services/iso-certification',
    },
    {
      title: 'Accreditation Support',
      description: 'NABH, NABL, JCI, and other accreditation readiness',
      href: '/services/accreditation-support',
    },
    {
      title: 'Training & Capacity Building',
      description: 'Healthcare quality, audit, and standards training programs',
      href: '/services/training',
    },
    {
      title: 'Healthcare Sustainability',
      description: 'Green healthcare, ESG, and environmental management',
      href: '/services/healthcare-sustainability',
    },
  ];

  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.href} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-primary-600">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href={service.href} className="text-primary-600 font-semibold hover:underline">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
