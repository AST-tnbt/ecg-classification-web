import Plot from "react-plotly.js"

type Beat = {
    startTime: number
    endTime: number
    status: boolean
}

type ECGSignal = {
    samplingRate: number
    values: number[]
}

type ECGChartProps = {
    signal: ECGSignal
    beats: Beat[]
    selectedBeat?: Beat
}

export function EcgVisulizer({
    signal,
    beats,
    selectedBeat
}: ECGChartProps) {

    const times = signal.values.map(
        (_, i) => i / signal.samplingRate
    )

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
            ? "rgba(34, 132, 197, 0.15)"
            : "rgba(239,68,68,0.25)",
        line: { width: 0 }
    }))

    // Zoom to selected beat
    const xRange = selectedBeat
        ? [
            selectedBeat.startTime - 0.5,
            selectedBeat.endTime + 0.5
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
                margin: { t: 40, l: 20, r: 20, b: 40 },
                height: "100%",
                shapes,
                xaxis: {
                    title: "Time (s)",
                    dtick: 0.4,
                    gridcolor: "#fecaca",
                    zeroline: false,
                    range: xRange
                },
                yaxis: {
                    title: "mV",
                    dtick: 1,
                    gridcolor: "#fecaca",
                    fixedRange: false,
                    zeroline: false
                },
                paper_bgcolor: "#fff",   // card background
                plot_bgcolor: "#f8fafc",   // ECG canvas
            }}
            config={{
                displayModeBar: true,
                scrollZoom: true
            }}
        />
    )
}
