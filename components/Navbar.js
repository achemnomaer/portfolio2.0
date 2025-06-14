"use client";

import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
      {...fadeInUp}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group hidden sm:block">
            <motion.span
              className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              AH.
            </motion.span>
          </Link>

          {/* Navigation - Always visible */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className={`px-3 md:px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            <Link href="/Resume_Achem_Habib_Nomaer.pdf" passHref legacyBehavior>
              <a
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm border border-gray-700 rounded-lg hover:border-gray-600"
              >
                <FiDownload className="w-4 h-4" />
                Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
