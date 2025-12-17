import { createContext, useContext, useState } from "react"

type AnalyzeStepContextType = {
  canAccessSteps: boolean
  allowSteps: () => void
}

const StepContext = createContext<AnalyzeStepContextType | null>(null)

export function AnalyzeStepProvider({ children }: { children: React.ReactNode }) {
  const [canAccessSteps, setCanAccessSteps] = useState(false)

  return (
    <StepContext.Provider
      value={{
        canAccessSteps,
        allowSteps: () => setCanAccessSteps(true)
      }}
    >
      {children}
    </StepContext.Provider>
  )
}

export function useAnalyzeStepAccess() {
  const ctx = useContext(StepContext)
  if (!ctx) throw new Error("useAnalyzeStepAccess must be used inside AnalyzeStepProvider")
  return ctx
}