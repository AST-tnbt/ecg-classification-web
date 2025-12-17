import type { MLSelectionValue } from "./MLValue"

type MLSelectionCardProperties = {
    name: string
    icon: string
    value: MLSelectionValue
    desc: string
    status: string
    checked: boolean
    onChange: (value: string) => void
}
export default function MLSelectionCard({
    name,
    icon,
    value,
    desc,
    checked,
    onChange
}: MLSelectionCardProperties) {
    return (
        <label className="group cursor-pointer relative">
            <input
                className="peer sr-only"
                name="model-selection"
                type="radio"
                value={value}
                checked={checked}
                onChange={() => onChange(value)}
            />
            <div className="h-full rounded-xl border-2 border-slate-200 bg-white p-5 transition-all duration-200 peer-checked:border-primary peer-checked:bg-blue-50/50 peer-checked:shadow-lg peer-checked:shadow-primary/20 hover:border-primary/50 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="material-symbols-outlined rounded-full bg-blue-100 p-2 text-primary">{icon}</span>
                        <div className="text-primary opacity-0 peer-checked:opacity-100 transition-opacity absolute top-5 right-5">
                            <span className="material-symbols-outlined text-[24px]">check_circle</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{name}</h3>
                        <p className="text-sm text-slate-500 leading-normal">{desc}</p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <span className="material-symbols-outlined text-[16px]">info</span>
                    <span>{status}</span>
                </div>
            </div>
        </label>
    )
}
