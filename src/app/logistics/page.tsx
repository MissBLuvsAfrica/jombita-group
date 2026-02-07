import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Logistics',
  description:
    'Jombita Group hybrid logistics model. Hub-and-spoke warehousing, Kenya distribution, and end-to-end delivery visibility.',
};

const logisticsPoints = [
  {
    title: 'Hub-and-Spoke Warehousing',
    description:
      'Centralised hubs with strategic distribution points enable efficient stock management and rapid dispatch across Kenya and beyond.',
  },
  {
    title: 'Kenya Distribution Network',
    description:
      'Distribution to counties and remote sites throughout Kenya. We reach urban centres and rural locations with consistent service.',
  },
  {
    title: 'International Sourcing & Freight',
    description:
      'Coordination of international sourcing and freight to bring global products to local markets. We manage suppliers and shipping to ensure on-time arrival.',
  },
  {
    title: 'End-to-End Delivery Visibility',
    description:
      'Clear tracking from order to delivery. Clients receive updates on sourcing, transit, and final handover for full accountability.',
  },
];

export default function LogisticsPage() {
  return (
    <>
      <Section title="Logistics & Delivery Model" subtitle="How we move goods from source to site">
        <p className="text-lg text-slate-600 max-w-3xl mb-12">
          Jombita Group operates a hybrid logistics model designed for
          flexibility and reliability. We combine warehousing, distribution, and
          freight coordination to deliver end-to-end supply execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logisticsPoints.map((point, i) => (
            <Card key={i} title={point.title}>
              <p className="text-slate-600">{point.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
