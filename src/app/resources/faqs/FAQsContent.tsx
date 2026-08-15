'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';

// FAQ Data Types
type FAQCategory = 
  | 'All'
  | 'General'
  | 'Healthcare Audits'
  | 'ISO Certification'
  | 'NABH & Accreditation'
  | 'Laboratories'
  | 'Training'
  | 'Sustainability';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

// FAQ Data
const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What exact services does Drdha Q provide?',
    answer: 'We provide comprehensive healthcare consulting focused on quality management, audit readiness, and certification support. Our core services include Gap Assessments, Internal Auditing, Regulatory Compliance mapping, specialized training programs, and end-to-end guidance for ISO, NABH, and other vital institutional accreditations.',
    category: 'General'
  },
  {
    id: '2',
    question: 'How long does a typical gap assessment take?',
    answer: 'A comprehensive gap assessment duration varies based on facility size and scope of assessment. Typically, for a mid-sized healthcare facility, the onsite assessment takes 3-5 days, followed by a detailed analytical report delivered within 7-10 business days outlining specific non-conformities and an actionable roadmap.',
    category: 'Healthcare Audits'
  },
  {
    id: '3',
    question: 'How do you handle internal audit non-conformities?',
    answer: 'We don\'t just identify non-conformities; we partner with your team to establish robust Root Cause Analysis (RCA) and Corrective and Preventive Action (CAPA) plans. We ensure these plans are not only compliant with standard requirements but are also practical and sustainable within your operational framework.',
    category: 'Healthcare Audits'
  },
  {
    id: '4',
    question: 'What is the difference between ISO 9001 and ISO 7101?',
    answer: 'While ISO 9001 provides a generic framework for Quality Management Systems applicable across industries, ISO 7101 is specifically designed for healthcare organizations. ISO 7101 incorporates unique healthcare challenges, patient safety protocols, and clinical governance structures that generic standards lack.',
    category: 'ISO Certification'
  },
  {
    id: '5',
    question: 'Do you provide ongoing support after NABH accreditation?',
    answer: 'Yes. Accreditation is not a one-time event but an ongoing commitment to quality. We offer sustained support contracts that include periodic internal audits, continuous training, metric monitoring, and preparation for surveillance and renewal assessments to ensure you maintain compliance effortlessly.',
    category: 'NABH & Accreditation'
  },
  {
    id: '6',
    question: 'What is the timeline for NABH pre-assessment to final accreditation?',
    answer: 'The timeline varies based on your facility\'s current readiness level. For organizations starting from baseline, the journey typically spans 12-18 months: 3-4 months for gap assessment and documentation, 6-8 months for implementation and internal audits, and 3-6 months for mock audits and final assessment preparation.',
    category: 'NABH & Accreditation'
  },
  {
    id: '7',
    question: 'Do you support NABL accreditation for laboratories?',
    answer: 'Yes, we provide specialized support for NABL accreditation across various testing disciplines. Our services include documentation preparation, internal quality control setup, method validation assistance, proficiency testing coordination, and pre-assessment audits to ensure your laboratory meets NABL requirements.',
    category: 'Laboratories'
  },
  {
    id: '8',
    question: 'What training programs do you offer for healthcare staff?',
    answer: 'We offer comprehensive training programs including Quality Management Systems awareness, Internal Auditor certification, Patient Safety protocols, Infection Control practices, Document Control procedures, and Leadership training for quality managers. Programs are customized to your facility\'s specific needs and can be delivered onsite or virtually.',
    category: 'Training'
  },
  {
    id: '9',
    question: 'Are your training programs certified or recognized?',
    answer: 'Our training programs are designed to align with international standards and best practices. While we are a consulting firm, our training content is based on ISO, NABH, and JCI requirements. We provide certificates of completion that document the training hours and content, which can support your facility\'s accreditation documentation.',
    category: 'Training'
  },
  {
    id: '10',
    question: 'How can healthcare facilities implement sustainability practices?',
    answer: 'We guide healthcare facilities through sustainable waste management, energy optimization, water conservation, and green procurement strategies. Our approach integrates environmental responsibility with quality management systems, ensuring sustainability initiatives support rather than compete with patient care priorities.',
    category: 'Sustainability'
  },
  {
    id: '11',
    question: 'What industries do you serve beyond healthcare?',
    answer: 'While our primary focus is healthcare, we also serve pharmaceutical companies, medical device manufacturers, clinical research organizations, and allied health sectors. Our expertise in quality management systems and regulatory compliance transfers effectively across these regulated industries.',
    category: 'General'
  },
  {
    id: '12',
    question: 'How do you ensure confidentiality of sensitive healthcare data?',
    answer: 'We maintain strict confidentiality protocols aligned with healthcare data protection regulations. All our consultants sign comprehensive NDAs, and we follow secure data handling practices. We do not share client information with third parties and ensure all audit findings and reports are delivered through secure channels.',
    category: 'General'
  },
  {
    id: '13',
    question: 'What makes Drdha Q different from other consulting firms?',
    answer: 'Our differentiation lies in our healthcare-specific expertise, practical implementation focus, and long-term partnership approach. Unlike generic consultants, we understand clinical workflows, regulatory nuances, and the operational realities of healthcare delivery. We don\'t just provide reports—we work alongside your team to implement sustainable change.',
    category: 'General'
  },
  {
    id: '14',
    question: 'Can you help with JCI accreditation preparation?',
    answer: 'Yes, we have experience supporting facilities through Joint Commission International (JCI) accreditation preparation. Our services include gap analysis against JCI standards, policy and procedure development, tracer methodology training, mock surveys, and continuous readiness support for both initial and survey cycles.',
    category: 'NABH & Accreditation'
  },
  {
    id: '15',
    question: 'What is included in your ISO certification readiness package?',
    answer: 'Our ISO certification readiness package includes comprehensive gap analysis, documentation development (quality manual, procedures, work instructions), process mapping, internal audit setup, management review support, and liaison with certification bodies. We ensure your QMS is not just certification-ready but operationally effective.',
    category: 'ISO Certification'
  },
  {
    id: '16',
    question: 'How do you measure the success of your consulting engagement?',
    answer: 'We measure success through tangible outcomes: successful accreditation/certification achievement, reduction in non-conformities, improved audit scores, enhanced staff competency metrics, and sustained compliance in post-implementation surveillance audits. We establish clear KPIs at the outset and track progress throughout the engagement.',
    category: 'General'
  }
];

