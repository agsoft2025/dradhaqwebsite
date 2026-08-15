import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SustainabilityContent from './SustainabilityContent';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Sustainability | Drdha Q Healthcare',
  description: 'Integrating ESG principles and robust sustainability strategies into clinical operations. We guide healthcare institutions toward net-zero targets without compromising patient care or clinical excellence.',
};

export default function HealthcareSustainability() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-primary-container text-on-primary-container pt-section-gap-mobile md:pt-section-gap-desktop pb-section-gap-mobile md:pb-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop">
            <div className="absolute inset-0 z-0">
              <div 
                className="w-full h-full bg-cover bg-center mix-blend-overlay opacity-40"
                style={{ 
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAauMiXfHILGjZIHAB4OQ7vPOVqFZSgKT0O5R5rTrYJZ9hhqyuI8tCTgesOcbEXB7rfYpTRc539M33fpBTBb1-dZ8zKD9flLDAxtzEOOcJxRLQgvIeXqQJiUfIS8We3k8j7pcKuMdqTslyagRyKnap_xTlaF100Qb4h0ADbqGHqnDLXXOehRh0HucWHhimGDH1nGOLA1C_16bR5LlsBNGzJ2hWB4DBKYMbvV0UmFcGkZz4T8fsQt0oGlA')" 
                }}
                role="img"
                aria-label="Eco-friendly healthcare facility with vertical gardens and green roofs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-6 lg:gap-grid-gutter">
              <div className="w-full md:w-2/3 flex flex-col gap-6">
                <span className="text-secondary text-label-md font-label-md tracking-widest uppercase bg-secondary/10 px-3 py-1 rounded-full w-fit">Service Profile</span>
                <h1 className="text-display-lg font-display-lg text-on-primary-container">Sustainable Healthcare for a Better Future</h1>
                <p className="text-body-lg font-body-lg text-on-primary-container/80 max-w-2xl">
                  Integrating ESG principles and robust sustainability strategies into clinical operations. We guide healthcare institutions toward net-zero targets without compromising patient care or clinical excellence.
                </p>
                <div className="flex gap-4 mt-4">
                  <Link
                    href="#enquiry"
                    className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/90 transition-colors shadow-lg"
                  >
                    Initiate Assessment
                  </Link>
                  <button className="bg-transparent text-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary/10 transition-colors flex items-center gap-2">
                    View Case Studies <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-end">
                <div className="bg-surface/10 backdrop-blur-md rounded-2xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                  <h3 className="text-headline-md font-headline-md text-on-primary-container mb-2">Our Impact</h3>
                  <div className="flex flex-col gap-4 mt-6">
                    <div className="flex items-end gap-2">
                      <span className="text-display-lg font-display-lg text-secondary">40%</span>
                      <span className="text-label-md font-label-md text-on-primary-container/70 pb-2">Avg. Carbon Reduction</span>
                    </div>
                    <div className="w-full bg-on-primary-container/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-secondary w-[40%] h-full rounded-full" />
                    </div>
                    <div className="flex items-end gap-2 mt-4">
                      <span className="text-display-lg font-display-lg text-secondary">Zero</span>
                      <span className="text-label-md font-label-md text-on-primary-container/70 pb-2">Waste to Landfill</span>
                    </div>
                    <div className="w-full bg-on-primary-container/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-secondary w-full h-full rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface max-w-[1280px] mx-auto w-full relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-grid-gutter">
              <div className="col-span-1 md:col-span-5 flex flex-col justify-center">
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">Strategic ESG Integration for Healthcare</h2>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                  The healthcare sector is uniquely positioned to lead in sustainability. Our approach balances stringent regulatory compliance, infection control mandates, and patient safety requirements with aggressive environmental targets.
                </p>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  We develop bespoke ESG frameworks that address Scope 1, 2, and 3 emissions, ensuring your institution not only meets current legislative demands but is future-proofed against evolving global standards.
                </p>
              </div>
              <div className="col-span-1 md:col-span-7 relative h-[500px]">
                <div className="absolute inset-0 grid grid-cols-2 gap-4">
                  <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-xl transform translate-y-8">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2S4ew3i6yJNWOnu3o99WqUa2Ddj5vbWppTurAUBdcfZB0xzEIyFxlmvK7oTyUvQAyJGO1Iomu-mvwMJNkWo6VL7BehOTZPtdaoasQaGJ48FPcCcBAxL5RhQoKRrdxNVAaVaw6wsgDy_BzsnYdTfPgxtbml4EBeMrWcGwOAKHuuWaeo15wgVUVM-25ZhHPsVVQ18jJO00PGFPcNbjw0NWiVK1xqxAe0JgMbshDEQoMq14Zr8xmnnhSg"
                      alt="Healthcare professional adjusting energy monitoring dashboard"
                      width={400}
                      height={500}
                    />
                  </div>
                  <div className="col-span-1 h-full rounded-2xl overflow-hidden shadow-xl transform -translate-y-8">
                    <Image
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsDKAeS-1lx2dFQ3LgXXelYWDxh5qo_c6Hyqjq22RRrxTrDsiDsTz8MD3niUwm_snrMDIKo6zyFSZSft4zA_a5iMaZn-R3cO28dIQUhC-xWme8JJwYrMJn-KZXGDwJsM2I4_kllQT5C2E_Yo9-lPB0B50RZFpLpd3X3KFZBYKvhvWEQSGrV4Z0a2en5t9niO26BhAN4g8wYF-jGQVS6k6SugOvqNCbEylsqDjcTvmEUCme19goUnUN8Q"
                      alt="Modern hospital corridor with natural light and waste segregation bins"
                      width={400}
                      height={500}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-surface rounded-full p-4 shadow-2xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-[48px]">eco</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Initiatives Grid */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-low px-4 md:px-8 lg:px-grid-margin-desktop relative">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                  <span className="text-secondary text-label-md font-label-md tracking-widest uppercase mb-4 block">Core Initiatives</span>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface">Targeted Sustainability Programs</h2>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-md text-right">
                  Comprehensive solutions designed specifically for the complex operational realities of modern healthcare facilities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-grid-gutter">
                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
                  <div className="w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center mb-8 text-on-secondary-container transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[32px]">solar_power</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Energy Efficiency</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                    Optimization of HVAC systems, smart lighting integration, and renewable energy procurement tailored for 24/7 clinical environments.
                  </p>
                  <Link
                    href="#"
                    className="text-secondary text-label-md font-label-md flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
                  <div className="w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center mb-8 text-on-secondary-container transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[32px]">delete_sweep</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Waste Management</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                    Advanced segregation protocols for clinical, hazardous, and general waste to maximize recycling and minimize landfill reliance.
                  </p>
                  <Link
                    href="#"
                    className="text-secondary text-label-md font-label-md flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
                  <div className="w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center mb-8 text-on-secondary-container transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[32px]">co2</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Carbon Footprint</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                    Comprehensive lifecycle assessments to measure and systematically reduce greenhouse gas emissions across the supply chain.
                  </p>
                  <Link
                    href="#"
                    className="text-secondary text-label-md font-label-md flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
                  <div className="w-16 h-16 bg-secondary-container rounded-xl flex items-center justify-center mb-8 text-on-secondary-container transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-[32px]">architecture</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Green Infrastructure</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
                    Consulting on sustainable facility design, LEED certification readiness, and the integration of biophilic design principles.
                  </p>
                  <Link
                    href="#"
                    className="text-secondary text-label-md font-label-md flex items-center gap-1 hover:gap-2 transition-all w-fit"
                  >
                    Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop bg-surface max-w-[1280px] mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-headline-lg font-headline-lg text-on-surface">Our Methodology</h2>
              <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">A rigorous, structured approach to embedding sustainability into clinical operations.</p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-low -translate-y-1/2 hidden md:block z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div className="bg-surface p-6 flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center text-headline-md font-headline-md mb-6 shadow-lg group-hover:bg-secondary transition-colors">1</div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Comprehensive Assessment</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">Baseline measurement of current energy use, waste streams, and supply chain emissions to identify high-impact opportunities.</p>
                </div>
                <div className="bg-surface p-6 flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-headline-md font-headline-md mb-6 shadow-lg group-hover:bg-secondary transition-colors">2</div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Strategic Implementation</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">Deployment of phased interventions, policy updates, and staff training programs designed to minimize disruption to patient care.</p>
                </div>
                <div className="bg-surface p-6 flex flex-col items-center text-center relative group">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant flex items-center justify-center text-headline-md font-headline-md mb-6 shadow-lg group-hover:bg-secondary transition-colors">3</div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Impact Monitoring</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">Continuous tracking against KPIs, regulatory reporting support, and iterative refinement of the sustainability roadmap.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ & CTA Section */}
          <SustainabilityContent />
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
