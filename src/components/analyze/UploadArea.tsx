import { useState } from "react"
import { useDropzone } from "react-dropzone"

type UploadAreaProps = {
  file: File | null
  onFileSelected: (file: File) => void
  onFileRemoved: () => void
}

const MAX_SIZE = 50 * 1024 * 1024

export default function UploadArea({
  file,
  onFileSelected,
  onFileRemoved
}: UploadAreaProps) {

  const [errorMessage, setErrorMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("Drag and drop ECG files here")

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/octet-stream": [".dat"],
      "text/plain": [".txt"]
    },
    maxSize: MAX_SIZE,
    multiple: false,
    maxFiles: 1,
    disabled: !!file,

    onDrop: (acceptedFiles: File[], fileRejections) => {
      if (fileRejections.length > 0) {
        console.log("Invalid file type or file too large")
        setErrorMessage("Invalid file type or file too large (>50MB)")
        return
      }

      if (acceptedFiles.length > 0) {
        setErrorMessage("")
        setStatusMessage("File is ready, choose \"Start analysis\" to continue")
        onFileSelected(acceptedFiles[0])
      }
    }
  })

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) {
      return `${bytes} B`
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`
    }

    return `${(bytes / 1024 / 1024).toFixed(2)} MB`
  }

  return (
    <div className="flex flex-col">
      <div
        {...getRootProps()}
        className={`
                    group flex flex-col items-center gap-6 rounded-xl border-2 border-dashed
                    px-6 py-14 transition-all duration-300 cursor-pointer
                    ${isDragActive
            ? "border-primary bg-primary/5"
            : "border-slate-300 hover:border-primary bg-surface-light"}
                `}
      >
        <input {...getInputProps()} />
        <div className="flex max-w-[480px] flex-col items-center gap-4">
          <div className="p-4 rounded-full bg-slate-100 text-primary group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl">cloud_upload</span>
          </div>
          <p className="text-slate-900 text-xl font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">{statusMessage}</p>
          <p className="text-slate-500 text-sm font-normal leading-normal max-w-[480px] text-center">Supported formats: .DAT, .txt (Max 50MB)</p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-slate-200 hover:bg-slate-300 text-slate-900 text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
          <span className="truncate">Browse Files</span>
        </button>
      </div>
      {
        errorMessage != "" && (
          <span className="text-red-500 mt-1">{errorMessage}</span>
        )
      }
      {
        file && (
          <div
            className="flex mt-4 shadow items-center justify-between p-3 mb-3 bg-background-light rounded-lg border border-slate-200 ">
            <div className="flex items-center gap-3">
              <div className="text-primary bg-primary/10 pt-2 pb-1 px-2 rounded">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-sm font-medium text-slate-900">{file.name}</span>
                <span className="text-xs text-slate-500">{formatFileSize(file.size)}</span>
              </div>
            </div>
            <button 
              className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
              onClick={() => {
                onFileRemoved()
                setStatusMessage("Drag and drop ECG files here")
              }}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        )
      }
    </div>
  )
}