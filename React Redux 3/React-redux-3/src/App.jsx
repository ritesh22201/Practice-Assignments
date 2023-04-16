import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Todos from './Components/Todos'
import MainRoutes from './pages/MainRoutes'

function App() {

  return (
    <div className="App">
      <MainRoutes/>
    </div>
  )
}

export default App
