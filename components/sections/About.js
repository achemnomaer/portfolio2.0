"use client";

import profileImg from "@/assets/profile2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SquareChevronRight } from "lucide-react";
import { DiVisualstudio } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: SiHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS",
          icon: SiCss3,
          color: "#1572B6",
        },
        {
          name: "Tailwindcss",
          icon: SiTailwindcss,
          color: "#38BDF8",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#F7DF1E",
        },
        {
          name: "React",
          icon: SiReact,
          color: "#61DBFB",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#FFFFFF",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: SiNextdotjs,
          color: "#339933",
        },
        {
          name: "Express",
          icon: SiExpress,
          color: "#FFFFFF",
        },
        {
          name: "Python",
          icon: FaPython,
          color: "#306998",
        },
        {
          name: "Django",
          icon: SiDjango,
          color: "#0C4B33",
        },
      ],
    },
    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#31648C",
        },
      ],
    },
    {
      title: "Dev Tools",
      skills: [
        {
          name: "Git",
          icon: SiGit,
          color: "#F05033",
        },
        {
          name: "Docker",
          icon: SiDocker,
          color: "#2496ED",
        },
        {
          name: "Postman",
          icon: SiPostman,
          color: "#FF6C37",
        },
        {
          name: "VS Code",
          icon: DiVisualstudio,
          color: "#007ACC",
        },
      ],
    },
  ];

  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
        >
          <span className="px-3 py-1 bg-brand-500/10 text-brand-400 rounded-full text-sm tracking-wide font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Get To Know Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn more about my journey, skills, and experiences in web development.
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text Content */}
            <div className="lg:w-2/3 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">This is me.</h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Hey there! I'm a full-stack developer who loves turning ideas into
                  slick, user-friendly web apps (and occasionally making my computer
                  question its existence). With expertise in React.js, Next.js,
                  Django, and Express.js, I've built apps for education platforms to
                  real estate and e-commerce sites—basically, if it involves code, I'm
                  in.
                </p>

                <p>
                  When I'm not wrestling with my code, you'll find me chasing cricket
                  balls, kicking around a football, or pretending I'm the Hulk at the
                  gym. And if there's still time, I'm usually laughing it up with
                  friends.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400 mb-1">
                    Email
                  </p>
                  <p className="font-medium text-lg text-white">achemnomaer@gmail.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400 mb-1">
                    Phone
                  </p>
                  <p className="font-medium text-lg text-white">+8801889197863</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400 mb-1">
                    Location
                  </p>
                  <p className="font-medium text-lg text-white">Chittagong, Bangladesh</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase text-gray-400 mb-1">
                    Socials
                  </p>
                  <ul className="flex items-center gap-x-5 text-lg">
                    {socials.map((social, index) => (
                      <Link key={index} href={social.href} passHref legacyBehavior>
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
                  </ul>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/3">
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={profileImg}
                  alt="Achem Habib Nomaer"
                  className="object-cover rounded-lg w-full"
                  priority={true}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* My Stack Section */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <SquareChevronRight className="w-6 h-6 text-brand-400" />
            <h3 className="text-2xl font-bold text-white">My Stack</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {skillSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-xl font-semibold text-gray-300 uppercase tracking-wider">
                  {section.title}
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <skill.icon size={24} color={skill.color} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* My Experience Section */}
        <motion.div
          className="mb-20"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <SquareChevronRight className="w-6 h-6 text-brand-400" />
            <h3 className="text-2xl font-bold text-white">My Experience</h3>
          </div>

          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <Link href="https://gecare.co.uk" passHref legacyBehavior>
                  <a
                    className="text-lg font-medium text-gray-300 hover:text-brand-400 transition-colors"
                    target="_blank"
                  >
                    Global Education Care
                  </a>
                </Link>
                <span className="text-sm text-gray-500">August 2024 - Present</span>
              </div>
              
              <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
              
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                During my tenure at Global Education Care, I designed and built
                feature-rich, scalable web solutions using modern frameworks and
                best practices. Collaborating with cross-functional teams, I
                optimized performance, ensured responsive UIs, and delivered a
                seamless user experience.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Tailwindcss", "React", "Next.js", "Node.js", "Express.js", "MongoDB"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <Link href="https://anpropertybd.com" passHref legacyBehavior>
                  <a
                    className="text-lg font-medium text-gray-300 hover:text-brand-400 transition-colors"
                    target="_blank"
                  >
                    ANProperty
                  </a>
                </Link>
                <span className="text-sm text-gray-500">(Freelance)</span>
              </div>
              
              <h4 className="text-xl font-bold text-white">Full Stack Developer</h4>
              
              <p className="text-gray-300 leading-relaxed max-w-4xl">
                Developed a bilingual real estate platform with advanced search and
                filtering, responsive design, and a custom admin panel for managing
                listings. Optimized performance and ensured seamless multi-language
                support.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Tailwindcss", "React", "Next.js", "Django", "Postgresql"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-100 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={itemVariants}
        >
          <div className="flex items-center gap-3 mb-8">
            <SquareChevronRight className="w-6 h-6 text-brand-400" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-lg font-semibold text-white">
                  Bachelor of Science in Genetic Engineering and Biotechnology
                </h4>
                <span className="text-sm text-gray-500">2019 - 2024</span>
              </div>
              <p className="text-gray-300">Shahjalal University of Science and Technology</p>
              <p className="text-gray-400">Sylhet, Bangladesh</p>
            </div>

            {/* Education Item 2 */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h4 className="text-lg font-semibold text-white">
                  Higher Secondary Certificate (HSC) / 12th Grade
                </h4>
                <span className="text-sm text-gray-500">2016 - 2018</span>
              </div>
              <p className="text-gray-300">BAF Shaheen College</p>
              <p className="text-gray-400">Chittagong, Bangladesh</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}