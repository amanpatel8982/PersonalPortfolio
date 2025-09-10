// components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/html.svg", level: 100 },
  { name: "CSS", icon: "/css.svg", level: 95 },
  { name: "BootStrap", icon: "/bt.svg", level: 85 },
  { name: "Tailwind", icon: "/tailwindcss.svg", level: 90 },
  { name: "JavaScript", icon: "/javascript.svg", level: 92 },
  { name: "React + Native", icon: "/react.svg", level: 88 },
  { name: "NodeJS", icon: "/node.svg", level: 80 },
  { name: "Express", icon: "/express.svg", level: 78 },
  { name: "MongoDB", icon: "/mongodb.svg", level: 82 },
  { name: "JWT", icon: "/jwt.svg", level: 75 },
];

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 30 : -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

export default function Skills() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-600/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-12"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", i * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative p-[2px]  rounded-2xl bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 shadow-lg"
          >
            {/* Glassmorphism Card */}
            <div className="aspect-square bg-black/80 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4">
              <img src={skill.icon} alt={skill.name} className="h-12 w-12 mb-3" />
              <h3 className="text-sm md:text-base font-semibold mb-1">
                {skill.name}
              </h3>
              <span className="text-xs text-gray-400 mb-3">
                {skill.level}%
              </span>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
