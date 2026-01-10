import { useEffect, useRef, useState } from "react"

type InformationProps = {
    onClick: () => void
}
export default function Information({ onClick }: InformationProps) {
    const [isHighlighted, setIsHighlighted] = useState(true)
    const requirementsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Auto-dismiss highlight after 4 seconds
        const timer = setTimeout(() => {
            setIsHighlighted(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Scroll to requirements section on mobile devices
        const isMobile = window.innerWidth < 768 // Tailwind's md breakpoint
        
        if (isMobile && requirementsRef.current) {
            // Small delay to ensure DOM is fully rendered
            setTimeout(() => {
                requirementsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }, 300)
        }
    }, [])

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
                    onClick={() => onClick()}
                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined">analytics</span>
                    <span className="truncate">Start Analysis</span>
                </button>
            </div>
            {/* <!-- Info Card --> */}
            <div
                ref={requirementsRef}
                className={`bg-surface-light rounded-xl border p-6 shadow-sm transition-all duration-500 relative overflow-hidden ${
                    isHighlighted 
                        ? 'border-primary border-2 shadow-2xl shadow-primary/40 animate-highlight-glow scale-105' 
                        : 'border-slate-200'
                }`}>
                {/* Animated gradient background */}
                {isHighlighted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-primary/5 to-blue-50/50 animate-shimmer pointer-events-none" />
                )}
                
                {/* Attention Badge */}
                {isHighlighted && (
                    <div className="absolute mt-2 mr-2 -top-0 -right-0 flex items-center gap-1 bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full shadow-lg animate-bounce-gentle">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        <span className="text-xs font-bold">Read This!</span>
                    </div>
                )}
                
                <h4 className="text-slate-900 font-bold text-lg mb-4 relative z-10">Requirements</h4>
                <ul className="flex flex-col gap-4 relative z-10">
                    <li className="flex gap-3 items-start">
                        <span
                            className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 ">Sample Test Here!</span>
                            <span className="text-sm text-slate-500 ">Get .hea file and .dat file from <a href="https://www.physionet.org/content/chfdb/1.0.0/" target="_blank" className="text-primary hover:underline font-bold">PhysioNet</a>.</span>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span
                            className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 ">File
                                Format</span>
                            <span className="text-sm text-slate-500 ">Must be ".hea" or ".dat"
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
