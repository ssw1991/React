import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './Home';
import NotFound from './NotFound';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './components/Header';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Header  />
    <nav className="bg-blue-100 p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/"><span className="text-black underline hover:text-yellow-300 font-medium transition duration-300">Home</span></Link>
        </li>
        <li>
          <Link to="/about"><span className="text-black hover:text-yellow-300 font-medium transition duration-300 ">About</span></Link>
        </li>
         <li>
          <Link to="/projects"><span className="text-black hover:text-yellow-300 font-medium transition duration-300 ">Projects</span></Link>
        </li>
        <li>
          <Link to="/contact"><span className="text-black hover:text-yellow-300 font-medium transition duration-300 ">Contact</span></Link>
        </li>
      </ul>
    </nav>
    <div className="container mx-auto p-8">
    </div>
    <div className="container mx-auto p-8"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path = "*" element={<NotFound />} />
    </Routes>
    </div>
    <div className="container mx-auto p-8">
      <Footer />
    </div>
    
  </div>
  )
}

export default App
