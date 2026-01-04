import { useEffect, useState } from "react"
import LabelDetectedCard from "../components/result/LabelDetectedCard"
import MetricCard from "../components/result/MetricCard"
import { EcgVisulizer, type Beat } from "../components/result/EcgVisualizer"
import { useAnalyzeData } from "../context/AnalyzeDataContext"
import { useLocation, useNavigate, useParams } from "react-router"
import { toast } from "react-toastify"
import { resultApi } from "../api/AnalyzeApi"
import ProcessingModal from "../components/loading/ProcessingModal"

export default function Result() {
    const navigation = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { state } = useAnalyzeData()
    const [detected, setDetected] = useState(0)
    const [duration, setDuration] = useState(0)
    const [signal, setSignal] = useState<number[]>([])
    const [beats, setBeats] = useState<Beat[]>([])
    const location = useLocation()
    const samplingRate = location.state?.samplingRate
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const [cursor, setCursor] = useState<number>(0)
    const [nextCursor, setNextCursor] = useState<number>(0)
    const [cursorStack, setCursorStack] = useState<number[]>([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)


    const metrics = [
        {
            name: "Sampling Rate",
            icon: "monitor_heart",
            value: samplingRate ? `${samplingRate}` : "—",
            colorClass: "text-slate-500",
            unit: ""
        },
        {
            name: "Beats per Page",
            icon: "ecg_heart",
            value: "10",
            colorClass: "text-slate-500",
            unit: ""
        },
        {
            name: "Anomalies Detected",
            icon: "warning",
            value: `${detected}`,
            colorClass: "text-red-500",
            unit: "Detected"
        },
        {
            name: "Duration",
            icon: "timer",
            value: `${duration.toFixed(3)}s`,
            colorClass: "text-slate-500",
            unit: ""
        },
    ]

    const fetchChunk = async (cursorValue: number) => {
        if (!id) return

        try {
            setLoading(true)
            const res = await resultApi(id, cursorValue)

            setSignal(res.signal)
            setBeats(res.heartbeats)
            setHasMore(res.has_more)
            setNextCursor(res.next_cursor)
            setCursor(cursorValue)

            setDetected(
                res.heartbeats.filter(b => b.status === false).length
            )

            if (res.heartbeats.length > 0) {
                setDuration(
                    res.heartbeats.at(-1)!.endTime -
                    res.heartbeats[0].startTime
                )
            }

            setSelectedIndex(null)
        } finally {
            setLoading(false)
        }
    }

    const getNextChunk = async () => {
        if (!hasMore || loading) return
        setCursorStack(prev => [...prev, cursor])

        fetchChunk(nextCursor)
    }

    const getPrevChunk = async () => {
        if (cursorStack.length === 0 || loading) return
        setCursorStack(prev => {
            const newStack = prev.slice(0, -1)
            const prevCursor = prev[prev.length - 1]

            fetchChunk(prevCursor)
            return newStack
        })
    }

    useEffect(() => {
        if (!id) return
        fetchChunk(0)
    }, [id])

    if (!id) {
        toast.error("Invalid id")
        navigation("/")
    }
    return (
        <>
            {
                loading && 
                <ProcessingModal 
                    stepDone="Pre-processed"
                    stepProcessing="Classifying"
                />
            }
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
                            cursor={cursor}
                            signal={{
                                samplingRate: state.samplingRate ?? 250,
                                values: signal
                            }}
                            beats={beats}
                            selectedBeat={
                                selectedIndex !== null
                                    ? beats[selectedIndex]
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
                <div className="flex mt-4 gap-3">
                    <button
                        className="cursor-pointer px-6 py-3 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-500 hover:shadow-primary/50 transition-all flex items-center gap-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:bg-slate-300 disabled:cursor-not-allowed"
                        disabled={cursorStack.length === 0 || loading}
                        onClick={getPrevChunk}
                    >
                        <span className="material-symbols-outlined transition-transform">arrow_back</span>
                        <span>Prev</span>
                    </button>
                    <button
                        className="cursor-pointer px-6 py-3 h-12 rounded-lg bg-primary text-white font-bold shadow-lg shadow-primary/30 hover:bg-blue-500 hover:shadow-primary/50 transition-all flex items-center gap-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:bg-slate-300 disabled:cursor-not-allowed"
                        disabled={!hasMore || loading}
                        onClick={getNextChunk}
                    >
                        <span>Next</span>
                        <span className="material-symbols-outlined transition-transform">arrow_forward</span>
                    </button>
                </div>
            </main>
        </>
    )
}
