import { useState } from 'react';
import { FaBeer } from 'react-icons/fa';
import './App.css';
import Products from './components/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Products /> 
      </div>
    </>
  )
}

export default App
