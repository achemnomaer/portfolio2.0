"use client";

import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: "achemnomaer@gmail.com",
      href: "mailto:achemnomaer@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+8801889197863",
      href: "tel:+8801889197863",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chittagong, Bangladesh",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/achemnomaer",
    },
    {
      icon: <SiLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/achem-habib-nomaer-62865b17a/",
    },
    {
      icon: <SiX className="w-6 h-6" />,
      label: "X (Twitter)",
      href: "https://x.com/achemnomaer",
    },
    {
      icon: <SiFacebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://www.facebook.com/achem.habibnomaer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 md:py-28">
      <motion.section
        className="px-4 sm:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div className="mb-20" variants={staggerItem}>
            <h1 className="text-5xl md:text-6xl font-light text-white mt-4 mb-8">
              Contact
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you. Feel free to reach out through any of the channels
              below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-brand-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="text-white hover:text-brand-400 transition-colors font-medium"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Contact Button */}
              <Link
                href="mailto:achemnomaer@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 text-gray-900 rounded-lg hover:bg-brand-400 transition-all duration-300 font-medium"
              >
                <FiMail className="w-5 h-5" />
                Send Email
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-8" variants={staggerItem}>
              <h3 className="text-xl font-semibold text-white mb-6">
                Follow Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-brand-400"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-brand-400 transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-white group-hover:text-brand-400 transition-colors font-medium">
                        {social.label}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
                <h4 className="text-white font-medium mb-2">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to reach out via phone or LinkedIn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
