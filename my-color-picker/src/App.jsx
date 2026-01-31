import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white")
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff' ]   
  
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  }

  return (
    <div className="app-container" style={{backgroundColor}}>
      <h1>Color Picker</h1>
      <div className="color-pallete">
       {
        colors.map((color, index) => (
          <div 
            key={index}
            className="color-box"
            style={{backgroundColor: color}}
            onClick={() => handleColorChange(color)}
          />
        ))
       }
      </div>
      <div
      className='custom-color-picker'
      >
          <input type="color"
          value={backgroundColor}
          onChange={(e) => handleColorChange(e.target.value)}
          >
          </input>
      </div>
    </div>
  )
}

export default App