const CATEGORIES: FAQCategory[] = [
  'All',
  'General',
  'Healthcare Audits',
  'ISO Certification',
  'NABH & Accreditation',
  'Laboratories',
  'Training',
  'Sustainability'
];

export default function FAQsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('All');
  const [openFAQ, setOpenFAQ] = useState<string | null>('1');

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesSearch = searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="w-full bg-surface-container py-section-gap-mobile md:py-section-gap-desktop relative overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
              style={{
                backgroundImage: 'radial-gradient(circle at 100% 0%, var(--tw-colors-primary-fixed) 0%, transparent 50%)'
              }}
            />
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop relative z-10">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
                <span className="text-label-md font-label-md uppercase tracking-[0.1em] text-on-surface-variant flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-outline-variant inline-block" />
                  Resources
                  <span className="w-8 h-[1px] bg-outline-variant inline-block" />
                </span>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-surface">
                  Frequently Asked Questions
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                  Answers to common questions about healthcare quality consulting, audits, accreditation, certification readiness and training.
                </p>
                <div className="w-full mt-8 relative group">
                  <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-secondary transition-colors duration-300">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search your question..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface text-body-lg font-body-lg text-on-surface placeholder:text-outline-variant py-4 pl-14 pr-6 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="w-full py-section-gap-mobile md:py-section-gap-desktop bg-surface">
            <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-grid-margin-desktop flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
              {/* Category Filters */}
              <div className="lg:w-1/4 flex-shrink-0 relative">
                <div className="sticky top-32 flex flex-col gap-2">
                  <h3 className="text-label-md font-label-md uppercase tracking-wider text-on-surface-variant mb-4 pl-4">
                    Categories
                  </h3>
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-4 py-3 rounded-lg text-body-md font-body-md transition-all relative overflow-hidden group ${
                        selectedCategory === category
                          ? 'text-on-secondary-container bg-secondary-container font-medium'
                          : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                      }`}
                    >
                      <span className="relative z-10">{category}</span>
                      {selectedCategory === category && (
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* FAQ List */}
              <div className="lg:w-3/4 flex flex-col gap-6">
                {filteredFAQs.length === 0 ? (
                  <div className="bg-surface-container-lowest rounded-xl p-12 text-center">
                    <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">
                      search_off
                    </span>
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-2">
                      No results found
                    </h3>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Try adjusting your search or selecting a different category.
                    </p>
                  </div>
                ) : (
                  filteredFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        aria-expanded={openFAQ === faq.id}
                        className="w-full text-left px-6 md:px-8 py-6 flex items-center justify-between gap-4 focus:outline-none group bg-surface-container-lowest"
                      >
                        <span className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        <span
                          className={`material-symbols-outlined transform transition-transform duration-300 ${
                            openFAQ === faq.id ? 'rotate-180 text-secondary' : 'text-outline-variant group-hover:text-secondary'
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      <div
                        className={`px-6 md:px-8 pb-6 text-body-lg font-body-lg text-on-surface-variant leading-relaxed transition-all duration-300 ${
                          openFAQ === faq.id ? 'block' : 'hidden'
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  ))
                )}

                {/* Bottom CTA */}
                <div className="w-full h-px bg-outline-variant/30 my-8" />
                <div className="flex items-center gap-4 bg-surface-container p-6 rounded-xl relative overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 0% 100%, var(--tw-colors-primary) 0%, transparent 70%)'
                    }}
                  />
                  <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                    <span className="material-symbols-outlined text-3xl">headset_mic</span>
                  </div>
                  <div className="z-10 flex-1">
                    <h4 className="text-headline-md font-headline-md text-on-surface mb-2">
                      Can&apos;t find the answer?
                    </h4>
                    <p className="text-body-md font-body-md text-on-surface-variant">
                      Our clinical experts are available to discuss your specific institutional requirements.
                    </p>
                  </div>
                  <div className="z-10 flex items-center gap-4 flex-shrink-0">
                    <Link
                      href="/contact"
                      className="px-6 py-3 rounded-lg bg-surface-container-lowest text-secondary font-label-md text-label-md border-2 border-secondary hover:bg-secondary/5 transition-colors whitespace-nowrap"
                    >
                      Contact Us
                    </Link>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm whitespace-nowrap flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67-.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
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
