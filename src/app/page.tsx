import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Stats from '@/components/Stats';

export default function HomePage() {
  const pillars = [
    { value: 'On-Time Delivery', label: 'Reliable fulfillment to your schedule' },
    { value: 'Compliance-Ready', label: 'Procurement documentation for tenders' },
    { value: 'End-to-End Supply', label: 'Full execution from sourcing to delivery' },
  ];

  return (
    <>
      <Hero
        headline="Global Supply. Kenya Delivery. Tender-Ready Execution."
        subtext="Jombita Group is your reliable general supply and logistics partner. We connect global resources with local needs through compliant, cost-effective solutions for governments, NGOs, and corporations."
        primaryCta={{ label: 'View Capabilities', href: '/services' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />

      <Section
        title="Why Jombita Group"
        subtitle="A partner built for procurement, RFPs, and government tenders."
      >
        <Stats stats={pillars} />
      </Section>

      <Section
        className="bg-slate-50"
        title="Trusted Across Sectors"
        subtitle="We serve governments, humanitarian agencies, and corporations with the same commitment to quality and compliance."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-jombita-900 mb-2">
              Government & Public Works
            </h3>
            <p className="text-slate-600 text-sm">
              Tender-ready supply solutions for public sector projects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-jombita-900 mb-2">
              NGO & Humanitarian
            </h3>
            <p className="text-slate-600 text-sm">
              Emergency relief and development programme support.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-semibold text-jombita-900 mb-2">
              Corporate & ICT
            </h3>
            <p className="text-slate-600 text-sm">
              Office, technology, and operational supply chains.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
