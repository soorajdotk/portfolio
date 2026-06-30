import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contacts = () => {
  return (
    <section id="contact" className="pb-20 pt-16">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-light"
      >
        Get In <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent font-semibold">Touch</span>
      </motion.h2>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto glass-card p-8 rounded-2xl text-center"
      >
        <p className="text-neutral-400 mb-8">
          Feel free to reach out for internship opportunities, project collaborations, or Web3 discussions!
        </p>

        <div className="space-y-6 text-neutral-350">
          <div className="flex items-center justify-center gap-3">
            <FaMapMarkerAlt className="text-pink-400 text-lg flex-shrink-0" />
            <span>{CONTACT.address}</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaPhone className="text-cyan-400 text-lg flex-shrink-0" />
            <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-cyan-300 transition-colors">
              {CONTACT.phoneNo}
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-purple-400 text-lg flex-shrink-0" />
            <a 
              href={`mailto:${CONTACT.email}`} 
              className="hover:text-purple-300 transition-colors border-b border-dashed border-neutral-700 hover:border-purple-300 pb-0.5"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-900 text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Sooraj K. All rights reserved.
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
