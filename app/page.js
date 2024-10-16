import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Landing from "@/components/sections/Landing";
import projectsData from "@/lib/data/projects";

export default function Home() {
  return (
    <div>
      <Landing />

      <div className="max-w-[1400px] px-4 sm:px-8 mx-auto py-12 flex flex-col w-full lg:gap-y-20">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
      <div>
        <Experience />
      </div>

      <Contact />
    </div>
  );
}
