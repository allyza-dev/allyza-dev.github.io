
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.scss'
import  Portfolio  from './pages/Home'
import { RootLayout } from './components/RootLayout'
import WorkHistory from './pages/WorkHistory'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Portfolio />} />
      <Route path='work-history' element={<WorkHistory />} />
      {/* <Route path='projects' element={<Portfolio />} /> */}
     
    </Route>
  ))

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
