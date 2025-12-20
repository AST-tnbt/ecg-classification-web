import { useState } from "react"
import LabelDetectedCard from "../components/result/LabelDetectedCard"
import MetricCard from "../components/result/MetricCard"
import { EcgVisulizer } from "../components/result/EcgVisualizer"

export default function Result() {
    const metrics = [
        {
            name: "Avg Heart Rate",
            icon: "monitor_heart",
            value: "72",
            colorClass: "text-slate-500",
            unit: "BPM"
        },
        {
            name: "Total Beats",
            icon: "ecg_heart",
            value: "64",
            colorClass: "text-slate-500",
            unit: ""
        },
        {
            name: "Anomalies Detected",
            icon: "warning",
            value: "4",
            colorClass: "text-red-500",
            unit: "Detected"
        },
        {
            name: "Total Duration",
            icon: "timer",
            value: "72s",
            colorClass: "text-slate-500",
            unit: ""
        },
    ]

    // mock
    const mockECGSignal = {
        samplingRate: 360,
        values: Array.from({ length: 3600 }, (_, i) => {
            const t = i / 360
            // fake ECG-ish waveform
            return (
            0.8 * Math.sin(2 * Math.PI * 1.2 * t) +   // base rhythm
            0.15 * Math.sin(2 * Math.PI * 20 * t) +  // QRS-like spike
            (Math.random() - 0.5) * 0.05             // noise
            )
        })
    }
    const mockDetectedBeats = [
        {
            status: true,
            startTime: 1.8,
            endTime: 2.1,
            label: "N",
            value: "Normal"
        },
        {
            status: false,
            startTime: 3.2,
            endTime: 3.5,
            label: "PVC",
            value: "Premature Ventricular Contraction"
        },
        {
            status: true,
            startTime: 4.9,
            endTime: 5.3,
            label: "N",
            value: "Normal"
        },
        {
            status: false,
            startTime: 6.4,
            endTime: 6.9,
            label: "AP",
            value: "Atrial Premature Beat"
        },
        {
            status: true,
            startTime: 8.1,
            endTime: 8.4,
            label: "N",
            value: "Normal"
        }
    ]
    // end mock

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    return (
        <main className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto layout-container pb-14">
            <div className="flex flex-col gap-2 pt-24">
                    <h1
                        className="text-3xl md:text-4xl font-black tracking-tight text-text-main-light dark:text-text-main-dark">
                        Classification Result
                    </h1>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-8">
                {
                    metrics.map((item, index) =>
                        <MetricCard key={index} {...item} />
                    )
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[500px]">
                {/* <!-- Chart box --> */}
                <div
                    className="pt-6 lg:col-span-3 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative"
                >
                    <EcgVisulizer 
                        signal={mockECGSignal}
                        beats={mockDetectedBeats}
                        selectedBeat={
                            selectedIndex !== null
                            ? mockDetectedBeats[selectedIndex]
                            : undefined
                        }
                    />
                </div>
                {/* <!-- Sidebar (Right) --> */}
                <div className="lg:col-span-1 flex flex-col h-full min-h-[400px] ">
                    <div
                        className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden">
                        {/* <!-- Sidebar Header --> */}
                        <div
                            className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold text-slate-900">Detected Beats</h3>
                        </div>
                        {/* <!-- List Content --> */}
                        <div className="overflow-y-auto custom-scrollbar flex-1 p-3 space-y-3">
                            {
                                mockDetectedBeats.map((item, index) =>
                                    <LabelDetectedCard
                                        key={index}
                                        {...item}
                                        active={selectedIndex === index}
                                        onClick={() => setSelectedIndex(index)}
                                    />
                                )
                            }
                        </div>
                        {/* <!-- Sidebar Footer --> */}
                        <div
                            className="p-2 border-t border-slate-50 bg-white text-center"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
