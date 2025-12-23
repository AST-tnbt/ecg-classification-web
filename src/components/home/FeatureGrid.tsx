export default function FeatureGrid() {
    const featureItems = [
        {
            icon: "bolt",
            name: "Multi models",
            desc: "Using Machine learning to detect abnormal heartbeats. After that, abnormal heartbeat will be classified by Deep learning model."
        },
        {
            icon: "category",
            name: "Multi-ClassclassName Detection",
            desc: "Accurately identifies Normal (N), Supraventricular ectopic beat (S), Ventricular ectopic beat (V), R-on-T PVC (r), and Unknown (Q) beats."
        },
        {
            icon: "file_download",
            name: "Comprehensive Exports",
            desc: "Will be supported in the future"
        },
    ]
    return (
        <section className="py-24 relative" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Features</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Advanced Diagnostics with multi AI models</h3>
                    <p className="text-slate-500 ">The collaboration of Machine learning and Deep learning</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {
                        featureItems.map((item, index) => 
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white border-slate-200 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden shadow">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110">
                                </div>
                                <div
                                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-icons-outlined">{item.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.name}</h4>
                                <p className="text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
