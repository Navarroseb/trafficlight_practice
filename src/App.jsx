import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("")

  const colorEvent = (glow) => {
    setColor(glow);
  }

  return (
    <>
      <div className="semaforo">

        <div className={`redlight ${color === 'redlight' ? 'glow' : ''}`}
          onClick={() => colorEvent('redlight')}>
        </div>
        <div className={`yellowlight ${color === 'yellowlight' ? 'glow' : ''}`}
          onClick={() => colorEvent('yellowlight')}>
        </div>
        <div className={`greenlight ${color === 'greenlight' ? 'glow' : ''}`}
          onClick={() => colorEvent('greenlight')}>
        </div>
        <button onClick={ () =>{
          console.log("Hiciste Clic")
        }}>
        Agrega un color
      </button>
      </div>
      
    </>
  )
}

export default App
