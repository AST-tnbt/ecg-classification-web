export default function Information() {
    return (
        <>
            {/* <!-- Primary Action --> */}
            <div
                className="bg-surface-light rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined">security</span>
                    <span className="text-xs font-semibold uppercase tracking-wider">Secure Processing</span>
                </div>
                <p className="text-sm text-slate-600">
                    Once uploaded, your raw signals will be processed using our models to classify heartbeats.
                </p>
                {/* <!-- SingleButton Reuse --> */}
                <button
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">analytics</span>
                    <span className="truncate">Start Analysis</span>
                </button>
            </div>
            {/* <!-- Info Card --> */}
            <div
                className="bg-surface-light rounded-xl border border-slate-200 p-6 shadow-sm">
                <h4 className="text-slate-900 font-bold text-lg mb-4">Requirements</h4>
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-3 items-start">
                        <span
                            className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 ">File
                                Format</span>
                            <span className="text-sm text-slate-500 ">Must be .txt or .DAT
                                with standard headers.</span>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span
                            className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900">Signal
                                Quality</span>
                            <span className="text-sm text-slate-500">Ensure minimal noise
                                artifacts for best results.</span>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span
                            className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900">Sampling
                                Rate</span>
                            <span className="text-sm text-slate-500 ">Recommended 
                                250Hz.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
