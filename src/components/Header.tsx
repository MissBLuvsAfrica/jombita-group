'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/logistics', label: 'Logistics' },
  { href: '/team', label: 'Team' },
  { href: '/clients', label: 'Clients' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-jombita-200 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Jombita Group - Home"
          >
            <Image
              src="/logo.png"
              alt="Jombita Group"
              width={120}
              height={48}
              priority
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-jombita-800 border-b-2 border-jombita-700'
                    : 'text-slate-600 hover:text-jombita-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-jombita-50 focus:outline-none focus:ring-2 focus:ring-jombita-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden border-t border-jombita-200 ${mobileOpen ? 'block' : 'hidden'}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-4 py-4 space-y-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-sm font-medium rounded-lg px-3 ${
                pathname === link.href
                  ? 'bg-jombita-100 text-jombita-900'
                  : 'text-slate-600 hover:bg-jombita-50 hover:text-jombita-800'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
