'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Article Data Types
type ArticleCategory = 
  | 'All'
  | 'Healthcare Quality'
  | 'Audit & Assessment'
  | 'Accreditation'
  | 'ISO Standards'
  | 'Patient Safety'
  | 'Training'
  | 'Healthcare Sustainability';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
}

// Article Data
const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Preparing Your Hospital for NABH Accreditation: A Practical Roadmap',
    excerpt: 'Achieving National Accreditation Board for Hospitals & Healthcare Providers (NABH) certification requires rigorous preparation. Discover the essential steps, common pitfalls, and strategies to align your clinical protocols with national quality standards.',
    category: 'Accreditation',
    date: 'Oct 15, 2024',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjuTEgB3KaRrmesAGQCWUiHvFNp758nGGUd4urYo3GifGhhPGQvJFbotEsFPEtoXfYemFIFKJ21RlSyi57wuDdP_1woYFxtulqBRPqU5QVJn-rqtIwq6JaeyjTJcVzILnAvnNgYhLdY-YwHt1RwdSbrzDpc-6zx-CudoIiTYLHReaKNIUaEPCOAPlNNsvJb6kfLZqltFltJlIL6C3e9qo5QJM6ABrNjplrsBgptp2OHu3nZ1opM1AERw',
    imageAlt: 'A team of healthcare professionals in a brightly lit, modern hospital boardroom, reviewing documents. High contrast, sharp focus, professional and serious tone, highlighting teamwork and clinical excellence.',
    featured: true
  },
  {
    id: '2',
    title: 'Streamlining Internal Healthcare Quality Audits',
    excerpt: 'Effective internal audits are the backbone of continuous quality improvement. Learn how to structure your internal assessment program to identify risks proactively.',
    category: 'Audit & Assessment',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCOwpkHbR0cqpkN_aaERKqN6JpViXKsFIrAYB8qtQmj-K1ZTQQ9g4NiaIB67DTbTC_dxYf47dA29KTusZIX6YKkUxMhX5GJ78kb_D9CxMtWwJ9y-QPJLjqhT_rEugCpit3u2AccFK_aPQjivV2RrOyZoMA7SN7Ys_aIF21Z51HjY2KT7UTkS96iiXY2vvvbvh0veA-XlqiOBXHnHoCabdy6F0SOxxzi2i3LEPyMubEsodRaRPj8xX9Kw',
    imageAlt: 'Close up of a clipboard with a comprehensive healthcare audit checklist, a stethoscope resting nearby. Clinical setting, sharp, clean lighting, authoritative tone.'
  },
  {
    id: '3',
    title: 'Demystifying ISO 7101: The New Standard for Healthcare',
    excerpt: 'An in-depth look at the newly introduced ISO 7101 standard for healthcare quality management systems and what it means for global healthcare providers.',
    category: 'ISO Standards',
    date: 'Sep 28, 2024',
    readTime: '10 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADfu0NV3KKXMo1sw8IzglbXKRP2nxc2SLgsxKoEqN0S1YbjC5enE-Jo32veUn_a5VcxKG_kpolJnIOJ_K507u54rFET-JU3F2UfY0tcq8U78SRhOjUaWfcBXS7TBbUgFIJunvVva4MShZgyzvjT44HRnEgY0PJrOeq2jb8IG_VZKBHamquVzFXJj2lPtS5QWwGkoMYqgAAZHVo58bYTx-Md3_2uVTY-TBteVH32A_Vpjd75VptGBC-tw',
    imageAlt: 'Abstract representation of quality management systems in a hospital. Digital overlay of ISO standards connecting different hospital departments. Clean blue and teal color palette.'
  },
  {
    id: '4',
    title: 'Identifying Common Compliance Gaps Before External Audits',
    excerpt: 'A proactive analysis of the most frequently cited non-conformances in major healthcare accreditation audits and how to prevent them.',
    category: 'Healthcare Quality',
    date: 'Sep 15, 2024',
    readTime: '6 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGntxIaRmO1_7iEwq-5hiIJPA2VgBrF_6z_g916SwUPI9RQzU17Z5pFkpcBTyzDh7Tx-dZUzXEvuu5vF9kaq0gS-tpF6vUMAdDq3WK3d65nfepld95iDdasU6GLjHvh-YNg6ajR8Aj4pBe9LXFAQuGzKtXQv6-cOdeXNTZAAEv4JTykXeumuNvxAXluIMFMXHHopNW-T2VidcRvFAV5HEJan1Q4dPiKUYUd8FBUNVPHan7xN_IsUvBxA',
    imageAlt: 'A focused medical administrator reviewing data on a tablet in a sterile hospital corridor. Depth of field emphasizes the data, highlighting analysis and compliance.'
  },
  {
    id: '5',
    title: 'Fostering a Resilient Patient Safety Culture',
    excerpt: 'Protocols alone don&apos;t prevent errors; culture does. Explore strategies for leadership to embed a non-punitive, continuous learning approach to patient safety.',
    category: 'Patient Safety',
    date: 'Aug 30, 2024',
    readTime: '7 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0eV7Hnpv2iBzGDEkssaibs3GmGcSLSFNCkHLQu-k5ypIsmh6L--JsGO-c8RKueAdo--OquAKrDqTXzmj7RB38dBHPYYvTOuD6OpNukDlgWmw_-ErtLutSSLpVAs5BSlAzw18FHU0UGkwC-8lFAbZsg8qaS_tz7lPX4ki0L_fuzieEme63DxpO9K5rf3KdQiC37X-DJ3khrotfYJl8V7IlsJIw9goLYUhEoCku7QYejqyeuJHFDSRECA',
    imageAlt: 'Nurses and doctors in a training session, focused on a presenter. Bright, engaging atmosphere, emphasizing teamwork and patient safety protocols.'
  },
  {
    id: '6',
    title: 'Integrating Sustainability into Quality Frameworks',
    excerpt: 'How modern healthcare facilities are aligning their environmental sustainability goals with their core quality management systems for long-term viability.',
    category: 'Healthcare Sustainability',
    date: 'Aug 12, 2024',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6SHIYl1c2GLlbd7UG09yGeICCv3JAwHdolj2QohVl6jPA55_i6LkpCkVWuqIPzbXen64n0C_fo1iWWzjGoPso-WmXemSYfl4idAYexkBlREoL8-fheGt5cKDFcAXmLDAkPMYZd9wpQYGQvJxjNfhakIzApZsliCZ6e_3GRbFy0NA9KKqBxNoVkOs27AnDBQ4R-DAtEEjQdw4ZJK0QJcoxl7UwJEsm8SD0Q7kXbp700YvhKwgzh-wabA',
    imageAlt: 'A modern hospital building exterior with solar panels and green spaces, illustrating sustainable healthcare practices. Blue skies, bright and optimistic.'
  },
  {
    id: '7',
    title: 'Leveraging Data Analytics for Quality Improvement',
    excerpt: 'Transitioning from reactive reporting to predictive analytics. A guide to utilizing hospital data to preemptively address quality and safety issues.',
    category: 'Healthcare Quality',
    date: 'Jul 25, 2024',
    readTime: '6 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHQ5x5hq7CYHJIPFtLKb05qluGpWnF45tau-NghxxUVSKefA2ZCeiU3aMq0hC6blO1mo2XqxkYgaZ7jmYBNIlUMJ0URYxtH3AVh68tFg43iNyXYSozcxByrX6nMjoM8oxf0hcBOPL95R_U1rX6VIxRnWDRfsojXl2q9ZVtP_T9Alzc15p_iJxa9KTzcXt3XeAEr22J8WaET0K1Fq6EmciGWrJvhgser5FKx7JaVNSZxalCH_NmlJtJLA',
    imageAlt: 'A highly detailed close-up of a digital dashboard on a screen, showing various metrics and graphs related to hospital performance. Clinical precision, data-driven.'
  }
];

