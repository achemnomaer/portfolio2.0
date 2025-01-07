import { IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetails } from "./ProjectDetails";

// Each card will scale up slightly and fade in
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ project, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col lg:flex-row border border-gray-700 rounded-md p-4 ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center text-white mb-8 w-full justify-center gap-x-12`}
      // Apply card-level animation
      variants={cardVariants}
    >
      {/* Project Image */}
      <motion.div
        className="w-full lg:w-1/2 mb-6 lg:mb-0 relative rounded-md"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.projectImages[0]}
          alt={project.title}
          priority
          className="object-cover w-full h-full rounded-md"
        />
      </motion.div>

      {/* Project Details */}
      <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
        <h2 className="text-xl sm:text-3xl font-bold">{project.title}</h2>

        {project.liveLink && (
          <Link href={project.liveLink} passHref legacyBehavior>
            <a
              target="_blank"
              className="text-brand-400 hover:text-brand-500 flex gap-x-2 items-center"
            >
              <ExternalLink className="w-5 h-5" />{" "}
              <span>{project.liveLink}</span>{" "}
            </a>
          </Link>
        )}

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
          {project?.githubLink && (
            <Link href={project.githubLink} passHref legacyBehavior>
              <a
                target="_blank"
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg"
              >
                <IconBrandGithub className="text-xl" />
                <span>Github</span>
              </a>
            </Link>
          )}
          <ProjectDetails project={project} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
