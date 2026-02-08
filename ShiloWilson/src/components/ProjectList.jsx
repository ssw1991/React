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
            name: "Dockerized Spark Standalone Cluster", 
            description: 
            (
                <>
                In 2019, a class project required Apache Spark, and I struggled with local installation. Later, while experimenting with containerization, I created a Dockerized Spark standalone cluster to make setup reproducible and fast. This <a href="https://github.com/ssw1991/spark-standalone-cluster/tree/main" className="text-blue-500 hover:underline font-semibold">project</a> builds on another developer’s repository (linked with full attribution). It removes the initial friction of configuring a local Spark cluster.
                </>
            )
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