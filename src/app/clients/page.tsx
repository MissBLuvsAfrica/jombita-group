import type { Metadata } from 'next';
import Section from '@/components/Section';
import LogoGrid from '@/components/LogoGrid';

export const metadata: Metadata = {
  title: 'Clients',
  description:
    'Jombita Group clients and partners. Uifu Platform, Phoenix Psychotherapy, SCMF Advertising Group, KaribuPay.',
};

const clients = [
  'Uifu Platform',
  'Phoenix Psychotherapy',
  'SCMF Advertising Group',
  'KaribuPay',
];

export default function ClientsPage() {
  return (
    <Section
      title="Clients & Partners"
      subtitle="Below are some of the clients and partners we have serviced, among many others."
    >
      <LogoGrid items={clients} />
    </Section>
  );
}
