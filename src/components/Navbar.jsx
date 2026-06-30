import React from 'react';
import logo from "../assets/assets/Logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 glass-panel border-b border-neutral-900 shadow-lg">
      <div className="flex flex-shrink-0 items-center">
        <a href="#hero">
          <img className="h-12 w-auto opacity-95 hover:opacity-100 transition-opacity" src={logo} alt="Sooraj Logo" />
        </a>
      </div>

      <div className="flex items-center gap-6 text-xl md:text-2xl text-neutral-400">
        <a
          href="https://linkedin.com/in/sooraj-k-b34633230/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors"
          title="LinkedIn Profile"
          id="nav-linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/soorajdotk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors"
          title="GitHub Profile"
          id="nav-github"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SoorajK76983"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          title="Twitter Profile"
          id="nav-twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:soorajsoorajk136@gmail.com"
          className="hover:text-pink-400 transition-colors"
          title="Email Contact"
          id="nav-email"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
