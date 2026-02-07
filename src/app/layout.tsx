import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OrganizationSchema from '@/components/OrganizationSchema';

export const metadata: Metadata = {
  title: {
    default: 'Jombita Group | General Supply & Logistics | Kenya',
    template: '%s | Jombita Group',
  },
  description:
    'Jombita Group is a Kenya-based general supply chain and logistics company. Tender-ready procurement, end-to-end supply execution, and compliance-ready solutions for governments, NGOs, and corporations.',
  keywords: [
    'supply chain Kenya',
    'logistics Kenya',
    'procurement tender',
    'Jombita Group',
    'general supply',
    'Nairobi logistics',
  ],
  authors: [{ name: 'Jombita Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
