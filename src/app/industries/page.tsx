import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Industries | Drdha Q Healthcare",
  description:
    "Healthcare quality services for hospitals, medical colleges, dental colleges, laboratories and diagnostic centers.",
};

const industries = [
  {
    category: "Acute Care",
    title: "Hospitals",
    icon: "local_hospital",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBx5dHLJy8o_pROLw0rA9lLLgMDhUfEUhFgXZSY6BtCoSZafOSGEj3xB4H6LD_w83osF3ndWrfs62ZZhvUhD0V-baSASifgjjrL7wuA2P00g2BJBSmTe8XVokV3N-x3XhMii-hzrZIUSvHRjRtKqFq42UPtKLmYr479ZFeFojjGy7AEY8TYi368YNKeGDwPoA--UbkWQg8j5GQz1GHbhMs4Qebn8gak7sBjLy7B1Z9OaE37Oesb8qiHJw",
    description:
      "Comprehensive quality management systems for multi-specialty and general hospitals, ensuring patient safety and rigorous compliance.",
    services: ["NABH Consulting", "Clinical Audits"],
    standards: ["ISO 9001", "JCI"],
  },
  {
    category: "Enterprise",
    title: "Corporate Hospitals",
    icon: "domain",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9oE8JC_FCdgIIJ6MlRlCx1naYw4yn7JW1brBkXQaCyk956hg1eIPy2unRAKAS-ZwlQCyWjEIixGIgDNbxRDPv4sdtcrjfpIG9hQaeVLiKX2UAWhF0aU1OCk5DBl712WCHAiUwNyTx5bKPxQkR55cET8ei3qbInNG_-5lBvNTlVKZMv0gtoFjVhIXWpxcxTmIl7HBrObon7BQn85qRu0xHMipQpVJ5bfhQbn4B_dE4Le6s7uwF_A29nw",
    description:
      "Scalable compliance frameworks and standardization across hospital networks, focusing on enterprise-wide quality metrics.",
    services: ["Multi-site Standardization", "Executive Training"],
    standards: ["ISO 45001", "NABH Enterprise"],
  },
  {
    category: "Education",
    title: "Medical Colleges",
    icon: "school",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOBM1-ijeSXtCYyBXYS6W7WOpJ5s-oPNlSqer6KpoSxVCSBNXOM7TFxkng1mpylt8ygX1uB9_8i8XvdvUHmUNse0FfCZ5443b7jAS4jjlCPHA9kyVymQ-w4uvwsxieWB-aG34ODByIxvtfwXppPHMas5UnvzCT62ASFahQ_69Erpw55H0Ptth9UL25GzIMEG7XLptq3pHGEQ8DD2lderiQ-QdROUz0ZfXhjZee7xTmSKUv2ypPDwU03Q",
    description:
      "Aligning academic excellence with clinical quality standards, preparing institutions for rigorous educational and medical audits.",
    services: ["NMC Compliance", "Curriculum Audits"],
    standards: ["ISO 21001", "NAAC"],
  },
  {
    category: "Specialized Education",
    title: "Dental Colleges",
    icon: "dentistry",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDv_ezxKmcaOONuUEsqK3ymqq3NC6CkppP_1I96gjNxn2pjik4bp27Rsdsi20jpSLP40AaBcPrUadioDXHB5bSRIm91mkkWKWKB7CvfaxjnRjY99LeLCu7uJAAKVjPkBfVzn_CYEOesuEEtVER39GMdLkyqlTSN9wWzwn5aZPRAdGvfaFhAnVKAqE9xfagt4dJF_Bs9a12cSyHtmAMRQIkSj0DA7-i1T0dyir5a9BXQ5fQnBfLIAcUBgw",
    description:
      "Specialized consulting for dental education institutions, focusing on infection control, equipment calibration, and DCI norms.",
    services: ["DCI Readiness", "Infection Control Audits"],
    standards: ["ISO 9001", "NABH Dental"],
  },
  {
    category: "Diagnostics",
    title: "Laboratories & Diagnostics",
    icon: "biotech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuBywDFDd5eCe93x26mLeWrwVz6DV8KJ45X-RHOF8NuQjVFmvSLsLc28sYxrR0yQvFhvaz6m7BDkBm5IicEOFyDjsNfvN68vW5KBtVTQY0BRS61oNPnfD0hPQQw1SwQSWhgmrW3p-AjtSNLb8C46C3DujuhxUmxcz4PS_uczDVkHBZCKdVf4o0Fd-gq0UEiVdoNxbKZX8TFhqy8NTAxsrKBLQ3X8jQUqj5MXI1TXVFbWq0fXKEI3rJRg",
    description:
      "Ensuring precision, traceability, and regulatory compliance for diagnostic centers and clinical laboratories.",
    services: ["NABL Accreditation", "Quality Control Systems"],
    standards: ["ISO 15189", "CAP"],
  },
  {
    category: "Ancillary",
    title: "Healthcare Organizations",
    icon: "health_and_safety",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_lDUlEA16nJLwvvHSILAUKww6Gjoh9hyqQP28p4MuRW-M15H799IEdPrSPUiUezgR4Z0N68mtLF5AG5c9RC61JaSamb5kjIFTlh_4PAAhDItfJkKs3ezNp4767je8FiIBdYI9ZbU1i2jQCrf6-LCiQwbt9r4Ec-yOjytVo0x9486v9Z6ahFQOVKwtFm5Kk9MGw5kheGIr6PxPsA3yQnBCteNU333vhewfTWLEL-DnoHNuA8CDJ9TBQ",
    description:
      "Strategic quality guidance for NGOs, primary care networks, and ancillary healthcare service providers.",
    services: ["Process Optimization", "Compliance Audits"],
    standards: ["ISO 9001", "Local Regulations"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50 text-slate-900">
        {/* Hero */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="mb-5 inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-700">
                  Industries We Serve
                </p>

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Tailored Expertise for Every Healthcare Sector
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  At Drdha Q, we understand that quality and compliance are not
                  one-size-fits-all. We provide specialized consulting,
                  auditing, and training services tailored to the unique
                  operational realities and regulatory demands of distinct
                  healthcare environments.
                </p>
              </div>

              <div className="hidden justify-end lg:col-span-4 lg:flex">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 shadow-xl">
                  <div className="absolute inset-2 animate-spin rounded-full border-2 border-dashed border-cyan-500/30 [animation-duration:20s]" />

                  <span className="material-symbols-outlined text-5xl text-cyan-600">
                    category
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-slate-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-4">
              <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-700">
                Sectors We Serve
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <IndustryCard
                  key={industry.title}
                  industry={industry}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-900">
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-20 lg:flex-row lg:items-center lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Elevate Your Institution&apos;s Quality Standards?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Partner with Drdha Q to navigate complex regulatory landscapes
                and build a culture of continuous clinical excellence.
              </p>
            </div>

            <button
              type="button"
              className="group flex shrink-0 items-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-xl"
            >
              Request a Consultation

              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function IndustryCard({
  industry,
}: {
  industry: (typeof industries)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-cyan-900/10 transition-colors duration-500 group-hover:bg-transparent" />

        <span className="absolute left-4 top-4 z-20 rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur">
          {industry.category}
        </span>

        <Image
          src={industry.image}
          alt={industry.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7">
        <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="material-symbols-outlined text-2xl text-cyan-600">
            {industry.icon}
          </span>

          {industry.title}
        </h2>

        <p className="mb-7 flex-1 text-sm leading-6 text-slate-600">
          {industry.description}
        </p>

        <div className="space-y-5 border-t border-slate-100 pt-5">
          {/* Services */}
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Services
            </h3>

            <div className="flex flex-wrap gap-2">
              {industry.services.map((service) => (
                <span
                  key={service}
                  className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Standards */}
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Relevant Standards
            </h3>

            <div className="flex flex-wrap gap-2">
              {industry.standards.map((standard) => (
                <span
                  key={standard}
                  className="rounded-md bg-cyan-50 px-2.5 py-1.5 text-xs font-semibold text-cyan-700"
                >
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}