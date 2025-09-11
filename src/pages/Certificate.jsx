import { useState } from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

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
      transition: { delay, duration: 0.8, ease: "easeOut" },
    },
  });

  const directions = ["left", "right", "up", "down"];

  return (
    <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-5xl font-bold font-serif text-center mt-20 text-purple-400 flex justify-center items-center gap-2"
      >
        <Award className="w-8 h-8" /> Certificates & Achievements
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        className="text-center font-serif text-gray-400 mt-6 text-sm md:text-base"
      >
        A showcase of my certifications and achievements earned during my
        learning journey.
      </motion.p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["/cert1.png", "/cert2.png", "/cert3.png"].map((c, i) => (
          <motion.div
            key={i}
            variants={fadeIn(directions[i % directions.length], i * 0.3)}
            initial="hidden"
            animate="show"
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

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-4 rounded-xl max-w-3xl w-full">
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
          </div>
        </div>
      )}
    </section>
  );
}
