import { Project } from "@/lib/projects";

export default function ProjectCard({
  title,
  desc,
  techStack,
  screenshot,
  githubUrl,
}: Project) {
  return (
    <h3 className="">
      {title}
      <p className="">{desc}</p>
      {techStack.map((tech, index) => (
        <span key={index} className="">
          {tech}
        </span>
      ))}
    </h3>
  );
}
