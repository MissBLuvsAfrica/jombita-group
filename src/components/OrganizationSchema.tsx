export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Jombita Group',
    url: 'https://jombitagroup.com',
    logo: 'https://jombitagroup.com/logo.png',
    description:
      'Kenya-based general supply chain and logistics company providing tender-ready procurement and end-to-end supply solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'UpperHill',
      addressRegion: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jombita.ltd@gmail.com',
      telephone: '+254714995966',
      contactType: 'customer service',
      areaServed: 'KE',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
