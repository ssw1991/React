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
    `rounded-full text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-gray-900 text-white px-4 py-2.5'
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2'
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-blue-100 backdrop-blur border-b border-gray-200">
        <div className="w-full px-10 py-10 flex flex-col items-center gap-4 text-center">
          <Header />
          <nav aria-label="Primary" className="w-auto">
            <ul className="flex flex-wrap justify-center gap-2">
              <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
              <li><NavLink to="/resume" className={linkClass}>Resume</NavLink></li>
              <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
              <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full flex items-center justify-center mt-12">
        <div className="max-w-5xl w-full mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center">
          <div className="text-center w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-gray-200">
        <div className="w-full px-4 py-6 flex justify-center text-center">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
