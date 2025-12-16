import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Analyze from "./pages/Analyze"
import Demo from "./pages/Demo"
import Layout from "./components/Layout"
import MachineLearningStep from "./pages/MachineLearningStep"

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route index element={ <Home /> }/>
        <Route path='/analyze' element={ <Analyze /> }/>
        <Route path='/demo' element={ <Demo /> }/>
        <Route path='/step-1' element={ <MachineLearningStep /> }/>
      </Route>
    </Routes>
  )
}

export default App
