import { useCallback, useState } from "react";
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
import useDialog from "../hooks/useDialog";

export default function Portfolio({ embedded = false }) {
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedProject, setSelectedProject] = useState(null);
  const HeadingTag = embedded ? "h2" : "h1";
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const { dialogRef, closeButtonRef } = useDialog(
    Boolean(selectedProject),
    closeProject
  );

  const frontendProjects = [
    {
      title: "Currency Converter",
      desc: "Real-time currency conversion with live exchange rates and clean interface.",
      img: "/CURR.png",
      details:
        "A fully functional Currency Converter application that fetches real-time exchange rates from a public API. Features include multi-currency support, instant conversion, and a user-friendly interface built with vanilla JavaScript.",
      features: ["Live Exchange Rates", "Multi-Currency Support", "Instant Conversion", "Responsive Design"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/CurrencyConvertor/",
    },
    {
      title: "Furni - Furniture Store",
      desc: "Modern furniture marketplace UI with intuitive navigation and product showcase.",
      img: "/furni.png",
      details:
        "A professional furniture marketplace UI designed with clean HTML and CSS. Focuses on excellent product presentation, responsive grid layouts, and a modern aesthetic that provides an engaging shopping experience.",
      features: ["Product Grid", "Category Navigation", "Responsive Layout", "Modern Design"],
      tech: ["HTML", "CSS"],
      demo: "https://github.com/amanpatel8982/FURNI.git",
    },
    {
      title: "Rock Paper Scissors Game",
      desc: "Interactive browser game with score tracking and smooth animations.",
      img: "/rock.png",
      details:
        "Classic Rock Paper Scissors game built with JavaScript featuring game logic, computer AI, score tracking, and dynamic UI updates. Provides smooth user experience with instant feedback.",
      features: ["Game Logic", "Score Tracking", "Computer AI", "Instant Feedback"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "Job Finder Portal",
      desc: "Job search platform with advanced filters and modern responsive design.",
      img: "/front1.png",
      details:
        "A comprehensive job search platform designed to help users discover and apply for jobs. Features include search functionality, job filters, and a clean, modern interface for optimal user experience.",
      features: ["Job Search", "Advanced Filters", "Job Details", "Application Tracking"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "Food Mart - Food Delivery",
      desc: "Vibrant food delivery platform with restaurant menu and ordering interface.",
      img: "/front2.png",
      details:
        "Modern food delivery website featuring restaurant listings, menu browsing, and seamless ordering interface. Built with responsive design principles for excellent mobile and desktop experience.",
      features: ["Restaurant Listings", "Menu Display", "Order System", "Responsive UI"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "Advanced Calculator",
      desc: "Feature-rich calculator with sleek design and smooth mathematical operations.",
      img: "/front3.png",
      details:
        "A fully functional calculator application with a modern, sleek interface. Supports basic and advanced mathematical operations with proper error handling and smooth user experience.",
      features: ["Basic Operations", "Advanced Functions", "Error Handling", "Modern UI"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "OTP Generator",
      desc: "Secure one-time password generator for authentication and verification purposes.",
      img: "/front4.png",
      details:
        "A secure OTP (One-Time Password) generator designed for authentication workflows. Generates unique, time-based OTPs with a clean interface and copy-to-clipboard functionality.",
      features: ["OTP Generation", "Copy to Clipboard", "Time-Based", "Secure"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
    {
      title: "TO-DO-LIST",
      desc: "Intuitive task management application with add, edit, and delete functionality.",
      img: "/front5.png",
      details:
        "A clean and intuitive to-do list application for managing daily tasks and improving productivity. Features include task creation, editing, deletion, and persistent local storage.",
      features: ["Task Management", "Add/Edit/Delete", "Local Storage", "Clean UI"],
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "#",
    },
  ];

  const backendProjects = [
    {
      title: "Event Planner",
      desc: "Smart event scheduling platform with AI-powered recommendations and real-time updates.",
      img: "/project1.jpg",
      details:
        "Event Planner is an intelligent scheduling platform that helps users manage events, plan schedules, and handle event-related workflows. Built with React frontend and Node.js/Express backend, featuring MongoDB database for persistent storage and real-time updates.",
      features: ["Event Management", "Smart Scheduling", "Real-time Updates", "User Dashboard", "Event Analytics"],
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://event-planner-by-aman0.netlify.app/",
      video: "/event.mp4",
    },
    {
      title: "Chat App - Real-time Messaging",
      desc: "Real-time chat application with Socket.IO, JWT authentication, and instant message delivery.",
      img: "/project2.jpg",
      details:
        "A full-featured real-time chat application built with React frontend and Express backend. Utilizes Socket.IO for instant message delivery, JWT authentication for secure user sessions, and provides a seamless communication experience.",
      features: ["Real-time Messaging", "User Authentication", "Online Status", "Message History", "Typing Indicators"],
      tech: ["React", "Express", "JWT", "Socket.IO"],
      demo: "#",
      video: "/chat.mp4",
    },
    {
      title: "MyHealthFile - Medical Records",
      desc: "Digital medical record management system for secure patient data storage and retrieval.",
      img: "/project3.jpg",
      details:
        "Healthcare platform designed for secure management of medical records and patient information. Features intuitive dashboards for health tracking, prescription management, and appointment scheduling. Built with React, Node.js, Express, and MongoDB for robust data handling.",
      features: ["Medical Records", "Prescription Management", "Appointment Booking", "Health Dashboard", "Data Security"],
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://my-health-file-by-aman.netlify.app/",
    },
    {
      title: "AI-Invoice - Invoice Generator",
      desc: "AI-powered invoice generation platform for creating professional invoices in seconds.",
      img: "/project4.png",
      details:
        "AI-Invoice streamlines invoice creation with intelligent templates and instant PDF generation. Users can create professional invoices, manage clients, track payments, and access invoice history. Built with React, Node.js, Express, and MongoDB backend.",
      features: ["Auto Invoice Generation", "Client Management", "Payment Tracking", "PDF Export", "Invoice Templates"],
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://ai-invoice-by-aman.netlify.app/",
    },
    {
      title: "Health Nexus - Fitness Tracker",
      desc: "AI-powered fitness and health tracking platform with personalized insights and wellness recommendations.",
      img: "/project5.png",
      details:
        "Health Nexus provides comprehensive fitness and health tracking with AI-driven personalized recommendations. Features include workout logging, nutrition tracking, progress analytics, and intelligent health insights. Built with React frontend and Node.js/MongoDB backend.",
      features: ["Workout Tracking", "Nutrition Logging", "AI Recommendations", "Progress Analytics", "Health Insights"],
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
      className="page-section relative bg-transparent text-white"
    >
      {!embedded && (
        <>
          <motion.div
            animate={{ x: [0, 90, 0], y: [0, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-0 top-24 hidden h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl md:block"
            aria-hidden="true"
          />

          <motion.div
            animate={{ x: [0, -90, 0], y: [0, 55, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl md:block"
            aria-hidden="true"
          />
        </>
      )}

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

          <HeadingTag className="font-serif text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Portfolio{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Showcase
            </span>
          </HeadingTag>

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
          role="group"
          aria-label="Project categories"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-fuchsia-700 via-violet-700 to-cyan-700 text-white shadow-[0_0_25px_rgba(34,211,238,0.2)]"
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
            className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-7 xl:grid-cols-3"
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
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950/90 backdrop-blur-2xl sm:min-h-[420px]">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={project.img}
                      alt={project.title}
                      width="960"
                      height="540"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
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

                    {project.features && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {project.features.slice(0, 2).map((feature) => (
                          <span
                            key={feature}
                            className="text-xs text-cyan-300 font-semibold"
                          >
                            • {feature}
                          </span>
                        ))}
                        {project.features.length > 2 && (
                          <span className="text-xs text-slate-500">
                            +{project.features.length - 2} more
                          </span>
                        )}
                      </div>
                    )}

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
                      {project.demo === "#" ? (
                        <span className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-bold text-slate-500">
                          <ExternalLink size={16} />
                          Demo Soon
                        </span>
                      ) : (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-700 to-cyan-700 px-4 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}

                      <button
                        type="button"
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
            onClick={closeProject}
          >
            <motion.div
              ref={dialogRef}
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              tabIndex={-1}
              className="modal-scroll relative w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:rounded-[2rem] sm:p-6"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProject}
                aria-label="Close project details"
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-lg ring-1 ring-white/15 transition hover:bg-red-500 sm:right-4 sm:top-4"
              >
                <X size={20} />
              </button>

              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  poster={selectedProject.img}
                  preload="metadata"
                  playsInline
                  className="aspect-video w-full rounded-2xl bg-black object-contain"
                />
              ) : (
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  width="1280"
                  height="720"
                  decoding="async"
                  className="aspect-video w-full rounded-2xl bg-slate-900 object-contain"
                />
              )}

              <div className="mt-6">
                <h2
                  id="project-dialog-title"
                  className="pr-12 text-2xl font-black text-cyan-300 sm:text-3xl"
                >
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {selectedProject.details}
                </p>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-white mb-3">Key Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features?.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

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

                {selectedProject.demo === "#" ? (
                  <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/5 px-5 py-3 font-bold text-slate-500">
                    <ExternalLink size={18} />
                    Demo coming soon
                  </span>
                ) : (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-700 to-cyan-700 px-5 py-3 font-bold text-white"
                  >
                    <ExternalLink size={18} />
                    Open Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
