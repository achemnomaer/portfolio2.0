"use client";

import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="px-3 py-1 bg-brand-500/10 text-brand-400 rounded-full text-sm tracking-wide font-medium">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development,
            from concept to deployment.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} reverse={index % 2 !== 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}