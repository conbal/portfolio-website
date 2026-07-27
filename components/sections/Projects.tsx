import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-center text-4xl pb-4 ">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
