import React from "react";
import { ABOUT_TEXT } from "../constants";
import aboutpic from "../assets/assets/aboutmee.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-20 pt-16">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-light"
      >
        About <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold">Me</span>
      </motion.h2>
      
      <div className="flex flex-wrap lg:flex-nowrap gap-12 items-center justify-center">
        {/* Left Column - Image & Quick Stats */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/5 flex flex-col items-center justify-center"
        >
          <div className="relative group max-w-sm rounded-2xl overflow-hidden border-2 border-neutral-800 p-2 glass-panel transition-all duration-300 hover:border-purple-500">
            <img 
              className="rounded-xl w-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
              src={aboutpic} 
              alt="About Sooraj K" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-sm text-center">
            <div className="p-3 rounded-xl glass-card">
              <span className="block text-2xl font-bold text-purple-400">10+</span>
              <span className="text-xs text-neutral-400">Projects</span>
            </div>
            <div className="p-3 rounded-xl glass-card">
              <span className="block text-2xl font-bold text-cyan-400">1</span>
              <span className="text-xs text-neutral-400">Internship</span>
            </div>
            <div className="p-3 rounded-xl glass-card">
              <span className="block text-2xl font-bold text-pink-400">5+</span>
              <span className="text-xs text-neutral-400">Credentials</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Polished Bio */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5"
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 leading-relaxed text-neutral-300">
            <h3 className="text-xl font-semibold mb-4 text-white">Full Stack & Blockchain Engineer</h3>
            {ABOUT_TEXT.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-justify text-neutral-400">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-purple-300">Fast Learner</span>
              <span className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-cyan-300">Problem Solver</span>
              <span className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-pink-300">Collaborative</span>
              <span className="rounded-full bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-amber-300">Web3 Visionary</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
