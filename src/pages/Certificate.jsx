import { useState } from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // ✅ Animation function
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    },
  });

  const directions = ["left", "right", "up", "down"];

  // ✅ Certificates List
  const certificates = [
    "/cert1.png",
    "/cert2.png",
    "/cert3.png",
    "/cert4.png",
    "/cert5.png",
    "/cert6.png",
    "/cert7.png",
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", 0.2)}
        className="text-3xl md:text-5xl font-bold font-serif text-center mt-8 text-purple-400 flex justify-center items-center gap-2"
      >
        <Award className="w-8 h-8" /> Certificates & Achievements
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={fadeIn("up", 0.4)}
        className="text-center font-serif text-gray-400 mt-6 text-sm md:text-base"
      >
        A showcase of my certifications and achievements earned during my
        learning journey.
      </motion.p>

      {/* Grid */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.slice(0, visibleCount).map((c, i) => (
          <motion.div
            key={i}
            variants={fadeIn(directions[i % directions.length], i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => setSelectedCert(c)}
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

      {/* Load More Button */}
      {visibleCount < certificates.length && (
        <div className="text-center mt-8">
          <motion.button
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setVisibleCount(visibleCount + 3)}
            className="px-6 py-2 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700 transition"
          >
            Load More ↓
          </motion.button>
        </div>
      )}

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-900 p-4 rounded-xl max-w-3xl w-full"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer"
            >
              ✕
            </button>
            <img
              src={selectedCert}
              alt="Certificate Full"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
