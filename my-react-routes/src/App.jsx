import './App.css'
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Team from './Team';
import NotFound from './NotFound';
import { Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
    <nav className="bg-blue-100 p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/"><span className="text-black hover:text-yellow-300 font-medium transition duration-300">Home</span></Link>
        </li>
        <li>
          <Link to="/about"><span className="text-black hover:text-yellow-300 font-medium transition duration-300">About</span></Link>
        </li>
        <li>
          <Link to="/contact"><span className="text-black hover:text-yellow-300 font-medium transition duration-300">Contact</span></Link>
        </li>
      </ul>
    </nav>

    <div className="container mx-auto p-8"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
      <Route path="team" element={<Team />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path = "*" element={<NotFound />} />
    </Routes>
    </div>
  </div>
  )
}

export default App
