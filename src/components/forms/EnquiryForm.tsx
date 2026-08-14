'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EnquiryFormData, Service } from '@/types';
import { validateEnquiryForm } from '@/lib/validation/form';

const inputClass =
  'w-full rounded-[4px] border border-outline-variant bg-surface-container-lowest px-4 py-3 font-body-md text-on-surface transition-all duration-200 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

const selectClass = `${inputClass} cursor-pointer appearance-none pr-10`;

const services: Service[] = [
  'Healthcare Audit & Assessment',
  'ISO Certification Readiness',
  'Accreditation Support',
  'Quality Management Systems',
  'Clinical Governance & Patient Safety',
  'Training & Capacity Building',
  'Healthcare Sustainability',
];

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<EnquiryFormData>>({
    fullName: '',
    organizationName: '',
    designation: '',
    email: '',
    phone: '',
    organizationType: undefined,
    servicesInterested: [],
    standard: undefined,
    currentStatus: undefined,
    preferredContactMethod: 'Email',
    message: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    if (name === 'servicesInterested') {
      setFormData((prev) => ({
        ...prev,
        servicesInterested: value ? [value as Service] : [],
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const errors = validateEnquiryForm(formData);
    if (errors.length > 0) {
      setError(errors.map((validationError) => validationError.message).join(', '));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        organizationName: '',
        designation: '',
        email: '',
        phone: '',
        organizationType: undefined,
        servicesInterested: [],
        standard: undefined,
        currentStatus: undefined,
        preferredContactMethod: 'Email',
        message: '',
        consent: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded border border-secondary/20 bg-secondary-container/20 p-6 text-secondary">
        <span className="material-symbols-outlined">check_circle</span>
        <div>
          <h3 className="mb-1 font-headline-md text-headline-md text-on-surface">Enquiry submitted</h3>
          <p className="text-body-md text-on-surface-variant">
            We have received your enquiry. Our team will contact you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error ? (
        <div className="rounded border border-error-container bg-error-container/40 p-4 text-body-md text-error">
          {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Full Name" required>
          <input
            type="text"
            name="fullName"
            placeholder="Dr. Sarah Jenkins"
            value={formData.fullName || ''}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Organization / Hospital Name" required>
          <input
            type="text"
            name="organizationName"
            placeholder="E.g. City General Hospital"
            value={formData.organizationName || ''}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Designation">
          <input
            type="text"
            name="designation"
            placeholder="Medical Director"
            value={formData.designation || ''}
            onChange={handleChange}
            className={inputClass}
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            name="email"
            placeholder="sarah.j@example.com"
            value={formData.email || ''}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </Field>
      </div>

      <Field label="Mobile / WhatsApp Number" required>
        <input
          type="tel"
          name="phone"
          placeholder="+971 50 123 4567"
          value={formData.phone || ''}
          onChange={handleChange}
          className={inputClass}
          required
        />
      </Field>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Organization Type" required>
          <Select
            name="organizationType"
            value={formData.organizationType || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select Organization Type</option>
            <option value="Hospital">Hospital</option>
            <option value="Corporate Hospital">Corporate Hospital Network</option>
            <option value="Medical College">Medical College</option>
            <option value="Dental College">Dental College</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Other">Other</option>
          </Select>
        </Field>
        <Field label="Service Interested In" required>
          <Select
            name="servicesInterested"
            value={formData.servicesInterested?.[0] || ''}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Standard / Accreditation target">
          <Select name="standard" value={formData.standard || ''} onChange={handleChange}>
            <option value="">Select Standard</option>
            <option value="ISO 9001">ISO 9001</option>
            <option value="ISO 7101">ISO 7101</option>
            <option value="NABH">NABH</option>
            <option value="NABL">NABL</option>
            <option value="JCI">JCI</option>
            <option value="ISO 15189">ISO 15189</option>
            <option value="ISO 17025">ISO 17025</option>
            <option value="Other">Other</option>
          </Select>
        </Field>
        <Field label="Current Status">
          <Select name="currentStatus" value={formData.currentStatus || ''} onChange={handleChange}>
            <option value="">Select Current Status</option>
            <option value="Planning">Planning Phase</option>
            <option value="Gap Assessment">Gap Assessment</option>
            <option value="Implementation">Implementation</option>
            <option value="Certification Preparation">Certification Preparation</option>
            <option value="Renewal">Renewal</option>
            <option value="Other">Other</option>
          </Select>
        </Field>
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-headline-md text-[14px] text-on-surface">Preferred Contact Method</span>
        <div className="flex flex-wrap gap-6">
          {['Email', 'Phone', 'WhatsApp'].map((method) => (
            <label key={method} className="group flex cursor-pointer items-center gap-2">
              <input
                className="peer hidden"
                name="preferredContactMethod"
                type="radio"
                value={method}
                checked={formData.preferredContactMethod === method}
                onChange={handleChange}
              />
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-outline-variant transition-all duration-200 peer-checked:border-[5px] peer-checked:border-secondary" />
              <span className="font-body-md text-on-surface-variant transition-colors peer-checked:text-on-surface">
                {method === 'Phone' ? 'Phone Call' : method}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Field label="Message / Specific Requirements" required>
        <textarea
          name="message"
          placeholder="Please describe your primary challenges or goals..."
          value={formData.message || ''}
          onChange={handleChange}
          rows={4}
          className={`${inputClass} resize-none`}
          required
        />
      </Field>

      <label className="group mt-2 flex cursor-pointer items-start gap-3">
        <input
          className="peer hidden"
          type="checkbox"
          name="consent"
          checked={formData.consent || false}
          onChange={handleChange}
          required
        />
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-outline-variant bg-surface-container-lowest transition-all duration-200 peer-checked:border-secondary peer-checked:bg-secondary">
          <span className="material-symbols-outlined text-[16px] text-on-secondary opacity-0 transition-opacity peer-checked:opacity-100">
            check
          </span>
        </span>
        <span className="text-[14px] leading-snug text-on-surface-variant">
          I consent to Drdha Q Healthcare collecting and processing my data to respond to my
          enquiry in accordance with their{' '}
          <Link className="text-secondary hover:underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          . <span className="text-error">*</span>
        </span>
      </label>

      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <button
          className="group flex w-full items-center justify-center gap-2 rounded-[4px] bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-colors hover:bg-on-primary-fixed disabled:opacity-50 sm:w-auto"
          type="submit"
          disabled={loading}
        >
          <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-headline-md text-[14px] text-on-surface">
        {label} {required ? <span className="text-error">*</span> : null}
      </span>
      {children}
    </label>
  );
}

function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) {
  return (
    <span className="relative">
      <select className={selectClass} {...props}>
        {children}
      </select>
      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
        expand_more
      </span>
    </span>
  );
}
