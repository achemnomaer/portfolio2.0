import { projects } from "@/lib/data/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-[1400px] px-4 sm:px-8 mx-auto py-12 flex flex-col w-full lg:gap-y-20">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}
