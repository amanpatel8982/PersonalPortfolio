import { useState } from "react";
import {
  Code,
  Database,
  Sparkles,
  ExternalLink,
  Eye,
  X,
  PlayCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedProject, setSelectedProject] = useState(null);

  const frontendProjects = [
    {
      title: "Currency Converter",
      desc: "Real-time currency conversion with live exchange rates.",
      img: "/CURR.png",
      details:
        "This Currency Converter app allows users to convert amounts between different currencies in real time with a clean and simple interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/CurrencyConvertor/",
    },
    {
      title: "Furni",
      desc: "A furniture marketplace UI with clean layout.",
      img: "/furni.png",
      details:
        "Furniture Marketplace UI built using HTML and CSS. It focuses on clean product presentation and responsive layout.",
      tech: ["HTML", "CSS"],
      demo: "https://github.com/amanpatel8982/FURNI.git",
    },
    {
      title: "Rock Paper Scissors",
      desc: "Interactive browser game with JavaScript logic. ",
      img: "/rock.png",
      details:
        "Classic Rock Paper Scissors game with interactive UI, score logic and smooth browser-based gameplay.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
    {
      title: "Job finder",
      desc: "A job search platform with modern UI and responsive design.",
      img: "/front1.png",
      details:
        "Job finder app to help users search and apply for jobs efficiently.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
    {
      title: "Food Mart",
      desc: "A food delivery website with vibrant design and user-friendly interface.",
      img: "/front2.png",
      details:
        "Food Mart is a modern food delivery platform with a vibrant design and user-friendly interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
    {
      title: "Calculator",
      desc: "A functional calculator with a sleek design and smooth user experience.",
      img: "/front3.png",
      details:
        "A modern calculator with a sleek design and smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
    {
      title: "OTP Generator",
      desc: "A secure one-time password generator for authentication purposes.",
      img: "/front4.png",
      details:
        "A secure OTP generator for authentication purposes with a clean and simple interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
    {
      title: "TO-DO-LIST",
      desc: "A simple to-do list application with task management features.",
      img: "/front5.png",
      details:
        "A clean and intuitive to-do list application for managing tasks and improving productivity.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
  ];

  const backendProjects = [
    {
      title: "Event Planner",
      desc: "AI based event scheduling platform.",
      img: "/project1.jpg",
      details:
        "Event Planner is a smart scheduling platform where users can manage events, plan schedules and handle event-related workflows.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://event-planner-by-aman0.netlify.app/",
      video: "/event.mp4",
    },
    {
      title: "Chat App",
      desc: "Real-time chat application with Socket.IO.",
      img: "/project2.jpg",
      details:
        "Real-time chat application using Socket.IO, JWT authentication and Express backend for smooth live communication.",
      tech: ["React", "Express", "JWT", "Socket.IO"],
      demo: "#",
      video: "/chat.mp4",
    },
    {
      title: "MyHealthFile",
      desc: "Digital medical record management system.",
      img: "/project3.jpg",
      details:
        "Healthcare platform for managing medical records, patient information and health-related data through modern dashboards.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://my-health-file-by-aman.netlify.app/",
    },
    {
      title: "AI-Invoice",
      desc: "Generate professional invoices in seconds.",
      img: "/project4.png",
      details:
        "AI-Invoice helps users generate ready-to-send invoices instantly with a professional layout and fast workflow.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://ai-invoice-by-aman.netlify.app/",
    },
     {
      title: "Health Nexus",
      desc: "AI-powered fitness and health tracking platform with personalized insights and recommendations.",
      img: "/project5.png",
      details:
        "Health Nexus provides personalized fitness and health tracking with AI-driven insights and recommendations.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://vermillion-griffin-998a4f.netlify.app/",
    },
  ];

  const tabs = [
    { id: "frontend", label: "Front-End", icon: Code },
    { id: "backend", label: "Back-End", icon: Database },
  ];

  const displayedProjects =
    activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section
      id="portfolio"
      className="relative min-h-screen overflow-hidden bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-24 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -90, 0], y: [0, 55, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:text-sm">
            <Sparkles size={16} />
            My Work Showcase
          </p>

          <h2 className="font-serif text-4xl font-black sm:text-5xl md:text-6xl">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Showcase
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore my frontend and full-stack projects built with modern UI,
            responsive design, backend logic and real-world problem solving.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Frontend", value: frontendProjects.length },
            { label: "Full Stack", value: backendProjects.length },
            { label: "Total Projects", value: frontendProjects.length + backendProjects.length },
            { label: "Tech Stack", value: "10+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black text-cyan-300 sm:text-3xl">
                {stat.value}
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 flex w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-xl"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3"
          >
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden sm:h-60">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {project.video && (
                      <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-bold text-cyan-200 backdrop-blur-xl">
                        <PlayCircle size={14} />
                        Video
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-1 flex-col p-5">
                    <h3 className="text-xl font-black text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
                          project.demo === "#"
                            ? "pointer-events-none bg-white/5 text-slate-500"
                            : "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                        }`}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
                      >
                        <Eye size={16} />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:p-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-red-500 p-2 text-white shadow-lg transition hover:bg-red-600"
              >
                <X size={20} />
              </button>

              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  autoPlay
                  muted
                  className="h-60 w-full rounded-2xl object-cover sm:h-80"
                />
              ) : (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="h-60 w-full rounded-2xl object-cover sm:h-80"
                />
              )}

              <div className="mt-6">
                <h2 className="text-2xl font-black text-cyan-300 sm:text-3xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {selectedProject.details}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-bold text-fuchsia-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition ${
                    selectedProject.demo === "#"
                      ? "pointer-events-none bg-white/5 text-slate-500"
                      : "bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white"
                  }`}
                >
                  <ExternalLink size={18} />
                  Open Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}