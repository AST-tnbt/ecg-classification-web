import { useEffect, useState } from "react"
import LabelDetectedCard from "../components/result/LabelDetectedCard"
import MetricCard from "../components/result/MetricCard"
import { EcgVisulizer, type Beat } from "../components/result/EcgVisualizer"
import { useAnalyzeData } from "../context/AnalyzeDataContext"
import { useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import { resultApi } from "../api/AnalyzeApi"

export default function Result() {
    const navigation = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { state } = useAnalyzeData()

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

    const [signal, setSignal] = useState<number[]>([])
    const [beats, setBeats] = useState<Beat[]>([])
    const [cursor, setCursor] = useState(0)
    const [hasMore, setHasMore] = useState(true)

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    useEffect(() => {
        if (!id || !hasMore) return

        const fetchChunk = async () => {
            try {
                const res = await resultApi(id, cursor)

                setSignal([...res.signal])
                setBeats([...res.heartbeats])

                setCursor(res.next_cursor)
                setHasMore(res.has_more)
                console.log(res.heartbeats)
                console.log(res.next_cursor)
                console.log(res.signal)
            } catch (err) {
                console.error("Polling failed", err)
            }
        }

        fetchChunk()
    }, [id])

    if (!id) {
        toast.error("Invalid id")
        navigation("/")
    }
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
                        signal={{
                            samplingRate: state.samplingRate ?? 250,
                            values: signal
                        }}
                        beats={beats}
                        selectedBeat={
                            selectedIndex !== null
                            ? beats[selectedIndex]
                            : beats[1]
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
                            {beats.map((beat, i) => (
                                <LabelDetectedCard
                                    key={i}
                                    {...beat}
                                    active={selectedIndex === i}
                                    onClick={() => setSelectedIndex(i)}
                                />
                            ))}
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
