import ProjectList from './ProjectList';

function Projects() {
  return (
    <section className="w-full max-w-5xl mx-auto text-center md:text-left pt-8">
      <div className="grid gap-6 justify-items-center md:justify-items-start">
        <ProjectList />
      </div>
    </section>
  );
}

export default Projects;