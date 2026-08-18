'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SustainabilityContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-low px-4 md:px-8 lg:px-grid-margin-desktop" id="enquiry">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-grid-gutter items-center">
          <div className="w-full lg:w-1/2 bg-surface rounded-3xl p-8 md:p-12 shadow-xl flex flex-col gap-6 items-start">
            <span className="text-secondary text-label-md font-label-md tracking-widest uppercase">Take Action</span>
            <h2 className="text-display-lg font-display-lg text-on-surface">Ready to transition to a greener practice?</h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-4">
              Schedule a consultation with our sustainability experts to discuss an initial assessment of your healthcare facility.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-colors shadow-md w-full md:w-auto flex items-center justify-center"
            >
              Request a Consultation
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-on-surface-variant text-label-md font-label-md">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span> ISO 14001 Aligned</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[20px] text-secondary">check_circle</span> Global Standards</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Frequently Asked Questions</h3>
            <div 
              className="bg-surface rounded-xl p-6 shadow-sm cursor-pointer group"
              onClick={() => toggleFaq(0)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-label-md font-label-md text-on-surface group-hover:text-secondary transition-colors">How does sustainability impact clinical workflows?</h4>
                <span className="material-symbols-outlined text-on-surface-variant">{openFaq === 0 ? 'remove' : 'add'}</span>
              </div>
              <p className={`text-body-md font-body-md text-on-surface-variant mt-4 ${openFaq === 0 ? 'block' : 'hidden'}`}>
                Our interventions are designed to be seamless. We prioritize changes in infrastructure, procurement, and backend operations that enhance efficiency without disrupting the delivery of clinical care.
              </p>
            </div>
            <div 
              className="bg-surface rounded-xl p-6 shadow-sm cursor-pointer group"
              onClick={() => toggleFaq(1)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-label-md font-label-md text-on-surface group-hover:text-secondary transition-colors">What ROI can we expect from energy efficiency initiatives?</h4>
                <span className="material-symbols-outlined text-on-surface-variant">{openFaq === 1 ? 'remove' : 'add'}</span>
              </div>
              <p className={`text-body-md font-body-md text-on-surface-variant mt-4 ${openFaq === 1 ? 'block' : 'hidden'}`}>
                While timelines vary, most energy optimization projects in healthcare settings see a return on investment within 24 to 36 months, leading to significant long-term operational savings.
              </p>
            </div>
            <div 
              className="bg-surface rounded-xl p-6 shadow-sm cursor-pointer group"
              onClick={() => toggleFaq(2)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-label-md font-label-md text-on-surface group-hover:text-secondary transition-colors">Do you assist with sustainability reporting and compliance?</h4>
                <span className="material-symbols-outlined text-on-surface-variant">{openFaq === 2 ? 'remove' : 'add'}</span>
              </div>
              <p className={`text-body-md font-body-md text-on-surface-variant mt-4 ${openFaq === 2 ? 'block' : 'hidden'}`}>
                Yes, we provide comprehensive data collection and reporting services aligned with major frameworks (GRI, SASB, TCFD) to ensure regulatory compliance and support institutional transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
