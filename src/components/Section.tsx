import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  ariaLabelledby?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  id,
  className = '',
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${className}`}
      aria-labelledby={title ? ariaLabelledby ?? `${id ?? 'section'}-title` : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="max-w-3xl mb-12">
            {title && (
              <h2
                id={ariaLabelledby ?? `${id ?? 'section'}-title`}
                className="text-2xl md:text-3xl font-bold text-navy-900"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
