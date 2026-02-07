import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-jombita-800 text-white"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Jombita Group"
                width={100}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Kenya-based general supply chain and logistics company. Tender-ready
              procurement, compliance-focused, and end-to-end supply execution for
              governments, NGOs, and corporations.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>UpperHill, Nairobi</li>
              <li>
                <a
                  href="mailto:jombita.ltd@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jombita.ltd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254714995966"
                  className="hover:text-white transition-colors"
                >
                  0714995966
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-jombita-700">
          <p className="text-center text-white/80 text-sm">
            &copy; {currentYear} Jombita Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
