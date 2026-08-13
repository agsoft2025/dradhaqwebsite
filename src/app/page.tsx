import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Drdha Q Healthcare',
  description: 'Healthcare Quality, Audit & Certification Readiness Partner',
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Healthcare Quality, Audit & Certification Readiness</h1>
          <p className="text-xl mb-8">Building Stronger Healthcare Quality Systems Through Practical Implementation</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Request Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600">
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* Content sections to be added */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Drdha Q Healthcare</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Professional healthcare quality, audit, and certification readiness services for hospitals, corporate hospitals, medical colleges, and dental colleges.
        </p>
      </section>
    </main>
  );
}
