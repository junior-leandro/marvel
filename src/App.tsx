import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='content'>
        <h1>Vite + React | Building Discovery Marvel</h1>
        <br/>
        <p>CLICK HERE FOR DISCOVERY</p>
      </div>
    </>
  )
}

export default App
