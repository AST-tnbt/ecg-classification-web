export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                <div className="col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white text-xs">
                            <span className="material-icons-outlined text-sm">monitor_heart</span>
                        </div>
                        <span className="text-lg font-bold">Heartbeat Classifier</span>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs mb-6">
                        AI tools for heartbeat classification from raw ECG signals using machine learning and deep learning.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
                                className="material-icons-outlined">facebook</span></a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
                                className="material-icons-outlined">smart_display</span></a> 
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span
                                className="material-icons-outlined">alternate_email</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-slate-800">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a className="hover:text-primary" href="#">Features</a></li>
                        <li><a className="hover:text-primary" href="#">Live Demo</a></li>
                        <li><a className="hover:text-primary" href="#">API Access</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-slate-800">Resources</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a className="hover:text-primary" href="#">Documentation</a></li>
                        <li><a className="hover:text-primary" href="#">Model Specs</a></li>
                        <li><a className="hover:text-primary" href="#">Dataset Info</a></li>
                        <li><a className="hover:text-primary" href="#">Community</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4 text-slate-800">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                        <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                        <li><a className="hover:text-primary" href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div
                className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-500 text-sm">© 2025 Bao Tin, Ngoc Minh. All rights reserved.</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>All systems operational</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
