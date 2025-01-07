"use client";

import { SquareChevronRight } from "lucide-react";
import { DiVisualstudio } from "react-icons/di";
import { FaPython } from "react-icons/fa";

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

export default function SkillsTabContent() {
  const skillSections = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          description: "Markup Language for Web Pages",
          icon: SiHtml5,
          color: "#E34F26",
        },
        {
          name: "CSS",
          description: "Style Sheet Language for Web Pages",
          icon: SiCss3,
          color: "#1572B6",
        },
        {
          name: "Tailwindcss",
          description: "Utility-first CSS",
          icon: SiTailwindcss,
          color: "#38BDF8",
        },
        {
          name: "JavaScript",
          description: "Dynamic Programming Language for the Web",
          icon: SiJavascript,
          color: "#F7DF1E",
        },

        {
          name: "React",
          description: "UI Library",
          icon: SiReact,
          color: "#61DBFB",
        },
        {
          name: "Next.js",
          description: "React Framework",
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
          description: "JavaScript Runtime",
          icon: SiNextdotjs,
          color: "#339933",
        },
        {
          name: "Express",
          description: "Node.js Framework",
          icon: SiExpress,
          color: "#FFFFFF",
        },
        {
          name: "Python",
          description: "General-purpose Language",
          icon: FaPython,
          color: "#306998",
        },

        {
          name: "Django",
          description: "Python Framework",
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
          description: "NoSQL Database",
          icon: SiMongodb,
          color: "#47A248",
        },
        {
          name: "PostgreSQL",
          description: "Relational Database",
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
          description: "Version Control System",
          icon: SiGit,
          color: "#F05033",
        },
        {
          name: "Docker",
          description: "Containerization Platform",
          icon: SiDocker,
          color: "#2496ED",
        },
        {
          name: "Postman",
          description: "API Development Environment",
          icon: SiPostman,
          color: "#FF6C37",
        },
        {
          name: "VS Code",
          description: "Code Editor",
          icon: DiVisualstudio,
          color: "#007ACC",
        },
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-white">Skills</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-12">
        {skillSections.map((section) => (
          <div key={section.title} className="space-y-4">
            {/* Section Title */}
            <h3 className="flex gap-x-2">
              <SquareChevronRight className="w-5 h-5 text-brand-500" />
              <span className="font-semibold text-gray-300">
                {section.title}
              </span>
            </h3>

            {/* Grid of Skill Cards */}
            <div className="flex flex-wrap gap-6">
              {section.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  {/* Skill Icon */}
                  <div>
                    <skill.icon size={28} color={skill.color} />
                  </div>

                  {/* Name & Description */}
                  <div>
                    <h4 className="text-white font-medium sm:text-lg leading-tight">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
