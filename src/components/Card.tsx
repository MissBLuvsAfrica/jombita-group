import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Card({ children, title, className = '' }: CardProps) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${className}`}
    >
      {title && (
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h3 className="text-lg font-semibold text-jombita-900">{title}</h3>
        </div>
      )}
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}
