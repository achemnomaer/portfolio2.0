"use client";

import profileImg from "@/assets/profile3.jpeg";
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
  SiSanity,
  SiSupabase,
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
        { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" }, // Supabase green
        { name: "Sanity", icon: SiSanity, color: "#F03E2F" }, // Sanity red
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
      period: "August 2024 – Present",
      link: "https://gecare.co.uk",
    },
    {
      company: "ANProperty",
      position: "Full Stack Developer (Freelance)",
      period: "2024",
      link: "https://anpropertybd.com/en",
    },
    {
      company: "Job Jatraa",
      position: "Frontend Developer (Freelance)",
      period: "2025",
      link: "https://jobjatraa.com",
    },
    {
      company: "ANTGEC",
      position: "Full Stack Developer (Freelance)",
      period: "2025",
      link: "https://antgec.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20 md:py-36">
      <motion.section
        className="px-4 sm:px-6 lg:px-8"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Personal Introduction */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start"
            variants={staggerItem}
          >
            <motion.div className="space-y-8 lg:col-span-6" {...fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Hi, I&apos;m Achem Habib Nomaer.
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m a passionate and detail-oriented Full Stack Web
                  Developer with 1+ years of experience building robust and
                  scalable web applications. I specialize in MERN (MongoDB,
                  Express.js, React, Node.js) and Django stacks, and enjoy
                  creating clean, efficient code that brings ideas to life.
                </p>

                <p>
                  Over the past year, I’ve worked on a variety of real-world
                  projects including education consultancy portals, real estate
                  website, career preparation platform and international event
                  management website. Whether it&apos;s designing intuitive user
                  interfaces or building secure RESTful APIs, I enjoy solving
                  problems with clean, maintainable code.
                </p>
                <p>
                  I’m currently working as a full-time developer and always open
                  to learning new technologies — especially in the fields of
                  artificial intelligence and machine learning, which deeply
                  fascinate me.
                </p>
                <p>
                  Beyond the screen, I’m a cricket lover, an occasional
                  gym-goer, and a seeker of good vibes, laughter, and meaningful
                  friendships. I’m also passionate about exploring philosophical
                  ideas, questioning the world around us, and imagining where
                  technology might take us — maybe even through time.
                </p>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-end lg:col-span-4"
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
                      className="text-gray-400 hover:text-brand-400 transition-colors text-3xl md:text-4xl font-semibold"
                    >
                      {exp.company}
                    </a>
                  </Link>

                  <h3 className="text-lg text-white">{exp.position}</h3>

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
