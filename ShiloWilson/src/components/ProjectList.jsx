import ProjectCard from "./ProjectCard";

function ProjectList(){
    const projects = [
        { 
            name: "This Website", 
            description: (
                <>
                    A <a href="https://react.dev/" className="text-blue-500 hover:underline font-semibold">React</a>-implemented portfolio showcasing my technical growth. While a work in progress, intended to feature a full portfolio, professional blogs on math, finance, and technology, plus a content management system for curating interesting resources and insights.
                </>
            )
        },
        { 
            name: "Personal Finance Dashboard", 
            description: "This is a placeholder"
        },
        { 
            name: "Blog Platform", 
            description: "This is a placeholder"
        },
        { 
            name: "E-commerce Site", 
            description: "This is a placeholder"
        },
        {
            name: "Task Management App",
            description: "This is a placeholder"
        },
        {
            name: "Social Media Integration Tool",
            description: "This is a placeholder"
        },
        {
            name: "Data Visualization Dashboard",
            description: "This is a placeholder"
        }
    ];
    
    return(
        <section id="projects" className="projects-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} name={project.name} description={project.description} />
                ))}
            </div>
        </section>
    );
}

export default ProjectList;