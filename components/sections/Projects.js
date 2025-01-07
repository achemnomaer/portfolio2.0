"use client";

import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Staggers children so they animate one after the other
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
      // Animate when this section enters the viewport
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="max-w-7xl px-4 sm:px-8 mx-auto flex flex-col w-full py-20 md:py-28"
    >
      {/* Title */}
      <motion.div
        className="mx-auto max-w-3xl text-center mb-8 space-y-4"
        variants={itemVariants}
      >
        <span className="px-3 py-1 bg-purple-600/10 text-brand-500 rounded-full text-sm tracking-wide">
          Projects
        </span>
        <h1 className="uppercase text-3xl md:text-4xl font-semibold text-white">
          My Work
        </h1>
      </motion.div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProjectCard project={project} reverse={index % 2 !== 0} />
        </motion.div>
      ))}
    </motion.section>
  );
}
