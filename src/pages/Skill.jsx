import { motion } from "framer-motion";
import { Sparkles, Code2, Database, Wrench, Code } from "lucide-react";

const skillsCategories = [
  {
    category: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: "/javascript.svg", level: 92 },
      { name: "Java (Core)", icon: null, level: 80 },
      { name: "Python (Basic)", icon: null, level: 75 },
      { name: "SQL", icon: null, level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: "/html.svg", level: 100 },
      { name: "CSS3", icon: "/css.svg", level: 95 },
      { name: "React.js", icon: "/react.svg", level: 90 },
      { name: "Next.js", icon: null, level: 85 },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg", level: 92 },
      { name: "Bootstrap", icon: "/bt.svg", level: 85 },
      { name: "Responsive Design", icon: null, level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: Wrench,
    skills: [
      { name: "Node.js", icon: "/node.svg", level: 85 },
      { name: "Express.js", icon: "/express.svg", level: 82 },
      { name: "REST APIs", icon: null, level: 88 },
      { name: "Socket.IO", icon: null, level: 80 },
      { name: "JWT / OAuth", icon: "/jwt.svg", level: 82 },
      { name: "Authentication", icon: null, level: 85 },
    ],
  },
  {
    category: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: "/mongodb.svg", level: 85 },
      { name: "MySQL", icon: null, level: 80 },
      { name: "Database Design", icon: null, level: 82 },
      { name: "Git / GitHub", icon: null, level: 90 },
      { name: "Docker (Basic)", icon: null, level: 75 },
      { name: "VS Code", icon: null, level: 95 },
    ],
  },
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

        {/* Skills By Category */}
        <div className="space-y-14">
          {skillsCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20">
                    <CategoryIcon size={24} className="text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {category.category}
                  </h3>
                </div>

                {/* Category Skills Grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (catIdx * 0.1) + (i * 0.06) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.08, y: -8 }}
                      className="group relative h-full rounded-2xl p-[1.5px]
                                 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400"
                    >
                      {/* Glass Card */}
                      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-4 text-center backdrop-blur-xl sm:p-5 transition-all duration-300">

                        {/* Shine effect */}
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                        {/* Icon */}
                        {skill.icon ? (
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            width="48"
                            height="48"
                            loading="lazy"
                            decoding="async"
                            className="relative z-10 mb-3 h-10 w-10 sm:h-12 sm:w-12 object-contain"
                          />
                        ) : (
                          <div className="relative z-10 mb-3 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 rounded-lg">
                            <Code size={24} className="text-cyan-300" />
                          </div>
                        )}

                        {/* Name */}
                        <h4 className="text-xs sm:text-sm md:text-base font-semibold relative z-10 line-clamp-2">
                          {skill.name}
                        </h4>

                        {/* Percentage */}
                        <span className="text-xs text-cyan-300 mb-2 relative z-10 font-medium">
                          {skill.level}%
                        </span>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-600/50 h-1.5 rounded-full overflow-hidden relative z-10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
