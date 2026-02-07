interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white border border-slate-200 rounded-lg shadow-sm"
        >
          <div className="text-2xl md:text-3xl font-bold text-navy-900">
            {stat.value}
          </div>
          <div className="mt-2 text-sm font-medium text-slate-600">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
