'use client';

import { useState } from 'react';
import { EnquiryFormData } from '@/types';
import { validateEnquiryForm } from '@/lib/validation/form';

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
    preferredContactMethod: undefined,
    message: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as any;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate
    const errors = validateEnquiryForm(formData);
    if (errors.length > 0) {
      setError(errors.map(e => e.message).join(', '));
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
        preferredContactMethod: undefined,
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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We have received your enquiry. Our team will contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name *"
          value={formData.fullName || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="text"
          name="organizationName"
          placeholder="Organization / Hospital Name *"
          value={formData.organizationName || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="designation"
          placeholder="Designation (Optional)"
          value={formData.designation || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Mobile / WhatsApp Number *"
          value={formData.phone || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        />
        <select
          name="organizationType"
          value={formData.organizationType || ''}
          onChange={handleChange}
          className="border rounded px-4 py-2"
          required
        >
          <option value="">Select Organization Type *</option>
          <option value="Hospital">Hospital</option>
          <option value="Corporate Hospital">Corporate Hospital</option>
          <option value="Medical College">Medical College</option>
          <option value="Dental College">Dental College</option>
          <option value="Laboratory">Laboratory</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Your Message / Enquiry *"
        value={formData.message || ''}
        onChange={handleChange}
        rows={5}
        className="border rounded px-4 py-2 w-full"
        required
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent || false}
          onChange={handleChange}
          required
        />
        <span>I agree to the privacy policy and data usage *</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-600 text-white py-3 rounded font-semibold hover:bg-primary-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
