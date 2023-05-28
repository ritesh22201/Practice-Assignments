import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Timer2 from './components/Timer2'
import Form from './components/Form'
import ClickMe from './components/ClickMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Timers</h1>
      {/* <Timer/>
      <Timer2/> */}
      {/* <Form/> */}
      <ClickMe/>
    </div>
  )
}

export default App
