import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'utility', label: 'Utilities & Games' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="border-b border-neutral-900 pb-24 pt-16">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-light"
      >
        Featured <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold">Projects</span>
      </motion.h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeFilter === cat.id
                ? 'bg-purple-650 text-white border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                : 'bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
                
                {/* Hover overlay links */}
                <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href="https://github.com/soorajdotk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 bg-neutral-900 border border-neutral-850 rounded-xl text-white hover:text-purple-400 hover:border-purple-500 transition-all duration-200"
                    title="View Source"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="text-xs uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-500 font-semibold tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-neutral-450 text-sm leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-neutral-900">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-semibold text-purple-300 bg-purple-950/40 border border-purple-900/35 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
