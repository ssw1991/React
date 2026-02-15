function ProjectList(){
    const projects = [
    {
      title: "Project One",
      description: "first project",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Second project",
      link: "#"
    },
    ]
    return(
        <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((projects, index) => (
            <div key={index} className="project-item">
                <h3>{projects.title}</h3>
                <h3>{projects.description}</h3>
            </div>
          ))
          }
        </div>
      </section>
    );
}
export default ProjectList;