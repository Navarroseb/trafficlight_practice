import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("glow")

  return (
    <>
      <div className="semaforo">
        <div className="lights">
          <div onClick={() => setColor("redlight")} 
               className={ "red" + (color === "redlight" ? " glow" : "")} >
          </div>
          <div onClick={() => setColor("yellowlight")} 
               className={ "yellow" + (color === "yellowlight" ? " glow" : "")} >
          </div>
          <div onClick={() => setColor("greenlight")} 
               className={ "green" + (color === "greenlight" ? " glow" : "")} >
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
