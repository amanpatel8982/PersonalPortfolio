import { useState } from "react";
import { Code, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Animation variants
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  const directions = ["left", "right", "up", "down"];

  // ✅ Frontend Projects
  const frontendProjects = [
    {
      title: "Event Planner",
      desc: "Real-time event scheduling and management with AI integration.",
      img: "/project1.jpg",
      details:
        "This Event Planner app allows users to create, update, and manage events in real time. It uses AI for smart scheduling, conflict detection, and optimized reminders. Built using React, Node.js, and MongoDB.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express.js"],
      demo: "#",
      video: "/event.mp4",
    },
    {
      title: "Chatting App",
      desc: "A real-time chat application with private rooms.",
      img: "/project2.jpg",
      details:
        "This Chatting App enables instant messaging with real-time updates using Socket.IO. Features include group chats, private rooms, and media sharing. Backend is powered by Express.js with JWT authentication.",
      tech: ["React", "Express.js", "Socket.IO", "JWT"],
      demo: "#",
      video: "/chat.mp4",
    },
    {
      title: "MyHealthFile",
      desc: "Digital health records management platform.",
      img: "/project3.jpg",
      details:
        "MyHealthFile is a secure medical platform where patients can store, manage, and share their health records with doctors. Includes role-based dashboards, appointment scheduling, and report uploads.",
      tech: ["React", "Django", "SQLite", "TailwindCSS"],
      demo: "#",
      video: "/myhealth.gif",
    },
  ];

  // ✅ Backend Projects
  const backendProjects = [
     {
      title: "Event Planner",
      desc: "Real-time event scheduling and management with AI integration.",
      img: "/project1.jpg",
      details:
        "This Event Planner app allows users to create, update, and manage events in real time. It uses AI for smart scheduling, conflict detection, and optimized reminders. Built using React, Node.js, and MongoDB.",
      tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "Express.js"],
      demo: "#",
      video: "/event.mp4",
    },
    {
      title: "Chatting App",
      desc: "A real-time chat application with private rooms.",
      img: "/project2.jpg",
      details:
        "This Chatting App enables instant messaging with real-time updates using Socket.IO. Features include group chats, private rooms, and media sharing. Backend is powered by Express.js with JWT authentication.",
      tech: ["React", "Express.js", "Socket.IO", "JWT"],
      demo: "#",
      video: "/chat.mp4",
    },
    {
      title: "MyHealthFile",
      desc: "Digital health records management platform.",
      img: "/project3.jpg",
      details:
        "MyHealthFile is a secure medical platform where patients can store, manage, and share their health records with doctors. Includes role-based dashboards, appointment scheduling, and report uploads.",
      tech: ["React", "Django", "SQLite", "TailwindCSS"],
      demo: "#",
      video: "/myhealth.gif",
    },
  ];

  // ✅ Tabs
  const tabs = [
    { id: "frontend", label: "Front-End", icon: <Code /> },
    { id: "backend", label: "Back-End", icon: <Database /> },
  ];

  // ✅ Choose data based on active tab
  const displayedProjects =
    activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-5xl font-bold font-serif text-center mt-20 text-purple-400"
      >
        Portfolio Showcase
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        className="text-center font-serif text-gray-400 mt-6 text-sm md:text-base"
      >
        Explore my journey through projects, certifications, and technical
        expertise. Each section <br className="hidden md:block" /> represents a
        milestone in my continuous learning path.
      </motion.p>

      {/* Tabs */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8 bg-gray-800 p-2 rounded-xl"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 md:px-10 py-2 md:py-3 rounded-xl flex items-center gap-2 font-serif transition ${
              activeTab === tab.id
                ? "bg-purple-700 text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeIn(directions[i % directions.length], i * 0.3)}
            initial="hidden"
            animate="show"
            className="bg-gray-800 rounded-2xl shadow-lg shadow-purple-500/20 overflow-hidden"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 md:h-80 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-bold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
              <div className="flex gap-4 mt-4">
                <a
                  className="text-purple-400 hover:underline cursor-pointer"
                  href={p.demo}
                  target="_blank"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-6 rounded-xl max-w-4xl w-full shadow-xl shadow-purple-500/30 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer"
            >
              ✕
            </button>

            {/* Video or Image */}
            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                muted
                loop
                className="w-full h-72 md:h-96 object-cover rounded-lg"
              />
            ) : (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            {/* Details */}
            <h2 className="mt-4 text-2xl font-bold text-purple-400">
              {selectedProject.title}
            </h2>
            <p className="mt-2 text-gray-300">{selectedProject.details}</p>

            {/* Tech Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-700/40 rounded-lg text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Live Demo */}
            <div className="mt-6">
              <a
                href={selectedProject.demo}
                target="_blank"
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                🔗 Visit Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
