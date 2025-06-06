"use client";
import logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

export default function Landing() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-16">
        {/* Navigation */}
        <motion.nav 
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="text-white font-medium text-xl">
            <Image
              src={logo}
              alt="Achem Habib Nomaer Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          <Link
            href="/Resume_Achem_Habib_Nomaer.pdf"
            passHref
            legacyBehavior
          >
            <a
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-brand-500 transition-all duration-300 group"
            >
              <FiDownload className="w-4 h-4 group-hover:text-brand-400 transition-colors" />
              Resume
            </a>
          </Link>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-brand-500/10 text-brand-400 rounded-full text-sm font-medium border border-brand-500/20">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
              Achem
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I craft digital experiences that blend{" "}
            <span className="text-brand-400 font-semibold">innovation</span> with{" "}
            <span className="text-purple-400 font-semibold">functionality</span>,
            turning ideas into seamless web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="group px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-300 cursor-pointer flex items-center gap-2 font-medium"
            >
              View My Work
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-brand-500 hover:text-brand-400 transition-all duration-300 cursor-pointer font-medium"
            >
              Get In Touch
            </ScrollLink>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-brand-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}