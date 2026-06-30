import React from "react";
import { SKILLS_CATEGORIES } from "../constants";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiSolidity, SiTailwindcss, SiFirebase, SiPostgresql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  // Define icons mapping for the core tech floating showcase
  const coreTech = [
    { icon: <RiReactjsLine className="text-cyan-400" />, duration: 2.5, name: "React" },
    { icon: <SiSolidity className="text-purple-400" />, duration: 3, name: "Solidity" },
    { icon: <FaNodeJs className="text-green-500" />, duration: 2, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, duration: 3.5, name: "MongoDB" },
    { icon: <SiPostgresql className="text-sky-500" />, duration: 2.8, name: "PostgreSQL" },
    { icon: <SiTailwindcss className="text-cyan-500" />, duration: 3.2, name: "Tailwind CSS" },
    { icon: <SiFirebase className="text-amber-500" />, duration: 2.4, name: "Firebase" },
  ];

  return (
    <section id="technologies" className="border-b border-neutral-900 pb-24 pt-16">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-light"
      >
        Skills & <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold">Technologies</span>
      </motion.h2>

      {/* Floating Core Tech Icons */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-6 mb-16"
      >
        {coreTech.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border border-neutral-800 p-4 glass-card shadow-lg hover:border-purple-500 transition-colors duration-300 cursor-pointer"
            title={tech.name}
          >
            <div className="text-5xl md:text-6xl">{tech.icon}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 border-b border-neutral-800 pb-2">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-neutral-900/60 hover:bg-neutral-850 hover:text-white border border-neutral-800 rounded-lg text-sm text-neutral-400 font-medium transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
