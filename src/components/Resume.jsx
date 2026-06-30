import React from 'react';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Resume() {
  return (
    <section id="resume" className="border-b border-neutral-900 pb-20 pt-16">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex gap-4 items-start text-center md:text-left">
          <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/30 text-purple-400 text-3xl md:text-4xl hidden sm:block">
            <FaFilePdf />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Curious about the full details?</h3>
            <p className="text-sm text-neutral-450 leading-relaxed">
              Download my complete printable resume to view full details about my education, coursework, internships, and technical competencies.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`${import.meta.env.BASE_URL}SOORAJ K Resume.pdf`}
          download='Sooraj_K_Resume.pdf'
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white text-neutral-950 hover:bg-neutral-200 transition-colors shadow-lg whitespace-nowrap cursor-pointer"
        >
          <FaDownload className="text-sm" />
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Resume;
