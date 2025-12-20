type LabelDetectedCardProperties = {
    status: boolean
    label: string
    startTime: number
    endTime: number
    value: string
    active: boolean
    onClick: () => void
}

export default function LabelDetectedCard({
    status,
    value,
    label,
    startTime,
    endTime,
    active,
    onClick
}: LabelDetectedCardProperties) {
    return (
        <div
            onClick={onClick}
            className={`
                group cursor-pointer p-3 rounded-xl border transition-all relative overflow-hidden shadow
                ${active
                    ? "border-primary/30 bg-primary/5"
                    : "border-transparent bg-slate-50 hover:bg-slate-100"
                }`
            }
        >
            {active && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            )}
            <div className="flex justify-between items-start mb-1">
                <span
                    className={`text-xs font-bold ${status ? "text-primary" : "text-red-500"} uppercase tracking-wider bg-white px-1.5 py-0.5 rounded shadow-sm`}>{status ? "Normal" : "Abnormal"}</span>
                <span className="text-xs font-mono text-slate-500">{startTime}</span>
            </div>
            <h4
                className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors"
            >
                {value}
            </h4>
            <div className="flex items-center gap-2 mt-2">
                <span
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md"
                >
                    {label}
                </span>
                <button
                    className={`ml-auto text-primary transition-opacity
                        ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                >
                    <span className="material-symbols-outlined text-[20px]">play_circle</span>
                </button>
            </div>
        </div>
    )
}
