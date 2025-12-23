import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { AnalyzeStepProvider } from './context/AnalyzeStepContext.tsx'
import { AnalyzeDataProvider } from './context/AnalyzeDataContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyzeStepProvider>
        <AnalyzeDataProvider>
          <App />
        </AnalyzeDataProvider>
      </AnalyzeStepProvider>
    </BrowserRouter>
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
    />
  </StrictMode>,
)
