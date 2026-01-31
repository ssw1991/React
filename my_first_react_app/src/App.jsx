
import './App.css'

function App() {
  const name = "Shilo Wilson";
  const profession = "Quantitative Developer";

  const projects = [
    {
      title: "Project One",
      Description: "first project",
      link: "#"
    },
    {
      title: "Project Two",
      Description: "Second project",
      link: "#"
    },
]
  return (
    <div>
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="about" className="about-section">
        <h2>About me!</h2>
        <p>Hello I am Shilo Wilson</p>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((projects, index) => (
            <div key="index" className="project-item">
                <h3>{projects.title}</h3>
                <h3>{projects.description}</h3>
            </div>
          ))
          }
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact me!</h2>
        <p>If you would like to get in touch, feel free to go fuck yourself, but <a href="mailto:wilson.s.shilo@gmail.com">here.</a></p>
      </section>
      <footer className="footer">
          <p>2026, All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
