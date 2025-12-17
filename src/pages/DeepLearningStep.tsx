import { useNavigate } from "react-router"
import DLSelectionCard from "../components/deep_learning_step/DLSelectionCard"
import { toast } from "react-toastify"
import { useState } from "react"

export default function DeepLearningStep() {
    const deepLearningOptions = [
        {
            name: "Hybrid CNN-GRU",
            value: "hybrid",
            desc: "Combines spatial feature extraction with temporal memory for optimal accuracy.",
        },
        {
            name: "Temporal Convolutional Network (TCN)",
            value: "tcn",
            desc: "Advanced temporal modeling with dilated convolutions for long-history tracking.",
        },
        {
            name: "Long Short-Term Memory (LSTM)",
            value: "lstm",
            desc: "Optimized for sequential data patterns and handling long-term dependencies",
        },
        {
            name: "Convolutional Neural Network (CNN)",
            value: "cnn",
            desc: "High efficiency in feature extraction, best for detecting morphological anomalies.",
        },
        {
            name: "Multilayer Perceptron (MLP)",
            value: "mlp",
            desc: "Standard baseline classification suitable for simpler signal structures.",
        },
    ]

    const navigation = useNavigate()
    const [selectedModel, setSelectedModel] = useState<string | null>(null)

    const handleSubmitAction = () => {
        if (!selectedModel) {
            toast.error("Please select a model")
            return
        }

        console.log(`Selected model: ${selectedModel}`)
    }

    return (
        <div className="relative isolate">
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern height="100" id="ecg-pattern" patternUnits="userSpaceOnUse" width="100" x="0" y="0">
                        <path d="M0 50 L10 50 L15 20 L25 80 L35 10 L45 90 L50 50 L100 50" fill="none" stroke="currentColor" strokeWidth="1"></path>
                    </pattern>
                    <rect className="text-white" fill="url(#ecg-pattern)" height="100%" width="100%"></rect>
                </svg>
            </div>
            <div className="relative z-10 w-full max-w-[960px] flex flex-col gap-6"></div>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto layout-container pb-14">
                <div className="flex flex-col gap-2 pt-24">
                    <div className="flex items-center gap-2 mb-2">
                        <span
                            className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
                        >
                            Step 2 of 2
                        </span>
                    </div>
                    <h1
                        className="text-3xl md:text-4xl font-black tracking-tight text-text-main-light dark:text-text-main-dark">
                        Select Classification Model
                    </h1>
                    <p className="text-text-sub-light dark:text-text-sub-dark text-lg">
                        Choose the deep learning architecture for the second stage of arrhythmia detection.
                    </p>
                </div>
                <div className="lg:col-span-2 flex flex-col gap-6 mt-2">
                    {/* <!-- Radio List (Cards) --> */}
                    <div aria-labelledby="model-selection-label" className="flex flex-col gap-4" role="radiogroup">
                        {
                            deepLearningOptions.map((item, index) =>
                                <DLSelectionCard {...item}
                                    key={index}
                                    checked={selectedModel === item.value}
                                    onChange={setSelectedModel} />
                            )
                        }
                    </div>
                    {/* <!-- Button Group --> */}
                    <div className="flex justify-end gap-4 mt-4 pt-4">
                        <button
                            onClick={() => { navigation("/analyze/step-1") }}
                            className="w-full cursor-pointer sm:w-auto px-6 h-12 rounded-lg border border-transparent text-slate-500 font-bold text-base hover:bg-gray-100 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            className="cursor-pointer px-6 py-3 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-500 hover:shadow-primary/50 transition-all flex items-center gap-2"
                            onClick={() => {
                                handleSubmitAction()
                            }}
                        >
                            <span>Start Classification</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
