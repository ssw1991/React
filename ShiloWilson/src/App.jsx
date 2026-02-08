import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './Home';
import NotFound from './NotFound';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './components/Header';
import { Route, Routes, NavLink } from 'react-router-dom';
import Resume from './components/Resume';

function App() {
  const linkClass = ({ isActive }) =>
    `px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive ? 'bg-yellow-300 text-black' : 'text-gray-800 hover:text-yellow-300'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <header className="sticky top-0 z-40 bg-blue-100 backdrop-blur-md shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            
          </div>
          <Header />
          <nav aria-label="Primary" className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-2">
              <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
              <li><NavLink to="/resume" className={linkClass}>Resume</NavLink></li>
              <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full flex items-center justify-center py-20 px-4">
        <div className="w-full mx-auto py-20">
          <div className="w-full flex justify-center">
            <div className="text-center w-full max-w-5xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-white/80">
        <div className="w-full mx-auto py-6 px-4">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
