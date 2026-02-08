function ProjectCard({ name, description}) {
    return (
        <div className="border border-gray-300 p-5 m-5 max-w-xs text-center shadow-md mx-auto">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <h3 className="text-lg font-semibold mb-1">Description:</h3>
            <p>{description}</p>  
        </div>
    );    
}

export default ProjectCard;