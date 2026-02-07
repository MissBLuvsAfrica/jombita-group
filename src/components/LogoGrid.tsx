interface LogoGridProps {
  items: string[];
  preamble?: string;
}

export default function LogoGrid({ items, preamble }: LogoGridProps) {
  return (
    <div>
      {preamble && (
        <p className="text-slate-600 mb-8 max-w-2xl">{preamble}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((name, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[100px]"
          >
            <span className="font-semibold text-navy-800 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
