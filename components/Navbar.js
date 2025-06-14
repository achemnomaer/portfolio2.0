"use client";

import logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <Image
              src={logo}
              alt="Achem Habib Nomaer Logo"
              width={50}
              height={50}
              priority
              className="group-hover:opacity-80 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="hover:text-white transition-colors cursor-pointer py-2"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <Link href="/Resume_Achem_Habib_Nomaer.pdf" passHref legacyBehavior>
              <a
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm border border-gray-700 rounded-lg hover:border-gray-600"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
              <Link href="/Resume_Achem_Habib_Nomaer.pdf" passHref legacyBehavior>
                <a
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm border border-gray-700 rounded-lg hover:border-gray-600 w-fit"
                >
                  <FiDownload className="w-4 h-4" />
                  Resume
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}