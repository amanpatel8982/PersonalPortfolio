import { useState } from "react";
import { Code, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null); // modal ke liye

  // Animation variants (har ek direction alag)
  const fadeIn = (direction = "up", delay = 0) => {
    return {
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
    };
  };

  // Har card ke liye direction decide karna
  const directions = ["left", "right", "up", "down"];

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-5xl font-bold font-serif text-center mt-20 text-purple-400"
      >
        Portfolio Showcase
      </motion.h2>

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
        {[
          { id: "projects", label: "Projects", icon: <Code /> },
          { id: "certificates", label: "Certificates", icon: <Award /> },
        ].map((tab) => (
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

      {/* Content */}
      <div className="mt-12">
        {/* Projects Section */}
        {activeTab === "projects" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Event Planner",
                desc: "Real-time mock interviews with AI.",
                img: "/project1.jpg",
              },
              {
                title: "Chatting App",
                desc: "A social app to connect instantly.",
                img: "/project2.jpg",
              },
              {
                title: "MyHealthFile",
                desc: "A video streaming app for entertainment.",
                img: "/project3.jpg",
              },
            ].map((p, i) => (
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
                    <a className="text-purple-400 hover:underline" href="#">
                      Live Demo
                    </a>
                    <a className="text-gray-300 hover:text-white" href="#">
                      Details →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Certificates Section */}
        {activeTab === "certificates" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/cert1.png", "/cert2.png", "/cert3.png"].map((c, i) => (
              <motion.div
                key={i}
                variants={fadeIn(directions[i % directions.length], i * 0.3)}
                initial="hidden"
                animate="show"
                onClick={() => setSelectedCert(c)} // click par modal open
                className="bg-gray-900 rounded-xl shadow-lg shadow-purple-500/20 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={c}
                  alt="Certificate"
                  className="w-full h-48 md:h-56 object-contain"
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-4 rounded-xl max-w-3xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded-md text-white"
            >
              ✕
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
