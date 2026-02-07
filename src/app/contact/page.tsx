import type { Metadata } from 'next';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Jombita Group. Office: UpperHill, Nairobi. Email: jombita.ltd@gmail.com. Phone: 0714995966.',
};

export default function ContactPage() {
  return (
    <>
      <Section title="Contact Us" subtitle="Reach out for tenders, procurement, and supply inquiries">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-jombita-900 mb-4">
              Office & Contact Details
            </h3>
            <ul className="space-y-4 text-slate-600">
              <li>
                <strong className="text-jombita-900">Office Location:</strong>{' '}
                UpperHill, Nairobi
              </li>
              <li>
                <strong className="text-jombita-900">Email:</strong>{' '}
                <a
                  href="mailto:jombita.ltd@gmail.com"
                  className="text-jombita-700 hover:text-jombita-900 underline"
                >
                  jombita.ltd@gmail.com
                </a>
              </li>
              <li>
                <strong className="text-jombita-900">Phone:</strong>{' '}
                <a
                  href="tel:+254714995966"
                  className="text-jombita-700 hover:text-jombita-900 underline"
                >
                  0714995966
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-jombita-900 mb-4">
              Send an Inquiry
            </h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
