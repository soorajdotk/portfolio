import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen bg-neutral-950">
      {/* Absolute Backdrop Gradient Layout */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>
      </div> 

      {/* Navigation */}
      <Navbar />

      {/* Main Content Container with Top padding for fixed nav */}
      <main className="container mx-auto px-6 md:px-12 lg:px-16 pt-20 max-w-7xl">
        <Hero />
        <About />
        <Technologies />
        <Timeline />
        <Projects />
        <Resume />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
