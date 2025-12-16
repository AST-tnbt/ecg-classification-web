import MLSelectionCard from "../components/machine_learning_step/MLSelectionCard"
import { MLSelectionValue } from "../components/machine_learning_step/MLValue"

export default function MachineLearningStep() {
    const ModelOptions = [
        {
            name: "K-Nearest Neighbors",
            icon: "grid_view",
            value: MLSelectionValue.KNN,
            desc: "Best for pattern recognition based on feature similarity in localized datasets.",
            status: "Simple & Effective"
        },
        {
            name: "Support Vector Machine",
            icon: "linear_scale",
            value: MLSelectionValue.SVM,
            desc: "Optimal for high-dimensional margin separation and complex decision boundaries.",
            status: "High Accuracy"
        },
        {
            name: "Random Forest",
            icon: "account_tree",
            value: MLSelectionValue.KNN,
            desc: "Ensemble learning method for robust classification against overfitting.",
            status: "Robust & Reliable"
        },
    ]
    return (
        <div className="relative isolate">
            {/* <!-- Background --> */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern height="100" id="ecg-pattern" patternUnits="userSpaceOnUse" width="100" x="0" y="0">
                        <path d="M0 50 L10 50 L15 20 L25 80 L35 10 L45 90 L50 50 L100 50" fill="none" stroke="currentColor" stroke-width="1"></path>
                    </pattern>
                    <rect className="text-white" fill="url(#ecg-pattern)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="relative z-10 w-full max-w-[960px] flex flex-col gap-6"></div>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto layout-container pb-14">
                {/* <!-- Page Heading & Intro --> */}
                <div className="flex flex-col gap-3  pt-24">
                    <h1 className="text-slate-900 text-xl md:text-2xl font-black leading-tight tracking-[-0.033em]">Step 1</h1>
                    <h1 className="text-slate-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Select Classification Model</h1>
                    <p className="text-slate-500 text-base md:text-lg font-normal leading-relaxed max-w-2xl">
                        Choose an algorithm to classify heartbeat arrhythmias from the raw ECG signal. The selected model will be used for the subsequent feature extraction and analysis.
                    </p>
                </div>
                <form className="mt-4 grid gap-4 md:grid-cols-3">
                    {
                        ModelOptions.map((item, index) =>
                            <MLSelectionCard key={index} {...item} />
                        )
                    }
                </form>
                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8 pt-6">
                    <button className="w-full cursor-pointer sm:w-auto px-6 h-12 rounded-lg border border-transparent text-slate-500 font-bold text-base hover:bg-gray-100 transition-colors">
                        Cancel Analysis
                    </button>
                    <button className="w-full cursor-pointer sm:w-auto group flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary hover:bg-blue-500 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/20">
                        <span>Continue</span>
                        <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
