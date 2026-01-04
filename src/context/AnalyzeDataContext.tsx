import { createContext, useContext, useState, type ReactNode } from "react"

type AnalyzeFiles = {
  heaFile: File | null
  datFile: File | null
}

type AnalyzeState = {
  files: AnalyzeFiles
  samplingRate: number | null
  mlModel: string
}

type AnalyzeDataContextType = {
  state: AnalyzeState

  setFiles: (files: AnalyzeFiles) => void
  setSamplingRate: (fs: number) => void
  setMlModel: (modelName: string) => void

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
    samplingRate: null,
    mlModel: ""
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

  const setMlModel = (modelName: string) => {
    setState(prev => ({
      ...prev,
      modelName
    }))
  }

  const clearAll = () => {
    setState({
      files: { heaFile: null, datFile: null },
      samplingRate: null,
      mlModel: ""
    })
  }

  return (
    <AnalyzeDataContext.Provider
      value={{
        state,
        setFiles,
        setSamplingRate,
        setMlModel,
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