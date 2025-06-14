"use client";

import AboutTabContent from "@/components/about/AboutTabContent";
import EducationTabContent from "@/components/about/EducationTabContent";
import ExperienceTabContent from "@/components/about/ExperienceTabContent";
import SkillsTabContent from "@/components/about/SkillsTabContent";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);

  const TABS = [
    { id: 1, label: "About", content: <AboutTabContent /> },
    { id: 2, label: "Skills", content: <SkillsTabContent /> },
    { id: 3, label: "Experience", content: <ExperienceTabContent /> },
    { id: 4, label: "Education", content: <EducationTabContent /> },
  ];

  const handleTabClick = (tabId) => setActiveTab(tabId);

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
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

        {/* Tabs Navigation */}
        <motion.div
          className="flex items-center justify-center mb-8"
          role="tablist"
          aria-orientation="horizontal"
          variants={contentVariants}
        >
          <div className="flex bg-gray-800 rounded-lg p-1">
            {TABS.map((tab) => (
              <motion.button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`tab-panel-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand-500 text-gray-900 shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          className="bg-gray-800 rounded-xl p-8 min-h-[60vh]"
          variants={contentVariants}
        >
          <AnimatePresence mode="wait">
            {TABS.map((tab) =>
              activeTab === tab.id ? (
                <motion.div
                  key={tab.id}
                  id={`tab-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={contentVariants}
                >
                  {tab.content}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}