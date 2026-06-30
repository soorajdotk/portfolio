import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/assets/hero.jpg";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="border-b border-neutral-900 pb-16 lg:mb-20 pt-8">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-12">
        
        {/* Left text description */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-light tracking-tight lg:text-7xl text-white"
            >
              SOORAJ K
            </motion.h1>
            
            <motion.span 
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent font-medium"
            >
              Full Stack & Blockchain Developer
            </motion.span>
            
            <motion.p 
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl py-4 font-light leading-relaxed text-neutral-400 text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-2"
            >
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full text-sm font-semibold bg-white text-neutral-950 border border-transparent hover:bg-neutral-250 transition-colors shadow-lg"
              >
                View Work
              </a>
              <a 
                href="#timeline" 
                className="px-6 py-3 rounded-full text-sm font-semibold border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition-colors"
              >
                My Journey
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right profile image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-8">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative max-w-sm rounded-3xl overflow-hidden border-2 border-neutral-850 p-2 glass-panel shadow-2xl"
          >
            <img 
              className="rounded-2xl w-full h-auto object-cover" 
              src={profilepic} 
              alt="Sooraj K Profile" 
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Button */}
      <div className="fixed bottom-10 right-10 z-40">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScroll} 
          className="p-3.5 bg-neutral-900 border border-neutral-800 rounded-full text-white shadow-xl hover:border-purple-500 transition-colors cursor-pointer"
          title={isBottom ? "Scroll to Top" : "Scroll to Bottom"}
        >
          {isBottom ? (
            <FaArrowUp className="text-xl animate-pulse text-purple-400" />
          ) : (
            <FaArrowDown className="text-xl animate-pulse text-cyan-400" />
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
