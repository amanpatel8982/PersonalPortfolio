import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Certificate from "./Certificate";
import { useNavigate } from "react-router-dom";
import Experience from "./Experience";

export default function Home() {
  const navigate = useNavigate();
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#030712] text-white cursor-none">
      {/* Cursor Glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl md:block"
      />

      {/* Global Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]" />
      <div className="absolute inset-0 opacity-25 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      {/* Moving Stars */}
      <div className="stars-layer stars-small" />
      <div className="stars-layer stars-medium" />
      <div className="stars-layer stars-large" />

      {/* Floating Glow Blobs */}
      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-28 h-56 w-56 rounded-full bg-purple-600/25 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -70, 0], y: [0, 70, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-6 lg:grid-cols-2 lg:px-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <motion.p
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:text-sm"
            >
              🚀 Ready to Innovate
            </motion.p>

            <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl xl:text-7xl">
              <span className="block text-slate-100">Full Stack</span>
              <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
                Developer
              </span>
            </h1>

            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-5 font-serif text-lg text-slate-300 sm:text-xl md:text-2xl"
            >
              Computer Science Engg. - AIML
            </motion.p>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg lg:mx-0">
              Enhancing digital experiences that are smooth, scalable, modern,
              and made to impress with premium UI and powerful backend logic.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {["React", "JavaScript", "Node.js", "Express.js", "MongoDB"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-200 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] sm:text-sm"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/portfolio")}
                className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px]"
              >
                <span className="block rounded-2xl bg-slate-950 px-7 py-3 font-bold text-white">
                  View Projects
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
                className="rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-200"
              >
                Contact Me
              </motion.button>
            </div>

            <div className="mt-10 flex justify-center gap-5 lg:justify-start">
              {[
                {
                  icon: <FaGithub size={22} />,
                  link: "https://github.com/amanpatel8982",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  link: "https://www.linkedin.com/in/aman-patel-9bbb5427b/",
                },
                {
                  icon: <FaInstagram size={22} />,
                  link: "https://www.instagram.com/amanpatel772481/?next=%2F",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
                  className="rounded-full border border-white/10 bg-white/10 p-4 text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[520px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30 blur-2xl" />

              <div className="flip-card relative h-[360px] w-full sm:h-[430px] md:h-[520px]">
                <div className="flip-card-inner">
                  <div className="flip-card-front border border-white/10 bg-white/10 backdrop-blur-xl">
                    <p className="pt-5 text-center font-serif text-sm text-cyan-200 sm:text-base">
                      Hover me ✨
                    </p>

                    <DotLottieReact
                      className="h-full w-full"
                      src="https://lottie.host/e9a723c4-74bb-4751-bf98-c9111379a1ed/3XV0yDYupT.lottie"
                      loop
                      autoplay
                    />
                  </div>

                  <div className="flip-card-back border border-white/10 bg-white/10 backdrop-blur-xl">
                    <img
                      src="Aman2.jpg"
                      alt="Aman Patel"
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <About />
        <Experience />
        <Skill />
        <Portfolio />
        <Certificate />
        <Contact />
      </div>

      <style>{`
        .stars-layer {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          pointer-events: none;
        }

        .stars-small {
          background-image:
            radial-gradient(#ffffff 1px, transparent 1px),
            radial-gradient(#67e8f9 1px, transparent 1px);
          background-size: 80px 80px, 130px 130px;
          animation: moveStars 55s linear infinite;
          opacity: 0.35;
        }

        .stars-medium {
          background-image:
            radial-gradient(#c084fc 1.4px, transparent 1.4px),
            radial-gradient(#ffffff 1.2px, transparent 1.2px);
          background-size: 150px 150px, 220px 220px;
          animation: moveStars 85s linear infinite reverse;
          opacity: 0.28;
        }

        .stars-large {
          background-image:
            radial-gradient(#22d3ee 2px, transparent 2px),
            radial-gradient(#f0abfc 1.7px, transparent 1.7px);
          background-size: 260px 260px, 310px 310px;
          animation: moveStars 120s linear infinite;
          opacity: 0.18;
        }

        @keyframes moveStars {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 900px 900px, -700px 700px;
          }
        }

        .flip-card {
          perspective: 1200px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.9s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 1.5rem;
          backface-visibility: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        @media (max-width: 768px) {
          .flip-card:hover .flip-card-inner {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}