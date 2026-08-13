import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Drdha Q Healthcare',
  description: 'Learn about Drdha Q Healthcare LLP - our mission, vision, and expertise in healthcare quality and audit services.',
};

export default function About() {
  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">About Drdha Q Healthcare</h1>
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Drdha Q Healthcare LLP is a professional consultancy firm specializing in healthcare quality, audit, accreditation, and certification readiness services.
          </p>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-gray-700 mb-4">
              To empower healthcare organizations with the systems, knowledge, and capabilities needed to deliver excellent patient care, achieve compliance, and pursue institutional excellence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Vision</h2>
            <p className="text-gray-700 mb-4">
              To be a trusted partner in healthcare transformation, enabling institutions to achieve sustainable quality improvements and certification success.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Healthcare quality management systems</li>
              <li>Gap assessments and compliance audits</li>
              <li>ISO certification readiness</li>
              <li>Accreditation support (NABH, NABL, JCI)</li>
              <li>Training and capacity building</li>
              <li>Healthcare sustainability and ESG initiatives</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
