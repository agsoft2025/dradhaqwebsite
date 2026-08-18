'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Resource Data Types
type ResourceCategory = 
  | 'All'
  | 'Hospital Quality'
  | 'NABH'
  | 'ISO'
  | 'Audit'
  | 'Patient Safety'
  | 'Laboratories'
  | 'Sustainability';

type ResourceType = 'Guide' | 'Checklist';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  fileSize: string;
  readTime?: string;
  itemCount?: string;
  imageUrl: string;
  imageAlt: string;
}

// Resource Data
const RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Hospital Quality Readiness Framework',
    description: 'A comprehensive guide detailing the critical infrastructure and process requirements for establishing a robust hospital-wide quality management system.',
    category: 'Hospital Quality',
    type: 'Guide',
    fileSize: '1.2 MB',
    readTime: '15 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDOd0TD6zsuhpmbClzGRP_pMd57YWfvImVRoLwqAz2VGrn8u-yfEv0Ld6FVbHctdG_1BGOLr2agWt_kvNVJ-RmpRvvGVFLoKZ9Eyz-BmBl-0wK2NUzZWvVuUCWJpLBz0dRWqR3dWCB8QoDw80boIkKuG38_JdVuttN3V_HqSYRp8q2JXclaYbXdK1ZsOEwCUT2V96em7GodpQTcRIaWiVp61p8oqH1nmfPzjrCIVK3NRaWaYa4wBGARw',
    imageAlt: 'Abstract, clinical flat lay of medical quality assurance documents, a modern clipboard, and a blue pen on a sterile white surface.'
  },
  {
    id: '2',
    title: 'NABH Pre-Assessment Readiness',
    description: 'A step-by-step checklist to ensure all departmental parameters meet NABH standards before the official pre-assessment audit.',
    category: 'NABH',
    type: 'Checklist',
    fileSize: '0.8 MB',
    itemCount: '45 Items',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFujtS-MYV3vROzJoZJ2nzlypkfzWfMZXwb0tMHphLwoklbkX-vuWTL5YJsMyLW7SH87heHAKkeF98La6CUFUU5uxhkeUuw2RPpYI8L1Aw7pha9MFS3_sa1wfuduR1lfSoz_2aFxJvn0aTeuKcAfUQv8x9tDm2wAyQxrt1AF11d3ix_HQqP5zVZWA4tGf06d0GeToc8Hr7R3V_Iv91MZbP7pSx19IjqIUaaA53_mss4i3hjcKK99bjGg',
    imageAlt: 'Close up of a checklist with a clipboard and a stethoscope, selective focus on a checked box.'
  },
  {
    id: '3',
    title: 'ISO 9001 Implementation Guide',
    description: 'Master the core principles of ISO 9001:2015 specifically tailored for healthcare environments, reducing implementation time by up to 30%.',
    category: 'ISO',
    type: 'Guide',
    fileSize: '2.1 MB',
    readTime: '25 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKf5-_99OyWPSQFpoqnmgMWOt6Gc5LSPKC2-PTIBkivpS49DIHKiY3Gejd5TCL1IM6iQNuwoxXUmiVY9Fe79InaPlBECKlXtYHCJsCllc3T1QqpXdDtgZqQKIKj0LrBYg4Uix7ZG4PQV7fA6U1EKQVQgntj9yrCoa-qU5J0CXjloKPLo3qcQlD5FAJPf-4gCz6jcHZd1Wr5idFOGdba3YLsFWqKogKWXc3JgQRXDSFEVqsEIYE-65_cw',
    imageAlt: 'A minimalist architectural detail of a modern hospital corridor, conveying structure and standardization.'
  },
  {
    id: '4',
    title: 'ISO 7101 Quality Management',
    description: 'An essential audit checklist for the new ISO 7101 standard for healthcare organization quality management.',
    category: 'ISO',
    type: 'Checklist',
    fileSize: '0.5 MB',
    itemCount: '60 Items',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxxVxTHDdJqwIBlDJ77KdmQdfCcKDuE0MP8sndF-jMGexeZxtxmZNClzQpia1kv0IN1mzOfexom1ovuF3jY9V6ZLdniVpD_3S8dHJgX2yQaV3g8GxhsHZ8GwJYj58lvq-QgL80AuEvS2wRBcwpB7jVBZp071Hyr1TZ9Vpw0kibHP5SYWHokurlxlFfpKs7m-7C42NK9S_tLlR5FwTBnPJbfCgK0NRtVDhdbofptE1qEjRIFeYvHMc5sw',
    imageAlt: 'A macro shot of a blue pen drawing a precise line on graph paper, symbolizing meticulous planning.'
  },
  {
    id: '5',
    title: 'Internal Audit Preparation',
    description: 'A methodology for training internal teams to conduct rigorous, un-biased self-assessments prior to external regulatory reviews.',
    category: 'Audit',
    type: 'Guide',
    fileSize: '1.8 MB',
    readTime: '20 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkliqfnTNz6nhyZc59GRZgSHWUsYDoBisu3vadJXjem27aizQCXwMcMMPDQ9RaiaJ3UKIpAhQyQA5SEVytrnrY1ahEsDWhuTH7vYfTnbrIWQw49C4gVQ1nCQqWOG4LQ3bT8BVlRMvTFdm5RBMbq0u_vwk_gQrI0mK_YNlQdnovG4BXFUHrNQkCzRxlsFAv9O_gFGhv8aMUA0ozY5YC3roRzrO6BJpTgMF7mPNT11Ez3psF7830_J-UMA',
    imageAlt: 'A focused image of a consultant reviewing digital charts on a tablet in a bright, modern hospital setting.'
  },
  {
    id: '6',
    title: 'Patient Safety Improvement',
    description: 'Identify and mitigate risks with this comprehensive safety walk-around checklist designed for unit managers.',
    category: 'Patient Safety',
    type: 'Checklist',
    fileSize: '0.9 MB',
    itemCount: '35 Items',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEhOqMkusNDUxnCldJQSBC7hTetWI1AwC1_Cd9UeSV201e1W2nIk76NV9C6fBbzrQ8NzZWPZPKQU7O-5RTthOwu-e7kHeWIbrHM-2t0-ON4LAIiXDlK8TeWU2pH_56_R7FesRmPa-TePRqSvaL1cn0YKoue4jW-WVHcZMTCQX3oVkFM1_qWxdxro3E1JyuyPY1ya58J1elMwPiSQkGjONppujHUXrZv3nXq0k0uUcF3maElkT2IXzsBQ',
    imageAlt: 'A comforting, out-of-focus background of a hospital room with a sharp focus on a Patient First badge.'
  },
  {
    id: '7',
    title: 'Laboratory Quality Systems',
    description: 'A definitive guide to establishing quality control mechanisms and compliance for clinical laboratories (ISO 15189 aligned).',
    category: 'Laboratories',
    type: 'Guide',
    fileSize: '2.4 MB',
    readTime: '30 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsyZ7PUajlt0CYPGuhMTb32cDG3Z-6ln6EVGa-G8MFa0OjhgvseCCrdumGyYRk9id05pKxEgo45-0j_tdKWLy_VQwAr-2DRYHGkGQ5SHxlDjkPkMsLRx49bjikw_JHBHswDzcAgeKKaJwvbnNw51jBmoYkjz0y_t5dRs37KsvpXOesl282E-sO5cjhYmkxXF3O4XTrDNSNyvcZn02pQ9kZDCyX_U8WN8DdDnd9_C0Ik0OTX2mwYJ21AA',
    imageAlt: 'A pristine, high-tech laboratory environment with test tubes and microscope.'
  },
  {
    id: '8',
    title: 'Sustainability Starter Kit',
    description: 'Initiate eco-friendly practices within your clinical facility without compromising patient safety or infection control.',
    category: 'Sustainability',
    type: 'Guide',
    fileSize: '1.1 MB',
    readTime: '12 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCod2CQmFeUE-LXLvcuGXJWxPEYjuiC9EQGdqinoSqPL_3uK4XNInNKCxsJ6IOuVI17S4wOu01lKXpxPdDzCZARazo6dMApW2yZXkElTGQ1crIfiu_7rYpy930FSKVJVEO7ou_HDFV5Fyu5mYpTD37qk455W_X917Ho9hZ0nIUBUhENu7LzLejvHYNQNReCRYZgXp0mIZA-jr8o_4AC5kKOmmZcO25dBRheYeHGyOIvTj5y3WA-8lMGaw',
    imageAlt: 'A subtle integration of nature within a clinical setting with a green plant.'
  }
];

