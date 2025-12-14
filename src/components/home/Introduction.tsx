export default function Introduction() {
  return (
    <main className="pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* <!-- Background Decoration --> */}
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none">
          </div>
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none">
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* <!-- Left Content --> */}
            <div className="lg:col-span-6 text-center lg:text-left z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-semibold mb-6 border border-blue-200 ">
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Beta version
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                AI-Powered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">ECG
                  Classification</span>
              </h1>
              <p
                className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Detect arrhythmias and classify heartbeats from raw signal data with clinical-grade precision.
                Upload your ECG signals and get instant, detailed analysis powered by deep learning.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-lg font-semibold shadow-lg shadow-primary/30 hover:bg-blue-600 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <span className="material-icons-outlined">upload_file</span>
                  Start Analysis
                </button>
                <button
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <span className="material-icons-outlined">play_circle</span>
                  Watch Demo
                </button>
              </div>
            </div>
            {/* <!-- Right Visual --> */}
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
              {/* <!-- Glass Card --> */}
              <div
                className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-2xl">
                {/* <!-- Simulated ECG Header --> */}
                <div
                  className="flex items-center justify-between mb-6 border-b border-slate-200/50 pb-4">
                  <div>
                    <h3 className="font-bold text-lg">Patient_Data.csv</h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Analysis result</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs font-bold">
                      Success
                    </span>
                  </div>
                </div>
                {/* <!-- ECG Chart Area (Simulated) --> */}
                <div
                  className="relative h-48 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden mb-6 flex items-center justify-center">
                  {/* <!-- SVG Pulse Line --> */}
                  <svg className="w-full h-32 stroke-primary" fill="none" viewBox="0 0 500 100"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 50 L20 50 L30 50 L40 40 L50 60 L60 50 L100 50 L110 30 L120 80 L130 10 L140 90 L150 50 L200 50 L210 50 L220 50 L230 50 L240 50 L250 50 L260 45 L270 55 L280 50 L300 50 L310 20 L320 85 L330 15 L340 95 L350 50 L500 50"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                  {/* <!-- Scanning Overlay --> */}
                  <div
                    className="absolute inset-y-0 w-1 bg-primary/50 shadow-[0_0_15px_rgba(19,91,236,0.5)] left-1/2 animate-pulse">
                  </div>
                  {/* <!-- Tooltip Mockup --> */}
                  <div
                    className="absolute top-8 left-[65%] bg-slate-900 text-white text-xs px-2 py-1 rounded shadow-lg transform -translate-x-1/2">
                    Premature Ventricular Contraction (PVC)
                    <div
                      className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-slate-900">
                    </div>
                  </div>
                </div>
                {/* <!-- Stats Row --> */}
                <div className="grid grid-cols-3 gap-4">
                  <div
                    className="p-3 rounded-lg bg-white border border-slate-100 text-center">
                    <p className="text-xs text-slate-500 mb-1">Heart Rate</p>
                    <p className="text-lg font-bold text-slate-800">72 <span
                      className="text-xs font-normal text-slate-400">BPM</span></p>
                  </div>
                  <div
                    className="p-3 rounded-lg bg-white border border-slate-100 text-center">
                    <p className="text-xs text-slate-500 mb-1">Duration</p>
                    <p className="text-lg font-bold text-slate-800 ">10:00 <span
                      className="text-xs font-normal text-slate-400">min</span></p>
                  </div>
                  <div
                    className="p-3 rounded-lg bg-white border border-slate-100 text-center">
                    <p className="text-xs text-slate-500 mb-1">Anomalies</p>
                    <p className="text-lg font-bold text-red-500">2 <span
                      className="text-xs font-normal text-slate-400">detected</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}
