'use client';

import { ReactNode, useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        type="button"
        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-inset"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-navy-900">{title}</span>
        <svg
          className={`w-5 h-5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/50">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: ReactNode; defaultOpen?: boolean }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          defaultOpen={item.defaultOpen}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
