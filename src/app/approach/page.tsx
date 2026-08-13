import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach | Drdha Q Healthcare',
  description: 'Our proven 8-step methodology: Discover, Assess, Plan, Implement, Train, Audit, Improve, Certify.',
};

export default function Approach() {
  const steps = [
    { number: 1, title: 'Discover', description: 'Understand your organization structure, culture, and current state' },
    { number: 2, title: 'Assess', description: 'Conduct comprehensive gap analysis against standards' },
    { number: 3, title: 'Plan', description: 'Develop detailed action plan and implementation roadmap' },
    { number: 4, title: 'Implement', description: 'Execute improvement initiatives and system changes' },
    { number: 5, title: 'Train', description: 'Build organizational capability and awareness' },
    { number: 6, title: 'Audit', description: 'Conduct internal audits to ensure readiness' },
    { number: 7, title: 'Improve', description: 'Continuous improvements based on audit findings' },
    { number: 8, title: 'Certify', description: 'Achieve certification or accreditation success' },
  ];

  return (
    <main className="section-padding">
      <div className="container">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Approach</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
