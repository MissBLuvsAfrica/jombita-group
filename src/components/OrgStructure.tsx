interface Department {
  name: string;
  description?: string;
}

interface OrgStructureProps {
  title?: string;
  departments: Department[];
}

export default function OrgStructure({ title, departments }: OrgStructureProps) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold text-navy-900 mb-6">{title}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50 border border-slate-200 rounded-lg"
          >
            <div className="font-medium text-navy-900">{dept.name}</div>
            {dept.description && (
              <div className="mt-1 text-sm text-slate-600">{dept.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
