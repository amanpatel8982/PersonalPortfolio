import { FiDownload } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GraduationCap, BookOpen, Award } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate(); // ✅ Hook initialized

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
          <button
            onClick={() => navigate("/portfolio")} // ✅ navigation here
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 
                       rounded-xl border border-purple-500 text-purple-400 font-medium
                       hover:bg-purple-600 hover:text-white font-serif transition
                       text-sm sm:text-base"
          >
            <BiCodeAlt className="text-base sm:text-lg" />
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Education Boxes (same as before) */}
      {/* ...rest of your education section code... */}
    </section>
  );
}
