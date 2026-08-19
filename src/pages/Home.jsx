import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Code2, MapPin } from "lucide-react";

import useMediaQuery from "../hooks/useMediaQuery";

const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact,
  }))
);

const AboutSection = lazy(() => import("./About"));
const ExperienceSection = lazy(() => import("./Experience"));
const SkillSection = lazy(() => import("./Skill"));
const PortfolioSection = lazy(() => import("./Portfolio"));
const CertificateSection = lazy(() => import("./Certificate"));
const ContactSection = lazy(() => import("./Contact"));

const homeSections = [
  { id: "about", Component: AboutSection },
  { id: "experience", Component: ExperienceSection },
  { id: "skills", Component: SkillSection },
  { id: "projects", Component: PortfolioSection },
  { id: "certificates", Component: CertificateSection },
  { id: "contact", Component: ContactSection },
];

function HomeSectionFallback() {
  return (
    <div className="flex min-h-64 items-center justify-center" aria-hidden="true">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300" />
    </div>
  );
}

function DeveloperVisualFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      <div className="absolute h-64 w-64 rounded-full border border-violet-400/15" />
      <div className="absolute h-48 w-48 rounded-full border border-cyan-300/15" />
      <div className="absolute h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />

      <div className="relative z-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/25 bg-white/[0.07] text-cyan-300 shadow-[0_0_45px_rgba(34,211,238,0.18)]">
          <Code2 size={38} strokeWidth={1.7} />
        </div>
        <p className="mt-6 font-serif text-xl font-bold text-white sm:text-2xl">
          Building for every screen
        </p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-400">
          Fast interfaces, dependable APIs and thoughtful user experiences.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const cursorRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const showLottie = useMediaQuery(
    "(min-width: 900px) and (hover: hover) and (pointer: fine)"
  );

  const scrollToSection = (sectionId, fallbackPath) => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    const section = document.getElementById(sectionId);

    if (section) section.scrollIntoView({ behavior, block: "start" });
    else navigate(fallbackPath);
  };

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!pointerQuery.matches) return undefined;

    let animationFrame;

    const moveCursor = (event) => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${event.clientX - 144}px, ${event.clientY - 144}px, 0)`;
        }
      });
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return (
    <>
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-transparent text-white">
      <div
        ref={cursorRef}
        className="cursor-glow pointer-events-none fixed left-0 top-0 z-40 h-72 w-72 rounded-full bg-gradient-to-r from-cyan-500/25 via-purple-500/25 to-pink-500/25 blur-3xl will-change-transform"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-slate-950/25" />

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-20 hidden h-60 w-60 rounded-full bg-purple-600/20 blur-3xl md:block"
        aria-hidden="true"
      />

      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 right-0 hidden h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl md:block"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-28 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="min-w-0 text-center lg:text-left"
        >
          <p className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-center text-xs font-semibold leading-5 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:px-5 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
            Open to software engineering opportunities
          </p>

          <h1 className="mt-7 text-[clamp(2.65rem,12vw,4rem)] font-black leading-[1.05] tracking-[-0.035em] sm:mt-8 sm:text-6xl xl:text-7xl">
            <span className="block text-slate-100">Full Stack</span>
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Developer
            </span>
          </h1>

          <p className="mt-5 font-serif text-lg text-slate-300 sm:text-xl md:text-2xl">
            Reliable products, from interface to API
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
            I build responsive web products with React, Node.js and MongoDB,
            combining thoughtful interfaces with dependable backend systems.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">
            {["React", "JavaScript", "Node.js", "Express.js", "MongoDB"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-semibold text-slate-200 backdrop-blur-lg transition hover:border-cyan-300/50 hover:text-cyan-200 sm:px-4 sm:text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("portfolio", "/portfolio")}
              className="w-full rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px] sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 font-bold text-white">
                View Projects
                <ArrowUpRight size={18} />
              </span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact", "/contact")}
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-200 sm:w-auto"
            >
              Let&apos;s Connect
            </motion.button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-400 sm:text-sm lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-cyan-300" />
              Bhopal, India
            </span>
            <span className="inline-flex items-center gap-2 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              Available for opportunities
            </span>
          </div>

          <div className="mt-8 flex justify-center gap-3 sm:gap-4 lg:justify-start">
            {[
              {
                name: "GitHub",
                icon: <FaGithub size={21} />,
                link: "https://github.com/amanpatel8982",
              },
              {
                name: "LinkedIn",
                icon: <FaLinkedin size={21} />,
                link: "https://www.linkedin.com/in/aman-patel-9bbb5427b/",
              },
              {
                name: "Instagram",
                icon: <FaInstagram size={21} />,
                link: "https://www.instagram.com/amanpatel772481/?next=%2F",
              },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.name}`}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-200 backdrop-blur-xl transition hover:border-cyan-300/50 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="flex min-w-0 justify-center"
        >
          <button
            type="button"
            className={`flip-card relative aspect-[5/6] w-full max-w-[430px] cursor-pointer select-none ${
              isFlipped ? "flipped" : ""
            }`}
            onClick={() => setIsFlipped((current) => !current)}
            aria-label={
              isFlipped
                ? "Show developer illustration"
                : "Show Aman Patel profile image"
            }
            aria-pressed={isFlipped}
          >
            <span className="flip-card-inner block">
              <span className="flip-card-front block border border-white/10 bg-white/10 backdrop-blur-xl">
                <span className="absolute left-0 right-0 top-5 z-20 text-center font-serif text-xs text-cyan-200 sm:text-sm">
                  Hover or tap to explore
                </span>

                {showLottie ? (
                  <>
                    <DeveloperVisualFallback />
                    <Suspense fallback={null}>
                      <DotLottieReact
                        className="absolute inset-0 z-10 h-full w-full"
                        src="https://lottie.host/e9a723c4-74bb-4751-bf98-c9111379a1ed/3XV0yDYupT.lottie"
                        loop
                        autoplay
                      />
                    </Suspense>
                  </>
                ) : (
                  <DeveloperVisualFallback />
                )}
              </span>

              <span className="flip-card-back block border border-white/10 bg-slate-950 backdrop-blur-xl">
                <img
                  src="/optimized/aman-profile.jpg"
                  alt="Aman Patel"
                  width="900"
                  height="963"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>

      <div className="relative z-10 border-t border-white/5">
        {homeSections.map(({ id, Component }) => (
          <Suspense key={id} fallback={<HomeSectionFallback />}>
            <Component embedded />
          </Suspense>
        ))}
      </div>
    </>
  );
}
