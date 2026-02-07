import type { Metadata } from 'next';
import Section from '@/components/Section';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jombita Group company overview, mission, vision, and core values. Kenya-based general supply and logistics partner.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Reliability',
      text: 'We deliver on our commitments. Consistent performance builds trust with clients and partners.',
    },
    {
      title: 'Integrity',
      text: 'Transparent dealings, ethical procurement, and honest communication in all engagements.',
    },
    {
      title: 'Efficiency',
      text: 'Streamlined processes and lean operations to maximise value and minimise waste.',
    },
    {
      title: 'Excellence',
      text: 'ISO-aligned quality focus. We continuously improve to meet and exceed standards.',
    },
  ];

  return (
    <>
      <Section title="About Jombita Group">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600">
            Jombita Group is a Kenya-based general supply chain and logistics
            company. We specialise in connecting global resources with local
            needs, serving governments, humanitarian agencies, and corporations
            with compliant, cost-effective supply solutions.
          </p>
        </div>
      </Section>

      <Section
        className="bg-slate-50"
        title="Vision"
        subtitle="Our long-term aspiration"
      >
        <blockquote className="text-xl md:text-2xl font-medium text-navy-900 border-l-4 border-navy-600 pl-6 py-2">
          To be the world&apos;s most trusted partner in general supply, bridging
          the gap between global resources and local needs through innovation
          and integrity.
        </blockquote>
      </Section>

      <Section
        title="Mission"
        subtitle="What we do every day"
      >
        <p className="text-lg text-slate-600 max-w-3xl">
          To provide seamless, cost-effective, and high-quality supply solutions
          that empower governments, humanitarian agencies, and corporations to
          achieve their operational goals.
        </p>
      </Section>

      <Section
        className="bg-slate-50"
        title="Core Values"
        subtitle="The principles that guide us"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <Card key={i} title={v.title}>
              <p className="text-slate-600">{v.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
