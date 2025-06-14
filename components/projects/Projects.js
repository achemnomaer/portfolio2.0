"use client";

import { staggerContainer, staggerItem } from "@/lib/animations";
import { projects } from "@/lib/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div className="mb-20" variants={staggerItem}>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-8">
              My Work
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl">
              A collection of projects that showcase my skills in full-stack
              development, from concept to deployment.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                variants={staggerItem}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Info */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl font-light text-brand-400 group-hover:text-brand-300 transition-colors">
                      {project.title}
                    </h2>

                    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 5).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-brand-400 text-sm font-mono"
                        >
                          {tech}
                          {techIndex <
                            Math.min(project.techStack.length, 5) - 1 && " | "}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4">
                      {project.liveLink && (
                        <Link href={project.liveLink} passHref legacyBehavior>
                          <a
                            target="_blank"
                            className="flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Site</span>
                          </a>
                        </Link>
                      )}

                      <Link href={`/projects/${index}`}>
                        <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                          Learn More →
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                          src={
                            project.projectImages[0] ||
                            "/placeholder.svg?height=400&width=600"
                          }
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          width={600}
                          height={400}
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
