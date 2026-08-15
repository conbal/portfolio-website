import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-23 pb-10">
      <h2 className="text-center text-4xl pb-4 ">Projects</h2>
      <div className="grid grid-cols-3 justify-self-center gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          /> /*{...project} is the spread operator applied to the project object, represents all the values in project*/
        ))}
      </div>
    </section>
  );
}
