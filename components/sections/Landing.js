"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiX } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

export default function Landing() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800"></div>

      {/* Minimal background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Hero Content */}
        <div className="flex flex-col justify-center min-h-[70vh] max-w-3xl">
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Achem Habib Nomaer
            </span>
          </motion.h1>

          {/* Description paragraph */}
          <motion.div
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              <span className="text-brand-400 font-medium">
                Full-stack developer
              </span>
              ,{" "}
              <span className="text-purple-400 font-medium">
                problem solver
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-medium">
                tech enthusiast
              </span>
              .
              <span className="text-emerald-400 font-medium">
                {" "}
                Cricket lover
              </span>
              , occasional <span className="text-gray-400">gym-goer</span>,
              and
              <span className="text-orange-400 font-medium">
                {" "}
                friend
              </span> &{" "}
              <span className="text-pink-400 font-medium">laughter seeker</span> in
              search of good vibes.
            </p>

            <p className="text-gray-400">
              Building seamless web applications that make a difference. Explore my{" "}
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="text-brand-400 hover:text-brand-300 transition-colors cursor-pointer border-b border-brand-400/30 hover:border-brand-400"
              >
                Projects
              </ScrollLink>
              ,{" "}
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="text-brand-400 hover:text-brand-300 transition-colors cursor-pointer border-b border-brand-400/30 hover:border-brand-400"
              >
                About Me
              </ScrollLink>
              ,{" "}
              <Link
                href="/Resume_Achem_Habib_Nomaer.pdf"
                target="_blank"
                className="text-brand-400 hover:text-brand-300 transition-colors border-b border-brand-400/30 hover:border-brand-400"
              >
                Resume
              </Link>
              ,{" "}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="text-brand-400 hover:text-brand-300 transition-colors cursor-pointer border-b border-brand-400/30 hover:border-brand-400"
              >
                Contact Me
              </ScrollLink>{" "}
              or send me an email at{" "}
              <a
                href="mailto:achemnomaer@gmail.com"
                className="text-brand-400 hover:text-brand-300 transition-colors border-b border-brand-400/30 hover:border-brand-400"
              >
                achemnomaer@gmail.com
              </a>
              .
            </p>
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-all duration-300 cursor-pointer"
            >
              <span className="text-lg">See My Work</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://x.com/achemnomaer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-400 transition-colors duration-300"
            >
              <SiX className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/achemnomaer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-400 transition-colors duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/achem-habib-nomaer-62865b17a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-400 transition-colors duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:achemnomaer@gmail.com"
              className="text-gray-500 hover:text-brand-400 transition-colors duration-300"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Minimal scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}