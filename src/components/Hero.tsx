import Link from 'next/link';

interface HeroProps {
  headline: string;
  subtext?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      className="relative bg-navy-900 text-white py-20 md:py-28"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="hero-headline"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            {headline}
          </h1>
          {subtext && (
            <p className="mt-6 text-lg md:text-xl text-navy-200">
              {subtext}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-navy-900 rounded-lg hover:bg-navy-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-navy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy-900"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
