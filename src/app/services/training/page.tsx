import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Training & Capacity Building | Drdha Q Healthcare',
  description: 'Specialized training programs designed to elevate clinical quality, ensure regulatory compliance, and build internal capacity for sustainable excellence in healthcare delivery.',
};

export default function Training() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center -mt-20 pt-20 overflow-hidden bg-primary-container text-on-primary-container">
            {/* Abstract Animated Background */}
            <div className="absolute inset-0 z-0">
              <svg className="w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hero-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="currentColor" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
                  </linearGradient>
                  <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                    <circle cx="2" cy="2" fill="currentColor" fillOpacity="0.3" r="1.5" />
                  </pattern>
                </defs>
                <rect fill="url(#hero-grad)" height="100%" width="100%" />
                <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                {/* Animated organic shapes */}
                <circle cx="200" cy="200" fill="#86f2e4" opacity="0.1" r="300" style={{ animation: 'pulse 8s infinite alternate ease-in-out', transformOrigin: 'center' }} />
                <circle cx="800" cy="800" fill="#131b2e" opacity="0.3" r="400" style={{ animation: 'pulse 12s infinite alternate-reverse ease-in-out', transformOrigin: 'center' }} />
              </svg>
              <style>{`
                @keyframes pulse {
                    0% { transform: scale(1) translate(0, 0); opacity: 0.1; }
                    100% { transform: scale(1.2) translate(50px, -50px); opacity: 0.2; }
                }
              `}</style>
            </div>
            <div 
              className="bg-cover bg-center mix-blend-overlay opacity-40"
              style={{ 
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6fmeZiAwQWu7fs1R4PazsBpkFjaKr2aH-d-8ZrqpdcAeNNF0ZZwKEvM7HByxVswmJQ8rD6j3mzpjZeAbU8Zc2x29Z2ajpUoF9qhdhaVX1krkDBKfXjGrPqlIKnPZUO7YObAtQP8AP46M67bNTTzlGsRP1XohzbzzifKiyLxGak2O8T8nXa75RzTqY66UwrIFNxdicQu-tm30RbICYuDVTeJlYXTm6qg38p8GyXgpXv-OwKNI99IGbHw')" 
              }}
              role="img"
              aria-label="Healthcare training facility with professionals in seminar"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary-container via-primary-container/80 to-transparent" />
            <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop w-full text-center md:text-left flex flex-col items-center md:items-start gap-8">
              <span className="inline-block px-4 py-2 bg-secondary-container/20 text-secondary-container text-label-md font-label-md rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(134,242,228,0.2)]">
                Professional Development
              </span>
              <h1 className="text-display-lg font-display-lg text-on-primary-container max-w-4xl drop-shadow-md">
                Empowering Your <br />
                <span className="text-secondary-container">Healthcare Workforce</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-primary-container/80 max-w-2xl leading-relaxed">
                Specialized training programs designed to elevate clinical quality, ensure regulatory compliance, and build internal capacity for sustainable excellence in healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="#programs"
                  className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary-container/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_downward</span>
                </Link>
                <a
                  href="#enquiry"
                  className="bg-transparent border-2 border-on-primary-container text-on-primary-container px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-on-primary-container/10 transition-all flex items-center justify-center gap-2"
                >
                  Request Custom Training
                </a>
              </div>
            </div>
          </section>

          {/* Overview Section with Stats */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface relative z-30 -mt-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="bg-surface-container rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <h2 className="text-headline-lg font-headline-lg text-on-surface">Building Internal Capacity for Lasting Quality</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Our training methodology moves beyond theoretical compliance. We focus on practical application, equipping your staff with the actionable skills needed to conduct internal audits, prepare for accreditations, and drive continuous patient safety improvements.
                  </p>
                  <div className="w-24 h-1 bg-secondary rounded-full" />
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 gap-6">
                  {/* Stat Card 1 */}
                  <div className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow stat-card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-[64px] text-primary">groups</span>
                    </div>
                    <div className="text-display-lg font-display-lg text-primary mb-2">5000</div>
                    <span className="text-secondary text-headline-md text-headline-md">+</span>
                    <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-2">Professionals Trained</div>
                  </div>
                  {/* Stat Card 2 */}
                  <div className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow stat-card relative overflow-hidden group mt-8">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-[64px] text-secondary">verified</span>
                    </div>
                    <div className="text-display-lg font-display-lg text-secondary mb-2">98</div>
                    <span className="text-secondary text-headline-md text-headline-md">%</span>
                    <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-2">Certification Pass Rate</div>
                  </div>
                  {/* Stat Card 3 */}
                  <div className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow stat-card relative overflow-hidden group -mt-8">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-[64px] text-primary">menu_book</span>
                    </div>
                    <div className="text-display-lg font-display-lg text-primary mb-2">45</div>
                    <span className="text-secondary text-headline-md text-headline-md">+</span>
                    <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-2">Curriculums Developed</div>
                  </div>
                  {/* Stat Card 4 */}
                  <div className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow stat-card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="material-symbols-outlined text-[64px] text-secondary">trending_up</span>
                    </div>
                    <div className="text-display-lg font-display-lg text-secondary mb-2">15</div>
                    <span className="text-secondary text-headline-md text-headline-md">Yrs</span>
                    <div className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-2">Combined Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Programs Bento Grid */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-low" id="programs">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                  <span className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-4 block">Curriculum</span>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface">Targeted Learning Pathways</h2>
                </div>
                <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
                  Comprehensive modules tailored for different organizational levels, from frontline staff to executive leadership.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-grid-gutter">
                {/* Program 1: Large Card */}
                <div className="md:col-span-8 bg-surface rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between overflow-hidden relative">
                  <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                    <span className="material-symbols-outlined text-[200px]">plagiarism</span>
                  </div>
                  <div className="z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center mb-6 shadow-lg">
                      <span className="material-symbols-outlined text-[32px]">plagiarism</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-4">Internal Auditor Training</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant max-w-lg mb-8">
                      Develop internal champions capable of conducting rigorous self-assessments against ISO 9001 and specific healthcare accreditation standards (JCI, NABH). Covers audit planning, execution, non-conformance reporting, and CAPA management.
                    </p>
                  </div>
                  <div className="z-10 mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary hover:text-primary transition-colors"
                    >
                      View Syllabus <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Program 2: Tall Image Card */}
                <div className="md:col-span-4 bg-primary text-on-primary rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity"
                    style={{ 
                      backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKPODGYJCgLoMixZz6IvXCqyGg9x3mUMa1CNjwk6WrHcZxXMx-AyCaNYWeT53j2o_DRVX2D8yPcd8-rsuBnH3az0r9ClURNt_rI-A8YlcyL5sJcyWTXtX5QC91DYlYM0UfF6xHFgsmFwTe0S1u_woL_gJLfqYpP0DhZv2mSvKskrXNIJGYssO440FX96tsvZhWWSvILY6aGAFcXBGo4u2YjkG_zIBbTH-QZzBQ1X-KUvJpCQ-NcD7q4g')" 
                    }}
                    role="img"
                    aria-label="Healthcare professional taking notes during seminar"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 backdrop-blur-sm text-secondary flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-on-primary mb-3">Accreditation Readiness Workshop</h3>
                    <p className="text-body-md font-body-md text-on-primary/80 mb-6 line-clamp-3">
                      Intensive bootcamps designed to demystify complex standards and prepare departmental leads for external surveys and interviews.
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary hover:text-on-primary transition-colors"
                    >
                      Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
                {/* Program 3: Standard Card */}
                <div className="md:col-span-4 bg-surface rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[28px]">health_and_safety</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Patient Safety & Clinical Governance</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    Training on incident reporting, root cause analysis (RCA), and establishing a non-punitive safety culture within clinical teams.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-primary transition-colors"
                  >
                    Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Program 4: Standard Card */}
                <div className="md:col-span-4 bg-surface rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[28px]">account_tree</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3">QMS Implementation</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    Step-by-step guidance on designing, implementing, and maintaining a robust Quality Management System tailored for healthcare environments.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-primary transition-colors"
                  >
                    Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
                {/* Program 5: Standard Card */}
                <div className="md:col-span-4 bg-surface rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[28px]">psychology</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3">Leadership in Quality</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                    Executive briefings and coaching designed to align hospital leadership with quality objectives and strategic compliance goals.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-label-md font-label-md text-secondary group-hover:text-primary transition-colors"
                  >
                    Details <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Formats Section (Asymmetric Layout) */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
                <div className="lg:col-span-5 flex flex-col gap-8 pr-0 lg:pr-12">
                  <div>
                    <span className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-4 block">Flexibility</span>
                    <h2 className="text-headline-lg font-headline-lg text-on-surface">Adaptable Delivery Formats</h2>
                  </div>
                  <p className="text-body-lg font-body-lg text-on-surface-variant">
                    We understand the operational constraints of healthcare facilities. Our training solutions are designed to minimize disruption while maximizing knowledge retention.
                  </p>
                  <div className="flex flex-col gap-6 mt-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-on-secondary transition-colors text-primary">
                        <span className="material-symbols-outlined">meeting_room</span>
                      </div>
                      <div>
                        <h4 className="text-headline-md font-headline-md text-on-surface text-[20px] mb-1">On-Site Workshops</h4>
                        <p className="text-body-md font-body-md text-on-surface-variant">Immersive, hands-on sessions conducted at your facility, ideal for team building and context-specific learning.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border-l-4 border-secondary cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined">laptop_mac</span>
                      </div>
                      <div>
                        <h4 className="text-headline-md font-headline-md text-on-surface text-[20px] mb-1">Digital Learning</h4>
                        <p className="text-body-md font-body-md text-on-surface-variant">Self-paced modules and live webinars accessible anywhere, ensuring continuous learning for shift workers.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center flex-shrink-0 group-hover:bg-secondary group-hover:text-on-secondary transition-colors text-primary">
                        <span className="material-symbols-outlined">hub</span>
                      </div>
                      <div>
                        <h4 className="text-headline-md font-headline-md text-on-surface text-[20px] mb-1">Hybrid Programs</h4>
                        <p className="text-body-md font-body-md text-on-surface-variant">A blended approach combining digital foundational courses with targeted on-site practical assessments.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 relative mt-12 lg:mt-0">
                  {/* Decorative background element */}
                  <div className="absolute -inset-4 bg-surface-container-high rounded-3xl transform rotate-3 -z-10" />
                  <div className="grid grid-cols-2 gap-4 relative z-0">
                    <div 
                      className="h-64 rounded-2xl bg-cover bg-center shadow-md transform translate-y-8"
                      style={{ 
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCxFXq-SbCMLcYoCoVLGGS18sBMgQlPpfrB8JD4Lg8KcUjCITn5fRRCIJuwqFN1rFqCH8qQdpltCchmmuUoBbk-KofWsihMeSVYJKt8makFU4KZ5jxI_bzKS7NI451ic_CpTZIQtRs9nQUUqu49P_YBs1JPHSALXOKbSFe__EFShcdsKnpvOiLQWhnvZxodTtdBEHn9rqwMwYXz1Z5_BZSApn0jNNX3TzJAftfxoFsHiMaj5brC-tDJA')" 
                      }}
                      role="img"
                      aria-label="Presenter showing quality metrics during healthcare seminar"
                    />
                    <div 
                      className="h-80 rounded-2xl bg-cover bg-center shadow-lg"
                      style={{ 
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANSwVQJ3NiTpYWwtYusztX9KLZWD_gBupg6B6-soEwWAjJlBFiqtWTuJEwX63o1J3Vk5gXmHm9ydWxtIO8uNXcMpa8IQNO--XqIjyEA6Zr1zghOdyitJqyjRI0LqYFdN9bNq0TZvlFsAEfsq1nLmdCCTSBJ0b1_4IJ6Fy9VQonqHXLifcPS0o7UppEeb6GFj1KcdR0_4cGdkbcU40JGNF4gBWE2M1PoqRW-zzPn9b2ggG_uKrfPGJr1A')" 
                      }}
                      role="img"
                      aria-label="Healthcare worker using tablet for online training"
                    />
                  </div>
                  {/* Floating Data Card */}
                  <div className="absolute bottom-4 left-4 lg:-left-8 bg-surface p-6 rounded-xl shadow-xl border border-surface-container-high flex items-center gap-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                      <span className="material-symbols-outlined">query_stats</span>
                    </div>
                    <div>
                      <div className="text-label-md font-label-md text-on-surface-variant">Knowledge Retention</div>
                      <div className="text-headline-md font-headline-md text-primary">+45% vs Standard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface-container-lowest">
            <div className="max-w-[800px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="text-center mb-12">
                <span className="text-label-md font-label-md text-secondary tracking-widest uppercase mb-4 block">Insights</span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface">Frequently Asked Questions</h2>
              </div>
              <div className="flex flex-col gap-4">
                {/* FAQ Item 1 */}
                <details className="bg-surface rounded-xl shadow-sm border border-surface-container-high overflow-hidden group">
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4 className="text-headline-md font-headline-md text-on-surface text-[18px]">Do you offer customized training for specific hospital departments?</h4>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                    Yes. We tailor our curriculum to address the unique compliance requirements and operational workflows of specific departments, such as surgery, pharmacy, or outpatient clinics, ensuring maximum relevance.
                  </div>
                </details>
                {/* FAQ Item 2 */}
                <details className="bg-surface rounded-xl shadow-sm border border-surface-container-high overflow-hidden group">
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4 className="text-headline-md font-headline-md text-on-surface text-[18px]">Are your training programs certified?</h4>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                    Many of our programs issue certificates of completion that can be used for continuing education credits (CEUs) depending on local regulatory body requirements. We also offer specific ISO Lead Auditor preparatory courses.
                  </div>
                </details>
                {/* FAQ Item 3 */}
                <details className="bg-surface rounded-xl shadow-sm border border-surface-container-high overflow-hidden group">
                  <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
                    <h4 className="text-headline-md font-headline-md text-on-surface text-[18px]">How do you measure the effectiveness of the training?</h4>
                    <span className="material-symbols-outlined text-secondary transition-transform duration-300 group-open:rotate-180">expand_more</span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-body-md font-body-md text-on-surface-variant">
                    We employ pre- and post-training assessments, practical competency evaluations during workshops, and follow-up surveys to measure knowledge transfer and application in the workplace.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Enquiry CTA Form Section */}
          <section className="py-section-gap-mobile lg:py-section-gap-desktop bg-surface relative overflow-hidden" id="enquiry">
            {/* Geometric background accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 transform origin-top-right -z-10" />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="bg-primary-container rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Info Side */}
                <div className="md:w-5/12 p-8 md:p-12 bg-primary-container text-on-primary-container flex flex-col justify-between relative">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent" />
                  <div className="relative z-10">
                    <h2 className="text-headline-lg font-headline-lg mb-4 text-on-primary">Design Your Training Plan</h2>
                    <p className="text-body-md font-body-md text-on-primary-container/80 mb-12">
                      Connect with our educational consultants to discuss your organization's specific capacity-building needs and regulatory challenges.
                    </p>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">mail</span>
                        </div>
                        <span className="text-body-md font-body-md">training@drdhaq.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">call</span>
                        </div>
                        <span className="text-body-md font-body-md">+1 (800) 555-0199</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Form Side */}
                <div className="md:w-7/12 p-8 md:p-12 bg-surface">
                  <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="name">Full Name</label>
                        <input 
                          className="bg-surface border-b border-outline-variant focus:border-secondary outline-none py-2 text-body-md text-body-md text-on-surface transition-colors" 
                          id="name" 
                          placeholder="Dr. Jane Doe" 
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="org">Organization</label>
                        <input 
                          className="bg-surface border-b border-outline-variant focus:border-secondary outline-none py-2 text-body-md text-body-md text-on-surface transition-colors" 
                          id="org" 
                          placeholder="City General Hospital" 
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>
                        <input 
                          className="bg-surface border-b border-outline-variant focus:border-secondary outline-none py-2 text-body-md text-body-md text-on-surface transition-colors" 
                          id="email" 
                          placeholder="jane@hospital.org" 
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="interest">Program of Interest</label>
                        <select 
                          className="bg-surface border-b border-outline-variant focus:border-secondary outline-none py-2 text-body-md text-body-md text-on-surface transition-colors appearance-none cursor-pointer" 
                          id="interest"
                        >
                          <option disabled selected value="">Select an area</option>
                          <option value="audit">Internal Auditor Training</option>
                          <option value="accreditation">Accreditation Readiness</option>
                          <option value="safety">Patient Safety & QMS</option>
                          <option value="custom">Custom Program</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="message">Specific Requirements</label>
                      <textarea 
                        className="bg-surface border-b border-outline-variant focus:border-secondary outline-none py-2 text-body-md text-body-md text-on-surface transition-colors resize-none" 
                        id="message" 
                        placeholder="Briefly describe your training goals..." 
                        rows={3}
                      />
                    </div>
                    <Link
                      href="/contact"
                      className="mt-8 bg-primary text-on-primary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-primary/90 transition-all self-start flex items-center gap-2"
                    >
                      Submit Enquiry
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
