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

  // Animation Variants
  // Reuse these (or similar) across multiple sections for a consistent animation style
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
      className="text-white min-h-[70vh] max-w-6xl mx-auto px-4 py-16"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // Optional: if you want it to animate again each time it enters the viewport,
      // remove `once: true` above.
    >
      {/* Title */}
      <motion.div
        className="mx-auto max-w-3xl text-center mb-8 space-y-4"
        variants={titleVariants}
      >
        <motion.span
          className="px-3 py-1 bg-purple-600/10 text-brand-500 rounded-full text-sm tracking-wide"
          variants={titleVariants}
        >
          About Me
        </motion.span>
        <motion.h1
          className="uppercase text-3xl md:text-4xl font-extrabold"
          variants={titleVariants}
        >
          Get To Know Me
        </motion.h1>
      </motion.div>

      {/* Tabs Navigation */}
      <motion.div
        className="flex items-end justify-center"
        role="tablist"
        aria-orientation="horizontal"
        variants={contentVariants}
      >
        {TABS.map((tab) => (
          <motion.button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 text-sm font-medium 
              border border-b-0 border-gray-700 
              rounded-t-md focus:outline-none
              transition-colors
              ${
                activeTab === tab.id
                  ? "bg-gray-900 text-brand-500 shadow-sm"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Fixed Border for Tab Panel */}
      <motion.div
        className="p-4 border border-gray-700 rounded-b-md min-h-[60vh]"
        variants={contentVariants}
      >
        {/* AnimatePresence to animate tab content in/out */}
        <AnimatePresence mode="wait">
          {TABS.map((tab) =>
            activeTab === tab.id ? (
              <motion.div
                key={tab.id}
                id={`tab-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                className="md:p-6"
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
    </motion.section>
  );
}
