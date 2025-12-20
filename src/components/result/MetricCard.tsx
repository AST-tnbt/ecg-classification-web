type MetricCardProperties = {
  name: string
  icon: string
  value: string
  unit: string
  colorClass: string
}

export default function MetricCard({
    name,
    icon,
    value,
    unit,
    colorClass
}: MetricCardProperties) {
    return (
        <div
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
            <div className={`flex items-center gap-2 ${colorClass} mb-2`}>
                <span className="material-symbols-outlined text-[20px]">{icon}</span>
                <span className="text-sm font-medium uppercase tracking-wider">{name}</span>
            </div>
            <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-lg font-medium text-slate-400 mb-1">{unit}</span>
            </div>
        </div>
    )
}
