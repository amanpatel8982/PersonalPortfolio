import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react"; // ✅ Added
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Certificate from "./Certificate";

export default function Home() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center  bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden cursor-none">
        {/* 🌟 Cursor Blur Effect */}
        <div
          ref={cursorRef}
          className="fixed w-92 h-92 rounded-full pointer-events-none 
                     bg-gradient-to-r from-cyan-800 via-purple-800 to-pink-800 
                     opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-50"
        ></div>

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            <motion.p
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block px-5 py-2 mt-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-xs sm:text-sm font-medium"
            >
              🚀 Ready to Innovate
            </motion.p>

            <motion.h1
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-10 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              <span className="text-gray-200">Full Stack </span>
              <span className="text-purple-400">Developer</span>
            </motion.h1>

            <div className="h-8 flex items-center justify-center md:justify-start">
              <motion.span
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-10 font-serif text-lg sm:text-xl md:text-2xl"
              >
                Computer Science Engg. - AIML
              </motion.span>
            </div>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="mt-6 font-serif text-sm sm:text-base md:text-lg text-gray-300"
            >
              Enhancing digital experiences that are smooth, scalable, and made
              to impress.
            </motion.p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 font-serif">
              {["React", "JavaScript", "Node.js", "Express.js"].map((tech, i) => (
                <motion.span
                  key={tech}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="px-4 py-1 rounded-full bg-gray-500/70 text-xs sm:text-sm hover:bg-purple-600 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#projects"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white 
             shadow-[0_0_20px_rgba(247,51,234,0.6)] hover:bg-purple-600 text-sm sm:text-base"
              >
                Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#contact"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white 
             shadow-[0_0_20px_rgba(247,51,234,0.6)] hover:bg-purple-600 text-sm sm:text-base"
              >
                Contact
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mt-10">
              {[
                { icon: <FaGithub size={20} />, link: "https://github.com/" },
                { icon: <FaLinkedin size={20} />, link: "https://linkedin.com/" },
                { icon: <FaInstagram size={20} />, link: "https://instagram.com/" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition shadow-md"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content (Animation + Flip Card) */}
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <div className="flip-card w-[450px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] relative">
              <div className="flip-card-inner">
                {/* Front Side (Coding Animation) */}
                <div className="flip-card-front">
                  <DotLottieReact
                    className="w-full h-130 mt-20 ms-20"
                    src="https://lottie.host/e9a723c4-74bb-4751-bf98-c9111379a1ed/3XV0yDYupT.lottie"
                    loop
                    autoplay
                  />
                </div>
                <p className="text-white font-serif text-center mt-4 text-sm sm:text-base">
                  Look me
                </p>

                {/* Back Side (Your Photo) */}
                <div className="flip-card-back">
                  <img
                    src="Aman2.jpg"
                    alt="me"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Skill />
      <Portfolio />
      <Certificate />
      <Contact />
    </>
  );
}