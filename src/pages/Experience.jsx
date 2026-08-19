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

export default function Experience({ embedded = false }) {
  const HeadingTag = embedded ? "h2" : "h1";

  return (
    <section
      id="experience"
      className="page-section relative bg-transparent text-white"
    >
      {!embedded && (
        <>
          <motion.div
            animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="pointer-events-none absolute left-0 top-20 hidden h-60 w-60 rounded-full bg-purple-600/20 blur-3xl md:block"
            aria-hidden="true"
          />

          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="pointer-events-none absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl md:block"
            aria-hidden="true"
          />
        </>
      )}

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

          <HeadingTag className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </span>
          </HeadingTag>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10 before:absolute before:bottom-3 before:left-3 before:top-3 before:w-px before:bg-white/20 sm:space-y-12 sm:before:left-4">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative grid min-w-0 grid-cols-[24px_minmax(0,1fr)] gap-4 sm:grid-cols-[32px_minmax(0,1fr)] sm:gap-5"
            >
              {/* Dot */}
              <div className="relative z-10 mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-lg sm:mx-auto">
                <Briefcase size={13} />
              </div>

              {/* Card */}
              <div className="relative min-w-0 rounded-2xl p-[1.5px]
                              bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 
                              group-hover:scale-[1.02] transition">

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-5 backdrop-blur-xl sm:p-6">

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
                      className="relative z-10 mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm
                                 font-medium rounded-full 
                                 bg-gradient-to-r from-fuchsia-700 to-cyan-700
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
