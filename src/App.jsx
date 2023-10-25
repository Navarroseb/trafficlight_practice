import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bright, setBright] = useState("")

  return (
    <>
      <div className="semaforo">
        <div className="lights">
          <div className="redlight">

          </div>
          <div className="yellowlight">

          </div>
          <div className="greenlight">

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
