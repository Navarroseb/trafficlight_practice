import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bright, setBright] = useState('glow')

  const changeBgc = () => {
    setBright(bright === 'glow' ? "lights" : 'glow')
    setBright(bright === 'glow' ? "#yellowlight" : 'glow')
    setBright(bright === 'glow' ? "#greenlight" : 'glow')
    

  }

  return (
    <>
      <div className="semaforo">
        <div className="lights">
          <div className={bright} id="redlight" onClick={changeBgc}>

          </div>
          <div className={bright} id="yellowlight" onClick={changeBgc}>

          </div>
          <div className={bright} id="greenlight" onClick={changeBgc}>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
