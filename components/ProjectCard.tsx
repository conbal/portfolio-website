import { Project } from "@/lib/projects";
import Image from "next/image";

export default function ProjectCard({
  title,
  desc,
  techStack,
  screenshot,
  githubUrl,
  alt,
}: Project) {
  return (
    <div className="w-150 bg-blue-900 rounded-4xl shadow-lg p-3">
      <h3 className="text-center text-xl">{title}</h3>
      <p className="text-center">{desc}</p>
      <div className="">
        {/* optional github link */}
        {/* noopener noreferrer prevents linked page from accessing/manipulating original page */}
        <div className="grid justify-items-center">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sky-500"
            >
              Github
            </a>
          )}
        </div>
        {/* optional Image */}
        {screenshot && (
          <Image
            src={screenshot}
            width={347}
            height={762}
            alt={alt}
            className="w-40 h-auto justify-self-center py-3"
          />
        )}

        {/* Maps out the list of tech used */}
        <div className="justify-self-center flex gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
