import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Jombita Group scope of supplies and sector coverage. Government, NGO, corporate, and logistics services.',
};

const summaryTable = [
  { sector: 'Government & Public Works', scope: 'Public sector procurement, tender execution' },
  { sector: 'NGO & Humanitarian', scope: 'Relief supplies, programme support' },
  { sector: 'Corporate & ICT', scope: 'Office, technology, operational supplies' },
  { sector: 'Logistics & Trade', scope: 'Freight, warehousing, distribution' },
];

const sectorCards = [
  {
    title: 'Healthcare & Medical Supplies',
    description: 'Medical equipment, consumables, and healthcare programme support.',
  },
  {
    title: 'ICT, Electronics & Office Automation',
    description: 'Computers, office equipment, and technology solutions.',
  },
  {
    title: 'Agriculture & Livestock Supplies',
    description: 'Agricultural inputs, livestock equipment, and agribusiness support.',
  },
  {
    title: 'Infrastructure, Construction & Water',
    description: 'Construction materials, water systems, and infrastructure projects.',
  },
  {
    title: 'Energy & Renewable Solutions',
    description: 'Power equipment, renewable energy, and energy access solutions.',
  },
  {
    title: 'Humanitarian & Emergency Relief',
    description: 'Emergency kits, relief supplies, and rapid deployment support.',
  },
  {
    title: 'Hospitality, Textiles & Uniforms',
    description: 'Uniforms, textiles, and hospitality sector supplies.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section title="Scope of Supplies" subtitle="Sector coverage and service categories">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-navy-900"
                >
                  Sector
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-navy-900"
                >
                  Scope
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {summaryTable.map((row, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 text-sm font-medium text-navy-800">
                    {row.sector}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{row.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        className="bg-slate-50"
        title="Detailed Sector Coverage"
        subtitle="Supplies and solutions by category"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorCards.map((card, i) => (
            <Card key={i} title={card.title}>
              <p className="text-slate-600">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
