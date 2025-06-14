"use client";

import profileImg from "@/assets/profile2.png";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DiVisualstudio } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFacebook,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiX,
} from "react-icons/si";

export default function About() {
  const socials = [
    {
      icon: <SiGithub className="w-6 h-6" />,
      href: "https://github.com/achemnomaer",
    },
    {
      icon: <SiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/achem-habib-nomaer-62865b17a/",
    },
    {
      icon: <SiX className="w-5 h-5" />,
      href: "https://x.com/achemnomaer",
    },
    {
      icon: <SiFacebook className="w-5 h-5" />,
      href: "https://www.facebook.com/achem.habibnomaer",
    },
  ];

  const skillSections = [
    {
      title: "FRONTEND",
      skills: [
        { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DBFB" },
        { name: "Next.Js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
      ],
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.Js", icon: SiNextdotjs, color: "#339933" },
        { name: "Express.Js", icon: SiExpress, color: "#FFFFFF" },
        { name: "Python", icon: FaPython, color: "#306998" },
        { name: "Django", icon: SiDjango, color: "#0C4B33" },
      ],
    },
    {
      title: "DATABASE",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#31648C" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "TOOLS",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05033" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" },
      ],
    },
  ];

  const experiences = [
    {
      company: "Global Education Care",
      position: "Full Stack Developer",
      period: "August 2024 - Present",
      link: "https://gecare.co.uk",
    },
    {
      company: "ANProperty",
      position: "Full Stack Developer (Freelance)",
      period: "2024",
      link: "https://anpropertybd.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Personal Introduction */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            variants={staggerItem}
          >
            <motion.div className="space-y-8" {...fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Hi, I&apos;m Achem Habib Nomaer.
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a full-stack developer dedicated to turning ideas
                  into creative solutions. I specialize in creating seamless and
                  intuitive user experiences.
                </p>

                <p>
                  My approach focuses on creating scalable, high-performing
                  solutions tailored to both user needs and business objectives.
                  By prioritizing performance, accessibility, and
                  responsiveness, I strive to deliver experiences that not only
                  engage users but also drive tangible results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
                    Email
                  </p>
                  <p className="text-white text-lg">achemnomaer@gmail.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
                    Phone
                  </p>
                  <p className="text-white text-lg">+8801889197863</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
                    Location
                  </p>
                  <p className="text-white text-lg">Chittagong, Bangladesh</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
                    Socials
                  </p>
                  <div className="flex items-center gap-4">
                    {socials.map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        passHref
                        legacyBehavior
                      >
                        <a
                          target="_blank"
                          className="text-gray-400 hover:text-brand-400 transition-colors"
                        >
                          <motion.span whileHover={{ scale: 1.2 }}>
                            {social.icon}
                          </motion.span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              {...fadeInRight}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg max-w-md"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={profileImg || "/placeholder.svg"}
                  alt="Achem Habib Nomaer"
                  className="object-cover rounded-lg w-full"
                  priority={true}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* My Stack Section */}
          <motion.div className="space-y-16" variants={staggerItem}>
            <div className="flex items-center gap-4">
              <span className="text-brand-400 text-2xl">*</span>
              <h2 className="text-2xl font-light text-gray-300 uppercase tracking-wider">
                MY STACK
              </h2>
            </div>

            <div className="space-y-12">
              {skillSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                >
                  {/* Category Title - Left Side */}
                  <div className="lg:text-right">
                    <h3 className="text-4xl md:text-5xl font-light text-gray-500 uppercase tracking-wider">
                      {section.title}
                    </h3>
                  </div>

                  {/* Skills - Right Side */}
                  <div className="flex flex-wrap gap-4">
                    {section.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: sectionIndex * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <skill.icon size={20} color={skill.color} />
                        <span className="text-white font-medium text-sm">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Experience Section */}
          <motion.div className="space-y-16" variants={staggerItem}>
            <div className="flex items-center gap-4">
              <span className="text-brand-400 text-2xl">*</span>
              <h2 className="text-2xl font-light text-gray-300 uppercase tracking-wider">
                MY EXPERIENCE
              </h2>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link href={exp.link} passHref legacyBehavior>
                    <a
                      target="_blank"
                      className="text-gray-400 hover:text-brand-400 transition-colors text-lg"
                    >
                      {exp.company}
                    </a>
                  </Link>

                  <h3 className="text-3xl md:text-4xl font-semibold text-white">
                    {exp.position}
                  </h3>

                  <p className="text-gray-500 text-lg">{exp.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
