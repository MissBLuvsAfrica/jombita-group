import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';
import OrgStructure from '@/components/OrgStructure';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Jombita Group leadership and company structure. CEO Michael Owino and organisational departments.',
};

const departments = [
  { name: 'Board of Directors', description: 'Strategic oversight and governance' },
  { name: 'Executive Management', description: 'Day-to-day leadership and decisions' },
  { name: 'Procurement & Sourcing', description: 'Supplier engagement and sourcing' },
  { name: 'Logistics & Operations', description: 'Warehousing, delivery, and execution' },
  { name: 'Compliance & Legal', description: 'Tender compliance and legal matters' },
  { name: 'Quality Assurance', description: 'Standards and quality control' },
];

export default function TeamPage() {
  return (
    <>
      <Section title="Leadership">
        <Card title="CEO: Michael Owino">
          <p className="text-slate-600">
            Michael Owino leads Jombita Group as Chief Executive Officer. Under
            his leadership, the company delivers general supply and logistics
            solutions to governments, NGOs, and corporations across Kenya and
            the wider region.
          </p>
        </Card>
      </Section>

      <Section
        className="bg-slate-50"
        title="Company Structure"
        subtitle="Organisational departments and functions"
      >
        <OrgStructure departments={departments} />
      </Section>
    </>
  );
}