const CATEGORIES: ArticleCategory[] = [
  'All',
  'Healthcare Quality',
  'Audit & Assessment',
  'Accreditation',
  'ISO Standards',
  'Patient Safety',
  'Training',
  'Healthcare Sustainability'
];

const HERO_BACKGROUND_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRJtLV4g9mRmN1w1VF5oQn5h95bDcCh4FdMoXJVJbDKWmR7xPxzHwlo4vuAOj2X9pMZDHQ9CO2jjtakbVUTgmfwqB_pqCmmeq22nEFPkexdm7TivriHJn_44EwH8dw2xhl9anSmzKH7oUvGrX3HPvT1FnjWMRgNU9hs_WnE6Qc0TFcqz68OWG-ZyIKcJeuFmPBV7A1D79UmDUiqHnDiflMoQ-MV6uje2KMVJeBVCCxhHGcqosUkamWuA';

export default function ArticlesContent() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory>('All');

  // Filter articles based on category
  const filteredArticles = selectedCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(article => article.category === selectedCategory);

  const featuredArticle = ARTICLES.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* Hero Section */}
          <section className="relative w-full bg-surface-container-low py-section-gap-mobile md:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div 
                className="bg-cover bg-center w-full h-full opacity-20"
                style={{ backgroundImage: `url('${HERO_BACKGROUND_URL}')` }}
                role="img"
                aria-label="Abstract, high-end architectural shot of a modern healthcare facility interior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col md:flex-row items-end justify-between gap-6 lg:gap-grid-gutter">
              <div className="max-w-3xl flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-primary" />
                  <span className="text-label-md font-label-md text-primary uppercase tracking-widest">
                    Resources & Insights
                  </span>
                </div>
                <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary tracking-tight">
                  Healthcare Quality Insights
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
                  Drdha Q shares practical guidance, regulatory updates, and strategic frameworks to elevate clinical standards and ensure audit readiness.
                </p>
              </div>
              <div className="hidden lg:block pb-2">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">search</span>
                  <span className="text-label-md font-label-md border-b border-outline-variant pb-1 w-48">
                    Search resources...
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Article Section */}
          {featuredArticle && (
            <section className="relative w-full bg-surface -mt-8 md:-mt-16 z-20 px-4 md:px-8 lg:px-grid-margin-desktop">
              <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden group cursor-pointer transition-transform duration-500 hover:-translate-y-2">
                  <div className="lg:w-3/5 relative h-80 lg:h-auto overflow-hidden">
                    <Image
                      src={featuredArticle.imageUrl}
                      alt={featuredArticle.imageAlt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-secondary text-on-secondary px-4 py-1.5 rounded-full text-label-md font-label-md uppercase shadow-md flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">star</span>
                      Featured Insight
                    </div>
                  </div>
                  <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-primary-fixed text-on-primary-fixed">
                    <div className="flex items-center gap-4 mb-6 text-label-md font-label-md opacity-80">
                      <span>{featuredArticle.category}</span>
                      <span className="w-1 h-1 rounded-full bg-on-primary-fixed" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <h2 className="text-headline-lg font-headline-lg mb-4 group-hover:text-secondary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-body-md font-body-md mb-8 opacity-90 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-label-md font-label-md group-hover:text-secondary transition-colors">
                      <span className="uppercase tracking-wider">Read Article</span>
                      <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Content Grid Section */}
          <section className="w-full bg-surface py-section-gap-mobile md:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop">
            <div className="max-w-[1280px] mx-auto">
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3 mb-16 pb-6 border-b border-outline-variant/30">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full text-label-md font-label-md transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container-low text-on-surface hover:bg-surface-variant'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-grid-gutter gap-y-16">
                {regularArticles.map((article) => (
                  <article key={article.id} className="flex flex-col group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-6 shadow-md">
                      <Image
                        src={article.imageUrl}
                        alt={article.imageAlt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-label-md font-label-md text-secondary uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-label-md font-label-md text-on-surface-variant">
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-headline-md font-headline-md text-primary mb-3 group-hover:text-secondary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-body-md font-body-md text-on-surface-variant mb-6 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-label-md font-label-md text-primary group-hover:text-secondary transition-colors">
                          <span className="uppercase tracking-wider">Read Article</span>
                          <span className="material-symbols-outlined text-[20px] transform group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </div>
                        <span className="text-label-md font-label-md text-on-surface-variant bg-surface-container px-3 py-1 rounded-md">
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination / Load More */}
              <div className="mt-16 flex justify-center">
                <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg text-label-md font-label-md hover:bg-primary hover:text-on-primary transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">refresh</span>
                  Load More Articles
                </button>
              </div>
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className="w-full bg-primary-container text-on-primary-container py-section-gap-mobile md:py-section-gap-desktop px-4 md:px-8 lg:px-grid-margin-desktop relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
              <svg fill="none" height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="199" stroke="currentColor" strokeDasharray="10 10" strokeWidth="2" />
                <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
              <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg mb-6">
                Need help applying these insights?
              </h2>
              <p className="text-body-lg font-body-lg mb-10 max-w-2xl opacity-90">
                Transform theory into practice. Our team of expert consultants is ready to help you navigate complex regulatory landscapes and implement robust quality management systems.
              </p>
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-8 py-4 rounded-lg text-label-md font-label-md hover:bg-secondary-fixed-dim transition-all shadow-xl flex items-center gap-3"
              >
                Request a Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer variant="about" />
    </>
  );
}
