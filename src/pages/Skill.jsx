import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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

export default function Skills() {
  return (
    <section
      id="skill"
      className="relative min-h-screen overflow-hidden 
                 bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      {/* Floating Glow (same as home) */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-0 top-20 h-60 w-60 rounded-full bg-purple-600/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-white/10 border border-cyan-400/30 
                       text-cyan-200 text-sm backdrop-blur-xl">
            <Sparkles size={16} />
            My Expertise
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black font-serif">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.07, y: -6 }}
              className="group relative p-[1.5px] rounded-3xl 
                         bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
            >
              {/* Glass Card */}
              <div className="relative rounded-3xl bg-slate-950/90 backdrop-blur-xl p-5 flex flex-col items-center text-center border border-white/10">

                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Icon */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-12 w-12 mb-4 relative z-10"
                />

                {/* Name */}
                <h3 className="text-sm md:text-base font-semibold relative z-10">
                  {skill.name}
                </h3>

                {/* Percentage */}
                <span className="text-xs text-gray-400 mb-3 relative z-10">
                  {skill.level}%
                </span>

                {/* Progress */}
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}