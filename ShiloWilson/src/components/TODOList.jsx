import ProjectCard from "./ProjectCard";

function TODOList(){
    const todos = [
        { 
            name: "Clean git", 
            description: (
                <>
                    Create a clean git repository to show projects in a more organized way. This will involve moving projects into separate folders, adding README files for each project.
                </>
            )
        },
        {
            name: "Add Modal",
            description: (  
                <>
                Add a modal to the project cards that shows more details about each project when clicked. This will allow me to provide more information about each project without cluttering the main page.
                </>
            )
        },
        {
            name: "Backend",
            description: (
                <>
                Implement a backend to store project information and allow for easy updates. This will involve setting up a database and creating an API to interact with the frontend.
                </>
            )
        }
        
    ];
    
    return(
        <section id="projects" className="projects-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todos.map((todo, index) => (
                    <ProjectCard key={index} name={todo.name} description={todo.description} />
                ))}
            </div>
        </section>
    );
}

export default TODOList;