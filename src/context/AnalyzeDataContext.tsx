import { createContext, useContext, useState, type ReactNode } from "react"

type AnalyzeFiles = {
  heaFile: File | null
  datFile: File | null
}

type AnalyzeState = {
  files: AnalyzeFiles
  samplingRate: number | null
}

type AnalyzeDataContextType = {
  state: AnalyzeState

  setFiles: (files: AnalyzeFiles) => void
  setSamplingRate: (fs: number) => void

  clearAll: () => void
}

const AnalyzeDataContext = createContext<AnalyzeDataContextType | undefined>(
  undefined
)

export function AnalyzeDataProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AnalyzeState>({
    files: {
      heaFile: null,
      datFile: null
    },
    samplingRate: null
  })

  const setFiles = (files: AnalyzeFiles) => {
    setState(prev => ({
      ...prev,
      files
    }))
  }

  const setSamplingRate = (fs: number) => {
    setState(prev => ({
      ...prev,
      fs
    }))
  }

  const clearAll = () => {
    setState({
      files: { heaFile: null, datFile: null },
      samplingRate: null,
    })
  }

  return (
    <AnalyzeDataContext.Provider
      value={{
        state,
        setFiles,
        setSamplingRate,
        clearAll
      }}
    >
      {children}
    </AnalyzeDataContext.Provider>
  )
}

export function useAnalyzeData() {
  const ctx = useContext(AnalyzeDataContext)
  if (!ctx) {
    throw new Error("useAnalyzeData must be used within AnalyzeDataProvider")
  }
  return ctx
}