
import doctorImg from "../../assets/doctor.png";
export default function Guide() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* <!-- Steps --> */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Seamless Workflow</h3>
                        <p className="text-slate-500">From raw data to actionable insights in three
                            simple steps.</p>
                    </div>
                    <div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
                        {/* <!-- Step 1 --> */}
                        <div className="relative">
                            <div
                                className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-background-light">
                                1</div>
                            <h4 className="text-xl font-bold mb-2">Upload Signal Data</h4>
                            <p className="text-slate-500">Drag &amp; drop your ECG recordings (.dat and .hea
                                format supported). We secure your data locally before processing.</p>
                        </div>
                        {/* <!-- Step 2 --> */}
                        <div className="relative ">
                            <div
                                className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-background-light">
                                2</div>
                            <h4 className="text-xl font-bold mb-2">AI Processing</h4>
                            <p className="text-slate-500">Our models denoises the signal, segments
                                heartbeats, and classifies each heartbeat.</p>
                        </div>
                        {/* <!-- Step 3 --> */}
                        <div className="relative">
                            <div
                                className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm ring-4 ring-background-light">
                                3</div>
                            <h4 className="text-xl font-bold mb-2">Review &amp; Export</h4>
                            <p className="text-slate-500">Visualize the results on an interactive
                                dashboard.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Visual Representation --> */}
                <div className="relative group">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        className="relative bg-background-light rounded-xl border border-slate-200 overflow-hidden shadow-2xl">
                        {/* <!-- Image placeholder for workflow or dashboard screenshot --> */}
                        <img alt="Doctor analyzing digital medical charts and ECG data on a tablet"
                            className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            data-alt="Doctor analyzing digital medical charts and ECG data on a tablet"
                            src={doctorImg} />
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-dark/90 to-transparent p-6 pt-12">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                                <span className="text-white font-medium">System Online</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
