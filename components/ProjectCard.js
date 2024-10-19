// components/ProjectCard.js
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedModalDemo from "./example/animated-modal-demo";

const ProjectCard = ({ project, reverse }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center  text-white  mb-12 w-full justify-center gap-x-12`}
    >
      {/* Project Image */}
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative  rounded-md">
        <Image
          src={project.projectImages[0]}
          alt={project.title}
          priority
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
        <h2 className="text-xl sm:text-3xl font-bold">{project.title}</h2>

        <Link href={project.liveLink} className="text-brand-500">
          {project.liveLink}
        </Link>

        <p className="text-gray-400 text-sm sm:text-base">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-6">
          <a
            href={project.githubLink}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub className="text-xl" />
            <span>Github</span>
          </a>
          <AnimatedModalDemo project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
