import { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"

type UploadAreaProps = {
  heaFile: File | null
  datFile: File | null
  onHeaRemoved: () => void
  onDatRemoved: () => void
  onFilesSelected: (files: { hea?: File; dat?: File }) => void
}

const MAX_SIZE = 100 * 1024 * 1024

export default function UploadArea({
  heaFile,
  datFile,
  onFilesSelected,
  onHeaRemoved,
  onDatRemoved
}: UploadAreaProps) {

  const [errorMessage, setErrorMessage] = useState("")
  const [statusMessage, setStatusMessage] = useState("Drag and drop .hea and .dat files here")

  const hasBothFiles = !!heaFile && !!datFile
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/octet-stream": [".hea", ".dat"]
    },
    maxSize: MAX_SIZE,
    multiple: true,
    maxFiles: 2,
    disabled: hasBothFiles,

    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        setErrorMessage("Invalid file type or file too large (>50MB)")
        return
      }

      let hea: File | undefined
      let dat: File | undefined

      for (const file of acceptedFiles) {
        if (file.name.endsWith(".hea")) hea = file
        if (file.name.endsWith(".dat")) dat = file
      }

      if (!hea && !dat) {
        setErrorMessage("Unsupported file type")
        return
      }

      setErrorMessage("")
      onFilesSelected({ hea, dat })
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

  useEffect(() => {
    if (heaFile && datFile)
      setStatusMessage("Files ready, choose \"Start analysis\" to continue")
  }, [heaFile, datFile])

  const FileCard = ({
    file,
    onRemove
  }: {
    file: File
    onRemove: () => void
  }) => (
    <div className="mt-4 flex items-center justify-between p-3 bg-background-light rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <div className="text-primary bg-primary/10 pt-2 pb-1 px-2 rounded">
          <span className="material-symbols-outlined">description</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-slate-900">{file.name}</span>
          <span className="text-xs text-slate-500">
            {formatFileSize(file.size)}
          </span>
        </div>
      </div>

      <button
        onClick={onRemove}
        className="text-slate-400 hover:text-red-500 transition-colors"
      >
        <span className="material-symbols-outlined cursor-pointer">delete</span>
      </button>
    </div>
  )

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
          <p className="text-slate-500 text-sm font-normal leading-normal max-w-[480px] text-center">Supported formats: .dat, .hea (Max 100MB)</p>
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
        heaFile && (
          <FileCard file={heaFile} onRemove={() => {
            onHeaRemoved()
            setStatusMessage("Drag and drop .hea and .dat files here")
          }} />
        )
      }
      {
        datFile && (
          <FileCard file={datFile} onRemove={() => {
            onDatRemoved()
            setStatusMessage("Drag and drop .hea and .dat files here")
          }} />
        )
      }
    </div>
  )
}