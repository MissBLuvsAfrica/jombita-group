import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Compliance',
  description:
    'Jombita Group compliance, stakeholders, HSE policy, and ethics. Tender readiness and anti-bribery alignment.',
};

export default function CompliancePage() {
  const ethicsItems = [
    {
      title: 'Tender Readiness',
      content: (
        <p>
          We maintain documentation and processes aligned with public and
          private sector tender requirements. Our procurement and delivery
          practices support transparent, auditable supply chains.
        </p>
      ),
    },
    {
      title: 'Compliance & Governance',
      content: (
        <p>
          Governance structures support accountable decision-making and
          adherence to applicable laws and regulations in Kenya and
          internationally.
        </p>
      ),
    },
    {
      title: 'Stakeholders',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Government:</strong> Public sector procurement and tender compliance</li>
          <li><strong>Corporate Clients:</strong> Private sector supply chain requirements</li>
          <li><strong>Small & Medium Enterprises:</strong> SME supply and partnership support</li>
        </ul>
      ),
    },
    {
      title: 'Ethics & Anti-Bribery',
      content: (
        <div className="space-y-4">
          <p>
            Jombita Group is committed to ethical business conduct. We align
            with Kenya ethics standards and applicable anti-bribery laws,
            including expectations under the U.S. Foreign Corrupt Practices Act
            (FCPA) for international engagements. We do not tolerate bribery or
            corruption in any form.
          </p>
        </div>
      ),
    },
    {
      title: 'HSE Policy',
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Sustainability:</strong> Environmental responsibility in sourcing and operations</li>
          <li><strong>Safe Sourcing:</strong> Procurement from suppliers that meet safety standards</li>
          <li><strong>Responsible Logistics:</strong> Safe handling, storage, and delivery of goods</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Section title="Compliance, Stakeholders, HSE & Ethics">
        <p className="text-lg text-slate-600 max-w-3xl mb-12">
          Jombita Group maintains high standards of compliance, governance, and
          ethics to support tender readiness and long-term partnerships.
        </p>

        <Accordion items={ethicsItems} />
      </Section>
    </>
  );
}
