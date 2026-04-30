import { useState } from "react";
import { Award, Sparkles, X, Eye, Images } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const certificates = [
    { img: "/cert66.jpeg", title: "Certificate 01" },
    { img: "/cert2.png", title: "Certificate 02" },
    { img: "/cert1.png", title: "Certificate 03" },
    { img: "/cert4.png", title: "Certificate 04" },
    { img: "/cert11.jpeg", title: "Certificate 05" },
    { img: "/cert22.jpeg", title: "Certificate 06" },
    { img: "/cert33.jpeg", title: "Certificate 07" },
    { img: "/cert44.jpeg", title: "Certificate 08" },
    { img: "/cert55.jpeg", title: "Certificate 09" },
     { img: "/cert3.png", title: "Certificate 10" },
   
  ];

  return (
    <section
      id="certificate"
      className="relative min-h-screen overflow-hidden bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      {/* Glow blobs */}
      <motion.div
        animate={{ x: [0, 90, 0], y: [0, -45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"
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
            Achievements Gallery
          </p>

          <h2 className="flex flex-wrap items-center justify-center gap-3 font-serif text-4xl font-black sm:text-5xl md:text-6xl">
            <Award className="h-9 w-9 text-cyan-300 sm:h-11 sm:w-11" />
            Certificates{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Showcase
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A premium showcase of my certifications, achievements and learning
            journey — proof of consistency, practice and growth.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: "Total Certificates", value: certificates.length },
            { label: "Visible Now", value: Math.min(visibleCount, certificates.length) },
            { label: "Learning Proof", value: "100%" },
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

        {/* Certificate Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.slice(0, visibleCount).map((cert, i) => (
            <motion.div
              key={cert.img}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950/90 p-4 backdrop-blur-2xl">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative h-52 overflow-hidden rounded-2xl bg-white/5 sm:h-60 md:h-64">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/45">
                    <span className="scale-90 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100 rounded-full border border-cyan-300/30 bg-slate-950/80 px-5 py-3 text-sm font-bold text-cyan-200 backdrop-blur-xl flex items-center gap-2">
                      <Eye size={17} />
                      View Certificate
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mt-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-white">{cert.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Click to preview full certificate
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Images size={18} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More / Show Less */}
        <div className="mt-10 flex justify-center">
          {visibleCount < certificates.length ? (
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px]"
            >
              <span className="block rounded-2xl bg-slate-950 px-8 py-3 font-bold text-white">
                Load More ↓
              </span>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setVisibleCount(6)}
              className="rounded-2xl border border-white/15 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Show Less ↑
            </motion.button>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:p-6"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-red-500 p-2 text-white shadow-lg transition hover:bg-red-600"
              >
                <X size={20} />
              </button>

              <div className="rounded-2xl bg-white/5 p-3">
                <img
                  src={selectedCert.img}
                  alt={selectedCert.title}
                  className="max-h-[78vh] w-full rounded-xl object-contain"
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-cyan-300 sm:text-2xl">
                {selectedCert.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}