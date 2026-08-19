import { useCallback, useState } from "react";
import {
  Award,
  Sparkles,
  X,
  Eye,
  Images,
  FileText,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useDialog from "../hooks/useDialog";
import useMediaQuery from "../hooks/useMediaQuery";

const certificates = [
  { source: "/cert66.jpeg", thumbnail: "/optimized/cert66.jpg", title: "Certificate 01" },
  { source: "/cert2.png", thumbnail: "/optimized/cert2.jpg", title: "Certificate 02" },
  { source: "/cert1.png", thumbnail: "/optimized/cert1.jpg", title: "Certificate 03" },
  { source: "/cert4.png", thumbnail: "/optimized/cert4.jpg", title: "Certificate 04" },
  { source: "/cert11.jpeg", thumbnail: "/optimized/cert11.jpg", title: "Certificate 05" },
  { source: "/cert22.jpeg", thumbnail: "/optimized/cert22.jpg", title: "Certificate 06" },
  { source: "/cert33.jpeg", thumbnail: "/optimized/cert33.jpg", title: "Certificate 07" },
  { source: "/cert44.jpeg", thumbnail: "/optimized/cert44.jpg", title: "Certificate 08" },
  { source: "/cert55.jpeg", thumbnail: "/optimized/cert55.jpg", title: "Certificate 09" },
  { source: "/cert3.png", thumbnail: "/optimized/cert3.jpg", title: "Certificate 10" },
  { source: "/cert20.pdf", title: "Certificate 11", type: "pdf" },
];

export default function Certificate({ embedded = false }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const HeadingTag = embedded ? "h2" : "h1";
  const showPdfPreview = useMediaQuery("(min-width: 640px)");
  const closeCertificate = useCallback(() => setSelectedCert(null), []);
  const { dialogRef, closeButtonRef } = useDialog(
    Boolean(selectedCert),
    closeCertificate
  );

  return (
    <section
      id="certificate"
      className="page-section relative bg-transparent text-white"
    >
      {!embedded && (
        <>
          <motion.div
            animate={{ x: [0, 90, 0], y: [0, -45, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-0 top-24 hidden h-64 w-64 rounded-full bg-purple-600/20 blur-3xl md:block"
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
            Achievements Gallery
          </p>

          <HeadingTag className="flex flex-wrap items-center justify-center gap-2 font-serif text-4xl font-black leading-tight sm:gap-3 sm:text-5xl md:text-6xl">
            <Award className="h-9 w-9 text-cyan-300 sm:h-11 sm:w-11" />
            Certificates{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Showcase
            </span>
          </HeadingTag>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A premium showcase of my certifications, achievements and learning
            journey — proof of consistency, practice and growth.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
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
              className="last:col-span-2 rounded-2xl border border-white/10 bg-white/10 p-3 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:last:col-span-1 sm:p-4"
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
        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {certificates.slice(0, visibleCount).map((cert, i) => (
            <motion.button
              key={cert.source}
              type="button"
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              aria-label={`Preview ${cert.title}`}
              className="group relative w-full cursor-pointer overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] text-left shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950/90 p-4 backdrop-blur-2xl">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative h-52 overflow-hidden rounded-2xl bg-white/5 sm:h-60 md:h-64">
                  {cert.type === "pdf" ? (
                    <div className="flex h-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-fuchsia-500/10 to-cyan-400/10 p-5 text-center">
                      <FileText size={58} className="text-cyan-300" strokeWidth={1.5} />
                      <span className="font-semibold text-slate-200">PDF certificate</span>
                      <span className="text-xs text-slate-400">Opens only when requested</span>
                    </div>
                  ) : (
                    <img
                      src={cert.thumbnail}
                      alt={cert.title}
                      width="720"
                      height="520"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                    />
                  )}

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
            </motion.button>
          ))}
        </div>

        {/* Load More / Show Less */}
        <div className="mt-10 flex justify-center">
          {visibleCount < certificates.length ? (
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + 3, certificates.length))
              }
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
              type="button"
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
            onClick={closeCertificate}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
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
              aria-labelledby="certificate-dialog-title"
              tabIndex={-1}
              className="modal-scroll relative w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:rounded-[2rem] sm:p-6"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCertificate}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-lg ring-1 ring-white/15 transition hover:bg-red-500 sm:right-4 sm:top-4"
              >
                <X size={20} />
              </button>

              {selectedCert.type === "pdf" ? (
                <div className="rounded-2xl bg-white/5 p-3 pt-16 sm:pt-3">
                  {showPdfPreview ? (
                    <iframe
                      src={selectedCert.source}
                      title={`${selectedCert.title} PDF preview`}
                      tabIndex={-1}
                      className="h-[65dvh] w-full rounded-xl bg-white"
                    />
                  ) : (
                    <div className="flex min-h-56 flex-col items-center justify-center gap-4 px-4 text-center">
                      <FileText size={58} className="text-cyan-300" />
                      <p className="text-sm leading-6 text-slate-300">
                        Open the PDF in your browser for the clearest mobile view.
                      </p>
                    </div>
                  )}
                  <a
                    href={selectedCert.source}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-700 to-cyan-700 px-5 py-3 font-bold text-white"
                  >
                    <ExternalLink size={18} />
                    Open PDF
                  </a>
                </div>
              ) : (
                <div className="rounded-2xl bg-white/5 p-3 pt-16 sm:pt-3">
                  <img
                    src={selectedCert.source}
                    alt={selectedCert.title}
                    decoding="async"
                    className="max-h-[72dvh] w-full rounded-xl object-contain"
                  />
                </div>
              )}

              <h2
                id="certificate-dialog-title"
                className="mt-5 pr-12 text-xl font-black text-cyan-300 sm:text-2xl"
              >
                {selectedCert.title}
              </h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
