import { useState } from "react";
import Information from "../components/analyze/Information";
import UploadArea from "../components/analyze/UploadArea";
import { useNavigate } from "react-router";

export default function Analyze() {
  const [file, setFile] = useState<File | null>(null)
  const navigation = useNavigate()

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto layout-container flex h-full grow flex-col pt-24">
      <div className="flex flex-1 justify-center pb-10">
        <div className="flex flex-col flex-1 gap-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">Upload ECG Raw Signals</p>
              <p className="text-slate-500 text-base font-normal leading-normal">Import your raw data files to begin heartbeat classification analysis.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Left Column: Upload Area (Span 2) --> */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <UploadArea
                file={file}
                onFileSelected={setFile}
                onFileRemoved={() => setFile(null)}
              />
            </div>
            <div className="lg:col-span-1 flex flex-col gap-6">
              <Information onClick={() => {navigation("/analyze/step-1")}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
