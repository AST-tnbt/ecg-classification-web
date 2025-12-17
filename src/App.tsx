import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Analyze from "./pages/Analyze"
import Demo from "./pages/Demo"
import Layout from "./components/Layout"
import MachineLearningStep from "./pages/MachineLearningStep"
import DeepLearningStep from "./pages/DeepLearningStep"
import { useAnalyzeStepAccess } from "./context/AnalyzeStepContext"
import RouteGuard from "./guard/RouteGuard"

function App() {
  const { canAccessSteps } = useAnalyzeStepAccess()

  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route index element={ <Home /> }/>
        <Route path='/analyze' element={ <Analyze /> }/>
        <Route path='/demo' element={ <Demo /> }/>
        <Route element={<RouteGuard allowed={canAccessSteps} />}>
          <Route path='/analyze/step-1' element={ <MachineLearningStep /> }/>
          <Route path='/analyze/step-2' element={ <DeepLearningStep /> }/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
