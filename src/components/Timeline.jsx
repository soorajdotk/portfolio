import React from "react";
import { TIMELINE_EVENTS } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaAward, FaCalendarAlt } from "react-icons/fa";

const getIcon = (category) => {
  switch (category) {
    case "experience":
      return <FaBriefcase className="text-cyan-400" />;
    case "education":
      return <FaGraduationCap className="text-pink-400" />;
    case "certification":
    default:
      return <FaAward className="text-amber-400" />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case "experience":
      return "border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)]";
    case "education":
      return "border-pink-500/30 shadow-[0_0_15px_rgba(244,63,94,0.15)]";
    case "certification":
    default:
      return "border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]";
  }
};

const Timeline = () => {
  return (
    <section id="timeline" className="border-b border-neutral-900 pb-24 pt-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-light"
      >
        My <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold">Journey</span>
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        {/* Central Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-neutral-800 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {TIMELINE_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                
                {/* Node Icon */}
                <motion.div
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className={`absolute left-2 md:left-1/2 transform -translate-x-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 border-2 ${getCategoryColor(event.category)}`}
                >
                  {getIcon(event.category)}
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${
                    isEven ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div className="glass-card p-6 rounded-2xl relative hover:scale-[1.01] transition-transform duration-300">
                    {/* Timestamp Pill */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-neutral-900 border border-neutral-850 ${
                      event.category === 'experience' ? 'text-cyan-400' : event.category === 'education' ? 'text-pink-400' : 'text-amber-400'
                    }`}>
                      <FaCalendarAlt className="text-[10px]" />
                      {event.date}
                    </div>

                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <h4 className="text-sm font-medium text-neutral-400 mt-1 mb-3">{event.subtitle}</h4>
                    
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{event.description}</p>
                    
                    {/* Technology tags */}
                    <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {event.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-500 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
