import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self Employed",
    duration: "Last 2 Months",
    desc: "Started freelancing recently and worked on multiple real-world projects including full-stack web apps, UI/UX design and deployment. Gained practical client handling and production-level experience.",
    link: "https://sapphald.vercel.app/",
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Wipro Skill High",
    duration: "Mar 2025 - May 2025",
    desc: "Completed 3 months internship where I learned and built projects using React, Node.js, Express and MongoDB. Gained hands-on experience in real industry workflows.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden 
                 bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      {/* Glow Effects */}
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

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-white/10 border border-cyan-400/30 
                       text-cyan-200 text-sm backdrop-blur-xl">
            <Sparkles size={16} />
            My Journey
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black font-serif">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-6 space-y-12">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[14px] top-2 h-6 w-6 rounded-full 
                              bg-gradient-to-r from-fuchsia-500 to-cyan-400 
                              flex items-center justify-center shadow-lg">
                <Briefcase size={14} />
              </div>

              {/* Card */}
              <div className="relative p-[1.5px] rounded-2xl 
                              bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 
                              group-hover:scale-[1.02] transition">

                <div className="rounded-2xl bg-slate-950/90 backdrop-blur-xl p-6 border border-white/10">

                  {/* Shine Effect */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <h3 className="text-lg md:text-xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-cyan-300 mt-1">
                    {exp.company}
                  </p>

                  <span className="text-xs text-gray-400 block mt-1">
                    {exp.duration}
                  </span>

                  <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* 🔥 Portfolio Button */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-5 px-4 py-2 text-sm 
                                 font-medium rounded-full 
                                 bg-gradient-to-r from-fuchsia-500 to-cyan-400 
                                 hover:scale-105 transition"
                    >
                      View Portfolio
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}