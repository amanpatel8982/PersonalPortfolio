import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"; 
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Certificate from "./Certificate";

export default function Home() {
  const cursorRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false); // ✅ flip state

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
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden cursor-none">
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
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-center md:text-left"
          >
            {/* ... (tumhara left side ka code same rahega) */}
          </motion.div>

          {/* Right Content (Flip Card with Click) */}
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <div
              className={`flip-card w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] 
                          h-[320px] sm:h-[400px] md:h-[450px] lg:h-[550px] relative`}
              onClick={() => setIsFlipped(!isFlipped)} // ✅ click se toggle
            >
              <div
                className={`flip-card-inner transition-transform duration-700 ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side (Coding Animation) */}
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <DotLottieReact
                    className="w-full h-full"
                    src="https://lottie.host/e9a723c4-74bb-4751-bf98-c9111379a1ed/3XV0yDYupT.lottie"
                    loop
                    autoplay
                  />
                  <p className="text-white font-serif text-center mt-2 text-sm sm:text-base">
                    Look me
                  </p>
                </div>

                {/* Back Side (Your Photo) */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
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
