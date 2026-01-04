type ProcessingModalProps = {
    title?: string
    description?: string
    stepDone?: string
    stepProcessing?: string
}
export default function ProcessingModal({
    title = "Processing ECG signals...",
    description = "This process may take a moment. Please wait some minutes.",
    stepDone = "Initialized",
    stepProcessing = "Extracting heartbeats"
}: ProcessingModalProps) {
    return (
        <div className="bg-background-light font-display text-[#111418] relative overflow-hidden">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity">
                <div aria-labelledby="modal-title" aria-modal="true" className="relative w-full max-w-[440px] transform overflow-hidden rounded-xl bg-white p-8 text-center shadow-2xl transition-all border border-slate-100" role="dialog">
                    <div className="flex flex-col items-center justify-center gap-6">
                        {/* */}
                        <div className="relative flex h-20 w-20 items-center justify-center">
                            <div className="absolute h-full w-full rounded-full border-4 border-primary/20"></div>
                            <div className="absolute h-full w-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                            <span className="material-symbols-outlined text-3xl text-primary">ecg_heart</span>
                        </div>
                        {/* */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold leading-tight text-slate-900" id="modal-title">
                                {title}
                            </h3>
                            <p className="text-base text-slate-500">
                                {description}
                            </p>
                        </div>
                        {/* */}
                        <div className="mt-2 flex w-full flex-col gap-3 rounded-lg bg-background-light p-4 text-left">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                                <span className="text-sm font-medium text-slate-700">{stepDone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-5 w-5 items-center justify-center">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-ping"></div>
                                </div>
                                <span className="text-sm font-medium text-slate-900">{stepProcessing}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}