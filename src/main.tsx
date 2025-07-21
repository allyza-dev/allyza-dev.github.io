import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // StrictMode is a tool for highlighting potential problems in an application
  // It activates additional checks and warnings for its descendants
  // It helps to identify components with unsafe lifecycles, legacy API usage, and other potential problems in an application
  // It also helps to detect unexpected side effects in components
  // It does not affect the production build, only in development mode
  // It can be used to wrap any part of the application, not just the root component
  <StrictMode>
    <App />
  </StrictMode>,
)
