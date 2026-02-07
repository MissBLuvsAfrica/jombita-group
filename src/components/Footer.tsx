import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-navy-900 text-navy-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Jombita Group
            </h3>
            <p className="text-navy-200 text-sm leading-relaxed">
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
                  className="text-navy-200 hover:text-white text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-navy-200 hover:text-white text-sm transition-colors"
                >
                  Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-200 hover:text-white text-sm transition-colors"
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
            <ul className="space-y-2 text-sm text-navy-200">
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

        <div className="mt-10 pt-8 border-t border-navy-700">
          <p className="text-center text-navy-300 text-sm">
            &copy; {currentYear} Jombita Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
