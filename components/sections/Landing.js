"use client";
import logo from "@/assets/logo.svg";
import profileImg from "@/assets/profile2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiMail, FiPhone } from "react-icons/fi";
import { SiDjango, SiFigma, SiNextdotjs, SiReact } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

export default function Landing() {
  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(120,119,198,0.02)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(103,226,255,0.05),transparent_70%)]"></div>
      </div>

      {/* Floating Decorative Elements */}
      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8">
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
              className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-gray-900 rounded-full hover:bg-brand-400 transition-all duration-300 font-medium"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </a>
          </Link>
        </motion.nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              className="flex items-center gap-2 text-brand-400 text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>Hello</span>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                👋
              </motion.span>
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm Achem
              </motion.h1>
              
              <motion.h2
                className="text-2xl md:text-3xl text-gray-300 font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Full Stack Developer
              </motion.h2>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-gray-900 rounded-full hover:bg-brand-400 transition-all duration-300 cursor-pointer font-medium"
              >
                View My Work
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 cursor-pointer font-medium"
              >
                Get In Touch
              </ScrollLink>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8 text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-brand-400" />
                <span className="text-sm">+8801889197863</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-brand-400" />
                <span className="text-sm">achemnomaer@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image with Floating Tech Icons */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Profile Container */}
            <div className="relative">
              {/* Gradient Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full w-80 h-80 lg:w-96 lg:h-96 opacity-20 blur-3xl"></div>
              
              {/* Profile Image */}
              <motion.div
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-brand-500/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={profileImg}
                  alt="Achem Habib Nomaer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <FloatingTechIcon
                icon={<SiReact className="w-8 h-8 text-blue-400" />}
                className="absolute -top-4 -left-4 bg-gray-800"
                delay={0.5}
              />
              
              <FloatingTechIcon
                icon={<SiNextdotjs className="w-8 h-8 text-white" />}
                className="absolute top-12 -right-8 bg-gray-800"
                delay={0.7}
              />
              
              <FloatingTechIcon
                icon={<SiDjango className="w-8 h-8 text-green-500" />}
                className="absolute -bottom-4 -left-8 bg-gray-800"
                delay={0.9}
              />
              
              <FloatingTechIcon
                icon={<SiFigma className="w-8 h-8 text-purple-400" />}
                className="absolute bottom-12 -right-4 bg-gray-800"
                delay={1.1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Floating Tech Icon Component
function FloatingTechIcon({ icon, className, delay }) {
  return (
    <motion.div
      className={`w-16 h-16 rounded-full flex items-center justify-center border border-gray-700 backdrop-blur-sm ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      {icon}
    </motion.div>
  );
}

// Floating Decorative Elements
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 left-20 text-brand-400 opacity-60"
        animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-brand-400 opacity-40"
        animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-32 text-brand-400 opacity-50"
        animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-brand-400 opacity-30"
        animate={{ y: [0, 12, 0], rotate: [0, -360, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-60 left-1/4 w-3 h-3 bg-brand-500 rounded-full opacity-60"
        animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-60 right-1/4 w-2 h-2 bg-brand-400 rounded-full opacity-40"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-1/3 right-12 w-4 h-4 border-2 border-brand-500 rotate-45 opacity-50"
        animate={{ y: [0, -15, 0], rotate: [45, 225, 45] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </div>
  );
}