import { Analytics } from '@vercel/analytics/react'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
    
    
  )
}

export default App
