"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail({ project }) {
  return (
    <div className="min-h-screen bg-gray-900 py-20 md:py-28">
      <motion.section
        className="px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div className="mb-12" variants={staggerItem}>
            <Link href="/projects">
              <Button variant="ghost" className="text-gray-400">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div className="mb-16" variants={staggerItem}>
            <span className="text-brand-400 text-sm uppercase tracking-wider mb-4 block">
              Project Details
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              {project.title}
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </motion.div>

          {/* Project Images */}
          <motion.div className="mb-16" variants={staggerItem}>
            <ImageCarousel imgs={project.projectImages} project={project} />
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              variants={staggerItem}
            >
              {/* Key Features */}
              {project.keyFeatures && (
                <div>
                  <h2 className="text-2xl font-light text-white mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-brand-400 rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Overview */}
              {project.overview && (
                <div>
                  <h2 className="text-2xl font-light text-white mb-6">
                    Overview
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-brand-400 mb-2">
                        Problem Statement
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.overview.problemStatement}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-brand-400 mb-2">
                        Solution
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.overview.solution}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges & Learnings */}
              {(project.challenges || project.learnings) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.challenges && (
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-300 text-sm">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.learnings && (
                    <div>
                      <h3 className="text-lg font-medium text-white mb-4">
                        Key Learnings
                      </h3>
                      <ul className="space-y-2">
                        {project.learnings.map((learning, index) => (
                          <li key={index} className="text-gray-300 text-sm">
                            • {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div className="space-y-8" variants={staggerItem}>
              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {project.liveLink && (
                  <Link href={project.liveLink} passHref legacyBehavior>
                    <a target="_blank" className="w-full">
                      <Button className="w-full bg-brand-500 hover:bg-brand-600 text-gray-900">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </Button>
                    </a>
                  </Link>
                )}

                {project.githubLink && (
                  <Link href={project.githubLink} passHref legacyBehavior>
                    <a target="_blank" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
