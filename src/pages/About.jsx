// About.jsx
import { FiDownload } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[#0b0713] text-white px-4 sm:px-6 py-12 sm:py-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                     font-serif font-bold mb-6 sm:mb-12 text-purple-400"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg font-serif 
                     text-gray-300 leading-relaxed mb-6 sm:mb-10"
        >
          Hello, I'm{" "}
          <span className="font-semibold text-white">Aman Patel</span>, passionate
          about building practical and efficient web & mobile applications. I have
          completed a full-stack development course and am always learning new
          technologies to improve my skills. My goal is to start my career in the IT
          industry by 2027, focusing on real-world projects and teamwork. I am
          committed to continuous growth and plan to move towards AI and data science
          as I gain experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-14"
        >
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Aman-Resume.pdf"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 
                       rounded-xl font-serif bg-purple-600 text-white font-medium
                       shadow-[0_0_20px_rgba(147,51,234,0.6)]
                       hover:shadow-[0_0_35px_rgba(147,51,234,0.9)]
                       transition text-sm sm:text-base"
          >
            <FiDownload className="text-base sm:text-lg" />
            Download Resume
          </a>

          {/* View Projects */}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 
                       rounded-xl border border-purple-500 text-purple-400 font-medium
                       hover:bg-purple-600 hover:text-white font-serif transition
                       text-sm sm:text-base"
          >
            <BiCodeAlt className="text-base sm:text-lg" />
            View Projects
          </Link>
        </motion.div>
      </div>

      {/* Education Boxes */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                   gap-4 sm:gap-6 max-w-5xl w-full mt-6 sm:mt-10 px-2"
      >
        {/* College */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] 
                     p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-105 
                     transition-transform duration-300"
        >
          <motion.span
            className="absolute top-3 right-3 sm:top-4 sm:right-4 
                       text-lg sm:text-2xl font-serif text-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            7.55 <span className="text-xs sm:text-[13px]">cgpa</span>
          </motion.span>
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                          bg-gray-800 rounded-full mb-3 sm:mb-4 text-purple-400">
            <GraduationCap size={24} className="sm:size-7" />
          </div>
          <h3 className="text-base sm:text-lg font-serif font-semibold text-white">
            B.Tech in Computer Science
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            RGPV University (2022 - 2026)
          </p>
        </motion.div>

        {/* 12th */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] 
                     p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-105 
                     transition-transform duration-300"
        >
          <motion.span
            className="absolute top-3 right-3 sm:top-4 sm:right-4 
                       text-lg sm:text-2xl font-serif font-bold text-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            75.6 <span className="text-xs sm:text-[13px]">per.</span>
          </motion.span>
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                          bg-gray-800 rounded-full mb-3 sm:mb-4 text-green-400">
            <BookOpen size={24} className="sm:size-7" />
          </div>
          <h3 className="text-base sm:text-lg font-serif font-semibold text-white">
            Higher Secondary (12th)
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Vindhya Acad. Churhat, Sidhi (2021 - 2022)
          </p>
        </motion.div>

        {/* 10th */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] 
                     p-5 sm:p-6 rounded-2xl shadow-lg hover:scale-105 
                     transition-transform duration-300"
        >
          <motion.span
            className="absolute top-3 right-3 sm:top-4 sm:right-4 
                       text-lg sm:text-2xl font-serif font-bold text-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            81 <span className="text-xs sm:text-[13px]">per.</span>
          </motion.span>
          <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 
                          bg-gray-800 rounded-full mb-3 sm:mb-4 text-blue-400">
            <Award size={24} className="sm:size-7" />
          </div>
          <h3 className="text-base sm:text-lg font-serif font-semibold text-white">
            Secondary (10th)
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Takshashila Public School (2019 - 2020)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
