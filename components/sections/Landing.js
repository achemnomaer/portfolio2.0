"use client";
import logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

export default function Landing() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8">
        {/* Navigation */}
        <motion.nav 
          className="flex justify-between items-center mb-20"
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
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-600"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </Link>
        </motion.nav>

        {/* Hero Content */}
        <div className="flex flex-col justify-center min-h-[75vh] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-brand-400 text-lg font-medium mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Achem Habib Nomaer
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
              Full Stack Developer
            </h2>
          </motion.div>

          <motion.p
            className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build modern web applications with clean code and thoughtful design. 
            Passionate about creating digital solutions that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer font-medium"
            >
              View My Work
            </ScrollLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 cursor-pointer font-medium"
            >
              Get In Touch
            </ScrollLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}