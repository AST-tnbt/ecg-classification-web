type DLSelectionCardProperties = {
  name: string
  value: string
  desc: string
  checked: boolean
  onChange: (value: string) => void
}

export default function DLSelectionCard({
  name,
  value,
  desc,
  checked,
  onChange,
}: DLSelectionCardProperties) {
  return (
    <label
      className="group relative flex items-start gap-4 p-5 rounded-xl border-2
      border-slate-200 cursor-pointer transition-all duration-200 bg-white
      hover:border-primary/50 hover:bg-primary/5
      peer-checked:border-primary"
    >
      <input
        className="peer sr-only"
        name="model_selection"
        type="radio"
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />

      <div className="mt-1 size-5 rounded-full border-2 border-gray-300 flex items-center justify-center
        peer-checked:bg-primary peer-checked:border-primary">
        <div className="size-2.5 rounded-full bg-transparent peer-checked:bg-white" />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-base font-bold text-text-main-light">
          {name}
        </span>
        <p className="text-sm text-text-sub-light leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Active ring */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-primary opacity-0
        pointer-events-none peer-checked:opacity-100 transition-opacity" />
    </label>
  )
}
