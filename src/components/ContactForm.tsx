'use client';

import { useState, FormEvent } from 'react';

const serviceCategories = [
  'Government & Public Works',
  'NGO & Humanitarian',
  'Corporate & ICT',
  'Logistics & Trade',
  'General Inquiry',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    serviceCategory: '',
    message: '',
    website: '', // honeypot
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, treat as spam and show success anyway
    if (formData.website) {
      setSubmitted(true);
      setFormData({ name: '', organization: '', email: '', phone: '', serviceCategory: '', message: '', website: '' });
      return;
    }

    if (!validate()) return;

    const subject = encodeURIComponent('Jombita Group – Tender / Supply Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Organization: ${formData.organization || 'N/A'}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'N/A'}\n` +
        `Service Category: ${formData.serviceCategory || 'N/A'}\n\n` +
        `Message:\n${formData.message}`
    );

    window.location.href = `mailto:jombita.ltd@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: '', organization: '', email: '', phone: '', serviceCategory: '', message: '', website: '' });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        <p className="text-green-800 font-medium">Thank you for your inquiry.</p>
        <p className="text-green-700 text-sm mt-2">
          Your message has been prepared. Your email client will open to send
          the inquiry to jombita.ltd@gmail.com. If it did not open, please
          email us directly at{' '}
          <a
            href="mailto:jombita.ltd@gmail.com"
            className="underline font-medium"
          >
            jombita.ltd@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-1">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-navy-900 mb-1">
            Organization
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-1">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-1">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceCategory" className="block text-sm font-medium text-navy-900 mb-1">
          Service Category
        </label>
        <select
          id="serviceCategory"
          value={formData.serviceCategory}
          onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
        >
          <option value="">Select a category</option>
          {serviceCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Honeypot - hidden from users and screen readers */}
      <div
        className="absolute -left-[9999px] opacity-0 pointer-events-none h-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-1">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          }`}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-navy-900 text-white font-medium rounded-lg hover:bg-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
      >
        Send Inquiry
      </button>
    </form>
  );
}