const CATEGORIES: ResourceCategory[] = [
  'All',
  'Hospital Quality',
  'NABH',
  'ISO',
  'Audit',
  'Patient Safety',
  'Laboratories',
  'Sustainability'
];

const HERO_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCul06lT1ZJ5eTtPK9jvkMMAa-Ck41N1uCSCvK6uDgHygwsSIMr8B3jJI2T7bxpvZrIDcwYYLu08BtUtmqZVS7HouJDADS0jqBrAQJDOP82SxBzpSaeYiAbxpgnNYEDM1i_-uoCZnJ1I7rLSU5STI41DHXqq1Fx-QC-ulCF3rC68JbJuCmKqL6g7Iyio5EjNa13vpdNsnnvkQsE7Tzi3SeUTSpWEqMSgC5eKRrlbSB1N4SInX9hlAKRiw';

export default function GuidesContent() {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  // Filter resources based on category
  const filteredResources = selectedCategory === 'All' 
    ? RESOURCES 
    : RESOURCES.filter(resource => resource.category === selectedCategory);

  const openModal = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full relative overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg 
              className="absolute w-[800px] h-[800px] top-[-20%] right-[-10%] opacity-20 text-secondary-fixed mix-blend-multiply blur-3xl animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg 
              className="absolute w-[600px] h-[600px] bottom-[-10%] left-[-20%] opacity-[0.15] text-primary-fixed mix-blend-multiply blur-3xl animate-pulse" 
              fill="currentColor" 
              viewBox="0 0 100 100"
              style={{ animationDelay: '1s' }}
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>

          {/* Hero Section */}
          <section className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop pt-16 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-grid-gutter items-center">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-label-md font-label-md uppercase tracking-wider text-secondary flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-secondary inline-block" />
                    Practical Resources
                  </span>
                </div>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary tracking-tight leading-tight">
                  Guides &<br />
                  <span className="text-surface-tint">Checklists</span>
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
                  Actionable tools, comprehensive frameworks, and pre-audit checklists designed by seasoned healthcare quality experts to ensure your institution is always ready.
                </p>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl relative z-10">
                  <Image
                    src={HERO_IMAGE_URL}
                    alt="A highly professional, editorial-style macro photograph of a pristine, modern healthcare consulting desk"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Decorative offset block */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-surface-container rounded-xl z-0" />
              </div>
            </div>
          </section>

          {/* Main Content Area */}
          <section className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop py-section-gap-mobile md:py-section-gap-desktop">
            {/* Filters */}
            <div className="flex flex-col gap-4 mb-16">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-outline">tune</span>
                <span className="text-label-md font-label-md text-on-surface-variant">Filter by Category</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full text-label-md font-label-md transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-on-primary shadow-md'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-grid-gutter">
              {filteredResources.map((resource) => (
                <article 
                  key={resource.id} 
                  className="group relative flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="h-40 w-full relative overflow-hidden bg-surface-container">
                    <Image
                      src={resource.imageUrl}
                      alt={resource.imageAlt}
                      width={400}
                      height={160}
                      className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span 
                        className={`px-2.5 py-1 text-[10px] font-label-md uppercase tracking-wider rounded shadow-sm ${
                          resource.type === 'Guide' 
                            ? 'bg-secondary text-on-secondary' 
                            : 'bg-surface-tint text-on-primary'
                        }`}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-on-primary">
                      <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      <span className="text-label-md font-label-md">{resource.fileSize}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-label-md font-label-md text-secondary mb-2">{resource.category}</span>
                    <h3 className="text-headline-md font-headline-md text-primary mb-3 line-clamp-2">{resource.title}</h3>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">{resource.description}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30">
                      <span className="text-label-md font-label-md text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          {resource.readTime ? 'schedule' : 'list_alt'}
                        </span>
                        {resource.readTime || resource.itemCount}
                      </span>
                      <button 
                        aria-label="Download Resource"
                        onClick={() => openModal(resource)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary transition-colors duration-300"
                      >
                        <span className="material-symbols-outlined transition-transform group-hover:translate-y-0.5">download</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative z-10 w-full bg-primary-container text-on-primary-container py-section-gap-mobile md:py-section-gap-desktop mt-12 overflow-hidden">
            {/* Decorative geometric background */}
            <div 
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
            />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-surface/5 p-12 rounded-2xl backdrop-blur-sm border border-on-primary-container/10">
                <div className="flex-1">
                  <h2 className="text-headline-lg font-headline-lg text-on-primary mb-4">
                    Need a Customized Quality Assessment?
                  </h2>
                  <p className="text-body-lg font-body-lg text-on-primary-container/80 max-w-2xl">
                    Our experts can tailor frameworks specifically to your institution&apos;s unique operational challenges and regulatory environment. Let&apos;s discuss your audit readiness.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-on-primary text-primary rounded-lg text-label-md font-label-md hover:bg-surface-container-low transition-colors shadow-lg"
                  >
                    Request a Consultation
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-secondary-fixed text-secondary-fixed rounded-lg text-label-md font-label-md hover:bg-secondary-fixed/10 transition-colors"
                  >
                    WhatsApp Us
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-surface rounded-xl shadow-2xl w-full max-w-md mx-4 p-8 overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-surface-container rounded-full mb-4">
                <span className="material-symbols-outlined text-secondary text-2xl">download</span>
              </span>
              <h3 className="text-headline-md font-headline-md text-primary mb-2">Access Resource</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Please provide your details to download the requested framework document.
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-1">Full Name</label>
                <input 
                  className="w-full px-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-body-md font-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
                  placeholder="Dr. Jane Doe" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-1">Organization</label>
                <input 
                  className="w-full px-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-body-md font-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
                  placeholder="City General Hospital" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-1">Work Email</label>
                <input 
                  className="w-full px-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-body-md font-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
                  placeholder="jane.doe@hospital.com" 
                  type="email"
                />
              </div>
              <div>
                <label className="block text-label-md font-label-md text-on-surface mb-1">
                  WhatsApp Number <span className="text-outline font-normal">(Optional)</span>
                </label>
                <input 
                  className="w-full px-4 py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-body-md font-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
                  placeholder="+1 234 567 8900" 
                  type="tel"
                />
              </div>
              <button 
                className="mt-4 w-full bg-primary text-on-primary py-3 rounded-lg text-label-md font-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center justify-center gap-2" 
                type="button"
              >
                Download PDF
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </button>
              <p className="text-[12px] text-center text-outline mt-2">
                By downloading, you agree to our privacy policy regarding communication.
              </p>
            </form>
          </div>
        </div>
      )}

      <Footer variant="about" />
    </>
  );
}
