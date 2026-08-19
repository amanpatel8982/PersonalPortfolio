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

export default function Skills({ embedded = false }) {
  const HeadingTag = embedded ? "h2" : "h1";

  return (
    <section
      id="skill"
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

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                       bg-white/10 border border-cyan-400/30 
                       text-cyan-200 text-sm backdrop-blur-xl">
            <Sparkles size={16} />
            My Expertise
          </p>

          <HeadingTag className="mt-5 font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Skills
            </span>
          </HeadingTag>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07, y: -6 }}
              className="group relative h-full rounded-3xl p-[1.5px]
                         bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
            >
              {/* Glass Card */}
              <div className="relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-center backdrop-blur-xl sm:p-5">

                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                {/* Icon */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 mb-4 h-11 w-11 sm:h-12 sm:w-12"
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
