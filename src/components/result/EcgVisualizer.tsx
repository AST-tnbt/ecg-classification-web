import Plot from "react-plotly.js"

export type Beat = {
    startTime: number
    endTime: number
    status: boolean
    label: string
    value: string
}

export type ECGSignal = {
    samplingRate: number
    values: number[]
}

type ECGChartProps = {
    // cursor: number
    signal: ECGSignal
    beats: Beat[]
    selectedBeat?: Beat
}

export function EcgVisulizer({
    // cursor,
    signal,
    beats,
    selectedBeat
}: ECGChartProps) {

    const isLockedScale = selectedBeat == undefined

    const times = signal.values.map(
        (_, i) => i / signal.samplingRate
    )

    // const chunkStartTime = cursor / signal.samplingRate

    // Highlight regions
    const shapes = beats.map(b => ({
        type: "rect",
        xref: "x",
        yref: "paper",
        x0: b.startTime,
        x1: b.endTime,
        y0: 0,
        y1: 1,
        fillcolor: b.status
            ? "rgba(2, 107, 254, 0.15)"
            : "rgba(239,68,68,0.25)",
        line: { width: 0 }
    }))

    // Zoom to selected beat
    const xRange = selectedBeat
        ? [
            selectedBeat.startTime - 0.1,
            selectedBeat.endTime + 0.1
        ]
        : undefined

    return (
        <Plot
            data={[
                {
                    x: times,
                    y: signal.values,
                    type: "scatter",
                    mode: "lines",
                    line: { width: 2, color: "#1f376fff" },
                    name: "ECG"
                }
            ]}
            layout={{
                margin: { t: 40, l: 40, r: 20, b: 40 },
                height: "100%",
                shapes,
                xaxis: {
                    title: "Time (s)",
                    dtick: 0.2, // 5 large squares = 1 second
                    gridcolor: "#fecaca",
                    minor: {
                        dtick: 0.04, // Small squares
                        gridcolor: "#fee2e2",
                    },
                    range: xRange,
                    zeroline: false,
                    ...(isLockedScale ? { scaleanchor: "y" } : {})
                },
                yaxis: {
                    title: "mV",
                    dtick: 0.5, // Standard ECG: 0.5mV per large square
                    gridcolor: "#fecaca",
                    minor: {
                        dtick: 0.1,
                        gridcolor: "#fee2e2",
                    },
                    zeroline: false
                },
                paper_bgcolor: "#fff",   // card background
                plot_bgcolor: "#f8fafc",   // ECG canvas
                transition: {
                    duration: 300,
                    easing: "cubic-in-out"
                },
            }}
            config={{
                displayModeBar: true,
                scrollZoom: true
            }}
        />
    )
}
