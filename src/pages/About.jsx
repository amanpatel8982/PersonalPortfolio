import { FiDownload } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GraduationCap, BookOpen, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About({ embedded = false }) {
  const navigate = useNavigate();
  const HeadingTag = embedded ? "h2" : "h1";

  const education = [
    {
      icon: GraduationCap,
      title: "Computer Science Engineering",
      text: "AIML specialization with strong interest in full-stack development.",
    },
    {
      icon: BookOpen,
      title: "Full Stack Development",
      text: "React, Node.js, Express.js, MongoDB, REST APIs and real-world projects.",
    },
    {
      icon: Award,
      title: "Career Goal",
      text: "Focused on becoming a professional developer and growing towards AI/Data Science.",
    },
  ];

  return (
    <section
      id="about"
      className="page-section relative bg-transparent text-white"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:text-sm">
            <Sparkles size={16} />
            My Journey
          </p>

          <HeadingTag className="font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Me
            </span>
          </HeadingTag>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 md:p-10"
        >
          <div className="mx-auto max-w-4xl space-y-4 text-center text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">
            <p>
              I am <span className="font-bold text-white">Aman Patel</span>, a
              Computer Science engineer (AIML specialization) and Full Stack
              Developer. I design and build responsive, accessible web
              applications using React and Tailwind CSS, and develop scalable
              backend services with Node.js, Express and MongoDB.
            </p>
            <p>
              My approach emphasizes clean, maintainable code, pragmatic API
              design (RESTful services), and sound database modelling across
              MongoDB and MySQL. I have hands-on experience with authentication
              (JWT, OAuth), real-time features (Socket.IO), and deployment
              workflows using Git, GitHub and Netlify.
            </p>
            <p>
              I enjoy solving problems, building production-ready features, and
              learning data-driven techniques. I am actively seeking
              opportunities to contribute to impactful projects and expand my
              expertise in AI and data systems.
            </p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Aman-Resume.pdf"
              className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3 font-bold text-white">
                <FiDownload />
                Download Resume
              </span>
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                embedded
                  ? document
                      .getElementById("portfolio")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  : navigate("/portfolio")
              }
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-200 sm:w-auto"
            >
              <BiCodeAlt />
              View Projects
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.18 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <Icon size={30} />
                </div>

                <h3 className="relative z-10 mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="relative z-10 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
